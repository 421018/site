/**
 * Technical settings. Visitor-facing text lives in src/content/site.md.
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
};

/** The "edit this page" link points here: repo + branch + path of the content file. */
export const EDIT_BASE = `${LINKS.repo}/edit/main/`;
