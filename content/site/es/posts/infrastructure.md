---
title: "El historial de una reparación"
summary: "La farola de una calle se funde, y cada persona anota lo que hizo en su propia lista. Así el historial es uno solo, firmado y fechado, y nadie lo reescribe."
category: caso-de-uso
image: ../../images/casos/infraestructura.jpg
alt: "Farola de doble brazo encendida al atardecer"
credit: "Foto: Kim R-K, Unsplash"
---

## El problema {#problem}

Una farola, una toma de agua o un poste se reparan muchas veces, y en cada reparación intervienen personas distintas: quien cuida esa calle, quien sube a arreglarla y quien revisa el trabajo. A veces, quien vive ahí solo quiere saber qué se hizo.

Cada persona lleva su propia lista. Cuando la farola vuelve a fallar, reconstruir qué se hizo, quién lo hizo y cuándo exige comparar listas que no coinciden. Y quien guarda la lista principal puede corregirla después, sin que las demás lo noten.

## Cómo se resuelve con el protocolo {#solution}

Esas personas comparten dos registros en la red:

- **Un inventario.** Cada farola tiene un identificador, su lugar y su estado. Solo la cuenta de quien cuida la calle puede dar de alta o de baja una.
- **Un historial de lo que se hizo.** Cada reparación o revisión se anota sobre esa farola, firmada por quien la hizo. Un contrato define quién puede anotar cada tipo de trabajo.

El historial solo crece. Una nota no se borra ni se modifica. Si hay que corregirla, la corrección es una nota nueva, y las dos quedan a la vista.

## Un ejemplo {#example}

Lucía vive en esa calle. La farola de la esquina se funde. Quien cuida el alumbrado, quien lo repara y quien revisa el trabajo dejan de llevar cada uno su lista.

- **1. Quien cuida la calle registra el inventario.** Da de alta cada farola con su identificador y su lugar, y autoriza en el contrato las cuentas de quien repara y de quien revisa.
- **2. Quien repara anota su trabajo.** Cada reparación queda sobre esa farola, con la fecha, el tipo de trabajo y la huella del reporte con fotos.
- **3. Quien revisa anota lo que vio.** Deja el resultado de cada revisión sobre la misma farola.
- **4. Se reconoce el trabajo hecho.** Quien cuida la calle consulta el historial y ve qué reparaciones quedaron anotadas, sin depender de una lista ajena.
- **5. Lucía puede mirarlo.** Si la farola vuelve a fallar, el historial muestra qué se hizo, quién lo hizo y cuándo. No hace falta llamar a una oficina.

El mismo esquema sirve para una toma de agua, un poste o cualquier cosa que varias personas reparan y otras necesitan poder comprobar.

:::diagram[Quién registra qué en el mantenimiento, y qué queda registrado en 42.]{name="carriles-infraestructura"}
:::

## Qué va en la cadena y qué no {#data}

| En la cadena | Fuera de la cadena |
|---|---|
| El identificador y el estado de cada farola | Planos detallados y datos que no deben publicarse |
| Cada trabajo: tipo, fecha y cuenta que lo anotó | Reportes completos, fotos y mediciones |
| Las huellas de los reportes | Precios y facturas |

Si el lugar exacto no debe publicarse, en la cadena se registra solo el identificador, y el lugar se queda con quien cuida la calle. [Qué va dentro y fuera de la cadena](/use-cases#off-chain)

## Mecanismos que intervienen {#mechanisms}

- **Contratos.** Definen quién puede anotar qué, y se aplican igual para todas las personas. [Contratos inteligentes](docs:/protocol/execution#contracts)
- **Firmas.** Cada intervención queda asociada a la cuenta de quien la registró. [La llave queda fuera de la red](/protocol#accounts)
- **Huellas encadenadas.** Un registro confirmado no puede modificarse sin que se note. [Un cambio en el pasado se nota](/protocol#ledger)
- **Funcionamiento continuo.** El registro sigue disponible mientras la red funcione, aunque una de esas personas deje de operar su sistema. [Seguridad](docs:/protocol/security#design)

:::aside
El ejemplo es ilustrativo.
:::
