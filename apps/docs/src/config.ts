/**
 * Technical settings of the documentation site. Visitor-facing text lives in
 * the catalog's docs/site.md. Every value in [brackets] is a placeholder to replace
 * before going live.
 */
export const SITE = {
  url: 'https://docs.example.org', // [docs domain]
  /** Language at the site root; the others are served under /<lang>/. */
  defaultLang: 'es',
  /** Languages, each with its folder in the catalog (<app>/<lang>/). */
  languages: {
    es: { ogLocale: 'es_ES' },
    en: { ogLocale: 'en_US' },
  },
};

export const LINKS = {
  site: 'https://example.org', // [official domain]
  console: 'https://example.org/consola', // [console domain]
  content: 'https://github.com/[organization]/42chain-content', // [public content repository]
};

/** The "edit this page" link points to the content repository; the file's path in the catalog is appended. */
export const EDIT_BASE = `${LINKS.content}/edit/main/`;
