---
title: "ICS02: comprobar datos de otra red"
summary: "Cómo un contrato comprueba, con el cliente ligero de otra red, que un dato forma parte de su registro."
menuTitle: "ICS02"
weight: 10
---

## Para qué sirve {#purpose}

Con IBC, 42 lleva un **cliente ligero** de cada red con la que está conectada. La función ICS02, en `0x0000000000000000000000000000000000000807`, deja que un contrato use ese cliente ligero directamente: si alguien le presenta un dato de la otra red junto con su prueba, el contrato comprueba que el dato forma parte del registro de esa red.

## Funciones {#functions}

| Función | Qué hace |
|---|---|
| `verifyMembership` | Comprueba, con una prueba, que un valor está en una ruta del registro de la otra red, a una altura dada |
| `verifyNonMembership` | Comprueba, con una prueba, que una ruta no tiene valor en la otra red |
| `updateClient` | Actualiza el cliente ligero con un encabezado nuevo de la otra red |
| `getClientState` | Devuelve el estado del cliente ligero |

`verifyMembership` y `verifyNonMembership` devuelven la marca de tiempo de la altura comprobada en la otra red.

:::aside
Interfaz completa en Solidity: [código fuente de ICS02 en el repositorio del protocolo]
:::
