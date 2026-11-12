# 📍 Estado actual — Marcadores, semana y sesión

> **Qué es este archivo:** el único lugar del estado del sistema (R12). Tres cosas: **dónde vas** (última clase, evaluación en curso y cola de conceptos: la ruta la marcan las clases, R4), **qué toca esta semana**, y **en qué bloque quedaste** si una sesión está a medias.
>
> **Quién lo actualiza:** el agente, con los procedimientos `sesion` (bloques y sesiones) y `procesar-clase` (la semana). El usuario puede corregirlo a mano.

---

## 🗺️ Marcador — Guitarra

| Campo | Valor |
|---|---|
| **Temario (el mapa)** | `contexto/plan_estudio/temario_guitarra.md` |
| **Última clase reportada** | 8 (2026-10-20): arpegio otra vez, con metrónomo subiendo la velocidad; 5 fragmentos distintos en TAB, sin concepto teórico nuevo. Clases 4-8 ya registradas (`practica/00_indice.md`), sin hueco |
| **Vistas en clase (🏫), sin evaluar** | M1: casi completo · M2: anclas y cambios · M3: pulso, figuras, 4/4, metrónomo · M5: La, Mi, Rem + progresiones · M6: la corchea, lectura rítmica · M8: la TAB · pentatónica de La, posiciones 1, 2-5 y 7-10 (trastes) · dedos p-i-m-a y arpegio sobre acordes (con corrección física: dedos pegados a la cuerda) |
| **Evaluación en curso** | M1: los 8 acordes de memoria, limpios, en <5 s, 2 días seguidos (drill de Anki). Al salir → M1 ✅. **Pendiente:** la clase 5 (29-sep) trajo una evaluación general de acordes/cambios/ritmo — falta saber el resultado para saber si M1/M2/M3 pasan a ✅ |
| **Cola de conceptos** (uno por sesión, cada uno con su esquema aprobado antes de escribirse) | La escalera de la pentatónica: 1. Sostenido y bemol · 2. Tono y semitono · 3. Nombrar la nota de un traste · 4. La escala y su tónica · 5. La escala menor · 6. La pentatónica · 7. La caja del mástil. **Segundo hilo abierto por la clase 5 (M8 instrumental):** 8. p-i-m-a (dedos de la mano derecha) — esquema presentado 2026-10-13, **esperando OK** · 9. Arpegio sobre acordes — espera a que 8 esté escrito |
| **Próxima acción** | 1º la tarea del profesor: la práctica de arpegio (`fundamentos/guitarra/clase08/clase08_practica_arpegio.md`) · 2º el drill de Anki de M1 · 3º el OK del esquema de p-i-m-a (concepto 8) para escribirlo · 4º el resultado de la evaluación de la clase 5 |

## 📅 Semana en curso

| Campo | Valor |
|---|---|
| **Semana** | 2026-10-20 → 10-26 · Guitarra clase 9: martes 27-oct |
| **Reporte guitarra** | ✅ Clase 8 (20-oct): arpegio, 5 fragmentos distintos en TAB, con metrónomo subiendo la velocidad. Antes, clases 4-7: pentatónica en más cajas · evaluación general (resultado pendiente de contar) · arpegio con p-i-m-a |
| **Tarea del profesor (guitarra)** | Practicar los 5 fragmentos de arpegio con metrónomo subiendo de velocidad (corrección: dedos pegados a la cuerda) — **práctica escrita 2026-10-20**: `fundamentos/guitarra/clase08/clase08_practica_arpegio.md`. Las cajas de la pentatónica siguen sin práctica escrita |
| **Plan de la semana** | 1. Resolver primero la decisión abierta: el OK del esquema de p-i-m-a. 2. Guitarra: drill Anki 3 min (M1 sigue en evaluación) + arpegio y pentatónica de tarea. 3. Registrar cada sesión en `practica/` — sigue en 0 registradas; la técnica de los 5 minutos aplica. |

---

## 🎯 Bolsa de objetivos

> La fuente de la vista «Hoy» de la web (`.impeccable/prototipo/`; decisión: `sistema/decisiones/decision_hoy.md`; la vista aún no existe). Cada objetivo es de proceso, con su variante mínima de 2 min y, si aplica, una en silencio. El panel muestra uno solo por día; esta lista no se le enseña al usuario como lista. Prioridad: tarea del profesor → evaluación en curso → cola de conceptos. **Abre** = lo que aparece cuando este se cierra.

| # | Carril | Prioridad | Objetivo (versión completa) | Mínimo (2 min) | En silencio | Abre |
|---|---|---|---|---|---|---|
| G1 | guitarra | tarea | Fragmento 1 del arpegio con metrónomo, 10 min (`clase08_practica_arpegio.md`) | V1 del arpegio, una vuelta | drill de Anki de M1, 3 min | G2 |
| G2 | guitarra | tarea | Fragmentos 2 y 3 del arpegio, 10 min | V2, una vuelta | drill de Anki de M1 | G3 |
| G3 | guitarra | tarea | Fragmentos 4 y 5 del arpegio, 10 min | V4, una vuelta | drill de Anki de M1 | — |
| G4 | guitarra | evaluación | Drill de Anki de M1: los 8 acordes en <5 s, 3 min | 3 tarjetas | mismo (no suena) | M1 ✅ si sale 2 días seguidos |
| G5 | guitarra | cola | Dar el OK o corregir el esquema de p-i-m-a (concepto 8), en conversación | leer el esquema | mismo | escribir el apunte de p-i-m-a |

**Ventanas:** guitarra, cuarto con luz prendida, cualquier hora · fuera de ventana, la columna «En silencio». Los martes el objetivo es la clase; el día siguiente, reportarla.

---

## 🎸 Sesión en curso

| Campo | Valor |
|---|---|
| **Estado** | `SIN-SESION` |
| **Carril** | — |
| **Fecha** | — |
| **Bloque actual** | — |
| **Bloques del día** | _(se escriben al abrir la sesión)_ |
| **Notas de la pausa** | _(vacío)_ |

**Estados:** `SIN-SESION` · `EN-CURSO` · `PAUSADA` (retomar en el bloque marcado) · `CERRADA` (registrada en `practica/`). Cómo se abre, se retoma y se cierra una sesión: procedimiento `sesion`.
