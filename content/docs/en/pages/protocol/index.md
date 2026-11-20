---
title: "The protocol"
summary: "How each block is agreed, how contracts run, how the work is paid for and how the rules change."
section:
  label: Protocol
  weight: 2
  accent: "#5BF0C8"
  ink: "#0A7A5E"
  numbered: true
  sequential: true
---

## How it works {#how}

Protocol 42 is the set of rules with which many computers keep the same ledger. These pages explain that set, from the signing of an operation to the change of a rule.

- **[Consensus and staking](/protocol/consensus).** How each block is agreed, and what happens when a validator fails or tries to cheat.
- **[Execution](/protocol/execution).** What happens from the signature to the change in the ledger, and how contracts run.
- **[Fees and issuance](/protocol/fees).** How the work is measured, how it is paid for and where the new units come from.
- **[Interoperability](/protocol/interoperability).** How this network checks what happened on another, without a trusted intermediary.
- **[Governance](/protocol/governance).** How a change is proposed, how it is voted on and how it reaches every node at once.
- **[Security](/protocol/security).** What the design protects, under what condition, and what stays in each person's hands.

Whoever is going to publish a contract continues in [Build](/build). Whoever is going to connect a system that already exists, in [Integrate](/integrate). Whoever is going to join a node, in [Operate](/operate).

## How something enters the ledger {#entry}

Imagine Ana finishes a job and Bruno needs to know it is true, without having to trust only Ana's word or an intermediary platform.

1. Ana decides what she wants written down and sees the cost of doing it before she signs.
2. She signs with a key that only she has. The network does not keep a copy of that key.
3. Other people who back the network gather what is waiting and propose the next page. If more than two thirds agree, the page closes. If there is no agreement, it waits.
4. Bruno can read the result on his own copy. It no longer comes undone.

The same path works for a certificate, a repair, an agreement or any other fact that several people need to know. The detail of each step —how the cost is calculated, how agreement is reached, how the rules run— is in the pages of this section.

:::diagram[The path from someone deciding to write something to another person seeing it on their copy.]{name="entrada"}
:::
