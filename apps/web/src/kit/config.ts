/**
 * Astro settings of the site: Markdown with the ::: content blocks,
 * self-hosted fonts and the Content-Security-Policy. astro.config.mjs spreads
 * them into its defineConfig() and adds the site URL, integrations, redirects
 * and languages.
 */
import { fontProviders } from 'astro/config';
import type { AstroUserConfig } from 'astro';
import { satteri } from '@astrojs/markdown-satteri';
import { contentBlocks } from '../blocks/content-blocks.ts';
import { relative, sep } from 'node:path';
import { catalogPath } from './catalog';

export interface SharedOptions {
  /** Language served at the root (no prefix in URLs). */
  defaultLang: string;
  /** Source language: its folder is the fallback for diagrams missing in a translation. */
  sourceLang: string;
  /** Names accepted by :::widget (from src/widgets/names.ts). */
  widgets?: readonly string[];
  /** The console's URL for console: links in content; without it they are an error. */
  consoleUrl?: string;
  /** The site's languages (folders in each area's content). */
  languages?: string[];
  /** Extra script-src sources. Pagefind search needs "'wasm-unsafe-eval'". */
  scriptSources?: string[];
}

/** Areas and the path each is served at (the same as AREAS in i18n.ts, which needs the virtual module). */
const AREAS: Record<string, string> = { site: '', docs: '/docs' };

export function sharedConfig({ defaultLang, sourceLang, widgets = [], consoleUrl, languages = [], scriptSources = [] }: SharedOptions): AstroUserConfig {
  // A content file belongs to an area (content/<area>/<lang>/…) and a language.
  const placeOf = (file: string | undefined) => {
    const [area = 'site', lang = ''] = file ? relative(catalogPath(), file).split(sep) : [];
    return { area: area in AREAS ? area : 'site', lang: languages.includes(lang) ? lang : sourceLang };
  };
  // A page in <area>/<lang>/pages/… reads <area>/<lang>/diagrams/, then the source language's.
  const diagramsDirs = (file: string | undefined) => {
    const { area, lang } = placeOf(file);
    return [...new Set([lang, sourceLang])].map((l) => catalogPath(area, l, 'diagrams'));
  };
  // Content links are written without a language prefix; each gets its file's area and language.
  const withLang = (path: string, lang: string, area: string) => {
    const prefix = AREAS[area] + (lang === defaultLang ? '' : `/${lang}`);
    if (!prefix || path === prefix || path.startsWith(prefix + '/') || path.startsWith(prefix + '#')) return path;
    return path === '/' ? prefix : path.startsWith('/#') ? prefix + path.slice(1) : prefix + path;
  };
  const resolveLink = (url: string, file: string | undefined) => {
    const { area, lang } = placeOf(file);
    const m = url.match(/^(site|docs|console):(\/.*)$/);
    if (m) {
      if (m[1] !== 'console') return withLang(m[2], lang, m[1]);
      if (!consoleUrl) throw new Error('"console:" links are not available until the console has a URL.');
      return consoleUrl.replace(/\/$/, '') + m[2];
    }
    if (!url.startsWith('/') || url.startsWith('//') || /^\/(docs|consola)(\/|$|#)/.test(url)) return undefined;
    return withLang(url, lang, area);
  };
  return {
    trailingSlash: 'never',
    build: { format: 'directory' },
    // Markdown: {#id} anchors and {.class} attributes, plus the ::: blocks.
    markdown: {
      // Prism only adds classes, so code blocks stay compatible with the CSP below.
      syntaxHighlight: 'prism',
      processor: satteri({
        features: { attributes: true, directive: true },
        mdastPlugins: [contentBlocks({ diagramsDirs, widgets, resolveLink })],
      }),
    },
    // Fonts are downloaded at build time and served from the site itself: no
    // requests to Google from the visitor's browser.
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Geist',
        cssVariable: '--font-geist',
        weights: ['300 800'],
        subsets: ['latin', 'latin-ext'],
        fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'Geist Mono',
        cssVariable: '--font-geist-mono',
        weights: ['400', '500'],
        subsets: ['latin', 'latin-ext'],
        fallbacks: ['ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      {
        provider: fontProviders.google(),
        name: 'Newsreader',
        cssVariable: '--font-newsreader',
        weights: ['400', '500'],
        styles: ['normal', 'italic'],
        subsets: ['latin', 'latin-ext'],
        fallbacks: ['Georgia', 'Iowan Old Style', 'serif'],
      },
    ],
    // Content Security Policy: Astro hashes its own scripts and styles. Inline
    // style attributes are allowed because the design uses them; scripts are not.
    security: {
      csp: {
        styleDirective: { resources: ["'self'", "'unsafe-inline'"] },
        ...(scriptSources.length ? { scriptDirective: { resources: ["'self'", ...scriptSources] } } : {}),
        directives: ["default-src 'self'", "img-src 'self' data:", "font-src 'self'", "object-src 'none'", "base-uri 'self'", "form-action 'self'"],
      },
    },
  };
}
