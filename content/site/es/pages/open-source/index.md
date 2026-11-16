---
title: "Sobre 42 Chain"
summary: "42 Chain es una red pública, su protocolo es código abierto y su nombre viene de una novela. Cómo encaja todo eso y qué principios lo guían."
section:
  label: Código abierto
  weight: 5
  accent: "#C4A7FF"
  ink: "#6B4BC8"
---

## Qué es 42 Chain {#what-is}

42 Chain es una red pública de infraestructura que ejecuta el Protocolo 42. El protocolo permite que varias personas mantengan un mismo registro y apliquen las mismas reglas, y que cualquiera compruebe el resultado.

El software del protocolo es de código abierto, bajo la licencia Apache 2.0, y está construido con tecnología abierta del ecosistema Cosmos. Los contratos se ejecutan en la máquina virtual de Ethereum (EVM). El código es público: cualquiera puede revisarlo, proponer cambios o contribuir.

Este sitio y la documentación son mantenidos por contribuidores del Protocolo 42.

## Cómo se organiza {#circles}

Cada función tiene su propio lugar, y cada una se puede comprobar en una fuente pública:

- **El software del protocolo.** Lo escriben y lo revisan contribuidores, en un repositorio público. Cualquiera puede proponer cambios. [Contribuir](/open-source/contributing)
- **La operación de la red.** La hacen los validadores y los nodos, que operan personas distintas. El protocolo compensa el trabajo de los validadores.
- **El acceso a la red.** Los nodos RPC y los exploradores los ofrecen proveedores independientes, cada uno con su propio dominio. Cualquiera puede ofrecer el suyo. [Proveedores](docs:/get-started/connect#providers)
- **Las decisiones sobre la red.** Se toman mediante gobernanza en la cadena: votan los validadores y quienes les delegan unidades. [Gobernanza](docs:/protocol/governance)
- **Las aplicaciones.** Las construyen personas y equipos independientes, y cada quien responde por la suya.
- **La documentación y este sitio.** Los escriben y los revisan contribuidores.

:::aside
[Dónde comprobar cada parte →](/open-source/verify)
:::

## Por qué 42 {#why-42}

El nombre viene de *The Hitchhiker’s Guide to the Galaxy*, la novela de Douglas Adams. En la historia, una supercomputadora calcula durante millones de años la respuesta a la gran pregunta sobre la vida, el universo y todo lo demás. La respuesta es 42. Exacta, y sin que nadie sepa del todo qué significaba la pregunta.

El protocolo se piensa de la misma forma. Ofrece reglas precisas y resultados que cualquiera puede comprobar. No decide qué se construye sobre él. Eso lo ponen quienes lo usan.

En la misma novela aparece el motor de improbabilidad infinita. No sigue las rutas normales: por un instante hace posible lo que parecía imposible. De ese motor toman nombre el protocolo (*Infinite Improbability Drive*) y su unidad nativa, Improbability, cuyo símbolo es 42.

En la historia, el motor se pone en marcha con una taza de té bien preparada. No es un detalle decorativo. El té es el combustible preciso, medido y listo. Sin él, el motor no arranca. Aquí ocurre algo parecido. Improbability es la unidad con la que se mueve y se respalda el registro compartido. Quien escribe en él y quien lo mantiene lo hacen con la misma unidad. La fracción más pequeña se llama drop —una gota—. Una unidad completa, de forma coloquial, se llama cup —una taza—.

Una infraestructura que no pertenece a nadie y que varias personas pueden comprobar parece improbable. El nombre y la unidad recuerdan que el protocolo existe para hacerla posible, y que hace falta un combustible concreto para que el mecanismo funcione.

## Principios {#principles}

Estos son los criterios que guían el desarrollo del protocolo. Cómo funciona el registro compartido está en [el protocolo](/protocol).

### I. Apertura

Cualquiera puede usar la red, construir sobre ella, operar un nodo y revisar el código. El código es abierto y los datos del registro son públicos.

### II. Neutralidad

La red trata todas las transacciones por igual. Ninguna aplicación y ningún participante tienen privilegios.

### III. Verificación

Lo que el protocolo hace y lo que el sitio afirma debe poder comprobarse en una fuente pública: el código, el registro o la documentación.

### IV. Interoperabilidad

El protocolo usa estándares abiertos y se comunica directamente con otras redes, en lugar de encerrarse en un ecosistema propio.

### V. Gobierno transparente

Las reglas de la red solo cambian mediante propuestas públicas y votos que quedan registrados en la cadena.

## Desarrollo continuo {#ongoing}

El protocolo no tiene una hoja de ruta con fecha de término. Como toda infraestructura, se mantiene y se mejora mientras está en uso.

El trabajo consiste en mantener la red estable, corregir lo que haga falta e incorporar las mejoras que aparecen en la tecnología sobre la que está construido, en los estándares y en las herramientas.

Cada cambio sigue el mismo camino. Primero se propone en el repositorio público, después se prueba en la red de pruebas y solo llega a la red principal si se aprueba por gobernanza. Por eso no se publican fechas de entrega: qué cambia y cuándo se decide en la cadena.

:::aside
[Historial de versiones y actualizaciones · Referencia técnica ↗](/docs)
:::
