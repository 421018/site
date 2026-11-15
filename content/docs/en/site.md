---
# Site-wide text of the documentation (English): brand, header, footer,
# interface labels and the 404 page. Pages live in pages/ next to this file.

language: English # name of this language in itself, shown in the language switcher
name: 42 Chain Docs
tagline: Technical documentation # tab title of the home page: "<name> — <tagline>"
description: Technical documentation of 42 Chain and Protocol 42. Connect, build applications, integrate systems and run nodes.

header:
  homeLink: 42 Chain documentation, home
  home: Home # first item of the main menu and of the breadcrumbs
  mainNav: Main
  menuButton: Menu
  languageNav: Language
  themeDark: Switch to dark theme
  themeLight: Switch to light theme
  search:
    label: Search
    close: Close
    noResults: No results.
    unavailable: Search is available on the published version of the site.
  links:
    - { label: "Console ↗", href: "console:/" }
    - { label: "42chain.org ↗", href: "https://example.org/en" } # [official domain]

footer:
  credit: Open-source documentation
  license: Text CC BY 4.0
  note: © 2026 The 42 Chain contributors
  extra: # extra column: the other products
    label: Tools
    links:
      - { label: "Console ↗", href: "console:/" }
      - { label: "42chain.org ↗", href: "https://example.org/en" } # [official domain]

page:
  lastReviewed: Last reviewed
  editPage: Edit this page ↗
  previous: ← Previous
  next: Next →
  chapters: Chapters
  onThisPage: On this page
  copyPage: Copy page # copies the page as Markdown, e.g. to paste into an AI assistant
  copied: Copied

notFound:
  title: Page not found
  label: Error 404
  heading: This page does not exist.
  action: Back to home
---
