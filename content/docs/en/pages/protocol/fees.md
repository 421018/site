---
title: "Fees and issuance"
summary: "Every operation on the network has a small, predictable cost. Where it comes from, how it is calculated and what it turns into."
icon: fees
menuText: "Gas, drops and cups"
weight: 30
---

## What fees are for {#purpose}

Every transaction sent to the network is processed by every node. Processing it consumes real work: computation, storage and connection. The fee exists for three reasons:

- **Cover the work.** The fee compensates those who operate the network for the work of processing each transaction.
- **Prevent abuse.** If transactions were free, someone could saturate the network by sending millions of useless transactions. The fee makes that abuse costly.
- **Order the use.** Each transaction pays according to the work it requires. A simple transaction pays little; a complex transaction pays more.

The fee is paid by the account that sends the transaction, in the native unit. In an infrastructure application, the fee can be borne by the organization rather than by whoever signs each record. [Organization-paid fees](/build/applications#fees)

## The native unit {#unit}

Fees are paid in the protocol's own unit: the **native unit**, which is called **Improbability** and has the symbol **42**.

It is the technical resource the engine runs on, and it serves three functions:

- **Pay for use of the network.** Fees are charged in a unit that the network itself records and verifies, without depending on an external payment system.
- **Back the validators.** Validators lock units as backing for their commitment to follow the rules. Because the backing lives inside the protocol, the protocol can automatically remove a part when a validator commits a fault.
- **Measure voting power.** Each validator's weight in consensus and in governance is measured in units in staking, with the same rule for everyone.

### Drops and cups {#drops-and-cups}

One unit is divided into 18 decimals. The smallest fraction, which can no longer be divided, is called a **drop**. One whole unit equals one trillion drops (10¹⁸).

The drop is also the network's base denomination: in transactions and the network's own interfaces, amounts are expressed in drops (`drop` on the mainnet and `tdrop` on the testnet).

| Measure | What it is | Equivalence |
|---|---|---|
| Drop | The smallest fraction of the unit and the network's base denomination (`drop`; `tdrop` on the testnet) | 0.000000000000000001 Improbability (10⁻¹⁸) |
| Cup | Colloquial name of a whole unit | 1 Improbability = 10¹⁸ drops |
| 42 | Symbol of the unit | What wallets and explorers show |

Among those who build on the network it is common to say **one cup** instead of "one Improbability", and **drops** for the fractions. It is a name of use, for talking about amounts without repeating the full word. On the ledger, in contracts and in wallets, the unit is still Improbability, with the symbol 42.

Contracts always work in drops, as on any EVM-compatible network: a cup is written in a contract as `1000000000000000000`.

:::widget{name="unit-converter"}
:::

:::aside
[Consensus and staking →](/protocol/consensus)
:::

## How a fee is calculated {#fees}

The work a transaction requires is measured in a unit called **gas**. Each instruction the network executes consumes a fixed amount of gas. A simple transfer consumes little gas. A complex contract consumes more.

The fee is calculated by multiplying two numbers:

:::aside
fee = gas consumed × price per unit of gas
:::

For example, if a transfer consumes 21,000 units of gas and the price is 0.000001 Improbability per unit of gas (one trillion drops), the fee is 21,000 × 0.000001 = 0.021 Improbability.

The price per unit of gas has two parts:

- **A base fee.** The protocol adjusts it in each block according to demand: it rises when blocks fill up and falls when there is free capacity. It never falls below a minimum, which is a network parameter. It is the mechanism Ethereum introduced with EIP-1559.
- **An optional tip.** Whoever sends the transaction can add it to give the transaction priority when the network is busy.

The cost of a transaction is thus predictable: the wallet knows the block's base fee and shows it before signing.

:::widget{name="fee-calc"}
:::

### The gas limit

When sending a transaction, the sender also sets a **gas limit**: the maximum amount of gas they are willing to spend. The limit protects the sender. If a contract has an error and enters an endless loop, the transaction stops when it reaches the limit, instead of consuming units without control.

Before signing, the wallet estimates the gas the transaction will consume, proposes a limit and shows the fee. Whoever sends the transaction thus knows the cost before sending it.

:::aside
The figures in the example are illustrative.
:::

:::lore[The engine's log]
The engine does not run on steam or on electricity: it runs on improbability. That thousands of computers which do not know each other should agree on exactly the same thing, block after block, should not be possible. The engine manages it, and each maneuver consumes a little fuel.

In Douglas Adams's novel, the Infinite Improbability Drive is started with a good hot cup of tea. That is where the name of a whole unit comes from: a cup is the cup that moves the engine. Each cup is divided into drops, the smallest amount that exists, like an atom.

Gas is not the fuel. It is the meter that says how many drops each maneuver asks for.
:::

## Issuance {#issuance}

Besides charging fees, the protocol creates new units with each block. The creation of new units is called **issuance**.

Issuance sustains the operation of the network. Fees depend on how much the network is used, and that use changes over time. Issuance, by contrast, does not depend on use. With it, the operation of the validators is sustained continuously, even if use of the network varies.

Issuance moves **within a range** set in the protocol parameters. The annual rate adjusts gradually according to the proportion of units that is in staking: it rises when few units are backing the network and falls when there are many, seeking a target proportion. Issuance thus encourages backing the network when it is most needed.

The range and the target proportion change only if a governance proposal is approved. Because issuance does not stop, the total number of units grows over time. On the mainnet, the annual rate goes from 0.1% to 0.5%, with a target of 67% of the units in staking.

## Distribution {#distribution}

The new units and the fees of each block are shared automatically. That sharing is called **distribution**. Distribution has three destinations:

- **Community pool.** A fixed proportion goes to the community pool, described in the next section.
- **Validators.** The rest is shared among the validators, according to the units each one has in staking, their own and delegated.
- **Delegations.** The part of each validator that corresponds to delegated units is assigned to the accounts that delegated them, after the validator's commission.

The proportion that goes to the community pool is a network parameter. On the mainnet, it is 2%.

:::diagram[Where each block's units come from and where they go.]{name="distribucion"}
:::

:::aside
[Delegation and commission →](/protocol/consensus#delegation)
:::

## The community pool {#community-fund}

The **community pool** is a reserve of units that belongs to the network. Nobody controls it on their own: to use units from the pool, someone submits a proposal and the participants vote on it.

The pool serves to fund what the network needs and that nobody else would fund. For example, a security audit, a public tool or the translation of the documentation.

:::aside
[Governance →](/protocol/governance)
:::

## Initial supply {#initial-supply}

The network's first block is called the **genesis block**. In the genesis block an initial amount of units is defined, called the **initial supply**, and how it is assigned.

The initial supply is not part of the issuance or the distribution described above. Its amount and its assignment are data of the network, not rules of the protocol.

## Why the protocol does it this way {#why}

- **A unit of its own.** Staking backing has to be removable automatically when someone breaks the rules. That is possible only with a unit that lives inside the protocol.
- **Fees measured in gas.** Each transaction pays according to the work it requires, and the cost is known before it is sent.
- **Issuance within a range.** Operation of the network does not depend on how much it is used at each moment, and the rate favors there being enough units backing the network.
- **An adjustable base fee.** The cost follows the network's real demand and is known before signing.
- **A pool assigned by governance.** What the network needs is funded with public rules, without depending on any particular party.

:::aside
[Organization-paid fees →](/build/applications#fees) · [Legal notices](site:/legal#risks)
:::
