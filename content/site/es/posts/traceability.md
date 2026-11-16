---
title: "El recorrido de un producto"
summary: "Un saco de café pasa por muchas manos, y cada persona guarda su parte. Así el recorrido queda en un solo historial, que nadie tiene que reconstruir."
category: caso-de-uso
image: ../../images/casos/trazabilidad.jpg
alt: "Saco de yute lleno de granos de café"
credit: "Foto: Tatiana Fernández R, Unsplash"
---

## El problema {#problem}

Un saco de café pasa por muchas manos antes de llegar a quien lo abre: quien lo cosecha, quien lo beneficia, quien lo transporta y quien lo compra. Cada persona sabe lo que ocurrió mientras el saco estuvo a su cargo, y cada una lo anota en su propio cuaderno.

Reconstruir el recorrido exige reunir esos cuadernos. No siempre coinciden, y nadie puede comprobar los de los demás. Si una sola persona centraliza los datos, las demás dependen de ella y de que no los cambie.

## Cómo se resuelve con el protocolo {#solution}

Las personas que intervienen acuerdan un contrato: quién puede anotar cada etapa, qué datos lleva y en qué orden pueden ocurrir. Cada quien anota lo que le toca, firmado con su propia cuenta.

El resultado es un solo historial por lote. Cada nota muestra quién la hizo y cuándo. Nadie puede modificar lo que anotó otra persona, y no hay cuadernos que reconciliar, porque solo hay uno.

## Un ejemplo {#example}

Ana cosecha café. El saco pasa por quien lo beneficia, por quien lo transporta y llega a Bruno, que lo compra.

- **1. Se acuerdan las reglas.** Publican un contrato con las etapas del recorrido y las cuentas que pueden anotar cada una.
- **2. Ana registra la cosecha.** Crea el lote con su origen, la fecha y el peso, y la huella del certificado de origen.
- **3. Quien beneficia el grano anota el proceso.** Añade el tipo de proceso y el peso resultante. El contrato solo acepta esta nota si el lote ya existe.
- **4. Quien transporta anota la entrega.** Deja la recepción y la entrega, con la huella del documento de transporte.
- **5. Bruno consulta el historial.** Abre el lote y ve cada etapa, quién la anotó y cuándo. Puede comprobar los papeles que le entreguen contra sus huellas.

Si una etapa no se anota, el hueco queda a la vista. Si una nota es incorrecta, la corrección se añade como una nota nueva, y el historial muestra las dos.

:::diagram[Quién registra cada etapa del lote, y qué queda registrado en 42.]{name="carriles-trazabilidad"}
:::

## Qué va en la cadena y qué no {#data}

| En la cadena | Fuera de la cadena |
|---|---|
| El identificador del lote y cada etapa | Contratos comerciales y precios |
| Quién registró cada etapa y cuándo | Datos personales de productores y trabajadores |
| Pesos, fechas y estados acordados | Documentos completos: certificados, guías y facturas |
| Las huellas de los documentos | |

## Mecanismos que intervienen {#mechanisms}

- **Contratos.** Las reglas del recorrido se aplican igual para todas las personas. [Contratos inteligentes](docs:/protocol/execution#contracts)
- **Firmas.** Cada etapa queda asociada a la cuenta de quien la registró. [La llave queda fuera de la red](/protocol#accounts)
- **Un solo registro.** Todos los nodos llevan la misma copia, así que no hay versiones que conciliar. [Las copias llegan al mismo resultado](/protocol#contracts)

:::aside
El ejemplo es ilustrativo.
:::
