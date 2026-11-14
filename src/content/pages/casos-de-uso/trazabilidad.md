---
title: "Trazabilidad entre organizaciones"
summary: "Cómo varias organizaciones registran el recorrido de un producto o de un lote en un registro común, sin que ninguna tenga que custodiar los datos de las demás."
menuTitle: "Trazabilidad"
weight: 20
---

## El problema {#problema}

Un producto pasa por muchas manos antes de llegar a su destino: quien lo produce, quien lo procesa, quien lo transporta, quien lo almacena y quien lo compra. Cada una de esas partes sabe lo que ocurrió mientras el producto estuvo a su cargo, y cada una lo registra en sus propios sistemas.

Reconstruir el recorrido completo exige reunir los registros de todos. Esos registros usan formatos distintos, no siempre coinciden y ninguna parte puede comprobar los de las demás. Si una sola parte centraliza los datos, las demás dependen de ella y de que los guarde sin cambios.

## Cómo se resuelve con el protocolo {#solucion}

Las partes acuerdan un contrato que define qué se registra en cada etapa: quién puede registrar, qué datos lleva cada registro y en qué orden pueden ocurrir las etapas. Cada parte registra lo que le toca, firmado con su propia cuenta.

El resultado es un solo historial por lote, compartido por todas las partes. Cada registro muestra quién lo hizo y cuándo. Ninguna parte puede modificar lo que registró otra, y nadie tiene que conciliar registros, porque solo hay uno.

## Un ejemplo {#ejemplo}

Una cooperativa de café exporta lotes que pasan por un beneficio, un transportista y un almacén de exportación.

- **1. Se acuerdan las reglas.** Las partes publican un contrato con las etapas del recorrido y las cuentas autorizadas para registrar cada una.
- **2. La cooperativa registra la cosecha.** Crea el lote con su origen, la fecha y el peso, y la huella de los certificados de origen.
- **3. El beneficio registra el proceso.** Añade el tipo de proceso y el peso resultante. El contrato solo acepta este registro si el lote ya existe.
- **4. El transportista registra la entrega.** Registra la recepción y la entrega, con la huella del documento de transporte.
- **5. El comprador consulta el historial.** El importador consulta el lote y ve cada etapa, quién la registró y cuándo. Puede comprobar los documentos que le entreguen contra sus huellas.

Si una etapa no se registra, el hueco queda a la vista. Si un registro es incorrecto, la corrección se añade como un registro nuevo, y el historial muestra los dos.

## Qué va en la cadena y qué no {#datos}

| En la cadena | Fuera de la cadena |
|---|---|
| El identificador del lote y cada etapa | Contratos comerciales y precios |
| Quién registró cada etapa y cuándo | Datos personales de productores y trabajadores |
| Pesos, fechas y estados acordados | Documentos completos: certificados, guías y facturas |
| Las huellas de los documentos | |

Si algunos datos solo deben verlos las partes del consorcio, el mismo esquema puede funcionar en una red propia que ejecute el protocolo. [Red pública o red propia](/casos-de-uso#redes)

## Mecanismos que intervienen {#mecanismos}

- **Contratos.** Las reglas del recorrido se aplican igual para todas las partes. [Contratos inteligentes](/protocolo/ejecucion#contratos)
- **Firmas.** Cada etapa queda asociada a la cuenta de quien la registró. [Cuentas, llaves y firmas](/protocolo#cuentas)
- **Un solo registro.** Todos los nodos llevan la misma copia, así que no hay versiones que conciliar. [Un registro que comparten muchos](/protocolo#registro)

:::aside
Los ejemplos son ilustrativos.
:::
