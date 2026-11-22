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
  /** Developers (the documentation's home, with the console one click away): code brackets. */
  developers: '<path d="M8.5 7 L3.5 12 L8.5 17 M15.5 7 L20.5 12 L15.5 17 M13.5 5 L10.5 19" />',
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
  github: '<path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />',
  x: '<path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />',
} as const;
