---
title: "Seguridad y reportes"
summary: "Si encuentras un fallo en el código, este es el camino para reportarlo sin ponerlo al alcance de quien podría aprovecharlo."
menuTitle: "Seguridad y reportes"
weight: 20
---

## Reportar una vulnerabilidad {#report}

Si encuentras una vulnerabilidad en el software del protocolo, en la Consola o en este sitio, repórtala **en privado** a los mantenedores del código:

- Por el sistema de reportes privados del repositorio afectado, o
- Por correo a [correo de seguridad].

No la publiques ni la reportes en un espacio público hasta que esté corregida. Publicarla antes permitiría que otros la aprovecharan.

## Qué incluir {#include}

Para que el reporte pueda evaluarse, describe:

- **Qué encontraste.** El componente afectado y la versión.
- **Cómo reproducirlo.** Los pasos, y el código o las transacciones necesarias.
- **Qué impacto podría tener.** Qué podría hacer quien la aprovechara.

Los reportes se tratan con confidencialidad. No hay plazos de respuesta garantizados.

## Divulgación responsable {#disclosure}

Quien investiga la seguridad del protocolo de buena fe reporta lo que encuentra por este canal, no aprovecha la vulnerabilidad, no la publica antes de que se corrija y no afecta a otras personas ni a la red.

Una vez corregida, lo ocurrido se publica en los avisos de seguridad, y se reconoce el aporte de quien la reportó, si así lo desea.

:::aside
[Avisos de seguridad ↗](/docs) · [Cómo está diseñada la seguridad del protocolo →](/protocol/security)
:::

## Para qué no sirve este canal {#scope}

Este canal es solo para vulnerabilidades del código. No atiende:

- **Soporte de la red.** Para preguntas técnicas, usa el [espacio de discusiones del repositorio](/open-source/contributing#questions).
- **Cuentas o unidades.** Nadie puede restablecer una llave privada ni revertir una transacción confirmada, y este canal no gestiona cuentas, unidades ni fondos de nadie.
- **Servicios de terceros.** Las billeteras, los proveedores de RPC, los exploradores y las aplicaciones responden por sus propios servicios.

:::note[Nadie te pedirá tus llaves]
Ningún canal del proyecto te pedirá tu frase de recuperación, tus llaves privadas ni que envíes unidades para «verificar» una cuenta. Quien lo pide intenta engañarte. [Cómo protegerte](/protocol/security#protect-yourself)
:::
