---
title: "Coordinación de recursos en tiempo real"
summary: "Varias partes actualizan el estado de un recurso compartido. Cualquiera puede ver el estado actual y el historial sin un centro de control."
category: caso-de-uso
image: ../../images/casos/coordinacion.jpg
alt: "Patio de taller con vehículos y panel de estado compartido"
credit: "Imagen generada"
---

## El problema {#problem}

Cuando varias partes usan o administran el mismo recurso (una flota, un espacio, un inventario, energía), el estado suele vivir en el sistema de quien lo opera. Las demás tienen que confiar en esa información y no pueden verificar el historial fácilmente.

## Cómo se resuelve con el protocolo {#solution}

Cada actualización de estado se registra en la cadena. Todas las copias coinciden. Cualquiera puede ver el estado actual y comprobar qué cambió y cuándo, sin un centro de control.

## Un ejemplo {#example}

Varios equipos comparten vehículos o equipos.

- Cada uso o devolución se registra.
- El estado queda visible para todos.
- Más adelante se puede auditar quién usó qué y cuándo.

El mismo esquema sirve para espacios, inventarios móviles o cualquier recurso que varias partes necesitan coordinar.

:::aside
Base para operar lo compartido sin un centro de control.
:::
