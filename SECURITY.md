# Security policy

## Scope

This repository contains the 42 Chain **website** only. Vulnerabilities in the protocol, the node software or the console are reported to the maintainers of that code, as described on the site's security page ([`/codigo-abierto/seguridad`](apps/site/src/content/pages/codigo-abierto/seguridad.md)).

Relevant reports for this repository include, for example:

- Cross-site scripting or content injection on the site.
- Weaknesses in the Content-Security-Policy or response headers (`apps/site/astro.config.mjs`, `apps/site/public/_headers`).
- Vulnerable dependencies that affect the published site or its build.
- Content that could mislead visitors into unsafe actions, such as a fake project channel or a phishing link.

This channel is for vulnerabilities in code only. It does not handle network support, accounts, funds or third-party services.

## Reporting a vulnerability

**Please don't open a public issue or discussion.** Report privately by either:

- GitHub's [private vulnerability reporting](../../security/advisories/new), or
- Email to **[security email]**.

Include what you found, where (URL or file), how to reproduce it and its potential impact. Reports are handled confidentially. There is no guaranteed response time. Please allow time for a fix before disclosing the issue publicly.

## Supported versions

Only the current version of the site, deployed from the `main` branch, is supported.
