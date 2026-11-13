/**
 * Site-wide settings. Every value in [brackets] is a placeholder to replace
 * before going live. Content links to /docs and /consola; those redirect to
 * the URLs below (see astro.config.mjs).
 */
export const SITE = {
  name: '42 Chain',
  url: 'https://example.org', // [dominio oficial]
  description: 'Protocolo blockchain de código abierto. Infraestructura pública para construir.',
  license: 'Apache 2.0',
  lang: 'es',
};

export const LINKS = {
  docs: 'https://example.org/docs', // [docs.dominio]
  console: 'https://example.org/consola', // [consola.dominio]
  repo: 'https://github.com/[organizacion]/42chain-site', // [repositorio del sitio]
  community: 'https://t.me/InfiniteDrive42',
};

/** "Editar esta página" points here: repo + branch + path of the content file. */
export const EDIT_BASE = `${LINKS.repo}/edit/main/`;
