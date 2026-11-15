/**
 * Widgets that content can insert with :::widget{name="…"}. The Markdown only
 * carries the name; the component that renders it lives in the engine.
 * Add a name here and its component in Splice.astro to make a widget available.
 */
export const widgetNames = [
  'hash-chain',
  'fee-calc',
  'unit-converter',
  'consensus-sim',
  'vote-sim',
  'ibc-sim',
  'network-switch',
  'network-params',
  'provider-directory',
  'add-network',
  'case-gallery',
] as const;

export type WidgetName = (typeof widgetNames)[number];
