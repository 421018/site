---
title: "Integración entre redes"
summary: "Cómo redes distintas, públicas o propias, intercambian mensajes y se comprueban entre sí lo que ocurrió en la otra, sin un intermediario de confianza."
menuTitle: "Integración entre redes"
weight: 50
---

## El problema {#problema}

Un registro rara vez vive solo. Un consorcio que opera su propia red puede necesitar que terceros verifiquen algunos de sus registros. Dos sistemas distintos pueden necesitar reaccionar a lo que ocurre en el otro.

Conectar dos sistemas suele requerir un intermediario que lea un sistema y escriba en el otro. Las dos partes tienen que confiar en que el intermediario transmite fielmente lo que ocurrió, y en que no falla ni se equivoca.

## Cómo se resuelve con el protocolo {#solucion}

Las redes que ejecutan el protocolo se comunican mediante **IBC**, un estándar abierto de comunicación entre redes. Con IBC, cada red lleva un **cliente ligero** de la otra: una pieza que le permite comprobar, por sí misma, que un mensaje proviene de la otra red y que lo que dice ocurrió de verdad.

Los mensajes los transportan procesos llamados **relayers**, que cualquiera puede operar. Un relayer solo entrega mensajes: no puede inventarlos ni alterarlos, porque la red de destino los comprueba antes de aceptarlos.

## Un ejemplo {#ejemplo}

Un consorcio de laboratorios opera una red propia que ejecuta el protocolo. Ahí registra los resultados de sus análisis, que solo ven los miembros del consorcio. Algunos certificados, en cambio, tienen que poder verificarlos terceros.

- **1. El certificado se emite en la red del consorcio.** El laboratorio registra el certificado en la red propia.
- **2. Se envía su huella a la red pública.** Un contrato de la red propia envía, por IBC, un mensaje con la huella del certificado a un contrato en 42 Chain.
- **3. La red pública lo comprueba.** 42 Chain comprueba, con su cliente ligero, que el mensaje proviene de la red del consorcio. Solo entonces lo registra.
- **4. Cualquiera verifica.** Quien recibe el certificado comprueba su huella en 42 Chain y sabe que el consorcio lo emitió, sin tener acceso a la red del consorcio.

Los datos reservados se quedan en la red propia. A la red pública solo llega lo que tiene que ser verificable por cualquiera.

## Qué va en la cadena y qué no {#datos}

| En la red pública | En la red propia o fuera de la cadena |
|---|---|
| Las huellas y los estados que deben ser verificables | Los registros completos del consorcio |
| El origen comprobado de cada mensaje | Los datos reservados de cada miembro |

## Mecanismos que intervienen {#mecanismos}

- **IBC y clientes ligeros.** Cada red comprueba por sí misma lo que ocurrió en la otra. [Qué es IBC](/protocolo/interoperabilidad#ibc)
- **Mensajes entre contratos.** IBC no se limita a transferencias: transporta mensajes entre aplicaciones. [Más que transferencias](/protocolo/interoperabilidad#mensajes)
- **Red pública o red propia.** El mismo protocolo puede ejecutarse en redes distintas. [Red pública o red propia](/casos-de-uso#redes)

:::aside
Los ejemplos son ilustrativos.
:::
