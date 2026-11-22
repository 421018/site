---
title: "Frequently asked questions"
summary: "Short answers about 42 Chain, Infinite Drive and this site."
section:
  label: Questions
  weight: 3
---

## The network {#about}

:::faq[What is 42 Chain?]
A public blockchain network, EVM compatible, with single-block finality and interoperable through IBC. It runs on Infinite Drive, an open-source protocol. [The project](/about#what-is)
:::

:::faq[How do Infinite Drive and 42 Chain relate?]
Infinite Drive is the protocol: the rules and the node software. 42 Chain is the public network that runs on it. On the chain, its operational name is `infinite`.
:::

:::faq[Do I need permission to use the network?]
No. Anyone can use the network, deploy contracts or run a node without registering or asking for approval.
:::

:::faq[What is Improbability?]
The network's native unit, with the symbol 42. It pays fees and backs the validators. Its smallest fraction is the drop (10⁻¹⁸); one whole unit is known, colloquially, as a cup. [Fees and issuance](docs:/protocol/fees)
:::

## Build and operate {#project}

:::faq[Can I use my EVM tools?]
Yes. Solidity, Hardhat, Foundry, ethers and wallets such as MetaMask work with the network. All you need is the chain ID and an RPC address. [Connect](docs:/get-started/connect)
:::

:::faq[How long until a transaction is final?]
One block. CometBFT confirms every block for good, with no reorganisations. The time per block is shown live in the [console](console:/status).
:::

:::faq[Who develops the protocol?]
Contributors working in the open, in public repositories. Anyone can join. [Contribute](docs:/open-source)
:::

:::faq[How do the rules change?]
Through on-chain governance: changes are proposed, tested on the testnet, voted on the network and only then reach the mainnet. [Governance](docs:/protocol/governance)
:::

:::faq[Where do I ask a technical question?]
In the public repository's discussions. They are open to anyone. [Technical questions](docs:/open-source#questions)
:::

## Security and this site {#legal}

:::faq[Will anyone from the project ask for my keys?]
Never. No project channel will ask for your recovery phrase or your private keys. Check any announcement against the [official channels](/channels).
:::

:::faq[Does this site sell or recommend the native unit?]
No. This site does not offer, sell or recommend the native unit or any other asset, nor platforms or intermediaries.
:::

:::faq[What data does this site collect?]
None on its own: it has no forms, cookies or analytics. The console queries the public RPC providers directly from your browser. The host processes technical data of each visit, such as the IP address, to deliver the pages. [Privacy](/legal#privacy)
:::

:::aside
Looking for something more technical? [Technical questions →](docs:/get-started/faq)
:::
