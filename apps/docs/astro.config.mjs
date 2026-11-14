// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { kit } from '@42chain/kit/integration';
import { sharedConfig } from '@42chain/kit/config';
import { widgetNames } from '@42chain/widgets/names';
import { SITE, EDIT_BASE } from './src/config.ts';

// Markdown, fonts and CSP are shared with the main site (packages/kit/src/config.ts).
// Search (Pagefind) runs WebAssembly, so this app also allows 'wasm-unsafe-eval'.
export default defineConfig({
  ...sharedConfig({ catalog: 'docs', widgets: widgetNames, scriptSources: ["'wasm-unsafe-eval'"] }),
  site: SITE.url,
  integrations: [mdx(), sitemap(), kit({ lang: SITE.lang, ogLocale: SITE.ogLocale, editBase: EDIT_BASE, search: true })],
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    routing: { prefixDefaultLocale: false },
  },
});
