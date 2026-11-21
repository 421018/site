---
title: "Interoperability"
summary: "No network lives in isolation. How 42 checks what happened on another network without having to believe an intermediary."
icon: interop
menuText: "IBC, versions 1 and 2"
weight: 40
---

## Why connect networks {#why-connect}

Each network keeps its own ledger, with its own accounts and its own rules. A network, on its own, cannot see what happens on another.

Often, though, networks need to communicate. An application may need to react to something that happened on another network, or receive units from it. The ability of networks to communicate with each other is called **interoperability**.

## The intermediary problem {#intermediary}

The simplest way to connect two networks is to use an intermediary: a service that watches one network and writes on the other what, according to it, happened.

The problem is that the destination network has to believe it. If the intermediary fails, makes a mistake or someone takes control of its keys, the destination network accepts something that did not happen. And if it also holds units during the move, those units can be lost.

That is why the protocol does not connect to other networks through trusted intermediaries. It uses a standard in which each network checks for itself what happened on the other.

## What IBC is {#ibc}

The standard the protocol uses is called **IBC** (Inter-Blockchain Communication). It is an open standard: any network that implements it can connect with any other that also implements it.

The central idea of IBC is that each network can check for itself what happened on the other. For that, each network runs a **light client** of the other.

### The light client

A light client is a small program that follows another network without storing its whole ledger. It stores only what is needed to verify it: the headers of its blocks and the signatures of its validators.

With that information, the light client can check a **proof**: a cryptographic datum that shows something was recorded on the other network. If the proof is valid, the network accepts what happened. If it is not, it rejects it.

### Relayers

Networks do not talk to each other directly. Messages between them are carried by **relayers**: programs that read the messages on one network and deliver them on the other, together with their proof.

Anyone can run a relayer. A relayer cannot alter a message, because the destination network checks the proof before accepting it. The only thing a relayer can do is deliver the message, or not deliver it.

## How a transfer travels {#transfer}

The transfer of units is the most used application of IBC, and it shows the full path well. Suppose an account sends 10 units of Improbability from 42 Chain to another network, which we will call network B.

- **1. Lock.** The account sends a transaction on 42. The protocol locks its 10 units in a special account of the network itself, where they stay held. The units do not leave 42 Chain.
- **2. Relay.** A relayer takes the transfer message and delivers it on network B, together with the proof that the 10 units were locked.
- **3. Verification.** Network B checks the proof with its light client of 42.
- **4. Representation.** If the proof is valid, network B creates 10 units that represent the locked ones and delivers them to the destination account.
- **5. Acknowledgement.** A relayer carries back to 42 the confirmation that the delivery was completed.

If the delivery does not happen within a time limit, the transfer expires and the 10 units are unlocked in the source account. In that process, the units do not pass into a third party's hands.

The return works the other way around. Network B destroys the 10 units that represented them, and 42, after verifying the proof, unlocks the originals.

:::widget{name="ibc-sim"}
:::

:::aside
The figures in the example are illustrative.
:::

## Units that arrive from other networks {#representation}

When units from another chain arrive on the network, the protocol creates a representation of those units. Each representation carries its route on record: which network it comes from and by which connection it arrived. Two units with the same name that arrived by different paths are thus not confused.

Representations can be used like any other unit: transferred between accounts, used in contracts or sent back to their network of origin.

## More than transfers {#messages}

IBC is not only for moving units. From a contract, the protocol offers three capabilities between networks:

- **Transfers with instructions.** A transfer can carry instructions for the destination network. On arrival, the destination network executes a contract with those instructions, in the same operation. The source network receives a notice when the transfer completes or expires, and the contract that sent it can act accordingly. These notices are called **callbacks**.
- **Checking another network's state.** A contract can ask another network's light client whether a piece of data is part of its ledger, by presenting a proof. If the proof is valid, the contract knows that datum exists on the other network, without depending on whoever delivered it.
- **Transfers with IBC v2.** The protocol also supports version 2 of IBC, which simplifies the connection between networks.

The set of IBC standards also includes applications for executing calls between contracts on different networks and for operating accounts on another network. They are part of the same open software, and a network can enable them through an upgrade approved by governance.

From a contract, these capabilities are used through the protocol's own functions.

:::aside
[The network's own functions →](/protocol/execution#native-functions)
:::

## Limits and risks {#limits}

IBC removes the dependence on intermediaries, but it does not remove every risk. Every connection between networks has three limits:

- **The other network's security.** A connection is only as secure as the two networks it connects. If the other network fails or its validators act badly, the units that arrived from it can be affected.
- **Delivery depends on relayers.** A relayer cannot alter a message, but it can fail to deliver it. In that case, the transfer expires and the units return to their origin.
- **Representations are not the originals.** A unit that arrived from another network depends on the security of its network of origin. Its route says where it comes from.

:::aside
[Integrate other networks →](/integrate) · [Check data from a contract →](/build/precompiles/ics02)
:::

## Why the protocol does it this way {#why}

- **Verification instead of trust.** Each network checks for itself what happened on the other. No intermediary holds units during the move.
- **An open standard instead of one of its own.** Many networks use IBC. Connecting to them does not require a different agreement for each one.
- **Permissionless relayers.** Anyone can carry messages, and none can alter them. Communication between networks thus does not depend on one particular operator.
