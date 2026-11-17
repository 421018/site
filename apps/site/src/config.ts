/**
 * Technical settings. Visitor-facing text lives in the catalog's site/<lang>/site.md.
 * Every value in [brackets] is a placeholder to replace before going live.
 * Content links to /docs (and /consola, once the console launches); they redirect to the URLs below
 * (see astro.config.mjs).
 */
export const SITE = {
  url: 'https://42chain.org',
  /** Language at the site root; the others are served under /<lang>/. */
  defaultLang: 'en',
  /** Language the content is written in first; pages not yet translated show it, with a notice. */
  sourceLang: 'es',
  /** Languages, each with its folder in the catalog (<app>/<lang>/). */
  languages: {
    en: { ogLocale: 'en_US' },
    es: { ogLocale: 'es_ES' },
  },
};

export const LINKS = {
  docs: 'https://docs.42chain.org',
  /** The console is not launched yet: without a URL, every link to it is left out. */
  console: undefined as string | undefined,
  repo: 'https://github.com/deep-thought-labs/infinite-app',
  content: 'https://github.com/deep-thought-labs/infinite-app',
};

/** The "edit this page" link points to the content repository; the file's path in the catalog is appended. */
// Content is not open for editing yet: without an edit base, no "edit this page" links are shown.
// When the content repository is public: `${LINKS.content}/edit/main/`.
export const EDIT_BASE: string | undefined = undefined;
