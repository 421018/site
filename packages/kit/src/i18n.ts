/**
 * Languages. The default language is served at the root (/protocolo); every
 * other one under its code (/en/protocol). Each language has its own folder in
 * the catalog (site/es/, site/en/) with its own site.md, home.md and pages, and
 * its own, translated, URLs. A translated page names the page it translates
 * with `translationOf:` (its path in the default language).
 */
import kit from 'virtual:42chain/kit';

export const defaultLang = kit.defaultLang;
export const languages = Object.keys(kit.languages);

/** URL prefix of a language: "" for the default one, "/en" for English. */
export const langPrefix = (lang: string) => (lang === defaultLang ? '' : `/${lang}`);

/** Home page of a language. */
export const homeHref = (lang: string) => langPrefix(lang) || '/';

/** Language of the page being rendered (Astro.currentLocale), with the default as fallback. */
export const langOf = (astro: { currentLocale?: string }) =>
  astro.currentLocale && languages.includes(astro.currentLocale) ? astro.currentLocale : defaultLang;

export const ogLocale = (lang: string) => kit.languages[lang]?.ogLocale ?? lang;
