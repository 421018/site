---
title: "Un acuerdo que no decide una sola persona"
summary: "Dar de alta un camión no debería depender de una sola persona. Así se exige que varias estén de acuerdo, con reglas que todas pueden leer."
category: caso-de-uso
image: ../../images/casos/autorizaciones.jpg
alt: "Terminal portuaria con contenedores y camiones"
credit: "Foto: Artan, Unsplash"
---

## El problema {#problem}

Cuando varias personas comparten un registro, algunos cambios no deberían depender de una sola: dar de alta a alguien nuevo, cambiar una regla o retirar un permiso.

Lo habitual es que eso se acuerde en una reunión o por mensaje, y que después alguien con la llave del sistema lo aplique. Las demás tienen que confiar en que lo aplicado es lo que se acordó, y en que nadie cambia nada sin ese acuerdo.

## Cómo se resuelve con el protocolo {#solution}

La regla se escribe en un contrato. Por ejemplo: un cambio se aplica solo si lo firman tres de las cinco personas.

El cambio se propone en el contrato. Cada persona lo revisa y, si está de acuerdo, lo aprueba con su propia cuenta. Cuando se reúnen las firmas necesarias, el contrato aplica el cambio. Nadie puede aplicarlo solo, y lo aplicado es exactamente lo que se aprobó.

Cada propuesta, cada aprobación y cada cambio quedan escritos. Cualquiera de esas personas puede revisar después qué se aprobó, quién lo aprobó y cuándo.

## Un ejemplo {#example}

Ana, Bruno y tres personas más llevan camiones a la misma terminal. Comparten la lista de los que pueden entrar. Dar de alta un camión no lo decide una sola.

- **1. Se fija la regla.** El contrato dice que dar de alta o de baja un camión exige la aprobación de tres de las cinco personas.
- **2. Ana propone un alta.** Deja la propuesta con el identificador del camión y la huella de sus papeles.
- **3. Las demás revisan.** Cada persona comprueba los papeles y, si están en orden, aprueba con su cuenta.
- **4. El contrato aplica el cambio.** Con la tercera aprobación, el camión queda habilitado. Quien cuida la entrada consulta el registro y lo deja pasar.
- **5. El historial queda a la vista.** Cualquiera de las cinco puede ver quién propuso y quién aprobó cada alta o baja.

:::diagram[Quién propone, aprueba y aplica el cambio, y qué queda registrado en 42.]{name="carriles-autorizaciones"}
:::

## Qué va en la cadena y qué no {#data}

| En la cadena | Fuera de la cadena |
|---|---|
| La regla de aprobación | La discusión entre las partes |
| Cada propuesta y cada aprobación | La documentación completa |
| El estado vigente del registro | Datos personales de conductores |

## Mecanismos que intervienen {#mechanisms}

- **Cuentas que son contratos.** Una cuenta puede exigir varias firmas antes de actuar. [Cuentas](docs:/protocol/execution#accounts)
- **Contratos.** La regla de aprobación es pública y se aplica igual para todas las personas. [Contratos inteligentes](docs:/protocol/execution#contracts)
- **Firmas.** Cada aprobación queda asociada a la cuenta de quien la dio. [La llave queda fuera de la red](/protocol#accounts)

La red aplica el mismo principio a sus propias reglas: los cambios al protocolo se proponen y se votan en la cadena. [Gobernanza](docs:/protocol/governance)

:::aside
El ejemplo es ilustrativo.
:::
