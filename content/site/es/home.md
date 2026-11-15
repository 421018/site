---
# Home page text. The layout lives in the engine.
# A line break in a title (written with "|") is shown as a line break on the page.
# Blocks are numbered automatically (01, 02…) in the order they appear on the page.

hero:
  eyebrow: Protocolo abierto de infraestructura
  title: |
    Infraestructura compartida
    que cualquiera puede verificar.
  lead: El Protocolo 42 permite que varias organizaciones mantengan un mismo registro y apliquen las mismas reglas, sin depender de los sistemas de una sola de ellas. 42 Chain es la red pública que lo ejecuta.
  primary: { label: Cómo funciona, href: /protocolo }
  secondary: { label: Conectarse a la red, href: docs:/empezar/conectarse }

# Verifiable protocol figures, shown in a strip under the hero.
figures:
  - { value: ~2 s, label: por bloque }
  - { value: 1 bloque, label: para ser definitivo }
  - { value: IBC v2, label: conexión con otras redes }
  - { value: EVM, label: herramientas estándar }
  - { value: Apache 2.0, label: código abierto }

# The engine, piece by piece: one tab per piece. icon: execution, consensus,
# fees, interop, governance, security.
engine:
  kicker: El motor
  title: Cinco piezas. Un solo registro.
  lead: El Infinite Improbability Drive es el motor completo de la red. Elige una pieza para ver qué hace.
  pieces:
    - icon: consensus
      label: Consenso
      title: Acuerda cada bloque.
      text: Los validadores proponen y firman bloques. Con más de dos tercios del poder de voto, el bloque queda confirmado y es definitivo.
      points:
        - "Finalidad en un bloque."
        - "Tolera fallas de menos de un tercio del poder de voto."
        - "Si no hay mayoría, la red se detiene antes que arriesgar."
      link: { label: Leer el capítulo, href: /protocolo/consenso }
    - icon: execution
      label: Ejecución
      title: Ejecuta los contratos.
      text: Los contratos se ejecutan en la máquina virtual de Ethereum (EVM). Todos los nodos llegan exactamente al mismo resultado.
      points:
        - "Solidity y Vyper, sin cambios en el código."
        - "Hardhat, Foundry, Viem y las billeteras de la EVM."
        - "Funciones propias de la red disponibles desde los contratos."
      link: { label: Leer el capítulo, href: /protocolo/ejecucion }
    - icon: fees
      label: Tarifas
      title: Mide y paga el trabajo.
      text: "Cada transacción paga una tarifa proporcional al trabajo que exige, en la unidad nativa: Improbability."
      points:
        - "Reglas públicas: el costo se conoce antes de enviar."
        - "La organización puede pagar por quien firma."
        - "Unidades en drops y cups."
      link: { label: Leer el capítulo, href: /protocolo/tarifas }
    - icon: interop
      label: Interoperabilidad
      title: Conecta con otras redes.
      text: Con IBC, cada red comprueba por sí misma, con pruebas criptográficas, lo que ocurrió en la otra. Nadie custodia las unidades en el traslado.
      points:
        - "IBC, versiones 1 y 2."
        - "Sin intermediarios de confianza."
        - "Datos y unidades entre redes."
      link: { label: Leer el capítulo, href: /protocolo/interoperabilidad }
    - icon: governance
      label: Gobernanza
      title: Decide los cambios.
      text: Los cambios se proponen y se votan en la cadena. Cada voto pesa según las unidades en staking.
      points:
        - "Propuestas registradas en la cadena."
        - "Quórum, umbral y veto públicos."
        - "La red aplica lo aprobado."
      link: { label: Leer el capítulo, href: /protocolo/gobernanza }

uses:
  kicker: Casos de uso
  title: Para qué sirve, en la práctica.
  lead: "Cuando varias partes necesitan los mismos datos y las mismas reglas, un registro distribuido evita que una sola de ellas tenga que custodiarlos. Cada parte opera su copia, cualquier alteración queda a la vista y cualquiera puede comprobar el resultado. Tres ejemplos:"
  link: { label: Ver los casos de uso, href: /casos-de-uso }
  stories:
    - tag: Registros verificables
      title: Un título que se verifica solo.
      text: Una universidad registra la huella de cada título que emite. Cualquier empleador comprueba en segundos que es auténtico, sin llamar a nadie.
      image: ../images/casos/registros.jpg
      alt: Diploma enmarcado con un sello dorado
      credit: "Foto: Quilia, Unsplash"
      href: /casos-de-uso/registros-verificables
    - tag: Trazabilidad
      title: Un origen que varias partes comparten.
      text: Productores, transportistas y compradores registran cada paso de un lote. Ninguno depende de que otro guarde bien los datos.
      image: ../images/casos/trazabilidad.jpg
      alt: Saco de yute lleno de granos de café
      credit: "Foto: Tatiana Fernández R, Unsplash"
      href: /casos-de-uso/trazabilidad
    - tag: Infraestructura
      title: Un historial de mantenimiento que nadie reescribe.
      text: Un municipio y sus contratistas registran cada intervención en el alumbrado o en la red de agua. Todas las partes ven el mismo historial, firmado y fechado.
      image: ../images/casos/infraestructura.jpg
      alt: Farola de doble brazo encendida al atardecer
      credit: "Foto: Kim R-K, Unsplash"
      href: /casos-de-uso/infraestructura

build:
  kicker: Para quien construye
  title: |
    Herramientas conocidas.
    Reglas verificables.
  lead: "Los contratos se escriben con lenguajes y herramientas estándar: Solidity, Hardhat, Foundry. Una aplicación que ya funciona en una red compatible con la EVM funciona aquí sin cambios en su código."
  link: { label: Construir aplicaciones, href: docs:/construir/aplicaciones }
  secondary: { label: "Abrir la Consola ↗", href: "console:/" }
  code:
    file: hardhat.config.js
    label: Ejemplo de configuración de Hardhat para conectarse a 42 Chain
    text: |
      networks: {
        chain42: {
          url: "https://evm.infinitedrive.xyz",
          chainId: 421018,
        },
      }

      // Ya está. Despliega como siempre.

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
    - { icon: connect, label: Conectarse a la red, href: docs:/empezar/conectarse, text: "Parámetros de red, billeteras y proveedores de RPC." }
    - { icon: build, label: Construir una aplicación, href: docs:/construir/aplicaciones, text: "Contratos compatibles con los estándares de la industria, de la red de pruebas a la red principal." }
    - { icon: node, label: Operar un nodo, href: docs:/operar/nodos, text: "Verificar la red por tu cuenta, dar servicio a aplicaciones o validar bloques." }
    - { icon: integrate, label: Integrar sistemas, href: docs:/integrar, text: "Conectar sistemas de gestión, dispositivos, herramientas de firma u otras redes." }
    - { icon: governance, label: Entender la gobernanza, href: /protocolo/gobernanza, text: "Cómo se proponen, se votan y se aplican los cambios al protocolo." }
    - { icon: docs, label: Leer la documentación, href: /docs, text: "Guías y referencia técnica, desde conectar una billetera hasta operar un validador." }

name:
  kicker: El nombre
  title: ¿Por qué 42?
  lead: "En la novela de Douglas Adams, 42 es la respuesta a la gran pregunta sobre la vida, el universo y todo lo demás. La respuesta es exacta, pero el sentido lo ponen quienes preguntan. El protocolo funciona igual: ofrece reglas precisas, y lo que se construye con ellas lo deciden quienes lo usan."
  link: { label: Por qué 42, href: "/codigo-abierto#porque42" }

closing:
  title: Infraestructura compartida, reglas a la vista.
  primary: { label: Empieza a construir, href: docs:/construir/aplicaciones }
  secondary: { label: Leer la documentación, href: "docs:/" }
---
