# Ficha de pixel art — Okaeri

> Reescrita el 2026-10-28 con el **estilo nuevo** (RPG Maker de cabeza grande), que reemplaza al «RPG portátil» del 2026-10-27. Todo lo que se dibuje para el panel de Okaeri sigue esta ficha; si algo cambia, se cambia aquí primero. Por qué cambió y qué se descartó: `CONTEXT.md` → «Estilo nuevo de personajes».

## Base
- **Estilo:** sprite de RPG Maker con cabeza de ~1/2 de la altura. Referencia: hoja de caminata de Pinterest (chico con una hoja en la cabeza); imagen base de Erick: `C:/Users/DREYK/Downloads/Gemini_Generated_Image_uoszcuuoszcuuosz.jpeg`.
- **Rasgos:** pelo como una masa que forma la silueta; sombreado de 2 tonos por material; contorno negro uniforme; cara mínima (ver abajo); sin dithering ni antialias.
- **Poco detalle a propósito:** con más resolución el personaje pierde carisma (el «plan B» de 70 px se probó y se descartó). Con poco detalle el que mira lo completa.
- **Tamaños nativos (reales):** Erick 55×81 · Tony 14×24 (tamaño oficial = el de la pose reposo). Gatos y figuras: por definir al rehacerlos, a la misma escala de pixel que Erick. Íconos y tiles: por definir con el mundo.
- **Escala en pantalla:** entera. En el panel, por definir con la dirección de `impeccable` (Erick mide 81 px nativos: ×1 o ×2 según el alto del piso). En láminas de revisión, ×8 a ×10.

## Paleta
- **Meta:** ~16 colores por personaje contando contorno y ojos; las paletas se curan por personaje (k-medias de sus celdas), no hay paleta global todavía.
- **Contorno:** negro puro `#000000` en todos.
- **Erick (`erick_base.px.js`):** usa 18 de los 30 que declara su `pal()`. Pares casi iguales que se pueden fundir para llegar a 16: `B #ddd8d3` ≈ `R #d8d4cf` (camisa) y `G #a2969d` ≈ `b #978b94` (báculo). `O` y `X` se usan en un solo pixel cada uno. Sin aplicar todavía.
- **Colores de identidad:** gorro de Erick azul índigo apagado `#3c416b` / sombra `#222545`, cinta burdeos `#44132d` / `#651f3e` (el marrón anterior se fundía con el pelo y las salas de madera). Tony: verde `#729b3b` / `#476c42`, cabeza roja `#e7242d` / `#a6151b`, pico `#fdbf34` / `#f88532`.

## Dibujo
- **Contorno:** negro, de 1 px y uniforme por fuera. Después de achicar o recomponer un sprite se vuelve a aplicar con `contorno.cjs`.
- **Luz:** arriba a la izquierda; el tono oscuro de cada rampa, abajo y a la derecha.
- **Dithering / antialias a mano:** no.

## Cara (regla del elenco)
- **Ojos:** dos barritas verticales oscuras, sin blanco. Tony lleva una sola barrita (perfil).
- **Sin boca ni nariz.** La boca aparece solo al **cantar o sorprenderse**. Al hablar no hay boca: lo dicen los globitos con íconos que salen sobre la cabeza (en el gato, la boca parecía otra nariz; usuario, 2026-10-31).
- Las cejas, si un personaje las necesita, se deciden al rehacerlo (la regla vieja de cejas de 2 px era del estilo anterior).
- Rasgos que se conservan del elenco anterior (vestuario, instrumentos, personalidad): `CONTEXT.md` → «Elenco cerrado».

## Método (Gemini explora, Claude reproduce)
1. Claude escribe el prompt: fondo magenta, pixel en bloques y **una referencia de estilo adjunta** (un sprite pxl ya limpio, p. ej. `tony/ref_gemini_alas.png`), porque Gemini ignora las medidas en pixeles. Un personaje a la vez, con propuestas.
2. Reproducir: `grid2.cjs` (paso y desfase de la cuadrícula) + `reproducir.cjs` (mediana en la ventana central 40-60% de la celda, paleta por k-medias). Recorte con margen: los recortes justos cortan puntas.
3. Cada personaje con **su propia cuadrícula** (Gemini cambia el tamaño de pixel entre imágenes y a veces dibuja detalles a medio paso: muestrear al paso fino).
4. Igualar escala: `achicar.cjs` (quita la fila o columna que menos pierde, nunca los bordes) y luego `contorno.cjs`. El remuestreo directo se descartó: rompe contorno y ojos.
5. Revisar con `cerca.cjs`, corregir con `fijar.cjs`. **No redibujar de memoria:** ampliar el original con la cuadrícula encima y transcribir celda por celda.
6. Poses que Gemini no logra se derivan en pxl (p. ej. `girar.cjs` para ladear la cabeza). Gemini da poses clave; los cuadros intermedios los hace Claude.

Herramientas: `.impeccable/mocks/personajes/estilo-nuevo/` (`grid2`, `reproducir`) y `estilo-nuevo/tony/` (`recortar`, `achicar`, `contorno`, `cerca`, `fijar`, `comparar`, `componer`, `girar`).

## Composición
- **Tony sobre Erick:** el gorro es la posición principal (en el hombro tapa media cara). Anclajes en Erick (patas de Tony): gorro fila 13, cols 36-41; hombro fila 44, cols 18-23. Compuesto oficial: `tony/erick_tony_gorro.px.js` (dx=30, dy=-3), 1:1 con el pixel de Erick.

## Animación
- **fps:** 8 personajes, 4 ambiente (por confirmar al animar).
- **Poses de Tony (8, completas):** reposo, curioso, contento, cantando, acicalándose, dormido, alas arriba, alas abajo (`tony/tony_<pose>.px.js`, lámina `tony/tony_poses_pxl.png`). Pendiente: un cuadro de planeo para cuando cruce la escena.

## Web
- **Escalado:** entero, `image-rendering: pixelated`; animación con `steps()`.
- **Fuente pixel y variantes de paleta (día/noche):** las decide la dirección del panel con `impeccable`.

## Archivos
- **Estilo nuevo:** `.impeccable/mocks/personajes/estilo-nuevo/` → `erick_base.px.js` (versiones `.crudo`, `.90`, `.con_tony`), `tony/tony_*.px.js`, `tony/erick_tony_gorro.px.js`.
- **Estilo anterior (reemplazado, solo referencia de rasgos):** `.impeccable/mocks/personajes/elencos.px.js` (`gato_*5`, `gata_soprano5`, `fig_*3`, `fig_clave3`, `erick_mago`).
- **Generar:** `node C:/dev/agatha-os/skills/pixel-art/pxl/bin/pxl.js build <archivo>.px.js --out <carpeta temporal>`.
- **Exportados (PNG, tiras):** por definir al construir el panel (carpeta de assets de la web, `.impeccable/prototipo/`).
