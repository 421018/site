---
title: "Connect to 42 Chain"
summary: "Everything you need to connect a wallet, an application or a node to 42 Chain: the details of each network and where to find an access point."
icon: connect
menuText: "Parameters, wallets and providers"
menuTitle: "Connect to the network"
weight: 20
---

## Two networks, the same software {#network}

42 Chain runs on two networks that run the same software. On the **mainnet**, every transaction has real effect. The **testnet** is for developing and testing without risk: its units are of no use outside it.

To connect to either one you need its details and an access point to a node. Choose the network and this page shows only what applies to it:

:::widget{name="network-switch"}
:::

## Network parameters {#parameters}

:::widget{name="network-params"}
:::

### Why "infinite" {#infinite}

The network's technical identifier is `infinite`, after the protocol's formal name, the Infinite Improbability Drive. That is why the native chain ID starts with `infinite_`, native addresses start with `infinite1` and the network's short name in chain registries is `infinite`. It is the same network as 42 Chain: the name is for people, and the identifier for machines.

## Add the network to a wallet {#wallet}

The quickest way is this button. Your wallet shows the details and asks for confirmation before adding the network:

:::widget{name="add-network"}
:::

You can also add it by hand with five details from the parameters table: the network name, the chain ID (EVM), the symbol, an RPC URL from the [directory](#providers) or from your own node and, optionally, an explorer.

:::note[Check where you connect from]
A fake network can copy the name, the symbol and even the chain ID. Use only an RPC URL from the [directory](#providers) or from your own node, and check that the chain ID your wallet shows matches the one on this page.
:::

## RPC providers, explorers and faucets {#providers}

Access points to 42 are offered by independent operators, each with its own infrastructure and its own domain. Having several is what makes access to the network resilient: if one stops responding, the others are still available, and you can always run your own node. None of them is an official access point, each operator is responsible for its service, and being listed here does not imply endorsement.

:::widget{name="network-switch"}
:::

:::widget{name="provider-directory"}
:::

[Run your own node (in Spanish) →](/operate/nodes)

:::aside
Anyone who runs a public service for 42 can propose adding it to the directory from the public repository: it only takes adding an entry to the providers file.
:::
