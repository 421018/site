---
# Portada. Solo textos: el diseño vive en src/pages/index.astro.
# Un salto de línea en un título (con "|") se muestra como salto de línea en la página.
# Los bloques se numeran solos (01, 02…) en el orden en que aparecen en la portada.

hero:
  eyebrow: Protocolo blockchain de código abierto
  title: |
    Infraestructura pública
    para construir.
  lead: 42 Chain es una red blockchain para desplegar aplicaciones, registros y servicios que cualquiera puede verificar. Interoperable y compatible con los estándares de la industria.
  primary: { label: Empieza a construir, href: /desarrolladores }
  secondary: { label: Cómo funciona, href: /protocolo }

build:
  kicker: Para quien construye
  title: |
    Cambia la red.
    Tu código sigue igual.
  lead: "Los contratos se escriben con los lenguajes y las herramientas que ya usa la industria: Solidity, Hardhat, Foundry, MetaMask. Si ya construyes sobre blockchain, ya sabes construir aquí."
  link: { label: Construir en 42, href: /desarrolladores }
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
    - { value: IBC, label: Interoperable }
    - { value: Apache 2.0, label: Código abierto }

uses:
  kicker: Lo que permite
  title: Para qué sirve, en la práctica.
  lead: "Cuando los datos y las reglas quedan en un registro público que nadie puede modificar, cualquiera puede comprobarlos sin depender de un intermediario. Tres ejemplos:"
  link: { label: Qué permite construir, href: /protocolo/que-permite-construir }
  stories:
    - title: Un título que se verifica solo.
      text: Una universidad registra la huella de cada título que emite. Cualquier empleador comprueba en segundos que es auténtico, sin llamar a nadie.
    - title: Un acuerdo que se cumple tal como se escribió.
      text: Una cooperativa vota cómo repartir un fondo, y un contrato ejecuta el reparto con las reglas que todos aprobaron.
    - title: Un origen que varias partes comparten.
      text: Productores, transportistas y compradores registran cada paso de un lote. Ninguno depende de que otro guarde bien los datos.

people:
  kicker: Quién la sostiene
  title: Funciona porque muchos deciden sostenerla.
  lead: Detrás de la red no hay una empresa que pueda cerrarla, cambiar sus reglas por su cuenta o elegir quién la usa. Cada parte la mantiene alguien distinto, por decisión propia.
  link: { label: Cómo se sostiene, href: "/proyecto#circulos" }
  rows:
    - { who: Quienes escriben el código, what: "Lo proponen y lo revisan en público, en un repositorio abierto." }
    - { who: Quienes operan los nodos, what: "Verifican cada bloque y dan acceso a la red a las aplicaciones." }
    - { who: La DAO, what: "Decide qué cambia en el protocolo y cuándo." }
    - { who: Quienes construyen, what: "Llevan la red a las personas a través de sus aplicaciones y servicios." }

start:
  kicker: Por dónde empezar
  title: Elige por dónde entrar.
  paths:
    - { label: Construir una aplicación, href: /desarrolladores, text: "Contratos compatibles con los estándares de la industria, de la red de pruebas a la red principal." }
    - { label: Operar un nodo, href: /desarrolladores/nodos, text: "Verificar la red por tu cuenta, dar servicio a aplicaciones o validar bloques." }
    - { label: Integrar la red, href: /desarrolladores/integrar, text: "Conectar una billetera, una plataforma o un explorador." }
    - { label: Participar en la DAO, href: /protocolo/gobernanza, text: "Delegar y votar el rumbo del protocolo." }
    - { label: Conversar, href: /comunidad, text: "Preguntar y compartir en Infinite Drive, el chat de la comunidad." }

name:
  kicker: El nombre
  title: ¿Por qué 42?
  lead: "En la novela de Douglas Adams, 42 es la respuesta a la gran pregunta sobre la vida, el universo y todo lo demás. La respuesta es exacta, pero el sentido lo ponen quienes preguntan. Esta red funciona igual: ofrece reglas precisas, y lo que se construye con ellas lo deciden quienes la usan."
  link: { label: Por qué 42, href: "/proyecto#porque42" }

closing:
  title: Construye sobre una red que no es de nadie.
  primary: { label: Empieza a construir, href: /desarrolladores }
  secondary: { label: Conversar en Infinite Drive, href: /comunidad }
---
