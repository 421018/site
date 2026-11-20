---
# Site-wide text of the documentation (Spanish): brand, header, footer,
# interface labels and the 404 page. Pages live in pages/ next to this file.

language: Español # name of this language in itself, shown in the language switcher
name: 42 Chain Docs
tagline: Documentación técnica # tab title of the home page: "<name> — <tagline>"
description: Documentación técnica de 42 Chain y del Protocolo 42. Conectarse, construir aplicaciones, integrar sistemas y operar nodos.

header:
  homeLink: Documentación de 42 Chain, inicio
  home: Inicio # first item of the main menu and of the breadcrumbs
  mainNav: Principal
  menuButton: Menú
  languageNav: Idioma
  notice: # shown under the header on every page while the documentation is being written
    label: Documentación en construcción.
    text: "Estamos escribiendo e integrando esta documentación: muchas páginas están incompletas, algunas guías aún no existen y ciertos datos pueden cambiar. Comprueba los valores críticos antes de usarlos en la red principal."
  themeDark: Cambiar a tema oscuro
  themeLight: Cambiar a tema claro
  search:
    label: Buscar
    close: Cerrar
    noResults: Sin resultados.
    unavailable: La búsqueda está disponible en la versión publicada del sitio.
  links:
    - { label: Consola, href: "console:/" }
  areas: # the areas of 42, at the far right of the header
    label: Áreas de 42
    items:
      - { label: Chain, href: "site:/", current: false }
      - { label: Protocol, href: "/", current: true }

footer:
  credit: Documentación de código abierto
  license: Textos CC BY 4.0
  note: © 2026 Los contribuidores de 42 Chain
  # Shared by every area of 42 (Chain and Protocol): only the main ways in.
  columns:
    - label: Chain
      links:
        - { label: Bitácora, href: "site:/log" }
        - { label: Proyecto, href: "site:/about" }
        - { label: Preguntas, href: "site:/faq" }
    - label: Protocol
      links:
        - { label: Documentación, href: "/" }
        - { label: Consola, href: "console:/" }
    - label: Código abierto
      links:
        - { label: Contribuir, href: "/open-source" }
        - { label: Seguridad y reportes, href: "/open-source/security" }
  links: # bottom line
    - { label: Legal, href: "site:/legal" }
    - { label: "@42protocol en X", href: "https://x.com/42protocol" }

page:
  lastReviewed: Última revisión
  editPage: Editar esta página ↗
  previous: ← Anterior
  next: Siguiente →
  chapters: Capítulos
  onThisPage: En esta página
  copyPage: Copiar página # copies the page as Markdown, e.g. to paste into an AI assistant
  copied: Copiado

notFound:
  title: Página no encontrada
  label: Error 404
  heading: Esta página no existe.
  action: Volver al inicio
---
