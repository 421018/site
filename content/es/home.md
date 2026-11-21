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
  secondary: { label: El proyecto, href: /about }

engine:
  kicker: El motor
  title: Lo que sostiene el acuerdo.
  lead: |
    Muchas copias independientes del mismo registro llegan al mismo resultado, página tras página. Cada página se cierra cuando hay acuerdo suficiente, queda unida a la anterior y ya no se puede reescribir sin que se note.

    Las reglas están escritas en el propio registro y se aplican igual en todas las copias. Cómo se acuerda cada página, cómo se paga el trabajo y cómo se conecta con otras redes está contado con detalle en la documentación.
  link: { label: Cómo funciona el protocolo, href: "docs:/protocol" }

# Latest entries of the Bitácora. The entries themselves come from posts/.
log:
  kicker: Desde la Bitácora
  title: Lo que se cuenta a bordo.
  link: { label: Ir a la Bitácora, href: /log }

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
  link: { label: La historia del nombre, href: "/about#why-42" }

closing:
  title: Infraestructura compartida, reglas a la vista.
  lead: Un registro que muchos guardan a la vez. Reglas que valen igual para todos. Lo improbable, hecho posible.
  primary: { label: Cómo funciona, href: "docs:/protocol" }
  secondary: { label: Leer la Bitácora, href: /log }
---
