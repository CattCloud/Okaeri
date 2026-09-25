# 📍 Estado actual — Marcadores, semana y sesión

> **Qué es este archivo:** el único lugar del estado del sistema (R12). Tres cosas: **dónde vas en cada mapa** (guitarra y canto), **qué toca esta semana**, y **en qué bloque quedaste** si una sesión está a medias.
>
> **Quién lo actualiza:** el agente, con los procedimientos `sesion` (bloques y sesiones) y `procesar-clase` (la semana). El usuario puede corregirlo a mano.

---

## 🗺️ Marcador — Guitarra

| Campo | Valor |
|---|---|
| **Temario** | `contexto/plan_estudio/temario_guitarra.md` |
| **Módulo actual** | **Evaluación de M1** (absorbió a la Sesión 0) |
| **Secciones completadas** | 0 / 53 |
| **Vistas en clase (🏫), no completadas** | M1: casi completo · M2: anclas y cambios · M3: pulso, figuras, 4/4, metrónomo · M5: La, Mi, Rem + progresiones · M6: la corchea, lectura rítmica (clase 3) · M8: la TAB · pentatónica de La, posición 1 (clase 3) |
| **Próxima acción** | Con el drill de Anki, producir los 8 acordes de memoria, limpios, en <5 s. Al salir 2 días seguidos → M1 ✅, marcador a M2 (pre-cargado por la clase 2). |

## 🗺️ Marcador — Canto

| Campo | Valor |
|---|---|
| **Temario** | `contexto/plan_estudio/temario_canto.md` |
| **Módulo actual** | **M1 — evaluación pendiente** (Sesión 0: rango vocal ✅ 2026-09-14) |
| **Secciones completadas** | 0 / 40 |
| **Vistas en clase (🏫), no completadas** | M1: respiración costo-diafragmática, papel, trino (clase 1) |
| **Próxima acción** | **Rango medido: cómodo Do3–Sol4, total ~Sol2–Mi5, tenor** (detalle en el perfil). Ahora: evaluación de M1 (siseo parejo ≥20 s · nota cómoda 8 s estable) con la práctica de aire/trino. En la próxima sesión de canto: ubicar la nota más aguda del coro de *Hosanna* y decidir cuántos semitonos baja su tono para caber bajo Sol4. |

---

## 📅 Semana en curso

| Campo | Valor |
|---|---|
| **Semana** | 2026-09-15 → 09-21 · Canto clase 3: **jueves 17-sep** · Guitarra clase 4: martes 22-sep |
| **Reporte guitarra** | ✅ Clase 3 (recibido 16-sep): la corchea + lectura rítmica con metrónomo · pentatónica de La menor, posición 1 (práctica, sin teoría — la teoría quedó en el apunte) |
| **Reporte canto** | Pendiente: clase 3 es el jueves 17-sep → reporte el viernes |
| **Tarea del profesor (guitarra)** | 1º Lectura rítmica → `fundamentos/guitarra/m6/clase03_practica_lectura-ritmica.md` — 🔵 5 min · 2º Pentatónica → `fundamentos/guitarra/m8/clase03_practica_pentatonica.md` — 🔵 5 min |
| **Tarea del profesor (canto)** | Practicar el repertorio elegido (ver `repertorio/00_indice.md` §canto). Base técnica: `fundamentos/canto/m1/clase01_practica_respiracion-trino.md` — 🔵 5 min/día |
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
