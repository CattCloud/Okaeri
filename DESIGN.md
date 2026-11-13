---
name: Okaeri
description: El árbol-conservatorio en pixel art. Paisaje de día en el hero, escenas de noche (azul de lago, ámbar de fuego) y apuntes blancos de lectura tranquila.
colors:
  cielo: "#78cbf7"
  noche: "#040e10"
  bosque: "#0b1b18"
  pino: "#1c3a31"
  niebla: "#e8efe9"
  bruma: "#9fb3a8"
  papel: "#ffffff"
  tinta: "#26241f"
  tinta-2: "#4a463d"
  crema: "#f7f1e3"
  linea: "#d9d2c0"
  ladrillo: "#8a3a2a"
  ambar: "#ffb53c"
  lago: "#7fc0e0"
  musgo: "#74b64f"
  logo-azul: "#0d3250"
  logo-borde: "#c4e9fc"
  marco-suave: "#52705f"
typography:
  logo:
    fontFamily: "Jersey 15, ui-monospace, monospace"
    fontSize: "clamp(5.5rem, 17vw, 12rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  display:
    fontFamily: "Jersey 15, ui-monospace, monospace"
    fontSize: "clamp(2.75rem, 4.4vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 0.95
  headline:
    fontFamily: "Jersey 15, ui-monospace, monospace"
    fontSize: "clamp(2rem, 3vw, 2.375rem)"
    fontWeight: 400
    lineHeight: 1.02
  title:
    fontFamily: "Jersey 15, ui-monospace, monospace"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.05
  label:
    fontFamily: "Jersey 15, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.1
  label-small:
    fontFamily: "Jersey 15, ui-monospace, monospace"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.65
  body-mobile:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  caption:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-pixel:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.niebla}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5em 1em"
    height: "56px"
  button-pixel-hover:
    backgroundColor: "{colors.bosque}"
    textColor: "{colors.ambar}"
  button-icon:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.niebla}"
    rounded: "{rounded.none}"
    size: "60px"
  modulo-ficha:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.niebla}"
    rounded: "{rounded.none}"
    width: "76px"
    height: "64px"
  modulo-ficha-activo:
    backgroundColor: "{colors.bosque}"
    textColor: "{colors.ambar}"
  modulo-ficha-fuera:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.bruma}"
  boton-practica:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 1.1rem"
  practica-ficha-tira:
    backgroundColor: "{colors.bosque}"
    textColor: "{colors.niebla}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "58px"
    padding: "8px 18px"
  callout-clave:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.2rem"
  callout-nota:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.2rem"
  tabla-cabecera:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.tinta}"
    typography: "{typography.label-small}"
  drawer:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.niebla}"
    rounded: "{rounded.none}"
    width: "36rem"
    padding: "16px 20px 48px"
  drawer-item:
    textColor: "{colors.niebla}"
    typography: "{typography.label}"
    height: "48px"
    padding: "10px 8px"
  drawer-item-activo:
    backgroundColor: "{colors.bosque}"
    textColor: "{colors.ambar}"
  apunte:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
    width: "750px"
---

# Design System: Okaeri

## Overview

**Creative North Star: "El árbol-conservatorio"**

Entrar a Okaeri es volver al árbol: se ve el paisaje, se cruza el bosque y se estudia junto a la fogata o en el muelle. Todo lo dibujado es pixel art del mismo lugar: el hero es de día pleno (cielo #78cbf7) y las escenas de estudio son de noche, en dos temperaturas: azul de lago y ámbar de fuego. No hay emojis ni ilustración ajena a ese mundo.

El sistema tiene dos registros que no se mezclan. El registro del lugar (hero, franja de módulos, escenas, drawer, botones) es oscuro, pixel, con marcos de píxel y acento ámbar. El registro del apunte es una columna blanca de 750 px, tinta cálida y fuente de lectura, con ladrillo como único acento. La transición entre ambos es la escena: un lienzo oscuro cuyo borde derecho se disuelve en blanco.

Radio cero en todo. Sin sombras de caja: la profundidad la dan el contraste noche/niebla y los marcos de píxel.

**Key Characteristics:**
- Pixel (Jersey 15) en títulos, botones, franja y drawer; Atkinson solo en la lectura.
- Marcos de píxel por `border-image`, no bordes CSS lisos ni esquinas redondeadas.
- Ámbar como acento en el lugar (hover, activo, foco); ladrillo como acento en el apunte.
- Cortes limpios donde la escena se encuentra con otras superficies: sin degradados ni dither en el borde.
- Íconos pixel 12x12 con `currentColor`.
- Movimiento por capas (parallax del hero) y por escenas; con `prefers-reduced-motion`, todo queda quieto y los cortes son limpios.

## Colors

Paleta de dos mundos: día de cielo claro y bosque profundo; noche de lago y fuego; y blanco cálido para estudiar.

### Primary
- **Ámbar de fuego** (`ambar`): hover, estado activo, foco (en el lugar), números y encabezados del drawer, botón de sonido encendido. Es el acento del mundo oscuro.
- **Ladrillo** (`ladrillo`): acento del apunte: títulos de práctica, marcadores de lista, enlaces internos, cabeceras de callout, foco dentro de los apuntes y del cierre.

### Secondary
- **Cielo de día** (`cielo`): fondo del hero; solo ahí.
- **Azul de lago** (`lago`): luz de las escenas nocturnas junto al agua.
- **Musgo** (`musgo`): selección de texto.
- **Azul del logo** (`logo-azul`) y **borde del logo** (`logo-borde`): el título «okaeri» y su sombra de un paso.

### Neutral
- **Noche** (`noche`): fondo de página, suelo de la franja, letterbox de la escena, botones, drawer, cierre.
- **Bosque** (`bosque`): fondo de hover/activo sobre noche.
- **Pino** (`pino`): borde del drawer, marco de la búsqueda, conector de prácticas.
- **Niebla** (`niebla`): texto sobre noche.
- **Bruma** (`bruma`): texto secundario sobre noche, estados deshabilitados.
- **Marco suave** (`marco-suave`): marco de módulos sin apuntes y de elementos sin audio.
- **Papel** (`papel`): fondo del apunte.
- **Tinta** (`tinta`) y **Tinta 2** (`tinta-2`): texto del apunte y su secundario.
- **Crema** (`crema`): código en línea, callouts «clave», cabecera de tabla, hover de enlaces.
- **Línea** (`linea`): separadores entre apuntes y filas de tabla.

### Named Rules
**The Dos Acentos Rule.** Ámbar solo sobre fondos oscuros; ladrillo solo sobre blanco. Nunca ámbar sobre papel ni ladrillo sobre noche.

**The Noche Es Suelo Rule.** El negro del sistema es el verde-negro `noche`; no se usa #000.

## Typography

**Display Font:** Jersey 15 (con ui-monospace, monospace), incrustada, OFL.
**Body Font:** Atkinson Hyperlegible (con system-ui, sans-serif), incrustada, OFL; pesos 400, 400 cursiva y 700.
**Label/Mono Font:** Jersey 15. El código en línea usa ui-monospace/Consolas a .9em.

**Character:** Una fuente pixel de un solo peso que da voz al lugar, y una fuente de lectura diseñada para legibilidad que entra cuando se estudia.

### Hierarchy
- **Logo** (400, clamp(5.5rem, 17vw, 12rem), 1): «okaeri» en el hero.
- **Display** (400, clamp(2.75rem, 4.4vw, 3.5rem), .95): título de apunte; el título de la vista de Práctica usa clamp(2rem, 3vw, 2.875rem) en el color de texto de su tema, y el número de versión de cada tira, 2.5rem (2rem con 3 columnas) en el acento del tema.
- **Franja** (400): título clamp(3rem, 6vw, 4.5rem); nombre del módulo clamp(2.75rem, 5.5vw, 4rem); resumen clamp(1.5rem, 2.4vw, 1.875rem).
- **Headline** (400, clamp(2rem, 3vw, 2.375rem), 1.02): subtítulo `t2` dentro del apunte.
- **Title** (400, 1.75rem, 1.05): `t3`, cabecera de callout, encabezados del drawer.
- **Label** (400, 1.5rem a 1.75rem): botones, ítems del drawer, botón «Práctica ›», botones de la vista de Práctica, entrada de búsqueda.
- **Label small** (400, 1.125rem a 1.375rem): metadatos, subtítulos de botón, cabecera de tabla, avisos.
- **Body** (400, 1.1875rem, 1.65): lectura del apunte; 1.125rem bajo 640 px. Columna de 750 px máximo.
- **Caption** (1rem, 1.45): pies de figura, texto previo.

### Named Rules
**The Pixel Nunca Lee Rule.** Jersey 15 no se usa para párrafos del apunte. Todo texto corrido de lectura va en Atkinson; los títulos, botones, franja y drawer van en Jersey.

**The Un Solo Peso Rule.** Jersey no se negrita ni se pone en cursiva; la jerarquía sale del tamaño. Solo Atkinson lleva 700.

## Layout

Página en tres tramos: hero a pantalla completa (100svh, mínimo 520 px), franja de módulos, y por módulo uno o más cortes. Cada corte es una rejilla de dos columnas: escena (100svh) a la izquierda y apuntes a la derecha en una columna de 750 px centrada. Ancho de escena: `min(92.2svh, 58cqw, 100cqw - 798px)` (el contenedor es el módulo). La escena conserva la proporción de su arte (368x399) y no se recorta; el sobrante se rellena con letterbox `noche`. El borde derecho del arte está disuelto en blanco a propósito para fundirse con el apunte.

Bajo 1200 px el corte se apila: la escena pasa arriba (ancho máx. min(100%, 78svh*368/399)) y el apunte debajo, con padding lateral de 20 px. Bajo 640 px la lista de módulos pasa a una sola fila con scroll horizontal y snap.

Desde 1200 px el módulo es un **carrusel** (2026-11-12): la página termina en un escenario de 100svh (hero, franja, escenario) y cada apunte es una página con su escena a la izquierda y su hoja de 750 px a la derecha, más una página final de cierre. Los cortes entre escenas y entre apuntes (`.paso`, `.sep`) solo existen bajo 1200 px. El arte de la escena se centra en su columna (ya no hay línea a la que pegarlo).

El hero apila capas con posición absoluta sobre un paisaje de proporción 2576/1438: fondo, logo, árbol, medio y frente. Ritmo de espacio observado: 6 (marco), 12, 16, 24, 32 px; entre apuntes, clamp(40px, 6vw, 72px) con padding superior clamp(56px, 8vw, 88px). El `scrollbar-gutter` es estable.

El botón del drawer va a la izquierda en ≥1200 px (para no tapar el apunte) y a la derecha debajo de ese ancho, donde se esconde al bajar y reaparece al subir. Está oculto sobre el hero.

## Elevation & Depth

Sin sombras de caja. La profundidad se logra por capas en el hero (parallax), por contraste entre superficies (noche contra niebla, blanco contra tinta) y por marcos de píxel. El único `text-shadow` es la sombra de un paso del logo. El velo del drawer abierto es noche al 62%.

### Named Rules
**The Corte Limpio Rule.** Las superficies son planas; la escena empieza y termina con un corte recto contra la superficie vecina, sin degradados, sombras difusas ni dither en el borde (el usuario quitó el dither de los bordes de la escena el 2026-11-10). El dither solo vive dentro del arte del hero (el bosque del frente que se hunde en la franja). Excepción: los degradados de indicación de scroll de las tablas.

## Shapes

Radio cero. Todo marco grande es pixel: un SVG de 5x5 con las esquinas cortadas, usado como `border-image` con corte 2 y 6 px de borde (3 px por unidad de pixel de arte). Cinco colores de marco: claro (`niebla`), ámbar (hover/activo), suave (módulo sin apuntes), pino (búsqueda), tinta (sobre blanco). El aviso de sonido y la tabla usan bordes lisos de 3 px. Los íconos son rejillas de 12x12 con `shape-rendering: crispEdges`.

## Components

### Buttons
- **Shape:** marco pixel de 6 px, esquinas muescadas, sin radio.
- **Pixel button:** fondo `noche`, texto `niebla`, Jersey 1.75rem, alto mínimo 56 px (48 px en versión chica), padding .5em 1em. Puede llevar subtítulo en `bruma`.
- **Hover:** marco ámbar, fondo `bosque`, texto ámbar. **Active:** baja 3 px, sin transición suave.
- **Sonido / drawer / cerrar:** botones cuadrados de ícono (60 px; cerrar 52 px) con fondo noche semitransparente sobre arte. Sonido encendido en ámbar; sin audio en `bruma` con marco suave.

### Module strip (franja)
Fichas de 76x64 px con el número en Jersey 1.875rem. Activa: marco y texto ámbar sobre `bosque`. Sin apuntes: marco suave y texto `bruma` (se puede elegir; su detalle dice «Sin apuntes aún» y no ofrece entrar). Debajo, el detalle del módulo (nombre, resumen, metadatos) sobre el suelo oscuro. Al elegir un módulo, sus apuntes entran en las dos escenas, que son las mismas para todos; si el módulo tiene un solo apunte, solo lleva la fogata y no hay línea entre escenas.

### Botón «Práctica ›» y vista de Práctica (2026-11-12)
**Botón:** uno solo, de 48 px de alto con marco tinta sobre blanco (la misma apariencia que «Anterior» / «Siguiente»), bajo los metadatos del apunte; abre la vista. Reemplazó al par Teoría / Práctica.

**Vista:** un `<dialog>` modal a pantalla completa, sin escena, que tapa la página (con `Esc` o «‹ Volver al apunte» se regresa al mismo apunte y a la misma posición). Dos temas que **solo cambian dentro de la vista por ahora** (el paso 2 los extiende a los apuntes): *oscuro* (fondo `noche`, texto `niebla`, acento `ámbar`, marco `niebla`, tiras `bosque`) y *claro* (fondo `papel`, texto `tinta`, acento `ladrillo`, marco `tinta`, tiras `crema`); respetan los Dos Acentos. El tema sigue al de Windows hasta que el usuario elige, y la elección y las columnas se recuerdan en el navegador.
- **Barra** de 88 px mínimo con filete de 3 px (`pino` / `linea`): «‹ Volver al apunte», título en Jersey, selector «Columnas 1 · 2 · 3» (2 por defecto; 4 se descartó: cada TAB quedaría ilegible a distancia de brazo; bajo 820 px se esconde y queda 1) y el botón del tema (ícono pixel `sol` / `luna` y la palabra del tema al que pasaría). Botones de 48 a 56 px con marco pixel; activo y hover: marco y texto en el acento del tema sobre la tira.
- **Cuerpo** (la única barra vertical, con foco al abrir para que PgDn funcione): la introducción de «Cómo se hace» en Atkinson, la cuadrícula de fichas, las notas de después y el pie.
- **Ficha:** marco pixel de 6 px; la TAB siempre sobre papel blanco (centrada si la fila la estira) y, al pie, una tira en dos columnas: el número de versión en Jersey (2.5rem, acento) y, apilados, el tempo (Jersey 1.75rem; si es largo, Atkinson 1.25rem) y debajo dónde o el nombre de la versión (Atkinson 1.1875rem, texto secundario). La tira sale de la tabla «Versión · Tempo [· Dónde]» del `.md`; si la tabla no nombra todas las versiones, queda entera bajo la cuadrícula y las tiras solo llevan número y nombre. Clic en la imagen: visor.
- **Pie:** «Qué estás mejorando» (Jersey 1.75rem en el acento, texto de lectura; queda fijo a la vista mientras se lee un plegable) a 1,3fr y, a 1fr, «Si sale mal» y «Hasta cuándo» plegados (botones `summary` con la flecha que gira). Las tablas llevan los colores del tema.
- **Transición (usuario, 2026-11-12: el corte seco entre apunte y práctica era brusco):** la vista entra deslizando desde la derecha y sale por el mismo lado, 700 ms con `cubic-bezier(.65,0,.35,1)` (acelera y frena parejo; el easing del carrusel, 420 ms con frenado exponencial, se sentía veloz en una vista que cubre toda la pantalla), solo `transform`; la página de atrás se oscurece (`noche` al 62 %, como el velo del drawer) mientras entra. Con `prefers-reduced-motion` el cambio es directo. La franja sin barra de la página (`html.en-practica`) se pone cuando la vista ya tapa todo y se quita antes de que salga, para que la página de atrás no salte. Lo demás dentro de la vista (columnas, tema, plegables) cambia al instante.

### Callouts (clave, repaso, nota)
Marco pixel tinta, padding .9rem 1.2rem. Clave sobre crema (1.25rem/1.5); repaso y nota sobre blanco (nota 1.0625rem). La cabecera va en Jersey 1.75rem color ladrillo, con ícono.

### Tables and figures
Tabla con borde de 3 px tinta, cabecera crema en Jersey 1.375rem con filete de 3 px, filas separadas por 2 px `linea`, números tabulares; desplaza en horizontal con indicación de sombra y foco por teclado. Figuras a todo ancho sobre blanco con pie en caption.

### Drawer
Panel de 36rem (máx. 92vw) sobre `noche`, borde de 6 px `pino`, entra por la izquierda (≥1200 px) o la derecha en 350 ms. Contiene, en orden: cabecera con el botón de sonido (solo icono, 52 px, ámbar si suena) y el cierre, aviso de audio solo cuando hace falta, buscador (marco pino, ámbar al enfocar), la ruta con sus prácticas colgando del apunte por un conector de píxel, otros módulos y las clases en orden. Ítem activo: fondo `bosque`, texto ámbar. Al abrirse, el fondo queda `inert`.

### Carousel (≥1200 px)
Escenario `.escenario` (fijo, 100svh, con `overflow: clip`, no `hidden`: nada puede desplazarlo con `scrollIntoView` ni con el foco) dentro de `.modulo`, y una pista `.pista` con un tramo por escena (fogata, muelle) y otro de cierre. **Dentro de una escena** solo se desliza la hoja (`.hoja`, absoluta sobre la columna del apunte); **al cruzar de la fogata al muelle, o al cierre,** se desliza la pista entera, escena y hoja juntas. Un salto largo (drawer, enlace interno, hash) es un solo deslizamiento hacia el destino. 700 ms con `cubic-bezier(.65,0,.35,1)` (`--t-pagina` y `--curva-pagina`, los mismos de la vista de Práctica; usuario, 2026-11-12: la curva anterior, 420 ms con frenado exponencial, pasaba veloz), solo `transform`; la hoja que sale sigue visible mientras se desliza y la que entra se ve de inmediato (la `visibility` se apaga al final). Con `prefers-reduced-motion` el cambio es directo. No se desliza con rueda horizontal, trackpad ni swipe.

**Una sola barra vertical, la de la página** (el usuario no quiere dos, 2026-11-12). `.modulo` mide 100svh más lo que el apunte actual excede la pantalla (lo calcula `app.js`, sección 3c, y lo recalcula al cambiar de vista, cargar imágenes o redimensionar), el escenario `.escenario` queda fijo (`position: sticky`) y la hoja (`overflow: hidden`) no se desplaza sola: su `scrollTop` sigue al de la página, y al revés si el navegador la mueve (foco con Tab, buscar en la página). La rueda funciona igual sobre la escena y sobre el texto, y subir pasa de la hoja a la franja sin quedar atrapado. Cada página abre arriba. **Tope al subir** (usuario, 2026-11-12: la rueda pasaba del inicio del apunte y asomaba la franja): desde que el apunte está a la vista (el filo, aunque no se haya leído nada) y mientras se lee, al llegar al inicio la rueda se detiene ahí (el primer empujón, un gesto de rueda o de trackpad con su inercia, absorbe lo que sobra) y **se enciende un resplandor** en el borde superior del escenario (`.brillo`, degradado dorado de 130 px que sube a su pico en 160 ms y se apaga en ~0,9 s). Para pasar a la franja hacen falta **tres empujones seguidos** (tres y no dos: dos giros rápidos se hacen sin pensar y tres ya son intención, usuario, 2026-11-12; el resplandor es más tenue en el primero y pleno en el segundo, para que se vea que avanza): otro gesto, tras una pausa de ≥110 ms o, si el primero venía apagándose (inercia del trackpad) y la rueda vuelve a empujar con fuerza, de inmediato; cada uno dentro de 0,6 s del anterior (tienen que ser seguidos, no espaciados; usuario, 2026-11-12: 1,5 s era demasiado); pasado ese tiempo el siguiente vuelve a ser un primer empujón. Solo rueda: teclado, barra de la página y flechas quedan libres; bajar siempre es libre; no se activa si se llegó arriba por otra vía. Con `prefers-reduced-motion` el resplandor es un destello sin transición. El oyente que bloquea solo está puesto cerca del inicio (`app.js`, 3d). La **barra al pie** es el último hijo de la hoja y va pegada abajo (`position: sticky`): comparte el ancho del apunte (750 px), con filete de 2 px `linea` arriba y fondo papel. Rejilla de tres columnas iguales: «‹ Anterior» a la izquierda (no aparece en el primero), «2 de 6» al centro en Jersey 1.375rem `tinta-2` (a 1.125rem el 6 pixelado se leía como 8) y «Siguiente ›» a la derecha, sin título (usuario, 2026-11-12: el título completo sale al pasar el mouse; en el último, «Fin del módulo ›»). Los botones son de 48 px con marco tinta y fondo blanco, como Teoría/Práctica; el título del siguiente va completo en `title` y `aria-label`. El pie de enlaces con que terminan los `.md` («← anterior · índice · siguiente →») se esconde en el carrusel porque repetía la barra (usuario, 2026-11-12); `build.cjs` lo marca (`.pie-nav`) y se conserva «su práctica: …» si el pie la trae. Bajo 1200 px se ve entero, porque ahí no hay barra. Flechas ← → cambian de página cuando el foco no está en un campo ni en una tabla con scroll, sin modificadores ni autorepetición, y solo mientras el escenario es lo que se mira.

La **página de cierre** es el escenario entero en `noche`: «Fin de <módulo>» (h2), «Módulo siguiente» y «‹ Volver al último apunte». Accesibilidad: el escenario es `region` con `aria-roledescription="carrusel"`; cada hoja es `group` con `aria-roledescription="apunte"` y etiqueta «2 de 6: <título>»; las páginas inactivas quedan `inert`; al llegar a una página el foco pasa a su título (`preventScroll`), sin aro porque no es un control. Bajo 1200 px nada de esto existe: las hojas son transparentes (`display: contents`) y la barra y «Volver» se esconden.

### Visor de imágenes (repuesto el 2026-11-12; comportamiento decidido el 2026-10-21)
Clic, o Enter / Espacio con el foco, en cualquier imagen de un apunte o práctica (figuras y diagramas dentro de tablas) la amplía en un `<dialog>` modal a pantalla completa: fondo `noche` plano, la imagen lo más grande que quepa (sin deformarla) con marco pixel claro de 6 px sobre fondo blanco, sin degradado ni sombra. Botones cuadrados de ícono como los del drawer: X de 60 px arriba a la derecha y flechas de 64 px a los lados; el contador «3 / 8» va arriba al centro en Jersey 2.5rem ámbar. Las flechas, Inicio y Fin recorren las imágenes del mismo apunte (solo las visibles, sin repetidas) sin envolver: la flecha de un extremo queda en `bruma` con marco suave y deshabilitada, y si el apunte tiene una sola imagen no hay flechas ni contador. Se cierra con la X, Esc o tocando el margen; el foco vuelve a la imagen. En vertical o bajo 720 px el contador y la X van arriba y las flechas abajo, a los extremos. La página de atrás queda inerte y sin scroll, y el carrusel no cambia de página con las flechas mientras el visor está abierto. Las imágenes del apunte llevan `cursor: zoom-in`, `title="Ampliar"` y nombre accesible «Ampliar imagen: …». Sin animación propia: abre y cambia al instante (la siguiente y la anterior se precargan). Código: sección 6b de `app.js` y bloque «visor de imágenes» de `estilo.css`.

### Scene (escena)
Lienzo `canvas` con `image-rendering: pixelated`, personajes en `auto`, bordes superior e inferior en corte recto. Pausada cuando está fuera de pantalla. Dos escenas por módulo: fogata (ámbar) y muelle (lago); el cambio ocurre a mitad del módulo (con un solo apunte, solo la fogata). Bajo 1200 px, entre las dos escenas hay una franja de papel (`.paso`, blanca y a todo el ancho) con una sola línea dorada (`#d09431`) de 2 pixeles del arte de grosor (10 px en escritorio, 8 en tableta, 6 o 4 en móvil), de borde a borde, sin adorno y sin margen (las dos escenas la tocan): el corte entre escenas es minimalista (decisión del usuario, 2026-11-10). Bajo 1200 px, entre apuntes de la misma escena (`.sep`) van tres cuerdas doradas (`#d09431`) con una roseta chica al centro (núcleo `#f7af3a`), de unos 36 px de alto y dentro de la columna del apunte: el motivo de las cuerdas, ya sin el corte entre escenas, que ahora es una sola línea dorada a todo el ancho. La rama con luciérnagas (`ramita()`) y el adorno de rizos (`rizos()`) quedan disponibles en `separadores.cjs` como alternativas. Ambos son estáticos; en la franja entre escenas empieza el fundido de sonido a pantano.

### Hero parallax and audio
Velocidades de scroll por capa: fondo .55, logo .3, árbol .4, medio .22, frente 0 (el frente sube con la página y cubre el paisaje). El indicador de bajar cabecea 9 px en pasos. El audio funde entre pistas en 1.6 s: celta en hero, franja y fogata; pantano en muelle y cierre.

## Do's and Don'ts

### Do:
- **Do** poner títulos, botones, franja y drawer en Jersey 15 y la lectura en Atkinson 19 px/1.65, columna máx. 750 px.
- **Do** construir marcos con el SVG pixel de `border-image` (6 px); radio cero.
- **Do** usar íconos 12x12 con `currentColor`; el build falla si queda un emoji.
- **Do** usar foco visible de 3 px (ámbar sobre noche, ladrillo sobre blanco) con offset de 3 px.
- **Do** mantener `scrollbar-gutter: stable`, `inert` en el fondo con el drawer abierto, y respetar `prefers-reduced-motion` (animaciones y transiciones a cero, cortes limpios).
- **Do** firmar cada raster con su procedencia incrustada (`embed-prompt`); `build.cjs` firma los del hero y todos los de `img/` (55 hoy).
- **Do** cortar la escena en recto contra la superficie vecina; sin dither ni degradado en el borde.

### Don't:
- **Don't** usar Jersey 15 para texto corrido del apunte ni Atkinson en títulos, botones o drawer.
- **Don't** usar emojis.
- **Don't** usar radios, sombras de caja ni degradados suaves. **Única excepción:** el resplandor del tope al subir (`.brillo`), pedido por el usuario el 2026-11-12 porque un destello de línea dura le parecía menos natural; no se extiende a otros elementos.
- **Don't** convertir el módulo en un panel de progreso con tarjetas y barras, ni en un sitio de documentación con barra lateral fija.
- **Don't** recortar la escena: su arte se muestra completo con letterbox `noche`.
- **Don't** mezclar los acentos (ámbar sobre blanco, ladrillo sobre noche). El foco del cierre (oscuro) es ámbar; el de la hoja, ladrillo.
- **Don't** activar el cambio de página con rueda horizontal, trackpad o swipe: se dispararía sin querer mientras se lee.

## Pendientes y estado honesto

Cierre del 2026-11-09: el revisor dejó la disposición «fix» tras dos rondas y el usuario decidió cerrar así. Lo siguiente es lo que la compilación lleva y no se hereda como regla para superficies nuevas:

- La arista del apunte blanco contra el suelo de la franja es recta (el usuario quitó el dither de los bordes de la escena el 2026-11-10 y queda así). El suelo de la franja (`hero/suelo.png`) es ruido procedural generado por código y no se lee como bosque pixel dibujado; hay una línea horizontal en el borde inferior del hero al bajar.
- El dither que hunde el bosque del frente llega al primer viewport en reposo y cambia la capa aprobada del hero.
- En iOS Safari la pista inactiva sonaría a volumen pleno.
- El botón del drawer cae sobre el arte cuando la escena llena el viewport.
- Faltan `audio/celta.mp3` y `audio/pantano.mp3`: el mecanismo está hecho y el aviso «Sin audio» es honesto.
- Solo M1, M3, M6 y M8 tienen apuntes escritos; M2, M4, M5, M7 y M9 muestran «Sin apuntes aún» (R11: no se escribe por adelantado). Un apunte provisional (hoy, la pentatónica de M8) lo dice en su línea de metadatos.
- Las imágenes de los apuntes no se amplían al tocarlas.
- La web reemplazó a `system.html` (2026-11-11) y no se publica: se abre con doble clic en `.impeccable/prototipo/index.html`. Del panel anterior no se reconstruyeron el Recorrido, las pestañas de práctica ni el modo foco; el visor de imágenes se repuso el 2026-11-12 a pedido del usuario.
