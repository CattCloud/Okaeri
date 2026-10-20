# Contexto — Okaeri

> Última actualización: 2026-10-20 (rediseño «Señal glitch» del panel)

## Estado

Sistema personal para aprender guitarra clásica y canto (dos carriles), comprendiendo y reteniendo, no solo ejecutando. **El estado operativo vive en `sistema/estado/estado_actual.md`** (marcador por carril, semana en curso, sesión en curso) y **las decisiones en `NOTAS.md`** — este archivo no los duplica, solo apunta y guarda lo que esos dos no cubren.

El 2026-09-25 se reescribió cómo funciona el sistema: la clase de la academia pasó a marcar la ruta de estudio y el temario pasó a ser el mapa de dependencias contra el que se audita cada concepto nuevo (R4/F14). Detalle: `NOTAS.md` → "Decisiones resueltas", 2026-09-25 y 2026-09-16.

**Al día al 2026-10-14:** clases atrasadas procesadas — guitarra 4-7 y canto 3-6, sin hueco (`practica/00_indice.md`).

**`system.html` rediseñado (2026-10-20, «Señal glitch», publicado, commit `37213ca`):** mismo contenido y funciones, mundo nuevo: el panel es una transmisión; cada carril una frecuencia, cada módulo un canal, lo que estudias está «en el aire» (rojo); lograda = «sintonizado» (cian, reemplaza al verde salvia). Tema claro por defecto y oscuro opcional, menú de icono-dial (Vistas + Tema), guía cerrada por defecto en escritorio y abierta en la publicada, fuentes incrustadas (411 KB). Sistema visual: `DESIGN.md`; producto: `PRODUCT.md`; contrato: `.impeccable/surfaces/system-html.md`; reglas y porqué: `decision_system-html.md` → «Rediseño desde cero». Respaldo del panel anterior (sin versionar): `.impeccable/system.antes-glitch.html`. Para capturas móviles, Edge headless en Windows no baja de ~492 px: usar emulación por CDP o DevTools. Se dejó preparado el hueco del futuro **héroe por carril con stats** (gamificación, criterios aún sin definir; ver `PRODUCT.md`). Antes: panel pulido el 2026-10-14 → 15. Se publica en https://cattcloud.github.io/Okaeri/ con `node sistema/herramientas/publicar-panel.mjs` (decisión del 2026-10-15: misma repo pública, rama `gh-pages`, versión de estudio sin "Pendientes" ni "Clases en orden"). Regla: después de regenerar `system.html`, volver a publicar; ya es el paso final de `escribir-apunte` y `procesar-clase`.

**Recorrido y prácticas en el panel (2026-10-15, construido):** «Pendientes» se reemplazó por **«Recorrido»**, un mapa plegable carril → módulos del temario → temas (vistos en clase o propuestos por la escalera; un tema terminado no desaparece). Cada tarjeta lleva dos etiquetas, Apunte (azul grisáceo) y Práctica (negro), con su estado por el borde; «lograda» (pasó su evaluación, ✅ del temario) se pinta con un **9º color, verde salvia `#9db39a`** (excepción explícita a «nada de verde»; hoy ninguno está logrado). Las 6 prácticas existentes se leen en el panel: cuelgan de su apunte en la barra lateral, con enlace destacado al final del apunte. **Versión publicada: opción (a)** — las prácticas se publican sin estado ni «Hasta cuándo». Se actualiza a mano: `recorrido` y `practicasData` dentro de `system.html`; paso nuevo en `escribir-practica`. Decisión completa con porqué: `sistema/decisiones/decision_system-html.md` → «Recorrido y prácticas». **Idea abierta:** convertir en herramienta (`sistema/herramientas/`) el conversor práctica `.md` → panel, que hoy fue un script desechable; pendiente de aprobación.

**Apuntes de canto (2026-10-15, commit `46bed78`):** 15 apuntes nuevos en `fundamentos/canto/clase04/` (pulso y compás, figuras, corchea, silencios), `clase05/` (notas y octavas, semitono, afinación, tesitura y rango, registro de voz, resonancia, vocales y gesticulación, articulación, vocalización) y `clase06/` (semicorchea, contratiempo), con sus diagramas SVG/PNG, `redaccion-humana` y revisor. Canto es **independiente de guitarra** (regla F15 en `fundamentos/AGENTS.md`): su hermana lo estudia sin ver guitarra y parte sin conocimientos. `apunte_2.5` se repartió y se borró. Se limpiaron las menciones a guitarra de `clase01_practica_respiracion-trino.md` y `_consulta-voz.md`. El temario de canto ganó la sección **3.5** (figuras, silencios y subdivisión; 41 secciones). Ya publicados en el panel.

## Decisiones

Viven en `NOTAS.md` → "Decisiones resueltas" (cada una con fecha y porqué). Las de 2026-10-15: canto independiente (F15), sección 3.5 del temario de canto, apuntes con `redaccion-humana`, `system.html` pulido con `impeccable`, y Recorrido + prácticas en el panel (9º color, opción (a) de publicación). Antes: `system.html` como excepción a R11 (2026-10-14). **2026-10-20** (en `decision_system-html.md`, no en NOTAS): rediseño del panel; se mantienen un carril a la vez, sin emojis, publicada sin avance y solo contenido real; se liberan paleta, estructura de 3 piezas, lector blanco 960px y «solo 18"»; dirección «Señal glitch» elegida sobre «Caja de vinilos» y «Muro de esténcil» (salieron de sus gustos: rock alternativo/Linkin Park, clásica, lofi); descartado el tema solo oscuro porque el negro base se sentía «tema oscuro».

## Siguiente paso

Reportar la clase 7 de canto (15-oct) con `procesar-clase`.

Pendiente del usuario, sin bloquear lo anterior:
1. **Contrastar con su profesor de canto** los apuntes de registro de voz, resonancia, vocales y gesticulación, articulación y vocalización (se escribieron con pedagogía estándar, no con lo que dijo el profesor; R8: manda el profesor). La hermana ya puede ver el enlace publicado.
2. **Hecho:** commits de canto y publicación (`46bed78`, `ac50496`); el del Recorrido y las prácticas, en la sesión del 2026-10-15 (noche).
3. **Prácticas de lo nuevo en canto** (aparecen como «Práctica: Falta» en el Recorrido) (vocalización, silencios y contratiempo, afinación): sin escribir (R11); se escriben cuando las pida.
4. **p-i-m-a (guitarra):** esquema presentado (concepto 8 de la cola, `estado_actual.md`), falta su OK para escribirlo.
5. **Resultado de la evaluación de la clase 5 de guitarra (29-sep):** sin eso no se mueve M1/M2/M3 a ✅.
6. Guitarra perdió la explicación «1 traste = 1 semitono» al borrar `apunte_2.5`; agregarla en un apunte de guitarra cuando toque.
7. **Push pendiente:** `main` va 3 commits adelante de `origin` (incluye `37213ca` del rediseño); no se pidió push.
8. **Gamificación (héroe con stats):** definir los criterios por carril, qué ejercicio suma a cada uno, dónde se guardan las marcas y si llega a la hermana.
9. Licencia del icono del dial (`dial-svgrepo-com.svg`, de SVG Repo): revisarla en su página.

Última conversación: Rediseño «Señal glitch» de system.html, publicado y commit 37213ca · 2026-10-20 · `claude --resume 070e730d-99eb-4770-9d55-fbedfb966323` · tarea terminada
