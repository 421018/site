---
title: "Integrar sistemas"
summary: "Tus sistemas no tienen que cambiar para trabajar con la red. Qué necesita cada tipo de integración y dónde están los datos para hacerla."
icon: integrate
menuText: "Sistemas, dispositivos y otras redes"
weight: 20
section:
  label: Integrar
  weight: 3
  accent: "#FFB547"
  ink: "#9A5B00"
  sequential: true
---

## Qué es integrar {#what-is}

Integrar significa conectar a la red un sistema que ya existe, para que lea o escriba en el registro compartido. Por ejemplo, el sistema de gestión de un municipio que registra cada orden de trabajo, un sensor que firma sus lecturas o un explorador que muestra los bloques.

Integrar no requiere permiso ni aprobación. Toda la información necesaria es pública, y las dudas técnicas se resuelven en el repositorio público.

## Tipos de integración {#types}

Cada tipo de integración necesita cosas distintas:

- **Sistemas de gestión.** ERP, sistemas de mantenimiento, registros documentales. Escriben en los contratos y consultan su estado. Necesitan un nodo, propio o de un proveedor, y una cuenta con la que firmar. Si las tarifas deben ir a cargo de la organización, se usan [tarifas a cargo de la organización](/build/applications#fees).
- **Dispositivos.** Sensores, medidores y equipos de campo que firman sus propios registros. Pueden firmar con llaves guardadas en su chip seguro, con [firmas P-256](/build/applications#signatures).
- **Herramientas de firma.** Billeteras y dispositivos de firma compatibles con la EVM, y billeteras nativas del ecosistema Cosmos como Keplr o Leap. Las primeras usan el chain ID EVM; las nativas, el chain ID nativo (`infinite_421018-1`) y el prefijo de dirección `infinite`.
- **Exploradores e indexadores.** Leen todos los bloques y los organizan para consultarlos. Suelen necesitar un nodo de archivo.
- **Otras redes.** Redes compatibles con IBC, incluidos entornos internos conectados a 42 Chain, que intercambian transferencias o comprueban datos entre sí. [Integración entre redes](site:/use-cases/network-integration)

:::aside
[Operar un nodo →](/operate/nodes)
:::

## Qué información necesitas {#data}

Estos son los datos que suele pedir una integración, y dónde se publican:

| Dato | Detalle |
|---|---|
| Identificadores de red | Uno para la red principal y otro para la red de pruebas · [Parámetros de red](/get-started/connect#parameters) |
| Puntos de conexión | Los ofrecen proveedores independientes, o un nodo propio · [Directorio de proveedores](/get-started/connect#providers) |
| Interfaces del nodo | JSON-RPC compatible con la EVM, RPC de CometBFT y gRPC · [Directorio por tipo de servicio](/get-started/connect#providers) |
| Datos de red legibles por máquina | Todos los parámetros, puntos de conexión y exploradores en un archivo JSON · [red principal ↗](https://assets.infinitedrive.xyz/mainnet/network-data.json) · [red de pruebas ↗](https://assets.infinitedrive.xyz/testnet/network-data.json) |
| API de explorador | API de Blockscout para consultar bloques, transacciones y contratos · [red principal ↗](https://scan.infinitedrive.xyz/api-docs) · [red de pruebas ↗](https://testnet-scan.infinitedrive.xyz/api-docs) |
| Unidad y denominación base | Improbability, símbolo 42, 18 decimales · denominación base `drop` (`tdrop` en la red de pruebas) · [Drops y cups](site:/protocol/fees#drops-and-cups) |
| Formatos de dirección | Formato 0x, compatible con la EVM, y formato propio de la red; los dos corresponden a la misma cuenta |
| Finalidad | Un registro es definitivo en cuanto su bloque se confirma; no hacen falta confirmaciones adicionales |
| Funciones propias de la red | Direcciones fijas para usarlas desde contratos · [Funciones propias de la red](/build/precompiles) |

## Cómo es el proceso {#process}

Una integración suele seguir cinco pasos:

- **1. Elegir el tipo de integración.** Cada tipo necesita datos distintos; la tabla de arriba indica dónde está cada uno.
- **2. Probar en la red de pruebas.** La integración se prueba primero en la red de pruebas, con unidades de prueba.
- **3. Resolver dudas.** Si algo no está claro, pregunta en el espacio de discusiones del repositorio público.
- **4. Pasar a la red principal.** Con la integración probada, se conecta a la red principal. Solo cambian los parámetros de conexión.
- **5. Seguir las actualizaciones.** Cuando se aprueba por gobernanza una versión nueva del protocolo, quienes operan nodos los actualizan antes de la altura de actualización. Las notas de cada versión se publican en [Cambios].
