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
  ...sharedConfig({ catalog: 'docs', defaultLang: SITE.defaultLang, sourceLang: SITE.sourceLang, languages: Object.keys(SITE.languages), widgets: widgetNames, linkBases: { site: LINKS.site, console: LINKS.console }, scriptSources: ["'wasm-unsafe-eval'"] }),
  site: SITE.url,
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) }), kit({ defaultLang: SITE.defaultLang, sourceLang: SITE.sourceLang, languages: SITE.languages, editBase: EDIT_BASE, links: { site: LINKS.site, console: LINKS.console }, search: true })],
  // Pages renamed when "Implementar" moved here from the main site.
  redirects: {
    '/empezar/redes': '/es/get-started/connect',
    '/en/get-started/networks': '/get-started/connect',
    // Spanish URLs before paths became English; Spanish now lives under /es.
    '/construir': '/es/build',
    '/construir/aplicaciones': '/es/build/applications',
    '/construir/precompiles': '/es/build/precompiles',
    '/construir/precompiles/ics02': '/es/build/precompiles/ics02',
    '/empezar': '/es/get-started',
    '/empezar/conceptos': '/es/get-started/concepts',
    '/empezar/conectarse': '/es/get-started/connect',
    '/integrar': '/es/integrate',
    '/operar': '/es/operate',
    '/operar/nodos': '/es/operate/nodes',
    // English used to live under /en; it is now at the root.
    '/en': '/',
    '/en/get-started': '/get-started',
    '/en/get-started/connect': '/get-started/connect',
    '/en/build': '/build',
    '/en/build/applications': '/build/applications',
  },
  i18n: {
    defaultLocale: SITE.defaultLang,
    locales: Object.keys(SITE.languages),
    routing: { prefixDefaultLocale: false },
  },
});
