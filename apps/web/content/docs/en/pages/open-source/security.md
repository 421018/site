---
title: "Security and reports"
summary: "If you find a flaw in the code, this is the path for reporting it without putting it within reach of someone who could exploit it."
menuTitle: "Security and reports"
weight: 20
---

## Report a vulnerability {#report}

If you find a vulnerability in the protocol software, in the Console or on this site, report it **in private** to the maintainers of the code:

- Through the affected repository's private reporting system, or
- By email to [security@42chain.org](mailto:security@42chain.org).

Do not publish it or report it in a public space until it has been fixed. Publishing it earlier would let others exploit it.

## What to include {#include}

So the report can be evaluated, describe:

- **What you found.** The affected component and the version.
- **How to reproduce it.** The steps, and the code or transactions required.
- **What impact it could have.** What someone who exploited it could do.

Reports are treated confidentially. There are no guaranteed response times.

## Responsible disclosure {#disclosure}

Someone who investigates the protocol's security in good faith reports what they find through this channel, does not exploit the vulnerability, does not publish it before it is fixed, and does not affect other people or the network.

Once it is fixed, what happened is published in the security notices, and the contribution of the person who reported it is acknowledged, if they wish.

:::aside
[How the protocol's security is designed →](/protocol/security)
:::

## What this channel is not for {#scope}

This channel is only for vulnerabilities in the code. It does not handle:

- **Network support.** For technical questions, use the [official channels](site:/channels).
- **Accounts or units.** Nobody can restore a private key or reverse a confirmed transaction, and this channel does not manage anyone's accounts, units or funds.
- **Third-party services.** Wallets, RPC providers, explorers and applications are responsible for their own services.

:::note[Nobody will ask you for your keys]
No channel of the project will ask you for your recovery phrase, your private keys, or for you to send units to "verify" an account. Whoever asks is trying to deceive you. [How to protect yourself](/protocol/security#protect-yourself)
:::
