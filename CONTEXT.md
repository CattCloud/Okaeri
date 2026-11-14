# Contexto — Okaeri

> Última actualización: 2026-11-13 (paso 2 y hero de noche construidos y **sin commit**: tema oscuro en la hoja del apunte, el visor, el drawer y el hero; botón de sonido quitado)

## Estado

Sistema personal para aprender guitarra clásica comprendiendo y reteniendo, no solo ejecutando. El carril de canto se retiró el 2026-11-06 (el usuario y su hermana dejaron la academia por economía y tiempo) y se archivó el 2026-11-12 en `_archivo/canto/` (commit `942f26d`; decisión en `NOTAS.md`). **El estado operativo vive en `sistema/estado/estado_actual.md` y las decisiones en `NOTAS.md`**; este archivo no los duplica: guarda lo que esos dos no cubren (la web, sus porqués, los pendientes).

- **Clases:** guitarra reportada hasta la 8 (2026-10-20); faltan la 9, la 10 y la 11 (27-oct, 3-nov, 10-nov). `estado_actual.md` → «Semana en curso» sigue en 2026-10-20 → 10-26: se actualiza al reportarlas.
- **La web de Okaeri** (`.impeccable/prototipo/index.html`: doble clic, sin servidor; la arma `node build.cjs` con Node 22 desde esa carpeta) reemplazó a `system.html` el 2026-11-11; el panel viejo está en `_archivo/panel-system-html/`. **No se publica en internet:** el sitio era para la hermana del usuario, que dejó el canto. La rama `gh-pages` sigue en el remoto con el panel viejo (preguntar si se retira). `build.cjs` lee los `.md` por su `modulo:`; conectados: M1 (6 apuntes, 2 prácticas), M3, M6 y M8 (`la-pentatonica`, provisional, y la práctica de arpegio suelta). M2, M4, M5, M7 y M9 dicen «Sin apuntes aún» (R11). Se regenera dentro de la misma tarea al cerrar una clase o escribir un apunte o práctica.
- **Carrusel de apuntes** (escritorio ≥1200 px; bajo ese ancho sigue apilado): construido, probado con el mouse del usuario y publicado en `main` (`ea9909e`, 2026-11-12). Especificación: `.impeccable/surfaces/system-html.md` → «Carrusel de apuntes»; reglas visuales: `DESIGN.md` → Carousel.
- **Visor de imágenes:** repuesto el 2026-11-12 y publicado en `main` (`46add36`).
- **Vista de Práctica a pantalla completa (paso 1):** publicada en `main` (`5863b3d`, 2026-11-12), con la transición de 0,7 s y el tema oscuro/claro solo dentro de la vista. Decisión y detalle abajo.
- **Tema oscuro en los apuntes (paso 2):** construido el 2026-11-13, **sin commit ni publicar**. Hoja en `noche`, visor que sigue el tema, botón del tema en el drawer y hero de noche. Decisión y detalle abajo.
- **Sonido pospuesto (2026-11-13):** se quitó el botón (portada y drawer) con su código; ver «Web» abajo.

## Siguiente paso

**Primera acción (el usuario prueba y decide):** abrir `.impeccable/prototipo/index.html` (F5) y revisar el paso 2: la hoja oscura (con Windows en oscuro, o con el botón del tema del drawer), el visor en los dos temas y el borde de las escenas. Decir si le convienen la hoja en `noche` y las láminas blancas de los diagramas sobre ella. Con su OK, commit y push en lote: la vista de Práctica ya está en `main`; falta subir el sonido quitado, el paso 2 y la documentación (`DESIGN.md`, `PRODUCT.md`, `.impeccable/surfaces/system-html.md` y esta memoria).

**Ajustes posibles, solo si no le gusta:** (a) las láminas blancas sobre la hoja oscura: enmarcarlas con el marco pixel claro (hoy van sin marco, como en la vista de Práctica); (b) el negro de la hoja: `bosque` o `pino` ya están calculados (AA) y se cambian en una línea de `src/estilo.css` (`html[data-tema="oscuro"] .modulo`) y en el color de `bordeOscuro()` en `build.cjs`.

**Hero de noche (usuario, 2026-11-13): construido, sin commit.** Con el tema oscuro el hero es de noche. Arte de Gemini en `.impeccable/mocks/lugares/hero/noche/` (el hero de noche y cuatro ediciones, una por capa). `hero/capas_noche.cjs` arma `hero/capas/noche/` con el cielo plano `#1a345c` (Gemini lo pintó en 5 franjas; se aplanó por relleno conectado desde el borde superior, sin tocar estrellas, luna, nubes ni montes). `build.cjs` convierte a `hero/noche/*.webp` y pone un segundo juego de `<img>` (`.capa.noche`) que el CSS muestra con `html[data-tema="oscuro"]`; el logo se invierte (`#c4e9fc` con sombra `#0d3250`). **Pendiente del usuario:** probarlo y decir si el logo y el halo de la luna le gustan. Después, commit y push en lote.

**Pendiente del usuario:** probar con el mouse la vista de Práctica y su transición (recargar con F5) y decir si 0,7 s está bien (se cambia en `--t-pagina`, `src/estilo.css`).

Después, retomar el estudio de guitarra: que el usuario reporte las clases 9, 10 y 11 (27-oct, 3-nov, 10-nov) para correr `procesar-clase` (marcador, «Semana en curso» y tarea del profesor); luego, el OK del esquema de p-i-m-a y el resultado de la evaluación de la clase 5.

## Decisiones vivas

Las que explican algo que sigue en pie, con su porqué. Las demás (escenas del vestíbulo y del conservatorio, panel `system.html` anterior, bocetos de personajes) están en `CONTEXT-archivo.md`.

**Carril de canto archivado (usuario, 2026-11-12; plan A aprobado bajo R10)**
- Todo lo de canto está en `_archivo/canto/` (apuntes y prácticas, temario, sílabo, repertorio, estado y el texto de las reglas F12, F15 y RP5); `README.md` de esa carpeta dice cómo restaurarlo. Las reglas R2, R4, R9, F7, F10, F11, RP1 y RP2 dejaron de nombrar canto. Detalle y lista de archivos: `NOTAS.md` (2026-11-12).
- `la-pentatonica` quedó sin el enlace al apunte del semitono: se enlaza de nuevo cuando la cola de guitarra escriba «Tono y semitono» (concepto 2).
- Histórico que se queda: `sistema/decisiones/`, `sistema/manual_okaeri.md`, el rango vocal en `yo_musica.md` y el registro de las clases 1-6 de canto en `practica/00_indice.md`.

**Tema oscuro en los apuntes, paso 2 (usuario, 2026-11-13; CONSTRUIDO, sin commit)**
- **Qué cambia:** con el tema oscuro la hoja del apunte pasa a `noche` (`#040e10`) con texto `niebla`, secundario `bruma`, recuadros y cabeceras de tabla en `bosque`, líneas `pino` y ámbar en lugar de ladrillo (Dos Acentos). El visor sigue al tema con las mismas variables `--pv-*` de la Práctica. El botón del tema entra en la cabecera del drawer (mismo ajuste y mismo guardado). No cambian: escenas (salvo su borde), franja, drawer y cierre; el hero sí pasa a noche (ver «Hero de noche»). Código: `html[data-tema="oscuro"] .modulo` en `src/estilo.css` (se redefinen las variables dentro de `.modulo`; ninguna regla del apunte cambió), `alternarTema()` en `src/app.js` §4b y un script en el `<head>` de `build.cjs` que fija `data-tema` antes de pintar.
- **Tono:** se probaron `noche`, `bosque` y `pino` (los tres cumplen AA: texto 16,7 / 15,2 / 10,6; secundario 8,8 / 8,0 / 5,6). Al principio al usuario le pareció demasiado negro; al verlos uno al lado del otro, junto al apunte, se quedó con `noche`.
- **Borde de las escenas sin Gemini:** el arte (368×399) se disuelve en `#fff` puro, sin transparencia. `bordeOscuro()` (en `ESCENAS_JS` de `build.cjs`) arma al cargar un lienzo `.borde-oscuro` encima, visible solo en oscuro, que pinta de `noche` el blanco conectado al borde derecho; los blancos de dentro del arte (destellos del agua, flores) se quedan (fogata 16 035 px; muelle 12 142). El motor de las escenas no se tocó. Porqué no Gemini: un borde nuevo era arte nuevo (la primera escena tomó días) y el contorno aprobado se perdía.
- **Láminas:** las TAB y los diagramas siguen sobre blanco (regla de siempre), así que en oscuro son placas blancas sobre la hoja. En una tabla de diagramas todas las celdas son blancas: una celda vacía dejaba un hueco negro.
- **Sonido pospuesto (usuario, 2026-11-13):** se quitó el botón de la portada y del drawer, con `app.js` §6, sus estilos y su HTML en `build.cjs`. El código anterior está en el historial de git y los íconos `sonido-on/off` siguen en `iconos.cjs`.
- **Botón del tema en el hero (usuario, 2026-11-13):** arriba a la derecha de la portada, donde estuvo el de sonido (`#tema-hero`, `.hero-acc` en `src/estilo.css`); alterna el mismo tema que los del drawer y la Práctica.
- **Hero de noche (usuario, 2026-11-13):** pidió noche con el tema oscuro y eligió arte nuevo de Gemini (la opción por código se descartó). Método: el hero de noche sale de `hero_gemini.jpg` («la misma escena, solo cambia la hora») y de ahí cuatro ediciones (fondo sin árbol, árbol, bosque, bosque del frente; magenta `#FF00FF` donde no va). Gemini repitió el error de las franjas en el cielo: se aplanó por código, como en el día. `DIF=28` y el resto de `capas.cjs` se mantuvieron. **Dither del frente (usuario: «en el de noche hay más puntos, no está igual al de día»):** el frente de noche es más claro y sus siluetas más altas, y los puntos salían a lo ancho; `zonaDeDia()` en `build.cjs` limita el dither de noche a las zonas donde el del día se nota (mismo patrón de Bayer), y ahora cae solo en las masas del centro y la derecha, como en el día.
- **Lección:** la herramienta Edit convierte CRLF en LF en `app.js`, `estilo.css` y `build.cjs` (el diff sale de todo el archivo). Editar con un script de Node que conserve `
`, o restaurar CRLF después.

**Vista de Práctica y tema oscuro/claro (usuario, 2026-11-12; paso 1 CONSTRUIDO y publicado en `5863b3d`; el paso 2 se construyó el 2026-11-13, abajo)**
- **Qué:** la práctica ya no se alterna con el apunte: se abre en un `<dialog>` a pantalla completa, sin escena (botón «Práctica ›» del apunte, drawer o `#p-…`; `Esc` o «Volver al apunte» regresan al mismo apunte y posición). Porqué: ver de inmediato qué practicar; con la escena al lado las TABs (~2600 px) salían chicas. El arpegio (sin apunte) entra igual: su hoja conserva el `.md` entero y suma el botón.
- **Estructura «Fichas con su tempo»** (elegida entre tres propuestas; boceto `.impeccable/mocks/decision/fichas.html`): cuadrícula de 1, 2 o 3 columnas (2 por defecto; 4 descartado por ilegible; se recuerda en `localStorage` `okaeri.cols`), cada imagen con su tira (número, tempo, dónde o nombre) sacada de la tabla «Versión · Tempo» del `.md`; clic → visor. «Qué estás mejorando» debajo (F4: un párrafo de 3 oraciones como máximo; reescrito en las 6 prácticas); «Si sale mal» y «Hasta cuándo» plegados. Fuera de la web: la cita inicial, «Cómo suena», «Afinación del instructor», «Qué sigue» y «Verificación».
- **Tema oscuro/claro:** sigue a Windows hasta que el usuario elige; botón con ícono pixel sol / luna (la luna es media luna con una estrella: sola, en 12×12, se leía como una «C»). Desde el paso 2 cambia también la hoja del apunte y el visor.
- **Transición (usuario: «muy brusca», luego «más fluida, pasaba veloz»):** la vista entra deslizando desde la derecha; 0,7 s con `cubic-bezier(.65,0,.35,1)` (`--t-pagina`, `--curva-pagina`), la misma del carrusel entre apuntes y entre escenas (antes 0,42 s con frenado exponencial). Con «Reducir movimiento» es directo.
- **Descartado:** versiones una por vez; fondo fijo noche; cuatro columnas; transición instantánea. **Lección:** no usar `git stash` en un repo con trabajo de otras sesiones; los scripts de edición dentro de plantillas JS pierden `\` y `$$`, y `app.js` / `estilo.css` usan CRLF (normalizar al editar).
- Contrato y reglas: `.impeccable/surfaces/system-html.md` y `DESIGN.md` → «Botón «Práctica ›» y vista de Práctica». Código: `.impeccable/prototipo/` (`build.cjs`, `md.cjs`, `src/app.js` §4b, `src/estilo.css`, `iconos.cjs`). Una revisión final con el revisor de impeccable dio `fix` y se aplicó.

**Carrusel de apuntes (usuario, 2026-11-12)**
- Cada apunte es una página que entra deslizando, con botones al pie. Porqué: con scroll continuo el módulo se leía como un solo apunte largo. La escena queda quieta salvo al cruzar de la fogata al muelle; sin separadores en escritorio; el cierre es la última página.
- Barra al pie: «‹ Anterior», «2 de 6» y «Siguiente ›» **sin título** (el título completo sale al pasar el mouse: va en `title` y `aria-label`). El pie de enlaces de los `.md` («← anterior · índice · siguiente →») se esconde en el carrusel porque repetía la barra.
- **Una sola barra vertical, la de la página** (el usuario vio dos scrolls juntos): `.modulo` mide 100svh más lo que el apunte excede la pantalla, el escenario queda `sticky` y el `scrollTop` de la hoja sigue al de la página. Esconder una de las barras dejaba la rueda atrapada en el texto.
- **Tope al subir:** la rueda se detiene en el inicio del apunte, se enciende un resplandor dorado (`.brillo`, única excepción a «sin degradados suaves» en `DESIGN.md`) y para pasar a la franja hacen falta **3 empujones seguidos** (`EMPUJES = 3`, `GESTO = 110` ms, `VENTANA = 600` ms; `src/app.js` §3d). Tres y no dos: dos giros rápidos se hacen sin pensar. **Se arma desde el filo** (con el apunte recién a la vista, sin haber leído): antes armaba tras 8 px y en el filo subir era libre, lo que al usuario le pareció incoherente. Solo rueda; teclado y barra de la página quedan libres. Descartados: `scroll-snap` (Chrome no detiene la rueda) y la línea dorada que parpadea (no se sentía como un bloqueo). Si cuesta de más o se cuela, se ajustan `VENTANA` y `GESTO`.
- **Orden dentro de una clase:** `ORDEN_EN_CLASE` en `build.cjs` (clase 1: Notas y cuerdas → Tablatura → Dedos; clase 2: El acorde → Diagramas → Los 8 acordes). Lo que no nombra va después, por nombre de archivo.
- **F14 cambiada:** «Antes de esto necesitas» se sigue auditando contra el temario, pero ya no se muestra en los 9 apuntes de guitarra (canto la conserva hasta archivarse). Detalle en `NOTAS.md`.

**Web (2026-11-06 → 11-11)**
- **Solo dos escenas, fogata y muelle** (usuario, 2026-11-06). Porqué: la primera escena tomó días y el usuario necesita Okaeri ya para ver apuntes y practicar. La primera mitad de los apuntes de un módulo va con la fogata y la segunda con el muelle (módulo de un apunte: solo fogata). Plano de referencia de dónde está cada escena: `.impeccable/mocks/lugares/mapa.svg`.
- **Hero** por capas con parallax, de día pleno, aprobado el 2026-11-09 (`.impeccable/mocks/lugares/hero/`). Fuentes: **Jersey 15** (títulos, botones, drawer) y **Atkinson Hyperlegible** (lectura).
- **Navegación:** un módulo a la vez; franja de módulos entre el hero y el apunte (abre con el módulo en curso); drawer con la ruta del módulo, otros módulos, buscador y «Clases en orden» (solo personal). La práctica ya no se alterna con el apunte: se abre en su vista a pantalla completa (botón «Práctica ›» o drawer).
- **Visor de imágenes repuesto (usuario, 2026-11-12):** al tocar una imagen de un apunte se amplía (flechas, Inicio, Fin, «3 / 8», X, Esc, margen); se había perdido al archivar `system.html`. Probado en Chrome headless (escritorio, vertical y móvil). Reglas en `DESIGN.md` → «Visor de imágenes». Los demás faltantes del panel viejo (Recorrido, pestañas de práctica, modo foco) siguen sin reconstruirse (R11: solo a pedido).
- **Alcance:** solo laptop con Windows. Tableta y móvil quedan fuera por ahora (usuario, 2026-11-10).
- **Audio pospuesto (usuario, 2026-11-13):** se quitó el botón de sonido (portada y drawer) con su código y sus estilos (`src/app.js` §6, `src/estilo.css`, `build.cjs`); el código anterior está en el historial de git y los íconos `sonido-on/off` siguen en `iconos.cjs`. Si vuelve: `audio/celta.mp3` y `audio/pantano.mp3` (no existen; `.gitignore` ignora los `.mp3`). `.impeccable/surfaces/system-html.md` todavía menciona el sonido.
- **Método de escenas:** Gemini explora y dibuja por capas; el código reproduce al pixel y anima. No se remuestrea ni se deforma lo que dibujó Gemini (cambia el diseño). El borde del paisaje va disuelto en blanco desde el primer prompt. Los gestos son cíclicos y en su sitio (nada que pase una sola vez). Fórmulas de prompt y lecciones: `CONTEXT-archivo.md`.
- **Versionado:** `.impeccable/review/` (capturas viejas, 11 MB) queda sin versionar a propósito. `.impeccable/mocks/` lo ignora `.gitignore` y `build.cjs` lo necesita para reconstruir, por eso `index.html`, `hero/` e `img/` se versionan ya generados.

**Práctica libre, sin los 3 niveles (usuario, 2026-11-10)**
- Ya no hay Mínimo / Natural / Motivado ni minutos o repeticiones por día; queda lo que define el ejercicio (tempo por versión, cuerda, trastes, dedos). Porqué: los niveles restringían su libertad. Reglas: `fundamentos/AGENTS.md` F4/F5/F16; el guardián avisa si reaparece un nivel.
- Cifras que se quedaron (2026-11-11): canto, V2 (5 s y luego 10 s) y calentamiento de 5 min (salud de la voz); progresiones, «5 cambios fantasma seguidos»; pentatónica, «metrónomo 60 o 70» como opción libre. No cambian R9 ni la columna «Mínimo (2 min)» de la bolsa de «Hoy».

**Vista «Hoy» (2026-10-24, aprobada, sin construir)**
- Un objetivo de proceso por día, mínimo 2 min, bolsa invisible, votos en vez de rachas. Reglas y porqué: `sistema/decisiones/decision_hoy.md`; bolsa en `estado_actual.md`. El usuario no la construye aún porque el diseño cambió. Al construir: elegir (a) script local `hoy.mjs` que sirve la web y escribe en `practica/` (recomendada) o (b) `localStorage` + copiar registro; usar `impeccable` con Sonnet; decidir si el registro reemplaza `plantilla_sesion.md` (vía `nueva-regla`).

**Personajes (aprobados, 2026-10-28 → 11-06)**
- Erick (mago forastero, no profesor; gorro azul índigo con cinta burdeos), Tony (perico de cabeza roja, 8 poses), gatos (guitarrista, soprano, Mozart, Beethoven, DJ, rockero, andino y MJ con tres looks) y figuras (redonda, blanca, negra, corchea y semicorchea; faltan el silencio y la clave de sol). En la web solo viven los de la fogata y el muelle. Sprites, láminas y herramientas: `.impeccable/mocks/personajes/estilo-nuevo/`; estilo en `PIXEL.md`; universo compartido por los system: `C:/dev/agatha-os/docs/universo-system-html.md`.
- Reglas vigentes: los gatos llevan nariz rosada `#eb9aa6` y no boca (Erick, Tony y el DJ no llevan nariz); cara mínima de ojos-punto. **Pendiente de pasar a `PIXEL.md`:** la regla de la nariz, las excepciones de cara (ceño de Beethoven, casco del DJ), el elenco inspirado en famosos y la lección de resolución (Gemini dibuja tejidos finos a medio pixel). Fundir colores de Erick (18 → 16) sin aplicar: el usuario dijo «dale» sin confirmarlo, preguntar antes de tocar el sprite.

## Herramientas y trucos

- `capturar.cjs` (en `.impeccable/prototipo/`): capturas con Chrome headless por CDP, `node capturar.cjs <carpeta>`. Edge headless en Windows no baja de ~492 px: para móvil usar emulación por CDP.
- Probar el tope de la rueda: Chrome headless con `Input.dispatchMouseEvent` tipo `mouseWheel`; separar los empujones ≥110 ms y <600 ms.
- `npm` no está en el PATH; los scripts con imágenes usan el `sharp` de `C:/dev/entertechschool/app_enterbase/node_modules/sharp`.
- Los generadores `gen-*.js` de imágenes de apuntes son desechables y no están versionados.

## Pendientes

**Del usuario**
1. Reportar las clases 9, 10 y 11 de guitarra, dar el OK del esquema de p-i-m-a (concepto 8 de la cola) y contar el resultado de la evaluación general de la clase 5 (sin eso M1, M2 y M3 no pasan a ✅).
2. (Pospuesto junto con el sonido) Conseguir `celta.mp3` y `pantano.mp3`.
3. Decidir si se retira la rama `gh-pages`.
4. Revisión de skills con `skill-steward` (la última fue el 2026-10-06).
5. Guitarra perdió la explicación «1 traste = 1 semitono» al borrar `apunte_2.5`: agregarla en un apunte de guitarra cuando toque.
6. ¿Borrar las imágenes que ya no usa ninguna práctica? `fundamentos/guitarra/clase01/img/clase01-tab-1234`, `clase02/img/clase02-progresiones` y `clase03/img/clase03-ejercicios-ritmicos` (.png y .svg).
7. Duda: el test anti-muleta de `crear-diagrama` («eje de tiempo») choca en la letra con F6 (figuras rítmicas permitidas); propuesta: aclararlo con `nueva-regla` («eje de tiempo animado o iluminado en secuencia»).
8. Idea abierta: gamificación (tarjeta de personaje con stats). Hay que definir criterios por carril y dónde se guardan las marcas.
9. La fila de Okaeri en `C:/dev/agatha-os/PROJECTS.md` está vieja (dice «guitarra y canto» y que `system.html` se publica); otra sesión tiene ese archivo con cambios sin commit: pedir OK antes de tocarlo.

**Limpieza opcional (del agente, con aviso)**
- `capturar.cjs`: sus tomas de escritorio usan `.sep` y `.paso`, que ya no existen en escritorio, y la «06-practica-en-sitio» usa los botones Teoría/Práctica, que ya no existen.
- `.impeccable/design.json`: sidecar sin actualizar (`DESIGN.md` sí).
- Código muerto: `p.previo` en `md.cjs` y `.apunte p.previo` en `src/estilo.css`, `.ico-nivel`; `ornamento.cjs` y `ornamentos.cjs` solo sirven de referencia.

Última conversación: vista de Práctica a pantalla completa (paso 1), transición y commit `5863b3d` · 2026-11-12 · `claude --resume 2774a0de-31bb-44cd-b330-d0852b7b97b9`
