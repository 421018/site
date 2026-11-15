/**
 * Technical settings of the documentation site. Visitor-facing text lives in
 * the catalog's docs/site.md. Every value in [brackets] is a placeholder to replace
 * before going live.
 */
export const SITE = {
  url: 'https://docs.example.org', // [docs domain]
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
  site: 'https://example.org', // [official domain]
  /** The console is not launched yet: without a URL, every link to it is left out. */
  console: undefined as string | undefined, // [console domain] when it launches
  content: 'https://github.com/[organization]/42chain-content', // [public content repository]
};

/** The "edit this page" link points to the content repository; the file's path in the catalog is appended. */
// Content is not open for editing yet: without an edit base, no "edit this page" links are shown.
// When the content repository is public: `${LINKS.content}/edit/main/`.
export const EDIT_BASE: string | undefined = undefined;
