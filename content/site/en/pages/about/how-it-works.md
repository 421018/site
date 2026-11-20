---
title: "Infinite Improbability Drive"
summary: "Protocol 42 is an improbabilistic distributed-ledger engine. What problem it solves and what becomes possible."
menuTitle: "How it works"
section:
  label: Protocol
  weight: 1
  accent: "#5BF0C8"
  ink: "#0A7A5E"
---

## Infinite Improbability Drive {#protocol}

Protocol 42 is an improbabilistic distributed-ledger engine.

It lets several people keep the same ledger, apply the same rules and check the result without depending on any one of them.

:::lore[Douglas Adams · The Hitchhiker’s Guide to the Galaxy]
The Infinite Improbability Drive makes possible, for an instant, what seemed impossible.

It is started with a properly made cup of tea: precise fuel, ready to go.
:::

An improbabilistic distributed ledger works by the same logic: many independent parties, a precise order, and a result that fits even when it seems improbable.

There are facts that several people need to know at once, and rules that have to apply the same way to all of them. Whether a certificate is valid. Whether a job was finished. Whether a repair was done. Whether an agreement was kept.

Today, almost always, one of those people keeps the ledger and the others have to trust them. They depend on that person keeping it, not changing it, and staying available. Whoever holds the only book can, without anyone noticing, rewrite a page.

Protocol 42 changes that. It lets those people —or many more— keep the same ledger and apply the same rules, and lets anyone check the result without asking anyone for permission.

:::diagram[The same problem, two ways: a ledger in one person's hands, and a ledger anyone can check.]{name="patron-comun"}
:::

It is not an application. It is the blockchain infrastructure on which other people can build applications, records and services that do not depend on a single owner.

## Three strengths that matter {#strengths}

### Nobody owns the ledger

The ledger does not live in one person or company's system. Anyone can keep a full copy. If one party disappears, changes their mind or stops answering, the ledger continues. Anyone can read it, and anyone can put another copy to work.

### What is already written cannot be rewritten in silence

This ledger is not a sheet someone opens and edits. It is a succession of pages. What has already closed is not erased or corrected. Each page keeps the fingerprint of the one before it. If someone changes an old page, the fingerprint no longer matches, and the break is visible to every copy.

:::widget{name="hash-chain"}
:::

Change one letter on any of the pages. The chain no longer matches, and any copy notices. There is no need to call the person who wrote the original data to know whether someone altered it later.

### The rules are the same for everyone and can be read

The rules for adding information and applying agreements are written in the ledger itself. Everyone who keeps a copy runs them the same way. There is no administrator who can interpret them in someone's favor, or change them in silence. Whoever writes the rules is responsible for what they do; the protocol only makes sure they are applied the same way everywhere.

## How something enters the ledger: consensus {#how}

:::lore[Douglas Adams · The Hitchhiker’s Guide to the Galaxy]
In the beginning the Universe was created.

This has made a lot of people very angry and been widely regarded as a bad move.
:::

Proposing the next page seems, at first, like a bad idea. Until there is enough agreement. Then it stays fixed, bound to the one before it, and it can be checked.

Imagine Ana finishes a job and Bruno needs to know it is true, without having to trust only Ana's word or an intermediary platform.

1. Ana decides what she wants written down and sees the cost of doing it before she signs.
2. She signs with a key that only she has. The network does not keep a copy of that key.
3. Other people who back the network gather what is waiting and propose the next page. If more than two thirds agree, the page closes. If there is no agreement, it waits.
4. Bruno can read the result on his own copy. It no longer comes undone.

The same path works for a certificate, a repair, an agreement or any other fact that several people need to know. The detail of each step —how the cost is calculated, how agreement is reached, how the rules run— is in the documentation.

:::diagram[The path from someone deciding to write something to another person seeing it on their copy.]{name="entrada"}
:::

## What becomes possible {#possible}

When the ledger does not depend on a single party, things can be built that used to require trust or intermediaries:

- A certificate anyone checks in seconds, without calling the institution that issued it.
- The history of a repair or a product that nobody can rewrite afterwards.
- Agreements between people or systems who do not know each other, where the rules apply the same way to everyone.
- Applications that connect to each other and can verify what happened on another network, without anyone holding the data or the value along the way.

All of that is built on top of the protocol. The protocol does not decide what gets built; it only offers the shared ledger and the verifiable rules. Those who use it decide the meaning.

:::aside
[Use cases →](/use-cases) · [The mechanism of each part →](docs:/protocol)
:::

An improbabilistic distributed-ledger infrastructure seems impossible. The protocol exists to make it possible.
