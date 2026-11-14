---
title: "Sobre 42 Chain"
summary: "Qué es 42 Chain, cómo se organizan el código, la red y las decisiones, de dónde viene su nombre y los principios que lo guían."
section:
  label: Código abierto
  weight: 4
  accent: "#C4A7FF"
  ink: "#6B4BC8"
---

## Qué es 42 Chain {#que-es}

42 Chain es una red pública de infraestructura que ejecuta el Protocolo 42. El protocolo permite que varias organizaciones mantengan un mismo registro y apliquen las mismas reglas, y que cualquiera compruebe el resultado.

El software del protocolo es de código abierto, bajo la licencia Apache 2.0, y está construido con tecnología abierta del ecosistema Cosmos. Los contratos se ejecutan en la máquina virtual de Ethereum (EVM). El código es público: cualquiera puede revisarlo, proponer cambios o contribuir.

Este sitio y la documentación son mantenidos por contribuidores del Protocolo 42.

## Cómo se organiza {#circulos}

Cada función tiene su propio lugar, y cada una se puede comprobar en una fuente pública:

- **El software del protocolo.** Lo escriben y lo revisan contribuidores, en un repositorio público. Cualquiera puede proponer cambios. [Contribuir](/codigo-abierto/contribuir)
- **La operación de la red.** La hacen los validadores y los nodos, que operan personas y organizaciones distintas. El protocolo compensa el trabajo de los validadores.
- **El acceso a la red.** Los nodos RPC y los exploradores los ofrecen proveedores independientes, cada uno con su propio dominio. Cualquiera puede ofrecer el suyo. [Proveedores](/implementar/conectarse#proveedores)
- **Las decisiones sobre la red.** Se toman mediante gobernanza en la cadena: votan los validadores y quienes les delegan unidades. [Gobernanza](/protocolo/gobernanza)
- **Las aplicaciones.** Las construyen organizaciones y equipos independientes, y cada uno responde por la suya.
- **La documentación y este sitio.** Los escriben y los revisan contribuidores, igual que el software, en un repositorio público.

:::aside
[Dónde comprobar cada parte →](/codigo-abierto/verificar)
:::

## Por qué 42 {#porque42}

El nombre del proyecto y el de su protocolo vienen de *The Hitchhiker’s Guide to the Galaxy* (*Guía del viajero intergaláctico*), la novela de Douglas Adams publicada en 1979.

### La respuesta es 42

En la novela, una civilización construye una supercomputadora para responder la gran pregunta sobre la vida, el universo y todo lo demás. Después de siete millones y medio de años de cálculo, la supercomputadora da su respuesta: 42.

La respuesta es exacta, pero nadie sabe qué significa, porque nadie había entendido bien cuál era la pregunta. La novela lo cuenta como una broma, pero deja una idea seria: una herramienta puede dar respuestas precisas, pero el sentido lo ponen las preguntas de quienes la usan.

El protocolo se piensa de la misma forma. Ofrece reglas precisas y resultados verificables, pero no decide qué se construye sobre él. Eso lo deciden quienes lo usan.

### El motor de improbabilidad infinita

En la misma historia, una nave viaja con un motor de improbabilidad infinita, el *Infinite Improbability Drive*. El motor no sigue las rutas normales: hace posible, por un instante, lo que parecía imposible.

De ese motor vienen dos nombres. El nombre formal del protocolo, **Infinite Improbability Drive**, y el de su unidad nativa, **Improbability**, cuyo símbolo es 42: la improbabilidad es el combustible del motor. Su fracción más pequeña se llama **gota**, y una unidad completa, de manera coloquial, **taza**. [Gotas y tazas](/protocolo/tarifas#medidas) Una infraestructura compartida entre organizaciones que no dependen unas de otras parece improbable. El nombre recuerda que el protocolo existe para hacerla posible.

## Principios {#principios}

Estos son los criterios que guían el desarrollo del protocolo. Las decisiones de diseño concretas están en [Visión general](/protocolo#decisiones).

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

## Desarrollo continuo {#continuo}

El protocolo no tiene una hoja de ruta con fecha de término. Como toda infraestructura, se mantiene y se mejora mientras está en uso.

El trabajo consiste en mantener la red estable, corregir lo que haga falta e incorporar las mejoras que aparecen en la tecnología sobre la que está construido, en los estándares y en las herramientas.

Cada cambio sigue el mismo camino. Primero se propone en el repositorio público, después se prueba en la red de pruebas y solo llega a la red principal si se aprueba por gobernanza. Por eso no se publican fechas de entrega: qué cambia y cuándo se decide en la cadena.

:::aside
[Historial de versiones y actualizaciones · Referencia técnica ↗](/docs)
:::
