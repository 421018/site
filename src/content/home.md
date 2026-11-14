---
# Home page text. The layout lives in src/pages/index.astro.
# A line break in a title (written with "|") is shown as a line break on the page.
# Blocks are numbered automatically (01, 02…) in the order they appear on the page.

hero:
  eyebrow: Protocolo abierto de infraestructura
  title: |
    Infraestructura compartida
    que cualquiera puede verificar.
  lead: El Protocolo 42 permite que varias organizaciones mantengan un mismo registro y apliquen las mismas reglas, sin depender de los sistemas de una sola de ellas. 42 Chain es la red pública que lo ejecuta.
  primary: { label: Cómo funciona, href: /protocolo }
  secondary: { label: Conectarse a la red, href: /implementar/conectarse }

uses:
  kicker: Casos de uso
  title: Para qué sirve, en la práctica.
  lead: "Cuando varias partes necesitan los mismos datos y las mismas reglas, un registro distribuido evita que una sola de ellas tenga que custodiarlos. Cada parte opera su copia, cualquier alteración queda a la vista y cualquiera puede comprobar el resultado. Tres ejemplos:"
  link: { label: Ver los casos de uso, href: /casos-de-uso }
  stories:
    - title: Un título que se verifica solo.
      text: Una universidad registra la huella de cada título que emite. Cualquier empleador comprueba en segundos que es auténtico, sin llamar a nadie.
    - title: Un origen que varias partes comparten.
      text: Productores, transportistas y compradores registran cada paso de un lote. Ninguno depende de que otro guarde bien los datos.
    - title: Un historial de mantenimiento que nadie reescribe.
      text: Un municipio y sus contratistas registran cada intervención en el alumbrado o en la red de agua. Todas las partes ven el mismo historial, firmado y fechado.

build:
  kicker: Para quien construye
  title: |
    Herramientas conocidas.
    Reglas verificables.
  lead: "Los contratos se escriben con lenguajes y herramientas estándar: Solidity, Hardhat, Foundry. Una aplicación que ya funciona en una red compatible con la EVM funciona aquí sin cambios en su código."
  link: { label: Construir aplicaciones, href: /implementar }
  code:
    file: hardhat.config.js
    label: Ejemplo de configuración de Hardhat para conectarse a 42 Chain
    text: |
      networks: {
        chain42: {
          url: "[RPC URL]",
          chainId: [CHAIN ID],
        },
      }

      // Ya está. Despliega como siempre.
  facts:
    - { value: ~2 s, label: Por bloque }
    - { value: 1 bloque, label: Para ser definitivo }
    - { value: IBC, label: Conexión con otras redes }
    - { value: Apache 2.0, label: Código abierto }

people:
  kicker: Cómo se organiza
  title: Cada función, en manos distintas.
  lead: "El código, la operación de la red y las decisiones sobre sus reglas están separados, y cada parte se puede comprobar: el código en un repositorio público, la operación y las decisiones en la propia cadena."
  link: { label: Cómo se organiza, href: "/codigo-abierto#circulos" }
  rows:
    - { who: Contribuidores del código, what: "Proponen y revisan cambios en un repositorio público." }
    - { who: Validadores y operadores de nodos, what: "Verifican cada bloque y dan acceso a la red." }
    - { who: Gobernanza en la cadena, what: "Los validadores y quienes les delegan votan qué cambia y cuándo." }
    - { who: Quienes construyen, what: "Ofrecen aplicaciones y servicios sobre la red, y cada uno responde por lo suyo." }

start:
  kicker: Por dónde empezar
  title: Elige por dónde entrar.
  paths:
    - { label: Conectarse a la red, href: /implementar/conectarse, text: "Parámetros de red, billeteras y proveedores de RPC." }
    - { label: Construir una aplicación, href: /implementar, text: "Contratos compatibles con los estándares de la industria, de la red de pruebas a la red principal." }
    - { label: Operar un nodo, href: /implementar/nodos, text: "Verificar la red por tu cuenta, dar servicio a aplicaciones o validar bloques." }
    - { label: Integrar la red, href: /implementar/integrar, text: "Conectar una billetera, una plataforma o un explorador." }
    - { label: Entender la gobernanza, href: /protocolo/gobernanza, text: "Cómo se proponen, se votan y se aplican los cambios al protocolo." }

name:
  kicker: El nombre
  title: ¿Por qué 42?
  lead: "En la novela de Douglas Adams, 42 es la respuesta a la gran pregunta sobre la vida, el universo y todo lo demás. La respuesta es exacta, pero el sentido lo ponen quienes preguntan. El protocolo funciona igual: ofrece reglas precisas, y lo que se construye con ellas lo deciden quienes lo usan."
  link: { label: Por qué 42, href: "/codigo-abierto#porque42" }

closing:
  title: Infraestructura compartida, reglas a la vista.
  primary: { label: Empieza a construir, href: /implementar }
  secondary: { label: Leer la documentación, href: /docs }
---
