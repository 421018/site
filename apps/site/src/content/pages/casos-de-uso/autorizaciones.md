---
title: "Autorizaciones compartidas"
summary: "Algunos cambios no deberían depender de una sola organización. Así se exige que varias los aprueben, con reglas que todas pueden leer."
menuTitle: "Autorizaciones compartidas"
weight: 40
---

:::figure[Imagen ilustrativa. Foto: Artan, Unsplash.]{ratio="wide"}
![Terminal portuaria con contenedores y camiones](../../../assets/images/casos/autorizaciones.jpg)
:::

## El problema {#problema}

Cuando varias organizaciones comparten un registro, algunos cambios no deberían depender de una sola de ellas: dar de alta a un participante nuevo, cambiar una regla del registro o retirar una autorización.

Lo habitual es que esos cambios se acuerden en una reunión o por correo, y que después alguien con acceso al sistema los aplique. Las demás partes tienen que confiar en que el cambio aplicado es el que se acordó, y en que nadie aplica cambios sin acuerdo.

## Cómo se resuelve con el protocolo {#solucion}

La regla de aprobación se escribe en un contrato. Por ejemplo: un cambio se aplica solo si lo firman tres de las cinco organizaciones del consorcio.

El cambio se propone en el contrato. Cada organización lo revisa y, si está de acuerdo, lo aprueba con su propia cuenta. Cuando se reúnen las aprobaciones necesarias, el contrato aplica el cambio. Ninguna organización puede aplicarlo sola, y el cambio aplicado es exactamente el que se aprobó.

Cada propuesta, cada aprobación y cada cambio aplicado quedan registrados. Cualquier parte puede revisar después qué se aprobó, quién lo aprobó y cuándo.

## Un ejemplo {#ejemplo}

Cinco empresas de transporte comparten un registro de vehículos habilitados para una terminal de carga.

- **1. Se fija la regla.** El contrato del registro establece que dar de alta o de baja un vehículo exige la aprobación de tres de las cinco empresas.
- **2. Una empresa propone un alta.** Registra la propuesta con el identificador del vehículo y la huella de su documentación.
- **3. Las demás revisan.** Cada empresa comprueba la documentación y, si está en orden, aprueba con su cuenta.
- **4. El contrato aplica el cambio.** Con la tercera aprobación, el vehículo queda habilitado en el registro. El sistema de acceso de la terminal consulta el registro y deja pasar al vehículo.
- **5. El historial queda a la vista.** Cualquiera de las empresas puede ver quién propuso y quién aprobó cada alta o baja.

:::diagram[Quién propone, aprueba y aplica el cambio, y qué queda registrado en 42.]{name="carriles-autorizaciones"}
:::

## Qué va en la cadena y qué no {#datos}

| En la cadena | Fuera de la cadena |
|---|---|
| La regla de aprobación | La discusión entre las partes |
| Cada propuesta y cada aprobación | La documentación completa |
| El estado vigente del registro | Datos personales de conductores |

## Mecanismos que intervienen {#mecanismos}

- **Cuentas que son contratos.** Una cuenta puede exigir varias firmas antes de actuar. [Cuentas](/protocolo/ejecucion#cuentas)
- **Contratos.** La regla de aprobación es pública y se aplica igual para todas las partes. [Contratos inteligentes](/protocolo/ejecucion#contratos)
- **Firmas.** Cada aprobación queda asociada a la cuenta de quien la dio. [Cuentas, llaves y firmas](/protocolo#cuentas)

La red aplica el mismo principio a sus propias reglas: los cambios al protocolo se proponen y se votan en la cadena. [Gobernanza](/protocolo/gobernanza)

:::aside
Los ejemplos son ilustrativos.
:::
