---
title: "Conceptos clave"
summary: "Cuentas, direcciones, unidades y finalidad: lo mínimo para entender el resto de la documentación."
weight: 10
---

## Cuentas y direcciones {#direcciones}

Una cuenta se controla con una llave privada y se identifica con una dirección. En 42, la misma cuenta se puede escribir en dos formatos:

| Formato | Ejemplo | Lo usan |
|---|---|---|
| Hexadecimal (EVM) | `0x…` | Billeteras y herramientas compatibles con la EVM |
| Bech32 (nativo) | `infinite1…` | Billeteras nativas, herramientas del ecosistema Cosmos e IBC |

Los dos formatos corresponden a la misma cuenta y al mismo saldo. El prefijo `infinite` es el identificador técnico de la red, por el nombre formal del protocolo.

## Unidades: drops y cups {#unidades}

La unidad nativa se llama Improbability y su símbolo es 42. Tiene 18 decimales:

| Medida | Equivalencia | Dónde aparece |
|---|---|---|
| Drop | La fracción más pequeña: 10⁻¹⁸ Improbability | En contratos, transacciones e interfaces de la red (`drop`; `tdrop` en la red de pruebas) |
| Cup | 1 Improbability = 10¹⁸ drops | Nombre coloquial de una unidad completa |

Los contratos trabajan siempre en drops, como en cualquier red compatible con la EVM.

## Gas y tarifas {#gas}

Cada operación consume **gas**, una medida del trabajo que exige. La tarifa es el gas consumido por su precio, que tiene una tarifa base ajustada en cada bloque (EIP-1559) y una propina opcional.

## Finalidad {#finalidad}

Un bloque confirmado es definitivo: no hace falta esperar confirmaciones adicionales. Una transacción incluida en un bloque confirmado no puede revertirse.
