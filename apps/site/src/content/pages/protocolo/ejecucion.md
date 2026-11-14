---
title: "Ejecución"
summary: "Lo que pasa entre el momento en que alguien firma una operación y el momento en que el registro cambia, igual en todos los nodos."
weight: 10
---

## Del bloque al registro {#estado}

Cada vez que alguien registra un dato, aprueba un cambio o mueve unidades, la red tiene que aplicar esa operación exactamente igual en miles de computadoras. De eso se encarga la **ejecución**: toma las transacciones de cada bloque y calcula cómo queda el registro después de aplicarlas.

Para eso, cada nodo lleva una fotografía del momento actual: cuántas unidades tiene cada cuenta, qué contratos existen y qué datos guarda cada uno. A esa fotografía se le llama **estado**. Cada bloque parte del estado anterior, aplica sus transacciones en orden y produce uno nuevo. Como todos los nodos aplican las mismas transacciones, en el mismo orden y con las mismas reglas, todos llegan al mismo resultado.

El consenso decide qué transacciones entran en cada bloque y en qué orden; la ejecución decide qué efecto tiene cada una.

:::aside
[Consenso y staking →](/protocolo/consenso)
:::

## Cuentas {#cuentas}

El estado se organiza en cuentas. Hay dos tipos de cuenta:

- **Cuentas de usuario.** Pertenecen a una persona, un sistema o un dispositivo, que las controla con su llave privada. Guardan un saldo de unidades y un contador de las transacciones que la cuenta ha enviado. El contador impide que alguien envíe dos veces la misma transacción firmada.
- **Cuentas de contrato.** Pertenecen a un contrato inteligente. No tienen llave privada: las controla el código del contrato. Además del saldo, guardan el código del contrato y sus datos.

### Direcciones

Cada cuenta se identifica con una **dirección**. En el protocolo, una misma cuenta puede escribirse en dos formatos. El primero empieza con 0x y es el que usan las herramientas de la EVM. El segundo es un formato propio de la red, que usan las herramientas de transferencia entre redes.

Los dos formatos corresponden a la misma cuenta y al mismo saldo. Una billetera puede mostrar cualquiera de los dos.

:::aside
[Cuentas y direcciones ↗](/docs)
:::

## El recorrido de una transacción {#transacciones}

Todo cambio en el estado empieza con una **transacción** firmada. La transacción indica qué cuenta la envía, qué quiere hacer y cuánto está dispuesta a pagar de tarifa. Lo que quiere hacer puede ser transferir unidades, publicar un contrato o usar una función de un contrato.

Desde que se firma hasta que tiene efecto, una transacción pasa por cinco etapas:

- **1. Firma.** La persona revisa la transacción en su billetera y la firma con su llave privada.
- **2. Envío.** La billetera envía la transacción a un nodo. Ese nodo comprueba la firma y comparte la transacción con el resto de la red.
- **3. Espera.** La transacción queda en una lista de transacciones pendientes. Los validadores toman transacciones de esa lista para armar el siguiente bloque.
- **4. Inclusión.** Un validador incluye la transacción en el bloque que propone. Cuando el bloque se confirma, todos los nodos ejecutan la transacción.
- **5. Resultado.** La transacción tiene éxito o falla. Si tiene éxito, el estado cambia. Si falla, por ejemplo porque un contrato rechaza la llamada, el estado queda como estaba; aun así, la transacción paga la tarifa del trabajo que se hizo.

:::diagram[Las cinco etapas de una transacción, de la firma al resultado.]{name="transaccion"}
:::

Una transacción incluida en un bloque confirmado es definitiva: su resultado no puede revertirse.

## Contratos inteligentes {#contratos}

Un **contrato inteligente** es un programa que vive en la red. Sus reglas están escritas en código, cualquiera puede leerlas y nadie puede cambiarlas una vez publicado.

### Publicar un contrato

Para publicar un contrato, alguien envía una transacción que contiene el código del contrato. El protocolo crea una cuenta de contrato nueva y guarda ahí el código. Desde ese momento, el código no puede modificarse.

Si un contrato tiene un error, el error queda publicado con él. Por eso los contratos importantes se revisan y se auditan antes de publicarse.

### Usar un contrato

Para usar un contrato, se envía una transacción que llama a una de sus funciones. Todos los nodos ejecutan esa función con los mismos datos y llegan al mismo resultado.

Un contrato también puede llamar a funciones de otros contratos. Así, aplicaciones distintas pueden combinarse: un contrato de trazabilidad puede usar un contrato de registro de certificados, por ejemplo, sin pedir permiso a sus autores.

### Leer y escribir

Leer los datos de un contrato no cambia el estado. Por eso no requiere una transacción ni paga tarifa: cualquier nodo responde la consulta al momento.

Escribir sí cambia el estado. Toda escritura es una transacción firmada, que paga su tarifa y pasa por las cinco etapas descritas antes.

## La máquina virtual y la EVM {#evm}

Para que todos los nodos lleguen al mismo resultado, el código de un contrato no se ejecuta directamente en cada computadora. Se ejecuta dentro de una **máquina virtual**: un entorno que funciona igual en cualquier nodo, con un conjunto fijo de instrucciones.

La máquina virtual del protocolo sigue la especificación **EVM**. La EVM define qué instrucciones existen, cuánto gas consume cada instrucción y cómo se guardan los datos de los contratos.

Los contratos para la EVM se escriben normalmente en **Solidity**, un lenguaje de programación pensado para contratos. Antes de publicarse, el código en Solidity se traduce a las instrucciones de la máquina virtual.

Como la EVM es un estándar compartido, un contrato escrito para la EVM puede publicarse en la red sin cambios en su código. Lo mismo ocurre con las herramientas: las librerías, los entornos de prueba y las billeteras de ese estándar funcionan con la red.

:::aside
[Qué es el gas y cómo se calcula una tarifa →](/protocolo/tarifas#tarifas)
:::

## Funciones propias de la red {#nativas}

Además de la EVM, el protocolo tiene funciones propias: el staking, la gobernanza y la transferencia de unidades entre redes, entre otras. Estas funciones no son contratos que alguien publicó. Forman parte del protocolo.

Los contratos pueden usar estas funciones directamente, como si llamaran a otro contrato. Cada función propia tiene una dirección fija y conocida. Por ejemplo, un contrato puede delegar unidades en un validador, votar una propuesta o enviar unidades a otra red, sin depender de un servicio externo.

:::aside
[Funciones propias de la red y sus direcciones ↗](/docs)
:::

## Por qué el protocolo lo hace así {#porque}

- **Ejecución determinista.** Las mismas transacciones, en el mismo orden, producen el mismo estado en cada nodo. Eso es lo que permite que cualquiera compruebe el estado de la red por su cuenta.
- **Compatibilidad con la EVM, en lugar de una máquina virtual propia.** Quien construye aprovecha lenguajes, herramientas, auditores y conocimiento que ya existen. El protocolo no obliga a aprender un entorno nuevo para empezar.
- **Funciones propias accesibles desde los contratos.** El staking, la gobernanza y la interoperabilidad están dentro del protocolo, no en contratos de terceros. Una aplicación las usa con las mismas reglas que la propia red.
