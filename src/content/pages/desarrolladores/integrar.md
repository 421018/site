---
title: "Integrar la red"
summary: "Qué tipos de integración existen, qué información necesita cada una y cómo es el proceso."
weight: 20
---

## Qué es integrar la red {#que-es}

Integrar la red significa conectar un servicio a ella para ofrecerla a sus propios usuarios. Por ejemplo, una billetera que permite usar cuentas de la red, una plataforma que acepta depósitos y retiros de la unidad nativa, un explorador que muestra sus bloques o un sitio que publica sus datos.

Integrar la red no requiere permiso ni aprobación. Toda la información necesaria es pública, y las dudas técnicas se resuelven en el repositorio público.

## Tipos de integración {#tipos}

Cada tipo de integración necesita cosas distintas:

- **Billeteras.** Crean cuentas, firman transacciones y muestran saldos. Necesitan conocer los formatos de dirección de la red y cómo conectarse a un nodo.
- **Plataformas que guardan unidades de sus usuarios.** Por ejemplo, exchanges o servicios de custodia. Reciben depósitos y procesan retiros. Necesitan saber cuándo una transacción es definitiva.
- **Exploradores e indexadores.** Leen todos los bloques y los presentan o los organizan para consultarlos. Suelen necesitar un nodo de archivo.
- **Sitios de datos.** Publican información de la red, como su nombre, su unidad nativa o su suministro. Necesitan los parámetros de la red y enlaces a los canales del proyecto.
- **Infraestructura.** Por ejemplo, proveedores de acceso a nodos. Operan nodos y los ponen al servicio de otras aplicaciones.

:::aside
[Operar un nodo →](/desarrolladores/nodos)
:::

## Qué información necesitas {#datos}

Estos son los datos que suele pedir una integración, y dónde se publican:

| Dato | Detalle |
|---|---|
| Identificadores de red | Uno para la red principal y otro para la red de pruebas · [Parámetros de red](/desarrolladores/conectarse#parametros) |
| Puntos de conexión | Los ofrecen proveedores independientes, o un nodo propio · [Directorio de proveedores](/desarrolladores/conectarse#proveedores) |
| Formatos de dirección | Formato 0x, compatible con la EVM, y formato propio de la red; los dos corresponden a la misma cuenta |
| Unidad nativa | Improbability · símbolo 42 · [Decimales](/desarrolladores/conectarse#parametros) |
| Finalidad | Una transacción es definitiva en cuanto su bloque se confirma; no hacen falta confirmaciones adicionales |
| Emisión | Emisión por bloque · [en la documentación] |
| Canales oficiales | Para enlazar desde el servicio · [Canales oficiales](/proyecto/contacto#canales) |

:::aside
[Guías de integración ↗](/docs)
:::

## Cómo es el proceso {#proceso}

Una integración suele seguir cinco pasos:

- **1. Revisar la documentación.** La sección de integración de la documentación explica cada tipo de integración paso a paso.
- **2. Probar en la red de pruebas.** La integración se prueba primero en la red de pruebas, con unidades de prueba.
- **3. Resolver dudas.** Si algo no está claro, pregunta en el espacio de discusiones del repositorio público o escribe al correo de contacto.
- **4. Pasar a la red principal.** Con la integración probada, se conecta a la red principal. Solo cambian los parámetros de conexión.
- **5. Seguir las actualizaciones.** Cuando se aprueba por gobernanza una versión nueva del protocolo, los servicios integrados actualizan sus nodos antes de la altura de actualización. Las notas de cada versión se publican en la documentación.

## Contacto técnico {#contacto}

Los canales para dudas técnicas sobre una integración están en [Contacto y soporte](/proyecto/contacto#apoyo).

La ayuda técnica es voluntaria. No habla en nombre de otros proyectos y no incluye acuerdos comerciales.
