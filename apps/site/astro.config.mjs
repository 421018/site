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
    '/implementar': `${LINKS.docs}/build/applications`,
    '/implementar/conectarse': `${LINKS.docs}/get-started/connect`,
    '/implementar/nodos': `${LINKS.docs}/operate/nodes`,
    '/implementar/integrar': `${LINKS.docs}/integrate`,
    '/implementar/implementaciones': '/use-cases/custom-implementations',
    '/en/implement': `${LINKS.docs}/en/build/applications`,
    '/en/implement/connect': `${LINKS.docs}/en/get-started/connect`,
    // Spanish URLs before paths became neutral (English, the same in every language).
    '/casos-de-uso': '/use-cases',
    '/casos-de-uso/autorizaciones': '/use-cases/shared-approvals',
    '/casos-de-uso/implementaciones': '/use-cases/custom-implementations',
    '/casos-de-uso/infraestructura': '/use-cases/infrastructure',
    '/casos-de-uso/integracion': '/use-cases/network-integration',
    '/casos-de-uso/registros-verificables': '/use-cases/verifiable-records',
    '/casos-de-uso/trazabilidad': '/use-cases/traceability',
    '/codigo-abierto': '/open-source',
    '/codigo-abierto/contribuir': '/open-source/contributing',
    '/codigo-abierto/preguntas-frecuentes': '/open-source/faq',
    '/codigo-abierto/seguridad': '/open-source/security',
    '/codigo-abierto/verificar': '/open-source/verify',
    '/protocolo': '/protocol',
    '/protocolo/consenso': '/protocol/consensus',
    '/protocolo/ejecucion': '/protocol/execution',
    '/protocolo/gobernanza': '/protocol/governance',
    '/protocolo/interoperabilidad': '/protocol/interoperability',
    '/protocolo/seguridad': '/protocol/security',
    '/protocolo/tarifas': '/protocol/fees',
  },
});
