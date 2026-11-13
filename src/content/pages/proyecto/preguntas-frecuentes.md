---
title: "Preguntas frecuentes"
summary: "Respuestas breves sobre la red, el protocolo, el proyecto y el uso de este sitio."
group: proyecto
slug: proyecto/preguntas-frecuentes
---

## La red y el protocolo {#red}

<details class="faq"><summary>¿Qué es 42 Chain? <span aria-hidden="true" class="pl">+</span></summary><p>Una red pública de cadena de bloques. Su protocolo es de código abierto, compatible con la EVM y se conecta con otras redes mediante IBC. <a class="tx" href="/protocolo">Visión general</a></p></details>

<details class="faq"><summary>¿Qué es el Infinite Improbability Drive? <span aria-hidden="true" class="pl">+</span></summary><p>Es el protocolo de la red: las reglas que siguen todos los nodos para llevar un registro compartido, ejecutar contratos, ponerse de acuerdo sobre cada bloque y decidir cambios.</p></details>

<details class="faq"><summary>¿Quién controla la red? <span aria-hidden="true" class="pl">+</span></summary><p>Ninguna entidad por sí sola. La red la gobierna la DAO, formada por los validadores y las personas que les delegan unidades. La DAO decide mediante propuestas que se votan en la propia red.</p></details>

<details class="faq"><summary>¿Necesito permiso para usar la red? <span aria-hidden="true" class="pl">+</span></summary><p>No. Cualquiera puede usar la red, publicar aplicaciones u operar un nodo sin registrarse ni pedir aprobación.</p></details>

<details class="faq"><summary>¿Qué es Improbability? <span aria-hidden="true" class="pl">+</span></summary><p>Es la unidad nativa del protocolo. Con ella se pagan las tarifas de las transacciones, y los validadores la usan como respaldo en el staking. <a class="tx" href="/protocolo/tarifas">Tarifas y emisión</a></p></details>

<details class="faq"><summary>¿Cuánto tarda en confirmarse una transacción? <span aria-hidden="true" class="pl">+</span></summary><p>Segundos. Una vez confirmada, la transacción es definitiva: no puede revertirse.</p></details>

<details class="faq"><summary>¿Con qué otras redes se conecta? <span aria-hidden="true" class="pl">+</span></summary><p>Con cualquier red que use el estándar IBC. Cada red comprueba por sí misma lo que ocurre en la otra, sin intermediarios. <a class="tx" href="/protocolo/interoperabilidad">Interoperabilidad</a></p></details>

## Construir {#construir}

<details class="faq"><summary>¿Qué herramientas de desarrollo puedo usar? <span aria-hidden="true" class="pl">+</span></summary><p>Las del ecosistema EVM: Solidity, Hardhat, Foundry, Remix, Ethers.js, Viem y billeteras como MetaMask.</p></details>

<details class="faq"><summary>¿Puedo publicar un contrato que ya escribí para la EVM? <span aria-hidden="true" class="pl">+</span></summary><p>Sí. Un contrato escrito para la EVM puede publicarse en la red sin cambios en su código.</p></details>

<details class="faq"><summary>¿Qué diferencia hay entre la red principal y la red de pruebas? <span aria-hidden="true" class="pl">+</span></summary><p>En la red principal, las transacciones tienen efecto real. La red de pruebas sirve para desarrollar y probar, y usa unidades de prueba sin uso fuera de ella.</p></details>

<details class="faq"><summary>¿Cómo obtengo unidades de prueba? <span aria-hidden="true" class="pl">+</span></summary><p>Desde el faucet de la Consola: un servicio que entrega unidades de prueba gratis.</p></details>

## Nodos, validadores y delegación {#nodos}

<details class="faq"><summary>¿Qué necesito para operar un nodo? <span aria-hidden="true" class="pl">+</span></summary><p>Un servidor Linux estándar. Los requisitos de cada tipo de nodo están en la guía de nodos de la documentación. <a class="tx" href="/desarrolladores/nodos">Operar un nodo</a></p></details>

<details class="faq"><summary>¿Cómo se convierte un nodo en validador? <span aria-hidden="true" class="pl">+</span></summary><p>El nodo se registra como validador con una transacción que incluye unidades en staking. Después, solo entra al conjunto activo si está entre los validadores con más poder de voto.</p></details>

<details class="faq"><summary>¿Qué es la delegación? <span aria-hidden="true" class="pl">+</span></summary><p>Una persona elige un validador y le delega unidades. Esas unidades aumentan el poder de voto del validador, pero siguen siendo de la persona.</p></details>

<details class="faq"><summary>¿Puedo perder unidades al delegar? <span aria-hidden="true" class="pl">+</span></summary><p>Sí. Si el validador elegido es penalizado, las unidades delegadas en ese validador también pierden una parte. Por eso conviene revisar el historial de un validador antes de elegirlo. <a class="tx" href="/protocolo/consenso#delegacion">Delegar unidades</a></p></details>

## Gobernanza {#gobernanza}

<details class="faq"><summary>¿Cómo se toman las decisiones? <span aria-hidden="true" class="pl">+</span></summary><p>Cualquiera puede presentar una propuesta, dejando un depósito. Los validadores y las personas que les delegan unidades la votan durante un período fijo. Si la propuesta se aprueba, la red aplica el cambio. <a class="tx" href="/protocolo/gobernanza">Gobernanza</a></p></details>

<details class="faq"><summary>¿Quién decide los cambios al protocolo? <span aria-hidden="true" class="pl">+</span></summary><p>La DAO. Cualquiera puede proponer cambios al software, también quienes lo desarrollan, pero solo la DAO decide si se aplican.</p></details>

<details class="faq"><summary>¿Quién administra el suministro inicial? <span aria-hidden="true" class="pl">+</span></summary><p>La DAO. Su programa de recompensas delega esas unidades a quienes contribuyen al ecosistema, y el protocolo las libera de forma gradual durante 42 años. <a class="tx" href="/protocolo/gobernanza#suministro">El suministro inicial</a></p></details>

## Seguridad {#seguridad}

<details class="faq"><summary>¿Qué pasa si pierdo mi llave privada? <span aria-hidden="true" class="pl">+</span></summary><p>Pierdes el acceso a tu cuenta. Nadie puede restablecer una llave privada: ni quienes desarrollan el protocolo ni la DAO.</p></details>

<details class="faq"><summary>¿Alguien del proyecto me pedirá mis llaves? <span aria-hidden="true" class="pl">+</span></summary><p>Nunca. Nadie del proyecto te pedirá tu frase de recuperación ni tus llaves privadas. Verifica cualquier anuncio en los <a class="tx" href="/proyecto/contacto#canales">canales oficiales</a>.</p></details>

<details class="faq"><summary>¿Cómo reporto una vulnerabilidad? <span aria-hidden="true" class="pl">+</span></summary><p>En privado, por el canal de seguridad indicado en la documentación. <a class="tx" href="/protocolo/seguridad#reportar">Reportar una vulnerabilidad</a></p></details>

## El proyecto {#proyecto}

<details class="faq"><summary>¿Quién desarrolla el protocolo? <span aria-hidden="true" class="pl">+</span></summary><p>Contribuyentes independientes que trabajan en abierto. Cualquiera puede sumarse. <a class="tx" href="/proyecto/equipo">El equipo</a></p></details>

<details class="faq"><summary>¿42 Chain es una empresa? <span aria-hidden="true" class="pl">+</span></summary><p>No. Es un proyecto de código abierto, sin dueño. Cada parte la sostienen participantes independientes: el software, los nodos, los servicios de acceso a la red y este sitio. La red la gobierna la DAO. <a class="tx" href="/proyecto#circulos">Quién sostiene 42 Chain</a></p></details>

<details class="faq"><summary>¿Hay una hoja de ruta? <span aria-hidden="true" class="pl">+</span></summary><p>No con fecha de término. El protocolo se mantiene y se mejora de forma continua, y la DAO decide qué cambia y cuándo. <a class="tx" href="/proyecto#continuo">Desarrollo continuo</a></p></details>

<details class="faq"><summary>¿Dónde se conversa sobre la red? <span aria-hidden="true" class="pl">+</span></summary><p>En los espacios de la comunidad. Son independientes del proyecto, y cada participante habla por sí mismo. <a class="tx" href="/comunidad">Comunidad</a></p></details>

<details class="faq"><summary>¿Cómo integro la red en mi servicio? <span aria-hidden="true" class="pl">+</span></summary><p>Pregunta en Infinite Drive, el chat de la comunidad, o escribe al correo de contacto si prefieres tratarlo en privado. <a class="tx" href="/proyecto/contacto#apoyo">Apoyo técnico</a></p></details>

## Legal y uso del sitio {#legal}

<details class="faq"><summary>¿Este sitio vende o recomienda la unidad nativa? <span aria-hidden="true" class="pl">+</span></summary><p>No. Este sitio no ofrece, no vende y no recomienda la unidad nativa ni ningún otro activo. Tampoco recomienda plataformas ni intermediarios.</p></details>

<details class="faq"><summary>¿Quién opera este sitio? <span aria-hidden="true" class="pl">+</span></summary><p>Nadie en particular. Lo escriben, lo revisan y lo mantienen en línea contribuyentes independientes, como el resto del proyecto. <a class="tx" href="/legal#independencia">Sobre este sitio</a></p></details>

<details class="faq"><summary>¿Este sitio habla en nombre de la DAO? <span aria-hidden="true" class="pl">+</span></summary><p>No. La DAO publica su información en sus propios espacios.</p></details>

<details class="faq"><summary>¿Los proyectos que aparecen en el sitio están respaldados por 42 Chain? <span aria-hidden="true" class="pl">+</span></summary><p>No. Los proyectos, herramientas y comunidades externos se marcan como independientes. Que aparezcan en el sitio no implica respaldo.</p></details>

<details class="faq"><summary>¿Qué datos recopila este sitio? <span aria-hidden="true" class="pl">+</span></summary><p>Casi ninguno. El sitio no pide registro y no usa analítica que identifique a las personas. <a class="tx" href="/legal/privacidad">Privacidad y cookies</a></p></details>
