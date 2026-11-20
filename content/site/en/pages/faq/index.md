---
title: "Frequently asked questions"
summary: "The questions most often asked about 42, with short answers and links to go further."
section:
  label: Questions
  weight: 3
  accent: "#FFB547"
  ink: "#9A5B00"
---

## The network and the protocol {#network}

:::faq[What is 42 Chain?]
The public network that runs Protocol 42. It lets several people keep the same ledger and apply the same rules, and lets anyone check the result. [What the protocol is](/about/how-it-works)
:::

:::faq[What is 42 Chain for?]
So that several people can share a ledger without any one of them having to hold it alone: a certificate that checks itself, the path of a product, the history of a repair and an agreement that no single person decides. If one person both produces and looks up the data, a traditional database is simpler. [Use cases](/log)
:::

:::faq[Can I keep data private?]
Yes. Private data stays off the chain, and only its fingerprint is recorded on the network. [What goes on and off the chain](docs:/build/applications#application)
:::

:::faq[What is Protocol 42?]
It is the network's protocol. Its formal name is *Infinite Improbability Drive*. It defines the rules every node follows to keep a shared ledger, apply the same rules and decide changes in the open. [Protocol](/about/how-it-works)
:::

:::faq[Do I need permission to use the network?]
No. Anyone can use the network, publish applications or run a node without registering or asking for approval.
:::

:::faq[What is Improbability?]
It is the unit with which the ledger is moved and backed. Its symbol is 42. It pays for the work of writing to the ledger and backs those who maintain it. The smallest fraction is called a drop; a whole unit, colloquially, a cup. [Why 42](/about#why-42)
:::

:::faq[What are a drop and a cup?]
Two measures of Improbability. A **drop** is the smallest fraction and the network's base denomination (`drop`, and `tdrop` on the testnet): the unit has 18 decimals, so one whole unit is 10¹⁸ drops. **Cup** is the colloquial name of a whole unit, used to talk about amounts without repeating "Improbability". In wallets and explorers, the unit always appears with its symbol, 42. [Drops and cups](docs:/protocol/fees#drops-and-cups)
:::

:::faq[How long does a transaction take to confirm?]
Seconds. Once confirmed, the transaction is final: it cannot be reversed.
:::

:::faq[Which other networks does it connect to?]
The IBC-compatible networks a connection is established with. Each network checks for itself what happens on the other, without intermediaries. [Interoperability](docs:/protocol/interoperability)
:::

## Building {#build}

:::faq[Which development tools can I use?]
Those of the EVM ecosystem: Solidity, Hardhat, Foundry, Remix, Ethers.js, Viem and wallets such as MetaMask.
:::

:::faq[Can I publish a contract I already wrote for the EVM?]
Yes. A contract written for the EVM can be published on the network with no changes to its code.
:::

:::faq[What is the difference between the mainnet and the testnet?]
On the mainnet, transactions have real effect. The testnet is for developing and testing, and it uses test units that have no use outside it.
:::

:::faq[How do I get test units?]
From a testnet faucet: a service that gives out test units for free. [Provider directory](docs:/get-started/connect#providers)
:::

## Nodes, validators and delegation {#nodes}

:::faq[What do I need to run a node?]
A standard Linux server. The requirements for each kind of node are in the documentation's node guide. [Run a node](docs:/operate/nodes)
:::

:::faq[How does a node become a validator?]
The node registers as a validator with a transaction that includes units in staking. After that, it enters the active set only if it is among the validators with the most voting power.
:::

:::faq[What is delegation?]
An account chooses a validator and delegates units to them. Those units increase the validator's voting power, still belong to the person who delegated them, and share the validator's penalties. [Delegation](docs:/protocol/consensus#delegation)
:::

## Governance {#governance}

:::faq[How are decisions made?]
Anyone can submit a proposal, by leaving a deposit. Validators and the people who delegate units to them vote on it for a fixed period. If the proposal is approved, the network applies the change. [Governance](docs:/protocol/governance)
:::

:::faq[Who decides changes to the protocol?]
The votes recorded on the chain. Anyone can propose changes, including those who develop the software, and a change is applied only if the validators and those who delegate units to them approve it.
:::

## Security {#security}

:::faq[What happens if I lose my private key?]
You lose access to your account. The protocol has no mechanism for restoring a private key.
:::

:::faq[Will someone from the project ask me for my keys?]
No. No channel of the project will ask you for your recovery phrase or your private keys. Verify any announcement against the [project's channels](/about/verify#channels).
:::

:::faq[How do I report a vulnerability?]
In private, to the maintainers of the code, never in a public space. [Report a vulnerability](docs:/open-source/security#report)
:::

## The project {#project}

:::faq[Who develops the protocol?]
Contributors who work in the open, in public repositories. Anyone can join. [Contribute](docs:/open-source)
:::

:::faq[Is there a roadmap?]
Not one with an end date. The protocol is maintained and improved continuously, and each change is decided by on-chain governance. [Ongoing development](/about#ongoing)
:::

:::faq[Where do I ask a technical question?]
In the public repository's discussion space. It is open to anyone and has no cost. [Technical questions](docs:/open-source#questions)
:::

## Legal and use of the site {#legal}

:::faq[Does this site sell or recommend the native unit?]
No. This site does not offer, sell or recommend the native unit or any other asset. It does not recommend platforms or intermediaries either.
:::

:::faq[Who maintains this site?]
This site and the documentation are maintained by contributors to Protocol 42. The code is open: anyone can review it, propose changes or contribute. [About this site](/legal#independence)
:::

:::faq[Are the third-party services listed on the site endorsed by 42 Chain?]
No. The RPC and explorer providers listed on the site are independent, and each is responsible for its service. Their appearance on the site does not imply endorsement.
:::

:::faq[What data does this site collect?]
None on its own. The site has no forms, uses no cookies or analytics, and serves all of its resources from the site itself. The hosting provider processes technical data of each visit, such as the IP address, in order to deliver the pages. [Privacy](/legal#privacy)
:::
