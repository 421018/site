---
title: "Governance"
summary: "The network's rules have to be able to change. Who decides those changes, how they are voted on and how they reach every node at once."
icon: governance
menuText: "Proposals and votes"
weight: 50
---

## Why a network needs government {#need}

No protocol is ever finished. Over time parameters have to be adjusted, errors corrected and improvements adopted. Someone has to decide those changes.

If one party decided the changes, every organization that uses the network would depend on it. If the rules could never change, the network could neither correct its errors nor adapt over time.

The protocol solves both: the changes are decided by the network's own participants, with public rules and votes recorded on the chain. That system is called on-chain governance.

## On-chain governance {#model}

In on-chain governance, the rules for deciding are written in the protocol, and each decision is proposed, voted on and recorded on the chain itself.

This model differs from a traditional way of deciding in three points:

- **Who votes is defined by the protocol's rules.** No registration is needed, nor anyone's approval. Whoever meets the rules can vote.
- **Decisions carry themselves out.** When a proposal is approved, the network applies the change. No administrator has to carry it out, and none can prevent it.
- **Everything is public.** Every proposal, every vote and every result stays recorded on the chain. Anyone can review them.

### Why the vote weighs according to staking

On an open network, anyone can create as many accounts as they want. If each account had one vote, whoever created thousands of accounts would control any decision.

That is why, in governance, the vote weighs according to the units the participant has in staking. It is the same logic that protects consensus: the weight depends on something that costs something to obtain and that is put at stake. Those who protect the network with their units are also those who live with the consequences of each change.

:::aside
[What staking is →](/protocol/consensus#weight)
:::

## Who votes {#voters}

Validators vote, and so do the people who delegated units to them. Each participant votes with the weight of their units in staking.

Those who develop the protocol can submit proposals, like any other participant. Their proposals are decided with the same votes as the rest.

## What is decided {#scope}

Through proposals, three kinds of matter are decided:

- **Protocol parameters.** For example, raising the minimum gas price, expanding the number of places in the active set or changing the penalty for inactivity.
- **Software upgrades.** For example, adopting a new version of the protocol that fixes an error or adds a function.
- **Community pool.** For example, allocating units from the pool to a security audit or to a tool the network needs.

## The path of a proposal {#lifecycle}

Every proposal passes through four stages:

- **1. Discussion.** Before reaching the chain, whoever proposes usually presents the idea in public in order to adjust it and gauge the support it has. This stage is not part of the protocol.
- **2. Proposal.** Someone submits the proposal on the chain and leaves an amount of units as a **deposit**. The deposit keeps senseless proposals from being submitted. If the proposal is vetoed, the deposit is lost. On the mainnet, the minimum deposit is one cup (1 whole unit).
- **3. Voting.** For a fixed period, two days on the mainnet, the participants vote. Each participant chooses one of four options: Yes, No, Abstain or No with veto.
- **4. Execution.** If the proposal is approved, the network applies the change by itself.

:::diagram[The path of a proposal and its three possible results.]{name="propuesta"}
:::

### How a change is applied

A parameter change is applied as soon as voting ends: from that block, the network uses the new value.

A software upgrade needs one more step. The proposal sets a future block, called the **upgrade height**. When that block is reached, the network pauses for a moment, the validators switch to the new version and the network continues with the new rules. Every node thus changes version at the same point in the chain.

:::aside
[What a validator does at each upgrade →](/operate/nodes#responsibilities)
:::

### The vote of whoever delegates

A person who delegated units can vote on their own. In that case, their vote counts for the units they delegated.

If that person does not vote, the units they delegated count with their validator's vote.

## Votes and tally {#tally}

To be approved, a proposal has to meet three conditions at the same time:

- **Quorum.** A minimum part of the total voting power has to vote. If very few participants vote, the proposal is not approved. Quorum keeps a minority from deciding when almost nobody takes part.
- **Threshold.** Among the votes cast, not counting abstentions, the Yes votes have to exceed a minimum proportion.
- **Veto.** No with veto serves to reject proposals considered harmful. If the No with veto votes exceed their own limit, the proposal is rejected even if it has a majority. Whoever submitted it also loses the deposit.

### An example

Suppose the network's total voting power is 100. The rules are those of the mainnet: a quorum of 33.4%, a threshold of 50% and a veto limit of 33.4%.

Participants who add up to 45 of voting power vote: 25 for Yes, 12 for No, 3 for No with veto and 5 for Abstain.

- **Quorum.** 45% of the total voting power voted. It exceeds 33.4%: it is met.
- **Threshold.** Without the abstentions, 40 votes remain. Yes has 25 of 40, that is, 62.5%. It exceeds 50%: it is met.
- **Veto.** No with veto has 3 of 45 votes, less than 7%. It does not reach 33.4%: there is no veto.

The proposal is approved. The three percentages are protocol parameters and can be changed through governance.

:::aside
The votes in the example are illustrative; the rules are those of the mainnet.
:::

:::widget{name="vote-sim"}
:::

:::aside
[Join a node that will have to vote →](/operate/nodes)
:::

## Why the protocol does it this way {#why}

- **Government on the chain.** Proposals, votes and results are public, and approved changes apply themselves. No change is applied without being recorded, and approved changes are applied with the same rules for everyone.
- **Weight according to staking.** The same logic that protects consensus protects decisions: creating accounts does not give power, putting units at stake does.
- **Deposit and veto.** The deposit discourages senseless proposals. The veto makes it possible to reject a harmful proposal even if it has a majority.
- **Proposing and deciding are separate.** Anyone can submit a proposal, including those who write the code. The decision is made by the votes recorded on the chain.
