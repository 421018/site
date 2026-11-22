---
title: "Legal y avisos"
summary: "Para todo 42chain.org (el sitio, la documentación y la Consola): qué es, sin garantías, riesgos de usar la red, privacidad y licencias."
section:
  label: Legal
  weight: 1
  menu: false # only in the footer
---

:::status[Borrador]
Pendiente de revisión legal.
:::

Estos avisos cubren todo 42chain.org: el sitio, la [documentación](docs:/) y la [Consola](console:/).

## Carácter de este sitio {#independence}

42chain.org es informativo: presenta el proyecto, explica cómo funciona el protocolo y cómo usarlo, y muestra el estado de la red.

42chain.org no ofrece, no vende y no recomienda la unidad nativa, Improbability (42), ni ningún otro activo digital, ni plataformas o intermediarios. Sus menciones de la unidad nativa son exclusivamente técnicas: explican cómo funciona el protocolo. Nada en él constituye asesoría financiera, legal, fiscal ni de inversión.

## Quién hace qué {#roles}

Los contribuidores mantienen código fuente: el software del protocolo (el nodo) y el código de 42chain.org. Ese es su papel. Lo publican en abierto, para que cualquiera pueda revisarlo, proponer cambios o contribuir. En estos avisos, «los contribuidores» son las personas que escriben, revisan o publican ese código, el sitio, la documentación o la Consola.

Lo que ocurre en la cadena no está en sus manos:

- **La gobernanza de la red.** Cada red que ejecuta el protocolo la operan sus validadores, y sus reglas solo cambian mediante gobernanza en la cadena: propuestas que votan los validadores y quienes les delegan unidades. Una versión nueva del software llega a una red solo si esa red la aprueba y sus validadores la adoptan. Los contribuidores pueden proponer cambios como cualquiera, pero no los deciden. [Gobernanza](docs:/protocol/governance)
- **Las aplicaciones y los servicios.** Los contratos, las aplicaciones, las billeteras, los proveedores de RPC, los exploradores y los demás servicios construidos sobre la red o a su alrededor son de quienes los construyen y operan, que responden por ellos.
- **Las operaciones en la cadena.** Cada transacción la firma y la envía su usuario, que la decide y responde por ella. Los contribuidores no custodian unidades ni llaves de nadie, y no pueden revertir transacciones ni recuperar el acceso a una cuenta.

## Sin garantías {#warranties}

El protocolo, su software, el sitio, la documentación y la Consola se ofrecen **tal cual** y **según su disponibilidad**, sin garantías de ningún tipo, expresas ni implícitas, incluidas las de funcionamiento, de idoneidad para un propósito determinado y de ausencia de errores.

En la medida en que lo permita la ley aplicable, los contribuidores no responden por daños o pérdidas derivados del uso o de la imposibilidad de usar el protocolo, la red, el software, las herramientas o 42chain.org, incluidas la pérdida de unidades o de acceso a una cuenta, las interrupciones de la red, los errores del software y las fallas de contratos o servicios de terceros.

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

42chain.org está hecho para que pase por él la menor cantidad de datos posible:

- **Sin registro ni formularios.** Ninguna parte del sitio pide datos personales.
- **Sin cookies ni analítica.** No usa cookies ni herramientas de analítica ni de publicidad. Solo guarda en tu navegador algunas preferencias, que no salen de él: el tema de la documentación (claro u oscuro), la red seleccionada y si cerraste el aviso de la documentación.
- **Búsqueda local.** El índice de búsqueda de la documentación se descarga del propio sitio y lo que buscas no se envía a ningún servidor.
- **Consultas a la red.** La portada, el panel en vivo de la documentación, la calculadora de tarifas y la Consola leen datos públicos de la red, como el último bloque o el precio del gas, directamente desde tu navegador a los servicios públicos (RPC) de los proveedores independientes del [directorio](docs:/get-started/connect#providers). Esos proveedores reciben tu dirección IP, como en cualquier conexión, según sus propias políticas. No se envía nada más.
- **Sin otros recursos de terceros.** Las fuentes y los demás recursos se sirven desde el propio sitio. Fuera de esas consultas, el navegador solo se conecta a otro sitio cuando sigues un enlace externo o le pides a tu billetera que agregue una red.
- **Alojamiento.** Como cualquier sitio web, el proveedor de alojamiento (Cloudflare) procesa datos técnicos de cada visita, como la dirección IP, para entregar las páginas y protegerlas de abusos, según su propia política de privacidad.

Todo lo que se registra en la red, como direcciones, transacciones o contratos, es público y permanente, y no puede borrarse. Por eso no conviene registrar datos personales en la cadena. [Qué va dentro y fuera de la cadena](docs:/build/applications#application)

## Licencias {#licenses}

| Qué | Licencia |
|---|---|
| Software del protocolo (el nodo) | Apache License 2.0 |
| Código del sitio, la documentación y la Consola, incluidos su diseño y su interfaz | Apache License 2.0 |
| Textos y datos del sitio, la documentación y la Consola | Creative Commons Atribución 4.0 Internacional (CC BY 4.0) |

Los derechos de autor son de los contribuidores de 42 Chain, que publican su trabajo bajo estas licencias.

### Qué permite la licencia del software

La licencia Apache 2.0 permite a cualquiera usar, estudiar, modificar y distribuir el software, también con fines comerciales, sin pagar regalías. A cambio, quien lo distribuye debe incluir una copia de la licencia, conservar los avisos de derechos de autor y de atribución, e indicar qué archivos modificó. Al ser abierto también el código del sitio y de la Consola, cualquiera puede comprobar qué le piden a su billetera.

### Qué permite la licencia de los textos

Los textos de 42chain.org y los datos de la red que publica, como parámetros y listas de proveedores, pueden copiarse, traducirse, adaptarse y publicarse en cualquier medio, también con fines comerciales, siempre que se cite la fuente: el nombre del proyecto y un enlace al sitio o a la página de origen. La licencia no autoriza a sugerir una relación o un respaldo que no existe.

### Software de terceros

El software del protocolo se construye sobre software de código abierto del ecosistema Cosmos, como Cosmos SDK, CometBFT e ibc-go, desarrollado por terceros y publicado también bajo la licencia Apache 2.0. Sus avisos de derechos de autor y de atribución se conservan íntegros en los archivos LICENSE y NOTICE del repositorio público, como exige esa licencia.

:::aside
[Licencia completa (Apache License 2.0)](https://www.apache.org/licenses/LICENSE-2.0) · [Licencia completa (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.es) · [LICENSE](https://github.com/deep-thought-labs/infinite-app/blob/master/LICENSE) y [NOTICE](https://github.com/deep-thought-labs/infinite-app/blob/master/NOTICE) en el repositorio del protocolo
:::

## Enlaces y servicios de terceros {#third-parties}

Los validadores, los proveedores de RPC y de exploradores, y las aplicaciones mencionados en 42chain.org son independientes y responden por sus propios servicios. Que aparezcan aquí no implica respaldo ni relación comercial.

Los enlaces a sitios externos se ofrecen solo como referencia. Cada sitio externo tiene sus propias condiciones.
