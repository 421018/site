---
title: "ICS02: checking data from another network"
summary: "How a contract checks, with another network's light client, that a piece of data is part of its ledger."
menuTitle: "ICS02"
weight: 10
---

## What it is for {#purpose}

With IBC, 42 keeps a **light client** of each network it is connected to. The ICS02 function, at `0x0000000000000000000000000000000000000807`, lets a contract use that light client directly: if someone presents it with a piece of data from the other network together with its proof, the contract checks that the data is part of that network's ledger.

## Functions {#functions}

| Function | What it does |
|---|---|
| `verifyMembership` | Checks, with a proof, that a value is at a path in the other network's ledger, at a given height |
| `verifyNonMembership` | Checks, with a proof, that a path has no value on the other network |
| `updateClient` | Updates the light client with a new header from the other network |
| `getClientState` | Returns the state of the light client |

`verifyMembership` and `verifyNonMembership` return the timestamp of the height checked on the other network.

:::aside
Full Solidity interface: [ICS02 source code in the protocol repository]
:::
