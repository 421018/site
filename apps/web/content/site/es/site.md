---
# Site-wide text shown to visitors (in Spanish): brand, footer, interface
# labels and the 404 page. Pages live in pages/ next to this file and the
# home page in home.md.

language: Español # name of this language in itself, shown in the language switcher
name: 42 Chain
tagline: Protocolo abierto de infraestructura # tab title of the home page: "<name> — <tagline>"
description: "42 Chain ejecuta el Protocolo 42, un protocolo de código abierto para construir infraestructura sobre un registro compartido: datos que varias personas pueden comprobar y reglas que valen igual para todas." # default meta description

header:
  brand: Chain # word next to the 42 mark
  homeLink: 42 Chain, inicio # accessible name of the logo link
  home: Inicio # first item of the main menu
  mainNav: Principal # accessible name of the main menu
  menuButton: Menú # label of the collapsed main menu on narrow screens
  languageNav: Idioma # accessible name of the language switcher
  submenu: ver páginas # accessible name of a section's menu arrow: "Protocolo: ver páginas"
  links:
    - { label: Blog, href: /blog, weight: 1 } # weight places it among the sections
    - { label: Proyecto, href: /about, weight: 2 }
    - { label: Documentación, href: "docs:/", weight: 10 }
    - { label: Consola, href: "console:/", weight: 11 }

footer:
  credit: Proyecto de código abierto
  license: Textos CC BY 4.0
  note: © 2026 Los contribuidores de 42
  tagline: Funciona sobre Infinite Drive.
  columns:
    - label: Explorar
      links:
        - { label: Blog, href: "/blog" }
        - { label: Proyecto, href: "/about" }
        - { label: Preguntas, href: "/faq" }
        - { label: Documentación, href: "docs:/" }
        - { label: Consola, href: "console:/" }
        - { label: Legal, href: "/legal" }
  links: # bottom line
    - { label: "@42protocol en X", href: "https://x.com/42protocol" }

page:
  lastReviewed: Última revisión
  editPage: Editar esta página ↗
  previous: ← Anterior
  next: Siguiente →
  chapters: Capítulos # accessible name of the previous/next navigation

# The blog. Posts live in posts/ next to this file; a category with "path"
# serves its posts there instead of under the blog.
blog:
  path: blog
  kicker: Blog
  title: Historias improbables y artículos.
  lead: Relatos de lo que pasa cuando un registro lo guardan muchos a la vez, y textos con punto de vista sobre la infraestructura compartida.
  all: Todas
  filterLabel: Filtrar por categoría
  byline: Por los contribuidores de 42
  readingTime: "{n} min de lectura"
  onThisPost: En esta entrada
  keepReading: Sigue leyendo
  nextStory: Siguiente historia
  editPost: Editar esta entrada ↗
  illustrative: Imagen ilustrativa.
  categories:
    - { id: historia, label: Historia, plural: Historias }
    - { id: articulo, label: Artículo, plural: Artículos }

notFound:
  title: Página no encontrada
  label: Error 404
  heading: Esta página no existe.
  action: Volver al inicio
---
