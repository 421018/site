---
# Site-wide text of the documentation (Spanish): brand, header, footer,
# interface labels and the 404 page. Pages live in pages/ next to this file.

language: Español # name of this language in itself, shown in the language switcher
name: 42 Chain Docs
tagline: Documentación técnica # tab title of the home page: "<name> — <tagline>"
description: Documentación técnica de 42 Chain y del Protocolo 42. Conectarse, construir aplicaciones, integrar sistemas y operar nodos.

header:
  brand: Protocol # word next to the 42 mark
  homeLink: 42 Protocol, inicio
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

footer:
  credit: Documentación de código abierto
  license: Textos CC BY 4.0
  note: © 2026 Los contribuidores de 42
  columns:
    - label: 42 Protocol
      links:
        - { label: Documentación, href: "/" }
        - { label: Consola, href: "console:/" }
        - { label: Contribuir, href: "/open-source" }
        - { label: Seguridad, href: "/open-source/security" }
        - { label: Legal, href: "/legal" }
    - label: De la misma familia
      links:
        - { label: 42 Chain, href: "site:/", text: "el proyecto" }
  links: # bottom line
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
