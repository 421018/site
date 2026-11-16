---
title: "Protocolo 42"
summary: "Para qué existe, qué lo hace fuerte y qué ventaja da cuando varias organizaciones necesitan el mismo registro."
menuTitle: "Visión general"
section:
  label: Protocolo
  weight: 1
  accent: "#5BF0C8"
  ink: "#0A7A5E"
---

## Para qué existe {#protocol}

Cuando varias organizaciones necesitan los mismos datos y las mismas reglas, lo habitual es que una de ellas guarde el registro. Las demás tienen que confiar en que lo conserve, en que no lo cambie y en que siga disponible.

El Protocolo 42 existe para que no tengan que hacerlo. Muchas computadoras llevan, entre todas, un mismo registro. Ninguna manda sobre las demás, y cualquiera puede comprobar que el registro está intacto.

Ese es el objetivo: un registro compartido que no pertenece a quien lo opera.

:::diagram[El mismo problema, de dos formas: un registro en manos de una organización y un registro que todas pueden comprobar.]{name="patron-comun"}
:::

A cada computadora que ejecuta el protocolo se le llama **nodo**. Al conjunto de los nodos se le llama **red**. La red es pública: participar no exige permiso. En el uso corriente se le llama Protocolo 42. Su nombre formal, Infinite Improbability Drive, nombra el motor completo. [Por qué 42](/open-source#why-42)

## Qué ventaja da {#ledger}

En la práctica, el protocolo ofrece cuatro cosas que un registro en manos de una sola organización no puede prometer:

- **Una sola versión.** Todas las copias coinciden. No hay registros que conciliar.
- **Una alteración se nota.** Cada bloque guarda la huella del anterior. Si alguien cambia un dato viejo, la cadena deja de coincidir.
- **Las mismas reglas para todos.** Están escritas donde cualquiera puede leerlas, y todos los nodos las aplican igual.
- **Una comprobación directa.** Un tercero verifica un dato sin tener que pedírselo a quien lo registró.

Un dato incluido en un bloque confirmado es definitivo. No hace falta esperar a que se vuelva más seguro con el tiempo. Y quien construye no empieza de cero: los contratos usan la máquina virtual de Ethereum y las herramientas que ya existen para ella.

:::widget{name="hash-chain"}
:::

Para qué se usa todo esto, con ejemplos, está en [Casos de uso](/use-cases).

## Cómo está hecho {#engine}

El motor tiene cinco piezas. Ninguna basta por sí sola. Juntas producen el registro, y cada una responde a una debilidad distinta.

:::diagram[Las cinco piezas del motor.]{name="motor"}
:::

### Acuerdan sin que nadie mande {#validation}

Los validadores proponen bloques y los firman. Cuando las firmas suman más de dos tercios del poder de voto, el bloque queda confirmado. Ese poder no sale de crear computadoras: sale de las unidades que cada quien pone en juego. Si esa mayoría no se reúne, la red se detiene.

La fortaleza es esta: confirmar un dato falso obliga a controlar, y a arriesgar, más de un tercio de todo lo que respalda la red. Y un bloque ya confirmado no se deshace.

### El mismo resultado en todos {#contracts}

Los contratos son programas publicados en el registro. Todos los nodos los ejecutan y todos llegan al mismo resultado. Una vez publicados, nadie los cambia en silencio. Como la máquina virtual es la de Ethereum, un contrato escrito para ella funciona aquí sin reescribirse.

La ventaja práctica: las reglas de un acuerdo se pueden leer, y se cumplen solas, sin un administrador que las interprete.

### El costo se conoce antes {#unit}

Cada operación paga una tarifa proporcional al trabajo que exige, en la unidad de la propia red. Quien envía la operación ve el costo antes de firmar. La misma unidad es la que los validadores ponen en juego: lo que paga el uso es también lo que protege el acuerdo.

### Se comprueban, no se creen {#ibc}

Un dato a veces tiene que cruzar de una red a otra. El protocolo no le pide a un intermediario que cuente lo que vio. Cada red comprueba la prueba por sí misma. Nadie custodia las unidades durante el traslado.

### Quien arriesga, decide {#rules}

Las reglas tienen que poder cambiar: corregir un error, ajustar un parámetro. Si eso lo decidiera una sola parte, todas las demás dependerían de ella. Aquí el cambio se propone y se vota en el propio registro. El voto pesa por las unidades en juego, las mismas que respaldan el consenso. Si se aprueba, la red lo aplica.

## Una operación, de punta a punta {#accounts}

Alguien revisa la operación en su billetera y la firma con su llave. Un nodo comprueba la firma y la comparte. Los validadores la incluyen en un bloque. Cuando el bloque se confirma, el resultado es definitivo, y cualquiera puede comprobarlo.

:::diagram[De la firma al resultado. A partir de la confirmación, la operación no se deshace.]{name="transaccion"}
:::

La llave no la guarda la red. Quien la pierde, pierde el acceso a su cuenta. No hay una persona que pueda devolverla.

## Qué no hace {#security}

La fortaleza del protocolo tiene un borde, y conviene verlo junto con ella:

- **No recupera una llave.** Quien tiene la llave dispone de la cuenta. El protocolo no distingue a una persona de quien tenga su llave.
- **No juzga un contrato.** Ejecuta lo que el código dice. Un contrato de un tercero puede tener errores o estar hecho para engañar.
- **No adivina.** Si falta la mayoría, se detiene. Prefiere no confirmar a confirmar sin el acuerdo necesario.

:::facts
- **1 bloque** para que un dato sea definitivo
- **> 2/3** del voto para confirmar
- **< 1/3** de fallas que la red tolera
:::

## Por qué es fuerte {#decisions}

Siete decisiones sostienen lo anterior:

- **El voto depende de lo que se pone en juego.** Crear nodos no da poder. [Consenso](docs:/protocol/consensus#why)
- **Detenerse antes que arriesgar.** Sin la mayoría, no hay bloque. [Consenso](docs:/protocol/consensus#failures)
- **Herramientas que ya existen.** La ejecución es compatible con la máquina virtual de Ethereum. [Ejecución](docs:/protocol/execution#why)
- **Una unidad propia, con una emisión acotada.** La protección de la red no depende de un sistema externo ni de cuánto se use en un momento. [Tarifas](docs:/protocol/fees#why)
- **Verificación en lugar de intermediarios.** Las redes se comprueban entre sí. [Interoperabilidad](docs:/protocol/interoperability#why)
- **Las reglas se deciden en el registro.** Quien escribe el código propone. Quien respalda la red decide. [Gobernanza](docs:/protocol/governance#why)
- **Varias capas, todas a la vista.** Si una falla, las otras siguen. Cualquiera puede revisarlas. [Seguridad](docs:/protocol/security#why)

## Ficha {#summary}

|  |  |
|---|---|
| Protocolo | Protocolo 42 (*Infinite Improbability Drive*) · código abierto · Apache 2.0 |
| Base tecnológica | Cosmos SDK · CometBFT · IBC |
| Red | Pública, sin permisos |
| Consenso | Prueba de participación delegada |
| Finalidad | Inmediata, en un bloque |
| Tolerancia a fallas | Menos de un tercio del poder de voto |
| Ejecución | Máquina virtual de Ethereum (EVM) |
| Interoperabilidad | IBC (versiones 1 y 2) |
| Unidad nativa | Improbability (42) |
| Gobernanza | En la cadena, con voto ponderado por staking |

:::aside
[Cómo funciona cada pieza →](docs:/protocol) · [Casos de uso →](/use-cases)
:::
