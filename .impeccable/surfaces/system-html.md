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
- Prácticas: cada una se abre en su propia vista a pantalla completa («Práctica ›» en el apunte o desde el drawer); ver «Vista de Práctica…» más abajo. (Antes se alternaba con el apunte en su sitio.)
- Escenas existentes: `.impeccable/mocks/lugares/fogata/fogata_anim.html`, `.impeccable/mocks/lugares/muelle/muelle_anim.html`.
- Futuro: tarjeta de personaje con stats; no se construye ahora.

## Direction contract

THESIS: entrar a Okaeri es volver al árbol: ves el paisaje, cruzas el bosque y estudias junto a la fogata o en el muelle. Rechaza el panel de progreso con tarjetas y barras y el sitio de documentación con barra lateral.

OWN-WORLD: todo lo dibujado es pixel art del mismo lugar (hero de día pleno; escenas de noche: azul de lago, ámbar de fuego). El apunte va sobre blanco a 750 px en fuente de lectura; títulos, botones y drawer en fuente pixel, nunca la lectura. Sin emojis.

STORY: abres y ves el árbol; eliges módulo (ya viene el tuyo); bajas, el bosque cubre todo y aparece la fogata con el primer apunte; a mitad del módulo pasa al muelle; al final, «Módulo siguiente →». (El sonido, celta y pantano, se pospuso el 2026-11-13 y se quitó el botón.)

FIRST VIEWPORT: paisaje pixel a pantalla completa, cámara frontal, el gran árbol al centro con el río a sus pies; «okaeri» arriba, botón del tema en una esquina (2026-11-13), señal discreta para bajar. Nada más. Debajo, la franja de módulos.

FORM: dirección fijada por el usuario (hero tipo Firewatch + escenas de dos cortes); sin sorteo. Gestos: capas del hero que se desplazan a distinta velocidad al scroll hasta que el bosque del frente cubre la pantalla; cambio de escena a mitad del módulo; teoría/práctica en su sitio. Sobre el apunte solo el botón del drawer. Con `prefers-reduced-motion`, capas quietas y cortes limpios. seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Carrusel de apuntes (definido y construido 2026-11-12; aprobado por el usuario)

Porqué (usuario): con scroll continuo y separadores, el módulo se lee como un solo apunte largo; no se siente que entras a otro apunte.

Solo escritorio (≥1200 px). Bajo 1200 px queda el flujo apilado actual, con sus separadores (tableta y móvil aparcados).

- **Escenario:** el módulo pasa a ser un escenario de 100svh. La página sigue siendo hero → franja → escenario, y termina ahí: el cierre deja de ser una sección aparte.
- **Una página por apunte**, más una página final de cierre. La escena queda a la izquierda y la hoja de 750 px a la derecha, como ahora. La hoja vuelve arriba al entrar. **Una sola barra vertical (usuario, 2026-11-12; reemplaza «la hoja tiene su propio scroll»):** la de la página; el escenario queda fijo y la hoja sigue al scroll de la página (ver `DESIGN.md` → Carousel).
- **Transición:** dentro de la misma escena, la escena queda quieta (es un solo lienzo) y solo se desliza la hoja. La nueva entra por la derecha con «siguiente» y por la izquierda con «anterior», y la saliente sale por el lado opuesto. Dura 700 ms con `cubic-bezier(.65,0,.35,1)` (acelera y frena parejo; era 420 ms con ease-out exponencial y pasaba veloz, usuario, 2026-11-12; es el mismo tiempo y curva de la vista de Práctica), solo `transform`. Al cruzar de la fogata al muelle (la mitad del módulo) se desliza el escenario entero, escena y hoja. Con `prefers-reduced-motion` el cambio es directo.
- **Navegación:** barra al pie de la hoja, fija dentro de ella, sobre papel con filete `linea`:
  - a la izquierda, «‹ Anterior» (no aparece en el primer apunte);
  - al centro, «2 de 6» en Jersey label-small, `tinta-2`;
  - a la derecha, «Siguiente: <título> ›», que en el último apunte dice «Fin del módulo ›».
  - Los botones son de 48 px con marco tinta, como Teoría/Práctica.
  - Las flechas ← → del teclado funcionan cuando el foco no está en un campo.
  - Al llegar a una página, el foco pasa a su título (`preventScroll`).
- **Página de cierre:** el escenario entero en `noche`, con «Fin de <módulo>», «Módulo siguiente» y «‹ Volver al último apunte».
- **Saltos:** el drawer, los enlaces internos y el hash llegan con la misma animación. Si el salto es largo, se hace un solo deslizamiento hacia el destino. La práctica de cada apunte se abre en su vista a pantalla completa, no dentro de la página.
- **Accesibilidad:**
  - el escenario lleva `aria-roledescription="carrusel"`;
  - cada página lleva `role="group"`, `aria-roledescription="apunte"` y una etiqueta «2 de 6: <título>»;
  - las páginas inactivas quedan `inert`.
- **Se quitan en escritorio:** `.sep` (las cuerdas entre apuntes) y `.paso` (la línea dorada entre escenas). Las funciones quedan en `separadores.cjs` como referencia.
- **Fuera de alcance:** deslizar con la rueda horizontal, el trackpad o el gesto de swipe (se activarían sin querer).

## Vista de Práctica a pantalla completa y tema del sistema (definido 2026-11-12; paso 1 construido y revisado el mismo día; paso 2 construido el 2026-11-13: el tema en la hoja del apunte y el visor, y el botón en el drawer)

Porqué (usuario): entrar a una práctica y ver de inmediato qué tocar; con la escena al lado las TABs (~2667 px de ancho, ~3,2:1) salen chicas. En los apuntes la escena sí acompaña. Modo de la vista: Operate (con el instrumento en la mano).

- **Entrada:** un solo botón «Práctica ›» en el apunte (reemplaza el par Teoría/Práctica; `ver()` de `app.js` se simplifica), el drawer (las prácticas cuelgan de su apunte), el hash `#p-…` y el arpegio de la clase 8 (sin apunte). «‹ Volver al apunte» y Esc regresan. Si un apunte tiene varias prácticas, cada una tiene su entrada.
- **Sin escena** (y, mientras el sonido esté pospuesto, sin música).
- **Barra superior:** «‹ Volver al apunte», título en Jersey, selector de columnas (1 · 2 · 3; por defecto 2) y botón de tema. 4 columnas se descartó: cada TAB quedaría ~430 × 135 px en 18", ilegible a distancia de brazo.
- **«Cómo se hace»:** todas las imágenes en cuadrícula, cada una sobre papel blanco con marco pixel y su etiqueta (V1…Vn, o el nombre antes de la coma del alt). Clic → visor de imágenes, que recorre las versiones con ← →. Debajo, la tabla «Versión · Tempo · Dónde» entera.
- **Después:** «Qué estás mejorando» (corto desde el `.md`: F4 cambia por `nueva-regla` a 2-3 líneas y se reescriben las 6 prácticas antes de construir) y, plegados, «Si sale mal» y «Hasta cuándo». Fuera de la web: la cita inicial, «Cómo suena cuando está bien», «Afinación del instructor», «Qué sigue» y «Verificación».
- **Columnas y tema se recuerdan** en el navegador (`localStorage`, con `try/catch`).
- **Tema del sistema (oscuro / claro), según Windows** (`prefers-color-scheme`), con botón para cambiarlo en la cabecera del drawer y en la barra de la Práctica; mismo ajuste en ambos. Cambia: la hoja del apunte, la vista de Práctica y el visor. Claro = lo de hoy (papel, tinta, ladrillo). Oscuro = noche, niebla, ámbar; callouts y tabla en `bosque` / `pino`; las imágenes siguen sobre blanco, sin marco (aprobado por el usuario el 2026-11-13). El hero pasa a noche con el tema oscuro (capas de noche, cielo plano `#1a345c`, logo invertido); no cambian escenas (salvo su borde, que `.borde-oscuro` pinta de `noche`), franja, drawer y cierre. Resuelto el 2026-11-13: el borde del arte y el contraste AA de la lectura en oscuro (niebla 16,7 · bruma 8,8 · ámbar 11,1 sobre noche).
- **Construcción en dos pasos:** 1) la vista de Práctica con los dos temas; 2) el tema oscuro en los apuntes y el botón del drawer. **Ambos construidos** (el paso 2, el 2026-11-13: hoja en `noche` con `niebla`, ámbar en lugar de ladrillo, borde de las escenas pintado de `noche` por código y visor que sigue el tema).

### Direction contract — vista de Práctica (elegida por el usuario el 2026-11-12: «Fichas con su tempo»; boceto `.impeccable/mocks/decision/fichas.html`; code-led)

THESIS: entras a tocar y cada versión trae en su propia ficha su tempo y dónde; nada que cruzar con una tabla aparte. Rechaza la hoja de lectura con la tabla al final y el panel de control con tarjetas.

OWN-WORLD: fondo noche (papel en claro); Jersey 15 en barra, etiquetas y tiras, Atkinson en el texto; marcos pixel de 6 px; la TAB siempre sobre papel blanco; tira al pie en `bosque` con ámbar (en claro, `crema` con ladrillo).

STORY: entra desde «Práctica ›», el drawer o `#p-…`; ve todas las versiones; elige la que toca por el tempo de su tira; clic → visor; «‹ Volver al apunte» o Esc regresa.

FIRST VIEWPORT: barra de 88 px: «‹ Volver al apunte», título en Jersey ~46 px, «Columnas 1 · 2 · 3» (2 activa, ámbar) y botón de tema. Cuadrícula de fichas a 2 columnas: imagen 3,2:1 sobre blanco y tira de 58 px con «V1» en Jersey 40 px ámbar, el tempo en Jersey 28 px y dónde en Atkinson `bruma` a la derecha. Debajo, filete `pino`; «Qué estás mejorando» a la izquierda (1,3fr) y los plegados «Si sale mal» y «Hasta cuándo» a la derecha.

FORM: «Fichas con su tempo», posición 4 de 7 en la lista; repartida por la tirada junto a «Hoja de sistemas» y «Por tempo». Gesto propio: la tabla «Versión · Tempo · Dónde» se reparte en las tiras por versión; si una fila no nombra sus versiones o la imagen no es una versión (p. ej. el mapa de la pentatónica), la ficha va sin tira y la tabla vuelve entera bajo la cuadrícula. seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Pendiente

- Fuentes (usuario, 2026-11-09): pixel = Jersey 15 (títulos, botones, franja, drawer; ~1.3x el tamaño de referencia); lectura = Atkinson Hyperlegible. Descartadas: DotGothic16 (letras pegadas), Pixelify Sans (letras chicas), Silkscreen. Comparación: `.impeccable/mocks/fuentes/comparar2.html`.
- Drawer (usuario, 2026-11-09): ruta de apuntes del módulo con su práctica colgando + los otros módulos + buscador + Clases en orden (ya sin «solo versión personal»: no hay versión publicada).
- Módulos (2026-11-11): `build.cjs` lee todos los módulos de los .md (`modulo:` del frontmatter); se elige uno en la franja o en el drawer y sus apuntes entran en las dos escenas. Hoy tienen apuntes M1, M3, M6 y M8; los demás dicen «Sin apuntes aún». Una práctica sin apunte (arpegio, M8) entra suelta. Superficie de Lectura → code-led (sin comp).
- Capas del hero: hechas y aprobadas (usuario, 2026-11-09): `.impeccable/mocks/lugares/hero/capas/` (script `capas.cjs`, prueba `prueba.html`).
