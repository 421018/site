---
title: "Infinite Improbability Drive"
summary: "El protocolo 42, explicado desde sus bases: qué es, cómo funciona y qué permite construir."
group: protocolo
slug: protocolo
---

## Qué es el protocolo {#protocolo}

Cuando varias computadoras tienen que trabajar juntas sin que ninguna mande sobre las demás, necesitan un acuerdo sobre cómo hacerlo. Ese acuerdo se escribe como un conjunto de reglas precisas. A ese conjunto de reglas se le llama **protocolo**.

El correo electrónico es un buen ejemplo. Un mensaje puede viajar entre servidores administrados por personas distintas. Los servidores se entienden entre sí porque todos siguen el mismo protocolo.

El Infinite Improbability Drive es un protocolo de ese tipo. Su propósito es que muchas computadoras lleven, entre todas, un mismo registro de información, sin depender de ninguna de ellas en particular. A cada computadora que ejecuta el protocolo se le llama **nodo**. Al conjunto de todos los nodos se le llama **red**.

Para entender cómo funciona el protocolo, conviene empezar por ese registro.

## Un registro que comparten muchos {#registro}

Casi todo servicio digital guarda información: saldos, quién es dueño de qué, el resultado de una votación. Lo habitual es que esa información esté en un servidor central. Quienes usan el servicio dependen de que el administrador de ese servidor guarde bien la información y no la cambie sin avisar.

El protocolo funciona de otra forma. No hay un servidor central: cada nodo guarda una copia completa del registro. Todas las copias deben coincidir. Por eso un nodo no puede modificar su copia sin que los demás nodos lo noten. Para añadir información al registro, la red entera tiene que ponerse de acuerdo.

La red no se pone de acuerdo transacción por transacción. Las transacciones se agrupan en paquetes, y a cada paquete se le llama **bloque**. La red acuerda un bloque a la vez.

Cada bloque incluye la **huella** del bloque anterior. La huella es un código que se calcula a partir del contenido de un bloque, y cambia por completo si se altera un solo dato de ese bloque. Como cada bloque guarda la huella del anterior, todos los bloques quedan encadenados. De ahí viene el nombre de **cadena de bloques**.

Si alguien alterara un bloque antiguo, la huella de ese bloque cambiaría. Ya no coincidiría con la huella guardada en el bloque siguiente, y cualquier nodo detectaría la alteración.

De aquí se desprende algo importante: para confiar en el registro no hace falta confiar en ninguna persona en particular, porque cualquiera puede comprobar que el registro está intacto. Por eso el protocolo no pide permiso para participar. Cualquiera puede ejecutar el protocolo en su propia computadora, convertirse en nodo y revisar el historial completo. Por eso se dice que la red es **pública**.

Para que esa comprobación sea completa, también las reglas del protocolo tienen que poder revisarse. Por eso el software del protocolo es de **código abierto**: cualquiera puede leerlo, estudiarlo y proponer mejoras.

## Cuentas, llaves y firmas {#cuentas}

Si cualquiera puede participar, la red necesita saber quién autoriza cada transacción. El protocolo lo resuelve con criptografía.

Cada participante tiene una **cuenta**. La cuenta se identifica con una dirección pública, que todos pueden ver. Además, el participante tiene una **llave privada**, que solo él conoce.

Para enviar una transacción, el participante la **firma** con su llave privada. Cualquier nodo puede comprobar, con la dirección pública, que la firma es auténtica. Pero nadie puede producir esa firma sin la llave privada. Así, nadie puede mover lo que hay en una cuenta sin la autorización de su titular.

Las llaves son secuencias largas de números, difíciles de manejar a mano. Por eso las personas usan una aplicación que guarda sus llaves y firma sus transacciones. A esa aplicación se le llama **billetera**.

Quien pierde su llave privada pierde el acceso a su cuenta. No existe ninguna persona ni servicio que pueda restablecer esa llave.

## Programas que viven en la red {#contratos}

La transacción más simple es una transferencia: mover unidades de una cuenta a otra. Pero el registro puede guardar algo más que saldos. También puede guardar programas, y la red puede ejecutarlos. A un programa publicado en la cadena se le llama **contrato inteligente**.

Un contrato inteligente funciona como un acuerdo que se cumple solo. Sus reglas están escritas en código, y cualquiera puede leerlas. Una vez publicado, nadie puede cambiar el contrato. Por ejemplo, un contrato puede llevar un registro de certificados, administrar un fondo común con reglas de votación o liberar un pago cuando se cumple una condición.

Para que el resultado de un contrato sea confiable, todos los nodos ejecutan el contrato y todos tienen que llegar exactamente al mismo resultado. Para eso, todos los nodos deben ejecutarlo en el mismo entorno y con las mismas instrucciones. A ese entorno se le llama **máquina virtual**.

La máquina virtual del protocolo sigue una especificación llamada **EVM**, la más usada para contratos inteligentes en cadenas de bloques. Como la EVM es un estándar compartido, los lenguajes, las herramientas y las billeteras que ya existen para la EVM funcionan con el protocolo sin cambios. Quien ya sabe escribir contratos para la EVM puede escribirlos para el protocolo desde el primer día.

<p class="msg"><a class="tx" href="/protocolo/ejecucion">Ejecución →</a></p>

## El costo de cada transacción {#unidad}

Cada transacción, sea una transferencia o la ejecución de un contrato, la procesan todos los nodos. Procesarla consume trabajo real: cálculo, almacenamiento y conexión. Si las transacciones fueran gratuitas, nada impediría que alguien saturara la red enviando millones de transacciones.

Por eso cada transacción paga una **tarifa**. La tarifa es proporcional al trabajo que exige la transacción.

Las tarifas se pagan en la unidad propia del protocolo. A esa unidad se le llama **unidad nativa**. La unidad nativa del protocolo se llama Improbability, y su símbolo es 42. Las reglas para calcular las tarifas son públicas, así que el costo de una transacción se conoce antes de enviarla.

La unidad nativa tiene además un segundo papel, quizá el más importante: protege la red. Para entender cómo, hay que ver primero quién decide qué bloques entran en la cadena.

<p class="msg"><a class="tx" href="/protocolo/tarifas">Tarifas y emisión →</a></p>

## Quién añade los bloques {#validacion}

Cada bloque nuevo tiene que proponerlo alguien, y el resto de la red tiene que aceptarlo. El reto es impedir que alguien proponga bloques falsos; por ejemplo, un bloque que gaste dos veces el mismo saldo.

Una primera idea sería votar: que cada nodo tenga un voto y que gane la mayoría. Pero en una red abierta crear nodos es fácil. Alguien que quisiera hacer trampa podría crear miles de nodos falsos y ganar cualquier votación. Por eso el peso de un voto no puede depender del número de nodos. Tiene que depender de algo que cueste conseguir: la cantidad de unidades que cada participante pone en juego.

### Validadores y staking

Los nodos que proponen y confirman bloques se llaman **validadores**. Para ser validador, un nodo tiene que bloquear una cantidad de unidades como respaldo. A esas unidades bloqueadas se les llama **staking**.

Cuantas más unidades tiene un validador en staking, más pesa su voto. A ese peso se le llama **poder de voto**.

### Delegación

Una persona que tiene unidades pero no quiere operar su propio validador también puede participar en la seguridad de la red. Para hacerlo, elige un validador y le delega sus unidades. Esas unidades se suman al staking del validador elegido y aumentan su poder de voto. A esto se le llama **delegación**.

Las unidades delegadas siguen siendo de la persona que las delega. El validador no puede usarlas ni transferirlas.

### Por qué el staking protege la red

Cada voto de un validador va firmado con su llave privada. Por eso cualquier falta de un validador queda probada en el propio registro.

Si un validador firma dos bloques distintos para la misma posición de la cadena, el protocolo lo detecta y le retira automáticamente una parte de las unidades que tiene en staking.

Para engañar a la red, un atacante tendría que controlar más de un tercio de todas las unidades en staking de la red: una cantidad enorme, que tendría que reunir y bloquear. Además, tendría que aceptar perder esas unidades, a cambio de un engaño que el resto de la red detectaría de inmediato. Hacer trampa cuesta mucho más de lo que se podría ganar con ella.

### Cómo se confirma un bloque

Los validadores se turnan para proponer bloques. Cuando un validador propone un bloque, los demás validadores lo revisan y, si es válido, lo firman. Cuando las firmas reunidas suman más de dos tercios del poder de voto, el bloque queda confirmado. A esta manera de llegar a un acuerdo se le llama **mecanismo de consenso**.

Un bloque confirmado no puede revertirse ni reemplazarse por otro. A esta propiedad se le llama **finalidad**. Para quien usa la red, la finalidad significa algo concreto: en cuanto su transacción entra en un bloque confirmado, la transacción es definitiva.

Los validadores reciben una compensación por este trabajo. El protocolo les asigna una parte de las tarifas y de las unidades nuevas que crea con cada bloque. Cada validador comparte esa parte con las personas que le delegaron unidades.

<p class="msg"><a class="tx" href="/protocolo/consenso">Consenso y staking →</a></p>

## Una red entre otras redes {#ibc}

Existen muchas cadenas de bloques, y cada una lleva su propio registro. A menudo conviene mover información o unidades de una cadena a otra.

La forma más simple sería confiar en un intermediario: alguien que reciba las unidades en una red y las entregue en la otra. Pero eso reintroduce justo lo que una cadena de bloques busca evitar: depender de alguien.

Por eso el protocolo usa **IBC** (Inter-Blockchain Communication). IBC es un estándar abierto en el que cada red comprueba por sí misma, con pruebas criptográficas, lo que ocurrió en la otra red. Así, las unidades y los mensajes pueden pasar de una red a otra sin que ningún intermediario los custodie durante el traslado.

<p class="msg"><a class="tx" href="/protocolo/interoperabilidad">Interoperabilidad →</a></p>

## Quién decide las reglas {#reglas}

Todo lo anterior depende de que los nodos sigan las mismas reglas. Pero ningún protocolo queda terminado. Con el tiempo hay que ajustar parámetros, corregir errores o adoptar mejoras. Como la red no tiene dueño, hace falta una forma de decidir esos cambios en la que ningún participante pueda imponerse a los demás.

El protocolo resuelve este problema con las piezas que ya se describieron. Cualquier cambio se presenta como una propuesta, y la propuesta queda registrada en la cadena. Los validadores y las personas que les delegaron unidades votan la propuesta. Cada voto pesa según las unidades que ese participante tiene en staking. Si la propuesta se aprueba, la red aplica el cambio.

A este sistema de decisión colectiva se le llama **DAO** (por sus siglas en inglés, *Decentralized Autonomous Organization*). Con este sistema, quienes protegen la red con sus unidades en staking son también quienes deciden cómo evoluciona.

<p class="msg"><a class="tx" href="/protocolo/gobernanza">Gobernanza →</a></p>

## Seguridad {#seguridad}

La seguridad de la red no depende de una sola pieza, sino de varias que se refuerzan entre sí:

- **Las huellas encadenadas** hacen evidente cualquier alteración del registro.
- **Las firmas** impiden operar una cuenta sin su llave privada.
- **El staking** hace que romper las reglas cueste más de lo que se podría ganar.
- **El mecanismo de consenso** sigue funcionando mientras menos de un tercio del poder de voto falle o actúe mal.

Además, el código del protocolo es abierto y se somete a **auditorías**. Una auditoría es una revisión a fondo del código, hecha por especialistas independientes. [Estado de las auditorías y enlace a los informes.]

Para no caer en sitios o perfiles falsos, usa solo los [canales oficiales](/proyecto/contacto#canales). Si encuentras una vulnerabilidad, repórtala en privado por el canal de seguridad indicado en la [documentación](/docs).

<p class="msg"><a class="tx" href="/protocolo/seguridad">Seguridad →</a></p>

## Decisiones de diseño {#decisiones}

El protocolo se apoya en siete decisiones de diseño. Cada una se desarrolla en su capítulo:

- **Ejecución compatible con la EVM.** Quien construye usa lenguajes y herramientas que ya existen. [Ejecución](/protocolo/ejecucion#porque)
- **El voto depende del staking, no del número de nodos.** Crear nodos no da poder; poner unidades en juego, sí. [Consenso y staking](/protocolo/consenso#porque)
- **Detenerse antes que arriesgar.** Sin la mayoría necesaria, la red se detiene en lugar de confirmar bloques dudosos. [Consenso y staking](/protocolo/consenso#fallas)
- **Una unidad propia y una emisión constante.** La seguridad de la red no depende de nadie externo ni de cuánto se use la red. [Tarifas y emisión](/protocolo/tarifas#porque)
- **Verificación en lugar de intermediarios.** Las redes conectadas se comprueban entre sí; nadie custodia unidades en el traslado. [Interoperabilidad](/protocolo/interoperabilidad#porque)
- **Las reglas las decide la DAO.** Quien escribe el código propone; quienes protegen la red deciden. [Gobernanza](/protocolo/gobernanza#porque)
- **Seguridad en capas y a la vista.** Varias protecciones se refuerzan entre sí, y cualquiera puede comprobarlas. [Seguridad](/protocolo/seguridad#porque)

Juntas, estas decisiones son las que hacen posibles las aplicaciones sobre la red. [Qué permite construir →](/protocolo/que-permite-construir)

## Ficha técnica {#ficha}

|  |  |
|---|---|
| Protocolo | Infinite Improbability Drive · código abierto · Apache 2.0 |
| Red | Pública, sin permisos |
| Consenso | Prueba de participación delegada |
| Finalidad | Inmediata, en un bloque |
| Tolerancia a fallas | Menos de un tercio del poder de voto |
| Ejecución | Máquina virtual compatible con la EVM |
| Interoperabilidad | IBC |
| Unidad nativa | Improbability (42) |
| Gobernanza | En la cadena, mediante la DAO |

<p class="msg"><a class="tx" href="/docs">Referencia técnica completa ↗</a></p>
