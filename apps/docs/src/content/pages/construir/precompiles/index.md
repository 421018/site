---
title: "Funciones propias de la red"
summary: "Las funciones del protocolo que un contrato puede llamar en una dirección fija, como si fueran otro contrato."
menuTitle: "Funciones propias"
weight: 10
---

## Qué son {#que-son}

Además de la EVM, el protocolo tiene funciones propias: staking, distribución, gobernanza, saldos nativos, transferencias entre redes y verificación de pruebas de otras redes. No son contratos que alguien publicó: forman parte del protocolo. A estas funciones también se les llama **precompiles**.

Un contrato las llama como a cualquier otro contrato, en una dirección fija y con una interfaz en Solidity.

## Direcciones {#direcciones}

| Función | Dirección | Para qué sirve |
|---|---|---|
| P-256 | `0x0000000000000000000000000000000000000100` | Verificar firmas P-256 (passkeys y chips seguros) |
| Bech32 | `0x0000000000000000000000000000000000000400` | Convertir direcciones entre el formato `0x…` y `infinite1…` |
| Staking | `0x0000000000000000000000000000000000000800` | Delegar, retirar delegaciones y operar validadores |
| Distribución | `0x0000000000000000000000000000000000000801` | Consultar y retirar compensaciones; fondo comunitario |
| ICS20 | `0x0000000000000000000000000000000000000802` | Transferencias entre redes por IBC |
| Bank | `0x0000000000000000000000000000000000000804` | Saldos de unidades nativas con interfaz tipo ERC20 |
| Gobernanza | `0x0000000000000000000000000000000000000805` | Propuestas y votos |
| Slashing | `0x0000000000000000000000000000000000000806` | Penalizaciones de validadores |
| ICS02 | `0x0000000000000000000000000000000000000807` | Clientes ligeros: comprobar datos de otra red |

Las unidades nativas también tienen una dirección ERC20 propia, distinta para cada unidad.

:::aside
Las interfaces completas de cada función están en el código fuente del protocolo. [Repositorio público]
:::
