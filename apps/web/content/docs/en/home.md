---
# Home page text of the documentation (English). The section cards are
# generated from the sections in pages/ (label and summary of each index.md).

eyebrow: Documentation
title: Everything you need to build and operate on 42.
lead: How Infinite Drive, the protocol of 42 Chain, works, and how to connect, build, integrate systems and run a node.
searchPrompt: Search the documentation
layers:
  title: How the protocol is built
  items:
    - { label: Interoperability, text: "IBC, versions 1 and 2", tag: Connection }
    - { label: Execution, text: "EVM and the network's own functions", tag: Contracts }
    - { label: Network modules, text: "Cosmos SDK: staking, governance, fees", tag: Logic }
    - { label: Consensus, text: "CometBFT, finality in one block", tag: Agreement }
quickData: Quick data
live:
  label: Mainnet, live
  height: Latest block
  pace: Time per block
  online: Providers
  seconds: "{n} s"
  block: "Block {n}"
  unavailable: The public providers are not answering right now.
  link: { label: Full status, href: "console:/status" }
starts:
  title: Pick a starting point
  lead: Each route is two pages, in order. Jump to any of them.
  items:
    - icon: connect
      title: Connect a wallet
      steps:
        - { label: Key concepts, href: /get-started/concepts }
        - { label: Connect to 42 Chain, href: /get-started/connect }
    - icon: build
      title: Deploy a contract
      steps:
        - { label: Build applications, href: /build/applications }
        - { label: The network's own functions, href: /build/precompiles }
    - icon: integrate
      title: Integrate a system
      steps:
        - { label: Integrate systems, href: /integrate }
        - { label: Verifiable sources, href: /get-started/sources }
    - icon: node
      title: Run a node
      steps:
        - { label: Run a node, href: /operate/nodes }
        - { label: Security, href: /protocol/security }
    - icon: consensus
      title: Understand the protocol
      steps:
        - { label: The protocol, href: /protocol }
        - { label: Consensus and staking, href: /protocol/consensus }
    - icon: opensource
      title: Contribute code
      steps:
        - { label: Contribute, href: /open-source }
        - { label: Security and reports, href: /open-source/security }
map:
  title: The whole documentation
  lead: Every section and every page, with what you will find in it.
---
