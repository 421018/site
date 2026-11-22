---
# Textos de las pantallas de la Consola. El diseño vive en src/console/.

nav:
  overview: Resumen
  status: Estado de la red
  events: Eventos de la red
  networks: Redes y conexiones
  tools: Herramientas

overview:
  kicker: Consola
  title: La red, a la vista.
  lead: Herramientas para conectarse a 42 Chain, comprobar su estado y seguir lo que pasa en ella. Todo se consulta desde tu navegador, a los servicios públicos de la red.
  live: Ahora mismo
  cards:
    status: Altura, ritmo de bloques y respuesta de cada proveedor público, en vivo.
    events: Versiones, actualizaciones, incidentes y resultados de gobernanza, con su fuente.
    networks: Parámetros de cada red, cómo añadirla a tu billetera y quién ofrece servicios públicos.
    tools: Convertir unidades y estimar el costo de una transacción.

status:
  kicker: Estado de la red
  title: Cómo está la red ahora.
  lead: Cada proveedor público se consulta directamente desde tu navegador, cada diez segundos. Nada pasa por un servidor nuestro.
  height: Último bloque
  blockTime: Tiempo por bloque
  online: Proveedores en línea
  gas: Precio del gas
  provider: Proveedor
  endpoint: Dirección
  state: Estado
  latency: Respuesta
  ok: En línea
  behind: Atrasado
  down: Sin respuesta
  downNote: «Sin respuesta» también puede significar que el proveedor no permite consultas desde un navegador; su servicio puede funcionar para billeteras y aplicaciones.
  wrongChain: Otra red
  checking: Consultando…
  seconds: "{n} s" # tiempo por bloque, con un decimal
  updated: "Actualizado a las {time}"
  noscript: El estado en vivo necesita JavaScript. Los datos de cada red están en Redes y conexiones.

events:
  kicker: Eventos de la red
  title: Lo que pasa en la red, con su fuente.
  lead: Versiones, actualizaciones de la red, incidentes, avisos de seguridad, resultados de gobernanza y mantenimientos. Cada evento cita la propuesta, el bloque o la transacción que lo respalda, y puede enlazar los que vinieron antes o después.
  empty: Todavía no hay eventos publicados.
  emptyText: Cuando se publique el primero aparecerá aquí, con una página propia para enlazarlo y compartirlo.
  types: Tipos de evento
  typeNames:
    - Versión
    - Actualización de la red
    - Incidente
    - Seguridad
    - Gobernanza
    - Mantenimiento
    - Aviso

networks:
  kicker: Redes y conexiones
  title: Conectarse a 42 Chain.
  lead: Los parámetros de cada red, el botón para añadirla a tu billetera y los servicios públicos que ofrecen proveedores independientes.
  params: Parámetros
  wallet: Añadir a tu billetera
  directory: Servicios públicos

tools:
  kicker: Herramientas
  title: Herramientas.
  lead: Pequeñas calculadoras para trabajar con la red, sin salir del navegador.
---
