---
title: "Tarifas y emisión"
summary: "Qué es la unidad nativa, por qué cada transacción paga una tarifa, cómo se crean unidades nuevas y cómo se reparten."
weight: 30
---

## La unidad nativa {#unidad}

El protocolo tiene una unidad propia. A esa unidad se le llama **unidad nativa**. La unidad nativa del protocolo se llama **Improbability**, y su símbolo es **42**.

La unidad nativa tiene dos usos. El primero es pagar las tarifas de las transacciones. El segundo es servir de respaldo en el staking: los validadores bloquean unidades para respaldar su compromiso de seguir las reglas.

### Por qué una cadena de bloques necesita una unidad propia

Una cadena de bloques sin dueño necesita una unidad que viva dentro de sus propias reglas. Esa unidad cumple varias funciones que ninguna otra pieza puede cumplir:

- **Pagar el uso de la red.** Las tarifas se cobran en una unidad que la propia red registra y verifica. La red no depende de una moneda externa ni de un intermediario que procese los pagos.
- **Proteger la red.** El respaldo del staking se bloquea en la unidad nativa. Como el respaldo vive dentro del protocolo, el protocolo puede retirarla automáticamente cuando un validador rompe las reglas.
- **Medir la participación.** El poder de voto en el consenso y en la DAO se mide en unidades en staking. Una medida común permite comparar la participación de cada quien con reglas iguales para todos.
- **Compensar a quienes operan la red.** Como la unidad es propia, el protocolo puede crear unidades nuevas con cada bloque y asignarlas a quienes protegen la red, sin depender de que alguien externo los financie.
- **Alinear intereses.** Quien tiene unidades en staking tiene interés en que la red funcione bien, porque su respaldo y su compensación dependen de ella.
- **Funcionar sin depender de nadie.** Con una unidad propia, la red puede operar, protegerse y decidir sin necesitar la autorización de ninguna entidad externa.

:::aside
[Consenso y staking →](/protocolo/consenso)
:::

## Para qué existen las tarifas {#para-que}

Cada transacción que se envía a la red la procesan todos los nodos. Procesarla consume trabajo real: cálculo, almacenamiento y conexión. La tarifa existe por tres razones:

- **Cubrir el trabajo.** La tarifa compensa a quienes operan la red por el trabajo de procesar cada transacción.
- **Evitar abusos.** Si las transacciones fueran gratuitas, alguien podría saturar la red enviando millones de transacciones inútiles. La tarifa vuelve ese abuso costoso.
- **Ordenar el uso.** Cada transacción paga según el trabajo que exige. Una transacción sencilla paga poco; una transacción compleja paga más.

La tarifa la paga la cuenta que envía la transacción, en la unidad nativa.

## Cómo se calcula una tarifa {#tarifas}

El trabajo que exige una transacción se mide en una unidad llamada **gas**. Cada instrucción que ejecuta la red consume una cantidad fija de gas. Una transferencia simple consume poco gas. Un contrato complejo consume más.

La tarifa se calcula multiplicando dos números:

:::aside
tarifa = gas consumido × precio por unidad de gas
:::

Por ejemplo, si una transferencia consume 21.000 unidades de gas y el precio es de 0,000001 Improbability por unidad de gas, la tarifa es 21.000 × 0,000001 = 0,021 Improbability.

El precio por unidad de gas tiene un mínimo que fija el protocolo. [Cómo se determina el precio del gas.]

### El límite de gas

Al enviar una transacción, quien la envía fija también un **límite de gas**: la cantidad máxima de gas que está dispuesto a gastar. El límite protege a quien envía. Si un contrato tiene un error y entra en un ciclo sin fin, la transacción se detiene al llegar al límite, en lugar de consumir unidades sin control.

Antes de firmar, la billetera estima el gas que la transacción va a consumir, propone un límite y muestra la tarifa. Así, quien envía la transacción conoce el costo antes de enviarla.

:::aside
Las cifras del ejemplo son ilustrativas.
:::

## Emisión {#emision}

Además de cobrar tarifas, el protocolo crea unidades nuevas con cada bloque. A la creación de unidades nuevas se le llama **emisión**.

La emisión existe para compensar a quienes protegen la red. Las tarifas dependen de cuánto se use la red, y ese uso cambia con el tiempo. La emisión, en cambio, es estable. Con ella, operar un validador se sostiene de forma continua, aunque el uso de la red varíe.

La emisión es **constante**: el protocolo crea unidades nuevas a un ritmo fijo, definido en sus parámetros. Ese ritmo solo puede cambiarlo la DAO, mediante una propuesta. Como la emisión no se detiene, el número total de unidades crece con el tiempo. [Tasa de emisión.]

## Distribución {#distribucion}

Las unidades nuevas y las tarifas de cada bloque se reparten de forma automática. A ese reparto se le llama **distribución**. La distribución tiene tres destinos:

- **Fondo comunitario.** Una proporción fija va al fondo comunitario, que se describe en la sección siguiente.
- **Validadores.** El resto se reparte entre los validadores, según las unidades que cada uno tiene en staking, propias y delegadas.
- **Delegadores.** La parte de cada validador que corresponde a unidades delegadas se reparte entre las personas que las delegaron, después de que el validador cobra su comisión.

### Un ejemplo

En un bloque, la emisión y las tarifas suman 100 unidades. Supongamos que el 10 % va al fondo comunitario.

- 10 unidades van al fondo comunitario.
- Las 90 restantes se reparten entre los validadores. Un validador que tiene el 20 % de todas las unidades en staking recibe 18.
- De esas 18, la parte que corresponde a sus unidades delegadas se reparte entre sus delegadores, después de su comisión.

La proporción real que va al fondo comunitario es un parámetro del protocolo. [Proporción.]

:::aside
Las cifras del ejemplo son ilustrativas.
:::

:::aside
[Cómo se calcula la comisión →](/protocolo/consenso#delegacion)
:::

## El fondo comunitario {#fondo}

El **fondo comunitario** es una reserva de unidades que pertenece a la red. Nadie lo controla por su cuenta: para usar unidades del fondo, alguien presenta una propuesta y la DAO la vota.

El fondo sirve para financiar lo que la red necesita y que nadie más financiaría. Por ejemplo, una auditoría de seguridad, una herramienta pública o la traducción de la documentación.

:::aside
[Cómo decide la DAO →](/protocolo/gobernanza)
:::

## Suministro inicial {#suministro}

El primer bloque de la red se llama **bloque génesis**. En ese bloque se creó una cantidad inicial de unidades, a la que se le llama **suministro inicial**.

El suministro inicial no forma parte de la emisión ni de la distribución que se describen arriba. Lo administra la DAO, y el protocolo lo libera de forma gradual.

:::aside
[El suministro inicial y la DAO →](/protocolo/gobernanza#suministro)
:::

## Por qué el protocolo lo hace así {#porque}

- **Una unidad propia.** El respaldo del staking tiene que poder retirarse automáticamente cuando alguien rompe las reglas. Eso solo es posible con una unidad que vive dentro del protocolo.
- **Tarifas medidas en gas.** Cada transacción paga según el trabajo que exige, y el costo se conoce antes de enviarla.
- **Emisión constante.** La seguridad de la red no depende de cuánto se use en cada momento. Quienes la protegen reciben una compensación estable.
- **Un fondo que decide la DAO.** Lo que la red necesita se financia con reglas públicas, sin depender de ninguna parte en particular.

:::aside
[Parámetros de tarifas y emisión ↗](/docs) · [Avisos legales](/legal#riesgos)
:::
