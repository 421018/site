# Security policy

## Scope

This repository contains the 42 Chain **website** only. Vulnerabilities in the protocol, the node software or the console must be reported through the channel described on the site's contact page: [/proyecto/contacto](src/content/pages/proyecto/contacto.md).

Relevant reports for this repository include, for example:

- Cross-site scripting or content injection on the site.
- Weaknesses in the Content-Security-Policy or response headers (`astro.config.mjs`, `public/_headers`).
- Vulnerable dependencies that affect the published site or its build.
- Content that could mislead visitors into unsafe actions, such as a fake official channel or a phishing link.

## Reporting a vulnerability

**Please don't open a public issue.** Report privately by either:

- GitHub's [private vulnerability reporting](../../security/advisories/new), or
- Email to **[security email]**.

Include what you found, where (URL or file), how to reproduce it and its potential impact. You'll get an acknowledgment within 3 business days, and we'll keep you informed until the issue is resolved. Please give us reasonable time to fix it before disclosing it publicly.

## Supported versions

Only the current version of the site, deployed from the `main` branch, is supported.
