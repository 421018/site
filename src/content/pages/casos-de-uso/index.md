---
title: "Casos de uso"
summary: "Qué problema resuelve el protocolo, cuándo conviene usarlo y cuándo no, qué va dentro y fuera de la cadena, y los casos de uso más habituales."
menuTitle: "Cuándo usar el protocolo"
section:
  label: Casos de uso
  weight: 2
  accent: "#FFB547"
  ink: "#9A5B00"
  sequential: true
---

## El patrón común {#patron}

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
[Un registro que comparten muchos →](/protocolo#registro)
:::

## Cuándo conviene y cuándo no {#cuando}

El protocolo aporta más cuando se cumplen varias de estas condiciones:

- **Varias partes independientes** necesitan los mismos datos.
- **Ninguna debería custodiarlos sola**, porque las demás no pueden o no quieren depender de sus sistemas.
- **Terceros tienen que verificar** los datos, a veces años después.
- **Las reglas tienen que aplicarse igual para todos** y quedar a la vista.

Si una sola organización genera, guarda y consulta los datos, y nadie más necesita comprobarlos, una base de datos tradicional es más sencilla y más barata de operar. El protocolo no la sustituye en esos casos.

## Casos {#casos}

Cada caso explica el problema, cómo se resuelve con el protocolo, un ejemplo completo y qué información va en la cadena:

- **[Registros y documentos verificables](/casos-de-uso/registros-verificables).** Títulos, certificados, constancias y actos públicos que cualquiera puede comprobar.
- **[Trazabilidad entre organizaciones](/casos-de-uso/trazabilidad).** El recorrido de un producto o de un lote, registrado por cada parte que interviene.
- **[Operación y mantenimiento de infraestructura](/casos-de-uso/infraestructura).** Inventarios de activos, intervenciones e inspecciones que comparten quien es dueño de la infraestructura y quien la mantiene.
- **[Autorizaciones compartidas](/casos-de-uso/autorizaciones).** Cambios que solo se aplican cuando los aprueban varias organizaciones.
- **[Integración entre redes](/casos-de-uso/integracion).** Sistemas que se comprueban entre sí lo que ocurrió en la otra parte.

:::aside
Los ejemplos son ilustrativos.
:::

## Qué va dentro y fuera de la cadena {#fuera}

Todo lo que se registra en una red pública es visible para cualquiera y permanente. Por eso hay información que no debe ir en la cadena:

- **Datos personales.** Nombres, direcciones o datos de salud, porque cualquiera podría leerlos y no podrían borrarse.
- **Información reservada.** Contratos, precios o planos que solo deben ver algunas partes.
- **Archivos pesados.** Guardar documentos completos en la cadena es costoso, porque todos los nodos tienen que almacenarlos.

La solución habitual es separar el dato de su prueba. El dato se queda fuera de la cadena, en los sistemas de quien corresponda. En la cadena se registra su **huella**: un resumen de pocos caracteres que cambia por completo si el dato cambia, y del que no se puede reconstruir el dato. Así, cualquiera que tenga el dato puede comprobar que es auténtico, sin que el dato se haga público.

:::aside
[Qué va dentro y fuera de la cadena en una aplicación →](/implementar#aplicacion)
:::

## Entornos internos conectados a 42 Chain {#entornos-internos}

42 Chain es una red pública: cualquiera puede leer su registro y verificar lo que contiene. Por eso es donde un dato se vuelve verificable por terceros.

Algunas organizaciones necesitan, además, mantener parte de sus datos separados de la red pública: resultados internos, información de clientes o datos de operación. Para esos casos, la misma tecnología permite un **entorno interno** encapsulado, conectado a 42 mediante IBC. Los datos reservados se quedan en el entorno interno, y sus pruebas se comprueban en 42, donde cualquiera puede verificarlas.

Un entorno interno requiere una implementación a medida. [Implementaciones a medida](/implementar/implementaciones)

## Por qué el protocolo lo hace posible {#porque}

- **Finalidad en un bloque.** Un registro confirmado es definitivo en segundos. No hace falta esperar confirmaciones adicionales. [Consenso](/protocolo/consenso#ronda)
- **Contratos compatibles con la EVM.** Las reglas de cada caso se escriben con lenguajes y herramientas estándar. [Ejecución](/protocolo/ejecucion#contratos)
- **Firmas en cada transacción.** Cada registro queda asociado a la cuenta que lo firmó. [Cuentas, llaves y firmas](/protocolo#cuentas)
- **Reglas que solo cambian en público.** Las reglas de la red cambian solo mediante propuestas y votos registrados en la cadena. [Gobernanza](/protocolo/gobernanza)
- **IBC.** Redes distintas comprueban por sí mismas lo que ocurrió en la otra. [Interoperabilidad](/protocolo/interoperabilidad)
