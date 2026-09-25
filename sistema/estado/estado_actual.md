# 📍 Estado actual — Marcadores, semana y sesión

> **Qué es este archivo:** el único lugar del estado del sistema (R12). Tres cosas: **dónde vas en cada carril** (última clase, evaluación en curso y cola de conceptos: la ruta la marcan las clases, R4), **qué toca esta semana**, y **en qué bloque quedaste** si una sesión está a medias.
>
> **Quién lo actualiza:** el agente, con los procedimientos `sesion` (bloques y sesiones) y `procesar-clase` (la semana). El usuario puede corregirlo a mano.

---

## 🗺️ Marcador — Guitarra

| Campo | Valor |
|---|---|
| **Temario (el mapa)** | `contexto/plan_estudio/temario_guitarra.md` |
| **Última clase reportada** | 3 (2026-09-15): la corchea, lectura rítmica, pentatónica de La menor. La clase 4 (22-sep) espera su reporte |
| **Vistas en clase (🏫), sin evaluar** | M1: casi completo · M2: anclas y cambios · M3: pulso, figuras, 4/4, metrónomo · M5: La, Mi, Rem + progresiones · M6: la corchea, lectura rítmica · M8: la TAB · pentatónica de La, posición 1 |
| **Evaluación en curso** | M1: los 8 acordes de memoria, limpios, en <5 s, 2 días seguidos (drill de Anki). Al salir → M1 ✅ |
| **Cola de conceptos** (uno por sesión, cada uno con su esquema aprobado antes de escribirse) | La escalera de la pentatónica: 1. Sostenido y bemol · 2. Tono y semitono · 3. Nombrar la nota de un traste · 4. La escala y su tónica · 5. La escala menor · 6. La pentatónica · 7. La caja del mástil |
| **Próxima acción** | 1º la tarea del profesor (ver «Semana en curso») · 2º el drill de Anki de M1 · 3º cuando digas «seguimos», te presento el esquema del concepto 1 de la cola y lo escribo con tu OK |

## 🗺️ Marcador — Canto

| Campo | Valor |
|---|---|
| **Temario (el mapa)** | `contexto/plan_estudio/temario_canto.md` |
| **Última clase reportada** | 2 (2026-09-10): apps y repertorio. La clase 3 (17-sep) espera su reporte |
| **Vistas en clase (🏫), sin evaluar** | M1: respiración costo-diafragmática, papel, trino (clase 1) |
| **Evaluación en curso** | M1: siseo parejo ≥20 s · nota cómoda sostenida 8 s estable (Sesión 0: rango vocal ✅ 2026-09-14, cómodo Do3–Sol4, total ~Sol2–Mi5, tenor; detalle en el perfil) |
| **Cola de conceptos** | Vacía. Los conceptos de notas y semitono ya están en `fundamentos/canto/base/`; la escala que pide canto 2.6 se enlaza desde la escalera de guitarra |
| **Próxima acción** | La evaluación de M1 con la práctica de aire/trino. En la próxima sesión de canto: ubicar la nota más aguda del coro de *Hosanna* y decidir cuántos semitonos baja su tono para caber bajo Sol4 |

---

## 📅 Semana en curso

| Campo | Valor |
|---|---|
| **Semana** | 2026-09-15 → 09-21 · Canto clase 3: **jueves 17-sep** · Guitarra clase 4: martes 22-sep |
| **Reporte guitarra** | ✅ Clase 3 (recibido 16-sep): la corchea + lectura rítmica con metrónomo · pentatónica de La menor, posición 1 (práctica, sin teoría — la teoría quedó en el apunte) |
| **Reporte canto** | Pendiente: clase 3 es el jueves 17-sep → reporte el viernes |
| **Tarea del profesor (guitarra)** | 1º Lectura rítmica → `fundamentos/guitarra/clase03/clase03_practica_lectura-ritmica.md` — 🔵 5 min · 2º Pentatónica → `fundamentos/guitarra/clase03/clase03_practica_pentatonica.md` — 🔵 5 min |
| **Tarea del profesor (canto)** | Practicar el repertorio elegido (ver `repertorio/00_indice.md` §canto). Base técnica: `fundamentos/canto/clase01/clase01_practica_respiracion-trino.md` — 🔵 5 min/día |
| **Plan de la semana** | 1. Guitarra: araña de calentamiento + **tarea de la clase 3 primero** (lectura rítmica 🔵 + pentatónica 🔵) + drill Anki 3 min (la evaluación de M1 sigue en marcha) + progresiones cuando alcance. Si un día solo hay 15 min: la tarea gana (R4). 2. Canto: calentamiento aire/trino 🔵 a diario + repertorio del profesor **en tonos que quepan bajo Sol4**; *Hosanna* bajada de tono con Moises hasta que el coro quepa cómodo (anotar los semitonos al encontrarlos). 3. Registrar cada sesión en `practica/` con su carril — **la semana pasada cerró con 0 registradas**; la técnica de los 5 minutos aplica. 4. Jueves → clase 3 de canto, **llevando la pregunta al profe: '¿me escuchas los registros? siento la voz de pecho más fácil que la de cabeza'** (observación del 14-sep, pendiente de confirmación experta) → reporte el viernes. |

---

## 🎸🎤 Sesión en curso

| Campo | Valor |
|---|---|
| **Estado** | `SIN-SESION` |
| **Carril** | — |
| **Fecha** | — |
| **Bloque actual** | — |
| **Bloques del día** | _(se escriben al abrir la sesión)_ |
| **Notas de la pausa** | _(vacío)_ |

**Estados:** `SIN-SESION` · `EN-CURSO` · `PAUSADA` (retomar en el bloque marcado) · `CERRADA` (registrada en `practica/`). Cómo se abre, se retoma y se cierra una sesión: procedimiento `sesion`.
