# Contexto — Okaeri

> Última actualización: 2026-10-15 (tarde)

## Estado

Sistema personal para aprender guitarra clásica y canto (dos carriles), comprendiendo y reteniendo, no solo ejecutando. **El estado operativo vive en `sistema/estado/estado_actual.md`** (marcador por carril, semana en curso, sesión en curso) y **las decisiones en `NOTAS.md`** — este archivo no los duplica, solo apunta y guarda lo que esos dos no cubren.

El 2026-09-25 se reescribió cómo funciona el sistema: la clase de la academia pasó a marcar la ruta de estudio y el temario pasó a ser el mapa de dependencias contra el que se audita cada concepto nuevo (R4/F14). Detalle: `NOTAS.md` → "Decisiones resueltas", 2026-09-25 y 2026-09-16.

**Al día al 2026-10-14:** clases atrasadas procesadas — guitarra 4-7 y canto 3-6, sin hueco (`practica/00_indice.md`). Se construyó `system.html`: panel de consulta local, excepción documentada a R11.

**`system.html` cerrado (2026-10-14 → 15):** integrado a la constitución (`AGENTS.md`: Mapa + "Dónde vive cada cosa" + `.gitignore`), con los 11 apuntes reales conectados (ya no queda ninguno "mockup"), y pulido con la skill `impeccable`: navegación e interacción por teclado en toda la barra lateral y el menú, foco visible, `prefers-reduced-motion`, limpieza de CSS muerto. Medida de lectura: primer intento (texto angosto + imágenes a ancho completo) se veía disparejo — corregido a un solo ancho de 960px para texto, tablas e imágenes. Contraste: se sumó un **8º color** a la paleta con OK explícito del usuario ("siempre que combine"), `--text-strong:#63707a`, mismo tono que el acento, para el texto secundario. Detalle y el porqué de cada número: `sistema/decisiones/decision_system-html.md`.

**Apuntes de canto escritos (2026-10-15, esta sesión, sin commit):** 14 apuntes nuevos en `fundamentos/canto/clase04/`, `clase05/` y `clase06/`, con 11 diagramas SVG/PNG, pasados por `redaccion-humana` y el revisor. Canto pasó a ser **independiente de guitarra** (regla F15 en `fundamentos/AGENTS.md`; la estudia también la hermana del usuario, que parte sin conocimientos): sin enlaces a guitarra, sin datos personales. `apunte_2.5` se repartió en los nuevos y se borró (`canto/base/`). `system.html` regenerado con los 14 (respaldo local en el scratchpad de la sesión). Los apuntes de guitarra enlazan ahora a los de canto para notas, octavas y semitono.

**Redacción humana:** ya aplicada por otro agente a guitarra clases 2-3 y canto `clase01` (dato del usuario, 2026-10-15). `system.html` puede no reflejar ese texto corregido todavía.

## Decisiones

Viven en `NOTAS.md` → "Decisiones resueltas" (cada una con fecha y porqué). Las más recientes, ambas 2026-10-15: `system.html` pulido con `impeccable` (8º color, ancho uniforme, accesibilidad) y apuntes con `redaccion-humana`. Antes: `system.html` como excepción a R11 (2026-10-14).

## Siguiente paso

Reportar la clase 7 de canto (15-oct) con `procesar-clase`. Después, decidir con el usuario si se escriben las prácticas de canto de lo nuevo (vocalización, silencios y contratiempo, afinación) y limpiar lo que aún rompe F15 en canto: `clase01_practica_respiracion-trino.md` (menciona guitarra) y `_consulta-voz.md` (menciona guitarra en la afinación).

Pendiente del usuario, sin bloquear lo anterior:
1. **p-i-m-a (guitarra):** esquema presentado (concepto 8 de la cola, `estado_actual.md`) — falta su OK para escribirlo.
2. **Resultado de la evaluación de la clase 5 de guitarra (29-sep):** sin eso no se puede mover M1/M2/M3 a ✅.

Última conversación: apuntes de canto (14) escritos y `system.html` regenerado · 2026-10-15 · `claude --resume 18a81cba-cae4-4924-9496-276cbfdf2d46` · tarea terminada
