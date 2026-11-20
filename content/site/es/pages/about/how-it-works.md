---
title: "Infinite Improbability Drive"
summary: "El Protocolo 42 es un motor improbabilístico de registro distribuido. Qué problema resuelve y qué se vuelve posible."
menuTitle: "Cómo funciona"
section:
  label: Protocolo
  weight: 1
  accent: "#5BF0C8"
  ink: "#0A7A5E"
---

## Infinite Improbability Drive {#protocol}

El Protocolo 42 es un motor improbabilístico de registro distribuido.

Permite que varias personas mantengan el mismo registro, apliquen las mismas reglas y comprueben el resultado sin depender de una sola.

:::lore[Douglas Adams · The Hitchhiker’s Guide to the Galaxy]
El motor de improbabilidad infinita hace posible, por un instante, lo que parecía imposible.

Se pone en marcha con una taza de té bien preparada: combustible preciso y listo.
:::

Un registro distribuido improbabilístico funciona con la misma lógica: muchas partes independientes, un orden preciso, y el resultado encaja aunque parezca improbable.

Hay hechos que varias personas necesitan conocer a la vez, y reglas que tienen que valer igual para todas. Si un certificado es válido. Si un trabajo se terminó. Si una reparación se hizo. Si un acuerdo se cumplió.

Hoy, casi siempre, una de esas personas guarda el registro y las demás tienen que confiar en ella. Dependen de que lo conserve, de que no lo cambie y de que siga disponible. Quien tiene el único libro puede, sin que nadie lo note, reescribir una página.

El Protocolo 42 cambia eso. Permite que esas personas —o muchas más— mantengan el mismo registro y apliquen las mismas reglas, y que cualquiera pueda comprobar el resultado sin pedirle permiso a nadie.

:::diagram[El mismo problema, de dos formas: un registro en manos de una sola persona y un registro que cualquiera puede comprobar.]{name="patron-comun"}
:::

No es una aplicación. Es la infraestructura de cadena de bloques sobre la que otras personas pueden construir aplicaciones, registros y servicios que no dependan de un único dueño.

## Tres fortalezas que importan {#strengths}

### Nadie es dueño del registro

El registro no vive en el sistema de una sola persona o empresa. Cada quien puede guardar una copia completa. Si una parte desaparece, cambia de opinión o deja de responder, el registro sigue. Cualquiera puede leerlo y cualquiera puede poner otra copia a funcionar.

### Lo que ya está escrito no se puede reescribir en silencio

Este registro no es una hoja que alguien abre y edita. Es una sucesión de páginas. Lo que ya se cerró no se borra ni se corrige. Cada página guarda la huella de la anterior. Si alguien cambia una página vieja, la huella deja de coincidir y la rotura queda a la vista de todas las copias.

:::widget{name="hash-chain"}
:::

Cambia una letra en cualquiera de las páginas. La cadena deja de coincidir y cualquier copia lo nota. No hace falta llamar a quien escribió el dato original para saber si alguien lo alteró después.

### Las reglas son las mismas para todos y se pueden leer

Las reglas con las que se añade información y se aplican acuerdos están escritas en el propio registro. Todos los que guardan una copia las ejecutan igual. No hay un administrador que pueda interpretarlas a favor de alguien, ni cambiarlas en silencio. Quien escribe las reglas es responsable de lo que hacen; el protocolo solo se asegura de que se apliquen de la misma forma en todas partes.

## Cómo entra algo en el registro: el consenso {#how}

:::lore[Douglas Adams · The Hitchhiker’s Guide to the Galaxy]
Al principio se creó el universo.

Esto puso muy furiosa a mucha gente y fue ampliamente considerado una mala idea.
:::

Proponer la siguiente página parece, al principio, una mala idea. Hasta que hay acuerdo suficiente. Entonces queda fija, unida a la anterior, y se puede comprobar.

Imagina que Ana termina un trabajo y Bruno necesita saber que es cierto, sin tener que confiar solo en la palabra de Ana ni en una plataforma intermedia.

1. Ana decide qué quiere dejar escrito y ve el costo de hacerlo antes de firmar.
2. Firma con una llave que solo ella tiene. La red no guarda una copia de esa llave.
3. Otras personas que respaldan la red reúnen lo que está esperando y proponen la siguiente página. Si más de dos tercios están de acuerdo, la página se cierra. Si no hay acuerdo, se espera.
4. Bruno puede leer el resultado en su propia copia. Ya no se deshace.

El mismo camino sirve para un certificado, una reparación, un acuerdo o cualquier otro hecho que varias personas necesiten conocer. El detalle de cada paso —cómo se calcula el costo, cómo se llega al acuerdo, cómo se ejecutan las reglas— está en la documentación.

:::diagram[El camino desde que alguien decide escribir algo hasta que otra persona lo ve en su copia.]{name="entrada"}
:::

## Qué se vuelve posible {#possible}

Cuando el registro no depende de una sola parte, se pueden construir cosas que antes exigían confianza o intermediarios:

- Un certificado que cualquiera comprueba en segundos, sin llamar a la institución que lo emitió.
- El historial de una reparación o de un producto que nadie puede reescribir después.
- Acuerdos entre personas o sistemas que no se conocen, donde las reglas se aplican igual para todos.
- Aplicaciones que se conectan entre sí y pueden verificar lo que ocurrió en otra red, sin que nadie custodie los datos o los valores en el camino.

Todo eso se construye encima del protocolo. El protocolo no decide qué se construye; solo ofrece el registro compartido y las reglas verificables. Quienes lo usan deciden el sentido.

:::aside
[Casos de uso →](/use-cases) · [El mecanismo de cada pieza →](docs:/protocol)
:::

Una infraestructura de registro distribuido improbabilístico parece imposible. El protocolo existe para hacerla posible.
