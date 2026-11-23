---
title: "Legal y avisos"
summary: "Qué es este sitio, quién hace qué, sin garantías, los riesgos de usar la red, privacidad, licencias y servicios de terceros."
section:
  label: Legal
  weight: 1
  menu: false # only in the footer
---

## Carácter de este sitio {#independence}

Este sitio es informativo: presenta el proyecto, explica cómo funciona el protocolo y cómo usarlo, y muestra el estado de la red.

Este sitio no ofrece, no vende y no recomienda la unidad nativa, Improbability (42), ni ningún otro activo digital, ni plataformas o intermediarios. Sus menciones de la unidad nativa son exclusivamente técnicas: explican cómo funciona el protocolo. Nada en él constituye asesoría financiera, legal, fiscal ni de inversión.

## Quién hace qué {#roles}

Los contribuidores son las personas que desarrollan, revisan y publican el código fuente y el contenido del proyecto: el software del protocolo y sus herramientas, y este sitio. Ese es su papel, y lo ejercen en abierto, para que cualquiera pueda revisar el trabajo, proponer cambios o contribuir.

Lo que ocurre en la cadena no está en sus manos:

- **La gobernanza de la red.** Cada red que ejecuta el protocolo la operan sus validadores, y sus reglas solo cambian mediante gobernanza en la cadena: propuestas que votan los validadores y quienes les delegan unidades. Una versión nueva del software llega a una red solo si esa red la aprueba y sus validadores la adoptan. Los contribuidores pueden proponer cambios como cualquiera, pero no los deciden. [Gobernanza](docs:/protocol/governance)
- **Las aplicaciones y los servicios.** Los contratos, las aplicaciones, las billeteras, los proveedores de RPC, los exploradores y los demás servicios construidos sobre la red o a su alrededor son de quienes los construyen y operan, que responden por ellos. Ninguno es oficial. [Servicios de terceros](#third-parties)
- **Las operaciones en la cadena.** Cada transacción la firma y la envía su usuario, que la decide y responde por ella. Los contribuidores no custodian activos ni llaves de nadie, y no pueden revertir transacciones ni recuperar el acceso a una cuenta.

## Sin garantías {#warranties}

El protocolo, su software y este sitio, con su contenido y sus herramientas, se ofrecen **tal cual** y **según su disponibilidad**, sin garantías de ningún tipo, expresas ni implícitas, incluidas las de funcionamiento, de idoneidad para un propósito determinado y de ausencia de errores.

En la medida en que lo permita la ley aplicable, los contribuidores no responden por daños o pérdidas derivados del uso o de la imposibilidad de usar el protocolo, la red, el software, este sitio o sus herramientas, incluidas la pérdida de unidades o de acceso a una cuenta, las interrupciones de la red, los errores del software y las fallas de contratos o servicios de terceros.

:::aside
Esta exclusión es coherente con la licencia del software del protocolo. [Licencias](#licenses)
:::

## Riesgos de uso {#risks}

Usar la red tiene riesgos que conviene entender antes de participar:

- **Pérdida de acceso.** Si se pierden la frase de recuperación o las llaves privadas de una cuenta, no hay forma de recuperar el acceso.
- **Transacciones definitivas.** Una transacción confirmada no puede revertirse.
- **Contratos de terceros.** Los contratos publicados por terceros pueden tener errores o estar hechos para engañar. El protocolo los ejecuta tal como están escritos.
- **Errores en el software.** El software del protocolo se revisa, pero puede contener errores que aún no se han detectado.
- **Actualizaciones.** Las actualizaciones aprobadas por gobernanza pueden requerir que quienes operan nodos o servicios integrados actualicen su software a tiempo.
- **Normativa.** Cada persona y organización es responsable de cumplir las leyes que le apliquen al usar la red y sus herramientas.

:::aside
[Cómo protegerte →](docs:/protocol/security#protect-yourself)
:::

## Privacidad {#privacy}

Este sitio está hecho para que pase por él la menor cantidad de datos posible:

- **Sin registro ni formularios.** No pide datos personales.
- **Sin cookies ni analítica.** No usa cookies ni herramientas de analítica ni de publicidad. Solo guarda en tu navegador algunas preferencias, que no salen de él: el tema (claro u oscuro), la red seleccionada y si cerraste un aviso.
- **Búsqueda local.** El índice de búsqueda se descarga del propio sitio y lo que buscas no se envía a ningún servidor.
- **Consultas a la red.** Las herramientas que muestran la red en vivo leen datos públicos, como el último bloque o el precio del gas, directamente desde tu navegador a los servicios públicos (RPC) de los proveedores independientes del [directorio](docs:/get-started/connect#providers). Esos proveedores reciben tu dirección IP, como en cualquier conexión, según sus propias políticas. No se envía nada más.
- **Sin otros recursos de terceros.** Las fuentes y los demás recursos se sirven desde el propio sitio. Fuera de esas consultas, el navegador solo se conecta a otro sitio cuando sigues un enlace externo o le pides a tu billetera que agregue una red.
- **Alojamiento.** Como cualquier sitio web, el proveedor de alojamiento (Cloudflare) procesa datos técnicos de cada visita, como la dirección IP, para entregar las páginas y protegerlas de abusos, según su propia política de privacidad.

Todo lo que se registra en la red, como direcciones, transacciones o contratos, es público y permanente, y no puede borrarse. Por eso no conviene registrar datos personales en la cadena. [Qué va dentro y fuera de la cadena](docs:/build/applications#application)

## Licencias {#licenses}

| Qué | Licencia |
|---|---|
| Software del protocolo | Apache License 2.0 |
| Código de este sitio, incluidos su diseño, su interfaz y sus herramientas | Apache License 2.0 |
| Textos y datos de este sitio | Creative Commons Atribución 4.0 Internacional (CC BY 4.0) |

Los derechos de autor son de los contribuidores de 42 Chain, que publican su trabajo bajo estas licencias.

### Qué permite la licencia del software

La licencia Apache 2.0 permite a cualquiera usar, estudiar, modificar y distribuir el software, también con fines comerciales, sin pagar regalías. A cambio, quien lo distribuye debe incluir una copia de la licencia, conservar los avisos de derechos de autor y de atribución, e indicar qué archivos modificó. Al ser abierto también el código de este sitio, cualquiera puede comprobar qué piden sus herramientas a su billetera.

### Qué permite la licencia de los textos

Los textos de este sitio y los datos de la red que publica, como parámetros y listas de proveedores, pueden copiarse, traducirse, adaptarse y publicarse en cualquier medio, también con fines comerciales, siempre que se cite la fuente: el nombre del proyecto y un enlace al sitio o a la página de origen. La licencia no autoriza a sugerir una relación o un respaldo que no existe.

### Software de terceros

El software del protocolo, como el código de este sitio, se construye sobre software de código abierto de distintos proyectos y ecosistemas, como los de Cosmos y Ethereum, desarrollado por terceros y publicado bajo sus propias licencias. Sus avisos de derechos de autor y de atribución se conservan en los archivos LICENSE y NOTICE de cada repositorio, como exige cada licencia y según las buenas prácticas del código abierto.

:::aside
[Licencia completa (Apache License 2.0)](https://www.apache.org/licenses/LICENSE-2.0) · [Licencia completa (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.es) · [LICENSE](https://github.com/deep-thought-labs/infinite-app/blob/master/LICENSE) y [NOTICE](https://github.com/deep-thought-labs/infinite-app/blob/master/NOTICE) en el repositorio del protocolo
:::

## Enlaces y servicios de terceros {#third-parties}

Los servicios que aparecen en este sitio, como puntos de acceso RPC, exploradores, faucets, validadores o aplicaciones, aparecen solo a título informativo. Figuran porque forman parte de un repositorio abierto de datos de la red, en el que cualquiera puede proponer agregar, modificar o quitar una entrada. El único propósito de ese listado es mantener un catálogo comunitario de los servicios disponibles alrededor de la red.

Ningún servicio alrededor del proyecto es oficial, ni debe considerarse oficial. Aparecer en este sitio no convierte a un servicio en oficial, recomendado ni garantizado, ni implica relación alguna con los contribuidores. Todos son iguales: iniciativas voluntarias y comunitarias, cada una operada por quien la ofrece, bajo su propia responsabilidad y sus propias condiciones.

Cada participante decide cómo mantiene, nombra y comparte sus servicios. Los contribuidores no restringen, controlan ni influyen en nada de ello, y el nombre de un servicio, sea cual sea, no lo vuelve oficial. El orden en que aparecen es el que está configurado en ese repositorio y no es una clasificación: cuando una herramienta necesita uno, empieza por el primero de la lista y te deja elegir cualquier otro.

Los enlaces a sitios externos se ofrecen solo como referencia. Cada sitio externo tiene sus propias condiciones.
