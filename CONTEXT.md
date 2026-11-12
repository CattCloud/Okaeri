# Contexto — Okaeri

> Última actualización: 2026-11-12 (memoria ordenada con `tidy-memory`, lo anterior en `CONTEXT-archivo.md`; carrusel pusheado en `ea9909e`; carril de canto archivado, sin commit)

## Estado

Sistema personal para aprender guitarra clásica comprendiendo y reteniendo, no solo ejecutando. El carril de canto se retiró el 2026-11-06 (el usuario y su hermana dejaron la academia por economía y tiempo) y se archivó el 2026-11-12 en `_archivo/canto/` (sin commit aún; decisión en `NOTAS.md`). **El estado operativo vive en `sistema/estado/estado_actual.md` y las decisiones en `NOTAS.md`**; este archivo no los duplica: guarda lo que esos dos no cubren (la web, sus porqués, los pendientes).

- **Clases:** guitarra reportada hasta la 8 (2026-10-20); faltan la 9, la 10 y la 11 (27-oct, 3-nov, 10-nov). `estado_actual.md` → «Semana en curso» sigue en 2026-10-20 → 10-26: se actualiza al reportarlas.
- **La web de Okaeri** (`.impeccable/prototipo/index.html`: doble clic, sin servidor; la arma `node build.cjs` con Node 22 desde esa carpeta) reemplazó a `system.html` el 2026-11-11; el panel viejo está en `_archivo/panel-system-html/`. **No se publica en internet:** el sitio era para la hermana del usuario, que dejó el canto. La rama `gh-pages` sigue en el remoto con el panel viejo (preguntar si se retira). `build.cjs` lee los `.md` por su `modulo:`; conectados: M1 (6 apuntes, 2 prácticas), M3, M6 y M8 (`la-pentatonica`, provisional, y la práctica de arpegio suelta). M2, M4, M5, M7 y M9 dicen «Sin apuntes aún» (R11). Se regenera dentro de la misma tarea al cerrar una clase o escribir un apunte o práctica.
- **Carrusel de apuntes** (escritorio ≥1200 px; bajo ese ancho sigue apilado): construido, probado con el mouse del usuario y publicado en `main` (`ea9909e`, 2026-11-12). Especificación: `.impeccable/surfaces/system-html.md` → «Carrusel de apuntes»; reglas visuales: `DESIGN.md` → Carousel.

## Siguiente paso

**Primera acción:** hacer commit y push del archivado de canto (73 archivos movidos, ~34 editados, `_archivo/canto/` nuevo, más `CONTEXT.md` y `CONTEXT-archivo.md`) cuando el usuario lo diga; `.impeccable/review/` queda fuera. Después, que el usuario reporte las clases 9, 10 y 11 de guitarra.

## Decisiones vivas

Las que explican algo que sigue en pie, con su porqué. Las demás (escenas del vestíbulo y del conservatorio, panel `system.html` anterior, bocetos de personajes) están en `CONTEXT-archivo.md`.

**Carril de canto archivado (usuario, 2026-11-12; plan A aprobado bajo R10)**
- Todo lo de canto está en `_archivo/canto/` (apuntes y prácticas, temario, sílabo, repertorio, estado y el texto de las reglas F12, F15 y RP5); `README.md` de esa carpeta dice cómo restaurarlo. Las reglas R2, R4, R9, F7, F10, F11, RP1 y RP2 dejaron de nombrar canto. Detalle y lista de archivos: `NOTAS.md` (2026-11-12).
- `la-pentatonica` quedó sin el enlace al apunte del semitono: se enlaza de nuevo cuando la cola de guitarra escriba «Tono y semitono» (concepto 2).
- Histórico que se queda: `sistema/decisiones/`, `sistema/manual_okaeri.md`, el rango vocal en `yo_musica.md` y el registro de las clases 1-6 de canto en `practica/00_indice.md`.

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
- **Navegación:** un módulo a la vez; franja de módulos entre el hero y el apunte (abre con el módulo en curso); drawer con la ruta del módulo, otros módulos, buscador y «Clases en orden» (solo personal). La práctica se alterna con la teoría en el sitio del apunte, no abajo en el scroll.
- **Alcance:** solo laptop con Windows. Tableta y móvil quedan fuera por ahora (usuario, 2026-11-10).
- **Audio:** `audio/celta.mp3` y `audio/pantano.mp3` **no existen** (las consigue el usuario; `.gitignore` ignora los `.mp3`); sin ellas el botón avisa «Sin audio».
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
2. Conseguir `celta.mp3` y `pantano.mp3`.
3. Decidir si se retira la rama `gh-pages`.
4. Revisión de skills con `skill-steward` (la última fue el 2026-10-06).
5. Guitarra perdió la explicación «1 traste = 1 semitono» al borrar `apunte_2.5`: agregarla en un apunte de guitarra cuando toque.
6. ¿Borrar las imágenes que ya no usa ninguna práctica? `fundamentos/guitarra/clase01/img/clase01-tab-1234`, `clase02/img/clase02-progresiones` y `clase03/img/clase03-ejercicios-ritmicos` (.png y .svg).
7. Duda: el test anti-muleta de `crear-diagrama` («eje de tiempo») choca en la letra con F6 (figuras rítmicas permitidas); propuesta: aclararlo con `nueva-regla` («eje de tiempo animado o iluminado en secuencia»).
8. Idea abierta: gamificación (tarjeta de personaje con stats). Hay que definir criterios por carril y dónde se guardan las marcas.
9. La fila de Okaeri en `C:/dev/agatha-os/PROJECTS.md` está vieja (dice «guitarra y canto» y que `system.html` se publica); otra sesión tiene ese archivo con cambios sin commit: pedir OK antes de tocarlo.

**Limpieza opcional (del agente, con aviso)**
- `capturar.cjs`: sus tomas de escritorio usan `.sep` y `.paso`, que ya no existen en escritorio.
- `.impeccable/design.json`: sidecar sin actualizar (`DESIGN.md` sí).
- Código muerto: `p.previo` en `md.cjs` y `.apunte p.previo` en `src/estilo.css`, `.ico-nivel`; `ornamento.cjs` y `ornamentos.cjs` solo sirven de referencia.

Última conversación: ordenar la memoria tras publicar el carrusel de apuntes (`ea9909e`) · 2026-11-12 · `claude --resume e813fe0c-9476-4997-8d78-43a0769b1a6a`
