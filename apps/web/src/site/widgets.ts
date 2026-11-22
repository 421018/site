/** Widgets of the site's pages (names in src/widgets/names.ts). */
import HashChain from './widgets/HashChain.astro';
import type { siteWidgetNames } from '../widgets/names';

export const siteWidgets: Record<(typeof siteWidgetNames)[number], (props: Record<string, never>) => unknown> = {
  'hash-chain': HashChain,
};
