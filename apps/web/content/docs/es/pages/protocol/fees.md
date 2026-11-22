---
title: "Tarifas y emisión"
summary: "Cada operación en la red tiene un costo pequeño y predecible. De dónde sale, cómo se calcula y en qué se convierte."
icon: fees
menuText: "Gas, drops y cups"
weight: 30
---

## Para qué existen las tarifas {#purpose}

Cada transacción que se envía a la red la procesan todos los nodos. Procesarla consume trabajo real: cálculo, almacenamiento y conexión. La tarifa existe por tres razones:

- **Cubrir el trabajo.** La tarifa compensa a quienes operan la red por el trabajo de procesar cada transacción.
- **Evitar abusos.** Si las transacciones fueran gratuitas, alguien podría saturar la red enviando millones de transacciones inútiles. La tarifa vuelve ese abuso costoso.
- **Ordenar el uso.** Cada transacción paga según el trabajo que exige. Una transacción sencilla paga poco; una transacción compleja paga más.

La tarifa la paga la cuenta que envía la transacción, en la unidad nativa. En una aplicación de infraestructura, la tarifa puede quedar a cargo de la organización y no de quien firma cada registro. [Tarifas a cargo de la organización](/build/applications#fees)

## La unidad nativa {#unit}

Las tarifas se pagan en la unidad propia del protocolo: la **unidad nativa**, que se llama **Improbability** y tiene el símbolo **42**.

Es el recurso técnico con el que funciona el motor, y cumple tres funciones:

- **Pagar el uso de la red.** Las tarifas se cobran en una unidad que la propia red registra y verifica, sin depender de un sistema de pagos externo.
- **Respaldar a los validadores.** Los validadores bloquean unidades como respaldo de su compromiso de seguir las reglas. Como el respaldo vive dentro del protocolo, el protocolo puede retirar una parte automáticamente cuando un validador comete una falta.
- **Medir el poder de voto.** El peso de cada validador en el consenso y en la gobernanza se mide en unidades en staking, con la misma regla para todos.

### Drops y cups {#drops-and-cups}

Una unidad se divide en 18 decimales. La fracción más pequeña, que ya no puede dividirse, se llama **drop**. Una unidad completa equivale a un trillón de drops (10¹⁸).

El drop es también la denominación base de la red: en las transacciones y las interfaces propias de la red, las cantidades se expresan en drops (`drop` en la red principal y `tdrop` en la red de pruebas).

| Medida | Qué es | Equivalencia |
|---|---|---|
| Drop | La fracción más pequeña de la unidad y denominación base de la red (`drop`; `tdrop` en la red de pruebas) | 0,000000000000000001 Improbability (10⁻¹⁸) |
| Cup | Nombre coloquial de una unidad completa | 1 Improbability = 10¹⁸ drops |
| 42 | Símbolo de la unidad | Lo que muestran las billeteras y los exploradores |

Entre quienes desarrollan sobre la red es común decir **una cup** en lugar de «una Improbability», y **drops** para las fracciones. Es un nombre de uso, para hablar de cantidades sin repetir la palabra completa. En el registro, en los contratos y en las billeteras, la unidad sigue siendo Improbability, con símbolo 42.

Los contratos trabajan siempre en drops, como en cualquier red compatible con la EVM: una cup se escribe en un contrato como `1000000000000000000`.

:::widget{name="unit-converter"}
:::

:::aside
[Consenso y staking →](/protocol/consensus)
:::

## Cómo se calcula una tarifa {#fees}

El trabajo que exige una transacción se mide en una unidad llamada **gas**. Cada instrucción que ejecuta la red consume una cantidad fija de gas. Una transferencia simple consume poco gas. Un contrato complejo consume más.

La tarifa se calcula multiplicando dos números:

:::aside
tarifa = gas consumido × precio por unidad de gas
:::

Por ejemplo, si una transferencia consume 21.000 unidades de gas y el precio es de 0,000001 Improbability por unidad de gas (un billón de drops), la tarifa es 21.000 × 0,000001 = 0,021 Improbability.

El precio por unidad de gas tiene dos partes:

- **Una tarifa base.** El protocolo la ajusta en cada bloque según la demanda: sube cuando los bloques se llenan y baja cuando hay capacidad libre. Nunca baja de un mínimo, que es un parámetro de la red. Es el mecanismo que introdujo Ethereum con el EIP-1559.
- **Una propina opcional.** Quien envía la transacción puede añadirla para darle prioridad cuando la red está ocupada.

Así, el costo de una transacción es predecible: la billetera conoce la tarifa base del bloque y la muestra antes de firmar.

:::widget{name="fee-calc"}
:::

### El límite de gas

Al enviar una transacción, quien la envía fija también un **límite de gas**: la cantidad máxima de gas que está dispuesto a gastar. El límite protege a quien envía. Si un contrato tiene un error y entra en un ciclo sin fin, la transacción se detiene al llegar al límite, en lugar de consumir unidades sin control.

Antes de firmar, la billetera estima el gas que la transacción va a consumir, propone un límite y muestra la tarifa. Así, quien envía la transacción conoce el costo antes de enviarla.

:::aside
Las cifras del ejemplo son ilustrativas.
:::

:::lore[Bitácora del motor]
El motor no funciona con vapor ni con electricidad: funciona con improbabilidad. Que muchas computadoras que no se conocen acuerden exactamente lo mismo, bloque tras bloque, no debería ser posible. El motor lo consigue, y cada maniobra consume un poco de combustible.

En la novela de Douglas Adams, el motor de improbabilidad infinita se pone en marcha con una buena taza de té caliente. De ahí viene el nombre de la unidad completa: una cup es la taza que mueve el motor. Cada cup se divide en drops, la cantidad más pequeña que existe, como un átomo.

El gas no es el combustible. Es el medidor que dice cuántos drops pide cada maniobra.
:::

## Emisión {#issuance}

Además de cobrar tarifas, el protocolo crea unidades nuevas con cada bloque. A la creación de unidades nuevas se le llama **emisión**.

La emisión sostiene la operación de la red. Las tarifas dependen de cuánto se use la red, y ese uso cambia con el tiempo. La emisión, en cambio, no depende del uso. Con ella, la operación de los validadores se sostiene de forma continua, aunque el uso de la red varíe.

La emisión se mueve **dentro de un rango** fijado en los parámetros del protocolo. La tasa anual se ajusta poco a poco según la proporción de unidades que está en staking: sube cuando hay pocas unidades respaldando la red y baja cuando hay muchas, buscando una proporción objetivo. Así, la emisión anima a respaldar la red cuando más falta hace.

El rango y la proporción objetivo solo cambian si se aprueba una propuesta de gobernanza. Como la emisión no se detiene, el número total de unidades crece con el tiempo. En la red principal, la tasa anual va del 0,1 % al 0,5 %, con un objetivo del 67 % de las unidades en staking.

## Distribución {#distribution}

Las unidades nuevas y las tarifas de cada bloque se reparten de forma automática. A ese reparto se le llama **distribución**. La distribución tiene tres destinos:

- **Fondo comunitario.** Una proporción fija va al fondo comunitario, que se describe en la sección siguiente.
- **Validadores.** El resto se reparte entre los validadores, según las unidades que cada uno tiene en staking, propias y delegadas.
- **Delegaciones.** La parte de cada validador que corresponde a unidades delegadas se asigna a las cuentas que las delegaron, después de la comisión del validador.

La proporción que va al fondo comunitario es un parámetro de la red. En la red principal, es el 2 %.

:::diagram[De dónde salen las unidades de cada bloque y a dónde van.]{name="distribucion"}
:::

:::aside
[Delegación y comisión →](/protocol/consensus#delegation)
:::

## El fondo comunitario {#community-fund}

El **fondo comunitario** es una reserva de unidades que pertenece a la red. Nadie lo controla por su cuenta: para usar unidades del fondo, alguien presenta una propuesta y los participantes la votan.

El fondo sirve para financiar lo que la red necesita y que nadie más financiaría. Por ejemplo, una auditoría de seguridad, una herramienta pública o la traducción de la documentación.

:::aside
[Gobernanza →](/protocol/governance)
:::

## Suministro inicial {#initial-supply}

El primer bloque de la red se llama **bloque génesis**. En el bloque génesis se define una cantidad inicial de unidades, a la que se le llama **suministro inicial**, y cómo se asigna.

El suministro inicial no forma parte de la emisión ni de la distribución que se describen arriba. Su cantidad y su asignación son datos de la red, no reglas del protocolo.

## Por qué el protocolo lo hace así {#why}

- **Una unidad propia.** El respaldo del staking tiene que poder retirarse automáticamente cuando alguien rompe las reglas. Eso solo es posible con una unidad que vive dentro del protocolo.
- **Tarifas medidas en gas.** Cada transacción paga según el trabajo que exige, y el costo se conoce antes de enviarla.
- **Emisión dentro de un rango.** La operación de la red no depende de cuánto se use en cada momento, y la tasa favorece que haya suficientes unidades respaldando la red.
- **Tarifa base ajustable.** El costo sigue la demanda real de la red y se conoce antes de firmar.
- **Un fondo que se asigna por gobernanza.** Lo que la red necesita se financia con reglas públicas, sin depender de ninguna parte en particular.

:::aside
[Tarifas a cargo de la organización →](/build/applications#fees) · [Avisos legales](/legal#risks)
:::
