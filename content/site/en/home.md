---
# Home page text (English). The layout lives in the engine.
# A line break in a title (written with "|") is shown as a line break on the page.
# Blocks are numbered automatically (01, 02…) in the order they appear on the page.

hero:
  eyebrow: Open protocol
  title: |
    Don’t Panic
    This is infrastructure.
  lead: |
    42 Chain is blockchain infrastructure.
    An improbabilistic distributed ledger.
  primary: { label: How it works, href: /protocol }
  secondary: { label: Connect to the network, href: docs:/get-started/connect }

# Verifiable protocol figures, shown in a strip under the hero.
figures:
  - { value: ~2 s, label: per block }
  - { value: 1 block, label: to be final }
  - { value: IBC v2, label: connection to other networks }
  - { value: EVM, label: standard tools }
  - { value: Apache 2.0, label: open source }

# The engine, piece by piece: one tab per piece. icon: execution, consensus,
# fees, interop, governance, security.
engine:
  kicker: The engine
  title: What holds the agreement.
  lead: |
    :::lore[Douglas Adams · The Hitchhiker’s Guide to the Galaxy]
    At the Restaurant at the End of the Universe, the accounts never add up the way one expects.

    The numbers behave improbably.

    And yet, in the end, everything fits with a precision that seems impossible.
    :::

    An improbabilistic distributed ledger works the same way: many independent copies reach the same result, and anyone can check that the accounts close.
  pieces:
    - icon: consensus
      label: Consensus
      title: Agrees on each page.
      text: The participants back the network and propose the next page. When there is enough agreement, that page closes and stays fixed. The next one is built on top of it.
      points:
        - "It closes when there is enough agreement."
        - "Each page is bound to the one before it."
        - "The agreement is recorded and can be checked."
      link: { label: How a page is agreed, href: docs:/protocol/consensus }
    - icon: execution
      label: Execution
      title: The same rules everywhere.
      text: The rules are written in the ledger itself. Everyone who keeps a copy applies them the same way.
      points:
        - "Contracts on the Ethereum virtual machine."
        - "Tools you already know."
        - "The same result on every copy."
      link: { label: How the rules are applied, href: docs:/protocol/execution }
    - icon: fees
      label: Fees
      title: The cost is visible first.
      text: Writing to the ledger has a cost proportional to the work it asks for. It is paid in Improbability and known before signing.
      points:
        - "The number appears before you confirm."
        - "Someone else can pay for you."
        - "The unit is called Improbability (42)."
      link: { label: How the work is paid for, href: docs:/protocol/fees }
    - icon: interop
      label: Interoperability
      title: Other networks check it themselves.
      text: When something has to move to another network, that network reviews the proof on its own. No intermediary has to hold the funds or the data along the way.
      points:
        - "A direct connection between networks."
        - "No intermediaries holding anything."
        - "Data and units can move."
      link: { label: How networks connect, href: docs:/protocol/interoperability }
    - icon: governance
      label: Governance
      title: Changes are decided in the open.
      text: The rules change too. They are proposed and voted on in the ledger itself. It is written down who voted and what was approved.
      points:
        - "Public proposals."
        - "A vote weighs according to what is staked."
        - "The network applies what is approved."
      link: { label: How changes are decided, href: docs:/protocol/governance }

uses:
  kicker: Use cases
  title: What it is for, in practice.
  lead: |
    When several people need to know the same thing and do not want to leave the ledger in any one person's hands, the protocol lets them share it.

    Anyone can keep a copy.
    Anyone can check the result.
  link: { label: See the use cases, href: /use-cases }
  stories:
    - tag: Agreements
      title: Agreements between strangers.
      text: Two parties who do not know each other leave a record of an exchange. No platform has to hold anything or decide.
      image: ../images/casos/registros.jpg
      alt: An agreement between parties
      credit: "Illustrative image"
      href: /use-cases/agreements-unknown
    - tag: Memory
      title: Collective memory.
      text: Several people contribute the same fact. Anyone can audit the set and see whether something changed.
      image: ../images/casos/infraestructura.jpg
      alt: Shared memory
      credit: "Illustrative image"
      href: /use-cases/collective-memory
    - tag: Sovereignty
      title: Sovereign identity and reputation.
      text: A person carries their proofs with them. Whoever receives them checks without asking earlier platforms.
      image: ../images/casos/trazabilidad.jpg
      alt: Portable proofs
      credit: "Illustrative image"
      href: /use-cases/sovereign-identity

build:
  kicker: For builders
  title: |
    Familiar tools.
    Verifiable rules.
  lead: "Contracts are written with standard languages and tools: Solidity, Hardhat, Foundry. An application that already works on an EVM-compatible network works here without changes to its code."
  link: { label: Build applications, href: docs:/build/applications }
  secondary: { label: "Open the Console ↗", href: "console:/" }
  code:
    file: hardhat.config.js
    label: Example Hardhat configuration to connect to 42 Chain
    text: |
      networks: {
        chain42: {
          url: "https://evm.infinitedrive.xyz",
          chainId: 421018,
        },
      }

      // That's it. Deploy as usual.

people:
  kicker: How it is organized
  title: Each role, in different hands.
  lead: "The code, the operation of the network and the decisions about its rules are separate. Each part can be checked."
  link: { label: How it is organized, href: "/open-source#circles" }
  rows:
    - { who: Code contributors, what: "Propose and review changes in a public repository." }
    - { who: Validators and node operators, what: "Verify each page and give access to the network." }
    - { who: On-chain governance, what: "Those who back the network vote on what changes and when." }
    - { who: Builders, what: "Offer applications and services on the network." }

start:
  kicker: Where to start
  title: Choose your way in.
  paths:
    - { icon: connect, label: Connect to the network, href: docs:/get-started/connect, text: "Network parameters, wallets and RPC providers." }
    - { icon: build, label: Build an application, href: docs:/build/applications, text: "Contracts compatible with industry standards, from the testnet to the mainnet." }
    - { icon: node, label: Run a node, href: docs:/operate/nodes, text: "Verify the network yourself, serve applications or validate blocks." }
    - { icon: integrate, label: Integrate systems, href: docs:/integrate, text: "Connect management systems, devices, signing tools or other networks." }
    - { icon: governance, label: Understand governance, href: docs:/protocol/governance, text: "How changes to the protocol are proposed, voted on and applied." }
    - { icon: docs, label: Read the documentation, href: /docs, text: "Guides and technical reference, from connecting a wallet to running a validator." }

name:
  kicker: The name
  title: Why 42?
  lead: "In Douglas Adams's novel, 42 is the answer to the great question of life, the universe and everything. The answer is exact; the meaning is supplied by those who ask. The protocol works the same way: it offers precise, verifiable rules. What is built with them is decided by those who use it."
  link: { label: Why 42, href: "/open-source#why-42" }

closing:
  title: Shared infrastructure, rules in plain sight.
  lead: A ledger that belongs to no one. Rules that apply the same way to everyone. The improbable, made possible.
  primary: { label: How the protocol works, href: /protocol }
  secondary: { label: Read the documentation, href: "docs:/" }
---
