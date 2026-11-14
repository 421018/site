---
title: "Preguntas frecuentes"
summary: "Respuestas breves sobre la red, el protocolo, el proyecto y el uso de este sitio."
weight: 40
---

## La red y el protocolo {#red}

:::faq[¿Qué es 42 Chain?]
Una red pública de infraestructura que ejecuta el Protocolo 42. Permite que varias organizaciones mantengan un mismo registro y apliquen las mismas reglas, con contratos en la EVM y conexión con otras redes mediante IBC. [Visión general](/protocolo)
:::

:::faq[¿Qué es el Protocolo 42?]
Es el protocolo de la red, y su nombre formal es *Infinite Improbability Drive*. Define las reglas que siguen todos los nodos para llevar un registro compartido, ejecutar contratos, ponerse de acuerdo sobre cada bloque y decidir cambios. Está construido con tecnología abierta del ecosistema Cosmos (Cosmos SDK, CometBFT e IBC) y ejecuta los contratos en la máquina virtual de Ethereum (EVM).
:::

:::faq[¿Necesito permiso para usar la red?]
No. Cualquiera puede usar la red, publicar aplicaciones u operar un nodo sin registrarse ni pedir aprobación.
:::

:::faq[¿Qué es Improbability?]
Es la unidad nativa del protocolo, y su símbolo es 42. Es un recurso técnico: con ella se pagan las tarifas de las transacciones, y los validadores la usan como respaldo en el staking. [Tarifas y emisión](/protocolo/tarifas)
:::

:::faq[¿Cuánto tarda en confirmarse una transacción?]
Segundos. Una vez confirmada, la transacción es definitiva: no puede revertirse.
:::

:::faq[¿Con qué otras redes se conecta?]
Con cualquier red que use el estándar IBC. Cada red comprueba por sí misma lo que ocurre en la otra, sin intermediarios. [Interoperabilidad](/protocolo/interoperabilidad)
:::

## Construir {#construir}

:::faq[¿Qué herramientas de desarrollo puedo usar?]
Las del ecosistema EVM: Solidity, Hardhat, Foundry, Remix, Ethers.js, Viem y billeteras como MetaMask.
:::

:::faq[¿Puedo publicar un contrato que ya escribí para la EVM?]
Sí. Un contrato escrito para la EVM puede publicarse en la red sin cambios en su código.
:::

:::faq[¿Qué diferencia hay entre la red principal y la red de pruebas?]
En la red principal, las transacciones tienen efecto real. La red de pruebas sirve para desarrollar y probar, y usa unidades de prueba sin uso fuera de ella.
:::

:::faq[¿Cómo obtengo unidades de prueba?]
Desde el faucet de la Consola: un servicio que entrega unidades de prueba gratis.
:::

## Nodos, validadores y delegación {#nodos}

:::faq[¿Qué necesito para operar un nodo?]
Un servidor Linux estándar. Los requisitos de cada tipo de nodo están en la guía de nodos de la documentación. [Operar un nodo](/implementar/nodos)
:::

:::faq[¿Cómo se convierte un nodo en validador?]
El nodo se registra como validador con una transacción que incluye unidades en staking. Después, solo entra al conjunto activo si está entre los validadores con más poder de voto.
:::

:::faq[¿Qué es la delegación?]
Una cuenta elige un validador y le delega unidades. Esas unidades aumentan el poder de voto del validador, siguen siendo de quien las delega y comparten las penalizaciones del validador. [Delegación](/protocolo/consenso#delegacion)
:::

## Gobernanza {#gobernanza}

:::faq[¿Cómo se toman las decisiones?]
Cualquiera puede presentar una propuesta, dejando un depósito. Los validadores y las personas que les delegan unidades la votan durante un período fijo. Si la propuesta se aprueba, la red aplica el cambio. [Gobernanza](/protocolo/gobernanza)
:::

:::faq[¿Quién decide los cambios al protocolo?]
Los votos registrados en la cadena. Cualquiera puede proponer cambios, también quienes desarrollan el software, y un cambio se aplica solo si lo aprueban los validadores y quienes les delegan unidades.
:::

## Seguridad {#seguridad}

:::faq[¿Qué pasa si pierdo mi llave privada?]
Pierdes el acceso a tu cuenta. El protocolo no tiene ningún mecanismo para restablecer una llave privada.
:::

:::faq[¿Alguien del proyecto me pedirá mis llaves?]
No. Ningún canal del proyecto te pedirá tu frase de recuperación ni tus llaves privadas. Verifica cualquier anuncio en los [canales del proyecto](/codigo-abierto/verificar#canales).
:::

:::faq[¿Cómo reporto una vulnerabilidad?]
En privado, a los mantenedores del código, nunca en un espacio público. [Reportar una vulnerabilidad](/codigo-abierto/seguridad#reportar)
:::

## El proyecto {#proyecto}

:::faq[¿Quién desarrolla el protocolo?]
Contribuidores que trabajan en abierto, en repositorios públicos. Cualquiera puede sumarse. [Contribuir](/codigo-abierto/contribuir)
:::

:::faq[¿Hay una hoja de ruta?]
No con fecha de término. El protocolo se mantiene y se mejora de forma continua, y cada cambio se decide por gobernanza en la cadena. [Desarrollo continuo](/codigo-abierto#continuo)
:::

:::faq[¿Dónde hago una pregunta técnica?]
En el espacio de discusiones del repositorio público. Está abierto a cualquiera y no tiene costo. [Preguntas técnicas](/codigo-abierto/contribuir#preguntas)
:::

:::faq[¿Hay servicios de implementación a medida?]
Sí, de proveedores independientes, que se contratan directamente con ellos. Ofrecen implementación y asesoría técnica, nunca la venta ni la custodia de activos. [Implementaciones a medida](/implementar/implementaciones)
:::

## Legal y uso del sitio {#legal}

:::faq[¿Este sitio vende o recomienda la unidad nativa?]
No. Este sitio no ofrece, no vende y no recomienda la unidad nativa ni ningún otro activo. Tampoco recomienda plataformas ni intermediarios.
:::

:::faq[¿Quién mantiene este sitio?]
Este sitio y la documentación son mantenidos por contribuidores del Protocolo 42. El código es abierto: cualquiera puede revisarlo, proponer cambios o contribuir. [Sobre este sitio](/legal#independencia)
:::

:::faq[¿Los servicios de terceros que aparecen en el sitio están respaldados por 42 Chain?]
No. Los proveedores de RPC, de exploradores y de implementaciones que se listan en el sitio son independientes, y cada uno responde por su servicio. Que aparezcan en el sitio no implica respaldo.
:::

:::faq[¿Qué datos recopila este sitio?]
Ninguno por su cuenta. El sitio no tiene formularios, no usa cookies ni analítica y sirve todos sus recursos desde el propio sitio. El proveedor de alojamiento procesa datos técnicos de cada visita, como la dirección IP, para entregar las páginas. [Privacidad](/legal#privacidad)
:::
