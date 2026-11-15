// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { kit } from '@42chain/kit/integration';
import { sharedConfig } from '@42chain/kit/config';
import { widgetNames } from '@42chain/widgets/names';
import { SITE, EDIT_BASE } from './src/config.ts';

// Markdown, fonts and CSP are shared with the main site (packages/kit/src/config.ts).
// Search (Pagefind) runs WebAssembly, so this app also allows 'wasm-unsafe-eval'.
export default defineConfig({
  ...sharedConfig({ catalog: 'docs', defaultLang: SITE.defaultLang, widgets: widgetNames, scriptSources: ["'wasm-unsafe-eval'"] }),
  site: SITE.url,
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) }), kit({ defaultLang: SITE.defaultLang, languages: SITE.languages, editBase: EDIT_BASE, search: true })],
  i18n: {
    defaultLocale: SITE.defaultLang,
    locales: Object.keys(SITE.languages),
    routing: { prefixDefaultLocale: false },
  },
});
