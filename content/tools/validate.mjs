#!/usr/bin/env node
/**
 * Validates the content catalog against its contract (contract/), without the
 * engine. Run from the catalog root:  npm run validate
 *
 * Content is organized by language: <app>/<lang>/{site.md,home.md,pages/,diagrams/}
 * (languages in contract/languages.json; the default one is the source).
 *
 * Checks:
 * - Front matter of pages and site.md against the JSON Schemas.
 * - Translations: "translationOf" only outside the default language, pointing
 *   to an existing page; ui/<lang>.yaml has exactly the keys of the default one.
 * - Sections: "section:" only in a section's index.md; folders need index.md;
 *   at most one level of groups (section/group/page.md).
 * - Markdown only: no .mdx files, no <script>, <style>, <iframe>, inline event
 *   handlers or javascript: links.
 * - ::: blocks and widget names are known; :::diagram files exist (in the
 *   page's language or the default one).
 * - Images and internal links (/section/page) point to existing files.
 * - Blog posts (<app>/<lang>/bitacora/*.md): front matter, a category from
 *   site.md → blog.categories, cover image, the same body checks as pages.
 * - Network data (network/*.yaml) against its schemas, with unique ids and
 *   providers that reference existing networks and services.
 *
 * The engine runs the same checks, and more, when it builds the preview.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import Ajv2020 from 'ajv/dist/2020.js';
import { parse as parseYaml } from 'yaml';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const apps = ['site', 'docs'];
const contract = (name) => JSON.parse(readFileSync(join(root, 'contract', name), 'utf8'));
const { blocks, widgets } = contract('blocks.json');
const { default: defaultLang, languages } = contract('languages.json');
const prefix = (lang) => (lang === defaultLang ? '' : `/${lang}`);

const ajv = new Ajv2020({ allErrors: true, strict: false });
ajv.addFormat('uri', (s) => /^https?:\/\/\S+$/.test(s));
const validators = Object.fromEntries(
  ['page', 'post', 'site', 'network', 'service', 'provider'].map((n) => [n, ajv.compile(contract(`${n}.schema.json`))]),
);

const errors = [];
const rel = (f) => relative(root, f).split(sep).join('/');
const report = (file, line, msg) => errors.push(`${rel(file)}${line ? `:${line}` : ''} — ${msg}`);
const schemaErrors = (file, validate, data, prefix = '') => {
  if (validate(data)) return;
  for (const e of validate.errors) {
    const where = (prefix + e.instancePath).replace(/^\//, '').replace(/\//g, '.') || '(root)';
    const extra = e.params?.additionalProperty ? ` "${e.params.additionalProperty}"` : '';
    report(file, 0, `${where}: ${e.message}${extra}`);
  }
};

const walk = (dir) =>
  existsSync(dir)
    ? readdirSync(dir).flatMap((f) => {
        const p = join(dir, f);
        return statSync(p).isDirectory() ? walk(p) : [p];
      })
    : [];

/** Splits "---\nyaml\n---\nbody" and returns the parsed front matter and the body's first line number. */
function frontMatter(file, text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) { report(file, 1, 'missing front matter (--- … ---)'); return { data: null, body: text, offset: 0 }; }
  try {
    return { data: parseYaml(m[1]) ?? {}, body: text.slice(m[0].length), offset: m[0].split('\n').length - 1 };
  } catch (e) {
    report(file, 1, `front matter is not valid YAML: ${e.message.split('\n')[0]}`);
    return { data: null, body: text.slice(m[0].length), offset: m[0].split('\n').length - 1 };
  }
}

const unsafe = [
  [/<script\b/i, '<script> is not allowed'],
  [/<style\b/i, '<style> is not allowed'],
  [/<iframe\b/i, '<iframe> is not allowed'],
  [/<(object|embed)\b/i, '<object>/<embed> are not allowed'],
  [/\son[a-z]+\s*=/i, 'inline event handlers (on…=) are not allowed'],
  [/javascript:/i, 'javascript: links are not allowed'],
];

// Every page, blog index and post of an app, as URL paths (for link checks).
function routesOf(app) {
  const appDir = join(root, app);
  const routes = new Set(languages.map((l) => prefix(l) || '/'));
  for (const lang of languages) {
    for (const f of walk(join(appDir, lang, 'pages'))) {
      if (f.endsWith('.md')) routes.add(`${prefix(lang)}/${rel(f).slice(`${app}/${lang}/pages/`.length).replace(/\.md$/, '').replace(/(^|\/)index$/, '')}`.replace(/\/$/, '') || '/');
    }
    const site = join(appDir, lang, 'site.md');
    let blog = null;
    try { blog = existsSync(site) ? parseYaml(readFileSync(site, 'utf8').match(/^---\n([\s\S]*?)\n---/)[1])?.blog : null; } catch { blog = null; }
    const posts = walk(join(appDir, lang, 'bitacora')).filter((f) => f.endsWith('.md'));
    if (!blog || !posts.length) continue;
    let own = 0;
    for (const f of posts) {
      const cat = (readFileSync(f, 'utf8').match(/^category:\s*(\S+)/m) || [])[1];
      const path = blog.categories?.find((c) => c.id === cat)?.path;
      if (!path) own++;
      routes.add(`${prefix(lang)}/${path ?? blog.path}/${f.split(sep).pop().replace(/\.md$/, '')}`);
    }
    if (own) routes.add(`${prefix(lang)}/${blog.path}`);
  }
  return routes;
}
const routesByApp = Object.fromEntries(apps.map((a) => [a, routesOf(a)]));
/** Checks one Markdown link target: /path (this app), site:/path or docs:/path (the other app). */
function checkLink(app, file, n, href) {
  const m = href.match(/^(?:(site|docs|console):)?(\/[^\s#]*)/);
  if (!m) return;
  const target = m[1] ?? app;
  if (target === 'console') return;
  const path = m[2].replace(/\/$/, '') || '/';
  if (!m[1] && /^\/(docs|consola)(\/|$)/.test(path)) return; // redirects to external sites
  if (!routesByApp[target]) { report(file, n, `unknown link prefix "${m[1]}:"`); return; }
  if (!routesByApp[target].has(path)) report(file, n, `link to a page that does not exist${m[1] ? ` in ${target}` : ''}: ${href}`);
}

for (const app of apps) {
  const appDir = join(root, app);
  for (const d of existsSync(appDir) ? readdirSync(appDir) : []) {
    if (statSync(join(appDir, d)).isDirectory() && d !== 'images' && !languages.includes(d)) report(join(appDir, d), 0, `"${d}" is not a language (${languages.join(', ')}) nor images/`);
  }
  const pagesOf = (lang) => walk(join(appDir, lang, 'pages'));
  const idOf = (lang, f) => rel(f).slice(`${app}/${lang}/pages/`.length).replace(/\.md$/, '').replace(/(^|\/)index$/, '');
  const blogOf = (lang) => {
    const f = join(appDir, lang, 'site.md');
    if (!existsSync(f)) return null;
    const m = readFileSync(f, 'utf8').match(/^---\n([\s\S]*?)\n---/);
    try { return (m && parseYaml(m[1])?.blog) || null; } catch { return null; }
  };
  const postsOf = (lang) => walk(join(appDir, lang, 'bitacora')).filter((f) => f.endsWith('.md'));
  const originals = new Set(pagesOf(defaultLang).filter((f) => f.endsWith('.md')).map((f) => idOf(defaultLang, f)));
  const diagramsIn = (lang) => new Set(walk(join(appDir, lang, 'diagrams')).map((f) => f.split(sep).pop().replace(/\.(html|svg)$/, '')));
  const defaultDiagrams = diagramsIn(defaultLang);

  for (const lang of languages) {
    const base = join(appDir, lang);
    if (!existsSync(base)) { if (lang === defaultLang) report(base, 0, 'missing: the default language is required'); continue; }
    const pagesDir = join(base, 'pages');
    const files = pagesOf(lang);
    const diagrams = new Set([...diagramsIn(lang), ...defaultDiagrams]);

    for (const f of files.filter((f) => f.endsWith('.mdx'))) report(f, 0, 'MDX is not allowed: use .md and ::: blocks (widgets: :::widget{name="…"})');

    for (const file of files.filter((f) => f.endsWith('.md'))) {
      const id = idOf(lang, file);
      const depth = id.split('/').length - 1;
      const text = readFileSync(file, 'utf8');
      const { data, body, offset } = frontMatter(file, text);
      if (data) {
        schemaErrors(file, validators.page, data);
        if (depth === 0 && !data.section) report(file, 0, 'a section\'s index.md needs a "section:" block');
        if (depth > 0 && data.section) report(file, 0, '"section:" is only allowed in a section\'s index.md');
        if (lang === defaultLang && data.translationOf) report(file, 0, `"translationOf" is only for languages other than ${defaultLang}`);
        if (data.translationOf && !originals.has(data.translationOf)) report(file, 0, `translationOf "${data.translationOf}" is not a page in ${app}/${defaultLang}/pages/`);
      }
      if (depth > 2) report(file, 0, 'pages can be nested one level deep at most (section/group/page)');
      const section = id.split('/')[0];
      if (!existsSync(join(pagesDir, section, 'index.md'))) report(file, 0, `folder "${section}" has no index.md`);
      if (depth === 2 && !existsSync(join(pagesDir, section, id.split('/')[1], 'index.md'))) report(file, 0, `group folder "${section}/${id.split('/')[1]}" needs an index.md`);

      body.split('\n').forEach((line, i) => {
        const n = i + 1 + offset;
        if (/^\s*(import|export)\s/.test(line)) report(file, n, 'import/export statements are not allowed (no MDX)');
        for (const [re, msg] of unsafe) if (re.test(line)) report(file, n, msg);
        const block = line.match(/^:::([a-z]+)/);
        if (block) {
          if (!blocks.includes(block[1])) report(file, n, `unknown block ":::${block[1]}". Available: ${blocks.join(', ')}`);
          const name = line.match(/name="([^"]*)"/)?.[1];
          if (block[1] === 'widget' && !widgets.includes(name)) report(file, n, `unknown widget "${name ?? ''}". Available: ${widgets.join(', ')}`);
          if (block[1] === 'diagram' && !diagrams.has(name)) report(file, n, `no diagram "${name ?? ''}" in ${app}/${lang}/diagrams/ or ${app}/${defaultLang}/diagrams/`);
        }
        for (const [, target] of line.matchAll(/!\[[^\]]*\]\(([^)\s]+)/g)) {
          if (!/^https?:/.test(target) && !existsSync(join(dirname(file), target))) report(file, n, `image not found: ${target}`);
        }
        for (const [, href] of line.matchAll(/(?<!!)\[[^\]]*\]\(((?:site:|docs:|console:)?\/[^)\s]*)/g)) checkLink(app, file, n, href);
      });
    }

    const blog = blogOf(lang);
    for (const file of postsOf(lang)) {
      if (!blog) { report(file, 0, `${app}/${lang}/site.md has no "blog" block`); continue; }
      const { data, body, offset } = frontMatter(file, readFileSync(file, 'utf8'));
      if (data) {
        schemaErrors(file, validators.post, data);
        if (!blog.categories?.some((c) => c.id === data.category)) report(file, 0, `unknown category "${data.category}". Available: ${(blog.categories || []).map((c) => c.id).join(', ')}`);
        if (data.image && !existsSync(join(dirname(file), data.image))) report(file, 0, `image not found: ${data.image}`);
        if (data.image && (!data.alt || !data.credit)) report(file, 0, 'a post with an image needs "alt" and "credit"');
      }
      body.split('\n').forEach((line, i) => {
        const n = i + 1 + offset;
        if (/^\s*(import|export)\s/.test(line)) report(file, n, 'import/export statements are not allowed (no MDX)');
        for (const [re, msg] of unsafe) if (re.test(line)) report(file, n, msg);
        const block = line.match(/^:::([a-z]+)/);
        if (block) {
          if (!blocks.includes(block[1])) report(file, n, `unknown block ":::${block[1]}". Available: ${blocks.join(', ')}`);
          const name = line.match(/name="([^"]*)"/)?.[1];
          if (block[1] === 'widget' && !widgets.includes(name)) report(file, n, `unknown widget "${name ?? ''}"`);
          if (block[1] === 'diagram' && !diagrams.has(name)) report(file, n, `no diagram "${name ?? ''}" in ${app}/${lang}/diagrams/ or ${app}/${defaultLang}/diagrams/`);
        }
        for (const [, href] of line.matchAll(/(?<!!)\[[^\]]*\]\(((?:site:|docs:|console:)?\/[^)\s]*)/g)) checkLink(app, file, n, href);
      });
    }

    const siteFile = join(base, 'site.md');
    if (existsSync(siteFile)) {
      const { data } = frontMatter(siteFile, readFileSync(siteFile, 'utf8'));
      if (data) schemaErrors(siteFile, validators.site, data);
    } else report(siteFile, 0, 'missing');
    if (!existsSync(join(base, 'home.md'))) report(join(base, 'home.md'), 0, 'missing');
  }
}

// Interface dictionaries: every language has exactly the default language's keys.
const keysOf = (o, p = '') =>
  o && typeof o === 'object' && !Array.isArray(o)
    ? Object.entries(o).flatMap(([k, v]) => keysOf(v, p ? `${p}.${k}` : k))
    : [Array.isArray(o) ? `${p}[${o.length}]` : p];
const dict = (lang) => {
  const file = join(root, 'ui', `${lang}.yaml`);
  if (!existsSync(file)) { report(file, 0, 'missing'); return null; }
  try { return { file, keys: new Set(keysOf(parseYaml(readFileSync(file, 'utf8')))) }; }
  catch (e) { report(file, 0, `not valid YAML: ${e.message.split('\n')[0]}`); return null; }
};
const reference = dict(defaultLang);
for (const lang of languages.filter((l) => l !== defaultLang)) {
  const d = dict(lang);
  if (!reference || !d) continue;
  for (const k of reference.keys) if (!d.keys.has(k)) report(d.file, 0, `missing or different from ${defaultLang}.yaml: ${k}`);
  for (const k of d.keys) if (!reference.keys.has(k)) report(d.file, 0, `not in ${defaultLang}.yaml: ${k}`);
}

// Network data
const loadYaml = (name) => {
  const file = join(root, 'network', `${name}.yaml`);
  try { return { file, items: parseYaml(readFileSync(file, 'utf8')) ?? [] }; }
  catch (e) { report(file, 0, `not valid YAML: ${e.message.split('\n')[0]}`); return { file, items: [] }; }
};
const ids = {};
for (const [name, kind] of [['networks', 'network'], ['services', 'service'], ['providers', 'provider']]) {
  const { file, items } = loadYaml(name);
  ids[name] = new Set();
  items.forEach((item, i) => {
    schemaErrors(file, validators[kind], item, `/${i}`);
    for (const [k, v] of Object.entries(item)) {
      if (v && typeof v === 'object' && !Array.isArray(v) && k !== 'unit' && !(defaultLang in v)) report(file, 0, `${item.id}.${k}: needs a "${defaultLang}" value`);
    }
    if (ids[name].has(item.id)) report(file, 0, `duplicate id "${item.id}"`);
    ids[name].add(item.id);
  });
  if (name === 'providers') {
    items.forEach((p) => {
      if (!ids.networks.has(p.network)) report(file, 0, `${p.id}: unknown network "${p.network}"`);
      if (!ids.services.has(p.service)) report(file, 0, `${p.id}: unknown service "${p.service}"`);
    });
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s) in the content:\n  ` + errors.join('\n  '));
  process.exit(1);
}
console.log('✓ Content is valid');
