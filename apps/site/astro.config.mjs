// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { kit } from '@42chain/base/kit/integration';
import { sharedConfig } from '@42chain/base/kit/config';
import { widgetNames } from './src/widgets/names';
import { readdirSync } from 'node:fs';
import { SITE, LINKS, EDIT_BASE } from './src/config.ts';

// The blog used to be the Bitácora, at /log: every old address goes to its new one.
/** @param {string} lang */
const posts = (lang) => readdirSync(new URL(`./content/${lang}/posts`, import.meta.url)).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3));
const logRedirects = Object.fromEntries(
  Object.keys(SITE.languages).flatMap((lang) => {
    const p = lang === SITE.defaultLang ? '' : `/${lang}`;
    return [[`${p}/log`, `${p}/blog`], ...posts(SITE.sourceLang).map((slug) => [`${p}/log/${slug}`, `${p}/blog/${slug}`])];
  }),
);

// Markdown, fonts, CSP and i18n are set up in packages/base/kit/config.ts.
export default defineConfig({
  ...sharedConfig({ catalog: '', defaultLang: SITE.defaultLang, sourceLang: SITE.sourceLang, languages: Object.keys(SITE.languages), widgets: widgetNames, linkBases: { docs: LINKS.docs, console: LINKS.console } }),
  site: SITE.url,
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) }), kit({ styles: ['./src/styles/global.css'], defaultLang: SITE.defaultLang, sourceLang: SITE.sourceLang, languages: SITE.languages, editBase: EDIT_BASE, links: { docs: LINKS.docs, console: LINKS.console } })],
  i18n: {
    defaultLocale: SITE.defaultLang,
    locales: Object.keys(SITE.languages),
    routing: { prefixDefaultLocale: false },
  },
  // Internal shortcuts used in content. Change the targets in src/config.ts.
  redirects: {
    ...logRedirects,
    ...(LINKS.console ? { '/consola': LINKS.console } : {}),
    // "Implementar" moved to the documentation (Spanish).
    '/implementar': `${LINKS.docs}/es/build/applications`,
    '/implementar/conectarse': `${LINKS.docs}/es/get-started/connect`,
    '/implementar/nodos': `${LINKS.docs}/es/operate/nodes`,
    '/implementar/integrar': `${LINKS.docs}/es/integrate`,
    '/en/implement': `${LINKS.docs}/build/applications`,
    '/en/implement/connect': `${LINKS.docs}/get-started/connect`,
    // Spanish URLs before paths became English; Spanish now lives under /es.
    '/casos-de-uso': '/es/blog',
    '/casos-de-uso/autorizaciones': '/es/blog',
    '/casos-de-uso/infraestructura': '/es/blog',
    '/casos-de-uso/integracion': '/es/blog',
    '/use-cases/network-integration': '/blog',
    '/es/use-cases/network-integration': '/es/blog',
    '/casos-de-uso/registros-verificables': '/es/blog',
    '/casos-de-uso/trazabilidad': '/es/blog',
    '/codigo-abierto': '/es/about',
    '/codigo-abierto/contribuir': `${LINKS.docs}/es/open-source`,
    '/codigo-abierto/preguntas-frecuentes': '/es/faq',
    '/codigo-abierto/seguridad': `${LINKS.docs}/es/open-source/security`,
    '/codigo-abierto/verificar': `${LINKS.docs}/es/get-started/sources`,
    '/protocolo': `${LINKS.docs}/es/protocol`,
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
    // 42 Chain and 42 Protocol (2026-11): the Chain site keeps the project, the Bitácora and the
    // questions; the technical reference, contributing and security live in Protocol.
    '/protocol': `${LINKS.docs}/protocol`,
    '/use-cases': '/blog',
    '/use-cases/agreements-unknown': '/blog/agreements-unknown',
    '/use-cases/collective-memory': '/blog/collective-memory',
    '/use-cases/commons-governance': '/blog/commons-governance',
    '/use-cases/conditional-access': '/blog/conditional-access',
    '/use-cases/contribution-proofs': '/blog/contribution-proofs',
    '/use-cases/digital-provenance': '/blog/digital-provenance',
    '/use-cases/resource-coordination': '/blog/resource-coordination',
    '/use-cases/restaurant-sign': '/blog/restaurant-sign',
    '/use-cases/sovereign-identity': '/blog/sovereign-identity',
    '/open-source': '/about',
    '/open-source/verify': `${LINKS.docs}/get-started/sources`,
    '/open-source/faq': '/faq',
    '/open-source/contributing': `${LINKS.docs}/open-source`,
    '/open-source/security': `${LINKS.docs}/open-source/security`,
    '/es/protocol': `${LINKS.docs}/es/protocol`,
    '/es/use-cases': '/es/blog',
    '/es/use-cases/agreements-unknown': '/es/blog/agreements-unknown',
    '/es/use-cases/collective-memory': '/es/blog/collective-memory',
    '/es/use-cases/commons-governance': '/es/blog/commons-governance',
    '/es/use-cases/conditional-access': '/es/blog/conditional-access',
    '/es/use-cases/contribution-proofs': '/es/blog/contribution-proofs',
    '/es/use-cases/digital-provenance': '/es/blog/digital-provenance',
    '/es/use-cases/resource-coordination': '/es/blog/resource-coordination',
    '/es/use-cases/restaurant-sign': '/es/blog/restaurant-sign',
    '/es/use-cases/sovereign-identity': '/es/blog/sovereign-identity',
    '/es/open-source': '/es/about',
    '/es/open-source/verify': `${LINKS.docs}/es/get-started/sources`,
    '/es/open-source/faq': '/es/faq',
    '/es/open-source/contributing': `${LINKS.docs}/es/open-source`,
    '/es/open-source/security': `${LINKS.docs}/es/open-source/security`,
    '/about/how-it-works': `${LINKS.docs}/protocol`,
    '/es/about/how-it-works': `${LINKS.docs}/es/protocol`,
    '/about/verify': `${LINKS.docs}/get-started/sources`,
    '/es/about/verify': `${LINKS.docs}/es/get-started/sources`,
    // English used to live under /en; it is now at the root.
    '/en': '/',
    '/en/protocol': `${LINKS.docs}/protocol`,
    '/en/protocol/consensus': `${LINKS.docs}/protocol/consensus`,
  },
});
