/**
 * Technical settings of 42chain.org: the site at the root, the documentation
 * at /docs and the console at /console. Visitor-facing text lives in content/<area>/<lang>/site.md.
 */
export const SITE = {
  url: 'https://42chain.org',
  /** Language at the site root; the others are served under /<lang>/. */
  defaultLang: 'en',
  /** Language the content is written in first; pages not yet translated show it, with a notice. */
  sourceLang: 'es',
  /** Languages, each with its folder in each area's content (content/<area>/<lang>/). */
  languages: {
    en: { ogLocale: 'en_US' },
    es: { ogLocale: 'es_ES' },
  },
};

export const LINKS = {
  repo: 'https://github.com/deep-thought-labs/infinite-app',
  content: 'https://github.com/deep-thought-labs/infinite-app',
};

/** The "edit this page" link points to the content repository; the file's path in the catalog is appended. */
// Content is not open for editing yet: without an edit base, no "edit this page" links are shown.
// When the content repository is public: `${LINKS.content}/edit/main/`.
export const EDIT_BASE: string | undefined = undefined;
