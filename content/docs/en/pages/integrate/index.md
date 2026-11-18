---
title: "Integrate systems"
summary: "Your systems do not have to change to work with the network. What each kind of integration needs, and where the data for doing it is."
icon: integrate
menuText: "Systems, devices and other networks"
weight: 20
section:
  label: Integrate
  weight: 4
  accent: "#FFB547"
  ink: "#9A5B00"
  sequential: true
---

## What integrating is {#what-is}

Integrating means connecting an existing system to the network, so that it reads from or writes to the shared ledger. For example, a municipality's management system that records each work order, a sensor that signs its readings, or an explorer that shows the blocks.

Integrating requires neither permission nor approval. All the necessary information is public, and technical questions are resolved in the public repository.

## Kinds of integration {#types}

Each kind of integration needs different things:

- **Management systems.** ERP, maintenance systems, document registers. They write to the contracts and query their state. They need a node, their own or a provider's, and an account to sign with. If the fees should be borne by the organization, [organization-paid fees](/build/applications#fees) are used.
- **Devices.** Sensors, meters and field equipment that sign their own records. They can sign with keys stored in their secure chip, with [P-256 signatures](/build/applications#signatures).
- **Signing tools.** EVM-compatible wallets and signing devices, and native Cosmos ecosystem wallets such as Keplr or Leap. The first use the EVM chain ID; the native ones use the native chain ID (`infinite_421018-1`) and the address prefix `infinite`.
- **Explorers and indexers.** They read every block and organize them for lookup. They usually need an archive node.
- **Other networks.** IBC-compatible networks, which exchange transfers or check data with each other. [Interoperability](/protocol/interoperability)

:::aside
[Run a node →](/operate/nodes)
:::

## What information you need {#data}

These are the data an integration usually asks for, and where they are published:

| Data | Detail |
|---|---|
| Network identifiers | One for the mainnet and one for the testnet · [Network parameters](/get-started/connect#parameters) |
| Connection points | Offered by independent providers, or your own node · [Provider directory](/get-started/connect#providers) |
| Node interfaces | EVM-compatible JSON-RPC, CometBFT RPC and gRPC · [Directory by service type](/get-started/connect#providers) |
| Machine-readable network data | All parameters, connection points and explorers in a JSON file · [mainnet ↗](https://assets.infinitedrive.xyz/mainnet/network-data.json) · [testnet ↗](https://assets.infinitedrive.xyz/testnet/network-data.json) |
| Explorer API | Blockscout API for querying blocks, transactions and contracts · [mainnet ↗](https://scan.infinitedrive.xyz/api-docs) · [testnet ↗](https://testnet-scan.infinitedrive.xyz/api-docs) |
| Unit and base denomination | Improbability, symbol 42, 18 decimals · base denomination `drop` (`tdrop` on the testnet) · [Drops and cups](/protocol/fees#drops-and-cups) |
| Address formats | The 0x format, compatible with the EVM, and the network's own format; the two correspond to the same account |
| Finality | A record is final as soon as its block is confirmed; no additional confirmations are needed |
| The network's own functions | Fixed addresses for use from contracts · [The network's own functions](/build/precompiles) |

## What the process is like {#process}

An integration usually follows five steps:

- **1. Choose the kind of integration.** Each kind needs different data; the table above says where each one is.
- **2. Test on the testnet.** The integration is tested on the testnet first, with test units.
- **3. Resolve questions.** If something is not clear, ask in the public repository's discussion space.
- **4. Move to the mainnet.** With the integration tested, it connects to the mainnet. Only the connection parameters change.
- **5. Follow the upgrades.** When a new version of the protocol is approved by governance, those who run nodes update them before the upgrade height. The notes for each version are published in [Changes].
