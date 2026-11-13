// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkHeadingId from 'remark-heading-id';
import { SITE, LINKS } from './src/config.ts';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [mdx()],
  markdown: { remarkPlugins: [remarkHeadingId] },
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
