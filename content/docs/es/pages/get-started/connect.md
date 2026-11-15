---
title: "Conectarse a 42 Chain"
summary: "Todo lo que necesitas para conectar una billetera, una aplicación o un nodo a 42 Chain: los datos de cada red y dónde encontrar un punto de acceso."
icon: connect
menuText: "Parámetros, billeteras y proveedores"
menuTitle: "Conectarse a la red"
weight: 20
---

## Dos redes, el mismo software {#network}

42 Chain funciona en dos redes que ejecutan el mismo software. En la **red principal**, cada transacción tiene efecto real. La **red de pruebas** es para desarrollar y probar sin riesgo: sus unidades no sirven fuera de ella.

Para conectarte a cualquiera de las dos necesitas sus datos y un punto de acceso a un nodo. Elige la red y esta página te muestra solo lo que le corresponde:

:::widget{name="network-switch"}
:::

## Parámetros de red {#parameters}

:::widget{name="network-params"}
:::

### Por qué «infinite» {#infinite}

El identificador técnico de la red es `infinite`, por el nombre formal del protocolo, el Infinite Improbability Drive. Por eso el chain ID nativo empieza por `infinite_`, las direcciones nativas empiezan por `infinite1` y el nombre corto de la red en los registros de cadenas es `infinite`. Es la misma red que 42 Chain: el nombre es para las personas, y el identificador, para las máquinas.

## Añadir la red a una billetera {#wallet}

La forma más rápida es este botón. Tu billetera muestra los datos y te pide confirmación antes de añadir la red:

:::widget{name="add-network"}
:::

También puedes añadirla a mano con cinco datos de la tabla de parámetros: el nombre de la red, el chain ID (EVM), el símbolo, una URL de RPC del [directorio](#providers) o de tu propio nodo y, si quieres, un explorador.

:::note[Comprueba de dónde te conectas]
Una red falsa puede copiar el nombre, el símbolo e incluso el chain ID. Usa solo una URL de RPC del [directorio](#providers) o de tu propio nodo, y comprueba que el chain ID que muestra tu billetera coincide con el de esta página.
:::

## Proveedores de RPC, exploradores y faucets {#providers}

Los puntos de acceso a 42 los ofrecen operadores independientes, cada uno con su propia infraestructura y su propio dominio. Que haya varios es lo que hace resistente el acceso a la red: si uno deja de responder, los demás siguen disponibles, y siempre puedes operar tu propio nodo. Ninguno es un punto de acceso oficial, cada operador responde por su servicio, y aparecer aquí no implica respaldo.

:::widget{name="network-switch"}
:::

:::widget{name="provider-directory"}
:::

[Operar tu propio nodo →](/operate/nodes)

:::aside
Quien opere un servicio público para 42, como un punto de acceso RPC, un explorador o un faucet, puede pedir su inclusión en el directorio escribiendo a [correo de contacto].
:::
