---
version: 1
slug: "system-html"
primary_target: "system.html"
related_targets: []
---

## Alcance

La web de apuntes de guitarra (`.impeccable/prototipo/index.html`, que genera `build.cjs`; reemplazó a `system.html` el 2026-11-11 y ya no se publica). Rediseño: mundo visual nuevo (el universo pixel del árbol-conservatorio), mismo contenido. Solo carril guitarra (canto se dejó el 2026-11-06).

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

## Carrusel de apuntes (definido y construido 2026-11-12; aprobado por el usuario)

Porqué (usuario): con scroll continuo y separadores, el módulo se lee como un solo apunte largo; no se siente que entras a otro apunte.

Solo escritorio (≥1200 px). Bajo 1200 px queda el flujo apilado actual, con sus separadores (tableta y móvil aparcados).

- **Escenario:** el módulo pasa a ser un escenario de 100svh. La página sigue siendo hero → franja → escenario, y termina ahí: el cierre deja de ser una sección aparte.
- **Una página por apunte**, más una página final de cierre. La escena queda a la izquierda y la hoja de 750 px a la derecha, como ahora. La hoja vuelve arriba al entrar. **Una sola barra vertical (usuario, 2026-11-12; reemplaza «la hoja tiene su propio scroll»):** la de la página; el escenario queda fijo y la hoja sigue al scroll de la página (ver `DESIGN.md` → Carousel).
- **Transición:** dentro de la misma escena, la escena queda quieta (es un solo lienzo) y solo se desliza la hoja. La nueva entra por la derecha con «siguiente» y por la izquierda con «anterior», y la saliente sale por el lado opuesto. Dura ~420 ms con ease-out exponencial (`cubic-bezier(.16,1,.3,1)`), solo `transform`. Al cruzar de la fogata al muelle (la mitad del módulo) se desliza el escenario entero, escena y hoja. Con `prefers-reduced-motion` el cambio es directo.
- **Navegación:** barra al pie de la hoja, fija dentro de ella, sobre papel con filete `linea`:
  - a la izquierda, «‹ Anterior» (no aparece en el primer apunte);
  - al centro, «2 de 6» en Jersey label-small, `tinta-2`;
  - a la derecha, «Siguiente: <título> ›», que en el último apunte dice «Fin del módulo ›».
  - Los botones son de 48 px con marco tinta, como Teoría/Práctica.
  - Las flechas ← → del teclado funcionan cuando el foco no está en un campo.
  - Al llegar a una página, el foco pasa a su título (`preventScroll`).
- **Página de cierre:** el escenario entero en `noche`, con «Fin de <módulo>», «Módulo siguiente» y «‹ Volver al último apunte». Su sonido es el pantano si el módulo tiene muelle.
- **Saltos:** el drawer, los enlaces internos y el hash llegan con la misma animación. Si el salto es largo, se hace un solo deslizamiento hacia el destino. Teoría/Práctica sigue dentro de cada página.
- **Accesibilidad:**
  - el escenario lleva `aria-roledescription="carrusel"`;
  - cada página lleva `role="group"`, `aria-roledescription="apunte"` y una etiqueta «2 de 6: <título>»;
  - las páginas inactivas quedan `inert`.
- **Se quitan en escritorio:** `.sep` (las cuerdas entre apuntes) y `.paso` (la línea dorada entre escenas). Las funciones quedan en `separadores.cjs` como referencia.
- **Fuera de alcance:** deslizar con la rueda horizontal, el trackpad o el gesto de swipe (se activarían sin querer).

## Pendiente

- Archivar el carril de canto en el repositorio (R10).
- Fuentes (usuario, 2026-11-09): pixel = Jersey 15 (títulos, botones, franja, drawer; ~1.3x el tamaño de referencia); lectura = Atkinson Hyperlegible. Descartadas: DotGothic16 (letras pegadas), Pixelify Sans (letras chicas), Silkscreen. Comparación: `.impeccable/mocks/fuentes/comparar2.html`.
- Drawer (usuario, 2026-11-09): ruta de apuntes del módulo con su práctica colgando + los otros módulos + buscador + Clases en orden (ya sin «solo versión personal»: no hay versión publicada).
- Módulos (2026-11-11): `build.cjs` lee todos los módulos de los .md (`modulo:` del frontmatter); se elige uno en la franja o en el drawer y sus apuntes entran en las dos escenas. Hoy tienen apuntes M1, M3, M6 y M8; los demás dicen «Sin apuntes aún». Una práctica sin apunte (arpegio, M8) entra suelta. Superficie de Lectura → code-led (sin comp).
- Capas del hero: hechas y aprobadas (usuario, 2026-11-09): `.impeccable/mocks/lugares/hero/capas/` (script `capas.cjs`, prueba `prueba.html`).
