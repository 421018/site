---
title: "Seguridad"
summary: "Qué protege el diseño del protocolo, bajo qué condición lo hace y qué queda en manos de cada persona."
icon: security
menuText: "Protecciones en capas"
weight: 60
---

## Qué significa que la red sea segura {#basis}

La seguridad de una red no es una sola cosa. Es un conjunto de propiedades de diseño: comportamientos que las reglas del protocolo buscan mantener aunque algunos participantes fallen o actúen mal.

Esas propiedades dependen de una condición. La condición principal es que los validadores que fallan o actúan mal sumen menos de un tercio del poder de voto. A esa condición se le llama **supuesto de seguridad**. Si deja de cumplirse, las propiedades pueden dejar de cumplirse también.

Conocer las propiedades ayuda a entender cómo funciona la red. Conocer sus límites ayuda a saber qué cuidar por cuenta propia.

## Cómo está diseñado el protocolo {#design}

Mientras se cumple el supuesto de seguridad, el protocolo está diseñado para que:

- **El registro no pueda alterarse.** Cada bloque guarda la huella del anterior. Si alguien cambia una transacción pasada, la huella deja de coincidir y los nodos lo detectan.
- **Una transacción confirmada sea definitiva.** El consenso confirma cada bloque en un solo paso. Una vez confirmado, el bloque no se reemplaza por otro.
- **Solo la llave privada mueva una cuenta.** Cada transacción lleva una firma hecha con la llave privada de la cuenta. Sin esa firma, la red rechaza la transacción, venga de quien venga.
- **Las reglas sean iguales para todos.** Todas las transacciones se procesan con las mismas reglas. Ninguna cuenta ni aplicación tiene privilegios, y las reglas solo cambian mediante una actualización que se aprueba por gobernanza.
- **Cualquiera pueda comprobarlo.** Cualquiera puede ejecutar un nodo, repetir cada transacción y comprobar por su cuenta el estado de la red.

:::diagram[Capas de protección: cada una cubre lo que las demás no pueden.]{name="capas-seguridad"}
:::

:::aside
[El supuesto de seguridad en el consenso →](/protocol/consensus)
:::

## Límites del protocolo {#limits}

Algunas cosas quedan fuera del alcance del protocolo. Conocerlas es parte de usar la red con cuidado:

- **Llaves perdidas o robadas.** Si una persona pierde su llave privada, nadie puede recuperar el acceso a su cuenta. Si alguien se la roba, puede mover lo que hay en ella. El protocolo no distingue a una persona de quien tenga su llave.
- **Contratos de terceros.** Cualquiera puede publicar un contrato. Un contrato puede tener errores o estar hecho para engañar. El protocolo ejecuta los contratos tal como están escritos; no revisa sus intenciones.
- **Otras redes.** Una conexión con otra red depende de la seguridad de esa red. Las unidades que llegan de otra red dependen de su red de origen.
- **Sitios y aplicaciones externos.** Un sitio puede hacerse pasar por el proyecto o por una aplicación conocida. El protocolo no puede impedir que alguien firme una transacción en un sitio falso.
- **Errores en el propio software.** El software del protocolo lo escriben personas, y puede tener errores que nadie ha encontrado todavía. Las revisiones y las pruebas reducen ese riesgo, pero no lo eliminan.
- **Funcionamiento continuo.** Si más de un tercio del poder de voto queda fuera de línea, la red se detiene hasta que se recupera la mayoría. Es una decisión de diseño: el protocolo prefiere detenerse antes que confirmar algo sin la mayoría necesaria.

:::aside
[Riesgos de uso](/legal#risks)
:::

## Cómo responde ante fallas {#failures}

Las reglas del protocolo prevén una respuesta para los tipos de falla más conocidos:

| Situación | Qué prevén las reglas |
|---|---|
| Un validador firma dos bloques distintos para la misma posición | La red lo detecta, le retira automáticamente una parte de las unidades en staking y lo saca del conjunto activo |
| Un validador deja de participar durante demasiado tiempo | Recibe una penalización menor y sale del conjunto activo hasta que vuelve |
| Más de un tercio del poder de voto queda fuera de línea | La red deja de producir bloques y continúa desde el último bloque confirmado cuando se recupera la mayoría |
| Se descubre un error en el software | Se prepara una corrección; si se aprueba por gobernanza, la red la aplica en una altura de actualización |
| Una propuesta de gobernanza se considera dañina | Los participantes pueden votar No con veto; si el veto supera su límite, la propuesta se rechaza |

## Cómo se cuida el código {#code}

Cada cambio en el software pasa por varias etapas antes de llegar a la red principal:

- **Código abierto.** El código es público. Cualquiera puede leerlo, revisarlo y señalar un problema.
- **Revisión de cada cambio.** Ningún cambio entra al código sin que otra persona lo revise.
- **Red de pruebas.** Cada versión nueva funciona primero en la red de pruebas, en condiciones reales, antes de proponerse para la red principal.
- **Revisión independiente.** Como el código es abierto, cualquier especialista puede revisarlo a fondo, sin pedir permiso, y reportar lo que encuentre por el canal de seguridad.
- **Actualizaciones coordinadas.** Una versión nueva solo llega a la red principal si se aprueba por gobernanza, y todos los nodos cambian de versión en el mismo bloque.

Estas prácticas reducen el riesgo de errores. No lo eliminan.

## Reportar una vulnerabilidad {#report}

Una vulnerabilidad es un error que alguien podría aprovechar para hacer que el protocolo se comporte de una forma distinta a la prevista. Quien encuentra una puede ayudar a proteger la red si la reporta de la forma correcta.

La forma correcta se llama divulgación responsable. La persona reporta la vulnerabilidad en privado, por el canal de seguridad. Se prepara la corrección y, una vez aplicada, se publica lo ocurrido.

Publicar una vulnerabilidad antes de corregirla permitiría que otros la aprovecharan. Por eso el reporte se hace en privado.

:::aside
[Reportar una vulnerabilidad](/open-source/security#report)
:::

## Cómo protegerte {#protect-yourself}

Muchos riesgos para una persona no vienen del protocolo, sino de su propio entorno. Cuatro prácticas reducen los más comunes:

- **Guarda tu frase de recuperación fuera de línea.** La frase de recuperación permite reconstruir tu llave privada. Quien la tiene controla tu cuenta.
- **Nadie del proyecto te pedirá tus llaves.** Nadie que participe en el protocolo o en la red necesita tu llave privada ni tu frase de recuperación. Quien te la pide intenta engañarte.
- **Revisa lo que firmas.** Antes de firmar, lee en tu billetera qué hace la transacción y a qué contrato llama.
- **Usa los canales del proyecto.** Verifica cualquier anuncio, enlace o aplicación en los [canales del proyecto](site:/channels).

## Por qué el protocolo lo hace así {#why}

- **Detenerse antes que arriesgar.** Un bloque confirmado no se deshace. Por eso, ante una falla grave, el protocolo prefiere pausar la red antes que confirmar algo sin la mayoría necesaria.
- **Seguridad en capas.** Huellas, firmas, staking, consenso y revisión del código se refuerzan entre sí. Si una capa falla, las demás siguen protegiendo la red.
- **Transparencia.** El código abierto y el registro público permiten que cualquiera compruebe cómo funciona la red, sin tener que confiar en nadie.
- **Responsabilidad compartida.** El protocolo protege lo que sus reglas pueden proteger. Lo demás, como la llave privada, queda en manos de cada persona.

:::aside
Esta página describe cómo está diseñado el protocolo. No es una promesa de resultados: el software se ofrece tal cual, sin garantías. [Legal y avisos](/legal#warranties)
:::
