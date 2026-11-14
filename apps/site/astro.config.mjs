// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { kit } from '@42chain/kit/integration';
import { sharedConfig } from '@42chain/kit/config';
import { SITE, LINKS, EDIT_BASE } from './src/config.ts';

// Markdown, fonts, CSP and i18n are shared by every app (packages/kit/src/config.ts).
export default defineConfig({
  ...sharedConfig({ catalog: 'site' }),
  site: SITE.url,
  integrations: [mdx(), sitemap(), kit({ lang: SITE.lang, ogLocale: SITE.ogLocale, editBase: EDIT_BASE })],
  i18n: {
    defaultLocale: 'es',
    locales: ['es'], // add 'en' when the English version exists
    routing: { prefixDefaultLocale: false },
  },
  // Internal shortcuts used in content. Change the targets in src/config.ts.
  redirects: {
    '/docs': LINKS.docs,
    '/consola': LINKS.console,
  },
});
