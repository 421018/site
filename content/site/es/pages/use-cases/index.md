---
title: "Casos de uso"
summary: "Un registro compartido sirve cuando varias organizaciones necesitan los mismos datos y ninguna debería custodiarlos sola. Cuándo conviene, cuándo no, y cuatro casos concretos."
menuTitle: "Cuándo usar el protocolo"
section:
  label: Casos de uso
  weight: 3
  accent: "#FFB547"
  ink: "#9A5B00"
  sequential: true
---

## El patrón común {#pattern}

Muchos sistemas de información los comparten varias organizaciones: una universidad y los empleadores que verifican sus títulos, los eslabones de una cadena de suministro, un municipio y los contratistas que mantienen su infraestructura.

Lo habitual es que una de esas organizaciones guarde el registro en sus servidores y las demás dependan de ella. Tienen que confiar en que lo guarde bien, en que no lo cambie sin avisar y en que siga disponible. Si cada organización lleva su propio registro, el problema es otro: los registros dejan de coincidir y hay que conciliarlos.

El Protocolo 42 resuelve ese problema de otra forma. Cada organización puede operar un nodo con una copia completa del mismo registro. Las reglas para añadir información están escritas en contratos que todos los nodos ejecutan igual. Así, el registro tiene cuatro propiedades:

- **Una sola versión.** Todas las copias coinciden. No hay registros que conciliar.
- **Alteraciones a la vista.** Un nodo no puede cambiar su copia sin que los demás lo noten.
- **Reglas públicas.** Cualquier participante puede leer las reglas y comprobar que se aplicaron.
- **Verificación directa.** Un tercero comprueba un dato en el registro, sin tener que pedírselo a quien lo registró.

:::diagram[El mismo problema resuelto de dos formas: un registro central y un registro compartido.]{name="patron-comun"}
:::

:::aside
[Un registro que comparten muchos →](/protocol#ledger)
:::

## Cuándo conviene y cuándo no {#when}

El protocolo aporta más cuando se cumplen varias de estas condiciones:

- **Varias partes independientes** necesitan los mismos datos.
- **Ninguna debería custodiarlos sola**, porque las demás no pueden o no quieren depender de sus sistemas.
- **Terceros tienen que verificar** los datos, a veces años después.
- **Las reglas tienen que aplicarse igual para todos** y quedar a la vista.

Si una sola organización genera, guarda y consulta los datos, y nadie más necesita comprobarlos, una base de datos tradicional es más sencilla y más barata de operar. El protocolo no la sustituye en esos casos.

## Casos {#cases}

Cada caso explica el problema, cómo se resuelve con el protocolo, un ejemplo completo y qué información va en la cadena. Los ejemplos son ilustrativos.

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
