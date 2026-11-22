/** Settings of one language (astro.config.mjs → kit({ languages })). */
export interface LanguageConfig {
  /** Open Graph locale, e.g. "es_ES". */
  ogLocale: string;
}

/** Settings the site passes to the kit integration (astro.config.mjs). */
export interface KitConfig {
  /** Language served at the site root, e.g. "en". The others live under /<lang>/. */
  defaultLang: string;
  /**
   * Language the content is written in first, complete (e.g. "es"). A page
   * missing in another language is shown in this one there, with a notice.
   */
  sourceLang: string;
  /** Every language of the site, in menu order, each with its own folder in the catalog. */
  languages: Record<string, LanguageConfig>;
  /** Prefix of the "edit this page" link: content repository + branch; the file's path in the catalog is appended. Without it, no edit links are shown. */
  editBase?: string;
}
