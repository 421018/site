/** Settings of one language (astro.config.mjs → kit({ languages })). */
export interface LanguageConfig {
  /** Open Graph locale, e.g. "es_ES". */
  ogLocale: string;
}

/** Settings each app passes to the kit integration (astro.config.mjs). */
export interface KitConfig {
  /** Language served at the site root, e.g. "es". The others live under /<lang>/. */
  defaultLang: string;
  /** Every language of the app, in menu order, each with its own folder in the catalog. */
  languages: Record<string, LanguageConfig>;
  /** Prefix of the "edit this page" link: content repository + branch; the file's path in the catalog is appended. */
  editBase: string;
  /** Full-text search with Pagefind. The app must run `pagefind --site dist` after the build. */
  search?: boolean;
}
