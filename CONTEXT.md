# Contexto — Okaeri

> Última actualización: 2026-10-15 (noche, tras el Recorrido)

## Estado

Sistema personal para aprender guitarra clásica y canto (dos carriles), comprendiendo y reteniendo, no solo ejecutando. **El estado operativo vive en `sistema/estado/estado_actual.md`** (marcador por carril, semana en curso, sesión en curso) y **las decisiones en `NOTAS.md`** — este archivo no los duplica, solo apunta y guarda lo que esos dos no cubren.

El 2026-09-25 se reescribió cómo funciona el sistema: la clase de la academia pasó a marcar la ruta de estudio y el temario pasó a ser el mapa de dependencias contra el que se audita cada concepto nuevo (R4/F14). Detalle: `NOTAS.md` → "Decisiones resueltas", 2026-09-25 y 2026-09-16.

**Al día al 2026-10-14:** clases atrasadas procesadas — guitarra 4-7 y canto 3-6, sin hueco (`practica/00_indice.md`).

**`system.html`:** panel de consulta local (excepción a R11), cerrado y pulido el 2026-10-14 → 15. Sus reglas de diseño están en `sistema/decisiones/decision_system-html.md`. Se publica en https://cattcloud.github.io/Okaeri/ con `node sistema/herramientas/publicar-panel.mjs` (decisión del 2026-10-15: misma repo pública, rama `gh-pages`, versión de estudio sin "Pendientes" ni "Clases en orden"). Regla: después de regenerar `system.html`, volver a publicar; ya es el paso final de `escribir-apunte` y `procesar-clase`.

**Recorrido y prácticas en el panel (2026-10-15, construido):** «Pendientes» se reemplazó por **«Recorrido»**, un mapa plegable carril → módulos del temario → temas (vistos en clase o propuestos por la escalera; un tema terminado no desaparece). Cada tarjeta lleva dos etiquetas, Apunte (azul grisáceo) y Práctica (negro), con su estado por el borde; «lograda» (pasó su evaluación, ✅ del temario) se pinta con un **9º color, verde salvia `#9db39a`** (excepción explícita a «nada de verde»; hoy ninguno está logrado). Las 6 prácticas existentes se leen en el panel: cuelgan de su apunte en la barra lateral, con enlace destacado al final del apunte. **Versión publicada: opción (a)** — las prácticas se publican sin estado ni «Hasta cuándo». Se actualiza a mano: `recorrido` y `practicasData` dentro de `system.html`; paso nuevo en `escribir-practica`. Decisión completa con porqué: `sistema/decisiones/decision_system-html.md` → «Recorrido y prácticas». **Idea abierta:** convertir en herramienta (`sistema/herramientas/`) el conversor práctica `.md` → panel, que hoy fue un script desechable; pendiente de aprobación.

**Apuntes de canto (2026-10-15, commit `46bed78`):** 15 apuntes nuevos en `fundamentos/canto/clase04/` (pulso y compás, figuras, corchea, silencios), `clase05/` (notas y octavas, semitono, afinación, tesitura y rango, registro de voz, resonancia, vocales y gesticulación, articulación, vocalización) y `clase06/` (semicorchea, contratiempo), con sus diagramas SVG/PNG, `redaccion-humana` y revisor. Canto es **independiente de guitarra** (regla F15 en `fundamentos/AGENTS.md`): su hermana lo estudia sin ver guitarra y parte sin conocimientos. `apunte_2.5` se repartió y se borró. Se limpiaron las menciones a guitarra de `clase01_practica_respiracion-trino.md` y `_consulta-voz.md`. El temario de canto ganó la sección **3.5** (figuras, silencios y subdivisión; 41 secciones). Ya publicados en el panel.

## Decisiones

Viven en `NOTAS.md` → "Decisiones resueltas" (cada una con fecha y porqué). Las de 2026-10-15: canto independiente (F15), sección 3.5 del temario de canto, apuntes con `redaccion-humana`, `system.html` pulido con `impeccable`, y Recorrido + prácticas en el panel (9º color, opción (a) de publicación). Antes: `system.html` como excepción a R11 (2026-10-14).

## Siguiente paso

Reportar la clase 7 de canto (15-oct) con `procesar-clase`.

Pendiente del usuario, sin bloquear lo anterior:
1. **Contrastar con su profesor de canto** los apuntes de registro de voz, resonancia, vocales y gesticulación, articulación y vocalización (se escribieron con pedagogía estándar, no con lo que dijo el profesor; R8: manda el profesor). La hermana ya puede ver el enlace publicado.
2. **Hecho:** commits de canto y publicación (`46bed78`, `ac50496`); el del Recorrido y las prácticas, en la sesión del 2026-10-15 (noche).
3. **Prácticas de lo nuevo en canto** (aparecen como «Práctica: Falta» en el Recorrido) (vocalización, silencios y contratiempo, afinación): sin escribir (R11); se escriben cuando las pida.
4. **p-i-m-a (guitarra):** esquema presentado (concepto 8 de la cola, `estado_actual.md`), falta su OK para escribirlo.
5. **Resultado de la evaluación de la clase 5 de guitarra (29-sep):** sin eso no se mueve M1/M2/M3 a ✅.
6. Guitarra perdió la explicación «1 traste = 1 semitono» al borrar `apunte_2.5`; agregarla en un apunte de guitarra cuando toque.

Última conversación: Recorrido y prácticas en el panel, publicadas (opción a) · 2026-10-15 · antes: apuntes de canto (15), temario 3.5 · `claude --resume 18a81cba-cae4-4924-9496-276cbfdf2d46` · tarea terminada
