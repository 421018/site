---
# Home page text. The layout lives in src/site/components/Home.astro.
# A line break in the hero title is shown as a line break on the page.
# Every capability below must be verifiable in the protocol's code.

description: "42 Chain es una red pública de cadena de bloques: compatible con la EVM, con finalidad en un bloque e interoperable por IBC. La impulsa Infinite Drive, un protocolo de código abierto."

hero:
  status: Red principal · en vivo
  title: |
    Don’t Panic.
    Esto es infraestructura.
  lead: "42 Chain es una red pública de cadena de bloques: compatible con la EVM, con finalidad en un bloque e interoperable por IBC. La impulsa Infinite Drive, un protocolo de código abierto que cualquiera puede verificar, usar y operar."
  primary: { label: Empezar a construir, href: "docs:/get-started" }
  secondary: { label: Ver la red en vivo, href: "console:/" }
  height: Último bloque
  pace: Tiempo por bloque
  online: Proveedores en línea
  finality: Finalidad
  finalityValue: 1 bloque
  chain: Chain ID
  seconds: "{n} s"
  block: "Bloque {n}"
  unavailable: Ahora mismo no responden los proveedores públicos.

features:
  kicker: La red
  title: Lo que ya conoces, sobre una base que no se mueve.
  lead: Las herramientas estándar de la industria, una confirmación definitiva por bloque y puentes nativos hacia otras redes. Todo en código abierto.
  items:
    - icon: execution
      title: Compatible con la EVM
      text: Solidity, Hardhat, Foundry, ethers y MetaMask funcionan sin cambios. Si ya construyes para la EVM, ya construyes aquí.
      href: "docs:/build/applications"
    - icon: consensus
      title: Finalidad en un bloque
      text: CometBFT confirma cada bloque de forma definitiva. No hay reorganizaciones ni confirmaciones que esperar.
      href: "docs:/protocol/consensus"
    - icon: interop
      title: Interoperable por IBC
      text: Transferencias con otras redes por IBC, versiones 1 y 2, y contratos que comprueban datos de otra red con ICS02.
      href: "docs:/protocol/interoperability"
    - icon: security
      title: Firmas de hoy
      text: Passkeys y chips seguros (P-256) como firma, y EIP-7702 para que una aplicación pague las tarifas de sus usuarios.
      href: "docs:/build/precompiles"
    - icon: governance
      title: Gobernanza en la cadena
      text: Los cambios del protocolo se proponen, se votan y se aplican en la propia red, a la vista de todos.
      href: "docs:/protocol/governance"
    - icon: opensource
      title: Código abierto
      text: Todo el código del nodo, bajo Apache 2.0. Cualquiera puede leerlo, revisarlo y operar su propio nodo.
      href: "docs:/open-source"

stack:
  kicker: Infinite Drive
  title: Un protocolo, cuatro capas, una sola red.
  lead: Infinite Drive reúne piezas probadas de la industria en un motor coherente. Cada capa hace una cosa, y la hace a la vista.
  layers:
    - { label: Ejecución, text: "EVM y funciones propias de la red (precompilados)", tag: Contratos }
    - { label: Módulos, text: "Cuentas, staking, gobernanza, tarifas y emisión", tag: Lógica }
    - { label: Consenso, text: "CometBFT: acuerdo bizantino y finalidad en un bloque", tag: Acuerdo }
    - { label: Red, text: "Nodos que se descubren y comparten bloques entre sí", tag: P2P }
  side: { label: IBC, text: "Conexión con otras redes, versiones 1 y 2" }
  link: { label: Cómo funciona el protocolo, href: "docs:/protocol" }

paths:
  kicker: Por dónde empezar
  title: Elige tu camino.
  items:
    - icon: build
      title: Desarrolladores
      text: Despliega contratos y aplicaciones con las herramientas estándar de la EVM.
      href: "docs:/build"
    - icon: node
      title: Operadores de nodos
      text: Suma tu máquina a la red y ayuda a sostenerla.
      href: "docs:/operate/nodes"
    - icon: integrate
      title: Sistemas e instituciones
      text: Conecta lo que ya tienes y comprueba datos sin intermediarios.
      href: "docs:/integrate"
    - icon: connect
      title: Seguir la red
      text: Estado en vivo, parámetros y herramientas, en la Consola.
      href: "console:/"

principles:
  kicker: Principios
  title: Lo que no se negocia.
  items:
    - title: Sin pedir permiso.
      text: Usar la red, construir sobre ella u operar un nodo no requiere invitación de nadie.
    - title: Comprobable, no creíble.
      text: Cualquiera puede verificar lo que pasa en la red sin confiar en quien se lo cuenta.
    - title: Abierto por defecto.
      text: El código, las reglas y los cambios están a la vista, y cualquiera puede proponer mejoras.
  link: { label: El proyecto, href: /about }

story:
  kicker: Desde el blog
  link: Leer la historia

closing:
  title: Don’t Panic. Empieza a construir.
  lead: La documentación te lleva de cero a tu primer contrato. La Consola te muestra la red en vivo.
  primary: { label: Ir a la documentación, href: "docs:/get-started" }
  secondary: { label: Abrir la Consola, href: "console:/" }
---
