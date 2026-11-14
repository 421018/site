---
title: "Registros y documentos verificables"
summary: "Cómo registrar títulos, certificados, constancias y actos públicos para que cualquiera pueda comprobar que son auténticos y que no cambiaron."
menuTitle: "Registros verificables"
weight: 10
---

:::figure[Imagen ilustrativa. Foto: Quilia, Unsplash.]{ratio="wide"}
![Diploma enmarcado con un sello dorado](../../../assets/images/casos/registros.jpg)
:::

## El problema {#problema}

Muchos documentos valen solo si se puede comprobar que son auténticos: un título universitario, un certificado de calibración, una constancia de un curso, el acta de una sesión de un concejo municipal.

Hoy, comprobarlo suele exigir consultar a quien emitió el documento. Eso tiene tres límites. La consulta tarda, porque alguien tiene que responderla. Depende de que el emisor siga existiendo y conserve sus archivos. Y quien consulta tiene que confiar en lo que el emisor le diga, porque no puede comprobarlo por su cuenta.

## Cómo se resuelve con el protocolo {#solucion}

El emisor registra en la red la **huella** de cada documento, firmada con la cuenta del emisor. El documento sigue en manos de quien lo recibió.

Para verificarlo, cualquiera calcula la huella del documento que tiene delante y la busca en el registro. Si la huella está registrada y la firmó la cuenta del emisor, el documento es auténtico y no cambió desde que se emitió. Si alguien altera una sola letra, la huella deja de coincidir.

La verificación no necesita al emisor. Funciona aunque el emisor no responda, cambie de sistemas o deje de existir.

## Un ejemplo {#ejemplo}

Una universidad emite títulos y quiere que cualquier empleador pueda comprobarlos.

- **1. Publica su cuenta.** La universidad publica, en su propio sitio, la dirección de la cuenta con la que firma los títulos. Así, cualquiera sabe qué cuenta corresponde a la universidad.
- **2. Registra cada título.** Al emitir un título, su sistema calcula la huella del documento y la registra en un contrato, firmada con esa cuenta. El contrato guarda la huella y la fecha.
- **3. Entrega el título.** La persona recibe su título como siempre, en papel o en un archivo.
- **4. El empleador verifica.** El empleador carga el archivo en una herramienta de verificación, que calcula la huella y la consulta en el contrato. En segundos sabe si el título es auténtico y quién lo emitió.
- **5. Revocar, si hace falta.** Si un título se anula, la universidad registra la revocación en el mismo contrato. La verificación muestra que el título existió y que fue revocado, y cuándo.

El mismo esquema sirve para certificados técnicos, constancias de formación o actas públicas: cambia quién emite y quién verifica, no el mecanismo.

:::diagram[Quién hace qué en el ejemplo, y qué queda registrado en 42.]{name="carriles-registros"}
:::

## Qué va en la cadena y qué no {#datos}

| En la cadena | Fuera de la cadena |
|---|---|
| La huella de cada documento | El documento completo |
| La cuenta que lo firmó y la fecha | Los datos personales de quien lo recibe |
| Las revocaciones | El expediente y los motivos de una revocación |

Como en la cadena solo hay huellas, el registro no revela el contenido de ningún documento. Solo confirma un documento a quien ya lo tiene.

:::aside
[Qué va dentro y fuera de la cadena →](/casos-de-uso#fuera)
:::

## Mecanismos que intervienen {#mecanismos}

- **Huellas encadenadas.** Cualquier alteración del registro queda a la vista. [Un registro que comparten muchos](/protocolo#registro)
- **Firmas.** Cada registro queda asociado a la cuenta que lo firmó. [Cuentas, llaves y firmas](/protocolo#cuentas)
- **Contratos.** Las reglas de registro y revocación son públicas y se aplican igual para todos. [Contratos inteligentes](/protocolo/ejecucion#contratos)
- **Finalidad en un bloque.** Un documento registrado es verificable en segundos. [Una ronda de consenso](/protocolo/consenso#ronda)

:::aside
Los ejemplos son ilustrativos.
:::
