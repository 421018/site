---
title: "Consensus and staking"
summary: "Computers that do not know each other agree on every block, one after another. This is how they do it, and what happens when one of them fails or tries to cheat."
icon: consensus
menuText: "How each block is agreed"
weight: 10
---

## The problem of agreement {#agreement}

Each node keeps a copy of the ledger, and all the copies must match. For that, every node has to accept the same blocks, in the same order.

Achieving it is hard for three reasons. Messages take time to travel from one node to another. Some nodes can fail or disconnect. And some participants can try to cheat; for example, spending the same balance twice by sending two contradictory transactions to different nodes.

The way of solving this problem is called a **consensus mechanism**. A good consensus mechanism gets every honest node to accept the same blocks, even if some of the participants fail or act badly.

## Why the vote depends on staking {#weight}

To reach agreement, the nodes vote. The question is how much each vote weighs.

If each node had one vote, whoever wanted to cheat could create thousands of fake nodes and win any vote. On an open network, creating nodes is easy. That is why the weight of a vote has to depend on something that costs something to obtain.

In the protocol, that something is the units each participant puts at stake. The nodes that vote on blocks, called **validators**, lock units as backing. Those locked units are called **staking**. The more units a validator has in staking, the more its vote weighs. That weight is called **voting power**.

If a validator breaks the rules, it loses part of its backing. Cheating thus costs more than could be gained from it.

This mechanism is called **delegated proof of stake**. "Proof of stake", because the vote depends on what each validator puts at stake. "Delegated", because other people can add their units to a validator's backing.

## Delegation {#delegation}

A validator's voting power does not depend only on its own units. Other accounts can **delegate** units to it, which are added to its staking and increase its voting power. The network's backing is thus not limited to those who run servers.

The protocol sets three rules for delegation:

- **The units still belong to whoever delegates them.** The validator cannot use them or transfer them.
- **They share the penalties.** If the validator commits a fault, the units delegated to it also lose a part.
- **Withdrawing them takes a waiting period.** A withdrawn delegation stays locked for a fixed period before it can be transferred. On the mainnet, that period is 21 days.

Each validator sets a **commission**: the part of the reward corresponding to delegated units that it keeps for operating its infrastructure.

:::aside
[Run a node →](/operate/nodes)
:::

## The active set {#active-set}

Not every registered validator confirms blocks. The protocol orders the validators by their voting power. Only the validators with the most voting power form the **active set**: the group that proposes and confirms the blocks.

The number of places in the active set is a protocol parameter, and it can be changed through a governance proposal. On the mainnet, the active set has 100 places.

A validator that falls out of the active set stays registered. But it neither proposes nor confirms blocks, and it receives no reward while it is out.

The active set is updated with each block, as the units in staking of each validator change.

## A consensus round {#round}

Each block is decided in a round. A round has four stages:

- **Proposal.** A validator in the active set proposes the block. The turn rotates among the validators. Validators with more voting power propose more often.
- **Prevote.** Each validator reviews the proposed block. If the block is valid, the validator signs a first vote in its favor.
- **Precommit.** If the block gathers prevotes from more than two thirds of the voting power, each validator signs a second vote. With that second vote, the validator commits to that block.
- **Confirmation.** If the block gathers precommits from more than two thirds of the voting power, the block is confirmed and added to the chain.

Why two votes? With only one, the network could split. Because of a connection problem, some validators could see one block and other validators a different one, and each group could confirm its own.

The second vote prevents that. A validator commits to a block only when it already knows that more than two thirds of the voting power support it. Two different groups cannot each gather more than two thirds of the total. That is why two different blocks are never confirmed for the same position in the chain.

Sometimes a round does not gather the votes it needs; for example, because the validator that was supposed to propose is disconnected. In that case a new round starts, and the proposal falls to another validator.

:::facts
- **1 block** Finality
- **&gt; 2/3** Voting power to confirm
- **&lt; 1/3** Faults tolerated
:::

## What happens if validators fail {#failures}

The consensus mechanism tolerates faults. As long as the validators that fail add up to less than one third of the voting power, the other validators still gather the two thirds required. The network keeps confirming blocks.

If the disconnected validators add up to more than one third of the voting power, no block can gather the two thirds. The network then stops producing blocks.

This pause is a design decision. A confirmed block can no longer be undone, so the protocol prefers to stop rather than confirm a block without the necessary majority. When the validators reconnect and the majority is recovered, the network continues from the last confirmed block.

:::widget{name="consensus-sim"}
:::

## Penalties {#penalties}

The protocol automatically penalizes two faults:

- **Double signing.** The validator signs two different blocks for the same position in the chain. It happens only through a serious configuration error or an attempt at fraud. It is the most serious fault.
- **Prolonged inactivity.** The validator stops signing blocks for too long.

When a validator commits one of these faults, the protocol removes part of the units it has in staking, including delegated units. It also removes it from the active set.

The proportion removed and the time the validator stays out depend on the fault. On the mainnet, double signing removes 5% of the validator's staking. Inactivity removes 0.01% and keeps the validator out of the active set for at least 10 minutes; a validator that signs less than 5% of the last 10,000 blocks is considered inactive.

:::aside
[A validator's responsibilities →](/operate/nodes#responsibilities)
:::

## Why the protocol does it this way {#why}

- **Proof of stake instead of one vote per node.** Creating nodes does not give power. Putting units at stake does. The vote thus depends on something that costs something to obtain and that is lost by cheating.
- **Immediate finality.** A confirmed block is final from the first moment. Whoever uses the network does not have to wait for a transaction to become safer over time.
- **Stopping rather than risking.** If the necessary majority is not gathered, the network stops instead of confirming doubtful blocks.
- **Delegation.** The network's backing can be added to a validator without running a server, and it shares the validator's penalties.
- **Automatic penalties.** Faults are proved on the ledger and punished without anyone having to decide it.
