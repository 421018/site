---
# Texts of the console's screens. The layout lives in src/console/.

nav:
  overview: Overview
  status: Network status
  events: Network events
  networks: Networks and connections
  tools: Tools

overview:
  kicker: Console
  title: The network, in plain sight.
  lead: Tools to connect to 42 Chain, check its status and follow what happens on it. Everything is read from your browser, from the network's public services.
  live: Right now
  cards:
    status: Height, block pace and each public provider's response, live.
    events: Releases, upgrades, incidents and governance results, with their source.
    networks: Each network's parameters, how to add it to your wallet and who offers public services.
    tools: Convert units and estimate the cost of a transaction.

status:
  kicker: Network status
  title: How the network is right now.
  lead: Each public provider is queried straight from your browser, every ten seconds. Nothing goes through a server of ours.
  height: Latest block
  blockTime: Block time
  online: Providers online
  gas: Gas price
  provider: Provider
  endpoint: Address
  state: Status
  latency: Response
  ok: Online
  behind: Behind
  down: No response
  downNote: '"No response" can also mean the provider does not accept requests from a browser; its service may still work for wallets and applications.'
  wrongChain: Another network
  checking: Checking…
  seconds: "{n} s"
  chartTitle: Seconds between blocks, last 60
  chartAvg: "Average: {n} s"
  chartBar: "Block {h}: {n} s"
  updated: "Updated at {time}"
  noscript: Live status needs JavaScript. Each network's data is in Networks and connections.

events:
  kicker: Network events
  title: What happens on the network, with its source.
  lead: Releases, network upgrades, incidents, security notices, governance results and maintenance. Each event cites the proposal, block or transaction behind it, and may link the ones that came before or after.
  empty: No events published yet.
  emptyText: When the first one is published it will appear here, with a page of its own to link and share.
  types: Event types
  typeNames:
    - Release
    - Network upgrade
    - Incident
    - Security
    - Governance
    - Maintenance
    - Notice

networks:
  kicker: Networks and connections
  title: Connecting to 42 Chain.
  lead: Each network's parameters, the button to add it to your wallet and the public services offered by independent providers.
  params: Parameters
  wallet: Add to your wallet
  directory: Public services

tools:
  kicker: Tools
  title: Tools.
  lead: Small calculators to work with the network, without leaving the browser.
---
