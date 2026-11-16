---
# Home page text. The layout lives in the engine.
# A line break in a title (written with "|") is shown as a line break on the page.
# Blocks are numbered automatically (01, 02…) in the order they appear on the page.

hero:
  eyebrow: Protocolo abierto de infraestructura
  title: |
    Infraestructura compartida
    que cualquiera puede verificar.
  lead: |
    El Protocolo 42 permite que varias personas mantengan el mismo registro y apliquen las mismas reglas.

    42 Chain es la red pública que lo hace posible.

    Compartir un registro así parece improbable.
    El protocolo existe para hacerlo real.
  primary: { label: Cómo funciona, href: /protocol }
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
    El registro compartido no se sostiene solo. Estas son las piezas que lo hacen posible.

    42 Chain es infraestructura de cadena de bloques: un registro distribuido que cualquiera puede verificar.

    :::lore[Douglas Adams · The Hitchhiker’s Guide to the Galaxy]
    En el restaurante del fin del universo las cuentas nunca cuadran de la forma en que uno espera.
    Los números se comportan de manera improbable.
    Y sin embargo, al final, todo encaja con una precisión que parece imposible.
    :::

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

uses:
  kicker: Casos de uso
  title: Para qué sirve, en la práctica.
  lead: |
    Cuando varias personas necesitan saber lo mismo y no quieren dejar el registro en manos de una sola, el protocolo les permite compartirlo.

    Cualquiera puede guardar una copia.
    Cualquiera puede comprobar el resultado.
  link: { label: Ver los casos de uso, href: /use-cases }
  stories:
    - tag: Registros verificables
      title: Un certificado que cualquiera comprueba.
      text: Ana termina un curso. El certificado sigue en sus manos. Quien la contrata comprueba la huella en segundos, sin llamar a nadie.
      image: ../images/casos/registros.jpg
      alt: Diploma enmarcado con un sello dorado
      credit: "Foto: Quilia, Unsplash"
      href: /use-cases/verifiable-records
    - tag: Trazabilidad
      title: El recorrido de un saco de café.
      text: Quien cosecha, quien tuesta y quien abre el saco dejan el mismo recorrido. Bruno ve cada paso, sin reconstruir el camino.
      image: ../images/casos/trazabilidad.jpg
      alt: Saco de yute lleno de granos de café
      credit: "Foto: Tatiana Fernández R, Unsplash"
      href: /use-cases/traceability
    - tag: Infraestructura
      title: La historia de una farola.
      text: La luminaria de la esquina se funde. Quien la repara y quien vive ahí ven el mismo historial, firmado y fechado, y nadie lo reescribe.
      image: ../images/casos/infraestructura.jpg
      alt: Farola de doble brazo encendida al atardecer
      credit: "Foto: Kim R-K, Unsplash"
      href: /use-cases/infrastructure

build:
  kicker: Para quien construye
  title: |
    Herramientas conocidas.
    Reglas verificables.
  lead: "Los contratos se escriben con lenguajes y herramientas estándar: Solidity, Hardhat, Foundry. Una aplicación que ya funciona en una red compatible con la EVM funciona aquí sin cambios en su código."
  link: { label: Construir aplicaciones, href: docs:/build/applications }
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
  lead: "El código, la operación de la red y las decisiones sobre sus reglas están separados. Cada parte se puede comprobar."
  link: { label: Cómo se organiza, href: "/open-source#circles" }
  rows:
    - { who: Contribuidores del código, what: "Proponen y revisan cambios en un repositorio público." }
    - { who: Validadores y operadores de nodos, what: "Verifican cada página y dan acceso a la red." }
    - { who: Gobernanza en la cadena, what: "Quienes respaldan la red votan qué cambia y cuándo." }
    - { who: Quienes construyen, what: "Ofrecen aplicaciones y servicios sobre la red." }

start:
  kicker: Por dónde empezar
  title: Elige por dónde entrar.
  paths:
    - { icon: connect, label: Conectarse a la red, href: docs:/get-started/connect, text: "Parámetros de red, billeteras y proveedores de RPC." }
    - { icon: build, label: Construir una aplicación, href: docs:/build/applications, text: "Contratos compatibles con los estándares de la industria, de la red de pruebas a la red principal." }
    - { icon: node, label: Operar un nodo, href: docs:/operate/nodes, text: "Verificar la red por tu cuenta, dar servicio a aplicaciones o validar bloques." }
    - { icon: integrate, label: Integrar sistemas, href: docs:/integrate, text: "Conectar sistemas de gestión, dispositivos, herramientas de firma u otras redes." }
    - { icon: governance, label: Entender la gobernanza, href: docs:/protocol/governance, text: "Cómo se proponen, se votan y se aplican los cambios al protocolo." }
    - { icon: docs, label: Leer la documentación, href: /docs, text: "Guías y referencia técnica, desde conectar una billetera hasta operar un validador." }

name:
  kicker: El nombre
  title: ¿Por qué 42?
  lead: "En la novela de Douglas Adams, 42 es la respuesta a la gran pregunta sobre la vida, el universo y todo lo demás. La respuesta es exacta; el sentido lo ponen quienes preguntan. El protocolo funciona igual: ofrece reglas precisas y verificables. Lo que se construye con ellas lo deciden quienes lo usan."
  link: { label: Por qué 42, href: "/open-source#why-42" }

closing:
  title: Infraestructura compartida, reglas a la vista.
  lead: Un registro que no pertenece a nadie. Reglas que valen igual para todos. Lo improbable, hecho posible.
  primary: { label: Cómo funciona el protocolo, href: /protocol }
  secondary: { label: Leer la documentación, href: "docs:/" }
---
