---
# Site-wide text shown to visitors (in English): brand, footer, interface
# labels and the 404 page. Pages live in pages/ next to this file and the
# home page in home.md.

language: English # name of this language in itself, shown in the language switcher
name: 42 Chain
tagline: Open infrastructure protocol # tab title of the home page: "<name> — <tagline>"
description: "42 Chain runs Protocol 42, an open-source protocol for operating infrastructure on distributed ledgers: shared data, verifiable rules and services between organizations." # default meta description

header:
  homeLink: 42 Chain, home # accessible name of the logo link
  home: Home # first item of the main menu and of the breadcrumbs
  mainNav: Main # accessible name of the main menu
  menuButton: Menu # label of the collapsed main menu on narrow screens
  languageNav: Language # accessible name of the language switcher
  submenu: show pages # accessible name of a section's menu arrow: "Protocol: show pages"
  cta: { label: "Documentation ↗", href: "docs:/" } # highlighted button at the end of the header
  links:
    - { label: Logbook, href: /log, weight: 4 } # weight places it among the sections

footer:
  credit: Open-source project
  license: Text CC BY 4.0
  note: © 2026 The 42 Chain contributors
  extra: # extra column: the other products
    label: Tools
    links:
      - { label: "Documentation ↗", href: "docs:/" }
      - { label: "Console ↗", href: "console:/" }

page:
  lastReviewed: Last reviewed
  editPage: Edit this page ↗
  previous: ← Previous
  next: Next →
  chapters: Chapters # accessible name of the previous/next navigation
  untranslated: "This page has not been translated into English yet, so it is shown in Spanish."

# The blog. Posts live in posts/ next to this file; until a post is translated,
# the Spanish one is shown. Category ids are shared with the other languages.
blog:
  path: log
  kicker: Logbook
  title: Cases, progress and explanations.
  lead: What is built on 42, how the protocol changes and why it works the way it does.
  all: All
  filterLabel: Filter by category
  byline: By the 42 Chain contributors
  readingTime: "{n} min read"
  onThisPost: In this post
  keepReading: Keep reading
  editPost: Edit this post ↗
  illustrative: Illustrative image.
  categories:
    - { id: caso-de-uso, label: Use case, plural: Use cases, path: use-cases }
    - { id: avance, label: Progress, plural: Progress }
    - { id: explicacion, label: Explanation, plural: Explanations }
    - { id: historia, label: Story, plural: Stories }

notFound:
  title: Page not found
  label: Error 404
  heading: This page does not exist.
  action: Back to home
---
