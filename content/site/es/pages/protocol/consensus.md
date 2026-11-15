---
title: "Consenso y staking"
summary: "Miles de computadoras que no se conocen acuerdan el mismo bloque cada dos segundos. Así lo consiguen, y esto es lo que pasa cuando alguna falla o intenta hacer trampa."
icon: consensus
menuText: "Cómo se acuerda cada bloque"
weight: 10
---

## El problema del acuerdo {#agreement}

Cada nodo guarda una copia del registro, y todas las copias deben coincidir. Para eso, todos los nodos tienen que aceptar los mismos bloques, en el mismo orden.

Lograrlo es difícil por tres razones. Los mensajes tardan en llegar de un nodo a otro. Algunos nodos pueden fallar o desconectarse. Y algunos participantes pueden intentar hacer trampa; por ejemplo, gastar dos veces el mismo saldo enviando dos transacciones contradictorias a nodos distintos.

A la forma de resolver este problema se le llama **mecanismo de consenso**. Un buen mecanismo de consenso logra que todos los nodos honestos acepten los mismos bloques, aunque una parte de los participantes falle o actúe mal.

## Por qué el voto depende del staking {#weight}

Para ponerse de acuerdo, los nodos votan. La pregunta es cuánto pesa cada voto.

Si cada nodo tuviera un voto, quien quisiera hacer trampa podría crear miles de nodos falsos y ganar cualquier votación. En una red abierta, crear nodos es fácil. Por eso el peso de un voto tiene que depender de algo que cueste conseguir.

En el protocolo, ese algo son las unidades que cada participante pone en juego. Los nodos que votan sobre los bloques, llamados **validadores**, bloquean unidades como respaldo. A esas unidades bloqueadas se les llama **staking**. Cuantas más unidades tiene un validador en staking, más pesa su voto. A ese peso se le llama **poder de voto**.

Si un validador rompe las reglas, pierde una parte de su respaldo. Así, hacer trampa cuesta más de lo que se podría ganar con ella.

Este mecanismo se llama **prueba de participación delegada**. "Prueba de participación", porque el voto depende de lo que cada validador pone en juego. "Delegada", porque otras personas pueden sumar sus unidades al respaldo de un validador.

## Delegación {#delegation}

El poder de voto de un validador no depende solo de sus propias unidades. Otras cuentas pueden **delegarle** unidades, que se suman a su staking y aumentan su poder de voto. Así, el respaldo de la red no se limita a quienes operan servidores.

El protocolo fija tres reglas para la delegación:

- **Las unidades siguen siendo de quien las delega.** El validador no puede usarlas ni transferirlas.
- **Comparten las penalizaciones.** Si el validador comete una falta, las unidades delegadas en él también pierden una parte.
- **Retirarlas lleva un período de espera.** Una delegación retirada queda bloqueada durante un período fijo antes de poder transferirse. [Duración del período de espera.]

Cada validador fija una **comisión**: la parte de la compensación correspondiente a las unidades delegadas que retiene por operar su infraestructura.

:::aside
[Parámetros de staking y delegación ↗](/docs)
:::

## El conjunto activo {#active-set}

No todos los validadores registrados confirman bloques. El protocolo ordena a los validadores según su poder de voto. Solo los validadores con más poder de voto forman el **conjunto activo**: el grupo que propone y confirma los bloques.

El número de lugares en el conjunto activo es un parámetro del protocolo, y puede cambiarse mediante una propuesta de gobernanza. [Número de lugares.]

Un validador que queda fuera del conjunto activo sigue registrado. Pero no propone ni confirma bloques, y no recibe compensación mientras está fuera.

El conjunto activo se actualiza con cada bloque, a medida que cambian las unidades en staking de cada validador.

## Una ronda de consenso {#round}

Cada bloque se decide en una ronda. Una ronda tiene cuatro etapas:

- **Propuesta.** Un validador del conjunto activo propone el bloque. El turno rota entre los validadores. Los validadores con más poder de voto proponen con más frecuencia.
- **Pre-voto.** Cada validador revisa el bloque propuesto. Si el bloque es válido, el validador firma un primer voto a su favor.
- **Pre-compromiso.** Si el bloque reúne pre-votos de más de dos tercios del poder de voto, cada validador firma un segundo voto. Con ese segundo voto, el validador se compromete con ese bloque.
- **Confirmación.** Si el bloque reúne pre-compromisos de más de dos tercios del poder de voto, el bloque queda confirmado y se añade a la cadena.

¿Por qué dos votaciones? Con una sola, la red podría dividirse. Por un problema de conexión, unos validadores podrían ver un bloque y otros validadores, otro distinto, y cada grupo podría confirmar el suyo.

La segunda votación impide que eso ocurra. Un validador solo se compromete con un bloque cuando ya sabe que más de dos tercios del poder de voto lo apoyan. Dos grupos distintos no pueden reunir, cada uno, más de dos tercios del total. Por eso nunca se confirman dos bloques distintos para la misma posición de la cadena.

A veces una ronda no reúne los votos necesarios; por ejemplo, porque el validador que debía proponer está desconectado. En ese caso empieza una nueva ronda, y la propuesta le toca a otro validador.

:::facts
- **1 bloque** Finalidad
- **&gt; 2/3** Poder de voto para confirmar
- **&lt; 1/3** Fallas toleradas
:::

## Qué pasa si fallan validadores {#failures}

El mecanismo de consenso tolera fallas. Mientras los validadores que fallan sumen menos de un tercio del poder de voto, los demás validadores siguen reuniendo los dos tercios necesarios. La red sigue confirmando bloques.

Si los validadores desconectados suman más de un tercio del poder de voto, ningún bloque puede reunir los dos tercios. Entonces la red deja de producir bloques.

Esta pausa es una decisión de diseño. Un bloque confirmado ya no puede deshacerse, así que el protocolo prefiere detenerse antes que confirmar un bloque sin la mayoría necesaria. Cuando los validadores se reconectan y se recupera la mayoría, la red continúa desde el último bloque confirmado.

:::widget{name="consensus-sim"}
:::

## Penalizaciones {#penalties}

El protocolo penaliza automáticamente dos faltas:

- **Doble firma.** El validador firma dos bloques distintos para la misma posición de la cadena. Solo ocurre por un error grave de configuración o por un intento de fraude. Es la falta más grave.
- **Inactividad prolongada.** El validador deja de firmar bloques durante demasiado tiempo.

Cuando un validador comete una de estas faltas, el protocolo le retira una parte de las unidades que tiene en staking, incluidas las unidades delegadas. Además, lo saca del conjunto activo.

La proporción que se retira y el tiempo que el validador queda fuera dependen de la falta.

:::aside
[Reglas y parámetros de penalización ↗](/docs)
:::

## Por qué el protocolo lo hace así {#why}

- **Prueba de participación en lugar de un voto por nodo.** Crear nodos no da poder. Poner unidades en juego, sí. Así, el voto depende de algo que cuesta conseguir y que se pierde al hacer trampa.
- **Finalidad inmediata.** Un bloque confirmado es definitivo desde el primer momento. Quien usa la red no tiene que esperar a que una transacción se vuelva más segura con el tiempo.
- **Detenerse antes que arriesgar.** Si no se reúne la mayoría necesaria, la red se detiene en lugar de confirmar bloques dudosos.
- **Delegación.** El respaldo de la red puede sumarse a un validador sin operar un servidor, y comparte sus penalizaciones.
- **Penalizaciones automáticas.** Las faltas quedan probadas en el registro y se castigan sin que nadie tenga que decidirlo.
