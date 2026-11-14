// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { SITE, LINKS } from './src/config.ts';
import { contentBlocks } from '@42chain/content/blocks';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [mdx(), sitemap()],
  // Markdown and MDX: {#id} anchors and {.class} attributes, plus the ::: content
  // blocks defined in packages/content (@42chain/content/blocks).
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
      directives: ["default-src 'self'", "img-src 'self' data:", "font-src 'self'", "object-src 'none'", "base-uri 'self'", "form-action 'self'"],
    },
  },
  // Internal shortcuts used in content. Change the targets in src/config.ts.
  redirects: {
    '/docs': LINKS.docs,
    '/consola': LINKS.console,
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es'], // add 'en' when the English version exists
    routing: { prefixDefaultLocale: false },
  },
});
