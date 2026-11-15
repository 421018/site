/**
 * Astro settings shared by every app: Markdown with the ::: content blocks,
 * self-hosted fonts and the Content-Security-Policy. An app spreads them into
 * its own defineConfig() and adds what is specific to it (site URL,
 * integrations, redirects, languages).
 */
import { fontProviders } from 'astro/config';
import type { AstroUserConfig } from 'astro';
import { satteri } from '@astrojs/markdown-satteri';
import { contentBlocks } from '@42chain/blocks';
import { relative, sep } from 'node:path';
import { catalogPath } from './catalog';

export interface SharedOptions {
  /** The app's folder in the content catalog: "site" or "docs". */
  catalog: string;
  /** Language served at the root (no prefix in URLs). */
  defaultLang: string;
  /** Source language: its folder is the fallback for diagrams missing in a translation. */
  sourceLang: string;
  /** Names accepted by :::widget (from @42chain/widgets/names). */
  widgets?: readonly string[];
  /** Base URLs of the other products for site:, docs: and console: links in content. */
  linkBases?: Record<string, string>;
  /** The app's languages (folders in the catalog). */
  languages?: string[];
  /** Extra script-src sources. Pagefind search needs "'wasm-unsafe-eval'". */
  scriptSources?: string[];
}

export function sharedConfig({ catalog, defaultLang, sourceLang, widgets = [], linkBases = {}, languages = [], scriptSources = [] }: SharedOptions): AstroUserConfig {
  const base = catalogPath(catalog);
  const langOfFile = (file: string | undefined) => {
    const rel = file ? relative(base, file) : '';
    const lang = rel && !rel.startsWith('..') ? rel.split(sep)[0] : '';
    return languages.includes(lang) ? lang : sourceLang;
  };
  // A page in <catalog>/<lang>/pages/… reads <lang>/diagrams/, then the source language's.
  const diagramsDirs = (file: string | undefined) =>
    [...new Set([langOfFile(file), sourceLang])].map((l) => catalogPath(catalog, l, 'diagrams'));
  // Content links are written without a language prefix; each gets its file's.
  const withLang = (path: string, lang: string) => {
    const prefix = lang === defaultLang ? '' : `/${lang}`;
    if (!prefix || path === prefix || path.startsWith(prefix + '/') || path.startsWith(prefix + '#')) return path;
    return path === '/' ? prefix : path.startsWith('/#') ? prefix + path.slice(1) : prefix + path;
  };
  const resolveLink = (url: string, file: string | undefined) => {
    const m = url.match(/^(site|docs|console):(\/.*)$/);
    if (m) {
      const linkBase = linkBases[m[1]];
      if (!linkBase) throw new Error(`"${m[1]}:" links are not available in this app.`);
      return linkBase.replace(/\/$/, '') + (m[1] === 'console' ? m[2] : withLang(m[2], langOfFile(file)));
    }
    if (!url.startsWith('/') || url.startsWith('//') || /^\/(docs|consola)(\/|$|#)/.test(url)) return undefined;
    return withLang(url, langOfFile(file));
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
