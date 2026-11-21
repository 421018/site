---
# Home page text. The layout lives in src/components/Home.astro.
# A line break in a title (written with "|") is shown as a line break on the page.
# Paragraphs are separated by a blank line. The central idea is said once, in
# the editorial; the rest of the page lets it be felt without repeating it.

hero:
  eyebrow: Protocolo abierto
  title: |
    Don’t Panic
    Esto es infraestructura.
  lead: |
    42 Chain es infraestructura de cadena de bloques.
    Un registro distribuido improbabilístico.
  primary: { label: Empezar a leer, href: "/#editorial" }
  secondary: { label: Leer la Bitácora, href: /log }

editorial:
  kicker: Editorial
  title: Cada época construye su infraestructura invisible.
  body: |
    Los caminos, la electricidad e internet empezaron siendo ideas improbables, de esas que se discuten con escepticismo en reuniones largas. Terminaron siendo cosas en las que nadie piensa. Simplemente están, como el suelo, o el café de los lunes.

    Hoy todo se conecta y casi nada se puede comprobar. Personas, organizaciones, máquinas y programas intercambian datos, valor y decisiones, y cada uno guarda su propia versión de lo ocurrido. Ponerlas de acuerdo es un deporte caro, lento y con muchos árbitros.
  statement: "Infinite Drive es la nuestra: infraestructura común sobre la que cualquiera puede construir, y en la que cualquiera puede comprobar lo que pasa sin tener que confiar en los demás."
  aside: "La sostenemos entre todos, y por eso no depende de una sola parte. No pide fe: pide, como mucho, un poco de curiosidad."

engine:
  kicker: El motor
  title: En el centro hay un motor, no una oficina.
  lead: "Infinite Drive sostiene la red y la mantiene conectada. Cada nodo que se suma, en un escritorio, en un aula o en un centro de datos, la hace un poco más fuerte, y todos comprueban lo mismo."
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
  caption: Cada punto es un nodo. Juntos forman 42 Chain.
  link: { label: Cómo funciona el motor, href: "docs:/protocol" }

beliefs:
  kicker: En qué creemos
  title: Dos textos de los noventa lo dijeron casi todo. A nosotros nos tocó escribir el código.
  lead: "La Declaración de independencia del ciberespacio y el Manifiesto cypherpunk imaginaron un espacio al que se entra sin pedir permiso y donde la privacidad se construye en lugar de mendigarse. Treinta años después, seguimos pensando lo mismo, con algo más de café y bastantes menos módems."
  items:
    - title: Entrar sin pedir permiso.
      text: Usar la red, construir sobre ella o tener tu propio nodo no requiere invitación. Ni siquiera la nuestra.
    - title: Privacidad no es secreto.
      text: Es decidir qué cuentas y a quién. Lo demás es asunto tuyo.
    - title: La libertad se escribe en código.
      text: Abierto, para que cualquiera lo lea, lo use y lo mejore. Las buenas intenciones compilan mal.
  link: { label: "Todo lo que creemos, en el proyecto", href: "/about#beliefs" }

story:
  kicker: Una historia de la Bitácora
  link: Leer la historia

vision:
  kicker: Hacia dónde vamos
  title: Si mañana se apaga todo, que tu nodo siga encendido.
  body: |
    Imaginamos un día cualquiera en que los grandes servicios de los que todo depende deciden, todos a la vez, tomarse la tarde libre. En muchos escritorios, aulas y armarios, pequeños nodos siguen funcionando como si nada. Nadie entra en pánico. Alguien pone agua para el té.

    Ese es el horizonte: una infraestructura estándar en lo grande y en lo pequeño, que inspira confianza no por quién la desarrolla, sino porque todos la sostenemos. Donde cualquiera, sea técnico, estudiante o simplemente curioso, puede tener su propio nodo y cuidar su parte de la malla.
  link: { label: Cómo tener tu propio nodo, href: "docs:/operate/nodes" }

work:
  kicker: Mientras tanto, en la sala de máquinas
  title: Trabajo poco glamuroso, muy necesario.
  body: |
    Pulimos, mejoramos y alineamos el código del nodo con la base sobre la que está construido, para que Infinite Drive sea estable y esté a la altura de los mejores estándares de la industria. Es el tipo de trabajo que solo se nota cuando falta.

    Lo que se construya encima no lo decidimos nosotros: quienes construyen y quienes lo usan lo aprovechan libremente, para sus propios fines.
  link: { label: "Lo último, en la Bitácora", href: /log }

log:
  kicker: La biblioteca
  title: Desde la Bitácora.
  link: { label: Historias y artículos, href: /log }

name:
  kicker: El nombre
  title: ¿Por qué 42?
  lead: "En una novela muy seria sobre el universo, la respuesta a la gran pregunta resultó ser 42, y las naves cruzaban la galaxia gracias a un motor de improbabilidad infinita. Nos quedamos con el número, con la idea del motor y con la sana costumbre de no tomarnos demasiado en serio."
  link: { label: La historia del nombre, href: /name }

closing:
  title: Lo improbable, en marcha.
  lead: Sin pedir permiso. Sin pedir fe. Con una toalla cerca, por si acaso.
  primary: { label: Conocer el proyecto, href: /about }
  secondary: { label: Tener tu propio nodo, href: "docs:/operate/nodes" }
---
