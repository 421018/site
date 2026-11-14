---
title: "Construir en 42"
summary: "Qué es una aplicación sobre la red, qué se gana con la compatibilidad con la EVM, qué ofrece la red y cómo se lleva una aplicación del código a la red principal."
section:
  label: Desarrolladores
  weight: 2
  accent: "#7C9CFF"
  ink: "#3552C8"
  links:
    - { label: "Documentación ↗", href: /docs }
    - { label: "Consola ↗", href: /consola }
---

## Qué es una aplicación sobre la red {#aplicacion}

Una aplicación sobre la red tiene, por lo general, tres partes:

- **Contratos.** Guardan las reglas y los datos que tienen que ser públicos y verificables. Viven en la cadena.
- **Interfaz.** Es el sitio o la aplicación que usan las personas. Vive fuera de la cadena, como cualquier sitio web.
- **Billetera.** Es la aplicación de cada persona, con la que firma las transacciones que la interfaz le propone.

No todo tiene que vivir en la cadena. Lo que debe ser verificable y compartido va en los contratos. Lo pesado o lo privado puede quedarse fuera.

Por ejemplo, en un registro de certificados, el contrato guarda la huella de cada certificado y quién lo emitió. El documento completo puede guardarse fuera de la cadena. Cualquiera puede comprobar, con la huella, que un documento es auténtico.

:::aside
[Cómo se ejecutan los contratos →](/protocolo/ejecucion)
:::

## La compatibilidad con la EVM, en la práctica {#evm}

La máquina virtual del protocolo sigue la especificación EVM. En la práctica, eso significa tres cosas para quien construye:

- **Mismo lenguaje.** Los contratos se escriben en Solidity, el lenguaje más usado para contratos.
- **Mismas herramientas.** Los entornos de desarrollo, las librerías y las herramientas de prueba de la EVM funcionan con la red.
- **Mismas billeteras.** Las personas pueden usar billeteras compatibles con la EVM que ya conocen.

Quien ya escribió contratos para la EVM puede publicarlos en la red sin cambios en su código.

## Qué ofrece la red {#ofrece}

Además de la compatibilidad con la EVM, la red da a quien construye finalidad en segundos, conexión con otras redes mediante IBC, acceso desde los contratos a funciones propias como el staking y la gobernanza, y la libertad de publicar sin pedir permiso.

:::aside
[Qué permite construir →](/protocolo/que-permite-construir)
:::

## Red principal y red de pruebas {#redes}

Hay dos redes que ejecutan el mismo protocolo.

La **red de pruebas** sirve para desarrollar y probar. Es pública y usa unidades de prueba, que no tienen uso fuera de ella. Las unidades de prueba se obtienen gratis en la Consola.

La **red principal** es la red donde las transacciones tienen efecto real.

Como las dos redes ejecutan el mismo protocolo, una aplicación pasa de la red de pruebas a la red principal sin cambiar su código. Solo cambian los parámetros de conexión. Los parámetros oficiales se publican únicamente en la [documentación](/docs).

## Del código a la red principal {#produccion}

Llevar una aplicación a la red principal suele seguir cinco pasos:

- **1. Escribir y probar en local.** Los contratos se escriben y se prueban en la propia computadora, con un entorno de desarrollo que simula la red.
- **2. Publicar en la red de pruebas.** La aplicación se publica en la red de pruebas y se usa en condiciones reales, con unidades de prueba.
- **3. Revisar.** Como un contrato no puede modificarse una vez publicado, los contratos importantes se revisan a fondo y, si manejan valor, se auditan.
- **4. Publicar en la red principal.** Los mismos contratos se publican en la red principal.
- **5. Operar.** La aplicación se vigila en funcionamiento. Si hace falta un cambio, se publica un contrato nuevo, porque el anterior no puede modificarse.

## Herramientas compatibles {#herramientas}

| Categoría | Herramientas |
|---|---|
| Lenguajes | Solidity, Vyper |
| Desarrollo | Hardhat, Foundry, Remix |
| Librerías | Viem, Ethers.js, Web3.js |
| Billeteras | MetaMask y billeteras EVM · [Billetera nativa] |
| Infraestructura | Nodos RPC, indexadores y oráculos los ofrecen proveedores independientes, cada uno con su propio dominio |

## Documentación y contacto {#soporte}

Las guías, los parámetros de conexión y la referencia técnica completa están en la [documentación](/docs).

Si vas a integrar la red en tu servicio, consulta [Integrar la red](/desarrolladores/integrar). Si quieres contribuir al software del protocolo, consulta [Contribuir al protocolo](/proyecto/equipo#contribuir).
