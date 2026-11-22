/** Texts of the console's screens (content/console/<lang>/console.md), with the source language as fallback. */
import { getEntry } from 'astro:content';
import { sourceLang } from '../kit/i18n';

export async function getConsoleText(lang: string) {
  const entry = (await getEntry('consoleText', lang)) ?? (await getEntry('consoleText', sourceLang));
  if (!entry) throw new Error(`Missing content/console/${sourceLang}/console.md`);
  return entry.data;
}

/** The console's screens, in menu order, with their path under /console. */
export const SCREENS = [
  { id: 'overview', path: '' },
  { id: 'status', path: 'status' },
  { id: 'events', path: 'events' },
  { id: 'networks', path: 'networks' },
  { id: 'tools', path: 'tools' },
] as const;
export type ScreenId = (typeof SCREENS)[number]['id'];
