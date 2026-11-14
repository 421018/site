/**
 * Technical settings of the documentation site. Visitor-facing text lives in
 * src/content/site.md. Every value in [brackets] is a placeholder to replace
 * before going live.
 */
export const SITE = {
  url: 'https://docs.example.org', // [docs domain]
  lang: 'es',
  ogLocale: 'es_ES',
};

export const LINKS = {
  site: 'https://example.org', // [official domain]
  repo: 'https://github.com/[organization]/42chain-site', // [site repository]
};

/** The "edit this page" link points here: repo + branch + path of the content file. */
export const EDIT_BASE = `${LINKS.repo}/edit/main/apps/docs/`;
