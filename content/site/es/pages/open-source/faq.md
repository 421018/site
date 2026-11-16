---
title: "Preguntas frecuentes"
summary: "Las preguntas que más se hacen sobre 42, con respuestas cortas y enlaces para ir más a fondo."
weight: 40
---

## La red y el protocolo {#network}

:::faq[¿Qué es 42 Chain?]
La red pública que ejecuta el Protocolo 42. Permite que varias personas mantengan el mismo registro y apliquen las mismas reglas, y que cualquiera pueda comprobar el resultado. [Qué es el protocolo](/protocol)
:::

:::faq[¿Para qué sirve 42 Chain?]
Para que varias personas compartan un registro sin que ninguna tenga que custodiarlo sola: un certificado que se comprueba solo, el recorrido de un producto, el historial de una reparación y un acuerdo que no decide una sola persona. Si una sola persona genera y consulta los datos, una base de datos tradicional es más sencilla. [Casos de uso](/use-cases)
:::

:::faq[¿Puedo mantener datos reservados?]
Sí. Los datos reservados se quedan fuera de la cadena, y en la red se registra solo su huella. [Qué va dentro y fuera de la cadena](/use-cases#off-chain)
:::

:::faq[¿Qué es el Protocolo 42?]
Es el protocolo de la red. Su nombre formal es *Infinite Improbability Drive*. Define las reglas que siguen todos los nodos para llevar un registro compartido, aplicar las mismas reglas y decidir cambios a la vista. [Protocolo](/protocol)
:::

:::faq[¿Necesito permiso para usar la red?]
No. Cualquiera puede usar la red, publicar aplicaciones u operar un nodo sin registrarse ni pedir aprobación.
:::

:::faq[¿Qué es Improbability?]
Es la unidad con la que se mueve y se respalda el registro. Su símbolo es 42. Con ella se paga el trabajo de escribir en el registro y se respalda a quienes lo mantienen. La fracción más pequeña se llama drop; una unidad completa, de forma coloquial, cup. [Por qué 42](/open-source#why-42)
:::

:::faq[¿Qué son un drop y una cup?]
Dos nombres de medida de Improbability. Un **drop** es la fracción más pequeña y la denominación base de la red (`drop`, y `tdrop` en la red de pruebas): la unidad tiene 18 decimales, así que una unidad completa son 10¹⁸ drops. **Cup** es el nombre coloquial de una unidad completa, que se usa para hablar de cantidades sin repetir «Improbability». En billeteras y exploradores, la unidad aparece siempre con su símbolo, 42. [Drops y cups](docs:/protocol/fees#drops-and-cups)
:::

:::faq[¿Cuánto tarda en confirmarse una transacción?]
Segundos. Una vez confirmada, la transacción es definitiva: no puede revertirse.
:::

:::faq[¿Con qué otras redes se conecta?]
Con las redes compatibles con IBC con las que se establece una conexión. Cada red comprueba por sí misma lo que ocurre en la otra, sin intermediarios. [Interoperabilidad](docs:/protocol/interoperability)
:::

## Construir {#build}

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
Desde un faucet de la red de pruebas: un servicio que entrega unidades de prueba gratis. [Directorio de proveedores](docs:/get-started/connect#providers)
:::

## Nodos, validadores y delegación {#nodes}

:::faq[¿Qué necesito para operar un nodo?]
Un servidor Linux estándar. Los requisitos de cada tipo de nodo están en la guía de nodos de la documentación. [Operar un nodo](docs:/operate/nodes)
:::

:::faq[¿Cómo se convierte un nodo en validador?]
El nodo se registra como validador con una transacción que incluye unidades en staking. Después, solo entra al conjunto activo si está entre los validadores con más poder de voto.
:::

:::faq[¿Qué es la delegación?]
Una cuenta elige un validador y le delega unidades. Esas unidades aumentan el poder de voto del validador, siguen siendo de quien las delega y comparten las penalizaciones del validador. [Delegación](docs:/protocol/consensus#delegation)
:::

## Gobernanza {#governance}

:::faq[¿Cómo se toman las decisiones?]
Cualquiera puede presentar una propuesta, dejando un depósito. Los validadores y las personas que les delegan unidades la votan durante un período fijo. Si la propuesta se aprueba, la red aplica el cambio. [Gobernanza](docs:/protocol/governance)
:::

:::faq[¿Quién decide los cambios al protocolo?]
Los votos registrados en la cadena. Cualquiera puede proponer cambios, también quienes desarrollan el software, y un cambio se aplica solo si lo aprueban los validadores y quienes les delegan unidades.
:::

## Seguridad {#security}

:::faq[¿Qué pasa si pierdo mi llave privada?]
Pierdes el acceso a tu cuenta. El protocolo no tiene ningún mecanismo para restablecer una llave privada.
:::

:::faq[¿Alguien del proyecto me pedirá mis llaves?]
No. Ningún canal del proyecto te pedirá tu frase de recuperación ni tus llaves privadas. Verifica cualquier anuncio en los [canales del proyecto](/open-source/verify#channels).
:::

:::faq[¿Cómo reporto una vulnerabilidad?]
En privado, a los mantenedores del código, nunca en un espacio público. [Reportar una vulnerabilidad](/open-source/security#report)
:::

## El proyecto {#project}

:::faq[¿Quién desarrolla el protocolo?]
Contribuidores que trabajan en abierto, en repositorios públicos. Cualquiera puede sumarse. [Contribuir](/open-source/contributing)
:::

:::faq[¿Hay una hoja de ruta?]
No con fecha de término. El protocolo se mantiene y se mejora de forma continua, y cada cambio se decide por gobernanza en la cadena. [Desarrollo continuo](/open-source#ongoing)
:::

:::faq[¿Dónde hago una pregunta técnica?]
En el espacio de discusiones del repositorio público. Está abierto a cualquiera y no tiene costo. [Preguntas técnicas](/open-source/contributing#questions)
:::

## Legal y uso del sitio {#legal}

:::faq[¿Este sitio vende o recomienda la unidad nativa?]
No. Este sitio no ofrece, no vende y no recomienda la unidad nativa ni ningún otro activo. Tampoco recomienda plataformas ni intermediarios.
:::

:::faq[¿Quién mantiene este sitio?]
Este sitio y la documentación son mantenidos por contribuidores del Protocolo 42. El código es abierto: cualquiera puede revisarlo, proponer cambios o contribuir. [Sobre este sitio](/legal#independence)
:::

:::faq[¿Los servicios de terceros que aparecen en el sitio están respaldados por 42 Chain?]
No. Los proveedores de RPC y de exploradores que se listan en el sitio son independientes, y cada uno responde por su servicio. Que aparezcan en el sitio no implica respaldo.
:::

:::faq[¿Qué datos recopila este sitio?]
Ninguno por su cuenta. El sitio no tiene formularios, no usa cookies ni analítica y sirve todos sus recursos desde el propio sitio. El proveedor de alojamiento procesa datos técnicos de cada visita, como la dirección IP, para entregar las páginas. [Privacidad](/legal#privacy)
:::
