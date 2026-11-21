---
title: "El protocolo"
summary: "Cómo se acuerda cada bloque, cómo se ejecutan los contratos, cómo se paga el trabajo y cómo cambian las reglas."
section:
  label: Protocolo
  weight: 2
  accent: "#5BF0C8"
  ink: "#0A7A5E"
  numbered: true
  sequential: true
---

## Cómo funciona {#how}

El Protocolo 42 es el conjunto de reglas con el que muchas computadoras llevan un mismo registro. Estas páginas explican ese conjunto, de la firma de una operación al cambio de una regla.

- **[Consenso y staking](/protocol/consensus).** Cómo se acuerda cada bloque, y qué pasa cuando un validador falla o intenta hacer trampa.
- **[Ejecución](/protocol/execution).** Qué ocurre desde la firma hasta el cambio en el registro, y cómo corren los contratos.
- **[Tarifas y emisión](/protocol/fees).** Cómo se mide el trabajo, cómo se pagan y de dónde salen las unidades nuevas.
- **[Interoperabilidad](/protocol/interoperability).** Cómo comprueba esta red lo que ocurrió en otra, sin un intermediario de confianza.
- **[Gobernanza](/protocol/governance).** Cómo se propone un cambio, cómo se vota y cómo llega a todos los nodos a la vez.
- **[Seguridad](/protocol/security).** Qué protege el diseño, bajo qué condición, y qué queda en manos de cada persona.

Quien va a publicar un contrato sigue en [Construir](/build). Quien va a conectar un sistema que ya existe, en [Integrar](/integrate). Quien va a unir un nodo, en [Operar](/operate).

## Cómo entra algo en el registro {#entry}

Imagina que Ana termina un trabajo y Bruno necesita saber que es cierto, sin tener que confiar solo en la palabra de Ana ni en una plataforma intermedia.

1. Ana decide qué quiere dejar escrito y ve el costo de hacerlo antes de firmar.
2. Firma con una llave que solo ella tiene. La red no guarda una copia de esa llave.
3. Otras personas que respaldan la red reúnen lo que está esperando y proponen la siguiente página. Si más de dos tercios están de acuerdo, la página se cierra. Si no hay acuerdo, se espera.
4. Bruno puede leer el resultado en su propia copia. Ya no se deshace.

El mismo camino sirve para un certificado, una reparación, un acuerdo o cualquier otro hecho que varias personas necesiten conocer. El detalle de cada paso —cómo se calcula el costo, cómo se llega al acuerdo, cómo se ejecutan las reglas— está en las páginas de esta sección.

:::diagram[El camino desde que alguien decide escribir algo hasta que otra persona lo ve en su copia.]{name="entrada"}
:::
