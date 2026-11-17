---
title: "Casos de uso"
summary: "Un registro compartido sirve cuando varias personas necesitan los mismos datos y ninguna debería ser la única que los guarda. Cuándo conviene, cuándo no, y ejemplos concretos."
menuTitle: "Cuándo usar el protocolo"
section:
  label: Casos de uso
  weight: 3
  accent: "#FFB547"
  ink: "#9A5B00"
  sequential: true
---

## El patrón común {#pattern}

Hay situaciones en las que varias personas necesitan saber lo mismo al mismo tiempo. Quien termina un curso y quien va a confiar en su certificado. Quien cosecha el café y quien abre el saco. Quien repara una farola y quien vive en esa calle.

Lo habitual es que una de ellas guarde la información y las demás tengan que confiar en ella. Si cada quien lleva su propio cuaderno, los cuadernos dejan de coincidir.

El Protocolo 42 ofrece otra salida. Cualquiera puede guardar una copia completa de la misma cadena. Las reglas para añadir algo están escritas y se aplican igual en todas las copias. Así:

- Todas las copias dicen lo mismo.
- Si alguien cambia lo que ya estaba cerrado, se nota.
- Las reglas se pueden leer.
- Otra persona puede comprobar un dato sin tener que pedírselo a quien lo escribió.

:::diagram[El mismo problema, de dos formas: un registro en manos de una sola persona y un registro que cualquiera puede comprobar.]{name="patron-comun"}
:::

:::aside
[Cómo entra un dato en la cadena →](/protocol)
:::

## Cuándo conviene y cuándo no {#when}

El protocolo aporta más cuando se cumplen varias de estas condiciones:

- Varias personas, que no dependen unas de otras, necesitan los mismos datos.
- Ninguna debería ser la única que los guarda.
- Alguien más tendrá que verificarlos, a veces años después.
- Las reglas tienen que aplicarse igual para todos y quedar a la vista.

Si una sola persona genera, guarda y consulta los datos, y nadie más necesita comprobarlos, una base de datos tradicional suele ser más sencilla. El protocolo no sustituye esos casos.

## Casos {#cases}

Estas son solo algunas de las piezas.

Con registros compartidos como estos, personas y comunidades pueden empezar a construir su propia infraestructura: acuerdos, memoria, gobernanza y soberanía que no dependen de una sola plataforma.

La invitación está abierta.

:::widget{name="case-gallery"}
:::

## Qué va dentro y fuera de la cadena {#off-chain}

Todo lo que se escribe en una cadena pública lo puede leer cualquiera y no se borra. Por eso hay cosas que no deben ir en ella:

- Datos personales (nombres, direcciones, datos de salud).
- Información que solo deben ver algunas partes (precios, contratos, planos).
- Archivos grandes. Guardarlos en todas las copias es costoso.

Lo habitual es dejar el dato fuera y registrar solo su huella: un resumen corto que cambia por completo si el dato cambia, y del que no se puede reconstruir el original. Quien tenga el dato puede comprobar que es el mismo; el dato no se hace público.

:::aside
[Qué va dentro y fuera de la cadena en una aplicación →](docs:/build/applications#application)
:::
