---
# Texto de la página del proyecto (/about). El diseño vive en src/components/Project.astro.
# Párrafos: separados por una línea en blanco.

title: Infraestructura común, sostenida por quienes la usan.
description: "Qué es Infinite Drive, en qué creemos, cómo se sostiene, en qué trabajamos y hacia dónde vamos."
kicker: Proyecto

what:
  id: what-is
  kicker: Qué es Infinite Drive
  title: Un motor que no elige pasajeros.
  body: |
    Infinite Drive, el protocolo 42, es el núcleo de 42 Chain: lleva el registro, aplica las mismas reglas a todo el mundo y deja que cualquiera compruebe lo que ha pasado. Encima, cada quien construye lo que necesite: una aplicación, un servicio, una herramienta para su barrio o para su empresa.

    Sirve igual a una persona con un portátil viejo que a una institución con un centro de datos. Las dos entran por la misma puerta, siguen las mismas reglas y pueden comprobar lo mismo. Ninguna necesita confiar en la otra, y tampoco en nosotros.
  art:
    name: Infinite Drive
    kicker: El motor
    aria: Infinite Drive en el centro, como un motor, conectando muchos nodos que forman una sola red
    labels:
      - una persona
      - una comunidad
      - una estudiante con un portátil viejo
      - una institución
      - un programa
      - una cooperativa
  caption: Infinite Drive en el centro; cada punto es un nodo, y juntos forman 42 Chain.

beliefs:
  id: beliefs
  kicker: En qué creemos
  title: Lo dijeron en 1993 y en 1996. Seguimos de acuerdo.
  body: |
    Nuestros valores vienen de dos textos que imaginaron internet como un lugar libre: la Declaración de independencia del ciberespacio, de John Perry Barlow, y el Manifiesto cypherpunk, de Eric Hughes. No los citamos como consigna. Los hemos traducido a seis convicciones con las que tomamos decisiones.
  sources:
    - { label: "Declaración de independencia del ciberespacio (1996)", href: "https://www.eff.org/cyberspace-independence" }
    - { label: "Manifiesto cypherpunk (1993)", href: "https://www.activism.net/cypherpunk/manifesto.html" }
  items:
    - { icon: open, title: Entrar sin pedir permiso., text: "Usar la red, construir sobre ella o tener tu propio nodo no requiere invitación de nadie.", source: Barlow }
    - { icon: privacy, title: Privacidad no es secreto., text: "Es decidir qué cuentas y a quién. Se revela lo necesario y nada más.", source: Hughes }
    - { icon: code, title: La libertad se escribe en código., text: "Abierto, para que cualquiera lo lea, lo use y lo mejore. Las buenas intenciones compilan mal.", source: Hughes }
    - { icon: vote, title: Las reglas las sostienen quienes participan., text: "Los cambios se proponen y se votan en la propia red, donde todo el mundo puede verlos.", source: Barlow }
    - { icon: verify, title: "Comprobar, no confiar.", text: "Nadie tiene que creerle a nadie: cada quien puede verificar lo que pasa por sí mismo.", source: Barlow y Hughes }
    - { icon: node, title: "Cada quien, su propio nodo.", text: "Para estudiantes y curiosos, no solo para especialistas. Tu infraestructura, bajo tu cuidado.", source: Hughes }
  note: "Instituciones, empresas y gobiernos son bienvenidos, como cualquiera: por la misma puerta y con las mismas reglas."

quote: "Hace treinta años alguien escribió que la libertad había que construirla. Seguimos en ello, una línea de código a la vez."

organization:
  id: organization
  kicker: Cómo se sostiene
  title: Cada pieza, en manos distintas.
  body: |
    El código lo escriben y lo revisan contribuidores en abierto. La red la sostienen nodos repartidos por el mundo, y cualquiera puede sumar el suyo. Las reglas cambian solo cuando lo aprueban quienes participan, votando en la propia red. Y lo que se construye encima lo decide quien lo construye.
  cards:
    - { title: El código, text: "Contribuidores, en abierto" }
    - { title: La red, text: Nodos de cualquiera }
    - { title: Las reglas, text: Votadas a la vista }
    - { title: Lo que se construye, text: "Quien quiera, sin pedir permiso" }

work:
  id: work
  kicker: En qué trabajamos
  title: La sala de máquinas.
  body: |
    Pulimos, mejoramos y alineamos el código del nodo con la base sobre la que está construido, para que Infinite Drive sea estable y esté a la altura de los mejores estándares de la industria. Es trabajo poco glamuroso: solo se nota cuando falta. Y cada cambio sigue el mismo camino, sin atajos.
  steps:
    - Se propone en abierto
    - Se prueba en la red de pruebas
    - Se vota en la propia red
    - Llega a la red principal

vision:
  id: vision
  kicker: Hacia dónde vamos
  title: Infraestructura estándar, en lo grande y en lo pequeño.
  body: |
    Imaginamos Infinite Drive igual de útil para lo cotidiano que para lo muy específico: un entorno común que inspira confianza no por quién lo desarrolla, sino porque todos lo sostenemos y lo mantenemos resiliente.

    Imaginamos que nadie tenga que depender de infraestructura ajena que no puede controlar. Que cualquiera pueda tener su propio nodo y cuidar su parte de la malla. Y que si un día los sistemas se caen, cada quien mantenga en pie su pedazo, y entre todos, la red.

doors:
  - { kicker: El nombre, title: "¿Por qué 42?", text: "Una novela, un motor de improbabilidad infinita y una taza de té bien preparada.", href: /name }
  - { kicker: Para no perderse, title: Canales oficiales, text: "Dónde habla el proyecto, y la regla de oro: nadie te pedirá nunca tu frase de recuperación.", href: /channels }
---
