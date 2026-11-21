---
# Home page text (English). The layout lives in the engine.
# A line break in a title (written with "|") is shown as a line break on the page.
# Blocks are numbered automatically (01, 02…) in the order they appear on the page.

hero:
  eyebrow: Open protocol
  title: |
    Don’t Panic
    This is infrastructure.
  lead: |
    42 Chain is blockchain infrastructure.
    An improbabilistic distributed ledger.
  primary: { label: How it works, href: "docs:/protocol" }
  secondary: { label: The project, href: /about }

engine:
  kicker: The engine
  title: What holds the agreement.
  lead: |
    Many independent copies of the same ledger reach the same result, page after page. Each page closes when there is enough agreement, is bound to the one before, and can no longer be rewritten without it showing.

    The rules are written in the ledger itself and apply the same way in every copy. How each page is agreed, how the work is paid for and how it connects to other networks is told in detail in the documentation.
  link: { label: How the protocol works, href: "docs:/protocol" }

# Latest entries of the Bitácora. The entries themselves come from posts/.
log:
  kicker: From the Logbook
  title: Tales from on board.
  link: { label: Go to the Logbook, href: /log }

start:
  kicker: Where to start
  title: Choose your way in.
  paths:
    - { icon: connect, label: Connect to the network, href: docs:/get-started/connect, text: "Network parameters, wallets and RPC providers." }
    - { icon: build, label: Build an application, href: docs:/build/applications, text: "Contracts compatible with industry standards, from the testnet to the mainnet." }
    - { icon: node, label: Run a node, href: docs:/operate/nodes, text: "Verify the network yourself, serve applications or validate blocks." }
    - { icon: integrate, label: Integrate systems, href: docs:/integrate, text: "Connect management systems, devices, signing tools or other networks." }

name:
  kicker: The name
  title: Why 42?
  lead: "In Douglas Adams's novel, 42 is the answer to the great question of life, the universe and everything. The answer is exact; the meaning is supplied by those who ask. The protocol works the same way: it offers precise, verifiable rules. What is built with them is decided by those who use it."
  link: { label: The story of the name, href: "/about#why-42" }

closing:
  title: Shared infrastructure, rules in plain sight.
  lead: A ledger that many keep at once. Rules that apply the same way to everyone. The improbable, made possible.
  primary: { label: How it works, href: "docs:/protocol" }
  secondary: { label: Read the Logbook, href: /log }
---
