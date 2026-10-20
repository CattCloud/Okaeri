# Decisión: `system.html` — la cara del sistema, y sus reglas de diseño

> **Estado:** vigente, pulido con la skill `impeccable` (2026-10-15). **Fecha:** 2026-10-14. **Aprobada por el usuario:** sí, con correcciones ya aplicadas — ver «Correcciones del usuario» más abajo. Integrado a la constitución en `AGENTS.md` (Mapa · Dónde vive cada cosa).

## Contexto

R11 dice *"nada de dashboards, APIs ni módulos futuros"*. `system.html` es, literalmente, un dashboard. La excepción se abre porque el dolor ya es real, no anticipado: el usuario solo abre las carpetas del repo cuando tiene que leer una clase puntual; todo lo demás (qué conceptos de la escalera ya están escritos, cuáles faltan, dónde está cada apunte) lo tiene que buscar abriendo el editor — fricción real, hoy, no un "podría servir algún día". Por eso se construye, documentando la excepción aquí en vez de tocar el texto de R11.

## Decisión

**Qué es:** un archivo HTML local, autocontenido, que sirve como mapa de navegación y de progreso del sistema. No reemplaza los `.md`: los lee y los resume.

**Dónde vive:** `system.html` en la raíz del repo. **No versionado** (mismo trato que `PROMPT.md`): es una vista de consulta del usuario, no contenido del sistema.

**Reglas de diseño (fijas, no se renegocian cada vez que se toca el archivo):**

1. **Tres piezas con un objetivo cada una, que no se pisan:**
   - **Barra lateral** = tabla de contenidos de lo que **ya existe**. Solo lista apuntes escritos (`estado: ESCRITA`). Nada de marcas de pendiente/OK aquí — para eso está la escalera.
   - **Escalera de temas** = la única vista de progreso: qué concepto está escrito, cuál espera el OK del usuario, cuál está en cola. Un concepto, un escalón.
   - **Lector de apunte** = el contenido en sí, renderizado limpio, estilo Markdown Preview.
2. **Sin emojis.** Iconos (SVG en línea, estilo trazo fino) en su lugar — ni en la barra lateral, ni en los títulos, ni en los badges.
3. **Paleta:** inspirada en `image.png` (morado profundo de marca, verde lima vivo, lila suave, sobre crema) — pero **fondo blanco para el panel de lectura de un apunte**: la lectura necesita descanso visual aunque el resto del sistema sea vivo.
4. **Un carril a la vez.** Guitarra y canto nunca se muestran juntos — hay un selector explícito para enfocar uno u otro, y la barra lateral se filtra con él.
5. **Pensado para pantalla grande (18").** Tipografía y componentes a una escala que no obligue a entrecerrar los ojos — no es un diseño mobile-first achicado.
6. **Solo contenido real.** Si un apunte no se ha leído completo en la conversación donde se construye o actualiza `system.html`, se marca como *mockup / no conectado* en vez de inventarse su contenido.

**Mecanismo de actualización:** opción (a) — ningún hook. Cuando el agente, dentro de una conversación, cierra una clase o escribe un apunte nuevo, regenera `system.html` como parte de esa misma tarea, sin que el usuario lo pida aparte. Si la actividad de regenerarlo se vuelve repetitiva y mecánica, se propone convertirla en skill (no se crea sin aprobación — regla global del usuario).

## Publicación en GitHub Pages (2026-10-15, decisión del usuario)

**Para qué:** que su hermana estudie los apuntes con un enlace: `https://cattcloud.github.io/Okaeri/`. Conserva los estilos del panel.

**Decisiones (todas las opciones recomendadas):**
1. **Misma repo, pública.** No se crea una segunda repo: duplicaría el mantenimiento y no hay razón para hacerla privada.
2. **Versión de estudio:** sin "Pendientes" ni "Clases en orden" (el avance personal no se publica), abre en el primer apunte y lleva `noindex`. Los dos carriles se publican; el interruptor Guitarra ⟷ Canto sigue.
3. **Cómo:** `sistema/herramientas/publicar-panel.mjs` arma `index.html` + las imágenes que el panel usa en una carpeta temporal y la sube a la rama `gh-pages` (forzada: es una rama generada). No toca la rama actual ni el árbol de trabajo. `system.html` sigue sin versionarse en la rama principal. Si falta una imagen o el panel cambió de forma, el script se niega a publicar.
4. **Cuándo:** a mano, con `node sistema/herramientas/publicar-panel.mjs`, al terminar la tarea que regenera `system.html`. Sin hook, igual que la regeneración. `--out <carpeta>` arma el sitio sin subirlo (para probar).

**Detalles:** Pages sirve desde `gh-pages` en `/`. Lo publicado es solo el panel y sus imágenes; el resto de la repo ya era público. Probado antes de subir: 24 apuntes, 38 imágenes, cero errores.

## Correcciones del usuario (2026-10-14, segunda ronda) — ya aplicadas

- **Paleta (revisada 2026-10-14, tercera ronda):** la de `image.png` no convenció. Se reemplazó por la de `image copy.png` — casi monocromática, un solo acento. Son exactamente estos 7 colores, **sin inventar ninguno más**: fondo `#eef0f1` · blanco `#ffffff` · gris suave `#dedcda` · acento único azul grisáceo `#7e9fb2` · negro `#171717` · texto gris medio `#8f9195` · texto gris claro `#aab0b4`. El negro reemplazó al morado (barra lateral, texto fuerte); el acento único reemplazó a lima/lila — ya no hay un color por carril, la distinción es tipográfica y de posición, no de color. Los estados "en cola"/"esperando tu OK"/"visto en clase" se diferencian por **peso** del mismo acento (texto vs. relleno vs. anillo), nunca por un color nuevo (nada de ámbar ni verde).
- **Sin emojis en la interfaz.** Un sprite de iconos SVG en línea (`<symbol>` + `<use>`) cubre búsqueda, escalera, calendario, módulo, documento, flecha, check, reloj, lista, pick (guitarra) y micrófono (canto). Los emojis que ya existen **dentro del contenido original de un apunte** (p. ej. "📋 Repaso en una pantalla") se muestran con su icono equivalente al renderizar, sin tocar el `.md` fuente.
- **Barra lateral = solo lo escrito.** Ningún indicador de pendiente/OK ahí; eso es trabajo exclusivo de la escalera.
- **Jerarquía de la barra lateral:** árbol por módulo del temario (M1, M3, M6, M8…), no por clase cronológica — sigue "el temario es el mapa", no "la clase manda la ruta". La vista cronológica sigue disponible aparte, en "Clases en orden".
- **Selector de carril:** interruptor deslizante (Guitarra ⟷ Canto) en la cabecera de la barra lateral. Es **global**: cambia la barra lateral, la escalera y el timeline a la vez. Nunca se muestran los dos carriles juntos.
- **Escala para pantalla de 18":** tipografía base subida a 17px y componentes con más aire — no es un diseño pensado para pantallas chicas.

## Correcciones del usuario (2026-10-15, pulido con `impeccable`) — ya aplicadas

- **Paleta: 8º color, con tu OK.** El texto secundario del lector de apunte (prerrequisitos, pie, pie de figura, comentarios) no alcanzaba el contraste mínimo de lectura con los 7 colores originales. Se sumó **un solo color más**, en la misma familia que el acento: `--text-strong: #63707a` (azul grisáceo oscuro, mismo tono que `#7e9fb2`, más oscuro — cumple contraste AA sobre blanco). Reemplaza al gris medio `#8f9195` en ese rol; los 7 colores originales siguen declarados tal cual.
- **Ancho del lector de apunte: uno solo para todo.** Primero se probó texto angosto (72ch) con tablas/figuras a ancho completo del panel — se veía disparejo (el diagrama más ancho que el párrafo de al lado). Se corrigió a **un único ancho para texto, tablas y figuras**: `960px`. Más ancho que el primer intento (72ch ≈ 700px), para que los diagramas (el mástil de la pentatónica, el mapa de notas) se lean sin esfuerzo, pero parejo en todo el apunte.

## Recorrido y prácticas (2026-10-15, construido el mismo día)

**Contexto:** el panel solo mostraba apuntes; las prácticas no aparecían en ninguna vista (se había dicho en la planificación inicial y quedó fuera). Y «Pendientes» solo listaba lo que faltaba escribir: un tema terminado desaparecía, así que no se veía el avance.

**Decisiones del usuario:**
1. **«Pendientes» se reemplaza por «Recorrido»**: un mapa plegable, estilo mapa mental (NotebookLM), de tres niveles: carril → módulos → temas; un tema con escalera la despliega como un cuarto nivel. Arranca con solo el módulo en curso abierto, para no sobrecargar la página.
2. **El temario es el esqueleto, no la lista.** Aparecen los 9 módulos (8 en canto), cada uno con una barrita de un segmento por sección del temario (verde = lograda, gris = sin lograr) y el contador «N temas · X/M logradas». *Ajuste al construir:* se quitó el segmento azul «vista» del mockup, porque no hay forma honesta de saber cuántas secciones del temario cubre cada tema; el avance «visto» lo da el número de temas. Las tarjetas son solo de temas **vistos en clase** o **propuestos por la escalera**; lo que aún no se toca no tiene tarjeta. Un módulo sin temas tocados queda tenue y cerrado. Un tema terminado **no desaparece**.
3. **Dos etiquetas por tarjeta: Apunte y Práctica.** Apunte en el acento (`#7e9fb2`), Práctica en negro (`#171717`): el contraste sale de dos colores de la paleta, sin color nuevo. Estado por el borde: punteado = falta, sólido = en curso (solo práctica), relleno = listo («Escrito» / «Hecha»).
4. **Origen visible:** tarjeta de clase = blanca con «Clase N»; propuesta por la escalera = borde punteado con «Escalera».
5. **«Lograda» = pasó su evaluación (✅ en el temario, R4)**, no basta con apunte escrito y práctica hecha. Se pinta con un **9º color: verde salvia `#9db39a`**. Porqué: es el estado más importante del mapa y debe leerse de un vistazo; el acento y el negro ya son las etiquetas, y reusarlos confundiría la tarjeta con su etiqueta. La alternativa sin color nuevo (tarjeta negra invertida) pesaba demasiado en un mapa que se llena de logros. **Excepción explícita** a «nada de ámbar ni verde» (2026-10-14), y solo para este estado.
6. **La práctica en el resto del panel:** en la barra lateral cuelga como hija de su apunte (icono propio de ejercicio); al final de cada apunte, un enlace destacado «Práctica de este apunte»; la práctica se lee en el mismo lector (960px, fondo blanco), con sus 3 niveles marcados por barras de 1, 2 y 3 alturas en lugar de los emojis.

7. **Versión publicada (GitHub Pages): opción (a), decidida 2026-10-15.** Las prácticas se publican como material de estudio, **sin** estado, chips de tiempo/clase ni «Hasta cuándo» (es avance personal); el criterio «Cuándo ya está» se queda. Vistas de apunte y de práctica aprobadas el mismo día.

**Cómo se mantiene (a mano, sin hook):** en `system.html`, `recorrido` (módulos y temas; `done:true` solo cuando el tema pasa su evaluación) y `practicasData` (contenido de cada práctica, leído de su `.md`; sus apuntes enlazan; lo personal va en `only-personal`). Cada práctica nueva o cambiada se reconvierte al marcado del panel. La versión publicada oculta «Recorrido», «Clases en orden» y todo lo `only-personal`; `publicar-panel.mjs` lo hace y se niega si el panel cambia de forma.

**Mockups:** en el scratchpad de la conversación del 2026-10-15 (`mockup-recorrido.html`, `mockup-practicas.html`); no se versionan.

## Rediseño desde cero (2026-10-20, decisión del usuario) — en curso

**Qué:** se rehace el aspecto completo de `system.html` (layout, paleta, tipografía) con `impeccable`, sin cambiar el contenido. Porqué: el usuario quiere que usar el panel sea una aventura, con una temática, y no una página estática; más adelante se le sumará gamificación.

**Reglas que se mantienen:**
- **Un carril a la vez.** Guitarra y canto nunca se muestran juntos ni se combinan sus contenidos, para estudiar con foco en uno solo.
- **Sin emojis.** Iconos e ilustraciones propias (SVG) en su lugar, también en la temática.
- **Versión publicada sin avance personal** (sin «Recorrido», «Clases en orden» ni estado de las prácticas), como decidió el 2026-10-15.
- **Solo contenido real** (regla 6).

**Reglas que se liberan:**
- **Paleta de 9 colores** (correcciones del 2026-10-14 y 10-15): la reemplaza la del rediseño. Lo que sí sigue es el significado de los estados del Recorrido (falta / en curso / listo / lograda).
- **Tres piezas fijas** (barra lateral, escalera/Recorrido, lector): pueden cambiar de forma, lugar y reparto.
- **Lector sobrio sobre blanco a 960px:** el lector también viste la temática, cuidando el contraste para leer largo.
- **Solo pantalla de 18":** se diseña para escritorio grande como principal y para que funcione bien en celular.

**Dirección elegida (2026-10-20): «Señal glitch».** Okaeri es una transmisión que se sintoniza: cada carril es una frecuencia, cada módulo un canal y lo que se estudia está «en el aire». Porqué: el usuario escucha rock alternativo (su banda favorita es Linkin Park), música clásica y lofi; de las propuestas sacadas de esos gustos eligió esta sobre «Caja de vinilos» y «Muro de esténcil». Estados en orden fijo: sin señal (falta), señal estable (visto), en el aire (en curso, rojo `#ff2a2a`), sintonizado (lograda, cian `#27e1ff`). El glitch nunca toca un párrafo. Contrato completo (paleta, tipografía, primera pantalla, gestos): `.impeccable/surfaces/system-html.md`. Bocetos de todas las propuestas: `.impeccable/mocks/decision/galeria.html`.

**Ajustes del usuario sobre la construcción (2026-10-20):**
- **Tema claro por defecto, oscuro opcional.** El negro como base se sentía «tema oscuro»; el claro (hueso `#ecebe6`, tinta `#141413`, rojo `#d01c14`, cian `#00708c`) lleva el glitch como tinta mal registrada de risografía. El navegador recuerda la elección.
- **Menú de icono, sin texto, con forma de dial** (SVG elegido por el usuario: `dial-svgrepo-com.svg`). Agrupa «Vistas» (Recorrido, Clases en orden) y «Tema». En la versión publicada solo se ve «Tema».
- **Guía (barra lateral) cerrada por defecto en escritorio**, para que el Recorrido tenga la escala del boceto; abierta en la versión publicada, donde es la navegación principal.
- **Fuentes incrustadas en el archivo** (+196 KB): el panel se ve igual sin internet.

Sistema visual completo (tokens, componentes, reglas): `DESIGN.md` en la raíz del repo.

## Consecuencias

- Esta decisión es la fuente única de las reglas de `system.html`. Un cambio de regla (no de contenido) se anota aquí, no solo en memoria de conversación.
- El archivo en sí puede rehacerse muchas veces; estas reglas no cambian con cada rehecho, salvo que el usuario las corrija explícitamente (y entonces se edita este archivo).
