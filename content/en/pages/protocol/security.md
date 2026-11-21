---
title: "Security"
summary: "What the protocol's design protects, under what condition it does so, and what stays in each person's hands."
icon: security
menuText: "Protections in layers"
weight: 60
---

## What it means for the network to be secure {#basis}

The security of a network is not one thing. It is a set of design properties: behaviors the protocol's rules seek to maintain even if some participants fail or act badly.

Those properties depend on a condition. The main condition is that the validators who fail or act badly add up to less than one third of the voting power. That condition is called the **security assumption**. If it stops being met, the properties can stop being met as well.

Knowing the properties helps in understanding how the network works. Knowing its limits helps in knowing what to look after for oneself.

## How the protocol is designed {#design}

While the security assumption holds, the protocol is designed so that:

- **The ledger cannot be altered.** Each block stores the fingerprint of the previous one. If someone changes a past transaction, the fingerprint no longer matches and the nodes detect it.
- **A confirmed transaction is final.** Consensus confirms each block in a single step. Once confirmed, the block is not replaced by another.
- **Only the private key moves an account.** Each transaction carries a signature made with the account's private key. Without that signature, the network rejects the transaction, whoever it comes from.
- **The rules are the same for everyone.** Every transaction is processed with the same rules. No account or application has privileges, and the rules change only through an upgrade approved by governance.
- **Anyone can check it.** Anyone can run a node, replay each transaction and check the state of the network for themselves.

:::diagram[Layers of protection: each one covers what the others cannot.]{name="capas-seguridad"}
:::

:::aside
[The security assumption in consensus →](/protocol/consensus)
:::

## Limits of the protocol {#limits}

Some things fall outside the protocol's reach. Knowing them is part of using the network carefully:

- **Lost or stolen keys.** If a person loses their private key, nobody can recover access to their account. If someone steals it, they can move what is in it. The protocol does not distinguish a person from whoever holds their key.
- **Third-party contracts.** Anyone can publish a contract. A contract can contain errors or be made to deceive. The protocol executes contracts exactly as written; it does not review their intentions.
- **Other networks.** A connection with another network depends on that network's security. Units that arrive from another network depend on their network of origin.
- **External sites and applications.** A site can pass itself off as the project or as a known application. The protocol cannot stop someone from signing a transaction on a fake site.
- **Errors in the software itself.** The protocol software is written by people, and it can have errors nobody has found yet. Reviews and tests reduce that risk, but they do not eliminate it.
- **Continuous operation.** If more than one third of the voting power goes offline, the network stops until the majority is recovered. It is a design decision: the protocol prefers to stop rather than confirm something without the necessary majority.

:::aside
[Risks of use](/legal#risks)
:::

## How it responds to faults {#failures}

The protocol's rules provide a response for the best-known kinds of fault:

| Situation | What the rules provide |
|---|---|
| A validator signs two different blocks for the same position | The network detects it, automatically removes part of the units in staking and takes it out of the active set |
| A validator stops taking part for too long | It receives a smaller penalty and leaves the active set until it returns |
| More than one third of the voting power goes offline | The network stops producing blocks and continues from the last confirmed block when the majority is recovered |
| An error is found in the software | A fix is prepared; if governance approves it, the network applies it at an upgrade height |
| A governance proposal is considered harmful | Participants can vote No with veto; if the veto exceeds its limit, the proposal is rejected |

## How the code is looked after {#code}

Each change in the software passes through several stages before it reaches the mainnet:

- **Open source.** The code is public. Anyone can read it, review it and point out a problem.
- **Review of each change.** No change enters the code without another person reviewing it.
- **Testnet.** Each new version runs on the testnet first, under real conditions, before it is proposed for the mainnet.
- **Independent review.** Because the code is open, any specialist can review it in depth, without asking permission, and report what they find through the security channel.
- **Coordinated upgrades.** A new version reaches the mainnet only if governance approves it, and every node changes version in the same block.

These practices reduce the risk of errors. They do not eliminate it.

## Report a vulnerability {#report}

A vulnerability is an error someone could exploit to make the protocol behave in a way other than the one intended. Whoever finds one can help protect the network if they report it the right way.

The right way is called responsible disclosure. The person reports the vulnerability in private, through the security channel. The fix is prepared and, once applied, what happened is published.

Publishing a vulnerability before it is fixed would let others exploit it. That is why the report is made in private.

:::aside
[Report a vulnerability](/open-source/security#report)
:::

## How to protect yourself {#protect-yourself}

Many risks for a person do not come from the protocol, but from their own environment. Four practices reduce the most common ones:

- **Keep your recovery phrase offline.** The recovery phrase lets you reconstruct your private key. Whoever has it controls your account.
- **Nobody from the project will ask you for your keys.** Nobody who takes part in the protocol or the network needs your private key or your recovery phrase. Whoever asks you for it is trying to deceive you.
- **Review what you sign.** Before signing, read in your wallet what the transaction does and which contract it calls.
- **Use the project's channels.** Verify any announcement, link or application against the [project's channels](site:/about#channels).

## Why the protocol does it this way {#why}

- **Stopping rather than risking.** A confirmed block is not undone. That is why, faced with a serious fault, the protocol prefers to pause the network rather than confirm something without the necessary majority.
- **Security in layers.** Fingerprints, signatures, staking, consensus and review of the code reinforce one another. If one layer fails, the others keep protecting the network.
- **Transparency.** Open code and the public ledger let anyone check how the network works, without having to trust anyone.
- **Shared responsibility.** The protocol protects what its rules can protect. The rest, such as the private key, stays in each person's hands.

:::aside
This page describes how the protocol is designed. It is not a promise of results: the software is offered as is, without warranties. [Legal and notices](/legal#warranties)
:::
