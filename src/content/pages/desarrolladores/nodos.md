---
title: "Operar un nodo"
summary: "Qué es un nodo, qué hace su software, qué tipos existen, qué se necesita para operarlo y cómo un nodo se convierte en validador."
weight: 10
---

## Qué es un nodo y para qué operar uno {#que-es}

Un **nodo** es una computadora que ejecuta el protocolo. Guarda una copia del registro, verifica cada bloque nuevo y se comunica con los demás nodos. La red es, literalmente, el conjunto de todos sus nodos.

Cualquiera puede operar un nodo, sin pedir permiso. Hay tres razones habituales para hacerlo:

- **Verificar por cuenta propia.** Quien opera su propio nodo no necesita confiar en un servicio externo para saber el estado de la red: lo comprueba directamente.
- **Dar servicio a aplicaciones.** Las aplicaciones necesitan un nodo para leer datos de la red y enviar transacciones. Muchos proyectos operan su propio nodo para no depender de terceros.
- **Participar en el consenso.** Un nodo puede convertirse en validador y proponer y confirmar bloques, a cambio de una compensación.

## Qué hace el software de un nodo {#software}

El software del nodo es de código abierto y hace cinco tareas de forma continua:

- **Conectarse con otros nodos.** Cada nodo se comunica directamente con otros nodos de la red. No hay un servidor central que los coordine.
- **Compartir transacciones.** Cuando recibe una transacción nueva, el nodo comprueba su firma y la comparte con los demás nodos.
- **Verificar cada bloque.** Cuando llega un bloque, el nodo comprueba las firmas de los validadores y que cada transacción cumpla las reglas.
- **Ejecutar y guardar.** El nodo ejecuta las transacciones del bloque y actualiza su copia del estado.
- **Responder consultas.** El nodo ofrece interfaces para que las aplicaciones y las billeteras lean datos y envíen transacciones. Una de ellas es compatible con las herramientas de la EVM.

## Tipos de nodo {#tipos}

Hay tres tipos de nodo. Se diferencian por lo que guardan y por quién los usa:

- **Nodo completo.** Guarda el estado actual y los bloques recientes. Es el tipo que usan la mayoría de las aplicaciones para leer la red y enviar transacciones.
- **Nodo de archivo.** Guarda el historial completo, desde el bloque génesis. Lo usan los exploradores y los servicios que necesitan consultar datos antiguos. Necesita mucho más almacenamiento.
- **Validador.** Es un nodo completo que además propone y confirma bloques. Necesita unidades en staking y tiene que estar en línea de forma continua.

Para leer la red o dar servicio a una aplicación, basta un nodo completo. Para consultar datos antiguos, hace falta un nodo de archivo. Para participar en el consenso, hace falta un validador.

## Requisitos {#requisitos}

El software del nodo funciona en servidores Linux estándar. No requiere hardware especializado.

Los recursos que necesita dependen del tipo de nodo. El almacenamiento es el que más crece, porque el registro aumenta con cada bloque. Un validador, además, necesita una conexión estable y alta disponibilidad, porque cada momento fuera de línea cuenta.

Los requisitos de procesador, memoria, almacenamiento y conexión de cada tipo de nodo están en la guía de nodos.

:::aparte
[Guía de nodos ↗](/docs)
:::

## Sincronizar un nodo {#sincronizar}

Un nodo nuevo empieza sin datos. Antes de ser útil, tiene que alcanzar al resto de la red hasta el bloque más reciente. A ese proceso se le llama **sincronizar**.

Hay dos formas de sincronizar un nodo:

- **Desde el principio.** El nodo descarga y verifica todos los bloques, desde el bloque génesis. Es la forma más lenta, pero el nodo comprueba por sí mismo toda la historia de la red.
- **Desde una instantánea.** El nodo descarga una copia reciente del estado, llamada instantánea, y verifica que coincida con la red. Desde ahí sigue bloque a bloque. Es mucho más rápida.

## De nodo a validador {#registro}

Un nodo se convierte en validador en tres pasos:

- **1. Sincronizar.** Se instala un nodo completo y se sincroniza con la red hasta el bloque más reciente.
- **2. Registrar.** Se envía una transacción que registra el nodo como validador. Esa transacción incluye las unidades que el validador pone en staking y la comisión que cobrará a sus delegadores.
- **3. Entrar al conjunto activo.** Solo los validadores con más poder de voto forman el conjunto activo. Un validador recién registrado puede necesitar más unidades delegadas antes de entrar.

:::aparte
[Qué es el conjunto activo →](/protocolo/consenso#conjunto)
:::

## Responsabilidades de un validador {#responsabilidades}

Un validador del conjunto activo tiene tres responsabilidades:

- **Disponibilidad.** El nodo tiene que estar en línea. Si deja de firmar bloques durante demasiado tiempo, el protocolo lo penaliza.
- **Seguridad de la llave.** La llave privada del validador tiene que estar protegida. Si alguien la roba, puede provocar una doble firma, que es la falta más grave.
- **Actualización.** El validador tiene que aplicar a tiempo las actualizaciones que aprueba la DAO.

Las penalizaciones también afectan a las unidades que otras personas delegaron en el validador. Por eso las personas que delegan revisan el historial de cada validador antes de elegirlo.

:::aparte
[Penalizaciones →](/protocolo/consenso#penalizaciones)
:::

## Cómo se aplican las actualizaciones {#actualizaciones}

Cuando la DAO aprueba una versión nueva del software, la propuesta fija un bloque futuro, llamado **altura de actualización**. Todos los nodos tienen que cambiar de versión en ese bloque.

Para quien opera un nodo, el proceso tiene tres momentos. Antes de la altura, instala la versión nueva sin activarla. Al llegar a la altura, el nodo se detiene. Entonces arranca con la versión nueva y continúa con la red.

Un nodo que no se actualiza a tiempo deja de seguir a la red: no puede verificar los bloques que se producen con las reglas nuevas.

:::aparte
[Cómo se aprueba una actualización →](/protocolo/gobernanza#ciclo)
:::
