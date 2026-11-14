---
title: "Integración entre redes"
summary: "Cómo redes distintas, públicas o propias, comprueban entre sí lo que ocurrió en la otra y coordinan operaciones, sin un intermediario de confianza."
menuTitle: "Integración entre redes"
weight: 50
---

## El problema {#problema}

Un registro rara vez vive solo. Un consorcio que opera su propia red puede necesitar que terceros verifiquen algunos de sus registros. Dos sistemas distintos pueden necesitar reaccionar a lo que ocurre en el otro.

Conectar dos sistemas suele requerir un intermediario que lea un sistema y escriba en el otro. Las dos partes tienen que confiar en que el intermediario transmite fielmente lo que ocurrió, y en que no falla ni se equivoca.

## Cómo se resuelve con el protocolo {#solucion}

Las redes que ejecutan el protocolo se comunican mediante **IBC**, un estándar abierto de comunicación entre redes. Con IBC, cada red lleva un **cliente ligero** de la otra: una pieza que le permite comprobar, por sí misma, lo que ocurrió en la otra red.

Un contrato puede usar ese cliente ligero directamente. Si alguien le presenta un dato de la otra red junto con su **prueba**, el contrato comprueba que el dato forma parte del registro de la otra red. Quien entrega la prueba no puede falsificarla: si el dato no está en la otra red, la comprobación falla.

Los clientes ligeros se mantienen al día con procesos llamados **relayers**, que cualquiera puede operar. Un relayer solo transporta información: la red que la recibe la comprueba antes de aceptarla.

## Un ejemplo {#ejemplo}

Un consorcio de laboratorios opera una red propia que ejecuta el protocolo. Ahí registra los resultados de sus análisis, que solo ven los miembros del consorcio. Algunos certificados, en cambio, tienen que poder verificarlos terceros.

- **1. El certificado se emite en la red del consorcio.** El laboratorio registra el certificado en la red propia.
- **2. Se presenta la prueba en la red pública.** El laboratorio, o cualquier otra parte, presenta a un contrato en 42 Chain la huella del certificado junto con la prueba de que esa huella está registrada en la red del consorcio.
- **3. La red pública lo comprueba.** El contrato consulta el cliente ligero de la red del consorcio que lleva 42 Chain. Si la prueba es válida, registra la huella y la altura de la red del consorcio en la que se comprobó.
- **4. Cualquiera verifica.** Quien recibe el certificado comprueba su huella en 42 Chain y sabe que está registrada en la red del consorcio, sin tener acceso a esa red.

Los datos reservados se quedan en la red propia. A la red pública solo llega lo que tiene que ser verificable por cualquiera.

## Qué va en la cadena y qué no {#datos}

| En la red pública | En la red propia o fuera de la cadena |
|---|---|
| Las huellas y los estados que deben ser verificables | Los registros completos del consorcio |
| La altura de la otra red en la que se comprobó cada huella | Los datos reservados de cada miembro |

## Mecanismos que intervienen {#mecanismos}

- **IBC y clientes ligeros.** Cada red comprueba por sí misma lo que ocurrió en la otra. [Qué es IBC](/protocolo/interoperabilidad#ibc)
- **Pruebas desde contratos.** Un contrato comprueba, con el cliente ligero, que un dato forma parte del registro de otra red. [Más que transferencias](/protocolo/interoperabilidad#mensajes)
- **Transferencias con instrucciones.** Cuando la integración necesita mover unidades, la transferencia puede ejecutar un contrato al llegar. [Más que transferencias](/protocolo/interoperabilidad#mensajes)
- **Red pública o red propia.** El mismo protocolo puede ejecutarse en redes distintas. [Red pública o red propia](/casos-de-uso#redes)

:::aside
Los ejemplos son ilustrativos.
:::
