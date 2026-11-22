---
# Project page text (/about, English). The layout lives in src/components/Project.astro.
# Paragraphs are separated by a blank line.

title: Common infrastructure, kept running by those who use it.
description: "What Infinite Drive is, what we believe, how it is kept running, what we are working on and where we are going."
kicker: Project

what:
  id: what-is
  kicker: What Infinite Drive is
  title: An engine that does not choose its passengers.
  body: |
    Infinite Drive, the 42 protocol, is the core of 42 Chain: it keeps the ledger, applies the same rules to everyone and lets anyone check what has happened. On top of it, each of us builds what we need: an application, a service, a tool for a neighbourhood or for a company.

    It serves a person with an old laptop just as it serves an institution with a data centre. Both come in through the same door, follow the same rules and can check the same things. Neither needs to trust the other, nor us.
  art:
    name: Infinite Drive
    kicker: The engine
    aria: Infinite Drive at the centre, like an engine, connecting many nodes that form a single network
    labels:
      - a person
      - a community
      - a student with an old laptop
      - an institution
      - a program
      - a cooperative
  caption: Infinite Drive at the centre; every dot is a node, and together they make 42 Chain.

beliefs:
  id: beliefs
  kicker: What we believe
  title: They said it in 1993 and in 1996. We still agree.
  body: |
    Our values come from two texts that imagined the internet as a free place: A Declaration of the Independence of Cyberspace, by John Perry Barlow, and A Cypherpunk's Manifesto, by Eric Hughes. We do not quote them as slogans. We have translated them into six convictions we make decisions with.
  sources:
    - { label: "A Declaration of the Independence of Cyberspace (1996)", href: "https://www.eff.org/cyberspace-independence" }
    - { label: "A Cypherpunk's Manifesto (1993)", href: "https://www.activism.net/cypherpunk/manifesto.html" }
  items:
    - { icon: open, title: Come in without asking., text: "Using the network, building on it or running your own node needs nobody's invitation.", source: Barlow }
    - { icon: privacy, title: Privacy is not secrecy., text: "It is deciding what you tell, and to whom. Reveal what is needed and nothing more.", source: Hughes }
    - { icon: code, title: Freedom is written in code., text: "Open, so anyone can read it, use it and improve it. Good intentions compile badly.", source: Hughes }
    - { icon: vote, title: The rules are kept by those who take part., text: "Changes are proposed and voted on in the network itself, where everyone can see them.", source: Barlow }
    - { icon: verify, title: "Check, don't trust.", text: "Nobody has to believe anybody: each of us can verify what happens for ourselves.", source: Barlow and Hughes }
    - { icon: node, title: "Everyone, their own node.", text: "For students and the curious, not only for specialists. Your infrastructure, in your care.", source: Hughes }
  note: "Institutions, companies and governments are welcome, like anyone else: through the same door and under the same rules."

quote: "Thirty years ago someone wrote that freedom had to be built. We are still at it, one line of code at a time."

organization:
  id: organization
  kicker: How it is kept running
  title: Every piece, in different hands.
  body: |
    The code is written and reviewed by contributors, in the open. The network is kept up by nodes spread around the world, and anyone can add theirs. The rules change only when those who take part approve it, voting in the network itself. And what is built on top is decided by whoever builds it.
  cards:
    - { title: The code, text: "Contributors, in the open" }
    - { title: The network, text: Anyone's nodes }
    - { title: The rules, text: Voted in plain sight }
    - { title: What gets built, text: "Anyone, without asking" }

work:
  id: work
  kicker: What we are working on
  title: The engine room.
  body: |
    We polish, improve and align the node's code with the base it is built on, so that Infinite Drive stays stable and meets the highest standards of the industry. It is unglamorous work: you only notice it when it is missing. And every change follows the same path, with no shortcuts.
  steps:
    - Proposed in the open
    - Tested on the testnet
    - Voted on in the network
    - Reaches the mainnet

vision:
  id: vision
  kicker: Where we are going
  title: Standard infrastructure, for big things and small.
  body: |
    We imagine Infinite Drive as useful for everyday things as for very specific ones: a common environment trusted not because of who develops it, but because we all keep it running and keep it resilient.

    We imagine nobody having to depend on someone else's infrastructure that they cannot control. Anyone able to run their own node and look after their part of the mesh. And if one day the systems go down, each of us keeping our own piece standing, and all of us, the network.

doors:
  - { kicker: The name, title: "Why 42?", text: "A novel, an infinite improbability drive and a properly made cup of tea.", href: /name }
  - { kicker: To stay safe, title: Official channels, text: "Where the project speaks, and the golden rule: nobody will ever ask for your recovery phrase.", href: /channels }
---
