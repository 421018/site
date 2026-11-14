---
title: "Conectarse a 42 Chain"
summary: "Los parámetros técnicos de la red principal y de la red de pruebas, cómo añadir la red a una billetera y dónde encontrar proveedores de RPC y exploradores."
menuTitle: "Conectarse a la red"
weight: 5
---

## La red y el protocolo {#red}

42 Chain es una red pública que ejecuta el protocolo. Hay dos redes con el mismo software: la **red principal**, donde las transacciones tienen efecto real, y la **red de pruebas**, que sirve para desarrollar y probar con unidades sin uso fuera de ella.

Para conectarse a cualquiera de las dos hacen falta dos cosas: sus parámetros, que identifican la red, y un punto de conexión a un nodo, que ofrece un proveedor o que se obtiene operando un nodo propio.

## Parámetros de red {#parametros}

| Parámetro | Red principal | Red de pruebas |
|---|---|---|
| Nombre de la red | 42 Chain | [nombre de la red de pruebas] |
| Chain ID (EVM) | [chain ID] | [chain ID] |
| Chain ID (nativo) | [chain ID nativo] | [chain ID nativo] |
| Unidad nativa | Improbability · símbolo 42 | Improbability de prueba · [símbolo] |
| Decimales | [decimales] | [decimales] |
| Prefijo de dirección nativa | [prefijo] | [prefijo] |
| Tiempo de bloque | ~2 s | ~2 s |

Los parámetros vigentes y su historial están en la [referencia técnica](/docs).

## Añadir la red a una billetera {#billetera}

Las billeteras compatibles con la EVM, como MetaMask, permiten añadir una red a mano con cinco datos:

- **Nombre de la red.** El de la tabla de parámetros.
- **URL de RPC.** La de un proveedor del [directorio](#proveedores) o la de un nodo propio.
- **Chain ID.** El chain ID (EVM) de la red que quieres usar.
- **Símbolo.** 42 en la red principal, o el de la red de pruebas.
- **Explorador.** La dirección de un explorador del [directorio](#proveedores). Es opcional.

Las unidades de la red de pruebas se obtienen gratis en el faucet de la [Consola](/consola).

:::note[Comprueba de dónde te conectas]
Una red falsa puede copiar el nombre, el símbolo e incluso el chain ID. Usa solo una URL de RPC del [directorio](#proveedores) o de un nodo propio, y comprueba que el chain ID que muestra tu billetera coincide con el de esta página.
:::

## Proveedores de RPC y exploradores {#proveedores}

Los puntos de conexión y los exploradores los operan proveedores independientes, cada uno con su propio dominio. Ninguno es un punto de conexión oficial de la red, y cada proveedor responde por su servicio. Que aparezcan aquí no implica respaldo.

| Proveedor | Servicio | Red | Dirección |
|---|---|---|---|
| [Proveedor] _Independiente_{.badge} | RPC (EVM) | Red principal | [URL] |
| [Proveedor] _Independiente_{.badge} | RPC (EVM) | Red de pruebas | [URL] |
| [Proveedor] _Independiente_{.badge} | Explorador | Red principal | [URL] |

Para no depender de un proveedor, cualquiera puede operar su propio nodo y conectarse a él. [Operar un nodo →](/implementar/nodos)

:::aside
Los proveedores que quieran aparecer en el directorio pueden proponerlo en el repositorio público, como cualquier otro cambio al sitio.
:::
