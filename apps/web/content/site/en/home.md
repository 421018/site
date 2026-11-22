---
# Home page text (English). The layout lives in src/site/components/Home.astro.
# A line break in the hero title is shown as a line break on the page.
# Every capability below must be verifiable in the protocol's code.

description: "42 Chain is a public blockchain network: EVM compatible, with single-block finality and interoperable through IBC. It runs on Infinite Drive, an open-source protocol."

hero:
  status: Mainnet · live
  title: |
    Don’t Panic.
    This is infrastructure.
  lead: "42 Chain is a public blockchain network: EVM compatible, with single-block finality and interoperable through IBC. It runs on Infinite Drive, an open-source protocol anyone can verify, use and operate."
  primary: { label: Start building, href: "docs:/get-started" }
  secondary: { label: See the network live, href: "console:/" }
  height: Latest block
  pace: Time per block
  online: Providers online
  finality: Finality
  finalityValue: 1 block
  chain: Chain ID
  seconds: "{n} s"
  block: "Block {n}"
  unavailable: The public providers are not answering right now.

features:
  kicker: The network
  title: What you already know, on a base that does not move.
  lead: The industry's standard tools, one final confirmation per block and native bridges to other networks. All of it open source.
  items:
    - icon: execution
      title: EVM compatible
      text: Solidity, Hardhat, Foundry, ethers and MetaMask work unchanged. If you already build for the EVM, you already build here.
      href: "docs:/build/applications"
    - icon: consensus
      title: Single-block finality
      text: CometBFT confirms every block for good. No reorganisations, no confirmations to wait for.
      href: "docs:/protocol/consensus"
    - icon: interop
      title: Interoperable through IBC
      text: Transfers with other networks over IBC, versions 1 and 2, and contracts that check another network's data with ICS02.
      href: "docs:/protocol/interoperability"
    - icon: security
      title: Today's signatures
      text: Passkeys and secure chips (P-256) as signatures, and EIP-7702 so an application can pay its users' fees.
      href: "docs:/build/precompiles"
    - icon: governance
      title: On-chain governance
      text: Protocol changes are proposed, voted and applied on the network itself, in plain sight.
      href: "docs:/protocol/governance"
    - icon: opensource
      title: Open source
      text: All of the node's code, under Apache 2.0. Anyone can read it, review it and run their own node.
      href: "docs:/open-source"

stack:
  kicker: Infinite Drive
  title: One protocol, four layers, one network.
  lead: Infinite Drive brings proven industry pieces together into one coherent engine. Each layer does one thing, and does it in plain sight.
  layers:
    - { label: Execution, text: "The EVM and the network's own functions (precompiles)", tag: Contracts }
    - { label: Modules, text: "Accounts, staking, governance, fees and issuance", tag: Logic }
    - { label: Consensus, text: "CometBFT: Byzantine agreement and single-block finality", tag: Agreement }
    - { label: Network, text: "Nodes that find each other and share blocks", tag: P2P }
  side: { label: IBC, text: "Connection with other networks, versions 1 and 2" }
  link: { label: How the protocol works, href: "docs:/protocol" }

paths:
  kicker: Where to start
  title: Pick your path.
  items:
    - icon: build
      title: Developers
      text: Deploy contracts and applications with the standard EVM tools.
      href: "docs:/build"
    - icon: node
      title: Node operators
      text: Add your machine to the network and help sustain it.
      href: "docs:/operate/nodes"
    - icon: integrate
      title: Systems and institutions
      text: Connect what you already have and check data without intermediaries.
      href: "docs:/integrate"
    - icon: connect
      title: Follow the network
      text: Live status, parameters and tools, in the console.
      href: "console:/"

principles:
  kicker: Principles
  title: What is not up for negotiation.
  items:
    - title: No permission needed.
      text: Using the network, building on it or running a node needs nobody's invitation.
    - title: Verifiable, not believable.
      text: Anyone can check what happens on the network without trusting whoever tells them.
    - title: Open by default.
      text: The code, the rules and the changes are in plain sight, and anyone can propose improvements.
  link: { label: The project, href: /about }

story:
  kicker: From the blog
  link: Read the story

closing:
  title: Don’t Panic. Start building.
  lead: The documentation takes you from zero to your first contract. The console shows you the network live.
  primary: { label: Go to the documentation, href: "docs:/get-started" }
  secondary: { label: Open the console, href: "console:/" }
---
