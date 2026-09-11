# Decisión: el temario es la columna, la canción es el vehículo; bloques sin ping-pong

> **Estado:** decidida. **Fecha:** 2026-08-28. Nace del diagnóstico de `decision_guitarra_academia_primero.md`.

## 1. El temario es independiente de la canción

**Test:** *si borras la canción, el temario debe seguir en pie.* En la era piano no pasaba — el plan *era* 10,000 Reasons troceada en días.

- El temario mide **competencias** (sé cambiar a tempo, sé leer un cifrado), no "cuánto llevo de la canción".
- La canción es **vehículo de práctica** y **evaluación del módulo** — el mismo rol que el curso de Udemy en TESLA/Cloud: *un recurso, no la ruta*.
- Relación **muchos a muchos**: una canción sirve a varios módulos (acordes → rasgueo → arpegio → cantar encima); un módulo se prueba con varias canciones.
- **Las canciones son intercambiables.** Si la elegida no mueve, entra otra que ejercite lo mismo. El módulo no se toca.
- **Una sola canción a la vez** hasta que salga de memoria (zona de riesgo del perfil: saltar de canción).

## 2. Teoría y práctica: archivos distintos, lado a lado *(enmendado 2026-09-05)*

Inspirado en TESLA (`apuntes/` vs `practica/`), pero aquí es **estructural**, no de comodidad: la teoría se lee lejos de la guitarra; la práctica ocurre con la guitarra y **sin mirar nada**. Mezclarlas en un archivo induce a leer mientras se toca — la muleta.

**Enmienda 2026-09-05 (decisión del usuario):** no hay carpeta `ejercicios/` aparte. Apunte y práctica viven **lado a lado en `fundamentos/mN/`** — así la carpeta dice en qué punto del temario está cada cosa — y comparten prefijo de origen: `claseNN_<tema>.md` (apunte) y `claseNN_practica_<tema>.md` (práctica). Una práctica nacida del mapa y no de una clase lleva su sección: `practica_N.N_<tema>.md`.

| | Apunte (`claseNN_<tema>`) | Práctica (`claseNN_practica_<tema>`) |
|---|---|---|
| Cuándo | Lejos de la guitarra. Se lee una vez, se consulta después | Con la guitarra. Cada sesión |
| Qué trae | Concepto, porqué, diagramas de referencia | **Objetivo en lenguaje claro** (qué mejoras y cómo lo notarás) · **los 3 niveles del día** (🔵 mínimo / 🟢 natural / 🔥 motivado) · el **gráfico de qué practicar** (SVG) · cómo se hace cada parte · cómo suena bien · 3 errores típicos y su arreglo · hasta cuándo |

**Precisión 2026-09-08 (pedido del usuario):** los niveles no son rangos de minutos — son **rutinas exactas**: qué, cuántas repeticiones/ciclos, cuántos minutos cada parte, y si lleva metrónomo. "10-15 min las 4 versiones" es niebla, no instrucción. Cada nivel incluye al anterior; el cronómetro marca el fin.
| Límite | *Si lo puedes hacer sin la guitarra, es apunte* | *Si necesitas la guitarra, es práctica* |

**El gráfico de la práctica muestra QUÉ practicar** (la TAB del ejercicio, las figuras rítmicas) — es la especificación, no una muleta. **Lo que sigue prohibido** es el diagrama de lo que debe producirse **de memoria** (formas de acorde del drill o de la canción): ese vive solo en el apunte y en el reverso de Anki. Regla del drill (frente = nombre, reverso = verificación) y regla de TESLA (*la IA nunca entrega el código*), intactas.

**Los ejercicios del profesor son propuestas, no límites** (pedido del usuario): si existe una práctica mejor para el mismo objetivo, el agente la plantea con confianza — mientras no se desvíe del objetivo. Se documenta dentro de la práctica como "Afinación del instructor".

`practica/` conserva su significado de siempre en Okaeri: **registro** de sesiones y constancia. No se reusa para ejercicios.

## 3. Bloques auto-ejecutables, sin ping-pong

El protocolo viejo (*explico → una acción → confirmo → siguiente*) exigía un mensaje del usuario por cada movimiento. Soltar la guitarra, escribir, esperar, volver. **No es practicar, es chatear con la guitarra al lado.** El usuario lo señaló como causa del fallo.

**Ahora:** el agente entrega un **bloque completo** de una vez, y el usuario se va a tocar sin esperarlo. Un bloque trae:

1. La explicación (corta, define-or-link)
2. El diagrama, si lo hay (SVG generado por el agente)
3. **Qué hacer**, concreto
4. **Cómo suena cuando está bien**
5. **Qué hacer si sale mal** — los 3 errores típicos y su arreglo, por adelantado
6. Cuándo ya está, y qué sigue

Lo que antes preguntaba el agente ahora **viene resuelto en el bloque**.

**El silencio del usuario significa que está tocando.** No que se fue, no que no entendió. El estado se queda donde está, no se le persigue, y al volver se retoma ahí.

**El agente pregunta solo cuando la respuesta cambia lo que sigue:**
- Al cerrar un módulo (¿avanzamos o repetimos?)
- Después del martes (¿qué vieron en clase?)
- Cuando el usuario dice que algo no sale

Nunca por cada movimiento. Y aplica también fuera de sesión: **menos preguntas, más entrega.**

## 4. Los conceptos se definen donde aparecen. Nunca antes.

Regla de TESLA: *no se hace un concepto si antes no se menciona.* El vocabulario técnico del usuario sube **a lo largo de los módulos**, no en un glosario previo. Las notas de `fundamentos/` **no se escriben todas de golpe** — escribir 40 hoy es entregar el muro de material que siempre lo derrotó. Nacen cuando el módulo las pide, con lo conversado en la sesión, y quedan con las palabras del usuario y con lo que a él le costó.

## Implicación para el sistema

- `contexto/plan_estudio/temario_guitarra.md` es la pieza más importante. `CLAUDE.md` lo declara.
- `fundamentos/` se organiza por módulo (`m1/`, `m2/`…), con apuntes y prácticas lado a lado (enmienda §2).
- `estado_actual.md` guarda **marcador del mapa** + **plan de la semana** + **bloque en curso**.
- El agente **genera los diagramas** (SVG por código, `fundamentos/_estilo-visual.md`), como en la era piano.
