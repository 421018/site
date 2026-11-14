/** Settings each app passes to the kit integration (astro.config.mjs). */
export interface KitConfig {
  /** Language of the pages (html lang, date format), e.g. "es". */
  lang: string;
  /** Open Graph locale, e.g. "es_ES". */
  ogLocale: string;
  /** Prefix of the "edit this page" link: content repository + branch; the file's path in the catalog is appended. */
  editBase: string;
  /** Full-text search with Pagefind. The app must run `pagefind --site dist` after the build. */
  search?: boolean;
}
