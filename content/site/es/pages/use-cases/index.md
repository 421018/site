---
title: "Casos de uso"
summary: "Un registro compartido sirve cuando varias personas necesitan los mismos datos y ninguna debería custodiarlos sola. Cuándo conviene, cuándo no, y cuatro casos concretos."
menuTitle: "Cuándo usar el protocolo"
section:
  label: Casos de uso
  weight: 3
  accent: "#FFB547"
  ink: "#9A5B00"
  sequential: true
---

## El patrón común {#pattern}

Hay datos que varias personas necesitan a la vez: quien termina un curso y quien va a confiar en su certificado, quien cosecha un café y quien abre el saco, quien repara una farola y quien vive en esa calle.

Lo habitual es que una de esas personas guarde el registro y las demás dependan de ella. Tienen que confiar en que lo conserve, en que no lo cambie y en que siga disponible. Si cada quien lleva su propio registro, el problema es otro: dejan de coincidir y hay que reconciliarlos.

El Protocolo 42 resuelve eso de otra forma. Cada quien puede poner en marcha un nodo con una copia completa del mismo registro. Las reglas para añadir información están escritas en contratos que todos los nodos ejecutan igual. Así, el registro tiene cuatro propiedades:

- **Una sola versión.** Todas las copias coinciden. No hay registros que conciliar.
- **Alteraciones a la vista.** Un nodo no puede cambiar su copia sin que los demás lo noten.
- **Reglas públicas.** Cualquiera puede leer las reglas y comprobar que se aplicaron.
- **Verificación directa.** Otra persona comprueba un dato en el registro, sin tener que pedírselo a quien lo escribió.

:::diagram[El mismo problema, de dos formas: un registro en manos de una sola persona y un registro que cualquiera puede comprobar.]{name="patron-comun"}
:::

:::aside
[Cómo entra un dato en ese registro →](/protocol)
:::

## Cuándo conviene y cuándo no {#when}

El protocolo aporta más cuando se cumplen varias de estas condiciones:

- **Varias personas**, que no dependen unas de otras, necesitan los mismos datos.
- **Ninguna debería custodiarlos sola**, porque las demás no quieren dejar el registro en su sistema.
- **Alguien más tiene que verificar** los datos, a veces años después.
- **Las reglas tienen que aplicarse igual para todos** y quedar a la vista.

Si una sola persona genera, guarda y consulta los datos, y nadie más necesita comprobarlos, una base de datos tradicional es más sencilla y más barata de operar. El protocolo no la sustituye en esos casos.

## Casos {#cases}

Cada caso explica el problema, cómo se resuelve con el protocolo, un ejemplo cercano y qué información va en la cadena. Sirven para ver qué se puede construir, y con qué se puede contar. Los ejemplos son ilustrativos.

:::widget{name="case-gallery"}
:::

## Qué va dentro y fuera de la cadena {#off-chain}

Todo lo que se registra en una red pública es visible para cualquiera y permanente. Por eso hay información que no debe ir en la cadena:

- **Datos personales.** Nombres, direcciones o datos de salud, porque cualquiera podría leerlos y no podrían borrarse.
- **Información reservada.** Contratos, precios o planos que solo deben ver algunas partes.
- **Archivos pesados.** Guardar documentos completos en la cadena es costoso, porque todos los nodos tienen que almacenarlos.

La solución habitual es separar el dato de su prueba. El dato se queda fuera de la cadena, en los sistemas de quien corresponda. En la cadena se registra su **huella**: un resumen de pocos caracteres que cambia por completo si el dato cambia, y del que no se puede reconstruir el dato. Así, cualquiera que tenga el dato puede comprobar que es auténtico, sin que el dato se haga público.

:::aside
[Qué va dentro y fuera de la cadena en una aplicación →](docs:/build/applications#application)
:::
