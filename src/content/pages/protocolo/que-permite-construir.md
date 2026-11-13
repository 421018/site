---
title: "Qué permite construir"
summary: "Qué cambia cuando una aplicación funciona sobre la red, qué tipos de uso hace posibles el protocolo y qué conviene dejar fuera de la cadena."
group: protocolo
slug: protocolo/que-permite-construir
---

## Qué cambia cuando una aplicación vive en la red {#cambia}

Una aplicación tradicional funciona en los servidores de quien la opera. Quienes la usan dependen de que ese operador mantenga sus reglas, guarde bien los datos y siga en funcionamiento.

Una aplicación construida sobre la red funciona de otra forma. Sus reglas están en contratos que todos los nodos ejecutan. Eso le da cuatro propiedades que no dependen de quien la creó:

- **Reglas públicas.** Cualquiera puede leer las reglas de la aplicación. Una vez publicadas, nadie puede cambiarlas por su cuenta.
- **Resultados definitivos.** Una transacción confirmada no se revierte. Lo que la aplicación registra, queda registrado.
- **Sin un operador central.** La aplicación sigue funcionando mientras la red funcione, aunque quien la creó deje de mantenerla.
- **Verificación abierta.** Cualquiera puede comprobar lo que la aplicación hizo, sin pedir permiso y sin confiar en nadie.

No toda aplicación necesita estas propiedades. Las aprovechan las aplicaciones en las que varias partes tienen que confiar en un mismo registro o en unas mismas reglas.

## Posibilidades, por tipo de uso {#usos}

Estos son los tipos de uso en los que el protocolo aporta más:

### Registros verificables

Muchos documentos valen solo si se puede comprobar que son auténticos: un título, un certificado, el origen de un producto. Hoy, comprobarlo suele exigir consultar a quien los emitió.

En la red, quien emite un documento registra su huella y su firma. Cualquiera puede comprobar después que el documento no cambió y quién lo emitió, sin consultar a nadie.

Por ejemplo, una universidad registra la huella de cada título que emite. Un empleador comprueba un título en segundos, aunque la universidad no responda.

<p class="msg">Lo hacen posible: <a class="tx" href="/protocolo#registro">Huellas encadenadas</a> · <a class="tx" href="/protocolo#cuentas">Firmas</a></p>

### Pagos

Un pago entre partes que no se conocen suele necesitar un intermediario que lo procese y lo confirme, y la confirmación puede tardar días.

En la red, un pago se confirma en segundos y es definitivo. Un contrato puede, además, liberar un pago solo cuando se cumple una condición acordada.

Por ejemplo, un comprador deposita el pago en un contrato. El contrato lo libera al vendedor cuando se confirma la entrega, o lo devuelve si vence el plazo.

<p class="msg">Lo hacen posible: <a class="tx" href="/protocolo/consenso#ronda">Finalidad</a> · <a class="tx" href="/protocolo/ejecucion#contratos">Contratos</a></p>

### Constancias e identidad

Para demostrar algo sobre sí misma, como haber terminado un curso o pertenecer a una asociación, una persona suele depender de que quien se lo otorgó siga disponible para confirmarlo.

En la red, quien otorga una constancia puede registrarla y asociarla a la cuenta de quien la recibe. Cualquiera que necesite comprobarla lo hace directamente en la red.

Por ejemplo, una escuela de idiomas registra el nivel que aprobó cada alumno. Una empresa comprueba ese nivel directamente en la red, sin tener que llamar a la escuela.

<p class="msg">Lo hacen posible: <a class="tx" href="/protocolo#cuentas">Cuentas y firmas</a> · <a class="tx" href="/protocolo/ejecucion#contratos">Contratos</a></p>

### Cuentas programables

Una cuenta común depende de una sola llave. Si se pierde, se pierde todo, y no admite reglas de uso.

En la red, una cuenta puede ser un contrato con sus propias reglas: exigir varias firmas, fijar límites de gasto o prever cómo recuperar el acceso.

Por ejemplo, un grupo de trabajo exige la firma de tres de sus cinco responsables para mover las unidades de su cuenta común.

<p class="msg">Lo hacen posible: <a class="tx" href="/protocolo/ejecucion#cuentas">Cuentas</a> · <a class="tx" href="/protocolo/ejecucion#contratos">Contratos</a></p>

### Decisiones colectivas

Cuando un grupo decide en conjunto, alguien suele contar los votos y llevar a cabo la decisión. El grupo depende de que esa persona lo haga bien.

En la red, un grupo puede crear su propio sistema de votación en un contrato. Los votos quedan registrados y la decisión aprobada se ejecuta sola.

Por ejemplo, una cooperativa vota en qué usar su fondo común. Si la propuesta se aprueba, el contrato transfiere las unidades sin intervención de nadie.

<p class="msg">Lo hacen posible: <a class="tx" href="/protocolo/gobernanza#dao">El modelo de la DAO</a> · <a class="tx" href="/protocolo/ejecucion#nativas">Funciones propias de la red</a></p>

### Aplicaciones entre redes

Cada cadena de bloques tiene sus propias aplicaciones y sus propias unidades. Combinarlas suele requerir intermediarios.

Con IBC, una aplicación en la red puede enviar unidades y mensajes a aplicaciones en otras redes, y recibir sus respuestas, sin intermediarios.

Por ejemplo, una aplicación de pagos recibe unidades de otra red y las usa en un contrato de la red, en una sola transacción para quien la usa.

<p class="msg">Lo hacen posible: <a class="tx" href="/protocolo/interoperabilidad">Interoperabilidad</a></p>

### Infraestructura de servicios

Algunos servicios tienen que seguir funcionando durante décadas y con las mismas reglas para todos: un registro de la propiedad o un archivo de documentos oficiales.

En la red, un servicio así no depende de un solo operador ni de que un servidor siga encendido. Sus reglas son públicas y sus registros, permanentes.

Por ejemplo, un municipio publica en la red los acuerdos que aprueba. Cualquier persona puede comprobar, años después, que un acuerdo no fue modificado.

<p class="msg">Lo hacen posible: <a class="tx" href="/protocolo/seguridad#propiedades">Seguridad del protocolo</a> · <a class="tx" href="/protocolo/gobernanza">Gobernanza</a></p>

<p class="msg">Los ejemplos son ilustrativos. Los proyectos que ya construyen sobre la red se comparten en <a class="tx" href="/comunidad#portal">Infinite Drive, el chat de la comunidad</a>.</p>

## Qué no conviene poner en la cadena {#fuera}

Todo lo que se registra en la red es público y permanente. Por eso hay información que no debe ir en la cadena:

- **Datos personales.** Nombres, direcciones o datos de salud no deben registrarse en la cadena, porque cualquiera podría leerlos y nadie podría borrarlos.
- **Información privada.** Lo que deba mantenerse en reserva no puede vivir en un registro público.
- **Archivos pesados.** Guardar documentos completos en la cadena es costoso, porque todos los nodos tienen que almacenarlos.

La solución habitual es separar el dato de su prueba. El dato queda fuera de la cadena, bajo el control de quien corresponda. En la cadena se registra solo su huella. Así, cualquiera puede comprobar que un dato es auténtico sin que el dato se haga público.

<p class="msg"><a class="tx" href="/desarrolladores#aplicacion">Qué va dentro y fuera de la cadena →</a></p>

## Por qué el protocolo lo hace posible {#porque}

- **Finalidad inmediata.** Pagos y registros pueden darse por buenos en segundos.
- **Compatibilidad con la EVM.** Quien construye usa lenguajes y herramientas que ya conoce, y empieza desde el primer día.
- **Funciones propias de la red.** Staking, gobernanza e interoperabilidad están al alcance de cualquier contrato.
- **IBC.** Las aplicaciones pueden trabajar con otras redes sin intermediarios.
- **Reglas que nadie cambia solo.** Quien construye sabe que las reglas de la red no cambiarán sin una decisión pública de la DAO.
