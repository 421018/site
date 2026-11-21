/**
 * Interface text of widgets and data views, per language, from the catalog's
 * ui/<lang>.yaml. Widgets read their part (ui(lang).fees…) when they render;
 * the strings their scripts need travel in a data-i18n attribute, so client
 * code never carries visitor-facing text.
 */
import { readFileSync, statSync } from 'node:fs';
import { parse } from 'yaml';
import { catalogPath } from './catalog';
import { sourceLang } from './i18n';

// The source language's file is the reference: every language has the same keys.
type Dictionary = Record<string, Record<string, any>>;
const cache = new Map<string, { mtimeMs: number; data: Dictionary }>();

export function ui(lang: string): Dictionary {
  const file = catalogPath('ui', `${lang}.yaml`);
  let mtimeMs: number;
  try {
    mtimeMs = statSync(file).mtimeMs;
  } catch (e) {
    if (lang === sourceLang) throw new Error(`Missing or invalid catalog ui/${lang}.yaml: ${(e as Error).message}`);
    return ui(sourceLang);
  }
  const hit = cache.get(lang);
  if (hit && hit.mtimeMs === mtimeMs) return hit.data;
  try {
    const data = parse(readFileSync(file, 'utf8')) as Dictionary;
    cache.set(lang, { mtimeMs, data });
    return data;
  } catch (e) {
    if (lang === sourceLang) throw new Error(`Missing or invalid catalog ui/${lang}.yaml: ${(e as Error).message}`);
    return ui(sourceLang);
  }
}

/** Fills {name} placeholders: fill('Bloque {n}', { n: 2 }) → 'Bloque 2'. */
export const fill = (text: string, vars: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
