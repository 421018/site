---
title: "Desplegar el protocolo"
summary: "Cuándo conviene una red propia, qué se configura al crearla, cómo se limita quién publica y usa contratos, y cómo se conecta con otras redes."
menuTitle: "Desplegar el protocolo"
weight: 30
---

## Una red propia {#red-propia}

El Protocolo 42 es software abierto. Además de 42 Chain, cualquiera puede desplegarlo para crear su propia red: un consorcio de organizaciones, una institución que necesita un registro con participantes definidos o un equipo que quiere un entorno de pruebas propio.

Una red propia ejecuta el mismo software que 42 Chain y ofrece las mismas capacidades: contratos en la EVM, finalidad en un bloque, gobernanza en la cadena e IBC. Lo que cambia es quién la opera y quién puede usarla.

:::aside
[Red pública o red propia →](/casos-de-uso#redes)
:::

## Cuándo conviene {#cuando}

Una red propia tiene sentido cuando se cumplen algunas de estas condiciones:

- **Los datos son reservados.** Solo las organizaciones del consorcio deben leer el registro completo.
- **Los participantes están definidos.** Solo ciertas organizaciones deben poder publicar contratos o registrar datos.
- **Hace falta otra configuración.** Por ejemplo, otros tiempos de votación, otras tarifas mínimas u otra unidad nativa.

Si el registro tiene que ser verificable por cualquiera, lo natural es usar 42 Chain, o combinar las dos: los datos en la red propia y sus pruebas en 42 Chain. [Integración entre redes](/casos-de-uso/integracion)

## Qué se configura al crearla {#configuracion}

Cada red se define en su **bloque génesis**, el primer bloque de su registro. Ahí se fija:

- **Los validadores iniciales.** Las organizaciones que operan los primeros validadores, y las unidades que cada una pone en staking.
- **La unidad nativa.** Su nombre, sus decimales y su suministro inicial, con su asignación.
- **Los identificadores de la red.** Un chain ID nativo y un chain ID para la EVM, distintos de los de cualquier otra red.
- **Los parámetros del protocolo.** Gobernanza (depósito, plazos, quórum, umbral y veto), consenso (tamaño del conjunto activo y penalizaciones) y tarifas (precio mínimo del gas).

Después del génesis, los parámetros solo cambian mediante propuestas de gobernanza en la propia red, igual que en 42 Chain.

## Quién puede publicar y usar contratos {#acceso}

El protocolo permite limitar, por separado, quién puede **publicar** contratos y quién puede **llamarlos**. Cada uno admite tres modos:

| Modo | Qué permite |
|---|---|
| Libre | Cualquier cuenta, salvo las que estén en una lista de exclusión |
| Con lista | Solo las cuentas de una lista de autorizadas |
| Cerrado | Ninguna cuenta |

Por ejemplo, una red de consorcio puede dejar que solo las cuentas de sus miembros publiquen contratos, y que cualquier cuenta de la red pueda usarlos. Como el resto de los parámetros, el modo y las listas se cambian mediante gobernanza.

En 42 Chain, publicar y usar contratos es libre.

## Conectarla con otras redes {#conexion}

Una red propia puede conectarse por IBC con 42 Chain y con otras redes compatibles. Con la conexión, las redes pueden intercambiar transferencias y comprobar, desde contratos, datos de la otra red.

La conexión no expone el registro de la red propia. Cada red decide qué envía y qué prueba presenta en la otra.

:::aside
[Interoperabilidad →](/protocolo/interoperabilidad)
:::

## Operarla y mantenerla al día {#operacion}

Quien despliega una red asume su operación: los validadores, los nodos, la seguridad de las llaves y las actualizaciones.

- **Validadores.** Cada organización del consorcio suele operar su propio validador. La red sigue funcionando mientras más de dos tercios del poder de voto estén en línea y actúen correctamente. [Qué pasa si fallan validadores](/protocolo/consenso#fallas)
- **Actualizaciones.** Las versiones nuevas del protocolo se aplican mediante una propuesta de gobernanza, en una altura de actualización, igual que en 42 Chain. [Cómo se aplica un cambio](/protocolo/gobernanza#ciclo)
- **Herramientas.** Los mismos exploradores, indexadores y herramientas de la EVM funcionan con cualquier red que ejecute el protocolo.

:::aside
[Operar un nodo →](/implementar/nodos) · [Guías de despliegue ↗](/docs)
:::
