#!/usr/bin/env node
/**
 * Validates the content catalog against its contract (contract/), without the
 * engine. Run from the catalog root:  npm run validate
 *
 * Checks:
 * - Front matter of pages and site.md against the JSON Schemas.
 * - Sections: "section:" only in a section's index.md; folders need index.md;
 *   at most one level of groups (section/group/page.md).
 * - Markdown only: no .mdx files, no <script>, <style>, <iframe>, inline event
 *   handlers or javascript: links.
 * - ::: blocks and widget names are known; :::diagram files exist.
 * - Images and internal links (/section/page) point to existing files.
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

const ajv = new Ajv2020({ allErrors: true, strict: false });
ajv.addFormat('uri', (s) => /^https?:\/\/\S+$/.test(s));
const validators = Object.fromEntries(
  ['page', 'site', 'network', 'service', 'provider'].map((n) => [n, ajv.compile(contract(`${n}.schema.json`))]),
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

for (const app of apps) {
  const base = join(root, app);
  const pagesDir = join(base, 'pages');
  const files = walk(pagesDir);
  const routes = new Set([...files.filter((f) => f.endsWith('.md')).map((f) => '/' + rel(f).slice(`${app}/pages/`.length).replace(/\.md$/, '').replace(/(^|\/)index$/, ''))].map((r) => r.replace(/\/$/, '') || '/'));
  routes.add('/');
  const diagrams = new Set(walk(join(base, 'diagrams')).map((f) => f.split(sep).pop().replace(/\.(html|svg)$/, '')));

  for (const f of files.filter((f) => f.endsWith('.mdx'))) report(f, 0, 'MDX is not allowed: use .md and ::: blocks (widgets: :::widget{name="…"})');

  for (const file of files.filter((f) => f.endsWith('.md'))) {
    const id = rel(file).slice(`${app}/pages/`.length).replace(/\.md$/, '').replace(/(^|\/)index$/, '');
    const depth = id.split('/').length - 1;
    const text = readFileSync(file, 'utf8');
    const { data, body, offset } = frontMatter(file, text);
    if (data) {
      schemaErrors(file, validators.page, data);
      if (depth === 0 && !data.section) report(file, 0, 'a section\'s index.md needs a "section:" block');
      if (depth > 0 && data.section) report(file, 0, '"section:" is only allowed in a section\'s index.md');
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
        if (block[1] === 'diagram' && !diagrams.has(name)) report(file, n, `no diagram "${name ?? ''}" in ${app}/diagrams/`);
      }
      for (const [, target] of line.matchAll(/!\[[^\]]*\]\(([^)\s]+)/g)) {
        if (!/^https?:/.test(target) && !existsSync(join(dirname(file), target))) report(file, n, `image not found: ${target}`);
      }
      for (const [, href] of line.matchAll(/(?<!!)\[[^\]]*\]\((\/[^)\s#]*)/g)) {
        const path = href.replace(/\/$/, '') || '/';
        if (/^\/(docs|consola)(\/|$)/.test(path)) continue; // redirects to external sites
        if (!routes.has(path)) report(file, n, `link to a page that does not exist: ${href}`);
      }
    });
  }

  const siteFile = join(base, 'site.md');
  if (existsSync(siteFile)) {
    const { data } = frontMatter(siteFile, readFileSync(siteFile, 'utf8'));
    if (data) schemaErrors(siteFile, validators.site, data);
  } else report(siteFile, 0, 'missing');
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
