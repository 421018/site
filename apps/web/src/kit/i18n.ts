/**
 * Areas and languages.
 *
 * One app serves three areas of 42chain.org, each with its own content
 * (content/<area>/) and look: the site at the root, the documentation under
 * /docs and the console under /console. Every helper that builds a URL takes
 * the area; it defaults to the site.
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
export const AREAS = { site: '', docs: '/docs', console: '/console' } as const;
export type Area = keyof typeof AREAS;

/** Area of a URL path: /docs… is the documentation, /console… the console; everything else, the site. */
export const areaOfPath = (path: string): Area => (/^\/docs(\/|$)/.test(path) ? 'docs' : /^\/console(\/|$)/.test(path) ? 'console' : 'site');

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

/** Every link is available: the three areas are part of the site. Kept for links that may depend on a product later. */
export const isLinkAvailable = (_href: string) => true;

/**
 * Resolves a content link for a page in `lang` and `area`: /path stays in the
 * area and gets the language prefix; site:/…, docs:/… and console:/… go to
 * that area. /docs, /console, external and #anchor links pass through.
 */
export const resolveHref = (href: string, lang: string = defaultLang, area: Area = 'site') => {
  const m = href.match(/^(site|docs|console):(\/.*)$/);
  if (m) return withLang(m[2], lang, m[1] as Area);
  if (!href.startsWith('/') || href.startsWith('//') || /^\/(docs|console|consola)(\/|$|#)/.test(href)) return href;
  return withLang(href, lang, area);
};

/** True for a resolved link that leaves 42chain.org. */
export const isExternal = (href: string) => /^https?:\/\//.test(href);
