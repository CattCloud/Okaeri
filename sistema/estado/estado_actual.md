# 📍 Estado actual — Marcador, semana y sesión

> **Qué es este archivo:** la memoria de corto plazo del sistema. Tres cosas: **dónde vas en el mapa**, **qué toca esta semana**, y **en qué bloque quedaste** si una sesión está a medias.
>
> **Regla de oro:** una conversación cerrada NO significa una sesión terminada. Si el usuario se va a mitad de sesión —avise o no—, la sesión queda `PAUSADA` en el bloque exacto. Al volver (aunque sea otro día), se retoma **ese bloque**. **El silencio del usuario durante una sesión significa que está tocando**, no que se fue.
>
> **Quién lo actualiza:** el agente, al abrir/cerrar cada bloque y cada semana. El usuario puede corregirlo a mano.

---

## 🗺️ Marcador del mapa

| Campo | Valor |
|---|---|
| **Temario** | `contexto/plan_estudio/temario_guitarra.md` |
| **Módulo actual** | **Sesión 0 — diagnóstico** (antes de M1) |
| **Sección actual** | — |
| **Secciones completadas** | 0 / 53 |
| **Vistas en clase (🏫), no completadas** | M1: casi completo (clase 2: diagrama + los 8 acordes) · M2: anclas y cambios · M3: pulso, figuras, 4/4, metrónomo · M5: La, Mi, Rem + progresiones · M8: la TAB |
| **Próxima acción** | **Evaluación de M1** (absorbe a la Sesión 0, que la clase 2 volvió innecesaria): con el drill de Anki, producir los 8 acordes de memoria, limpios, en <5 s cada uno. Cuando salga 2 días seguidos → M1 ✅ y el marcador avanza a M2, que la clase ya pre-cargó. |

---

## 📅 Semana en curso

| Campo | Valor |
|---|---|
| **Semana** | 2026-09-08 → 09-14 · Clase 2 hecha ✅ · Clase 3: martes **15-sep** |
| **Reporte del martes** | ✅ Clase 2 (recibido 11-sep): diagramas de acorde · los 8 acordes (C, D, E, G, A, Em, Am, Dm) · 4 progresiones con tiempos · técnica de cambio (anclas, no levantar la mano) · digitaciones del profe (G a 4 dedos, D estándar) |
| **Tarea del profesor** | **Las 4 progresiones** → `fundamentos/m1/clase02_practica_progresiones.md` — 🔵 mínimo 6 min/día |
| **Plan de la semana** | 1. Calentar con la araña (nivel 🔵, 5 min). 2. **Progresiones a diario** — la tarea va primero. 3. **Importar el mazo nuevo** (`sistema/herramientas/anki-acordes/`) y drill de 3 min al cierre de cada sesión (es la evaluación de M1 en marcha). 4. Registrar cada sesión en `practica/`. 5. Martes 15-sep → reporte de la clase 3. |

---

## 🎸 Sesión en curso

| Campo | Valor |
|---|---|
| **Estado** | `SIN-SESION` |
| **Fecha** | — |
| **Bloque actual** | — |
| **Bloques del día** | _(se escriben al abrir la sesión)_ |
| **Notas de la pausa** | _(vacío)_ |

**Estados:** `SIN-SESION` · `EN-CURSO` · `PAUSADA` (retomar en el bloque marcado) · `CERRADA` (registrada en `practica/`).

---

## Protocolo (para el agente)

1. **Al inicio de TODA conversación de práctica:** leer este archivo PRIMERO. Nunca asumir que la sesión anterior terminó ni que toca la siguiente sección.
2. **Si `PAUSADA`:** retomar en el bloque marcado con un repaso de una frase. No saltar.
3. **Si `SIN-SESION` o `CERRADA`:** abrir la sesión con lo que el plan de la semana diga — **tarea del profesor primero**, luego la sección del mapa.
4. **Al abrir una sesión:** escribir los bloques del día aquí. Entregar el primer bloque **completo** (explicación · diagrama · qué hacer · cómo suena bien · 3 errores y arreglo · cuándo ya está · qué sigue) y dejar tocar. **No preguntar por cada movimiento.**
5. **Al cerrar un bloque:** marcarlo. Si el usuario no respondió en horas o días, la sesión pasa a `PAUSADA` sola, sin reproche.
6. **Al cerrar una sección del mapa:** actualizar el marcador. **Al cerrar un módulo:** correr su evaluación (está en el temario) y **ahí sí preguntar** — ¿avanzamos o repetimos?
7. **Solo con confirmación explícita:** sesión `CERRADA` + nota en `practica/` + fila en `practica/00_indice.md`.
8. **Cada miércoles (tras la clase del martes):** pedir el reporte de tres líneas (qué se vio · qué tarea · qué no entendió), marcar 🏫 en el mapa, escribir/actualizar el apunte, y reescribir la sección "Semana en curso".
9. **Si pasó una semana sin sesión:** nombrar el hecho con exactitud, abrir la puerta, retomar aquí. *Okaeri.*
