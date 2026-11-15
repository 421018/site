/**
 * Interface text of widgets and data views, per language, from the catalog's
 * ui/<lang>.yaml. Widgets read their part (ui(lang).fees…) when they render;
 * the strings their scripts need travel in a data-i18n attribute, so client
 * code never carries visitor-facing text.
 */
import { readFileSync } from 'node:fs';
import { parse } from 'yaml';
import { catalogPath } from './catalog';
import { sourceLang } from './i18n';

// The source language's file is the reference: every language has the same keys.
type Dictionary = Record<string, Record<string, any>>;
const cache = new Map<string, Dictionary>();

export function ui(lang: string): Dictionary {
  let d = cache.get(lang);
  if (!d) {
    try {
      d = parse(readFileSync(catalogPath('ui', `${lang}.yaml`), 'utf8')) as Dictionary;
    } catch (e) {
      if (lang === sourceLang) throw new Error(`Missing or invalid catalog ui/${lang}.yaml: ${(e as Error).message}`);
      d = ui(sourceLang);
    }
    cache.set(lang, d);
  }
  return d;
}

/** Fills {name} placeholders: fill('Bloque {n}', { n: 2 }) → 'Bloque 2'. */
export const fill = (text: string, vars: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
