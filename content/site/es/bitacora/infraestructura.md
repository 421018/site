---
title: "Operación y mantenimiento de infraestructura"
summary: "Cuando el dueño de una infraestructura, sus contratistas y sus inspectores llevan registros distintos, saber qué se hizo exige una auditoría. Así comparten uno solo, firmado y fechado."
category: caso-de-uso
image: ../../images/casos/infraestructura.jpg
alt: "Farola de doble brazo encendida al atardecer"
credit: "Foto: Kim R-K, Unsplash"
---

## El problema {#problema}

Una red de agua, el alumbrado público, una red eléctrica o una red de telecomunicaciones tienen miles de activos repartidos en el territorio. Su operación involucra a varias partes: quien es dueño de la infraestructura, los contratistas que la mantienen, los inspectores que la revisan y, a veces, un regulador.

Cada parte lleva su propio registro de lo que hizo. Cuando hay una falla, un reclamo o una auditoría, reconstruir qué se hizo, quién lo hizo y cuándo exige comparar registros que no coinciden. Y quien guarda el registro principal puede corregirlo después, sin que las demás partes lo noten.

## Cómo se resuelve con el protocolo {#solucion}

Las partes comparten dos registros en la red:

- **Un inventario de activos.** Cada activo tiene un identificador, su ubicación y su estado. Solo la cuenta del dueño de la infraestructura puede dar de alta o de baja un activo.
- **Un historial de intervenciones.** Cada mantenimiento, reparación o inspección se registra sobre un activo, firmado por quien la hizo. Un contrato define quién puede registrar cada tipo de intervención.

El historial solo crece. Una intervención registrada no puede borrarse ni modificarse. Si hay que corregirla, la corrección es un registro nuevo, y las dos quedan a la vista.

## Un ejemplo {#ejemplo}

Un municipio contrata a dos empresas para mantener su alumbrado público, y una tercera inspecciona el servicio.

- **1. El municipio registra el inventario.** Da de alta cada luminaria con su identificador y su ubicación, y autoriza en el contrato las cuentas de las dos empresas y de la inspección.
- **2. Las empresas registran su trabajo.** Cada reparación se registra sobre la luminaria, con la fecha, el tipo de trabajo y la huella del reporte con fotos.
- **3. La inspección registra sus revisiones.** Registra el resultado de cada revisión sobre la misma luminaria.
- **4. Se paga por lo comprobado.** El municipio consulta el historial para conciliar las facturas de cada empresa con las intervenciones registradas.
- **5. Cualquiera revisa el historial.** Ante un reclamo o una auditoría, el historial de cada luminaria muestra qué se hizo, quién lo hizo y cuándo, sin depender del archivo de ninguna de las partes.

El mismo esquema sirve para otras infraestructuras: redes de agua y de energía, puentes y carreteras, o los recursos que comparten varios operadores de una red.

:::diagram[Quién registra qué en el mantenimiento, y qué queda registrado en 42.]{name="carriles-infraestructura"}
:::

## Qué va en la cadena y qué no {#datos}

| En la cadena | Fuera de la cadena |
|---|---|
| El identificador y el estado de cada activo | Planos detallados y datos sensibles de seguridad |
| Cada intervención: tipo, fecha y cuenta que la registró | Reportes completos, fotos y mediciones |
| Las huellas de los reportes | Contratos, precios y facturas |

Para infraestructura crítica, la ubicación exacta de algunos activos puede ser información reservada. En ese caso, en la cadena se registra solo el identificador, y la ubicación se queda en los sistemas del dueño. [Qué va dentro y fuera de la cadena](/casos-de-uso#fuera)

## Mecanismos que intervienen {#mecanismos}

- **Contratos.** Definen quién puede registrar qué, y se aplican igual para todas las partes. [Contratos inteligentes](/protocolo/ejecucion#contratos)
- **Firmas.** Cada intervención queda asociada a la cuenta de quien la registró. [Cuentas, llaves y firmas](/protocolo#cuentas)
- **Huellas encadenadas.** Un registro confirmado no puede modificarse sin que se note. [Un registro que comparten muchos](/protocolo#registro)
- **Funcionamiento continuo.** El registro sigue disponible mientras la red funcione, aunque una de las partes deje de operar sus sistemas. [Seguridad](/protocolo/seguridad#propiedades)

:::aside
Los ejemplos son ilustrativos.
:::
