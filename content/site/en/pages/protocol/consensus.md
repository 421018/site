---
title: "Consensus and staking"
summary: "Thousands of computers that do not know each other agree on the same block every two seconds. This is how they do it, and what happens when some fail or try to cheat."
icon: consensus
menuText: "How each block is agreed"
weight: 10
translationOf: protocolo/consenso
---

## The problem of agreement {#agreement}

Each node keeps a copy of the ledger, and all the copies must match. For that, every node has to accept the same blocks, in the same order.

This is hard for three reasons. Messages take time to travel from one node to another. Some nodes may fail or disconnect. And some participants may try to cheat; for example, spending the same balance twice by sending two contradictory transactions to different nodes.

The way to solve this problem is called a **consensus mechanism**. A good consensus mechanism gets every honest node to accept the same blocks, even if some of the participants fail or misbehave.

## Why votes depend on staking {#weight}

To agree, the nodes vote. The question is how much each vote weighs.

If each node had one vote, anyone who wanted to cheat could create thousands of fake nodes and win any vote. In an open network, creating nodes is easy. So the weight of a vote has to depend on something that is costly to obtain.

In the protocol, that something is the units each participant puts at stake. The nodes that vote on blocks, called **validators**, lock units as a bond. Those locked units are called **staking**. The more units a validator has in staking, the more its vote weighs. That weight is called **voting power**.

If a validator breaks the rules, it loses part of its bond. So cheating costs more than it could gain.

This mechanism is called **delegated proof of stake**. "Proof of stake", because the vote depends on what each validator puts at stake. "Delegated", because other people can add their units to a validator's bond.

## Delegation {#delegation}

A validator's voting power does not depend only on its own units. Other accounts can **delegate** units to it, which are added to its staking and increase its voting power. So the network's bond is not limited to those who run servers.

The protocol sets three rules for delegation:

- **The units still belong to the delegator.** The validator cannot use or transfer them.
- **Penalties are shared.** If the validator misbehaves, the units delegated to it also lose a part.
- **Withdrawing them takes a waiting period.** A withdrawn delegation stays locked for a fixed period before it can be transferred. [Length of the waiting period.]

Each validator sets a **commission**: the share of the compensation for delegated units that it keeps for running its infrastructure.

:::aside
[Staking and delegation parameters ↗](/docs)
:::

## The active set {#active-set}

Not every registered validator confirms blocks. The protocol ranks validators by voting power. Only the validators with the most voting power form the **active set**: the group that proposes and confirms blocks.

The number of seats in the active set is a protocol parameter, and it can be changed through a governance proposal. [Number of seats.]

A validator that falls outside the active set is still registered. But it neither proposes nor confirms blocks, and receives no compensation while it is out.

The active set is updated with every block, as each validator's units in staking change.

## A consensus round {#round}

Each block is decided in a round. A round has four stages:

- **Proposal.** A validator in the active set proposes the block. The turn rotates among validators. Validators with more voting power propose more often.
- **Pre-vote.** Each validator reviews the proposed block. If the block is valid, the validator signs a first vote in its favor.
- **Pre-commit.** If the block gathers pre-votes from more than two thirds of the voting power, each validator signs a second vote. With that second vote, the validator commits to that block.
- **Commit.** If the block gathers pre-commits from more than two thirds of the voting power, the block is confirmed and added to the chain.

Why two votes? With only one, the network could split. Because of a connection problem, some validators could see one block and other validators a different one, and each group could confirm its own.

The second vote prevents that. A validator only commits to a block when it already knows that more than two thirds of the voting power support it. Two different groups cannot each gather more than two thirds of the total. So two different blocks are never confirmed for the same position in the chain.

Sometimes a round does not gather the votes it needs; for example, because the validator whose turn it was to propose is offline. In that case a new round starts, and another validator proposes.

:::facts
- **1 block** Finality
- **&gt; 2/3** Voting power to confirm
- **&lt; 1/3** Faults tolerated
:::

## What happens if validators fail {#failures}

The consensus mechanism tolerates faults. As long as the failing validators add up to less than a third of the voting power, the other validators still gather the two thirds they need. The network keeps confirming blocks.

If the offline validators add up to more than a third of the voting power, no block can gather two thirds. The network then stops producing blocks.

This halt is a design decision. A confirmed block cannot be undone, so the protocol prefers to stop rather than confirm a block without the required majority. When the validators reconnect and the majority is restored, the network continues from the last confirmed block.

:::widget{name="consensus-sim"}
:::

## Penalties {#penalties}

The protocol automatically penalizes two kinds of misbehavior:

- **Double signing.** The validator signs two different blocks for the same position in the chain. It only happens through a serious configuration error or an attempted fraud. It is the most serious offense.
- **Prolonged downtime.** The validator stops signing blocks for too long.

When a validator commits one of these offenses, the protocol takes away part of the units it has in staking, including delegated units. It also removes it from the active set.

The share taken and the time the validator stays out depend on the offense.

:::aside
[Penalty rules and parameters ↗](/docs)
:::

## Why the protocol does it this way {#why}

- **Proof of stake instead of one vote per node.** Creating nodes gives no power. Putting units at stake does. So the vote depends on something that is costly to obtain and is lost by cheating.
- **Immediate finality.** A confirmed block is final from the first moment. People using the network do not have to wait for a transaction to become safer over time.
- **Halt rather than risk.** If the required majority is not gathered, the network halts instead of confirming doubtful blocks.
- **Delegation.** Anyone can add to the network's bond through a validator without running a server, and shares its penalties.
- **Automatic penalties.** Offenses are proven in the ledger and punished without anyone having to decide.
