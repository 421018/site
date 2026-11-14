---
title: "Construir aplicaciones"
summary: "Cómo se arma una aplicación sobre el protocolo, qué aporta la EVM, qué patrones resuelven los problemas habituales de una aplicación de infraestructura y cómo se lleva a producción."
section:
  label: Implementar
  weight: 3
  accent: "#7C9CFF"
  ink: "#3552C8"
  links:
    - { label: "Documentación ↗", href: /docs }
    - { label: "Consola ↗", href: /consola }
---

## Qué es una aplicación sobre la red {#aplicacion}

Una aplicación sobre la red tiene, por lo general, tres partes:

- **Contratos.** Guardan las reglas y los datos que tienen que ser compartidos y verificables. Viven en la cadena.
- **Sistemas de cada organización.** Las interfaces, las bases de datos y los sistemas que ya usa cada parte. Viven fuera de la cadena, como siempre.
- **Firmas.** Cada operación la firma la cuenta de quien la hace: una persona, un sistema o un dispositivo.

No todo tiene que vivir en la cadena. Lo que debe ser verificable y compartido va en los contratos. Lo pesado o lo reservado se queda fuera, y en la cadena se registra su huella.

Por ejemplo, en un registro de certificados, el contrato guarda la huella de cada certificado y quién lo emitió. El documento completo se queda en los sistemas del emisor. Cualquiera puede comprobar, con la huella, que un documento es auténtico.

:::aside
[Casos de uso →](/casos-de-uso) · [Cómo se ejecutan los contratos →](/protocolo/ejecucion)
:::

## La EVM, en la práctica {#evm}

Los contratos se ejecutan en la máquina virtual de Ethereum (EVM). Para quien construye, eso significa tres cosas:

- **Mismo lenguaje.** Los contratos se escriben en Solidity o Vyper.
- **Mismas herramientas.** Los entornos de desarrollo, las librerías y las herramientas de prueba de la EVM funcionan con la red.
- **Mismas billeteras y dispositivos de firma.** Las cuentas se operan con billeteras compatibles con la EVM y con dispositivos de firma como Ledger.

Un contrato escrito para la EVM puede publicarse en la red sin cambios en su código.

## Patrones para aplicaciones de infraestructura {#patrones}

Una aplicación de infraestructura tiene necesidades que no siempre aparecen en otras aplicaciones: dispositivos que firman registros, organizaciones que operan en nombre de otras, usuarios que no deberían manejar unidades. El protocolo ofrece una respuesta para cada una.

### Tarifas a cargo de la organización {#tarifas}

Cada transacción paga una tarifa. En una aplicación de infraestructura, quien firma un registro, como un técnico o un sensor, no debería tener que conseguir unidades para pagarla.

- **Para operaciones con contratos**, el protocolo admite cuentas que delegan su lógica en un contrato (EIP-7702). Así, la persona o el dispositivo firma la operación, y otra cuenta, la de la organización, la envía y paga la tarifa.
- **Para operaciones propias de la red**, como transferencias o votos, una cuenta puede conceder a otra una **asignación de tarifas**: la cuenta que recibe la asignación opera, y las tarifas se descuentan de la cuenta que la concedió, hasta el límite fijado.

### Permisos delegados {#permisos}

Una organización puede autorizar a otra cuenta a hacer ciertas operaciones en su nombre, por ejemplo a un contratista, sin entregarle su llave.

- **En los contratos**, la regla de quién puede hacer qué se escribe en el propio contrato: qué cuentas pueden registrar, aprobar o revocar.
- **En las operaciones propias de la red**, una cuenta puede conceder a otra una **autorización** para un tipo de operación concreto, con o sin fecha de vencimiento, y revocarla en cualquier momento.

### Firmas con passkeys y chips seguros {#firmas}

Además de las firmas habituales de la EVM, los contratos pueden verificar firmas **P-256**: las que producen las passkeys y los chips seguros de teléfonos, computadoras y muchos dispositivos industriales. Combinadas con las tarifas a cargo de la organización, permiten que una persona o un equipo firme un registro con una llave guardada en su propio hardware, sin una billetera dedicada.

### Funciones propias de la red desde los contratos {#funciones}

Los contratos pueden usar directamente las funciones propias del protocolo: consultar y mover unidades nativas, operar con el staking y la gobernanza, enviar transferencias a otras redes y comprobar, con una prueba, datos de otra red. Cada función tiene una dirección fija, y se llama como cualquier otro contrato.

:::aside
[Funciones propias de la red →](/protocolo/ejecucion#nativas) · [Funciones propias de la red y sus direcciones ↗](/docs)
:::

## Red principal y red de pruebas {#redes}

Hay dos redes que ejecutan el mismo protocolo.

La **red de pruebas** sirve para desarrollar y probar. Es pública y usa unidades de prueba, que no tienen uso fuera de ella. Las unidades de prueba se obtienen gratis en la Consola.

La **red principal** es la red donde los registros tienen efecto real.

Como las dos redes ejecutan el mismo protocolo, una aplicación pasa de la red de pruebas a la red principal sin cambiar su código. Solo cambian los parámetros de conexión, que están en [Conectarse a 42 Chain](/implementar/conectarse#parametros).

## De la prueba a la operación {#produccion}

Llevar una aplicación a operación suele seguir cinco pasos:

- **1. Escribir y probar en local.** Los contratos se escriben y se prueban en la propia computadora, con un entorno de desarrollo que simula la red.
- **2. Probar en la red de pruebas.** Las organizaciones que participan conectan sus sistemas a la red de pruebas y la usan en condiciones reales.
- **3. Revisar.** Como un contrato no puede modificarse una vez publicado, los contratos se revisan a fondo antes de pasar a operación y, si son críticos, se auditan.
- **4. Publicar en la red principal.** Los mismos contratos se publican en la red principal, y cada organización conecta sus sistemas.
- **5. Operar.** La aplicación se vigila en funcionamiento. Si hace falta cambiar las reglas, se publica un contrato nuevo y se migra a él, porque el anterior no puede modificarse.

## Herramientas compatibles {#herramientas}

| Categoría | Herramientas |
|---|---|
| Lenguajes | Solidity, Vyper |
| Desarrollo | Hardhat, Foundry, Remix |
| Librerías | Viem, Ethers.js, Web3.js |
| Firma | Billeteras compatibles con la EVM, Ledger, passkeys (P-256) |
| Infraestructura | Nodos RPC, indexadores y oráculos los ofrecen proveedores independientes, cada uno con su propio dominio · [Directorio](/implementar/conectarse#proveedores) |

## Documentación {#soporte}

Los parámetros de cada red y el directorio de proveedores están en [Conectarse a 42 Chain](/implementar/conectarse). Las guías y la referencia técnica completa están en la [documentación](/docs).

Para conectar sistemas existentes, dispositivos u otras redes, consulta [Integrar sistemas](/implementar/integrar). Para un entorno interno conectado a 42 o una integración que requiere trabajo a medida, consulta [Implementaciones a medida](/implementar/implementaciones).
