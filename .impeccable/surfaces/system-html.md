---
version: 1
slug: "system-html"
primary_target: "system.html"
related_targets: []
---

## Alcance

`system.html`, el panel completo (versión personal y la versión de estudio que arma `sistema/herramientas/publicar-panel.mjs`). Rediseño: mundo visual nuevo, mismo contenido y mismas funciones.

## Modo

Experiencia. El mundo carga toda la página: fondo, superficies, navegación, Recorrido y lector. Dentro del lector el texto mantiene contraste AA y un ancho de lectura real.

## Estrategia de la superficie

- Uso: antes de practicar (ubicar qué toca y abrirlo), con el instrumento en la mano (panel al lado) y leyendo con calma. La hermana lee canto en la versión publicada.
- Portada (personal): el Recorrido del carril activo. La publicada abre en el primer apunte.
- Futuro: tarjeta de personaje a pantalla completa por carril, con stats por criterio; cada ejercicio marcado suma un punto. No se construye ahora; el mundo le deja lugar.

## Direction contract

THESIS: Okaeri es una transmisión que sintonizas. Cada carril es una frecuencia y cada módulo un canal; lo que estudias está «en el aire». Rechaza el panel de progreso de app educativa (tarjetas blancas, barras verdes, rachas).

OWN-WORLD: negro de pantalla #0a0a0a, blanco hueso #ecebe6, rojo señal #ff2a2a solo para «en el aire» y la acción principal, cian #27e1ff para «sintonizado» (lograda), gris #8f8f8a para lo secundario. Líneas de escaneo tenues, desplazamiento RGB rojo/cian en títulos, Major Mono Display en titulares, Chakra Petch en interfaz, Atkinson Hyperlegible en el texto de los apuntes. Iconos SVG de trazo, sin emojis.

STORY: entras, ves en qué canal estás y cuánta señal tiene cada módulo, abres el apunte o la práctica y lo lees como un teletexto limpio.

FIRST VIEWPORT: cabecera fina con «OKAERI // TRANSMISIÓN», selector de frecuencia Guitarra/Canto y búsqueda; el nombre del carril enorme con desplazamiento RGB; una regla de frecuencia; nueve canales en columnas (M1-M9) con sus barras de señal; M8 «en el aire» en rojo. La guía de programación (apuntes escritos) en un riel lateral plegable. Móvil: los canales pasan a filas.

FORM: «Señal glitch», propuesta fundada nº 1 de la galería de gustos del usuario (rock alternativo electrónico), elegida por él sobre «Caja de vinilos». Gesto distintivo: sintonizar; cambiar de carril llena la pantalla de estática 300 ms y entra la otra señal; al pasar sobre un canal su texto se desarma y se recompone. Estados en secuencia fija: sin señal (falta), señal estable (visto), en el aire (en curso), sintonizado (lograda). El glitch nunca toca un párrafo; con `prefers-reduced-motion` todo es corte limpio. Tarjeta de personaje futura: la imagen del personaje entra con interferencia y se aclara al subir los stats, medidos en la misma escala de barras. seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Pendiente

- Criterios por carril, dónde se guardan las marcas y si la hermana tiene gamificación.
