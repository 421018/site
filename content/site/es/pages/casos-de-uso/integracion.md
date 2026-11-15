---
title: "Integración entre redes"
summary: "Un dato reservado puede quedarse en casa y, aun así, ser verificable por cualquiera. Así se comprueban entre sí 42 y otras redes, incluidos los entornos internos de una organización."
menuTitle: "Integración entre redes"
weight: 50
---

:::figure[Imagen ilustrativa. Foto: Trnava University, Unsplash.]{ratio="wide"}
![Mesa de laboratorio con un microscopio y equipos de análisis](../../../images/casos/integracion.jpg)
:::

## El problema {#problema}

Un registro rara vez vive solo. Una organización que mantiene datos reservados en un entorno interno puede necesitar que terceros verifiquen algunos de ellos. Dos sistemas distintos pueden necesitar reaccionar a lo que ocurre en el otro.

Conectar dos sistemas suele requerir un intermediario que lea un sistema y escriba en el otro. Las dos partes tienen que confiar en que el intermediario transmite fielmente lo que ocurrió, y en que no falla ni se equivoca.

## Cómo se resuelve con el protocolo {#solucion}

42 Chain se comunica con otras redes mediante **IBC**, un estándar abierto de comunicación entre redes. Con IBC, cada red lleva un **cliente ligero** de la otra: una pieza que le permite comprobar, por sí misma, lo que ocurrió en la otra red.

Un contrato puede usar ese cliente ligero directamente. Si alguien le presenta un dato de la otra red junto con su **prueba**, el contrato comprueba que el dato forma parte del registro de la otra red. Quien entrega la prueba no puede falsificarla: si el dato no está en la otra red, la comprobación falla.

Los clientes ligeros se mantienen al día con programas llamados **retransmisores** (*relayers*), que cualquiera puede operar. Un retransmisor solo transporta información: la red que la recibe la comprueba antes de aceptarla.

## Un ejemplo {#ejemplo}

Un consorcio de laboratorios opera un entorno interno conectado a 42. Ahí registra los resultados de sus análisis, que solo ven los miembros del consorcio. Algunos certificados, en cambio, tienen que poder verificarlos terceros.

- **1. El certificado se emite en el entorno interno.** El laboratorio registra el certificado en el entorno interno del consorcio.
- **2. Se presenta la prueba en la red pública.** El laboratorio, o cualquier otra parte, presenta a un contrato en 42 la huella del certificado junto con la prueba de que esa huella está registrada en el entorno interno.
- **3. La red pública lo comprueba.** El contrato consulta el cliente ligero del entorno interno que lleva 42. Si la prueba es válida, registra la huella y la altura del entorno interno en la que se comprobó.
- **4. Cualquiera verifica.** Quien recibe el certificado comprueba su huella en 42 y sabe que está registrada en el entorno interno del consorcio, sin tener acceso a él.

Los datos reservados se quedan en el entorno interno. A 42 solo llega lo que tiene que ser verificable por cualquiera.

:::diagram[Cómo una huella del entorno interno llega a comprobarse en 42.]{name="carriles-integracion"}
:::

## Qué va en la cadena y qué no {#datos}

| En 42 | En el entorno interno o fuera de la cadena |
|---|---|
| Las huellas y los estados que deben ser verificables | Los registros completos del consorcio |
| La altura del entorno interno en la que se comprobó cada huella | Los datos reservados de cada miembro |

## Mecanismos que intervienen {#mecanismos}

- **IBC y clientes ligeros.** Cada red comprueba por sí misma lo que ocurrió en la otra. [Qué es IBC](/protocolo/interoperabilidad#ibc)
- **Pruebas desde contratos.** Un contrato comprueba, con el cliente ligero, que un dato forma parte del registro de otra red. [Más que transferencias](/protocolo/interoperabilidad#mensajes)
- **Transferencias con instrucciones.** Cuando la integración necesita mover unidades, la transferencia puede ejecutar un contrato al llegar. [Más que transferencias](/protocolo/interoperabilidad#mensajes)
- **Entornos internos.** Los datos reservados se quedan separados de la red pública, y sus pruebas se comprueban en 42. [Entornos internos conectados a 42 Chain](/casos-de-uso#entornos-internos)

:::aside
Los ejemplos son ilustrativos.
:::
