/**
 * Technical settings. Visitor-facing text lives in the catalog's site/<lang>/site.md.
 * Every value in [brackets] is a placeholder to replace before going live.
 * Content links to /docs and /consola; those redirect to the URLs below
 * (see astro.config.mjs).
 */
export const SITE = {
  url: 'https://example.org', // [official domain]
  /** Language at the site root; the others are served under /<lang>/. */
  defaultLang: 'es',
  /** Languages, each with its folder in the catalog (<app>/<lang>/). */
  languages: {
    es: { ogLocale: 'es_ES' },
    en: { ogLocale: 'en_US' },
  },
};

export const LINKS = {
  docs: 'https://example.org/docs', // [docs domain]
  console: 'https://example.org/consola', // [console domain]
  repo: 'https://github.com/[organization]/42chain-site', // [site repository]
  content: 'https://github.com/[organization]/42chain-content', // [public content repository]
};

/** The "edit this page" link points to the content repository; the file's path in the catalog is appended. */
export const EDIT_BASE = `${LINKS.content}/edit/main/`;
