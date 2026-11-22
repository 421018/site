---
# Site-wide text shown to visitors (in English): brand, footer, interface
# labels and the 404 page. Pages live in pages/ next to this file and the
# home page in home.md.

language: English # name of this language in itself, shown in the language switcher
name: 42 Chain
tagline: Open infrastructure protocol # tab title of the home page: "<name> — <tagline>"
description: "42 Chain runs Protocol 42, an open-source protocol for building infrastructure on a shared ledger: data several people can check, and rules that apply the same way to all of them." # default meta description

header:
  brand: Chain # word next to the 42 mark
  homeLink: 42 Chain, home # accessible name of the logo link
  home: Home # first item of the main menu
  mainNav: Main # accessible name of the main menu
  menuButton: Menu # label of the collapsed main menu on narrow screens
  languageNav: Language # accessible name of the language switcher
  submenu: show pages # accessible name of a section's menu arrow: "Protocol: show pages"
  links:
    - { label: Blog, href: /blog, weight: 1 } # weight places it among the sections
    - { label: Project, href: /about, weight: 2 }
    - { label: Documentation, href: "docs:/", weight: 10 }

footer:
  credit: Open-source project
  license: Text CC BY 4.0
  note: © 2026 The 42 contributors
  tagline: Runs on Infinite Drive.
  columns:
    - label: Explore
      links:
        - { label: Blog, href: "/blog" }
        - { label: Project, href: "/about" }
        - { label: Questions, href: "/faq" }
        - { label: Documentation, href: "docs:/" }
        - { label: Legal, href: "/legal" }
  links: # bottom line
    - { label: "@42protocol on X", href: "https://x.com/42protocol" }

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
  path: blog
  kicker: Blog
  title: Improbable stories and articles.
  lead: Tales of what happens when many keep the same ledger at once, and pieces with a point of view on shared infrastructure.
  all: All
  filterLabel: Filter by category
  byline: By the 42 contributors
  readingTime: "{n} min read"
  onThisPost: In this post
  keepReading: Keep reading
  nextStory: Next story
  editPost: Edit this post ↗
  illustrative: Illustrative image.
  categories:
    - { id: historia, label: Story, plural: Stories }
    - { id: articulo, label: Article, plural: Articles }

notFound:
  title: Page not found
  label: Error 404
  heading: This page does not exist.
  action: Back to home
---
