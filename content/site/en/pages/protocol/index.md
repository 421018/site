---
title: "Protocol 42"
summary: "How thousands of computers keep the same ledger without any of them being in charge of the rest. This is the engine of 42, piece by piece."
menuTitle: "Overview"
translationOf: protocolo
section:
  label: Protocol
  dropdown: true
  weight: 1
  accent: "#5BF0C8"
  ink: "#0A7A5E"
  numbered: true
  sequential: true
---

## What the protocol is {#protocol}

When several computers have to work together without any of them being in charge of the rest, they need an agreement on how to do it. That agreement is written as a set of precise rules. That set of rules is called a **protocol**.

Email is a good example. A message can travel between servers run by different people. The servers understand each other because they all follow the same protocol.

The **Infinite Improbability Drive**, known as **Protocol 42**, is a protocol of that kind. Its purpose is for many computers to keep, between them, a single ledger of information, without depending on any one of them in particular. Each computer that runs the protocol is called a **node**. All the nodes together are called the **network**.

The formal name describes the whole: the Infinite Improbability Drive is the network's entire engine. The consensus that agrees on each block, the virtual machine that runs contracts, the fees that measure the work, the governance that decides changes and the connection to other networks are its parts, and each chapter of this section describes one of them. In running text it is simply called Protocol 42.

:::widget{name="engine-rows"}
:::

The protocol is built with open technology from the Cosmos ecosystem: Cosmos SDK as its base, CometBFT for consensus and IBC for communication between networks. Contracts run on the Ethereum Virtual Machine (EVM), compatible with its languages and tools.

:::lore[Engine log]
In Douglas Adams's novel, the infinite improbability drive takes a ship from one point to another by making the improbable happen, for an instant. This engine does something similar, with less spectacle: it gets thousands of computers that do not know each other, and have no reason to trust each other, to arrive at the same ledger, block after block.

The improbable is not a side effect. It is the engine's daily work.
:::

To understand how the protocol works, it helps to start with that ledger.

## A ledger shared by many {#ledger}

Almost every digital service stores information: balances, who owns what, the result of a vote. Usually that information sits on a central server. The people who use the service depend on that server's administrator to keep the information safe and not change it without notice.

The protocol works differently. There is no central server: every node keeps a full copy of the ledger. All the copies must match. So a node cannot modify its copy without the other nodes noticing. To add information to the ledger, the whole network has to agree.

The network does not agree transaction by transaction. Transactions are grouped into packages, and each package is called a **block**. The network agrees on one block at a time.

Each block includes the **fingerprint** of the previous block. The fingerprint (or hash) is a code calculated from a block's content, and it changes completely if a single piece of data in that block is altered. Since each block stores the fingerprint of the one before it, all the blocks are chained together. That is where the name **blockchain** comes from.

If someone altered an old block, that block's fingerprint would change. It would no longer match the fingerprint stored in the next block, and any node would detect the alteration.

:::widget{name="hash-chain"}
:::

Something important follows from this: trusting the ledger does not require trusting any particular person, because anyone can check that the ledger is intact. That is why the protocol does not ask for permission to take part. Anyone can run the protocol on their own computer, become a node and review the full history. That is why the network is called **public**.

For that check to be complete, the protocol's rules must be open to review too. That is why the protocol software is **open source**: anyone can read it, study it and propose improvements.

## Accounts, keys and signatures {#accounts}

If anyone can take part, the network needs to know who authorizes each transaction. The protocol solves this with cryptography.

Each participant has an **account**. The account is identified by a public address, which everyone can see. The participant also has a **private key**, which only they know.

To send a transaction, the participant **signs** it with their private key. Any node can check, with the public address, that the signature is authentic. But nobody can produce that signature without the private key. So nobody can move what is in an account without its holder's authorization.

Keys are long sequences of numbers, hard to handle by hand. That is why people use an application that stores their keys and signs their transactions. That application is called a **wallet**.

Whoever loses their private key loses access to their account. There is no person or service that can restore that key.

## Programs that live on the network {#contracts}

The simplest transaction is a transfer: moving units from one account to another. But the ledger can store more than balances. It can also store programs, and the network can run them. A program published on the chain is called a **smart contract**.

A smart contract works like an agreement that enforces itself. Its rules are written in code, and anyone can read them. Once published, nobody can change the contract. For example, a contract can keep a register of certificates, store the maintenance history of an asset or apply a change only when several organizations approve it. [Use cases (in Spanish)](/casos-de-uso)

For a contract's result to be trustworthy, every node runs the contract and all of them must reach exactly the same result. For that, every node must run it in the same environment and with the same instructions. That environment is called a **virtual machine**.

The protocol's virtual machine is the Ethereum Virtual Machine, known as the **EVM**: the most widespread standard for smart contracts. Since the EVM is a shared standard, the languages, tools and wallets that already exist for the EVM work with the protocol without changes. Anyone who already knows how to write contracts for the EVM can write them for the protocol from day one.

:::aside
[Execution (in Spanish) →](/protocolo/ejecucion)
:::

## The cost of each transaction {#unit}

Every transaction, whether a transfer or a contract execution, is processed by every node. Processing it takes real work: computation, storage and connectivity. If transactions were free, nothing would stop someone from flooding the network with millions of transactions.

That is why every transaction pays a **fee**. The fee is proportional to the work the transaction requires.

Fees are paid in the protocol's own unit. That unit is called the **native unit**. The protocol's native unit is called Improbability, and its symbol is 42. The rules for calculating fees are public, so the cost of a transaction is known before sending it.

The native unit also has a second role, perhaps the most important one: it protects the network. To understand how, we first need to see who decides which blocks enter the chain.

:::aside
[Fees and issuance (in Spanish) →](/protocolo/tarifas)
:::

## Who adds the blocks {#validation}

Each new block has to be proposed by someone, and the rest of the network has to accept it. The challenge is to stop anyone from proposing false blocks; for example, a block that spends the same balance twice.

A first idea would be to vote: give each node one vote and let the majority win. But in an open network, creating nodes is easy. Someone who wanted to cheat could create thousands of fake nodes and win any vote. So the weight of a vote cannot depend on the number of nodes. It has to depend on something that is costly to obtain: the amount of units each participant puts at stake.

### Validators and staking

The nodes that propose and confirm blocks are called **validators**. To become a validator, a node has to lock an amount of units as a bond. Those locked units are called **staking**.

The more units a validator has in staking, the more its vote weighs. That weight is called **voting power**.

### Delegation

Anyone who holds units and does not run a validator can also add them to the network's bond. To do so, they choose a validator and delegate their units to it. Those units are added to the chosen validator's staking and increase its voting power. This is called **delegation**.

Delegated units still belong to the person who delegates them. The validator cannot use or transfer them.

### Why staking protects the network

Every vote from a validator is signed with its private key. So any misbehavior by a validator is proven in the ledger itself.

If a validator signs two different blocks for the same position in the chain, the protocol detects it and automatically takes away part of the units it has in staking.

To deceive the network, an attacker would have to control more than a third of all the units in staking on the network: an enormous amount, which they would have to gather and lock. They would also have to accept losing those units, in exchange for a deception the rest of the network would detect immediately. Cheating costs far more than it could ever gain.

### How a block is confirmed

Validators take turns proposing blocks. When a validator proposes a block, the other validators review it and, if it is valid, sign it. When the signatures gathered add up to more than two thirds of the voting power, the block is confirmed. This way of reaching agreement is called a **consensus mechanism**.

A confirmed block cannot be reverted or replaced by another one. This property is called **finality**. For people using the network, finality means something concrete: as soon as their transaction enters a confirmed block, the transaction is final.

Validators are compensated for this work. The protocol assigns them part of the fees and of the new units it creates with each block. Each validator shares that part with the people who delegated units to it.

:::aside
[Consensus and staking →](/en/protocol/consensus)
:::

## A network among networks {#ibc}

Each network keeps its own ledger. Often one network needs to check something that happened on another, or to receive units from it.

The simplest way would be to trust an intermediary that watches one network and writes to the other. But then the result depends on that intermediary behaving well.

That is why the protocol uses **IBC** (Inter-Blockchain Communication). IBC is an open standard in which each network checks for itself, with cryptographic proofs, what happened on the other network. So data and units can move from one network to another without any intermediary having to be trusted.

:::aside
[Interoperability (in Spanish) →](/protocolo/interoperabilidad)
:::

## Who decides the rules {#rules}

All of the above depends on the nodes following the same rules. But no protocol is ever finished. Over time, parameters need adjusting, bugs need fixing and improvements need adopting. There has to be a way to decide those changes in which no participant can impose itself on the others.

The protocol solves this problem with the pieces already described. Any change is submitted as a proposal, and the proposal is recorded on the chain. Validators and the people who delegated units to them vote on the proposal. Each vote weighs according to the units that participant has in staking. If the proposal is approved, the network applies the change.

This system is called **on-chain governance**. With it, those who protect the network with their units in staking are also those who decide how it evolves.

:::aside
[Governance (in Spanish) →](/protocolo/gobernanza)
:::

## Security {#security}

The network's security does not depend on a single piece, but on several that reinforce each other:

- **Chained fingerprints** make any alteration of the ledger evident.
- **Signatures** prevent anyone from operating an account without its private key.
- **Staking** makes breaking the rules cost more than could be gained.
- **The consensus mechanism** keeps working as long as less than a third of the voting power fails or misbehaves.

In addition, the protocol's code is open and undergoes **audits**. An audit is a thorough review of the code by independent specialists. [Audit status and link to the reports.]

To avoid fake sites or profiles, use only the [project's channels (in Spanish)](/codigo-abierto/verificar#canales). If you find a vulnerability, [report it privately (in Spanish)](/codigo-abierto/seguridad#reportar).

:::aside
[Security (in Spanish) →](/protocolo/seguridad)
:::

## Design decisions {#decisions}

The protocol rests on seven design decisions. Each one is developed in its chapter:

- **EVM-compatible execution.** Builders use languages and tools that already exist. [Execution](/protocolo/ejecucion#porque)
- **Votes depend on staking, not on the number of nodes.** Creating nodes gives no power; putting units at stake does. [Consensus and staking](/en/protocol/consensus#why)
- **Halt rather than risk.** Without the required majority, the network halts instead of confirming doubtful blocks. [Consensus and staking](/en/protocol/consensus#failures)
- **An own unit and constant issuance.** The network's security does not depend on anyone external or on how much the network is used. [Fees and issuance](/protocolo/tarifas#porque)
- **Verification instead of intermediaries.** Connected networks check each other; nobody holds units in transit. [Interoperability](/protocolo/interoperabilidad#porque)
- **The rules are decided on the chain.** Those who write the code propose; those who protect the network decide. [Governance](/protocolo/gobernanza#porque)
- **Layered, visible security.** Several protections reinforce each other, and anyone can check them. [Security](/protocolo/seguridad#porque)

Chapters not yet translated open in Spanish. Together, these decisions are what make applications on the network possible. [Use cases (in Spanish) →](/casos-de-uso)

## Technical summary {#summary}

|  |  |
|---|---|
| Protocol | Protocol 42 (*Infinite Improbability Drive*) · open source · Apache 2.0 |
| Technology base | Cosmos SDK · CometBFT · IBC |
| Network | Public, permissionless |
| Consensus | Delegated proof of stake |
| Finality | Immediate, in one block |
| Fault tolerance | Less than a third of the voting power |
| Execution | Ethereum Virtual Machine (EVM) |
| Interoperability | IBC (versions 1 and 2) |
| Native unit | Improbability (42) |
| Governance | On-chain, with votes weighted by staking |

:::aside
[Full technical reference ↗](/docs)
:::
