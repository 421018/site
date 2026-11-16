---
# Home page text. The layout lives in the engine.
# A line break in a title (written with "|") is shown as a line break on the page.
# Blocks are numbered automatically (01, 02…) in the order they appear on the page.

hero:
  eyebrow: Protocolo abierto de infraestructura
  title: |
    Infraestructura compartida
    que cualquiera puede verificar.
  lead: El Protocolo 42 permite que varias personas mantengan un mismo registro y apliquen las mismas reglas, sin dejarlo en el sistema de una sola. 42 Chain es la red pública, y libre, que lo hace posible.
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
  title: Cinco piezas. Un solo registro.
  lead: Cada una sostiene una parte del acuerdo entre quienes usan el registro.
  pieces:
    - icon: consensus
      label: Consenso
      title: Acuerda cada bloque.
      text: Los validadores proponen y firman bloques. Con más de dos tercios del poder de voto, el bloque queda confirmado y es definitivo.
      points:
        - "Finalidad en un bloque."
        - "Tolera fallas de menos de un tercio del poder de voto."
        - "Si no hay mayoría, la red se detiene antes que arriesgar."
      link: { label: Cómo se acuerda un bloque, href: docs:/protocol/consensus }
    - icon: execution
      label: Ejecución
      title: Ejecuta los contratos.
      text: Los contratos se ejecutan en la máquina virtual de Ethereum (EVM). Todos los nodos llegan exactamente al mismo resultado.
      points:
        - "Solidity y Vyper, sin cambios en el código."
        - "Hardhat, Foundry, Viem y las billeteras de la EVM."
        - "Funciones propias de la red disponibles desde los contratos."
      link: { label: Cómo se ejecutan las reglas, href: docs:/protocol/execution }
    - icon: fees
      label: Tarifas
      title: Mide y paga el trabajo.
      text: "Cada transacción paga una tarifa proporcional al trabajo que exige, en la unidad nativa: Improbability."
      points:
        - "Reglas públicas: el costo se conoce antes de enviar."
        - "Otra persona puede pagar la tarifa de quien firma."
        - "Unidades en drops y cups."
      link: { label: Cómo se paga el trabajo, href: docs:/protocol/fees }
    - icon: interop
      label: Interoperabilidad
      title: Conecta con otras redes.
      text: Con IBC, cada red comprueba por sí misma, con pruebas criptográficas, lo que ocurrió en la otra. Nadie custodia las unidades en el traslado.
      points:
        - "IBC, versiones 1 y 2."
        - "Sin intermediarios de confianza."
        - "Datos y unidades entre redes."
      link: { label: Cómo se conectan las redes, href: docs:/protocol/interoperability }
    - icon: governance
      label: Gobernanza
      title: Decide los cambios.
      text: Los cambios se proponen y se votan en la cadena. Cada voto pesa según las unidades en staking.
      points:
        - "Propuestas registradas en la cadena."
        - "Quórum, umbral y veto públicos."
        - "La red aplica lo aprobado."
      link: { label: Cómo se deciden los cambios, href: docs:/protocol/governance }

uses:
  kicker: Casos de uso
  title: Para qué sirve, en la práctica.
  lead: "Cuando varias personas necesitan los mismos datos y las mismas reglas, el registro no tiene que quedar en manos de una sola. Cada quien puede guardar una copia, cualquier alteración queda a la vista y cualquiera puede comprobar el resultado. Tres ejemplos:"
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
  lead: "El código, la operación de la red y las decisiones sobre sus reglas están separados, y cada parte se puede comprobar: el código en un repositorio público, la operación y las decisiones en la propia cadena."
  link: { label: Cómo se organiza, href: "/open-source#circles" }
  rows:
    - { who: Contribuidores del código, what: "Proponen y revisan cambios en un repositorio público." }
    - { who: Validadores y operadores de nodos, what: "Verifican cada bloque y dan acceso a la red." }
    - { who: Gobernanza en la cadena, what: "Los validadores y quienes les delegan votan qué cambia y cuándo." }
    - { who: Quienes construyen, what: "Ofrecen aplicaciones y servicios sobre la red, y cada uno responde por lo suyo." }

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
  lead: "En la novela de Douglas Adams, 42 es la respuesta a la gran pregunta sobre la vida, el universo y todo lo demás. La respuesta es exacta, pero el sentido lo ponen quienes preguntan. El protocolo funciona igual: ofrece reglas precisas, y lo que se construye con ellas lo deciden quienes lo usan."
  link: { label: Por qué 42, href: "/open-source#why-42" }

closing:
  title: Infraestructura compartida, reglas a la vista.
  primary: { label: Empieza a construir, href: docs:/build/applications }
  secondary: { label: Leer la documentación, href: "docs:/" }
---
