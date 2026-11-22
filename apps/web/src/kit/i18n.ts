/**
 * Areas and languages.
 *
 * One app serves two areas of 42chain.org, each with its own content
 * (content/<area>/) and look: the site at the root and the documentation
 * under /docs. Every helper that builds a URL takes the area; it defaults to
 * the site.
 *
 * The default language is served at the area's root (/protocol, /docs/protocol);
 * every other one under its code (/es/protocol, /docs/es/protocol). Paths and
 * anchors are English and the same in every language. A translation is the
 * file at the same path in another language's folder. The source language (the
 * one content is written in first) is complete: a page missing in another
 * language shows its text there. Content links are written without a language
 * prefix (/protocol/consensus) and get the prefix of the page they are on.
 */
import kit from 'virtual:42chain/kit';

export const defaultLang = kit.defaultLang;
export const sourceLang = kit.sourceLang;
export const languages = Object.keys(kit.languages);

/** The areas of the site and the path each is served at. */
export const AREAS = { site: '', docs: '/docs' } as const;
export type Area = keyof typeof AREAS;

/** Area of a URL path: /docs… is the documentation; everything else, the site. */
export const areaOfPath = (path: string): Area => (/^\/docs(\/|$)/.test(path) ? 'docs' : 'site');

/** Area of the page being rendered. */
export const areaOf = (astro: { url: URL }) => areaOfPath(astro.url.pathname);

/** Language segment of a path: "" for the default language, "/es" for Spanish. */
export const langSegment = (lang: string) => (lang === defaultLang ? '' : `/${lang}`);

/** URL prefix of a language in an area: "" (site, default language), "/es", "/docs", "/docs/es". */
export const langPrefix = (lang: string, area: Area = 'site') => AREAS[area] + langSegment(lang);

/** Home page of a language in an area. */
export const homeHref = (lang: string, area: Area = 'site') => langPrefix(lang, area) || '/';

/** Language of the page being rendered (Astro.currentLocale), with the default as fallback. */
export const langOf = (astro: { currentLocale?: string }) =>
  astro.currentLocale && languages.includes(astro.currentLocale) ? astro.currentLocale : defaultLang;

export const ogLocale = (lang: string) => kit.languages[lang]?.ogLocale ?? lang;

/** Adds the area and language prefix to a path inside the area: ("/protocol", "es", "docs") → "/docs/es/protocol". */
export const withLang = (path: string, lang: string, area: Area = 'site') => {
  const prefix = langPrefix(lang, area);
  if (!prefix || path === prefix || path.startsWith(prefix + '/') || path.startsWith(prefix + '#')) return path;
  return path === '/' ? prefix : path.startsWith('/#') ? prefix + path.slice(1) : prefix + path;
};

/** False for a link to a product that is not available yet (console:/ while the console has no URL). */
export const isLinkAvailable = (href: string) => !href.startsWith('console:') || !!kit.links?.console;

/**
 * Resolves a content link for a page in `lang` and `area`: /path stays in the
 * area and gets the language prefix; site:/… and docs:/… go to that area;
 * console:/… to the console. /docs, /consola, external and #anchor links pass through.
 */
export const resolveHref = (href: string, lang: string = defaultLang, area: Area = 'site') => {
  const m = href.match(/^(site|docs|console):(\/.*)$/);
  if (m) {
    if (m[1] === 'console') return kit.links?.console ? kit.links.console.replace(/\/$/, '') + m[2] : href;
    return withLang(m[2], lang, m[1] as Area);
  }
  if (!href.startsWith('/') || href.startsWith('//') || /^\/(docs|consola)(\/|$|#)/.test(href)) return href;
  return withLang(href, lang, area);
};

/** True for a resolved link that leaves 42chain.org. */
export const isExternal = (href: string) => /^https?:\/\//.test(href);
