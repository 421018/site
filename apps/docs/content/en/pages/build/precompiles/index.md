---
title: "The network's own functions"
summary: "The protocol functions a contract can call at a fixed address, as if they were another contract."
menuTitle: "Own functions"
weight: 10
---

## What they are {#what-they-are}

Besides the EVM, the protocol has its own functions: staking, distribution, governance, native balances, transfers between networks and verification of proofs from other networks. They are not contracts someone published: they are part of the protocol. These functions are also called **precompiles**.

A contract calls them like any other contract, at a fixed address and with a Solidity interface.

## Addresses {#addresses}

| Function | Address | What it is for |
|---|---|---|
| P-256 | `0x0000000000000000000000000000000000000100` | Verify P-256 signatures (passkeys and secure chips) |
| Bech32 | `0x0000000000000000000000000000000000000400` | Convert addresses between the `0x…` format and `infinite1…` |
| Staking | `0x0000000000000000000000000000000000000800` | Delegate, undelegate and operate validators |
| Distribution | `0x0000000000000000000000000000000000000801` | Query and withdraw rewards; community pool |
| ICS20 | `0x0000000000000000000000000000000000000802` | Transfers between networks over IBC |
| Bank | `0x0000000000000000000000000000000000000804` | Balances of native units with an ERC20-style interface |
| Governance | `0x0000000000000000000000000000000000000805` | Proposals and votes |
| Slashing | `0x0000000000000000000000000000000000000806` | Validator penalties |
| ICS02 | `0x0000000000000000000000000000000000000807` | Light clients: check data from another network |

Native units also have their own ERC20 address, different for each unit.

:::aside
The full interface of each function is in the protocol's source code. [Public repository]
:::
