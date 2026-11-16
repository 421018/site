---
title: "Protocolo 42"
summary: "Qué problema resuelve el protocolo, cómo está hecho el registro y qué pasa desde que alguien añade algo hasta que queda en todas las copias."
menuTitle: "Cómo funciona"
section:
  label: Protocolo
  weight: 1
  accent: "#5BF0C8"
  ink: "#0A7A5E"
---

## Para qué existe {#protocol}

Hay hechos que varias personas necesitan conocer a la vez, y reglas que tienen que valer igual para todas. Eso tiene que quedar escrito en un solo lugar. A ese lugar se le llama **registro**: la lista de lo que ocurrió y de lo que se aceptó.

Si el registro lo guarda una sola persona, las demás dependen de ella. Dependen de que lo conserve, de que no lo cambie y de que siga disponible. Quien tiene el único libro puede, sin que nadie lo note, reescribir una página.

El Protocolo 42 reparte ese registro entre muchas computadoras. Cada una guarda una copia completa. Ninguna es la dueña de lo que el registro dice. Cualquiera puede leerlo, y cualquiera puede poner una computadora más a guardar su copia. Es infraestructura pública: está ahí para quien quiera usarla y para quien quiera construir encima.

:::diagram[El mismo problema, de dos formas: un registro en manos de una sola persona y un registro que cualquiera puede comprobar.]{name="patron-comun"}
:::

A cada una de esas computadoras se le llama **nodo**. A todas juntas, **red**.

## <span class="piece">La cadena</span>El registro no se corrige: crece {#record}

Este registro no es una hoja que alguien abre y edita. Es una sucesión de páginas. Lo que ya se cerró no se borra ni se reescribe. Si hay algo nuevo que decir, se escribe en una página nueva. El pasado queda, y el presente se le añade.

Cada página guarda la huella de la anterior. La huella es un sello calculado a partir de lo que la página contiene. Si alguien cambia una página vieja, su sello deja de coincidir con el que guardó la página siguiente. La rotura queda a la vista de todas las copias.

:::diagram[Tres páginas del registro. Cada una lleva la huella de la anterior. La última solo se cierra con acuerdo.]{name="paginas"}
:::

A una página ya cerrada se le llama **bloque**. La cadena de bloques es esta sucesión: un bloque detrás de otro, cada uno con la huella del que vino antes.

## Cuando alguien añade algo

Ana hornea pan en su casa. Bruno va a recibirlo. Quiere dejar escrito, en un lugar que no sea solo suyo, que la tanda de las seis salió y que Bruno la recibió. Desde que Ana decide escribir eso hasta que aparece en la copia de Bruno, el camino es siempre el mismo. Da igual si lo que se escribe es una tanda de pan, una reparación o un acuerdo: entra por aquí.

:::diagram[El camino de la tanda de Ana, desde que la prepara hasta que Bruno la ve en su copia.]{name="entrada"}
:::

### <span class="piece">Tarifas</span>El costo se ve antes de firmar {#unit}

Comprobar lo que Ana añade cuesta trabajo, porque todas las copias van a hacerlo. La red cobra por ese trabajo. La cifra es proporcional a lo que la operación pide, y se paga en la unidad de la red.

Ana ve el número antes de firmar. Si no le conviene, no firma. El costo no aparece después.

Esa misma unidad sirve, un paso más adelante, para otra cosa. Quien respalda la red pone unidades en juego. Pagar el uso y responder por la red salen del mismo lugar.

A esta forma de medir y cobrar el trabajo se le llama **tarifas**.

### <span class="piece">Firmas</span>La llave queda fuera de la red {#accounts}

La firma dice que es Ana quien pide que eso se escriba, y no otra persona en su nombre. Se hace con una llave que solo ella tiene. La red no guarda una copia. Si Ana la pierde, no hay nadie a quien pedirle otra: la cuenta es de quien guarda la llave.

Un nodo comprueba que la firma corresponde a su cuenta y comparte la nota con los demás. Ahí queda, a la espera de un bloque.

A esto se le llama **firmar**: demostrar quién pide la escritura, sin entregar la llave.

## <span class="piece">Consenso</span>La red acuerda el bloque, o espera {#validation}

La nota de Ana no entra sola. Unos nodos reúnen lo que está esperando —la tanda de Ana, y lo que otras personas escribieron en el mismo momento— y proponen un bloque. Son los **validadores**. Firman esa propuesta.

El bloque se cierra cuando las firmas suman más de dos tercios del poder de voto. Ese poder no se gana encendiendo más computadoras. Se gana poniendo unidades en juego: si el bloque no es honesto, lo apostado puede perderse. Quien propone responde con algo propio.

Si no se junta esa mayoría, el bloque no existe. La red espera. Cerrar una página que las copias no comparten sería aceptar algo que no es de todos.

:::diagram[Más de dos tercios cierra el bloque. Por debajo de eso, la red espera.]{name="umbral"}
:::

Confirmar un dato falso obligaría a controlar, y a arriesgar, más de un tercio de todo lo que respalda la red.

Cuando el bloque se cierra, lo de Ana ya está. No hace falta que pase el tiempo para poder fiarse. El acuerdo ya ocurrió, y Bruno puede leerlo.

A esta manera de cerrar un bloque entre todos se le llama **consenso**.

## <span class="piece">Ejecución</span>Las copias llegan al mismo resultado {#contracts}

Cerrar el bloque no bastaría si cada nodo pudiera entenderlo a su modo. La copia de Bruno diría una cosa y la de Ana otra. Volvería a haber varios registros, y habría que ponerse de acuerdo otra vez.

Las reglas van escritas en el propio registro. Son **contratos**: programas que todos los nodos ejecutan, en el mismo orden. Por eso llegan al mismo resultado. Publicados, nadie los cambia en silencio. Se pueden leer, y no hay un administrador que decida cómo interpretarlos.

El protocolo ejecuta el código. No opina si el contrato es justo, ni si está bien hecho. Esa responsabilidad es de quien lo escribe.

Quien construye esos programas puede usar la máquina virtual de Ethereum, y las herramientas que ya existen para ella.

:::diagram[El mismo contrato, ejecutado en cada nodo, con el mismo resultado.]{name="mismo-resultado"}
:::

A ejecutar las mismas reglas en todas las copias se le llama **ejecución**.

## <span class="piece">La cadena</span>Un cambio en el pasado se nota {#ledger}

Cada bloque guarda la huella del anterior. Por eso el registro de Ana no se sostiene en su palabra. Si alguien toca un bloque viejo, la cadena deja de coincidir, y cualquier copia lo ve.

Cambia una letra de la tanda de Ana.

:::widget{name="hash-chain"}
:::

Si las huellas siguen coincidiendo, la cadena está entera. Si una deja de coincidir, cualquier nodo lo nota. Bruno no tiene que llamar a Ana para saber si alguien reescribió lo que ya estaba cerrado.

Dónde hace falta un registro así está en [Casos de uso](/use-cases).

## <span class="piece">Interoperabilidad</span>Otra red lo comprueba sola {#ibc}

A veces el dato tiene que salir de esta red. Carmen está en otra, y necesita saber lo mismo: que la tanda salió, o que Bruno la recibió. No hace falta un mensajero que les cuente lo que vio y en quien ambas tengan que confiar. La otra red revisa la prueba por su cuenta.

Si algo tiene que pasar de una red a la otra —un dato, o las unidades con las que se paga el trabajo— nadie lo guarda en el camino. Cada red comprueba a la otra, y el traslado no queda en manos de una persona.

:::diagram[La otra red comprueba la prueba. Nadie custodia lo que cruza.]{name="comprobacion"}
:::

A esto se le llama **interoperabilidad**: dos redes se comunican y se comprueban, sin un intermediario de confianza.

## <span class="piece">Gobernanza</span>Las reglas cambian en público {#rules}

Las reglas de este mecanismo también se corrigen: un error, un número que ya no sirve, una mejora que la red necesita. Si lo decidiera una sola persona, las demás volverían a depender de ella. El registro compartido se habría quedado, al final, en un solo escritorio.

El cambio se escribe en el registro y se vota ahí, a la vista. El voto pesa según las unidades en juego, las mismas que respaldan los bloques. Quien escribe el código puede proponer. Quien pone esas unidades decide. Si la votación aprueba, la red aplica el cambio. Queda escrito quién votó y qué se aprobó.

A decidir así los cambios se le llama **gobernanza**.

## <span class="piece">Seguridad</span>Tres límites que el protocolo no cruza {#security}

La solidez está en lo que el protocolo se niega a hacer por ti:

- **No devuelve una llave.** La cuenta es de quien la tiene. Perderla es perder la cuenta.
- **No revisa los contratos.** Ejecuta su código, también cuando un contrato de otra persona está mal hecho o busca engañar. Leer lo que se va a usar es parte de usarlo.
- **No cierra un bloque a medias.** Si falta la mayoría, espera. Un acuerdo incompleto no es un acuerdo.

:::facts
- **1 bloque** para que algo sea definitivo
- **> 2/3** del voto para cerrarlo
- **< 1/3** de fallas que la red tolera
:::

## Ficha {#summary}

|  |  |
|---|---|
| Protocolo | Protocolo 42 (*Infinite Improbability Drive*) · código abierto · Apache 2.0 |
| Base tecnológica | Cosmos SDK · CometBFT · IBC |
| Red | Pública. Cualquiera puede leerla y operar un nodo |
| Consenso | Prueba de participación delegada |
| Finalidad | Inmediata, en un bloque |
| Tolerancia a fallas | Menos de un tercio del poder de voto |
| Ejecución | Máquina virtual de Ethereum (EVM) |
| Interoperabilidad | IBC (versiones 1 y 2) |
| Unidad nativa | Improbability (42) |
| Gobernanza | En la cadena, con voto ponderado por staking |

:::aside
[El mecanismo de cada pieza →](docs:/protocol) · [Casos de uso →](/use-cases)
:::
