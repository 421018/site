// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { kit } from '@42chain/base/kit/integration';
import { sharedConfig } from '@42chain/base/kit/config';
import { widgetNames } from './src/widgets/names';
import { SITE, LINKS, EDIT_BASE } from './src/config.ts';

// The documentation is served at 42chain.org/docs: Astro builds every page under that base.
// Search (Pagefind) runs WebAssembly, so this app also allows 'wasm-unsafe-eval'.
export default defineConfig({
  ...sharedConfig({ catalog: '', defaultLang: SITE.defaultLang, sourceLang: SITE.sourceLang, languages: Object.keys(SITE.languages), widgets: widgetNames, linkBases: { site: LINKS.site, console: LINKS.console }, scriptSources: ["'wasm-unsafe-eval'"], urlBase: SITE.base }),
  site: SITE.url,
  base: SITE.base,
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) }), kit({ styles: ['./src/styles/global.css'], defaultLang: SITE.defaultLang, sourceLang: SITE.sourceLang, languages: SITE.languages, editBase: EDIT_BASE, links: { site: LINKS.site, console: LINKS.console }, search: true })],
  i18n: {
    defaultLocale: SITE.defaultLang,
    locales: Object.keys(SITE.languages),
    routing: { prefixDefaultLocale: false },
  },
});
