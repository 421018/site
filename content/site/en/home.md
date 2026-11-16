---
# Home page text (English). The layout lives in the engine.
# A line break in a title (written with "|") is shown as a line break on the page.
# Blocks are numbered automatically (01, 02…) in the order they appear on the page.
# Links to pages not yet translated point to the Spanish version.

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

figures:
  - { value: ~2 s, label: per block }
  - { value: 1 block, label: to be final }
  - { value: IBC v2, label: connection to other networks }
  - { value: EVM, label: standard tools }
  - { value: Apache 2.0, label: open source }

engine:
  kicker: The engine
  title: Five parts. One ledger.
  lead: Each one carries part of the agreement among the people who use the ledger.
  pieces:
    - icon: consensus
      label: Consensus
      title: Agrees on each block.
      text: Validators propose and sign blocks. With more than two thirds of the voting power, the block is confirmed and final.
      points:
        - "Finality in one block."
        - "Tolerates faults of less than a third of the voting power."
        - "Without a majority, the network halts rather than take risks."
      link: { label: How a block is agreed, href: docs:/protocol/consensus }
    - icon: execution
      label: Execution
      title: Runs the contracts.
      text: Contracts run on the Ethereum Virtual Machine (EVM). Every node reaches exactly the same result.
      points:
        - "Solidity and Vyper, without code changes."
        - "Hardhat, Foundry, Viem and EVM wallets."
        - "The network's own functions available from contracts."
      link: { label: How the rules run, href: docs:/protocol/execution }
    - icon: fees
      label: Fees
      title: Measures and pays for the work.
      text: "Every transaction pays a fee proportional to the work it requires, in the native unit: Improbability."
      points:
        - "Public rules: the cost is known before sending."
        - "Someone else can pay the fee for whoever signs."
        - "Units in drops and cups."
      link: { label: How the work is paid, href: docs:/protocol/fees }
    - icon: interop
      label: Interoperability
      title: Connects to other networks.
      text: With IBC, each network checks for itself, with cryptographic proofs, what happened on the other. Nobody holds the units in transit.
      points:
        - "IBC, versions 1 and 2."
        - "No trusted intermediaries."
        - "Data and units across networks."
      link: { label: How networks connect, href: docs:/protocol/interoperability }
    - icon: governance
      label: Governance
      title: Decides the changes.
      text: Changes are proposed and voted on the chain. Each vote weighs according to the units in staking.
      points:
        - "Proposals recorded on the chain."
        - "Public quorum, threshold and veto."
        - "The network applies what is approved."
      link: { label: How changes are decided, href: docs:/protocol/governance }

uses:
  kicker: Use cases
  title: What it is for, in practice.
  lead: "When several people need the same data and the same rules, the ledger does not have to sit with any one of them. Each person can keep a copy, any tampering is visible and anyone can check the result. Three examples:"
  link: { label: See the use cases (in Spanish), href: /use-cases }
  stories:
    - tag: Verifiable records
      title: A certificate anyone can check.
      text: Ana finishes a course. The certificate stays in her hands. Whoever hires her checks the fingerprint in seconds, without calling anyone.
      image: ../images/casos/registros.jpg
      alt: Framed diploma with a gold seal
      credit: "Photo: Quilia, Unsplash"
      href: /use-cases/verifiable-records
    - tag: Traceability
      title: The path of a sack of coffee.
      text: Whoever grows it, whoever roasts it and whoever opens the sack leave the same path. Bruno sees every step, without piecing the trail back together.
      image: ../images/casos/trazabilidad.jpg
      alt: Jute sack full of coffee beans
      credit: "Photo: Tatiana Fernández R, Unsplash"
      href: /use-cases/traceability
    - tag: Infrastructure
      title: The story of a street lamp.
      text: The lamp on the corner goes out. Whoever repairs it and whoever lives there see the same history, signed and dated, and nobody rewrites it.
      image: ../images/casos/infraestructura.jpg
      alt: Double-armed street lamp lit at dusk
      credit: "Photo: Kim R-K, Unsplash"
      href: /use-cases/infrastructure

build:
  kicker: For builders
  title: |
    Familiar tools.
    Verifiable rules.
  lead: "Contracts are written with standard languages and tools: Solidity, Hardhat, Foundry. An application that already works on an EVM-compatible network works here without changing its code."
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
  lead: "The code, the operation of the network and the decisions about its rules are separate, and each part can be checked: the code in a public repository, operation and decisions on the chain itself."
  link: { label: How it is organized (in Spanish), href: "/open-source#circles" }
  rows:
    - { who: Code contributors, what: "Propose and review changes in a public repository." }
    - { who: Validators and node operators, what: "Verify every block and give access to the network." }
    - { who: On-chain governance, what: "Validators and those who delegate to them vote on what changes and when." }
    - { who: Builders, what: "Offer applications and services on the network, and each is responsible for their own." }

start:
  kicker: Where to start
  title: Choose your way in.
  paths:
    - { icon: connect, label: Connect to the network, href: docs:/get-started/connect, text: "Network parameters, wallets and RPC providers." }
    - { icon: build, label: Build an application, href: docs:/build/applications, text: "Contracts compatible with industry standards, from the testnet to the mainnet." }
    - { icon: node, label: Run a node, href: docs:/operate/nodes, text: "Verify the network yourself, serve applications or validate blocks. (In Spanish.)" }
    - { icon: integrate, label: Integrate systems, href: docs:/integrate, text: "Connect management systems, devices, signing tools or other networks. (In Spanish.)" }
    - { icon: governance, label: Understand governance, href: docs:/protocol/governance, text: "How changes to the protocol are proposed, voted on and applied." }
    - { icon: docs, label: Read the documentation, href: /docs, text: "Guides and technical reference, from connecting a wallet to running a validator." }

name:
  kicker: The name
  title: Why 42?
  lead: "In Douglas Adams's novel, 42 is the answer to the great question of life, the universe and everything. The answer is exact, but the meaning comes from those who ask. The protocol works the same way: it offers precise rules, and what is built with them is decided by those who use it."
  link: { label: Why 42 (in Spanish), href: "/open-source#why-42" }

closing:
  title: Shared infrastructure, rules in plain sight.
  primary: { label: Start building, href: docs:/build/applications }
  secondary: { label: Read the documentation, href: "docs:/" }
---
