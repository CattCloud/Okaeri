# StayHere — Aprendizaje Musical (Piano)

## Qué es este proyecto

> **StayHere existe para que el usuario aprenda música de verdad —comprendiéndola y reteniéndola— al servicio de la expresión, no de la ejecución mecánica. No reemplaza al instrumento ni al profesor: estructura el aprendizaje para que la base dormida despierte y no se abandone.**

Sistema personal de aprendizaje **musical**, con el **piano** (Casio CT-X800) como instrumento de inicio. El usuario es un **intérprete**, no un compositor: la meta es sentarse al piano y tocar —y eventualmente cantar a la vez— las canciones que le tocan el corazón (canciones que ya existen, no propias). La música es **expresión emocional**, no demostración de destreza.

El nombre es la instrucción: *StayHere* — **quédate**. En la música, en el momento, en el camino. Es el antídoto literal al patrón histórico del usuario: empezar y abandonar.

Vive como **repositorio independiente** dentro de la constelación: **TESLA** (estudio) · **Agatha** (gestión de vida) · **ARCA** (metas) · **Oráculo** (inglés) · **StayHere** (música). Todo en **Markdown local**, leído/editado en VSCode — sin Notion, sin base de datos.

## El papel de StayHere: DIRECTOR DE RUTA, no solo consolidador

Esta es la diferencia crítica con Oráculo, y hay que tenerla siempre presente:

- **Oráculo (inglés) es consolidador.** Viene *después* de la clase; la academia define el currículum (CEFR). El centro de gravedad está en la academia.
- **StayHere (música) es director de ruta + consolidador.** El sistema **lleva la estructura y la ruta** (la música no tiene un CEFR universal). El profesor entra *después* (mes 2-3) solo para corregir el cuerpo (técnica, postura, manos) y dar accountability — NO para definir qué se aprende.

**Implicación:** la `sistema/ruta/ruta_inicial.md` es la pieza más importante de este sistema. Durante el arranque autodidacta es la única guía. La calidad de la ruta importa más que cualquier otra cosa.

> En el inglés, el usuario *va* a la academia y *vuelve* a Oráculo. En la música, el usuario *vive* en StayHere y *sale* al profesor una vez por semana. El centro de gravedad está en lados opuestos.

## El principio ANTI-MULETA (sagrado)

El fracaso histórico (Yousician / Synthesia) fue la **muleta**: la pista que cae (tipo Guitar Hero) que dice qué tecla apretar justo cuando hay que apretarla. Entrena **reacción**, no música. Cuando se quita la pista, no queda nada. Le pasó al usuario: *"tocaba la canción esa vez pero luego no quedaba nada"*.

**Las reglas anti-muleta de StayHere:**
- Una canción NO está "aprendida" hasta que se puede tocar **sin la app, de memoria, solo**. Ese es el único criterio de verdad.
- Las apps con notación (Yousician) se usan **en modo sheet/partitura**, nunca en modo "pista que cae". La disciplina la pone el usuario; el sistema se la recuerda.
- Cualquier cosa que el sistema proponga debe construir **comprensión y memoria**. Si una sugerencia induce dependencia de la muleta, se descarta. Sin excepciones.

## El ciclo de vida (4 etapas)

| # | Etapa | Qué hace | Estado |
|---|-------|----------|--------|
| 1 | **Practicar** | Sesiones diarias guiadas (técnica, lectura, teoría, oído, repertorio) con registro | 🎯 **Habilitada (V1)** |
| 2 | **Consolidar** | Memorizar repertorio, repaso espaciado de piezas, activar oído/teoría | ⬜ Arranca con la práctica real |
| 3 | **Corregir** | Entrada del profesor (mes 2-3): técnica física, interpretación, accountability | ⬜ Post-fecha-dura |
| 4 | **Expandir** | Más repertorio, canto (futuro, sobre la base del piano) | ⬜ Más adelante |

> 🎯 **Estado actual:** V1 habilita la etapa 1 (Practicar). No hay ninguna pieza de repertorio todavía — nace con la primera canción real. El canto es etapa 4, futura, NO se arranca en paralelo.

## Las 7 dimensiones (referencia)

Agrupadas en las tres capas del principio rector. Detalle del método en `contexto/stayhere-metodologia.md`.

| Capa | Dimensiones | Qué aporta |
|------|-------------|------------|
| **Mecánica** (el cómo) | Técnica · Lectura (cifrado primero) · Ritmo | Control físico del instrumento |
| **Comprensión** (el porqué) | Teoría aplicada · Oído | Sentido y memoria — lo que la muleta no dio |
| **Expresión** (el para qué) | Repertorio (con memoria) · Interpretación | El destino: tocar de memoria, con sentimiento |

> La **Interpretación atraviesa todo desde el día uno** — no es un nivel avanzado, es el lente con el que se practica todo lo demás. El **Canto** (dimensión 8) es futuro, secuencial, no activo en V1.

## Qué NO hace StayHere

| Veto | Por qué |
|------|---------|
| ❌ **No usa la muleta** (pista que cae) como vía de aprendizaje | Entrena reacción, no música. Es el error histórico a no repetir. Apps solo en modo sheet. |
| ❌ **No reemplaza al instrumento** | El aprendizaje ocurre tocando el Casio, no leyendo sobre música. |
| ❌ **No reemplaza al profesor** para lo físico (postura, manos, técnica) | La IA no ve las manos. Eso es insustituible — por eso la fecha dura. |
| ❌ **No enseña composición** | El usuario es intérprete, no compositor. No es meta. |
| ❌ **No persigue virtuosismo** ni exámenes de conservatorio | La música es expresión, no destreza. |
| ❌ **No gamifica** (streaks, puntos, badges) | Motivación frágil; se rompe el día que pierdes el streak. Solo el registro honesto. |
| ❌ **No arranca el canto en paralelo** al piano | Secuencial: piano primero. Canto es etapa 4. |

## Mapa de archivos clave

| Ruta | Propósito |
|------|-----------|
| `contexto/stayhere-base.md` | **Fuente de verdad del QUÉ y el PORQUÉ.** Diagnóstico, "para qué", las 7 dimensiones, anti-muleta, decisiones. Ante cualquier duda de alcance, esta es la referencia. |
| `contexto/stayhere-metodologia.md` | **El CÓMO practicar** cada dimensión (método independiente de la herramienta). Leer antes de armar ruta o ejercicios. |
| `contexto/stayhere-herramientas.md` | **El CON QUÉ:** modelo de 3 capas (IA + markdown + app). Única app nueva = Oído Perfecto. Yousician en modo sheet. |
| `sistema/manual_stayhere.md` | Guía de operación: principio rector, anti-muleta, las tres capas, qué NO hace. |
| `sistema/perfil/yo_musica.md` | **Perfil del usuario.** Leer ANTES de proponer ruta o repertorio. Calibra nivel, meta, repertorio y el patrón de abandono. |
| `sistema/ruta/ruta_inicial.md` | **La pieza más importante.** La ruta de las primeras 8 semanas autodidacta-guiado. Es la guía que sustituye al profesor durante el arranque. |
| `fundamentos/00_indice.md` | **Material de estudio del usuario.** El vocabulario mínimo que la ruta asume (teclado, cifrado, dedos, acorde, progresión), atado a la canción real. Es la dimensión 4 (Teoría aplicada) hecha artefacto. Lo estudia él. Distinto de `errores-comunes` (insumo del sistema). |
| `sistema/herramientas/config_herramientas.md` | Rol operativo de cada herramienta (Yousician modo sheet, Oído Perfecto, MIDI del Casio, metrónomo). |
| `sistema/referencia/errores-comunes-musica.md` | Checklist preventiva de errores predecibles del principiante. Insumo del sistema, no material de estudio. |
| `sistema/decisiones/` | Decisiones ya tomadas (piano primero, cifrado primero, autodidacta-luego-profesor). |
| `practica/00_indice.md` | Estado de constancia + accountability. **La fecha dura del profesor vive aquí.** |
| `repertorio/00_indice.md` | Índice global de piezas + su estado de memoria. Vacío de piezas en V1. |
| `NOTAS.md` | Ideas y adiciones centralizadas (anti-perfeccionismo). |

## Reglas de operación

- **Leer `sistema/perfil/yo_musica.md` ANTES de proponer cualquier ruta o repertorio.** Calibra al usuario.
- **El método manda, la herramienta se elige después.** No amoldar el aprendizaje a la app (`contexto/stayhere-metodologia.md`).
- **Anti-muleta siempre.** Toda sugerencia se evalúa contra él. Si induce dependencia de "pista que cae", se descarta.
- **Explica antes de pedir práctica (define-or-link).** Ningún bloque usa un término técnico sin definirlo en una frase o enlazar su nota de `fundamentos/`. El sistema **conduce la sesión en pasos pequeños**, confirmando que el usuario no se perdió antes de avanzar. La comprensión precede o acompaña la ejecución — nunca al revés. Jerga huérfana = bug del sistema, no torpeza del usuario.
- **La fecha dura del profesor no se estira.** Es la salvaguarda contra el patrón de abandono. El sistema la vigila (alarma si pasan ~3 días sin registro de práctica).
- **No sobre-construir.** Si la tentación es "integro las apps por API / hago un dashboard / arranco el canto" → detenerse. Eso es etapa posterior o está vetado.
- **Construir con el dolor real, no antes.** El repertorio crece con el uso; la primera pieza nace con la primera canción.
- **Pragmatismo: avanzar > pulir.** No iterar indefinidamente. La perfección es enemiga de la constancia.
- **Preguntas con alternativas concretas, no abiertas.** Minimizar la fricción de decisión.
- **Spanglish controlado:** tecnicismos musicales con su nombre (cifrado, rubato, chunking), explicaciones en español.
- **El usuario ajusta en vivo.** Revisa y corrige cada archivo. El `.md` es la única fuente de verdad: releerlo antes de volver a tocarlo.

## Estado actual del sistema

- **Etapa habilitada:** 1 — Practicar.
- **Fecha dura del profesor:** ver `practica/00_indice.md` (fijada en la construcción de V1).
- **Repertorio en curso:** ninguno todavía. La primera pieza nace con la primera canción real (siguiendo `ruta_inicial.md`).
- **App nueva a instalar:** Oído Perfecto (Perfect Ear) — la única del sistema.
