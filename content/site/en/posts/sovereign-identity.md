---
title: "Sovereign identity and reputation"
summary: "A person accumulates proofs of what they have done or of who they are. They can present them anywhere, and whoever receives them checks without asking earlier platforms."
category: caso-de-uso
weight: 50
image: ../../images/casos/identidad.jpg
alt: "A person with portable proofs in a natural setting"
credit: "Generated image"
---

## The problem {#problem}

Proofs of identity or reputation usually live inside platforms. When a person wants to use them somewhere else, they have to ask the original platform to confirm them, or start from scratch.

## How the protocol solves it {#solution}

The person keeps the proofs (or their fingerprints) on a ledger that no platform controls. They can present them wherever they want. Whoever receives them checks them directly on the chain.

## An example {#example}

Ana has completed jobs and courses in different places.

- Each issuer records the fingerprint of the proof.
- Ana carries them with her.
- A new place verifies them without calling the earlier ones.

The same pattern works for credentials, work history or any proof a person wants to move with them.

## What goes on the chain and what does not {#data}

| On the chain | Off the chain |
|---|---|
| The fingerprints of the proofs and who issued them | The full documents |
| The dates | Unnecessary personal data |

:::aside
A basis for moving between systems with sovereignty.
:::
