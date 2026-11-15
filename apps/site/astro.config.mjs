// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { kit } from '@42chain/kit/integration';
import { sharedConfig } from '@42chain/kit/config';
import { widgetNames } from '@42chain/widgets/names';
import { SITE, LINKS, EDIT_BASE } from './src/config.ts';

// Markdown, fonts, CSP and i18n are shared by every app (packages/kit/src/config.ts).
export default defineConfig({
  ...sharedConfig({ catalog: 'site', defaultLang: SITE.defaultLang, widgets: widgetNames, linkBases: { docs: LINKS.docs, console: LINKS.console } }),
  site: SITE.url,
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) }), kit({ defaultLang: SITE.defaultLang, languages: SITE.languages, editBase: EDIT_BASE, links: { docs: LINKS.docs, console: LINKS.console } })],
  i18n: {
    defaultLocale: SITE.defaultLang,
    locales: Object.keys(SITE.languages),
    routing: { prefixDefaultLocale: false },
  },
  // Internal shortcuts used in content. Change the targets in src/config.ts.
  redirects: {
    '/docs': LINKS.docs,
    '/consola': LINKS.console,
    // "Implementar" moved to the documentation (and its custom-work page to Casos de uso).
    '/implementar': `${LINKS.docs}/construir/aplicaciones`,
    '/implementar/conectarse': `${LINKS.docs}/empezar/conectarse`,
    '/implementar/nodos': `${LINKS.docs}/operar/nodos`,
    '/implementar/integrar': `${LINKS.docs}/integrar`,
    '/implementar/implementaciones': '/casos-de-uso/implementaciones',
    '/en/implement': `${LINKS.docs}/en/build/applications`,
    '/en/implement/connect': `${LINKS.docs}/en/get-started/connect`,
  },
});
