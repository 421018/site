/**
 * Astro settings shared by every app: Markdown with the ::: content blocks,
 * self-hosted fonts and the Content-Security-Policy. An app spreads them into
 * its own defineConfig() and adds what is specific to it (site URL,
 * integrations, redirects, languages).
 */
import { fontProviders } from 'astro/config';
import type { AstroUserConfig } from 'astro';
import { satteri } from '@astrojs/markdown-satteri';
import { contentBlocks } from '@42chain/content/blocks';

export interface SharedOptions {
  /** Extra script-src sources. Pagefind search needs "'wasm-unsafe-eval'". */
  scriptSources?: string[];
}

export function sharedConfig({ scriptSources = [] }: SharedOptions = {}): AstroUserConfig {
  return {
    trailingSlash: 'never',
    build: { format: 'directory' },
    // Markdown and MDX: {#id} anchors and {.class} attributes, plus the ::: blocks.
    markdown: {
      // Prism only adds classes, so code blocks stay compatible with the CSP below.
      syntaxHighlight: 'prism',
      processor: satteri({
        features: { attributes: true, directive: true },
        mdastPlugins: [contentBlocks],
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
