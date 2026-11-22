/**
 * Icons of the areas (24×24 paths, drawn with a stroke): used by the buttons
 * that lead from one area to another, in every header, and by the console.
 */
export const areaIcons = {
  /** The documentation: an open book. */
  docs: '<path d="M4 5.5 C6.5 4.5 9.5 4.5 12 6 C14.5 4.5 17.5 4.5 20 5.5 V18.5 C17.5 17.5 14.5 17.5 12 19 C9.5 17.5 6.5 17.5 4 18.5 Z M12 6 V19" />',
  /** Back to the site: an arrow. */
  site: '<path d="M14 6 L8 12 L14 18" />',
  /** The console: a prompt. */
  console: '<path d="M5 7 L10 12 L5 17 M12 17 H19" />',
} as const;

/** Icons of the console's screens. */
export const consoleIcons = {
  overview: '<rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" />',
  status: '<path d="M3 12 H7 L9.5 6 L14 18 L16.5 12 H21" />',
  events: '<path d="M7 4 V20 M7 6 H18 L15.5 9.5 L18 13 H7" />',
  networks: '<circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.3 11 L15.7 7 M8.3 13 L15.7 17" />',
  tools: '<path d="M14.5 5.5 A4 4 0 0 0 9.8 10.6 L4.5 15.9 A1.8 1.8 0 0 0 7.1 18.5 L12.4 13.2 A4 4 0 0 0 17.5 8.5 L15 11 L13 9 Z" />',
} as const;

/** Logos of the networks where the project has an official profile (24×24, filled). */
export const socialIcons = {
  x: '<path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />',
} as const;
