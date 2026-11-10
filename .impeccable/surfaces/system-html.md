---
version: 1
slug: "system-html"
primary_target: "system.html"
related_targets: []
---

## Alcance

`system.html`, la web de apuntes de guitarra (versión personal y la de estudio que arma `sistema/herramientas/publicar-panel.mjs`). Rediseño: mundo visual nuevo (el universo pixel del árbol-conservatorio), mismo contenido. Solo carril guitarra (canto se dejó el 2026-11-06).

## Modo

Lectura, con un hero de Experiencia. El mundo es dueño del marco (hero, escenas, franja de módulos, drawer); la columna del apunte queda tranquila: blanco, 750 px, contraste AA.

## Estrategia de la superficie

- Uso: antes de practicar, con la guitarra en la mano y leyendo con calma.
- Un módulo a la vez; la franja abre con el módulo en curso. Primera mitad del módulo con la fogata, segunda con el muelle (impar: la primera lleva uno más).
- Prácticas: se cambia de teoría a práctica en el sitio del apunte, sin scroll; también desde el drawer.
- Escenas existentes: `.impeccable/mocks/lugares/fogata/fogata_anim.html`, `.impeccable/mocks/lugares/muelle/muelle_anim.html`.
- Futuro: tarjeta de personaje con stats; no se construye ahora.

## Direction contract

THESIS: entrar a Okaeri es volver al árbol: ves el paisaje, cruzas el bosque y estudias junto a la fogata o en el muelle. Rechaza el panel de progreso con tarjetas y barras y el sitio de documentación con barra lateral.

OWN-WORLD: todo lo dibujado es pixel art del mismo lugar (hero de día pleno; escenas de noche: azul de lago, ámbar de fuego). El apunte va sobre blanco a 750 px en fuente de lectura; títulos, botones y drawer en fuente pixel, nunca la lectura. Sin emojis.

STORY: abres y ves el árbol; tocas sonido y entra la música celta; eliges módulo (ya viene el tuyo); bajas, el bosque cubre todo y aparece la fogata con el primer apunte; a mitad del módulo pasa al muelle y el sonido funde al pantano; al final, «Módulo siguiente →».

FIRST VIEWPORT: paisaje pixel a pantalla completa, cámara frontal, el gran árbol al centro con el río a sus pies; «okaeri» arriba, botón de sonido en una esquina, señal discreta para bajar. Nada más. Debajo, la franja de módulos.

FORM: dirección fijada por el usuario (hero tipo Firewatch + escenas de dos cortes); sin sorteo. Gestos: capas del hero que se desplazan a distinta velocidad al scroll hasta que el bosque del frente cubre la pantalla; cambio de escena a mitad del módulo; fundido de audio por escena; teoría/práctica en su sitio. Sobre el apunte solo el botón del drawer. Con `prefers-reduced-motion`, capas quietas y cortes limpios. seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Pendiente

- Archivar el carril de canto en el repositorio (R10).
- Fuentes (usuario, 2026-11-09): pixel = Jersey 15 (títulos, botones, franja, drawer; ~1.3x el tamaño de referencia); lectura = Atkinson Hyperlegible. Descartadas: DotGothic16 (letras pegadas), Pixelify Sans (letras chicas), Silkscreen. Comparación: `.impeccable/mocks/fuentes/comparar2.html`.
- Drawer (usuario, 2026-11-09): ruta de apuntes del módulo con su práctica colgando + los otros módulos + buscador + Clases en orden (solo versión personal).
- Prototipo: un módulo real (el en curso) leído de los .md; los demás módulos solo como botones en la franja. Superficie de Lectura → code-led (sin comp).
- Capas del hero: hechas y aprobadas (usuario, 2026-11-09): `.impeccable/mocks/lugares/hero/capas/` (script `capas.cjs`, prueba `prueba.html`).
