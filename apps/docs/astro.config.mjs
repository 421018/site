// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { kit } from '@42chain/kit/integration';
import { sharedConfig } from '@42chain/kit/config';
import { widgetNames } from '@42chain/widgets/names';
import { SITE, LINKS, EDIT_BASE } from './src/config.ts';

// Markdown, fonts and CSP are shared with the main site (packages/kit/src/config.ts).
// Search (Pagefind) runs WebAssembly, so this app also allows 'wasm-unsafe-eval'.
export default defineConfig({
  ...sharedConfig({ catalog: 'docs', defaultLang: SITE.defaultLang, widgets: widgetNames, linkBases: { site: LINKS.site, console: LINKS.console }, scriptSources: ["'wasm-unsafe-eval'"] }),
  site: SITE.url,
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) }), kit({ defaultLang: SITE.defaultLang, languages: SITE.languages, editBase: EDIT_BASE, links: { site: LINKS.site, console: LINKS.console }, search: true })],
  // Pages renamed when "Implementar" moved here from the main site.
  redirects: {
    '/empezar/redes': '/get-started/connect',
    '/en/get-started/networks': '/en/get-started/connect',
    // Spanish URLs before paths became neutral (English, the same in every language).
    '/construir': '/build',
    '/construir/aplicaciones': '/build/applications',
    '/construir/precompiles': '/build/precompiles',
    '/construir/precompiles/ics02': '/build/precompiles/ics02',
    '/empezar': '/get-started',
    '/empezar/conceptos': '/get-started/concepts',
    '/empezar/conectarse': '/get-started/connect',
    '/integrar': '/integrate',
    '/operar': '/operate',
    '/operar/nodos': '/operate/nodes',
  },
  i18n: {
    defaultLocale: SITE.defaultLang,
    locales: Object.keys(SITE.languages),
    routing: { prefixDefaultLocale: false },
  },
});
