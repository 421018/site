---
title: "Project"
summary: "What 42 is, how it is organized, the principles that guide it, where its name comes from and its official channels."
section:
  label: Project
  weight: 2
  accent: "#C4A7FF"
  ink: "#6B4BC8"
---

## What 42 is {#what-is}

42 is open-source blockchain infrastructure: a ledger that many parties keep at once, with rules that apply the same way to all of them and results that anyone can check.

There are facts that several people need to know at once, and rules that have to apply the same way to all of them. Whether a certificate is valid. Whether a job was finished. Whether a repair was done. Whether an agreement was kept.

Today, almost always, one of those people keeps the ledger and the others have to trust them. They depend on that person keeping it, not changing it, and staying available. Whoever holds the only book can, without anyone noticing, rewrite a page.

42 changes that. It lets those people —or many more— keep the same ledger and apply the same rules, and lets anyone check the result without asking anyone for permission.

:::diagram[The same problem, two ways: a ledger in one person's hands, and a ledger anyone can check.]{name="patron-comun"}
:::

It is not an application. It is the blockchain infrastructure on which other people can build applications, records and services that do not depend on a single owner.

The software is open source. Anyone can read it, propose changes or contribute.

## Three strengths that matter {#strengths}

### The ledger does not depend on a single party

The ledger does not live in one person or company's system. Anyone can keep a full copy. If one party disappears, changes their mind or stops answering, the ledger continues. Anyone can read it, and anyone can put another copy to work.

### What is already written cannot be rewritten in silence

This ledger is not a sheet someone opens and edits. It is a succession of pages. What has already closed is not erased or corrected. Each page keeps the fingerprint of the one before it. If someone changes an old page, the fingerprint no longer matches, and the break is visible to every copy.

:::widget{name="hash-chain"}
:::

Change one letter on any of the pages. The chain no longer matches, and any copy notices. There is no need to call the person who wrote the original data to know whether someone altered it later.

### The rules are the same for everyone and can be read

The rules for adding information and applying agreements are written in the ledger itself. Everyone who keeps a copy runs them the same way. There is no administrator who can interpret them in someone's favor, or change them in silence. Whoever writes the rules is responsible for what they do; the protocol only makes sure they are applied the same way everywhere.

## How it is organized {#circles}

Each part has its place and can be checked separately:

- **The software.** Contributors write and review it in a public repository. Anyone can propose changes. [Contribute](docs:/open-source)
- **Operation of the network.** Validators and node operators do it. The protocol compensates their work.
- **Access.** Independent providers offer the RPC nodes and the explorers. Anyone can offer their own. [Providers](docs:/get-started/connect#providers)
- **Decisions.** They are made by on-chain governance: those who back the network vote. [Governance](docs:/protocol/governance)
- **Applications.** Independent teams build them.
- **This site and the documentation.** Contributors write and review them.

:::aside
[Where to check each part →](docs:/get-started/sources)
:::

## Principles {#principles}

These are the criteria that guide development. How the ledger works is in [the protocol](docs:/protocol).

- **Openness.** Anyone can use the network, build on it, run a node and review the code.
- **Neutrality.** The network treats every transaction the same way. No application and no participant have privileges.
- **Verification.** What the protocol does, and what this site states, can be checked against a [public source](docs:/get-started/sources).
- **Interoperability.** The protocol speaks to other networks through open standards, rather than closing itself off.
- **Government in the open.** The rules change only through proposals and votes that stay on the record.

## Ongoing development {#ongoing}

The protocol does not have a roadmap with an end date. It is maintained and improved while it is in use: what needs fixing is fixed, and improvements are brought in from the technology it is built on.

Every change follows the same path. It is proposed in the public repository, tested on the testnet, and reaches the mainnet only if governance approves it. That is why dates are not published: what changes, and when, is decided on the network itself.

:::aside
[Version history and updates · Technical reference](docs:/)
:::

## Why 42 {#why-42}

The name comes from *The Hitchhiker’s Guide to the Galaxy*, the novel by Douglas Adams. In the story, a supercomputer spends millions of years calculating the answer to the great question of life, the universe and everything. The answer is 42. Exact, and without anyone quite knowing what the question meant.

The protocol is thought of the same way. It offers precise rules and results anyone can check. It does not decide what is built on it. Those who use it supply that.

The same novel contains the Infinite Improbability Drive. It does not follow the normal routes: for an instant it makes possible what seemed impossible. The protocol (*Infinite Improbability Drive*) and its native unit, Improbability, whose symbol is 42, take their names from that engine.

In the story, the engine is started with a properly made cup of tea. It is not a decorative detail. The tea is the precise fuel, measured and ready. Without it, the engine does not start. Something similar happens here. Improbability is the unit with which the shared ledger is moved and backed. Whoever writes to it and whoever maintains it do so with the same unit. The smallest fraction is called a drop. A whole unit, colloquially, is called a cup.

A ledger that many keep at once, and that anyone can check, seems improbable. The name and the unit are a reminder that the protocol exists to make it possible, and that a concrete fuel is needed for the mechanism to work.

## Official channels {#channels}

These are the project's only official channels. If a channel does not appear here, it is not official, even if it uses the name 42.

| Channel | What it is for | Address |
|---|---|---|
| Chain | The project, the Logbook and frequently asked questions | 42chain.org |
| Protocol | Documentation, technical reference and tools | 42protocol.dev |
| X | Project announcements | @42protocol |
| Repository | Source code, technical questions, bug reports and contributions | [repository] |
| Security email | Private reports of vulnerabilities in the code | [security email] |

RPC providers and explorers are independent and have their own domains. Their addresses are in the [provider directory](docs:/get-started/connect#providers).

:::note[Before trusting a message]
No channel of the project will ask you for your recovery phrase or your private keys. Verify any announcement or link against this list.
:::
