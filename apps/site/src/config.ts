/**
 * Technical settings. Visitor-facing text lives in the catalog's site/site.md.
 * Every value in [brackets] is a placeholder to replace before going live.
 * Content links to /docs and /consola; those redirect to the URLs below
 * (see astro.config.mjs).
 */
export const SITE = {
  url: 'https://example.org', // [official domain]
  lang: 'es',
  ogLocale: 'es_ES',
};

export const LINKS = {
  docs: 'https://example.org/docs', // [docs domain]
  console: 'https://example.org/consola', // [console domain]
  repo: 'https://github.com/[organization]/42chain-site', // [site repository]
  content: 'https://github.com/[organization]/42chain-content', // [public content repository]
};

/** The "edit this page" link points to the content repository; the file's path in the catalog is appended. */
export const EDIT_BASE = `${LINKS.content}/edit/main/`;
