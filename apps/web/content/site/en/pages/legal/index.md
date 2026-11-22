---
title: "Legal and notices"
summary: "For the whole of 42chain.org (the site, the documentation and the Console): what it is, no warranties, risks of using the network, privacy and licenses."
section:
  label: Legal
  weight: 1
  menu: false # only in the footer
---

:::status[Draft]
Pending legal review.
:::

These notices cover all of 42chain.org: the site, the [documentation](docs:/) and the [Console](console:/).

## Nature of this site {#independence}

42chain.org is informational: it presents the project, explains how the protocol works and how to use it, and shows the state of the network. Operation of each network that runs the protocol, and decisions about it, belong to its validators through on-chain governance.

It is maintained by contributors to Infinite Drive and 42 Chain. The code is open: anyone can review it, propose changes or contribute. In these notices, "the contributors" are the people who write, review or publish the protocol software, the site, the documentation or the Console.

42chain.org does not offer, sell or recommend the native unit, Improbability (42), or any other digital asset, nor platforms or intermediaries. Its mentions of the native unit are exclusively technical: they explain how the protocol works. Nothing on it is financial, legal, tax or investment advice.

## No warranties {#warranties}

The protocol, its software, the site, the documentation and the Console are offered **as is** and **as available**, without warranties of any kind, express or implied, including those of operation, fitness for a particular purpose and absence of errors.

To the extent permitted by applicable law, the contributors are not liable for damages or losses arising from the use of, or the inability to use, the protocol, the network, the software, the tools or 42chain.org, including loss of units or of access to an account, network interruptions, software errors and failures of third-party contracts or services.

:::aside
This exclusion is consistent with the license of the protocol software. [Licenses](#licenses)
:::

## Risks of use {#risks}

Using the network has risks worth understanding before taking part:

- **Loss of access.** If an account's recovery phrase or private keys are lost, there is no way to recover access.
- **Final transactions.** A confirmed transaction cannot be reversed.
- **Third-party contracts.** Contracts published by third parties can contain errors or be made to deceive. The protocol runs them exactly as written.
- **Errors in the software.** The protocol software is reviewed, but it can contain errors that have not been found yet.
- **Upgrades.** Upgrades approved by governance may require those who run nodes or integrated services to update their software in time.
- **Regulation.** Each person and organization is responsible for complying with the laws that apply to them when using the network and its tools.

:::aside
[How to protect yourself →](docs:/protocol/security#protect-yourself)
:::

## Privacy {#privacy}

42chain.org is built so that as little data as possible passes through it:

- **No accounts or forms.** No part of the site asks for personal data.
- **No cookies or analytics.** It does not use cookies or analytics or advertising tools. It only keeps a few preferences in your browser, which never leave it: the documentation's theme (light or dark), the selected network, and whether you closed the documentation's notice.
- **Local search.** The documentation's search index is downloaded from the site itself, and what you search for is not sent to any server.
- **Network queries.** The home page, the documentation's live panel, the fee calculator and the Console read public network data, such as the latest block or the gas price, straight from your browser from the public services (RPC) of the independent providers in the [directory](docs:/get-started/connect#providers). Those providers receive your IP address, as with any connection, under their own policies. Nothing else is sent.
- **No other third-party resources.** Fonts and other resources are served from the site itself. Apart from those queries, the browser connects to another site only when you follow an external link or ask your wallet to add a network.
- **Hosting.** Like any website, the hosting provider (Cloudflare) processes technical data of each visit, such as the IP address, in order to deliver the pages and protect them from abuse, under its own privacy policy.

Everything recorded on the network, such as addresses, transactions or contracts, is public and permanent, and cannot be erased. That is why personal data should not be recorded on the chain. [What goes on and off the chain](docs:/build/applications#application)

## Licenses {#licenses}

| What | License |
|---|---|
| Protocol software (the node) | Apache License 2.0 |
| Code of the site, the documentation and the Console, including their design and interface | Apache License 2.0 |
| Text and data of the site, the documentation and the Console | Creative Commons Attribution 4.0 International (CC BY 4.0) |

Copyright belongs to the 42 Chain contributors, who publish their work under these licenses.

### What the software license allows

The Apache 2.0 license lets anyone use, study, modify and distribute the software, including for commercial purposes, without paying royalties. In return, whoever distributes it must include a copy of the license, keep the copyright and attribution notices, and state which files they modified. Since the code of the site and the Console is open too, anyone can check what they ask your wallet to do.

### What the text license allows

The text of 42chain.org and the network data it publishes, such as parameters and provider lists, may be copied, translated, adapted and published in any medium, including for commercial purposes, provided the source is credited: the project name and a link to the site or to the original page. The license does not authorize suggesting a relationship or an endorsement that does not exist.

### Third-party software

The protocol software is built on open-source software from the Cosmos ecosystem, such as Cosmos SDK, CometBFT and ibc-go, developed by third parties and also published under the Apache 2.0 license. Their copyright and attribution notices are kept intact in the LICENSE and NOTICE files of the public repository, as that license requires.

:::aside
[Full license (Apache License 2.0)](https://www.apache.org/licenses/LICENSE-2.0) · [Full license (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en) · [LICENSE](https://github.com/deep-thought-labs/infinite-app/blob/master/LICENSE) and [NOTICE](https://github.com/deep-thought-labs/infinite-app/blob/master/NOTICE) in the protocol's repository
:::

## Third-party links and services {#third-parties}

The validators, the RPC and explorer providers, and the applications mentioned on 42chain.org are independent and responsible for their own services. Their appearance here does not imply endorsement or a commercial relationship.

Links to external sites are offered only as reference. Each external site has its own terms.
