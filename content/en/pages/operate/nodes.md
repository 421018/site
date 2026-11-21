---
title: "Run a node"
summary: "Having your own node is the way to read the network without depending on anyone. What you need to get it running and, if you want, to validate blocks."
icon: node
menuText: "Full node, RPC and validator"
weight: 10
---

## What a node is and why run one {#what-is}

A **node** is a computer that runs the protocol. It keeps a copy of the ledger, verifies each new block and talks to the other nodes. The network is, literally, the set of all its nodes.

Anyone can run a node, without asking permission. There are three usual reasons to do it:

- **Verify for yourself.** Whoever runs their own node does not need to trust an external service to know the state of the network: they check it directly.
- **Serve applications.** Applications need a node to read data from the network and send transactions. Each organization taking part in an application can run its own node, so as not to depend on third parties.
- **Take part in consensus.** A node can become a validator and propose and confirm blocks. The protocol compensates that work.

## What a node's software does {#software}

The node software is open source and does five tasks continuously:

- **Connect with other nodes.** Each node talks directly to other nodes on the network. There is no central server coordinating them.
- **Share transactions.** When it receives a new transaction, the node checks its signature and shares the transaction with the other nodes.
- **Verify each block.** When a block arrives, the node checks the validators' signatures and that each transaction follows the rules.
- **Execute and store.** The node executes the block's transactions and updates its copy of the state.
- **Answer queries.** The node offers interfaces so that applications and wallets can read data and send transactions. One of them is compatible with EVM tools.

## Kinds of node {#types}

There are three kinds of node. They differ in what they store and in who uses them:

- **Full node.** It stores the current state and recent blocks. This is the kind most applications use to read the network and send transactions.
- **Archive node.** It stores the full history, from the genesis block. Explorers and services that need to query old data use it. It needs much more storage.
- **Validator.** It is a full node that also proposes and confirms blocks. It needs units in staking and has to be online continuously.

To read the network or serve an application, a full node is enough. To query old data, an archive node is needed. To take part in consensus, a validator is needed.

## Requirements {#requirements}

The node software runs on standard Linux servers. It does not require specialized hardware.

The resources it needs depend on the kind of node. Storage is what grows the most, because the ledger increases with each block. A validator also needs a stable connection and high availability, because every moment offline counts.

The processor, memory, storage and connection requirements for each kind of node are pending publication in this section.

:::status[Pending]
Requirements by node type, installation and configuration.
:::

## Syncing a node {#sync}

A new node starts with no data. Before it is useful, it has to catch up with the rest of the network to the latest block. That process is called **syncing**.

There are two ways to sync a node:

- **From the beginning.** The node downloads and verifies every block, from the genesis block. It is the slowest way, but the node checks the whole history of the network for itself.
- **From a snapshot.** The node downloads a recent copy of the state, called a snapshot, and verifies that it matches the network. From there it continues block by block. It is much faster.

To start, the node needs the network's **genesis file** and at least one **seed peer**: another node to connect to the first time in order to discover the rest.

| Data | Mainnet | Testnet |
|---|---|---|
| Chain ID (native) | `infinite_421018-1` | `infinite_421018001-1` |
| Genesis file | [genesis.json ↗](https://assets.infinitedrive.xyz/mainnet/genesis.json) | [genesis.json ↗](https://assets.infinitedrive.xyz/testnet/genesis.json) |

Seed peers:

- **Mainnet.** `fe304bbda1a243eb2bd30a4558923b39d04ca5eb@server-xenia88.infinitedrive.xyz:26656`
- **Testnet.** `ed3a45ee1ad114830afe6de7dc90c61f893c04da@server-xenia88.infinitedrive.xyz:26666`

:::aside
Seed peers are published by their operators in the [network data file ↗](https://assets.infinitedrive.xyz/mainnet/network-data.json). Once connected, the node discovers the rest of the network on its own.
:::

## From node to validator {#ledger}

A node becomes a validator in three steps:

- **1. Sync.** A full node is installed and synced with the network up to the latest block.
- **2. Register.** A transaction is sent that registers the node as a validator. That transaction includes the units the validator puts in staking and the commission it will charge its delegators.
- **3. Enter the active set.** Only the validators with the most voting power form the active set. A newly registered validator may need more delegated units before entering.

:::aside
[What the active set is →](/protocol/consensus#active-set)
:::

## A validator's responsibilities {#responsibilities}

A validator in the active set has three responsibilities:

- **Availability.** The node has to be online. If it stops signing blocks for too long, the protocol penalizes it.
- **Key security.** The validator's private key has to be protected. If someone steals it, they can cause a double sign, which is the most serious fault.
- **Upgrades.** The validator has to apply in time the upgrades that governance approves.

Penalties also affect the units delegated to the validator.

:::aside
[Penalties →](/protocol/consensus#penalties)
:::

## How upgrades are applied {#upgrades}

When a new version of the software is approved by governance, the proposal sets a future block, called the **upgrade height**. Every node has to change version at that block.

For whoever runs a node, the process has three moments. Before the height, they install the new version without activating it. When the height is reached, the node stops. Then it starts with the new version and continues with the network.

A node that is not updated in time stops following the network: it cannot verify the blocks produced under the new rules.

:::aside
[How an upgrade is approved →](/protocol/governance#lifecycle)
:::
