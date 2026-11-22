/**
 * Widgets that content can insert with :::widget{name="…"}. The Markdown only
 * carries the name; the component that renders it lives in the code of its
 * area. To add one: its name here, its component in src/site/widgets.ts or
 * src/docs/widgets.ts.
 */
export const siteWidgetNames = ['hash-chain'] as const;

export const docsWidgetNames = [
  'fee-calc',
  'unit-converter',
  'consensus-sim',
  'vote-sim',
  'ibc-sim',
  'network-switch',
  'network-params',
  'provider-directory',
  'add-network',
] as const;

/** Every name accepted by :::widget (checked when the Markdown is built). */
export const widgetNames = [...siteWidgetNames, ...docsWidgetNames];

/** An area's widgets: name → component. */
export type Widgets = Record<string, (props: Record<string, never>) => unknown>;
