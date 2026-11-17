---
# Site-wide text shown to visitors (in Spanish): brand, footer, interface
# labels and the 404 page. Pages live in pages/ next to this file and the
# home page in home.md.

language: Español # name of this language in itself, shown in the language switcher
name: 42 Chain
tagline: Protocolo abierto de infraestructura # tab title of the home page: "<name> — <tagline>"
description: "42 Chain ejecuta el Protocolo 42, un protocolo de código abierto para construir infraestructura sobre un registro compartido: datos que varias personas pueden comprobar y reglas que valen igual para todas." # default meta description

header:
  homeLink: 42 Chain, inicio # accessible name of the logo link
  home: Inicio # first item of the main menu and of the breadcrumbs
  mainNav: Principal # accessible name of the main menu
  menuButton: Menú # label of the collapsed main menu on narrow screens
  languageNav: Idioma # accessible name of the language switcher
  submenu: ver páginas # accessible name of a section's menu arrow: "Protocolo: ver páginas"
  cta: { label: "Documentación ↗", href: "docs:/" } # highlighted button at the end of the header
  links:
    - { label: Bitácora, href: /log, weight: 4 } # weight places it among the sections

footer:
  credit: Proyecto de código abierto
  license: Textos CC BY 4.0
  note: © 2026 Los contribuidores de 42 Chain
  extra: # extra column: the other products
    label: Herramientas
    links:
      - { label: "Documentación ↗", href: "docs:/" }
      - { label: "Consola ↗", href: "console:/" }

page:
  lastReviewed: Última revisión
  editPage: Editar esta página ↗
  previous: ← Anterior
  next: Siguiente →
  chapters: Capítulos # accessible name of the previous/next navigation

# The blog. Posts live in posts/ next to this file; a category with "path"
# serves its posts there instead of under the blog (use cases: /use-cases/…).
blog:
  path: log
  kicker: Bitácora
  title: Casos, avances y explicaciones.
  lead: Lo que se construye sobre 42, cómo cambia el protocolo y por qué funciona como funciona.
  all: Todas
  filterLabel: Filtrar por categoría
  byline: Por los contribuidores de 42 Chain
  readingTime: "{n} min de lectura"
  onThisPost: En esta entrada
  keepReading: Sigue leyendo
  editPost: Editar esta entrada ↗
  illustrative: Imagen ilustrativa.
  categories:
    - { id: caso-de-uso, label: Caso de uso, plural: Casos de uso, path: use-cases }
    - { id: avance, label: Avance, plural: Avances }
    - { id: explicacion, label: Explicación, plural: Explicaciones }
    - { id: historia, label: Historia, plural: Historias }

notFound:
  title: Página no encontrada
  label: Error 404
  heading: Esta página no existe.
  action: Volver al inicio
---
