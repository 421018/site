---
# Texto de la página del proyecto (/about). El diseño vive en src/site/components/Project.astro.
# Párrafos: separados por una línea en blanco.

title: Infraestructura abierta, sostenida por quienes la usan.
description: "Qué es Infinite Drive, sus principios, cómo se gobierna, en qué se trabaja y hacia dónde va."
kicker: Proyecto

what:
  id: what-is
  kicker: Qué es
  title: Infinite Drive es el protocolo. 42 Chain es la red.
  body: |
    Infinite Drive es un protocolo de cadena de bloques de código abierto: define cómo se acuerda cada bloque, cómo se ejecutan los contratos, cómo se pagan las tarifas y cómo cambian las reglas. 42 Chain es la red pública que funciona con él.

    Está construido sobre piezas probadas de la industria (CometBFT, el SDK de Cosmos, la EVM e IBC) y se mantiene alineado con ellas. El objetivo es simple de decir y exigente de cumplir: una base estable, verificable y abierta a cualquiera.

facts:
  title: Ficha técnica
  items:
    - { label: Protocolo, value: Infinite Drive }
    - { label: Red, value: 42 Chain }
    - { label: Chain ID (EVM), value: "421018", note: "Red de pruebas: 421018001" }
    - { label: Chain ID (nativo), value: infinite_421018-1 }
    - { label: Unidad nativa, value: "Improbability · 42", note: "Fracción mínima: drop (10⁻¹⁸)" }
    - { label: Consenso, value: "CometBFT", note: Finalidad en un bloque }
    - { label: Código, value: Apache 2.0 }
    - { label: Textos y datos, value: CC BY 4.0 }

beliefs:
  id: beliefs
  kicker: Principios
  title: Seis convicciones que guían cada decisión.
  body: |
    Vienen de dos textos que imaginaron internet como un lugar libre: la Declaración de independencia del ciberespacio, de John Perry Barlow, y el Manifiesto cypherpunk, de Eric Hughes. Tomamos sus valores, no su confrontación.
  sources:
    - { label: "Declaración de independencia del ciberespacio (1996)", href: "https://www.eff.org/cyberspace-independence" }
    - { label: "Manifiesto cypherpunk (1993)", href: "https://www.activism.net/cypherpunk/manifesto.html" }
  items:
    - { icon: open, title: Sin pedir permiso, text: "Usar la red, construir sobre ella u operar un nodo no requiere invitación de nadie.", source: Barlow }
    - { icon: privacy, title: Privacidad no es secreto, text: "Es decidir qué se revela y a quién. Lo necesario, y nada más.", source: Hughes }
    - { icon: code, title: La libertad se escribe en código, text: "Abierto, para que cualquiera lo lea, lo use y lo mejore.", source: Hughes }
    - { icon: vote, title: Reglas de quienes participan, text: "Los cambios se proponen y se votan en la propia red, a la vista de todos.", source: Barlow }
    - { icon: verify, title: "Comprobar, no confiar", text: "Cualquiera puede verificar lo que pasa sin creerle a nadie.", source: Barlow y Hughes }
    - { icon: node, title: "Cada quien, su nodo", text: "Operar un nodo debe estar al alcance de estudiantes y curiosos, no solo de especialistas.", source: Hughes }
  note: "Instituciones, empresas y gobiernos son bienvenidos en igualdad de condiciones: por la misma puerta y con las mismas reglas."

organization:
  id: organization
  kicker: Gobierno
  title: Cada pieza, en manos distintas.
  body: |
    Ninguna parte controla el conjunto. El código se escribe y se revisa en abierto, la red la sostienen nodos independientes, las reglas cambian por votación en la propia cadena y lo que se construye encima lo decide quien lo construye.
  cards:
    - { title: El código, text: "Contribuidores, en abierto" }
    - { title: La red, text: Nodos independientes }
    - { title: Las reglas, text: Votadas en la cadena }
    - { title: Las aplicaciones, text: "Quien quiera, sin pedir permiso" }

work:
  id: work
  kicker: En qué se trabaja
  title: Estabilidad primero.
  body: |
    El trabajo actual es mantener el nodo alineado con las versiones más recientes de su base, corregir, probar y endurecer. Es el tipo de trabajo que solo se nota cuando falta. Cada cambio sigue el mismo camino, sin atajos.
  steps:
    - Se propone en abierto
    - Se prueba en la red de pruebas
    - Se vota en la cadena
    - Llega a la red principal

vision:
  id: vision
  kicker: Hacia dónde va
  title: Una base estándar, para lo grande y para lo pequeño.
  body: |
    Infraestructura común que inspire confianza no por quién la desarrolla, sino porque cualquiera puede comprobarla y sostenerla. Que nadie dependa de infraestructura ajena que no puede controlar, y que operar un nodo sea tan normal como tener un servidor de correo.

doors:
  - { kicker: Construir, title: Documentación, text: "Del primer contrato a operar un nodo.", href: "docs:/get-started" }
  - { kicker: En vivo, title: Consola, text: "Estado de la red, parámetros y herramientas.", href: "console:/" }
  - { kicker: Para no perderse, title: Canales oficiales, text: "Dónde habla el proyecto. Nadie te pedirá nunca tu frase de recuperación.", href: /channels }
  - { kicker: El nombre, title: "¿Por qué 42?", text: "El origen del nombre, y de la toalla.", href: /name }
---
