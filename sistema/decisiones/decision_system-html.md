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

## Consecuencias

- Esta decisión es la fuente única de las reglas de `system.html`. Un cambio de regla (no de contenido) se anota aquí, no solo en memoria de conversación.
- El archivo en sí puede rehacerse muchas veces; estas reglas no cambian con cada rehecho, salvo que el usuario las corrija explícitamente (y entonces se edita este archivo).
