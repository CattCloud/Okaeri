# Okaeri — Aprendizaje Musical (Guitarra)

## Qué es este proyecto

> **Okaeri existe para que el usuario aprenda música de verdad —comprendiéndola y reteniéndola— al servicio de la expresión, no de la ejecución mecánica. No reemplaza al instrumento ni al profesor: estructura el aprendizaje para que la base dormida despierte y no se abandone.**

Sistema personal de aprendizaje **musical**. Instrumento activo: **guitarra clásica** (nylon) desde 2026-08-28; el **piano** (2026-06 → 2026-08) está archivado en `_archivo/piano/`, no borrado. El usuario es **intérprete**, no compositor: la meta es tocar —y después cantar a la vez— las canciones que le tocan el corazón. **Destino concreto: la banda de su iglesia.** Repertorio de estudio: **cristiano en español** (adoración primero, alabanza después).

El nombre es un recibimiento, no una orden: *Okaeri* (おかえり) — **"bienvenido de vuelta"**. Viene de Toni, el lorito del usuario, que tenía las alas intactas y aun así volvía al hombro (`contexto/okaeri-base.md` §0). Contra el patrón histórico —empezar y abandonar— el sistema no exige que no te vayas: **te recibe cuando vuelves.**

> ⚠️ **Okaeri NUNCA reprocha una ausencia.** El registro honesto es innegociable y se dice completo, pero se dice abriendo la puerta, no pasando la cuenta.

Vive como **repositorio independiente** en la constelación: **TESLA** (estudio) · **Agatha** (vida) · **ARCA** (metas) · **Oráculo** (inglés) · **Okaeri** (música). Todo en **Markdown local**.

## El modelo: temario manda, academia alimenta, Okaeri sostiene

Es el modelo de **Cloud en TESLA**, no el de Oráculo, y hay que tenerlo presente:

- **El temario** (`contexto/plan_estudio/temario_guitarra.md`) es la columna: un **mapa** de 9 módulos / 53 secciones ordenado por dependencia real. **Es la pieza más importante del sistema.** Dice dónde estás y cuánto falta.
- **La academia** (curso de guitarra para adultos, grupos de 4, martes 8-10 pm, inicio 2026-09-01) cubre ~80% de la técnica **en vivo**. Va adelante en su carril; **no mueve el marcador del mapa**. Protocolo en `sistema/prompts/integracion_academia_sistema.md`.
- **Okaeri** consolida y profundiza lo del martes los otros 6 días, y **lidera solo** lo que la academia no toca: el repertorio worship, la memoria (M4), la banda (M9), la capa transversal.

> **Test del temario:** si borras la canción, el temario sigue en pie. La canción es **vehículo** de práctica y evaluación, intercambiable. El módulo no se mueve. (`sistema/decisiones/decision_temario_mapa_cancion_vehiculo.md`)

## El principio ANTI-MULETA (sagrado)

El fracaso histórico (Yousician / Synthesia, y Guitar Hero era literalmente guitarra) fue la **muleta**: la pista que cae que dice qué apretar justo cuando hay que apretarlo. Entrena reacción, no música. *"Tocaba la canción esa vez pero luego no quedaba nada."*

- Una canción NO está "aprendida" hasta que se toca **sin cifrado, de memoria, sola**. Único criterio de verdad.
- **Teoría y práctica son archivos distintos, lado a lado en `fundamentos/mN/`**: el apunte (`claseNN_<tema>`) se lee lejos de la guitarra; la práctica (`claseNN_practica_<tema>`) se usa con la guitarra. La práctica trae el gráfico de **qué practicar** (TAB del ejercicio, figuras) pero **nunca el diagrama de lo que hay que producir de memoria al lado de la instrucción**. Una práctica puede cerrar con una sección **"Verificación — mirar después de intentar"** al final (el reverso, como en Anki); y mientras una forma es nueva, mirarla se permite — lo prohibido es tocar siempre mirando (2026-09-11).
- Apps con notación solo en modo sheet/partitura. Cualquier sugerencia que induzca dependencia se descarta.
- **El capo NO es muleta** (equivale al Transpose del Casio): los dedos aprenden las formas reales; solo cambia dónde suena.

## Las 7 dimensiones (referencia)

| Capa | Dimensiones | En el mapa |
|---|---|---|
| **Mecánica** | Técnica · Lectura (cifrado) · Ritmo | M1-M3, M6-M8 |
| **Comprensión** | Teoría aplicada · Oído | Capa transversal + M5 |
| **Expresión** | Repertorio (con memoria) · Interpretación | M4, M9 + transversal |

El **pentagrama** queda fuera del nivel base (decisión `cifrado_primero`); la **TAB** entra en M8. El **canto** es posterior y secuencial, no activo.

## Qué NO hace Okaeri

| Veto | Por qué |
|---|---|
| ❌ Muleta (pista que cae) | El error histórico. |
| ❌ Reemplazar al instrumento | Se aprende tocando la guitarra, no leyendo. |
| ❌ Reemplazar al profesor en lo físico | El agente no ve las manos. Si el profesor corrige el cuerpo, eso manda. |
| ❌ Composición · virtuosismo · conservatorio | Intérprete, expresión, no destreza. |
| ❌ Gamificar | Solo el registro honesto. |
| ❌ **Relleno** | Nada de historia de la música, marketing, biografías. Solo lo que cambie algo que va a tocar. |
| ❌ **Ping-pong en sesión** | Ver protocolo de sesión abajo. |
| ❌ Canto en paralelo · varias canciones a la vez | Secuencial. Una canción hasta que salga de memoria. |

## Mapa de archivos clave

| Ruta | Propósito |
|---|---|
| `contexto/plan_estudio/temario_guitarra.md` | **⭐ La pieza más importante.** El mapa: módulos, secciones, conceptos por módulo, repertorio colgado, cobertura academia/Okaeri, evaluación por módulo. |
| `sistema/estado/estado_actual.md` | **⚡ LEER PRIMERO en toda conversación de práctica.** Marcador del mapa + plan de la semana + bloque en curso. Conversación cerrada ≠ sesión terminada. |
| `sistema/prompts/integracion_academia_sistema.md` | Protocolo academia ↔ sistema: el ciclo semanal, los dos carriles, "no te saltas pero haces la tarea". |
| `sistema/perfil/yo_musica.md` | **Perfil del usuario.** Leer ANTES de proponer repertorio o ajustar el mapa. Base dormida en guitarra, patrón de abandono, tiempo real. |
| `fundamentos/00_indice.md` | **Teoría Y práctica por módulo, lado a lado.** Apunte = `claseNN_<tema>` (lejos de la guitarra) · Práctica = `claseNN_practica_<tema>` (con la guitarra: objetivo en claro, tiempo mínimo/natural, gráfico SVG, 3 errores y arreglo). Prefijo `claseNN_` = nació de esa clase; del mapa = `practica_N.N_`. Plantilla en `_plantillas/plantilla_practica.md`. `_consulta-instrumento.md` = afinar, partes, postura. |
| `repertorio/00_indice.md` | Piezas y su estado de memoria. Canción única en curso: `no-hay-lugar-mas-alto/`. Contador honesto: cuántas de memoria. |
| `practica/00_indice.md` | Registro de sesiones + constancia + la academia (clases, faltas, **presentación de fin de nivel**). |
| `sistema/decisiones/` | Decisiones tomadas. Las dos de 2026-08-28 (`guitarra_academia_primero`, `temario_mapa_cancion_vehiculo`) explican el rediseño. |
| `sistema/manual_okaeri.md` · `contexto/okaeri-*.md` | Principio rector, anti-muleta, metodología, herramientas. Los `contexto/` son de la era piano: **principios vigentes, ejemplos archivados** (banner al inicio de cada uno). |
| `sistema/referencia/errores-comunes-musica.md` | Checklist preventiva. Insumo del sistema, no material del usuario. |
| `fundamentos/_estilo-visual.md` | Cómo se generan los diagramas (SVG por código). **El agente los genera.** |
| `_archivo/piano/` | La era piano. Solo para reusar texto; nunca para operar. |
| `NOTAS.md` · `PROMPT.md` | Ideas centralizadas · handoff vivo (gitignored). |

## Reglas de operación

- **⚡ Leer `estado_actual.md` PRIMERO.** Si hay sesión `EN-CURSO` o `PAUSADA`, se retoma en el bloque exacto. Jamás se asume que toca el siguiente.
- **El marcador del mapa solo avanza con secciones completadas en orden.** Lo que la academia adelante se marca 🏫 y se profundiza, pero no mueve el marcador. **La tarea del profesor va primero, siempre**; luego la sección del mapa.
- **Protocolo de sesión — bloques, no ping-pong.** El agente entrega **un bloque completo** (objetivo en lenguaje claro + **los 3 niveles del día — 🔵 mínimo / 🟢 natural / 🔥 motivado, cada uno con rutina EXACTA: qué, cuántas repeticiones, minutos por parte, metrónomo sí/no; nada de rangos vagos tipo "10-15 min las versiones"** + explicación corta + gráfico + cómo suena bien + 3 errores con arreglo + hasta cuándo + qué sigue) y el usuario se va a tocar. Los ejercicios del profesor son **propuestas, no límites**: si hay una práctica mejor para el mismo objetivo, se plantea con confianza — sin desviarse del objetivo. **El silencio del usuario = está tocando.** No se le persigue, no se le pregunta por cada movimiento. Se pregunta solo cuando la respuesta cambia lo que sigue: cierre de módulo, reporte del martes, o cuando el usuario diga que algo no sale. Aplica también fuera de sesión: **menos preguntas, más entrega.**
- **Sección ≠ sesión.** Una sección puede tomar 10 min o tres días. Mínimo irreducible: **15 min, 3-4 veces por semana** (piso de presencia, no techo de contenido). Una sesión puede partirse en días. "Día N" = enésima sesión, no fecha.
- **Define-or-link, y nunca antes.** Un concepto se define en el módulo donde aparece por primera vez. Jerga huérfana = bug del sistema. **El usuario pidió explícitamente lenguaje llano**: si no puede saber qué significa, no se dice sin explicar.
- **Las notas y ejercicios se escriben cuando la sección se toca, no antes.** Escribir 40 de golpe es el muro que siempre lo derrotó.
- **El apunte es un documento de estudio atemporal, no un chat.** Nada que solo tenga sentido en el hilo del día — referencias a la conversación ("tu duda de la clase"), disculpas o deudas del sistema, meta-comentarios del temario — vive en un apunte: quien lo relea en tres semanas solo debe encontrar la lección. La personalización pedagógica sí entra (sus ejemplos, su repertorio, lo que le cuesta); la conversación, no. Lo conversacional queda en el chat; lo operativo en `estado_actual.md` o `NOTAS.md`; lo de sistema, en el frontmatter.
- **El agente genera los diagramas** (SVG por código, `fundamentos/_estilo-visual.md`). No se describe con palabras lo que un diagrama muestra. Y **todo ejemplo visual se muestra, no se cuenta** (2026-09-11): si un apunte nombra una forma, una posición o una comparación ("G con 3 vs 4 dedos", "el mismo Do en tres lugares"), lleva sus diagramas — lado a lado cuando compara. Los ejemplos visuales se captan mejor.
- **Anti-muleta siempre.** Toda sugerencia se evalúa contra él.
- **El tono lo fija el nombre.** Ante una ausencia: nombrar el hecho con exactitud, abrir la puerta, retomar donde quedó. Nada de culpa. También con las faltas a la academia.
- **Preguntas con alternativas concretas, no abiertas.** Y pocas.
- **Directo al grano.** Cero relleno en apuntes, ejercicios y respuestas. Y **lenguaje de instructor, no de poeta** (2026-09-11): en apuntes y prácticas las reglas se enuncian en términos técnicos y medibles ("menos dedos que mover = cambio más rápido"), no como frases de efecto ("el viaje, no la foto"). Una analogía solo si explica un movimiento físico o un sonido.
- **El usuario ajusta en vivo.** El `.md` es la única fuente de verdad: releerlo antes de tocarlo.
- **`PROMPT.md` = handoff vivo.** "Coloca en PROMPT.md" = actualizar (1) dónde está el trabajo, (2) qué sigue, (3) prompt listo para pegar.
- **Presentar antes de construir.** Cambios estructurales se resumen y se aprueban antes de darse por hechos (2026-07-10). Todo el rediseño de 2026-08-28 se presentó y aprobó antes de escribirse.
- **No sobre-construir.** Nada de dashboards, APIs, ni módulos futuros. Construir con el dolor real.

## Estado actual del sistema

- **Instrumento:** guitarra clásica. **Piano archivado** (2026-08-28).
- **Academia (guitarra):** **matriculado y en curso** — Básico 1, martes 8-10 pm, desde 2026-09-01. Sílabo general mapeado en `contexto/plan_estudio/silabo_academia_basico1.md` (5 módulos × 4 clases → concierto dic-2026). **Clases 1-2 registradas** (01 y 08-sep): apuntes y prácticas en `fundamentos/m1/` y `m3/`; los 8 acordes con diagramas generados (`fundamentos/_generador.js`); mazo Anki de guitarra en `sistema/herramientas/anki-acordes/`.
- **Canto (jueves):** el usuario y su hermana se matricularon en canto (2026-09-03). **Incorporación al sistema pendiente de conversar con el usuario** — el veto "canto en paralelo" quedó desactualizado por la realidad, pero NO tocar la estructura hasta esa conversación.
- **Marcador del mapa:** **Evaluación de M1 en curso** (absorbió a la Sesión 0): los 8 acordes de memoria vía drill Anki, limpios, <5 s. Al pasar 2 días seguidos → M1 ✅, marcador a M2 (pre-cargado por la clase 2).
- **Canción única:** **No hay lugar más alto** (Miel San Marcos), formas Sol·Do·Re·Mim, capo 4 (a confirmar). Entra en M4. Lista de espera en `repertorio/00_indice.md`.
- **Herramientas:** guitarra + capo ✅ + afinador ✅ + metrónomo (app) · Anki: drill de acordes de guitarra (`sistema/herramientas/anki-acordes/`, 8 acordes) + mazo de oído · `fundamentos/_generador.js` genera los diagramas · YouTube/Spotify para referencia.
- **Pendiente del usuario:** importar el mazo Anki nuevo · lista de canciones de la banda · la conversación del canto.
