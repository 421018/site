---
# Text of the project page (/about). The layout lives in src/site/components/Project.astro.
# Paragraphs: separated by a blank line.

title: Open infrastructure, sustained by those who use it.
description: "What Infinite Drive is, its principles, how it is governed, what is being worked on and where it is going."
kicker: Project

what:
  id: what-is
  kicker: What it is
  title: Infinite Drive is the protocol. 42 Chain is the network.
  body: |
    Infinite Drive is an open-source blockchain protocol: it defines how each block is agreed, how contracts run, how fees are paid and how the rules change. 42 Chain is the public network that runs on it.

    It is built on proven industry pieces (CometBFT, the Cosmos SDK, the EVM and IBC) and kept aligned with them. The goal is simple to state and demanding to meet: a stable, verifiable base, open to anyone.

facts:
  title: Fact sheet
  items:
    - { label: Protocol, value: Infinite Drive }
    - { label: Network, value: 42 Chain }
    - { label: Chain ID (EVM), value: "421018", note: "Testnet: 421018001" }
    - { label: Chain ID (native), value: infinite_421018-1 }
    - { label: Native unit, value: "Improbability · 42", note: "Smallest fraction: drop (10⁻¹⁸)" }
    - { label: Consensus, value: "CometBFT", note: Single-block finality }
    - { label: Code, value: Apache 2.0 }
    - { label: Texts and data, value: CC BY 4.0 }

beliefs:
  id: beliefs
  kicker: Principles
  title: Six convictions behind every decision.
  body: |
    They come from two texts that imagined the internet as a free place: John Perry Barlow's Declaration of the Independence of Cyberspace and Eric Hughes's Cypherpunk's Manifesto. We take their values, not their confrontation.
  sources:
    - { label: "A Declaration of the Independence of Cyberspace (1996)", href: "https://www.eff.org/cyberspace-independence" }
    - { label: "A Cypherpunk's Manifesto (1993)", href: "https://www.activism.net/cypherpunk/manifesto.html" }
  items:
    - { icon: open, title: No permission needed, text: "Using the network, building on it or running a node needs nobody's invitation.", source: Barlow }
    - { icon: privacy, title: Privacy is not secrecy, text: "It is choosing what to reveal and to whom. What is needed, and nothing more.", source: Hughes }
    - { icon: code, title: Freedom is written in code, text: "Open, so anyone can read it, use it and improve it.", source: Hughes }
    - { icon: vote, title: Rules of those who take part, text: "Changes are proposed and voted on the network itself, in plain sight.", source: Barlow }
    - { icon: verify, title: "Verify, don't trust", text: "Anyone can check what happens without believing anyone.", source: Barlow and Hughes }
    - { icon: node, title: "Everyone, their own node", text: "Running a node should be within reach of students and the curious, not only specialists.", source: Hughes }
  note: "Institutions, companies and governments are welcome on equal terms: through the same door and under the same rules."

organization:
  id: organization
  kicker: Governance
  title: Every piece, in different hands.
  body: |
    No single party controls the whole. The code is written and reviewed in the open, the network is sustained by independent nodes, the rules change by vote on the chain itself, and what is built on top is decided by whoever builds it.
  cards:
    - { title: The code, text: "Contributors, in the open" }
    - { title: The network, text: Independent nodes }
    - { title: The rules, text: Voted on the chain }
    - { title: The applications, text: "Anyone, without asking" }

work:
  id: work
  kicker: Current work
  title: Stability first.
  body: |
    The current work is keeping the node aligned with the latest versions of its base, fixing, testing and hardening. It is the kind of work you only notice when it is missing. Every change follows the same path, with no shortcuts.
  steps:
    - Proposed in the open
    - Tested on the testnet
    - Voted on the chain
    - Reaches the mainnet

vision:
  id: vision
  kicker: Where it is going
  title: A standard base, for big things and small ones.
  body: |
    Common infrastructure that earns trust not because of who builds it, but because anyone can check it and sustain it. Nobody depending on someone else's infrastructure they cannot control, and running a node as ordinary as running a mail server.

doors:
  - { kicker: Build, title: Documentation, text: "From the first contract to running a node.", href: "docs:/get-started" }
  - { kicker: Live, title: Console, text: "Network status, parameters and tools.", href: "console:/" }
  - { kicker: Stay safe, title: Official channels, text: "Where the project speaks. Nobody will ever ask for your recovery phrase.", href: /channels }
  - { kicker: The name, title: "Why 42?", text: "Where the name comes from, and the towel.", href: /name }
---
