---
title: "Build applications"
summary: "If you already know how to build for the EVM, you already know how to build here. What changes is the kind of problem: several organizations, devices that sign and fees that someone else pays."
weight: 5
---

## What an application on the network is {#application}

An application on the network usually has three parts:

- **Contracts.** They hold the rules and the data that have to be shared and verifiable. They live on the chain.
- **Each organization's systems.** The interfaces, databases and systems each party already uses. They live off the chain, as always.
- **Signatures.** Each operation is signed by the account of whoever performs it: a person, a system or a device.

Not everything has to live on the chain. What must be verifiable and shared goes in the contracts. What is heavy or confidential stays outside, and its fingerprint is recorded on the chain.

:::diagram[The three parts of an application on the network.]{name="arquitectura"}
:::

For example, in a certificate register, the contract stores the fingerprint of each certificate and who issued it. The full document stays in the issuer's systems. Anyone can check, with the fingerprint, that a document is authentic.

:::aside
[Use cases (in Spanish) →](site:/use-cases) · [How contracts run (in Spanish) →](site:/protocol/execution)
:::

## The EVM, in practice {#evm}

Contracts run on the Ethereum Virtual Machine (EVM). For builders, that means three things:

- **Same language.** Contracts are written in Solidity or Vyper.
- **Same tools.** EVM development environments, libraries and testing tools work with the network.
- **Same wallets and signing devices.** Accounts are operated with EVM-compatible wallets and signing devices such as Ledger.

A contract written for the EVM can be published on the network without changing its code.

## Patterns for infrastructure applications {#patterns}

An infrastructure application has needs that do not always appear in other applications: devices that sign records, organizations that act on behalf of others, users who should not have to handle units. The protocol offers an answer to each one.

### Fees paid by the organization {#fees}

Every transaction pays a fee. In an infrastructure application, whoever signs a record, such as a technician or a sensor, should not have to obtain units to pay it.

- **For contract operations**, the protocol supports accounts that delegate their logic to a contract (EIP-7702). The person or device signs the operation, and another account, the organization's, sends it and pays the fee.
- **For native network operations**, such as transfers or votes, one account can grant another a **fee allowance**: the account that receives the allowance operates, and the fees are charged to the account that granted it, up to the set limit.

:::diagram[Who signs and who pays, with each of the two mechanisms.]{name="tarifas-patrocinadas"}
:::

### Delegated permissions {#permissions}

An organization can authorize another account to perform certain operations on its behalf, for example a contractor, without handing over its key.

- **In contracts**, the rule of who can do what is written in the contract itself: which accounts can record, approve or revoke.
- **In native network operations**, one account can grant another an **authorization** for a specific kind of operation, with or without an expiry date, and revoke it at any time.

### Signatures with passkeys and secure chips {#signatures}

Besides the usual EVM signatures, contracts can verify **P-256** signatures: the ones produced by passkeys and the secure chips of phones, computers and many industrial devices. Combined with fees paid by the organization, they let a person or a piece of equipment sign a record with a key stored in its own hardware, without a dedicated wallet.

### Native network functions from contracts {#functions}

Contracts can use the protocol's own functions directly: query and move native units, work with staking and governance, send transfers to other networks and check, with a proof, data from another network. Each function has a fixed address and is called like any other contract.

:::aside
[The network's own functions and their addresses (in Spanish) →](/build/precompiles)
:::

## Mainnet and testnet {#networks}

Two networks run the same protocol.

The **testnet** is for developing and testing. It is public and uses test units, which have no use outside it. Test units are free from a [faucet in the directory](/get-started/connect#providers).

The **mainnet** is the network where records have real effect.

Since both networks run the same protocol, an application moves from the testnet to the mainnet without changing its code. Only the connection parameters change, and they are in [Connect to 42 Chain](/get-started/connect#parameters).

## From testing to operation {#production}

Taking an application into operation usually follows five steps:

- **1. Write and test locally.** Contracts are written and tested on your own computer, with a development environment that simulates the network.
- **2. Test on the testnet.** The participating organizations connect their systems to the testnet and use it under real conditions.
- **3. Review.** Since a contract cannot be modified once published, contracts are reviewed thoroughly before going into operation and, if they are critical, audited.
- **4. Publish on the mainnet.** The same contracts are published on the mainnet, and each organization connects its systems.
- **5. Operate.** The application is monitored while it runs. If the rules need to change, a new contract is published and migrated to, because the previous one cannot be modified.

## Compatible tools {#tools}

| Category | Tools |
|---|---|
| Languages | Solidity, Vyper |
| Development | Hardhat, Foundry, Remix |
| Libraries | Viem, Ethers.js, Web3.js |
| Signing | EVM-compatible wallets, Ledger, passkeys (P-256) |
| Infrastructure | RPC nodes, indexers and oracles are offered by independent providers, each with its own domain · [Directory](/get-started/connect#providers) |

## Next steps {#support}

The parameters of each network and the provider directory are in [Connect to 42 Chain](/get-started/connect).

To connect existing systems, devices or other networks, see [Integrate systems (in Spanish)](/integrate). For an internal environment connected to 42 or an integration that requires custom work, see [Custom implementations (in Spanish)](site:/use-cases/custom-implementations).
