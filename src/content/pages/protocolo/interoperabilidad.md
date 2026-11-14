---
title: "Interoperabilidad"
summary: "Cómo la red comprueba lo que ocurrió en otras redes sin depender de intermediarios, qué es IBC y qué capacidades ofrece entre redes."
weight: 40
---

## Por qué conectar redes {#porque-conectar}

Cada red lleva su propio registro, con sus propias cuentas y sus propias reglas. Una red, por sí sola, no puede ver lo que ocurre en otra.

Sin embargo, a menudo hace falta que las redes se comuniquen. Una organización puede necesitar que un dato registrado en un entorno interno sea verificable en 42 Chain. Una aplicación puede necesitar reaccionar a algo que ocurrió en otra red, o recibir unidades desde ella. A la capacidad de las redes para comunicarse entre sí se le llama **interoperabilidad**.

## El problema del intermediario {#intermediario}

La forma más simple de conectar dos redes es usar un intermediario: un servicio que observa una red y escribe en la otra lo que, según él, ocurrió.

El problema es que la red de destino tiene que creerle. Si el intermediario falla, comete un error o alguien toma el control de sus llaves, la red de destino acepta algo que no ocurrió. Y si además custodia unidades durante el traslado, esas unidades pueden perderse.

Por eso el protocolo no se conecta con otras redes a través de intermediarios de confianza. Usa un estándar en el que cada red comprueba por sí misma lo que ocurrió en la otra.

## Qué es IBC {#ibc}

El estándar que usa el protocolo se llama **IBC** (Inter-Blockchain Communication). Es un estándar abierto: cualquier red que lo implemente puede conectarse con cualquier otra que también lo implemente.

La idea central de IBC es que cada red puede comprobar por sí misma lo que ocurrió en la otra. Para eso, cada red ejecuta un **cliente ligero** de la otra.

### El cliente ligero

Un cliente ligero es un programa pequeño que sigue a otra red sin guardar todo su registro. Solo guarda lo necesario para verificarla: los encabezados de sus bloques y las firmas de sus validadores.

Con esa información, el cliente ligero puede comprobar una **prueba**: un dato criptográfico que demuestra que algo quedó registrado en la otra red. Si la prueba es válida, la red acepta lo ocurrido. Si no lo es, lo rechaza.

### Los retransmisores

Las redes no se hablan directamente. Los mensajes entre ellas los transportan los **retransmisores**: programas que leen los mensajes de una red y los entregan en la otra, junto con su prueba.

Cualquiera puede operar un retransmisor. Un retransmisor no puede alterar un mensaje, porque la red de destino comprueba la prueba antes de aceptarlo. Lo único que puede hacer un retransmisor es entregar el mensaje, o no entregarlo.

## Cómo viaja una transferencia {#transferencia}

La transferencia de unidades es la aplicación más usada de IBC, y muestra bien el recorrido completo. Supongamos que una cuenta envía 10 unidades de Improbability desde 42 Chain hasta otra red, a la que llamaremos red B.

- **1. Bloqueo.** La cuenta envía una transacción en 42 Chain. El protocolo bloquea sus 10 unidades en una cuenta especial de la propia red, donde quedan guardadas. Las unidades no salen de 42 Chain.
- **2. Traslado.** Un retransmisor toma el mensaje de la transferencia y lo entrega en la red B, junto con la prueba de que las 10 unidades quedaron bloqueadas.
- **3. Verificación.** La red B comprueba la prueba con su cliente ligero de 42 Chain.
- **4. Representación.** Si la prueba es válida, la red B crea 10 unidades que representan a las bloqueadas y las entrega a la cuenta de destino.
- **5. Confirmación.** Un retransmisor lleva de vuelta a 42 Chain la confirmación de que la entrega se completó.

Si la entrega no ocurre dentro de un plazo, la transferencia vence y las 10 unidades se desbloquean en la cuenta de origen. En ese proceso, las unidades no pasan a manos de un tercero.

El regreso funciona al revés. La red B destruye las 10 unidades que las representaban, y 42 Chain, tras verificar la prueba, desbloquea las originales.

:::aside
Las cifras del ejemplo son ilustrativas.
:::

## Unidades que llegan de otras redes {#representacion}

Cuando llegan a la red unidades de otra cadena, el protocolo crea una representación de esas unidades. Cada representación lleva registrada su ruta: de qué red viene y por qué conexión llegó. Así, dos unidades con el mismo nombre que llegaron por caminos distintos no se confunden.

Las representaciones pueden usarse como cualquier otra unidad: transferirse entre cuentas, usarse en contratos o enviarse de regreso a su red de origen.

## Más que transferencias {#mensajes}

IBC no solo sirve para mover unidades. Desde un contrato, el protocolo ofrece tres capacidades entre redes:

- **Transferencias con instrucciones.** Una transferencia puede llevar instrucciones para la red de destino. Al llegar, la red de destino ejecuta un contrato con esas instrucciones, en la misma operación. A la red de origen le llega un aviso cuando la transferencia se completa o vence, y el contrato que la envió puede actuar en consecuencia. A estos avisos se les llama **callbacks**.
- **Comprobar el estado de otra red.** Un contrato puede preguntar al cliente ligero de otra red si un dato forma parte de su registro, presentando una prueba. Si la prueba es válida, el contrato sabe que ese dato existe en la otra red, sin depender de quien se la entregó.
- **Transferencias con IBC v2.** El protocolo admite también la versión 2 de IBC, que simplifica la conexión entre redes.

El conjunto de estándares IBC incluye además aplicaciones para ejecutar llamadas entre contratos de redes distintas y para operar cuentas en otra red. Forman parte del mismo software abierto, y una red puede activarlas mediante una actualización aprobada por gobernanza.

Desde un contrato, estas capacidades se usan a través de funciones propias del protocolo.

:::aside
[Funciones propias de la red →](/protocolo/ejecucion#nativas)
:::

## Límites y riesgos {#limites}

IBC elimina la dependencia de intermediarios, pero no elimina todos los riesgos. Toda conexión entre redes tiene tres límites:

- **La seguridad de la otra red.** Una conexión es tan segura como las dos redes que conecta. Si la otra red falla o sus validadores actúan mal, las unidades que llegaron desde ella pueden verse afectadas.
- **La entrega depende de los retransmisores.** Un retransmisor no puede alterar un mensaje, pero puede no entregarlo. En ese caso, la transferencia vence y las unidades vuelven a su origen.
- **Las representaciones no son las originales.** Una unidad que llegó de otra red depende de la seguridad de su red de origen. Su ruta indica de dónde viene.

:::aside
[Transferencias entre redes · Guía y referencia ↗](/docs)
:::

## Por qué el protocolo lo hace así {#porque}

- **Verificación en lugar de confianza.** Cada red comprueba por sí misma lo que ocurrió en la otra. Ningún intermediario custodia unidades durante el traslado.
- **Un estándar abierto en lugar de uno propio.** IBC lo usan muchas redes. Conectarse a ellas no requiere acuerdos especiales ni desarrollos a medida.
- **Retransmisores sin permiso.** Cualquiera puede transportar mensajes, y ninguno puede alterarlos. Así, la comunicación entre redes no depende de un operador en particular.
