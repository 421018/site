---
title: "Key concepts"
summary: "Accounts, addresses, units and finality: the minimum needed to understand the rest of the documentation."
weight: 10
---

## Accounts and addresses {#addresses}

An account is controlled with a private key and identified by an address. On 42, the same account can be written in two formats:

| Format | Example | Used by |
|---|---|---|
| Hexadecimal (EVM) | `0x…` | EVM-compatible wallets and tools |
| Bech32 (native) | `infinite1…` | Native wallets, Cosmos ecosystem tools and IBC |

The two formats correspond to the same account and the same balance. The prefix `infinite` is the network's technical identifier, from the protocol's formal name.

## Units: drops and cups {#units}

The native unit is called Improbability and its symbol is 42. It has 18 decimals:

| Measure | Equivalence | Where it appears |
|---|---|---|
| Drop | The smallest fraction: 10⁻¹⁸ Improbability | In contracts, transactions and the network's own interfaces (`drop`; `tdrop` on the testnet) |
| Cup | 1 Improbability = 10¹⁸ drops | Colloquial name of a whole unit |

Contracts always work in drops, as on any EVM-compatible network.

## Gas and fees {#gas}

Each operation consumes **gas**, a measure of the work it requires. The fee is the gas consumed times its price, which has a base fee adjusted in each block (EIP-1559) and an optional tip.

## Finality {#finality}

A confirmed block is final: there is no need to wait for additional confirmations. A transaction included in a confirmed block cannot be reversed.
