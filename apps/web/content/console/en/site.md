---
# Common texts of the console: brand, header, footer and the 404 page.
# Each screen's texts are in console.md, next to this file.

language: English # name of this language in itself, shown in the language switcher
name: 42 Chain Console
tagline: Tools and network status # tab title of the overview: "<name> — <tagline>"
description: Tools to connect to 42 Chain, check the network's status and follow what happens on it.

header:
  brand: Console # word next to the 42 mark
  homeLink: 42 Chain Console, overview
  home: Overview # first item of the side menu
  mainNav: Console
  menuButton: Menu
  languageNav: Language
  links:
    - { label: Documentation, href: "docs:/" }
    - { label: 42 Chain, href: "site:/" }

footer:
  credit: Open-source console
  license: Text CC BY 4.0
  note: © 2026 The 42 contributors
  columns:
    - label: Console
      links:
        - { label: Overview, href: "/" }
        - { label: Network status, href: "/status" }
        - { label: Documentation, href: "docs:/" }
        - { label: Legal, href: "site:/legal" }
    - label: Home
      links:
        - { label: 42 Chain, href: "site:/", text: "the project's magazine" }
  social:
    - { network: x, label: Follow us on X, handle: "@42protocol", href: "https://x.com/42protocol" }

page:
  lastReviewed: Last reviewed
  editPage: Edit this page ↗
  previous: ← Previous
  next: Next →
  chapters: Chapters

notFound:
  title: Page not found
  label: Error 404
  heading: This screen does not exist.
  action: Back to the overview
---
