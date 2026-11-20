---
# Home page text. The layout lives in the engine.
# A line break in a title (written with "|") is shown as a line break on the page.
# Blocks are numbered automatically (01, 02…) in the order they appear on the page.

hero:
  eyebrow: Protocolo abierto
  title: |
    Don’t Panic
    Esto es infraestructura.
  lead: |
    42 Chain es infraestructura de cadena de bloques.
    Un registro distribuido improbabilístico.
  primary: { label: Cómo funciona, href: "docs:/protocol" }
  secondary: { label: Conectarse a la red, href: docs:/get-started/connect }

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
  title: Lo que sostiene el acuerdo.
  lead: |
    Un registro distribuido improbabilístico funciona igual: muchas copias independientes llegan al mismo resultado, y cualquiera puede comprobar que las cuentas cierran.
  pieces:
    - icon: consensus
      label: Consenso
      title: Acuerda cada página.
      text: Los participantes respaldan la red y proponen la siguiente página. Cuando hay acuerdo suficiente, esa página se cierra y queda fija. La siguiente se construye encima de ella.
      points:
        - "Se cierra cuando hay acuerdo suficiente."
        - "Cada página queda unida a la anterior."
        - "El acuerdo queda registrado y se puede comprobar."
      link: { label: Cómo se acuerda una página, href: docs:/protocol/consensus }
    - icon: execution
      label: Ejecución
      title: Las mismas reglas en todas partes.
      text: Las reglas están escritas en el propio registro. Todos los que guardan una copia las aplican igual.
      points:
        - "Contratos en la máquina virtual de Ethereum."
        - "Herramientas que ya conoces."
        - "El mismo resultado en todas las copias."
      link: { label: Cómo se aplican las reglas, href: docs:/protocol/execution }
    - icon: fees
      label: Tarifas
      title: El costo se ve antes.
      text: Escribir en el registro tiene un costo proporcional al trabajo que pide. Se paga en Improbability y se conoce antes de firmar.
      points:
        - "El número aparece antes de confirmar."
        - "Otra persona puede pagar por ti."
        - "La unidad se llama Improbability (42)."
      link: { label: Cómo se paga el trabajo, href: docs:/protocol/fees }
    - icon: interop
      label: Interoperabilidad
      title: Otras redes lo comprueban solas.
      text: Cuando algo tiene que pasar a otra red, esa red revisa la prueba por su cuenta. No hace falta un intermediario que guarde los fondos o los datos en el camino.
      points:
        - "Conexión directa entre redes."
        - "Sin intermediarios que custodien."
        - "Datos y unidades pueden moverse."
      link: { label: Cómo se conectan las redes, href: docs:/protocol/interoperability }
    - icon: governance
      label: Gobernanza
      title: Los cambios se deciden a la vista.
      text: Las reglas también cambian. Se proponen y se votan en el propio registro. Queda escrito quién votó y qué se aprobó.
      points:
        - "Propuestas públicas."
        - "El voto pesa según lo que se respalda."
        - "La red aplica lo aprobado."
      link: { label: Cómo se deciden los cambios, href: docs:/protocol/governance }

# Latest entries of the Bitácora. The entries themselves come from posts/.
log:
  kicker: Desde la Bitácora
  title: Lo que se cuenta a bordo.
  link: { label: Ir a la Bitácora, href: /log }

build:
  kicker: Para quien construye
  title: |
    Herramientas conocidas.
    Reglas verificables.
  lead: "Los contratos se escriben con lenguajes y herramientas estándar: Solidity, Hardhat, Foundry. Una aplicación que ya funciona en una red compatible con la EVM funciona aquí sin cambios en su código."
  link: { label: Construir aplicaciones, href: docs:/build/applications }
  secondary: { label: "Abrir la Consola", href: "console:/" }
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

start:
  kicker: Por dónde empezar
  title: Elige por dónde entrar.
  paths:
    - { icon: connect, label: Conectarse a la red, href: docs:/get-started/connect, text: "Parámetros de red, billeteras y proveedores de RPC." }
    - { icon: build, label: Construir una aplicación, href: docs:/build/applications, text: "Contratos compatibles con los estándares de la industria, de la red de pruebas a la red principal." }
    - { icon: node, label: Operar un nodo, href: docs:/operate/nodes, text: "Verificar la red por tu cuenta, dar servicio a aplicaciones o validar bloques." }
    - { icon: integrate, label: Integrar sistemas, href: docs:/integrate, text: "Conectar sistemas de gestión, dispositivos, herramientas de firma u otras redes." }

name:
  kicker: El nombre
  title: ¿Por qué 42?
  lead: "En la novela de Douglas Adams, 42 es la respuesta a la gran pregunta sobre la vida, el universo y todo lo demás. La respuesta es exacta; el sentido lo ponen quienes preguntan. El protocolo funciona igual: ofrece reglas precisas y verificables. Lo que se construye con ellas lo deciden quienes lo usan."
  link: { label: Sobre 42, href: "/about#why-42" }

closing:
  title: Infraestructura compartida, reglas a la vista.
  lead: Un registro que muchos guardan a la vez. Reglas que valen igual para todos. Lo improbable, hecho posible.
  primary: { label: Cómo funciona, href: "docs:/protocol" }
  secondary: { label: Leer la Bitácora, href: /log }
---
