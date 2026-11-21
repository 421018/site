---
title: "Frequently asked questions"
summary: "Technical questions about the protocol, building applications, nodes, governance and security."
weight: 40
---

## The protocol {#protocol}

:::faq[What is Protocol 42?]
Its formal name is *Infinite Improbability Drive*. It defines the rules every node follows to keep a shared ledger, apply the same rules and decide changes in the open. [Protocol](/protocol)
:::

:::faq[Can I keep data private?]
Yes. Private data stays off the chain, and only its fingerprint is recorded on the network. [What goes on and off the chain](/build/applications#application)
:::

:::faq[What are a drop and a cup?]
Two measures of Improbability. A **drop** is the smallest fraction and the network's base denomination (`drop`, and `tdrop` on the testnet): the unit has 18 decimals, so one whole unit is 10¹⁸ drops. **Cup** is the colloquial name of a whole unit, used to talk about amounts without repeating "Improbability". In wallets and explorers, the unit always appears with its symbol, 42. [Drops and cups](/protocol/fees#drops-and-cups)
:::

:::faq[How long does a transaction take to confirm?]
Seconds. Once confirmed, the transaction is final: it cannot be reversed.
:::

:::faq[Which other networks does it connect to?]
The IBC-compatible networks a connection is established with. Each network checks for itself what happens on the other, without intermediaries. [Interoperability](/protocol/interoperability)
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
From a testnet faucet: a service that gives out test units for free. [Provider directory](/get-started/connect#providers)
:::

## Nodes, validators and delegation {#nodes}

:::faq[What do I need to run a node?]
A standard Linux server. The requirements for each kind of node are in the documentation's node guide. [Run a node](/operate/nodes)
:::

:::faq[How does a node become a validator?]
The node registers as a validator with a transaction that includes units in staking. After that, it enters the active set only if it is among the validators with the most voting power.
:::

:::faq[What is delegation?]
An account chooses a validator and delegates units to them. Those units increase the validator's voting power, still belong to the person who delegated them, and share the validator's penalties. [Delegation](/protocol/consensus#delegation)
:::

## Governance {#governance}

:::faq[How are decisions made?]
Anyone can submit a proposal, by leaving a deposit. Validators and the people who delegate units to them vote on it for a fixed period. If the proposal is approved, the network applies the change. [Governance](/protocol/governance)
:::

:::faq[Who decides changes to the protocol?]
The votes recorded on the chain. Anyone can propose changes, including those who develop the software, and a change is applied only if the validators and those who delegate units to them approve it.
:::

## Security {#security}

:::faq[What happens if I lose my private key?]
You lose access to your account. The protocol has no mechanism for restoring a private key.
:::

:::faq[How do I report a vulnerability?]
In private, to the maintainers of the code, never in a public space. [Report a vulnerability](/open-source/security#report)
:::

## Providers {#providers}

:::faq[Are the third-party services listed in the documentation endorsed by the project?]
No. The RPC and explorer providers listed in the documentation are independent, and each is responsible for its service. Their appearance on the site does not imply endorsement.
:::
