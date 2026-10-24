# Decisión: la vista «Hoy» — un objetivo por día en `system.html`

> **Estado:** aprobada el 2026-10-24, sin construir. Se construye cuando el usuario cambie el diseño del panel; hasta entonces solo existen esta decisión, la fila en `AGENTS.md` y la sección «Bolsa de objetivos» de `sistema/estado/estado_actual.md`. **Fecha:** 2026-10-24. **Aprobada por el usuario:** sí, tras una entrevista en la misma conversación. Diseñada con el lente de la psicología conductual y cognitivo-conductual, y con las cuatro leyes de *Hábitos atómicos* (Clear).

## Contexto

El usuario sabe que debe practicar, pero «voy a practicar» no es una acción: falta qué, cuánto, dónde y después de qué. Sin eso la mente se bloquea y no arranca. Al mismo tiempo, abrir el sistema le muestra todo lo que falta, y esa lista se vive como deuda; evitarla alivia, y el alivio hace que la próxima vez cueste más abrirlo. Dos patrones se suman: un día perdido se lee como «fallé» y borra el avance anterior, y con muchas opciones se queda comparando cuál es la correcta en vez de empezar.

El dolor es real hoy, no futuro: las sesiones registradas en `practica/` llevan semanas en cero. Por eso entra como excepción a R11, igual que el panel.

## Decisión

**Qué es:** la vista inicial de `system.html`. Muestra un solo objetivo para hoy, escrito como intención de implementación (acción, lugar, duración), con una versión mínima de 2 minutos. El resto del panel sigue detrás, sin cambios.

**Reglas (fijas; se revisan con una semana de uso real, no antes):**

1. **Objetivos de proceso, no de resultado.** «Tocar V1 del arpegio 10 min», nunca «dominar el arpegio». Cumplir un objetivo de proceso siempre está en manos del usuario; el resultado no.
2. **Formato fijo:** *Después de [ancla], en [lugar], [acción concreta] por [N] min.* Debajo, siempre, la versión mínima de 2 minutos. Las primeras semanas el objetivo destacado **es** la versión mínima: primero afianzar presentarse, después optimizar.
3. **Un solo objetivo destacado.** Prioridad: la tarea del profesor (R4) → la evaluación en curso → la cola de conceptos. El sistema elige; el usuario no compara. `cambiar` muestra como máximo dos alternativas.
4. **La bolsa es invisible.** El resto de objetivos existe en el estado, no en la vista. Sin contadores, sin la palabra «atrasado», sin fechas vencidas. Lo que no se hizo vuelve a la bolsa sin marca.
5. **Los objetivos encadenados se muestran al cerrar, como consecuencia:** «esto abrió: p-i-m-a». Nunca se muestra el árbol completo.
6. **Nunca dos veces seguidas.** Tras un «hoy no», el día siguiente propone la versión mínima de forma automática. El panel registra el hecho («ayer no hubo sesión») sin adjetivos.
7. **Acumulado, no rachas.** Se muestran los votos totales (una sesión = un voto) y los minutos reales. El calendario pinta solo lo hecho; los días vacíos no se dibujan distinto ni se cuentan.
8. **Cerrar con fin.** Al marcar `hecho`: «Por hoy, listo. Un voto más.» No aparece lo siguiente. La pestaña Libre queda abierta como premio, no como tarea.
9. **Autonomía.** Tres salidas sin consecuencia: `hecho`, `hoy no`, `cambiar`. Un texto libre («hoy quiero V3») sustituye el objetivo del día sin debate. Planificar o reordenar la bolsa no existe en «Hoy»: eso se hace en conversación con el agente.
10. **Calendario.** Martes y jueves el objetivo es la clase. El día siguiente a una clase el objetivo es reportarla (mínimo: tres líneas). Los demás días alternan guitarra y canto, algo cada día (opción elegida por el usuario sobre «solo el piso de R9»).
11. **Ventanas por carril.** Guitarra: el cuarto del usuario, con la luz prendida, a cualquier hora; la guitarra cuelga del clavo del cuarto, a la vista. Canto con voz: la sala, entre 2 y 5 pm. Fuera de esa ventana el objetivo de canto es en silencio (respiración costo-diafragmática, siseo, trino a volumen bajo, escuchar la canción y marcar la nota más aguda). Si un día de canto se abre el panel después de las 5 pm, propone el mínimo en silencio y al día siguiente vuelve a tocar canto con voz.
12. **Condiciones de hoy**, opcionales, un toque cada una: tiempo (2 · 10 · 20 min), ruido (con voz · en silencio), lugar (cuarto · sala · fuera de casa). El objetivo se reescribe a la variante que cabe; si ninguna cabe, lo dice y no insiste.
13. **Registro del día.** Un campo de texto libre al cerrar, sin formato ni mínimo. Es el registro de sesiones de `practica/`; no se crea otro.
14. **Personalización desde el registro, sin configurar nada.** El ancla no se impone: la primera semana el objetivo pide anotar la hora y qué se hacía justo antes; con tres coincidencias en cuatro, el panel propone fijarla. Del registro también salen el tiempo que el usuario elige de verdad y los patrones de «hoy no» (si los domingos no hay sala, el domingo deja de proponer canto con voz). El objetivo de mañana no sube porque hoy se dio más tiempo: solo crece cuando el registro muestra semanas eligiendo más.
15. **Al volver tras días sin abrir:** «Bienvenido de vuelta. Última sesión: [fecha], [carril].» y el mínimo. Sin adjetivos ni frases de ánimo (R3).
16. **Guardarraíles:** sin notas, porcentajes, rojo ni comparación entre semanas. La vista se llama «Hoy», no «Objetivos».
17. **La versión publicada no lleva «Hoy».**
18. **Nada del contexto personal del usuario entra al repositorio.** Solo las ventanas, los lugares y las reglas de arriba.

## Dos ejemplos del formato

Guitarra, primera semana:

> Hoy, en tu cuarto, con la luz prendida: V1 del arpegio, 2 minutos.
> Si quieres seguir, V2. Si no, ya está.
> Anota la hora y qué hacías justo antes.

Canto, con voz:

> En la sala, entre 2 y 5 pm: cantar el coro de *Hosanna* una vez y marcar en qué palabra está la nota más aguda.
> Mínimo: solo escucharlo y marcar la palabra.

## Por qué así

- Un objetivo con acción, lugar y duración elimina la decisión del momento; es la intención de implementación de Clear y la activación conductual de la TCC.
- La lista completa de pendientes alimenta el bucle de evitación. Esconder la bolsa corta el bucle sin borrar la información.
- Las rachas y los porcentajes castigan el día perdido; el acumulado solo suma. Por eso se aparta del calendario con X del libro, que para este usuario sería un calendario de huecos.
- Las tres salidas sin consecuencia mantienen la práctica como algo que el usuario elige. En cuanto el panel manda, deja de ser gusto.
- Las primeras semanas el destacado es la versión mínima porque, según Clear, el hábito de presentarse se afianza antes que el de rendir.

## Dónde vive cada cosa (R12)

- **La bolsa de objetivos:** sección propia en `sistema/estado/estado_actual.md`, única fuente de estado. Cada objetivo lleva carril, prioridad, qué abre y sus variantes por tiempo y ruido. Un script la convierte al JSON del panel, como hace `panel-practica.mjs` con las prácticas.
- **El registro del día:** `practica/`. Al construir se define si va en un archivo continuo o uno por semana, y cómo convive con `plantilla_sesion.md` (RG1 pide la plantilla; el registro de «Hoy» es más liviano; si la reemplaza, pasa por `nueva-regla`).
- **El diseño visual:** `DESIGN.md` y `PRODUCT.md`, al construir, con `impeccable`.
- **Esta decisión:** aquí; resumen con fecha en `NOTAS.md`.

Compatibilidad con `practica/AGENTS.md`: RG2 prohíbe alarmas diarias. «Hoy» no avisa ni empuja; propone cuando el usuario abre el panel. El chequeo semanal sigue siendo el de RG2.

## Pendiente antes de construir

- **Dónde se guardan `hecho` y el registro.** `system.html` es un archivo estático. Opciones: (a) un script local `node sistema/herramientas/hoy.mjs` que sirve el panel y escribe en `practica/` y en `estado_actual.md` (recomendada: un comando al abrir, cero fricción después); (b) el panel guarda en `localStorage` y ofrece «copiar registro» para pegarlo en la conversación. El usuario decide al cambiar el diseño.
- La vista en sí y el script de conversión.

## Fuera de alcance

Gamificación y stats por carril (los votos son su semilla; ver `PRODUCT.md`), reordenar la bolsa desde el panel, marcar versiones tocadas en Libre (`NOTAS.md` → «Para más adelante») y cualquier contenido nuevo de prácticas.
