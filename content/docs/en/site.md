---
# Site-wide text of the documentation (English): brand, header, footer,
# interface labels and the 404 page. Pages live in pages/ next to this file.

language: English # name of this language in itself, shown in the language switcher
name: 42 Chain Docs
tagline: Technical documentation # tab title of the home page: "<name> — <tagline>"
description: Technical documentation of 42 Chain and Protocol 42. Connect, build applications, integrate systems and run nodes.

header:
  homeLink: 42 Chain documentation, home
  brand: Docs # word next to the 42 mark in the header
  home: Home # first item of the main menu and of the breadcrumbs
  mainNav: Main
  menuButton: Menu
  languageNav: Language
  notice: # shown under the header on every page while the documentation is being written
    label: Documentation under construction.
    text: "We are writing and integrating this documentation: many pages are incomplete, some guides do not exist yet and some values may change. Check critical values before using them on the mainnet."
  themeDark: Switch to dark theme
  themeLight: Switch to light theme
  search:
    label: Search
    close: Close
    noResults: No results.
    unavailable: Search is available on the published version of the site.
  links:
    - { label: "Console ↗", href: "console:/" }
    - { label: "42chain.org ↗", href: "site:/" } # the main site, in this language

footer:
  credit: Open-source documentation
  license: Text CC BY 4.0
  note: © 2026 The 42 Chain contributors
  extra: # extra column: the other products
    label: Tools
    links:
      - { label: "Console ↗", href: "console:/" }
      - { label: "42chain.org ↗", href: "site:/" } # the main site, in this language

page:
  lastReviewed: Last reviewed
  editPage: Edit this page ↗
  previous: ← Previous
  next: Next →
  chapters: Chapters
  untranslated: "This page has not been translated into English yet, so it is shown in Spanish."
  onThisPage: On this page
  copyPage: Copy page # copies the page as Markdown, e.g. to paste into an AI assistant
  copied: Copied

notFound:
  title: Page not found
  label: Error 404
  heading: This page does not exist.
  action: Back to home
---
