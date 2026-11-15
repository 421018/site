---
# Home page text (English). The layout lives in the engine.
# A line break in a title (written with "|") is shown as a line break on the page.
# Blocks are numbered automatically (01, 02…) in the order they appear on the page.
# Links to pages not yet translated point to the Spanish version.

hero:
  eyebrow: Open infrastructure protocol
  title: |
    Shared infrastructure
    anyone can verify.
  lead: Protocol 42 lets several organizations keep the same ledger and apply the same rules, without depending on the systems of any one of them. 42 Chain is the public network that runs it.
  primary: { label: How it works, href: /en/protocol }
  secondary: { label: Connect to the network, href: /en/implement/connect }
  specs: [Infinite Improbability Drive, Finality in 1 block, ~2 s per block, EVM, IBC v2, Cosmos SDK]
  chainLabel: Shared ledger · illustration

uses:
  kicker: Use cases
  title: What it is for, in practice.
  lead: "When several parties need the same data and the same rules, a distributed ledger spares any one of them from having to hold it. Each party runs its own copy, any tampering is visible and anyone can check the result. Three examples:"
  link: { label: See the use cases (in Spanish), href: /casos-de-uso }
  stories:
    - title: A diploma that verifies itself.
      text: A university records the fingerprint of every diploma it issues. Any employer can check in seconds that it is authentic, without calling anyone.
      image: ../images/casos/registros.jpg
      alt: Framed diploma with a gold seal
      credit: "Photo: Quilia, Unsplash"
      href: /casos-de-uso/registros-verificables
    - title: An origin that several parties share.
      text: Producers, carriers and buyers record every step of a batch. None of them depends on another keeping the data properly.
      image: ../images/casos/trazabilidad.jpg
      alt: Jute sack full of coffee beans
      credit: "Photo: Tatiana Fernández R, Unsplash"
      href: /casos-de-uso/trazabilidad
    - title: A maintenance history nobody rewrites.
      text: A city and its contractors record every repair to the street lighting or the water network. Every party sees the same history, signed and dated.
      image: ../images/casos/infraestructura.jpg
      alt: Double-armed street lamp lit at dusk
      credit: "Photo: Kim R-K, Unsplash"
      href: /casos-de-uso/infraestructura

build:
  kicker: For builders
  title: |
    Familiar tools.
    Verifiable rules.
  lead: "Contracts are written with standard languages and tools: Solidity, Hardhat, Foundry. An application that already works on an EVM-compatible network works here without changing its code."
  link: { label: Build applications, href: /en/implement }
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
  facts:
    - { value: ~2 s, label: Per block }
    - { value: 1 block, label: To be final }
    - { value: IBC, label: Connection to other networks }
    - { value: Apache 2.0, label: Open source }

people:
  kicker: How it is organized
  title: Each role, in different hands.
  lead: "The code, the operation of the network and the decisions about its rules are separate, and each part can be checked: the code in a public repository, operation and decisions on the chain itself."
  link: { label: How it is organized (in Spanish), href: "/codigo-abierto#circulos" }
  rows:
    - { who: Code contributors, what: "Propose and review changes in a public repository." }
    - { who: Validators and node operators, what: "Verify every block and give access to the network." }
    - { who: On-chain governance, what: "Validators and those who delegate to them vote on what changes and when." }
    - { who: Builders, what: "Offer applications and services on the network, and each is responsible for their own." }

start:
  kicker: Where to start
  title: Choose your way in.
  paths:
    - { label: Connect to the network, href: /en/implement/connect, text: "Network parameters, wallets and RPC providers." }
    - { label: Build an application, href: /en/implement, text: "Contracts compatible with industry standards, from the testnet to the mainnet." }
    - { label: Run a node, href: /implementar/nodos, text: "Verify the network yourself, serve applications or validate blocks. (In Spanish.)" }
    - { label: Integrate systems, href: /implementar/integrar, text: "Connect management systems, devices, signing tools or other networks. (In Spanish.)" }
    - { label: Understand governance, href: /protocolo/gobernanza, text: "How changes to the protocol are proposed, voted on and applied. (In Spanish.)" }

name:
  kicker: The name
  title: Why 42?
  lead: "In Douglas Adams's novel, 42 is the answer to the great question of life, the universe and everything. The answer is exact, but the meaning comes from those who ask. The protocol works the same way: it offers precise rules, and what is built with them is decided by those who use it."
  link: { label: Why 42 (in Spanish), href: "/codigo-abierto#porque42" }

closing:
  title: Shared infrastructure, rules in plain sight.
  primary: { label: Start building, href: /en/implement }
  secondary: { label: Read the documentation, href: /docs }
---
