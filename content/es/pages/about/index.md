---
title: "Proyecto"
summary: "Qué es 42, cómo se organiza, qué principios lo guían, de dónde viene su nombre y cuáles son sus canales oficiales."
section:
  label: Proyecto
  weight: 2
  accent: "#C4A7FF"
  ink: "#6B4BC8"
---

## Qué es 42 {#what-is}

42 es infraestructura de cadena de bloques de código abierto: un registro que muchas partes guardan a la vez, con reglas que valen igual para todas y resultados que cualquiera puede comprobar.

Hay hechos que varias personas necesitan conocer a la vez, y reglas que tienen que valer igual para todas. Si un certificado es válido. Si un trabajo se terminó. Si una reparación se hizo. Si un acuerdo se cumplió.

Hoy, casi siempre, una de esas personas guarda el registro y las demás tienen que confiar en ella. Dependen de que lo conserve, de que no lo cambie y de que siga disponible. Quien tiene el único libro puede, sin que nadie lo note, reescribir una página.

42 cambia eso. Permite que esas personas —o muchas más— mantengan el mismo registro y apliquen las mismas reglas, y que cualquiera pueda comprobar el resultado sin pedirle permiso a nadie.

:::diagram[El mismo problema, de dos formas: un registro en manos de una sola persona y un registro que cualquiera puede comprobar.]{name="patron-comun"}
:::

No es una aplicación. Es la infraestructura de cadena de bloques sobre la que otras personas pueden construir aplicaciones, registros y servicios que no dependan de un único dueño.

El software es de código abierto. Cualquiera puede leerlo, proponer cambios o contribuir.

## Tres fortalezas que importan {#strengths}

### El registro no depende de una sola parte

El registro no vive en el sistema de una sola persona o empresa. Cada quien puede guardar una copia completa. Si una parte desaparece, cambia de opinión o deja de responder, el registro sigue. Cualquiera puede leerlo y cualquiera puede poner otra copia a funcionar.

### Lo que ya está escrito no se puede reescribir en silencio

Este registro no es una hoja que alguien abre y edita. Es una sucesión de páginas. Lo que ya se cerró no se borra ni se corrige. Cada página guarda la huella de la anterior. Si alguien cambia una página vieja, la huella deja de coincidir y la rotura queda a la vista de todas las copias.

:::widget{name="hash-chain"}
:::

Cambia una letra en cualquiera de las páginas. La cadena deja de coincidir y cualquier copia lo nota. No hace falta llamar a quien escribió el dato original para saber si alguien lo alteró después.

### Las reglas son las mismas para todos y se pueden leer

Las reglas con las que se añade información y se aplican acuerdos están escritas en el propio registro. Todos los que guardan una copia las ejecutan igual. No hay un administrador que pueda interpretarlas a favor de alguien, ni cambiarlas en silencio. Quien escribe las reglas es responsable de lo que hacen; el protocolo solo se asegura de que se apliquen de la misma forma en todas partes.

## Cómo se organiza {#circles}

Cada parte tiene su lugar y se puede comprobar por separado:

- **El software.** Lo escriben y lo revisan contribuidores en un repositorio público. Cualquiera puede proponer cambios. [Contribuir](docs:/open-source)
- **La operación de la red.** La hacen validadores y operadores de nodos. El protocolo compensa su trabajo.
- **El acceso.** Los nodos RPC y los exploradores los ofrecen proveedores independientes. Cualquiera puede ofrecer el suyo. [Proveedores](docs:/get-started/connect#providers)
- **Las decisiones.** Se toman por gobernanza en la propia cadena: votan quienes respaldan la red. [Gobernanza](docs:/protocol/governance)
- **Las aplicaciones.** Las construyen equipos independientes.
- **Este sitio y la documentación.** Los escriben y los revisan contribuidores.

:::aside
[Dónde comprobar cada parte →](docs:/get-started/sources)
:::

## Principios {#principles}

Estos son los criterios que guían el desarrollo. El funcionamiento del registro está en [el protocolo](docs:/protocol).

- **Apertura.** Cualquiera puede usar la red, construir sobre ella, operar un nodo y revisar el código.
- **Neutralidad.** La red trata todas las transacciones por igual. Ninguna aplicación ni ningún participante tienen privilegios.
- **Verificación.** Lo que el protocolo hace y lo que este sitio afirma se puede comprobar en una [fuente pública](docs:/get-started/sources).
- **Interoperabilidad.** El protocolo habla con otras redes mediante estándares abiertos, en lugar de encerrarse.
- **Gobierno a la vista.** Las reglas solo cambian mediante propuestas y votos que quedan registrados.

## Desarrollo continuo {#ongoing}

El protocolo no tiene una hoja de ruta con fecha de término. Se mantiene y se mejora mientras está en uso: se corrige lo que haga falta y se incorporan mejoras de la tecnología sobre la que está construido.

Cada cambio sigue el mismo camino. Se propone en el repositorio público, se prueba en la red de pruebas y solo llega a la red principal si se aprueba por gobernanza. Por eso no se publican fechas: qué cambia y cuándo se decide en la propia red.

:::aside
[Historial de versiones y actualizaciones · Referencia técnica](docs:/)
:::

## Por qué 42 {#why-42}

El nombre viene de *The Hitchhiker’s Guide to the Galaxy*, la novela de Douglas Adams. En la historia, una supercomputadora calcula durante millones de años la respuesta a la gran pregunta sobre la vida, el universo y todo lo demás. La respuesta es 42. Exacta, y sin que nadie sepa del todo qué significaba la pregunta.

El protocolo se piensa de la misma forma. Ofrece reglas precisas y resultados que cualquiera puede comprobar. No decide qué se construye sobre él. Eso lo ponen quienes lo usan.

En la misma novela aparece el motor de improbabilidad infinita. No sigue las rutas normales: por un instante hace posible lo que parecía imposible. De ese motor toman nombre el protocolo (*Infinite Improbability Drive*) y su unidad nativa, Improbability, cuyo símbolo es 42.

En la historia, el motor se pone en marcha con una taza de té bien preparada. No es un detalle decorativo. El té es el combustible preciso, medido y listo. Sin él, el motor no arranca. Aquí ocurre algo parecido. Improbability es la unidad con la que se mueve y se respalda el registro compartido. Quien escribe en él y quien lo mantiene lo hacen con la misma unidad. La fracción más pequeña se llama drop —una gota—. Una unidad completa, de forma coloquial, se llama cup —una taza—.

Un registro que muchos guardan a la vez y que cualquiera puede comprobar parece improbable. El nombre y la unidad recuerdan que el protocolo existe para hacerla posible, y que hace falta un combustible concreto para que el mecanismo funcione.

## Canales oficiales {#channels}

Estos son los únicos canales oficiales del proyecto. Si un canal no aparece aquí, no es oficial, aunque use el nombre de 42.

| Canal | Para qué sirve | Dirección |
|---|---|---|
| Chain | El proyecto, la Bitácora y las preguntas frecuentes | 42chain.org |
| Protocol | Documentación, referencia técnica y herramientas | 42protocol.dev |
| X | Anuncios del proyecto | @42protocol |
| Repositorio | Código fuente, preguntas técnicas, reportes de errores y contribuciones | [repositorio] |
| Correo de seguridad | Reportes privados de vulnerabilidades del código | [correo de seguridad] |

Los proveedores de RPC y los exploradores son independientes y tienen sus propios dominios. Sus direcciones están en el [directorio de proveedores](docs:/get-started/connect#providers).

:::note[Antes de confiar en un mensaje]
Ningún canal del proyecto te pedirá tu frase de recuperación ni tus llaves privadas. Verifica cualquier anuncio o enlace en esta lista.
:::
