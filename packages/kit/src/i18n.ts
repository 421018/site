/**
 * Languages. The default language is served at the root (/protocol); every
 * other one under its code (/es/protocol). Paths and anchors are English and
 * the same in every language. Each language has its own folder in the catalog
 * (site/en/, site/es/); a translation is the file at the same path in another
 * language's folder. The source language (the one content is written in
 * first) is complete: a page missing in another language shows its text there.
 * Content links are written without a language prefix (/protocol/consensus)
 * and get the prefix of the page they are on.
 */
import kit from 'virtual:42chain/kit';

export const defaultLang = kit.defaultLang;
export const sourceLang = kit.sourceLang;
export const languages = Object.keys(kit.languages);

/** URL prefix of a language: "" for the default one, "/es" for Spanish. */
export const langPrefix = (lang: string) => (lang === defaultLang ? '' : `/${lang}`);

/** Home page of a language. */
export const homeHref = (lang: string) => langPrefix(lang) || '/';

/** Language of the page being rendered (Astro.currentLocale), with the default as fallback. */
export const langOf = (astro: { currentLocale?: string }) =>
  astro.currentLocale && languages.includes(astro.currentLocale) ? astro.currentLocale : defaultLang;

export const ogLocale = (lang: string) => kit.languages[lang]?.ogLocale ?? lang;

/** Adds a language prefix to a root-relative path: ("/protocol", "es") → "/es/protocol". */
export const withLang = (path: string, lang: string) => {
  const prefix = langPrefix(lang);
  if (!prefix || path === prefix || path.startsWith(prefix + '/') || path.startsWith(prefix + '#')) return path;
  return path === '/' ? prefix : path.startsWith('/#') ? prefix + path.slice(1) : prefix + path;
};

/**
 * Resolves a content link for a page in `lang`: /path gets the language prefix;
 * site:/… and docs:/… become the other product's URL (same language layout),
 * console:/… the console's. /docs, /consola, external and #anchor links pass through.
 */
export const resolveHref = (href: string, lang: string = defaultLang) => {
  const m = href.match(/^(site|docs|console):(\/.*)$/);
  if (m) {
    const base = kit.links?.[m[1]];
    if (!base) return href;
    return base.replace(/\/$/, '') + (m[1] === 'console' ? m[2] : withLang(m[2], lang));
  }
  if (!href.startsWith('/') || href.startsWith('//') || /^\/(docs|consola)(\/|$|#)/.test(href)) return href;
  return withLang(href, lang);
};
