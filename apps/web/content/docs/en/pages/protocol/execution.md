---
title: "Execution"
summary: "What happens between the moment someone signs an operation and the moment the ledger changes, the same way on every node."
icon: execution
menuText: "Contracts on the EVM"
weight: 20
---

## From the block to the ledger {#state}

Every time someone records a datum, approves a change or moves units, the network has to apply that operation exactly the same way on every node. **Execution** takes care of that: it takes the transactions of each block and calculates what the ledger looks like after applying them.

To do that, each node keeps a picture of the current moment: how many units each account has, which contracts exist and what data each one stores. That picture is called the **state**. Each block starts from the previous state, applies its transactions in order and produces a new one. Because every node applies the same transactions, in the same order and with the same rules, they all reach the same result.

Consensus decides which transactions go into each block and in what order; execution decides what effect each one has.

:::aside
[Consensus and staking →](/protocol/consensus)
:::

## Accounts {#accounts}

The state is organized into accounts. There are two kinds of account:

- **User accounts.** They belong to a person, a system or a device, which controls them with its private key. They store a balance of units and a counter of the transactions the account has sent. The counter prevents someone from sending the same signed transaction twice.
- **Contract accounts.** They belong to a smart contract. They have no private key: the contract's code controls them. Besides the balance, they store the contract's code and its data.

### Addresses

Each account is identified by an **address**. In the protocol, the same account can be written in two formats. The first starts with 0x and is the one EVM tools use. The second is a format of the network's own, used by the tools for transfers between networks.

The two formats correspond to the same account and the same balance. A wallet can show either of them.

:::aside
[Accounts and addresses →](/get-started/concepts#addresses)
:::

## The path of a transaction {#transactions}

Every change in the state starts with a signed **transaction**. The transaction says which account sends it, what it wants to do and how much fee it is willing to pay. What it wants to do can be transferring units, publishing a contract or calling a function of a contract.

From the moment it is signed until it takes effect, a transaction passes through five stages:

- **1. Signature.** The person reviews the transaction in their wallet and signs it with their private key.
- **2. Sending.** The wallet sends the transaction to a node. That node checks the signature and shares the transaction with the rest of the network.
- **3. Waiting.** The transaction stays in a list of pending transactions. Validators take transactions from that list to build the next block.
- **4. Inclusion.** A validator includes the transaction in the block it proposes. When the block is confirmed, every node executes the transaction.
- **5. Result.** The transaction succeeds or fails. If it succeeds, the state changes. If it fails, for example because a contract rejects the call, the state stays as it was; even so, the transaction pays the fee for the work that was done.

:::diagram[The five stages of a transaction, from the signature to the result.]{name="transaccion"}
:::

A transaction included in a confirmed block is final: its result cannot be reversed.

## Smart contracts {#contracts}

A **smart contract** is a program that lives on the network. Its rules are written in code, anyone can read them and nobody can change them once it is published.

### Publishing a contract

To publish a contract, someone sends a transaction that contains the contract's code. The protocol creates a new contract account and stores the code there. From that moment, the code cannot be modified.

If a contract has an error, the error stays published with it. That is why important contracts are reviewed and audited before they are published.

### Using a contract

To use a contract, a transaction is sent that calls one of its functions. Every node executes that function with the same data and reaches the same result.

A contract can also call functions of other contracts. Different applications can thus be combined: a traceability contract can use a certificate-register contract, for example, without asking its authors for permission.

### Reading and writing

Reading a contract's data does not change the state. That is why it requires neither a transaction nor a fee: any node answers the query at once.

Writing does change the state. Every write is a signed transaction, which pays its fee and passes through the five stages described above.

## The virtual machine and the EVM {#evm}

So that every node reaches the same result, a contract's code is not executed directly on each computer. It is executed inside a **virtual machine**: an environment that works the same way on any node, with a fixed set of instructions.

The protocol's virtual machine follows the **EVM** specification. The EVM defines which instructions exist, how much gas each instruction consumes and how contract data is stored.

Contracts for the EVM are normally written in **Solidity**, a programming language designed for contracts. Before publication, the Solidity code is translated into the virtual machine's instructions.

Because the EVM is a shared standard, a contract written for the EVM can be published on the network with no changes to its code. The same is true of the tools: the libraries, test environments and wallets of that standard work with the network.

:::aside
[What gas is and how a fee is calculated →](/protocol/fees#fees)
:::

## The network's own functions {#native-functions}

Besides the EVM, the protocol has its own functions: staking, governance and the transfer of units between networks, among others. These functions are not contracts someone published. They are part of the protocol.

Contracts can use these functions directly, as if they were calling another contract. Each own function has a fixed, known address. For example, a contract can delegate units to a validator, vote on a proposal or send units to another network, without depending on an external service.

:::aside
[The network's own functions and their addresses →](/build/precompiles)
:::

## Why the protocol does it this way {#why}

- **Deterministic execution.** The same transactions, in the same order, produce the same state on every node. That is what lets anyone check the state of the network for themselves.
- **Compatibility with the EVM, instead of a virtual machine of its own.** Whoever builds makes use of languages, tools, auditors and knowledge that already exist. The protocol does not force anyone to learn a new environment in order to start.
- **Own functions reachable from contracts.** Staking, governance and interoperability are inside the protocol, not in third-party contracts. An application uses them with the same rules as the network itself.
