---
title: "Legal y avisos"
summary: "Qué cubren la documentación y la Consola, sin garantías, riesgos de usar la red, privacidad y licencias."
section:
  label: Legal
  weight: 9
  menu: false # only in the footer
---

:::status[Borrador]
Pendiente de revisión legal.
:::

## Carácter de esta documentación {#independence}

Esta documentación es descriptiva: explica cómo funciona el protocolo y cómo usarlo. La operación y las decisiones de cada red que ejecuta el protocolo corresponden a sus validadores mediante gobernanza en la cadena.

Esta documentación y la Consola son mantenidas por contribuidores del Protocolo 42. El código es abierto: cualquiera puede revisarlo, proponer cambios o contribuir. En estos avisos, «los contribuidores» son las personas que escriben, revisan o publican el software del protocolo, la documentación, la Consola o el sitio de 42 Chain.

Esta documentación no ofrece, no vende y no recomienda la unidad nativa de ninguna red ni ningún otro activo, ni plataformas o intermediarios. Nada en esta documentación constituye asesoría financiera, legal, fiscal ni de inversión.

## Sin garantías {#warranties}

El protocolo, su software, la documentación, la Consola y el sitio de 42 Chain se ofrecen **tal cual** y **según su disponibilidad**, sin garantías de ningún tipo, expresas ni implícitas, incluidas las de funcionamiento, de idoneidad para un propósito determinado y de ausencia de errores.

En la medida en que lo permita la ley aplicable, los contribuidores no responden por daños o pérdidas derivados del uso o de la imposibilidad de usar el protocolo, la red, el software, las herramientas o el sitio de 42 Chain, incluidas la pérdida de unidades o de acceso a una cuenta, las interrupciones de la red, los errores del software y las fallas de contratos o servicios de terceros.

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
[Cómo protegerte →](/protocol/security#protect-yourself)
:::

## Privacidad {#privacy}

Esta documentación está hecha para que pase por ella la menor cantidad de datos posible:

- **Sin registro ni formularios.** La documentación no pide datos personales.
- **Sin cookies ni analítica.** No usa cookies ni herramientas de analítica ni de publicidad. Solo guarda en tu navegador dos preferencias, el tema (claro u oscuro) y la red seleccionada, que no salen de él.
- **Búsqueda local.** El índice de búsqueda se descarga del propio sitio y lo que buscas no se envía a ningún servidor.
- **Consultas a la red.** La calculadora de tarifas y la Consola leen datos públicos de la red, como el último bloque o el precio del gas, directamente desde tu navegador a los servicios públicos (RPC) de los proveedores independientes del [directorio](/get-started/connect#providers). Esos proveedores reciben tu dirección IP, como en cualquier conexión, según sus propias políticas. No se envía nada más.
- **Sin otros recursos de terceros.** Las fuentes y los demás recursos se sirven desde el propio sitio. Fuera de esas consultas, el navegador solo se conecta a otro sitio cuando sigues un enlace externo.
- **Alojamiento.** Como cualquier sitio web, el proveedor de alojamiento ([proveedor de alojamiento]) procesa datos técnicos de cada visita, como la dirección IP, para entregar las páginas y protegerlas de abusos, según su propia política de privacidad.

Estas condiciones valen también para la Consola, que solo guarda en tu navegador la red seleccionada.

Todo lo que se registra en la red, como direcciones, transacciones o contratos, es público y permanente, y no puede borrarse. Por eso no conviene registrar datos personales en la cadena. [Qué va dentro y fuera de la cadena](/build/applications#application)

## Licencias {#licenses}

| Qué | Licencia |
|---|---|
| Software del protocolo (el nodo) | Apache License 2.0 |
| Código del sitio, la documentación y la Consola, incluidos su diseño y su interfaz | Apache License 2.0 |
| Textos y datos del sitio, la documentación y la Consola | Creative Commons Atribución 4.0 Internacional (CC BY 4.0) |
| Nombres, logotipos y demás elementos de marca | No se licencian |

Los derechos de autor son de los contribuidores de 42 Chain, que publican su trabajo bajo estas licencias.

### Qué permite la licencia del software

La licencia Apache 2.0 permite a cualquiera usar, estudiar, modificar y distribuir el software, también con fines comerciales, sin pagar regalías. A cambio, quien lo distribuye debe incluir una copia de la licencia, conservar los avisos de derechos de autor y de atribución, e indicar qué archivos modificó. Al ser abierto también el código de la Consola, cualquiera puede comprobar qué se le pide firmar.

### Qué permite la licencia de los textos

Los textos de esta documentación y los datos de la red que publica, como parámetros y listas de proveedores, pueden copiarse, traducirse, adaptarse y publicarse en cualquier medio, también con fines comerciales, siempre que se cite la fuente: el nombre del proyecto y un enlace al sitio o a la página de origen. La licencia no autoriza a sugerir una relación o un respaldo que no existe.

### Las marcas

Ninguna de las dos licencias cubre los nombres 42 Chain e Infinite Drive, el logotipo ni la identidad visual del proyecto; la licencia Apache 2.0 lo dice expresamente. Pueden usarse para referirse al proyecto, pero no para presentar como oficial algo que no lo es ni para sugerir una relación o un respaldo que no existe.

### Software de terceros

El software del protocolo se construye sobre software de código abierto del ecosistema Cosmos, como Cosmos SDK, CometBFT e ibc-go, desarrollado por terceros y publicado también bajo la licencia Apache 2.0. Sus avisos de derechos de autor y de atribución se conservan íntegros en los archivos LICENSE y NOTICE del repositorio público, como exige esa licencia.

:::aside
[Licencia completa (Apache License 2.0)](https://www.apache.org/licenses/LICENSE-2.0) · [Licencia completa (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.es) · [Archivos LICENSE y NOTICE en el repositorio]
:::

## Enlaces y servicios de terceros {#third-parties}

Los validadores, los proveedores de RPC y de exploradores, y las aplicaciones mencionados en esta documentación son independientes y responden por sus propios servicios. Que aparezcan aquí no implica respaldo ni relación comercial.

Los enlaces a sitios externos se ofrecen solo como referencia. Cada sitio externo tiene sus propias condiciones.
