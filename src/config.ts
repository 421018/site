/**
 * Technical settings of the documentation site. Visitor-facing text lives in
 * content/<lang>/site.md. The documentation is served at 42chain.org/docs. Every value in [brackets] is a placeholder to replace
 * before going live.
 */
export const SITE = {
  url: 'https://42chain.org',
  /** Served under the main site, at 42chain.org/docs (no subdomain). */
  base: '/docs',
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
  /**
   * The magazine, on the same domain: links to it are internal. In development
   * each repo runs its own server, so `npm run dev` points SITE_URL at the
   * magazine's (http://localhost:4321).
   */
  site: process.env.SITE_URL ?? '/',
  /** The console is not launched yet: without a URL, every link to it is left out. */
  console: undefined as string | undefined,
  content: 'https://github.com/deep-thought-labs/infinite-app',
};

/** The "edit this page" link points to the content repository; the file's path in the catalog is appended. */
// Content is not open for editing yet: without an edit base, no "edit this page" links are shown.
// When the content repository is public: `${LINKS.content}/edit/main/`.
export const EDIT_BASE: string | undefined = undefined;
