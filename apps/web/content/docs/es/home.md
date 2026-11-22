---
# Home page text of the documentation. The section cards are generated from
# the sections in pages/ (label and summary of each index.md).

eyebrow: Documentación
title: Todo lo que necesitas para construir y operar sobre 42.
lead: Cómo funciona Infinite Drive, el protocolo de 42 Chain, y cómo conectarse, construir, integrar sistemas y operar un nodo.
searchPrompt: Buscar en la documentación
layers:
  title: Cómo está hecho el protocolo
  items:
    - { label: Interoperabilidad, text: "IBC, versiones 1 y 2", tag: Conexión }
    - { label: Ejecución, text: "EVM y funciones propias de la red", tag: Contratos, href: /build/precompiles }
    - { label: Módulos de la red, text: "Cosmos SDK: staking, gobernanza, tarifas", tag: Lógica }
    - { label: Consenso, text: "CometBFT, finalidad en un bloque", tag: Acuerdo }
quickData: Datos rápidos
live:
  label: Red principal, en vivo
  height: Último bloque
  pace: Tiempo por bloque
  online: Proveedores
  seconds: "{n} s"
  block: "Bloque {n}"
  unavailable: Ahora mismo no responden los proveedores públicos.
  link: { label: Estado completo, href: "console:/status" }
starts:
  title: Elige por dónde empezar
  lead: Cada ruta son dos páginas, en orden. Puedes saltar a cualquiera.
  items:
    - icon: connect
      title: Conectar una billetera
      steps:
        - { label: Conceptos clave, href: /get-started/concepts }
        - { label: Conectarse a 42 Chain, href: /get-started/connect }
    - icon: build
      title: Desplegar un contrato
      steps:
        - { label: Construir aplicaciones, href: /build/applications }
        - { label: Funciones propias de la red, href: /build/precompiles }
    - icon: integrate
      title: Integrar un sistema
      steps:
        - { label: Integrar sistemas, href: /integrate }
        - { label: Fuentes verificables, href: /get-started/sources }
    - icon: node
      title: Operar un nodo
      steps:
        - { label: Operar un nodo, href: /operate/nodes }
        - { label: Seguridad, href: /protocol/security }
    - icon: consensus
      title: Entender el protocolo
      steps:
        - { label: El protocolo, href: /protocol }
        - { label: Consenso y staking, href: /protocol/consensus }
    - icon: opensource
      title: Contribuir al código
      steps:
        - { label: Contribuir, href: /open-source }
        - { label: Seguridad y reportes, href: /open-source/security }
map:
  title: Toda la documentación
  lead: Cada sección y cada página, con lo que encontrarás en ella.
---
