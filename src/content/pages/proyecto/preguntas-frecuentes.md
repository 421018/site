---
title: "Preguntas frecuentes"
summary: "Respuestas breves sobre la red, el protocolo, el proyecto y el uso de este sitio."
weight: 40
---

## La red y el protocolo {#red}

:::faq[¿Qué es 42 Chain?]
Una red pública de cadena de bloques. Su protocolo es de código abierto, compatible con la EVM y se conecta con otras redes mediante IBC. [Visión general](/protocolo)
:::

:::faq[¿Qué es el Infinite Improbability Drive?]
Es el protocolo de la red: las reglas que siguen todos los nodos para llevar un registro compartido, ejecutar contratos, ponerse de acuerdo sobre cada bloque y decidir cambios.
:::

:::faq[¿Quién controla la red?]
Ninguna entidad por sí sola. La red la gobierna la DAO, formada por los validadores y las personas que les delegan unidades. La DAO decide mediante propuestas que se votan en la propia red.
:::

:::faq[¿Necesito permiso para usar la red?]
No. Cualquiera puede usar la red, publicar aplicaciones u operar un nodo sin registrarse ni pedir aprobación.
:::

:::faq[¿Qué es Improbability?]
Es la unidad nativa del protocolo. Con ella se pagan las tarifas de las transacciones, y los validadores la usan como respaldo en el staking. [Tarifas y emisión](/protocolo/tarifas)
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
Un servidor Linux estándar. Los requisitos de cada tipo de nodo están en la guía de nodos de la documentación. [Operar un nodo](/desarrolladores/nodos)
:::

:::faq[¿Cómo se convierte un nodo en validador?]
El nodo se registra como validador con una transacción que incluye unidades en staking. Después, solo entra al conjunto activo si está entre los validadores con más poder de voto.
:::

:::faq[¿Qué es la delegación?]
Una persona elige un validador y le delega unidades. Esas unidades aumentan el poder de voto del validador, pero siguen siendo de la persona.
:::

:::faq[¿Puedo perder unidades al delegar?]
Sí. Si el validador elegido es penalizado, las unidades delegadas en ese validador también pierden una parte. Por eso conviene revisar el historial de un validador antes de elegirlo. [Delegar unidades](/protocolo/consenso#delegacion)
:::

## Gobernanza {#gobernanza}

:::faq[¿Cómo se toman las decisiones?]
Cualquiera puede presentar una propuesta, dejando un depósito. Los validadores y las personas que les delegan unidades la votan durante un período fijo. Si la propuesta se aprueba, la red aplica el cambio. [Gobernanza](/protocolo/gobernanza)
:::

:::faq[¿Quién decide los cambios al protocolo?]
La DAO. Cualquiera puede proponer cambios al software, también quienes lo desarrollan, pero solo la DAO decide si se aplican.
:::

:::faq[¿Quién administra el suministro inicial?]
La DAO. Su programa de recompensas delega esas unidades a quienes contribuyen al ecosistema, y el protocolo las libera de forma gradual durante 42 años. [El suministro inicial](/protocolo/gobernanza#suministro)
:::

## Seguridad {#seguridad}

:::faq[¿Qué pasa si pierdo mi llave privada?]
Pierdes el acceso a tu cuenta. Nadie puede restablecer una llave privada: ni quienes desarrollan el protocolo ni la DAO.
:::

:::faq[¿Alguien del proyecto me pedirá mis llaves?]
Nunca. Nadie del proyecto te pedirá tu frase de recuperación ni tus llaves privadas. Verifica cualquier anuncio en los [canales oficiales](/proyecto/contacto#canales).
:::

:::faq[¿Cómo reporto una vulnerabilidad?]
En privado, por el canal de seguridad indicado en la documentación. [Reportar una vulnerabilidad](/protocolo/seguridad#reportar)
:::

## El proyecto {#proyecto}

:::faq[¿Quién desarrolla el protocolo?]
Contribuidores independientes que trabajan en abierto. Cualquiera puede sumarse. [El equipo](/proyecto/equipo)
:::

:::faq[¿42 Chain es una empresa?]
No. Es un proyecto de código abierto, sin dueño. Cada parte la sostienen participantes independientes: el software, los nodos, los servicios de acceso a la red y este sitio. La red la gobierna la DAO. [Quién sostiene 42 Chain](/proyecto#circulos)
:::

:::faq[¿Hay una hoja de ruta?]
No con fecha de término. El protocolo se mantiene y se mejora de forma continua, y la DAO decide qué cambia y cuándo. [Desarrollo continuo](/proyecto#continuo)
:::

:::faq[¿Cómo integro la red en mi servicio?]
Pregunta en el espacio de discusiones del repositorio público, o escribe al correo de contacto si prefieres tratarlo en privado. [Apoyo técnico](/proyecto/contacto#apoyo)
:::

## Legal y uso del sitio {#legal}

:::faq[¿Este sitio vende o recomienda la unidad nativa?]
No. Este sitio no ofrece, no vende y no recomienda la unidad nativa ni ningún otro activo. Tampoco recomienda plataformas ni intermediarios.
:::

:::faq[¿Quién opera este sitio?]
Nadie en particular. Lo escriben, lo revisan y lo mantienen en línea contribuidores independientes, como el resto del proyecto. [Sobre este sitio](/legal#independencia)
:::

:::faq[¿Este sitio habla en nombre de la DAO?]
No. La DAO publica su información en sus propios espacios.
:::

:::faq[¿Los servicios de terceros que aparecen en el sitio están respaldados por 42 Chain?]
No. Los proveedores de RPC y de exploradores que se listan en el sitio son independientes, y cada uno responde por su servicio. Que aparezcan en el sitio no implica respaldo.
:::

:::faq[¿Qué datos recopila este sitio?]
Casi ninguno. El sitio no pide registro y no usa analítica que identifique a las personas. [Privacidad y cookies](/legal/privacidad)
:::
