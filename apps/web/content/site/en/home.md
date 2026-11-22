---
# Home page text (English). The layout lives in src/components/Home.astro.
# A line break in a title (written with "|") is shown as a line break on the page.
# Paragraphs are separated by a blank line. The central idea is said once, in
# the editorial; the rest of the page lets it be felt without repeating it.

hero:
  eyebrow: Open protocol
  title: |
    Don’t Panic
    This is infrastructure.
  lead: |
    42 Chain is blockchain infrastructure.
    An improbabilistic distributed ledger.
  primary: { label: Start reading, href: "/#editorial" }
  secondary: { label: Read the blog, href: /blog }

live:
  kicker: The network, now
  title: While you read this, the network keeps writing.
  lead: "Each square is a block just closed, read right now from your browser to the public providers. The gold one is the newest."
  height: Latest block
  pace: Time per block
  online: Providers online
  seconds: "{n} s"
  block: "Block {n}"
  waiting: Listening to the network…
  unavailable: The public providers are not answering right now.
  link: { label: Open the console, href: "console:/status" }

editorial:
  kicker: Editorial
  title: Every age builds its invisible infrastructure.
  body: |
    Roads, electricity and the internet all began as improbable ideas, the kind people discuss sceptically in long meetings. They ended up as things nobody thinks about. They are simply there, like the floor, or Monday's coffee.

    Today everything is connected and almost nothing can be checked. People, organizations, machines and programs exchange data, value and decisions, and each keeps its own version of what happened. Getting them to agree is an expensive, slow sport with a great many referees.
  statement: "Infinite Drive is ours: common infrastructure that anyone can build on, and where anyone can check what happens without having to trust anyone else."
  aside: "We keep it running together, so it does not depend on any single party. It does not ask for faith: at most, for a little curiosity."

engine:
  kicker: The engine
  title: At the centre there is an engine, not an office.
  lead: "Infinite Drive holds the network up and keeps it connected. Every node that joins, on a desk, in a classroom or in a data centre, makes it a little stronger, and they all check the same thing."
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
  caption: Every dot is a node. Together they make 42 Chain.
  link: { label: How the engine works, href: "docs:/protocol" }

beliefs:
  kicker: What we believe
  title: Two texts from the nineties said almost everything. Writing the code fell to us.
  lead: "A Declaration of the Independence of Cyberspace and A Cypherpunk's Manifesto imagined a space you enter without asking permission, where privacy is built rather than begged for. Thirty years later we still think the same, with rather more coffee and far fewer modems."
  items:
    - title: Come in without asking.
      text: Using the network, building on it or running your own node needs no invitation. Not even ours.
    - title: Privacy is not secrecy.
      text: It is deciding what you tell, and to whom. The rest is your business.
    - title: Freedom is written in code.
      text: Open, so anyone can read it, use it and improve it. Good intentions compile badly.
  link: { label: "Everything we believe, in the project", href: "/about#beliefs" }

story:
  kicker: A story from the blog
  link: Read the story

vision:
  kicker: Where we are going
  title: If everything switches off tomorrow, may your node stay on.
  body: |
    We imagine an ordinary day when the big services everything depends on all decide, at once, to take the afternoon off. On many desks, in classrooms and in cupboards, small nodes carry on as if nothing had happened. Nobody panics. Somebody puts the kettle on.

    That is the horizon: standard infrastructure, for big things and small, trusted not because of who develops it but because we all keep it running. Where anyone, technical, student or simply curious, can run their own node and look after their part of the mesh.
  link: { label: How to run your own node, href: "docs:/operate/nodes" }

work:
  kicker: Meanwhile, in the engine room
  title: Unglamorous work, very necessary.
  body: |
    We polish, improve and align the node's code with the base it is built on, so that Infinite Drive stays stable and meets the highest standards of the industry. It is the kind of work you only notice when it is missing.

    What gets built on top is not ours to decide: builders and users make use of it freely, for their own purposes.
  link: { label: "The latest, on the blog", href: /blog }

blog:
  kicker: The library
  title: From the blog.
  link: { label: Stories and articles, href: /blog }

paths:
  kicker: Where to next
  title: Everyone arrives looking for something different.
  items:
    - icon: connect
      title: Understand
      text: What 42 is, what we believe and why it has that name.
      href: /about
    - icon: build
      title: Build
      text: Contracts and applications with the standard EVM tools.
      href: "docs:/build"
    - icon: node
      title: Run a node
      text: Add your machine to the network and look after your part of the mesh.
      href: "docs:/operate/nodes"
    - icon: consensus
      title: Follow the network
      text: Live status, events and connections, in the console.
      href: "console:/"

name:
  kicker: The name
  title: Why 42?
  lead: "In a very serious novel about the universe, the answer to the great question turned out to be 42, and ships crossed the galaxy thanks to an infinite improbability drive. We kept the number, the idea of the engine and the healthy habit of not taking ourselves too seriously."
  link: { label: The story of the name, href: /name }

closing:
  title: The improbable, under way.
  lead: Without asking permission. Without asking for faith. With a towel nearby, just in case.
  primary: { label: Meet the project, href: /about }
  secondary: { label: Run your own node, href: "docs:/operate/nodes" }
---
