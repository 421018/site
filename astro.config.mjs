// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';
import { SITE, LINKS } from './src/config.ts';
import { contentBlocks } from './src/lib/content-blocks.ts';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [mdx()],
  // Markdown and MDX: {#id} anchors and {.class} attributes, plus the ::: content
  // blocks defined in src/lib/content-blocks.ts.
  markdown: {
    processor: satteri({
      features: { attributes: true, directive: true },
      mdastPlugins: [contentBlocks],
    }),
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
