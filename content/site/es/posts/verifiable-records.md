---
title: "Registros y documentos verificables"
summary: "Un certificado vale poco si comprobarlo exige llamar a quien lo dio. Así Ana se lo lleva, y quien la contrata lo comprueba en segundos, años después."
category: caso-de-uso
image: ../../images/casos/registros.jpg
alt: "Diploma enmarcado con un sello dorado"
credit: "Foto: Quilia, Unsplash"
---

## El problema {#problem}

Un certificado, un título o una constancia valen si otra persona puede fiarse de ellos. Hoy, fiarse suele exigir llamar a quien los dio. La llamada tarda, porque alguien tiene que contestar. Depende de que esa persona siga ahí y conserve sus archivos. Y quien pregunta tiene que creer lo que le digan, porque no puede comprobarlo por su cuenta.

## Cómo se resuelve con el protocolo {#solution}

Quien da el certificado registra en la red su **huella**, firmada con su cuenta. El certificado sigue en manos de quien lo recibió.

Para comprobarlo, cualquiera calcula la huella del documento que tiene delante y la busca en el registro. Si la huella está y la firmó esa cuenta, el documento es auténtico y no cambió. Si alguien altera una sola letra, la huella deja de coincidir.

La comprobación no necesita a quien lo dio. Funciona aunque esa persona no conteste, cambie de sistema o ya no esté.

## Un ejemplo {#example}

Ana termina un curso de panadería. Quien da el curso quiere que, el día que alguien la contrate, esa persona pueda fiarse del certificado sin hacer una llamada.

- **1. Publica su cuenta.** Quien da el curso publica, en su propio sitio, la dirección de la cuenta con la que firma. Así, cualquiera sabe qué cuenta le corresponde.
- **2. Registra el certificado.** Al entregarlo, calcula la huella del documento y la registra en un contrato, firmada con esa cuenta. El contrato guarda la huella y la fecha.
- **3. Ana se lo lleva.** Recibe su certificado como siempre, en papel o en un archivo.
- **4. Quien la contrata comprueba.** Carga el archivo en una herramienta, que calcula la huella y la consulta en el contrato. En segundos sabe si es auténtico y quién lo firmó.
- **5. Anular, si hace falta.** Si el certificado se anula, quien lo dio registra la anulación en el mismo contrato. La comprobación muestra que existió, que fue anulado y cuándo.

El mismo esquema sirve para un título, una constancia o cualquier documento que otra persona tenga que creer: cambia quién lo da y quién lo comprueba, no el mecanismo.

:::diagram[Quién hace qué en el ejemplo, y qué queda registrado en 42.]{name="carriles-registros"}
:::

## Qué va en la cadena y qué no {#data}

| En la cadena | Fuera de la cadena |
|---|---|
| La huella de cada documento | El documento completo |
| La cuenta que lo firmó y la fecha | Los datos personales de quien lo recibe |
| Las revocaciones | El expediente y los motivos de una revocación |

Como en la cadena solo hay huellas, el registro no revela el contenido de ningún documento. Solo confirma un documento a quien ya lo tiene.

:::aside
[Qué va dentro y fuera de la cadena →](/use-cases#off-chain)
:::

## Mecanismos que intervienen {#mechanisms}

- **Huellas encadenadas.** Cualquier alteración del registro queda a la vista. [Un cambio en el pasado se nota](/protocol#ledger)
- **Firmas.** Cada registro queda asociado a la cuenta que lo firmó. [La llave queda fuera de la red](/protocol#accounts)
- **Contratos.** Las reglas de registro y revocación son públicas y se aplican igual para todos. [Contratos inteligentes](docs:/protocol/execution#contracts)
- **Finalidad en un bloque.** Un documento registrado es verificable en segundos. [Una ronda de consenso](docs:/protocol/consensus#round)

:::aside
El ejemplo es ilustrativo.
:::
