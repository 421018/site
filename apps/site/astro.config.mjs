// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { kit } from '@42chain/kit/integration';
import { sharedConfig } from '@42chain/kit/config';
import { widgetNames } from '@42chain/widgets/names';
import { SITE, LINKS, EDIT_BASE } from './src/config.ts';

// Markdown, fonts, CSP and i18n are shared by every app (packages/kit/src/config.ts).
export default defineConfig({
  ...sharedConfig({ catalog: 'site', defaultLang: SITE.defaultLang, sourceLang: SITE.sourceLang, languages: Object.keys(SITE.languages), widgets: widgetNames, linkBases: { docs: LINKS.docs, console: LINKS.console } }),
  site: SITE.url,
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) }), kit({ defaultLang: SITE.defaultLang, sourceLang: SITE.sourceLang, languages: SITE.languages, editBase: EDIT_BASE, links: { docs: LINKS.docs, console: LINKS.console } })],
  i18n: {
    defaultLocale: SITE.defaultLang,
    locales: Object.keys(SITE.languages),
    routing: { prefixDefaultLocale: false },
  },
  // Internal shortcuts used in content. Change the targets in src/config.ts.
  redirects: {
    '/docs': LINKS.docs,
    ...(LINKS.console ? { '/consola': LINKS.console } : {}),
    // "Implementar" moved to the documentation (Spanish).
    '/implementar': `${LINKS.docs}/es/build/applications`,
    '/implementar/conectarse': `${LINKS.docs}/es/get-started/connect`,
    '/implementar/nodos': `${LINKS.docs}/es/operate/nodes`,
    '/implementar/integrar': `${LINKS.docs}/es/integrate`,
    '/en/implement': `${LINKS.docs}/build/applications`,
    '/en/implement/connect': `${LINKS.docs}/get-started/connect`,
    // Spanish URLs before paths became English; Spanish now lives under /es.
    '/casos-de-uso': '/es/use-cases',
    '/casos-de-uso/autorizaciones': '/es/use-cases/shared-approvals',
    '/casos-de-uso/infraestructura': '/es/use-cases/infrastructure',
    '/casos-de-uso/integracion': '/es/use-cases',
    '/use-cases/network-integration': '/use-cases',
    '/es/use-cases/network-integration': '/es/use-cases',
    '/casos-de-uso/registros-verificables': '/es/use-cases/verifiable-records',
    '/casos-de-uso/trazabilidad': '/es/use-cases/traceability',
    '/codigo-abierto': '/es/open-source',
    '/codigo-abierto/contribuir': '/es/open-source/contributing',
    '/codigo-abierto/preguntas-frecuentes': '/es/open-source/faq',
    '/codigo-abierto/seguridad': '/es/open-source/security',
    '/codigo-abierto/verificar': '/es/open-source/verify',
    '/protocolo': '/es/protocol',
    '/protocolo/consenso': `${LINKS.docs}/es/protocol/consensus`,
    '/protocolo/ejecucion': `${LINKS.docs}/es/protocol/execution`,
    '/protocolo/gobernanza': `${LINKS.docs}/es/protocol/governance`,
    '/protocolo/interoperabilidad': `${LINKS.docs}/es/protocol/interoperability`,
    '/protocolo/seguridad': `${LINKS.docs}/es/protocol/security`,
    '/protocolo/tarifas': `${LINKS.docs}/es/protocol/fees`,
    // The study of each piece moved to the documentation.
    '/protocol/consensus': `${LINKS.docs}/protocol/consensus`,
    '/protocol/execution': `${LINKS.docs}/protocol/execution`,
    '/protocol/fees': `${LINKS.docs}/protocol/fees`,
    '/protocol/interoperability': `${LINKS.docs}/protocol/interoperability`,
    '/protocol/governance': `${LINKS.docs}/protocol/governance`,
    '/protocol/security': `${LINKS.docs}/protocol/security`,
    '/es/protocol/consensus': `${LINKS.docs}/es/protocol/consensus`,
    '/es/protocol/execution': `${LINKS.docs}/es/protocol/execution`,
    '/es/protocol/fees': `${LINKS.docs}/es/protocol/fees`,
    '/es/protocol/interoperability': `${LINKS.docs}/es/protocol/interoperability`,
    '/es/protocol/governance': `${LINKS.docs}/es/protocol/governance`,
    '/es/protocol/security': `${LINKS.docs}/es/protocol/security`,
    // English used to live under /en; it is now at the root.
    '/en': '/',
    '/en/protocol': '/protocol',
    '/en/protocol/consensus': `${LINKS.docs}/protocol/consensus`,
  },
});
