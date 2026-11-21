/**
 * Names of the brand icons content can refer to (home.md: engine pieces and
 * start paths; page front matter: menu icons). The drawings live in Icon.astro.
 */
export const iconNames = [
  // the five pieces of the engine, plus security
  'execution', 'consensus', 'fees', 'interop', 'governance', 'security',
  // ways in
  'connect', 'build', 'node', 'integrate', 'docs', 'cases', 'opensource',
] as const;
export type IconName = (typeof iconNames)[number];
