# 📍 Estado actual — Marcadores, semana y sesión

> **Qué es este archivo:** la memoria de corto plazo del sistema. Tres cosas: **dónde vas en cada mapa** (guitarra y canto), **qué toca esta semana**, y **en qué bloque quedaste** si una sesión está a medias.
>
> **Regla de oro:** una conversación cerrada NO significa una sesión terminada. Si el usuario se va a mitad de sesión —avise o no—, la sesión queda `PAUSADA` en el bloque exacto. Al volver (aunque sea otro día), se retoma **ese bloque**. **El silencio del usuario durante una sesión significa que está tocando (o cantando)**, no que se fue.
>
> **Quién lo actualiza:** el agente, al abrir/cerrar cada bloque y cada semana. El usuario puede corregirlo a mano.

---

## 🗺️ Marcador — Guitarra

| Campo | Valor |
|---|---|
| **Temario** | `contexto/plan_estudio/temario_guitarra.md` |
| **Módulo actual** | **Evaluación de M1** (absorbió a la Sesión 0) |
| **Secciones completadas** | 0 / 53 |
| **Vistas en clase (🏫), no completadas** | M1: casi completo · M2: anclas y cambios · M3: pulso, figuras, 4/4, metrónomo · M5: La, Mi, Rem + progresiones · M8: la TAB |
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
| **Semana** | 2026-09-08 → 09-14 (cierra hoy) · Guitarra clase 3: **martes 15-sep** · Canto clase 3: **jueves 17-sep** |
| **Reporte guitarra** | ✅ Clase 2 (11-sep): los 8 acordes, progresiones, anclas |
| **Reporte canto** | ✅ Clases 1-2 (recibido 14-sep): respiración diafragma+costados · papel en pared · trino · consigna: elegir 2-3 canciones para trabajar cada clase |
| **Tarea del profesor (guitarra)** | Las 4 progresiones → `fundamentos/guitarra/m1/clase02_practica_progresiones.md` — 🔵 6 min/día |
| **Tarea del profesor (canto)** | Practicar el repertorio elegido (ver `repertorio/00_indice.md` §canto). Base técnica: `fundamentos/canto/m1/clase01_practica_respiracion-trino.md` — 🔵 5 min/día |
| **Plan de la semana** | 1. Guitarra: araña 🔵 + progresiones + drill Anki 3 min (la evaluación de M1 en marcha). 2. Canto: calentamiento aire/trino 🔵 a diario + repertorio del profesor **en tonos que quepan bajo Sol4** (los agudos de *Hosanna* no se empujan). 3. El repertorio de canto sigue la rutina de `fundamentos/canto/_consulta-voz.md` (calentar → frases → enfriar). *Hosanna* se practica **bajada de tono con Moises** hasta que el coro quepa cómodo; el número de semitonos se anota al encontrarlo. 4. Registrar cada sesión en `practica/` con su carril. 5. Martes → reporte guitarra clase 3 · Jueves → reporte canto clase 3, **llevando esta pregunta al profe: '¿me escuchas los registros? siento la voz de pecho más fácil que la de cabeza'** (observación del 14-sep, pendiente de confirmación experta). |

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

**Estados:** `SIN-SESION` · `EN-CURSO` · `PAUSADA` (retomar en el bloque marcado) · `CERRADA` (registrada en `practica/`).

---

## Protocolo (para el agente)

1. **Al inicio de TODA conversación de práctica:** leer este archivo PRIMERO. Nunca asumir que la sesión anterior terminó ni que toca la siguiente sección.
2. **Si `PAUSADA`:** retomar en el bloque marcado con un repaso de una frase. No saltar.
3. **Si `SIN-SESION` o `CERRADA`:** abrir la sesión con lo que el plan de la semana diga — **tarea del profesor primero** (la del carril de la sesión), luego la sección del mapa.
4. **Al abrir una sesión:** anotar el carril y escribir los bloques del día aquí. Entregar el primer bloque **completo** y dejar tocar/cantar. **No preguntar por cada movimiento.**
5. **Al cerrar un bloque:** marcarlo. Si el usuario no respondió en horas o días, la sesión pasa a `PAUSADA` sola, sin reproche.
6. **Al cerrar una sección del mapa:** actualizar su marcador. **Al cerrar un módulo:** correr su evaluación (está en el temario) y **ahí sí preguntar** — ¿avanzamos o repetimos?
7. **Solo con confirmación explícita:** sesión `CERRADA` + nota en `practica/` + fila en `practica/00_indice.md`.
8. **Miércoles (tras el martes de guitarra) y viernes (tras el jueves de canto):** pedir el reporte de tres líneas del carril, marcar 🏫 en su mapa, escribir/actualizar el apunte, y reescribir "Semana en curso".
9. **El piso de guitarra (15 min ×3-4) no se negocia por el canto**; el canto tiene el suyo (10 min ×3, propuesta). Si un día solo alcanza para un carril, se registra cuál, sin culpa.
10. **Si pasó una semana sin sesión:** nombrar el hecho con exactitud, abrir la puerta, retomar aquí. *Okaeri.*
