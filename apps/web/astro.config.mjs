// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { kit } from './src/kit/integration';
import { sharedConfig } from './src/kit/config';
import { widgetNames } from './src/widgets/names';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { parse } from 'yaml';
import { SITE, EDIT_BASE } from './src/config.ts';

// The console reads the public EVM RPC endpoints from the browser (network status):
// each provider's origin is allowed in connect-src, straight from the provider directory.
/** @type {{ service: string, url: string }[]} */
const providers = parse(readFileSync(new URL('./content/network/providers.yaml', import.meta.url), 'utf8'));
const rpcOrigins = [...new Set(providers.filter((p) => p.service === 'evm').map((p) => new URL(p.url).origin))];

// The blog used to be the Bitácora, at /log: every old address goes to its new one.
/** @param {string} lang */
const posts = (lang) => readdirSync(new URL(`./content/blog/${lang}`, import.meta.url)).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3));
const retired = ['agreements-unknown', 'collective-memory', 'commons-governance', 'conditional-access', 'contribution-proofs', 'digital-provenance', 'resource-coordination', 'sovereign-identity'];
const logRedirects = Object.fromEntries(
  Object.keys(SITE.languages).flatMap((lang) => {
    const p = lang === SITE.defaultLang ? '' : `/${lang}`;
    return [
      [`${p}/log`, `${p}/blog`],
      ...posts(SITE.sourceLang).map((slug) => [`${p}/log/${slug}`, `${p}/blog/${slug}`]),
      // Posts retired with the old use cases: their addresses go to the blog.
      ...retired.flatMap((slug) => [[`${p}/log/${slug}`, `${p}/blog`], [`${p}/blog/${slug}`, `${p}/blog`]]),
    ];
  }),
);

// Search in development: the Pagefind index only exists after a build (dist/docs/pagefind, made by
// `npm run build` or `npm run verify`). The dev server serves that index at /docs/pagefind, so the
// search works on 4321 too, with the pages as of the last build. Without a build it keeps saying
// that search needs the published version.
const pagefindDir = new URL('./dist/docs/pagefind/', import.meta.url).pathname;
/** @type {Record<string, string>} */
const pagefindTypes = { '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.wasm': 'application/wasm' };
/** @returns {import('vite').Plugin} */
const pagefindInDev = () => ({
  name: 'pagefind-in-dev',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use('/docs/pagefind', (req, res, next) => {
      const path = normalize(decodeURIComponent((req.url ?? '/').split('?')[0])).replace(/^(\.\.(\/|$))+/, '');
      const file = join(pagefindDir, path);
      if (!file.startsWith(pagefindDir) || !existsSync(file)) return next();
      res.setHeader('Content-Type', pagefindTypes[extname(file)] ?? 'application/octet-stream');
      res.setHeader('Cache-Control', 'no-store');
      res.end(readFileSync(file));
    });
  },
});

// One app for 42chain.org: the site at / and the documentation at /docs (src/pages/docs/).
// Markdown, fonts, CSP and i18n are set up in src/kit/config.ts.
export default defineConfig({
  // Search (Pagefind, in the documentation) runs WebAssembly, so scripts may use 'wasm-unsafe-eval'.
  ...sharedConfig({ defaultLang: SITE.defaultLang, sourceLang: SITE.sourceLang, languages: Object.keys(SITE.languages), widgets: widgetNames, scriptSources: ["'wasm-unsafe-eval'"], connectSources: rpcOrigins }),
  site: SITE.url,
  vite: { plugins: [pagefindInDev()] },
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) }), kit({ defaultLang: SITE.defaultLang, sourceLang: SITE.sourceLang, languages: SITE.languages, editBase: EDIT_BASE })],
  i18n: {
    defaultLocale: SITE.defaultLang,
    locales: Object.keys(SITE.languages),
    routing: { prefixDefaultLocale: false },
  },
  // Internal shortcuts used in content. Change the targets in src/config.ts.
  redirects: {
    ...logRedirects,
    '/consola': '/console',
    '/es/consola': '/console/es',
    // "Implementar" moved to the documentation (Spanish).
    '/implementar': `/docs/es/build/applications`,
    '/implementar/conectarse': `/docs/es/get-started/connect`,
    '/implementar/nodos': `/docs/es/operate/nodes`,
    '/implementar/integrar': `/docs/es/integrate`,
    '/en/implement': `/docs/build/applications`,
    '/en/implement/connect': `/docs/get-started/connect`,
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
    '/codigo-abierto/contribuir': `/docs/es/open-source`,
    '/codigo-abierto/preguntas-frecuentes': '/es/faq',
    '/codigo-abierto/seguridad': `/docs/es/open-source/security`,
    '/codigo-abierto/verificar': `/docs/es/get-started/sources`,
    '/protocolo': `/docs/es/protocol`,
    '/protocolo/consenso': `/docs/es/protocol/consensus`,
    '/protocolo/ejecucion': `/docs/es/protocol/execution`,
    '/protocolo/gobernanza': `/docs/es/protocol/governance`,
    '/protocolo/interoperabilidad': `/docs/es/protocol/interoperability`,
    '/protocolo/seguridad': `/docs/es/protocol/security`,
    '/protocolo/tarifas': `/docs/es/protocol/fees`,
    // The study of each piece moved to the documentation.
    '/protocol/consensus': `/docs/protocol/consensus`,
    '/protocol/execution': `/docs/protocol/execution`,
    '/protocol/fees': `/docs/protocol/fees`,
    '/protocol/interoperability': `/docs/protocol/interoperability`,
    '/protocol/governance': `/docs/protocol/governance`,
    '/protocol/security': `/docs/protocol/security`,
    '/es/protocol/consensus': `/docs/es/protocol/consensus`,
    '/es/protocol/execution': `/docs/es/protocol/execution`,
    '/es/protocol/fees': `/docs/es/protocol/fees`,
    '/es/protocol/interoperability': `/docs/es/protocol/interoperability`,
    '/es/protocol/governance': `/docs/es/protocol/governance`,
    '/es/protocol/security': `/docs/es/protocol/security`,
    // 42 Chain and 42 Protocol (2026-11): the Chain site keeps the project, the Bitácora and the
    // questions; the technical reference, contributing and security live in Protocol.
    '/protocol': `/docs/protocol`,
    '/use-cases': '/blog',
    '/use-cases/agreements-unknown': '/blog',
    '/use-cases/collective-memory': '/blog',
    '/use-cases/commons-governance': '/blog',
    '/use-cases/conditional-access': '/blog',
    '/use-cases/contribution-proofs': '/blog',
    '/use-cases/digital-provenance': '/blog',
    '/use-cases/resource-coordination': '/blog',
    '/use-cases/restaurant-sign': '/blog/restaurant-sign',
    '/use-cases/sovereign-identity': '/blog',
    '/open-source': '/about',
    '/open-source/verify': `/docs/get-started/sources`,
    '/open-source/faq': '/faq',
    '/open-source/contributing': `/docs/open-source`,
    '/open-source/security': `/docs/open-source/security`,
    '/es/protocol': `/docs/es/protocol`,
    '/es/use-cases': '/es/blog',
    '/es/use-cases/agreements-unknown': '/es/blog',
    '/es/use-cases/collective-memory': '/es/blog',
    '/es/use-cases/commons-governance': '/es/blog',
    '/es/use-cases/conditional-access': '/es/blog',
    '/es/use-cases/contribution-proofs': '/es/blog',
    '/es/use-cases/digital-provenance': '/es/blog',
    '/es/use-cases/resource-coordination': '/es/blog',
    '/es/use-cases/restaurant-sign': '/es/blog/restaurant-sign',
    '/es/use-cases/sovereign-identity': '/es/blog',
    '/es/open-source': '/es/about',
    '/es/open-source/verify': `/docs/es/get-started/sources`,
    '/es/open-source/faq': '/es/faq',
    '/es/open-source/contributing': `/docs/es/open-source`,
    '/es/open-source/security': `/docs/es/open-source/security`,
    '/about/how-it-works': `/docs/protocol`,
    '/es/about/how-it-works': `/docs/es/protocol`,
    '/about/verify': `/docs/get-started/sources`,
    '/es/about/verify': `/docs/es/get-started/sources`,
    // English used to live under /en; it is now at the root.
    '/en': '/',
    '/en/protocol': `/docs/protocol`,
    '/en/protocol/consensus': `/docs/protocol/consensus`,
  },
});
