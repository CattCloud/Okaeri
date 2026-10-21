---
name: Okaeri
description: Panel de estudio de guitarra y canto como una transmisión que se sintoniza («Señal glitch»).
colors:
  # Tema claro (por defecto)
  papel-hueso: "#ecebe6"
  tinta-casi-negra: "#141413"
  rojo-risografia: "#d01c14"
  rojo-risografia-texto: "#b3170f"
  cian-risografia: "#00708c"
  gris-grafito: "#5f5e58"
  superficie-1-claro: "#f4f3ef"
  superficie-2-claro: "#f9f8f5"
  superficie-3-claro: "#ffffff"
  linea-claro: "#d2d0c8"
  linea-fuerte-claro: "#a9a79e"
  glitch-rojo-claro: "#f0322a"
  glitch-cian-claro: "#1fb8d8"
  # Tema oscuro (opcional)
  negro-pantalla: "#0a0a0a"
  blanco-hueso: "#ecebe6"
  rojo-senal: "#ff2a2a"
  cian-sintonia: "#27e1ff"
  gris-ceniza: "#8f8f8a"
  superficie-1-oscuro: "#111110"
  superficie-2-oscuro: "#181817"
  superficie-3-oscuro: "#222220"
  linea-oscuro: "#2a2a28"
  linea-fuerte-oscuro: "#454542"
typography:
  display:
    fontFamily: "'Major Mono Display', 'Chakra Petch', monospace"
    fontSize: "clamp(56px, 12.4cqi, 176px)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Major Mono Display', 'Chakra Petch', monospace"
    fontSize: "clamp(38px, 6cqi, 88px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Major Mono Display', 'Chakra Petch', monospace"
    fontSize: "clamp(30px, 3.6cqi, 46px)"
    fontWeight: 400
    lineHeight: 1.16
    letterSpacing: "-0.01em"
  numeral:
    fontFamily: "'Major Mono Display', 'Chakra Petch', monospace"
    fontSize: "clamp(26px, 2.5cqi, 36px)"
    fontWeight: 400
    lineHeight: 1
  section:
    fontFamily: "'Chakra Petch', system-ui, sans-serif"
    fontSize: "20.5px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.015em"
  body:
    fontFamily: "'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.68
  body-sub:
    fontFamily: "'Atkinson Hyperlegible', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  ui:
    fontFamily: "'Chakra Petch', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.38
  label:
    fontFamily: "'Chakra Petch', system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 600
    letterSpacing: "0.14em"
  label-sm:
    fontFamily: "'Chakra Petch', system-ui, sans-serif"
    fontSize: "11.5px"
    fontWeight: 700
    letterSpacing: "0.16em"
  brand:
    fontFamily: "'Chakra Petch', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    letterSpacing: "0.22em"
  code:
    fontFamily: "ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "0.84em"
rounded:
  none: "0px"
spacing:
  hair: "4px"
  tight: "8px"
  base: "14px"
  block: "18px"
  section: "44px"
  gutter: "48px"
  gutter-movil: "16px"
components:
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-casi-negra}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.superficie-2-claro}"
  carril-toggle-activo:
    backgroundColor: "{colors.superficie-2-claro}"
    textColor: "{colors.tinta-casi-negra}"
    typography: "{typography.label}"
    padding: "8px 16px"
    height: "40px"
  carril-toggle-inactivo:
    backgroundColor: "{colors.papel-hueso}"
    textColor: "{colors.gris-grafito}"
  input-busqueda:
    backgroundColor: "{colors.superficie-1-claro}"
    textColor: "{colors.tinta-casi-negra}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "0 12px 0 38px"
    height: "40px"
    width: "250px"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-casi-negra}"
    typography: "{typography.ui}"
    padding: "10px"
    height: "44px"
  nav-item-activo:
    backgroundColor: "{colors.tinta-casi-negra}"
    textColor: "{colors.papel-hueso}"
  canal:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-casi-negra}"
    padding: "18px 12px 16px 14px"
  canal-en-el-aire:
    textColor: "{colors.rojo-risografia}"
  practica-link:
    backgroundColor: "{colors.papel-hueso}"
    textColor: "{colors.tinta-casi-negra}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  practica-link-hover:
    backgroundColor: "{colors.rojo-risografia}"
    textColor: "{colors.papel-hueso}"
  chip-en-curso:
    backgroundColor: "{colors.rojo-risografia}"
    textColor: "{colors.papel-hueso}"
    typography: "{typography.label-sm}"
    padding: "0 12px"
    height: "32px"
  panel-apunte:
    backgroundColor: "{colors.superficie-1-claro}"
    textColor: "{colors.tinta-casi-negra}"
    typography: "{typography.body}"
    padding: "54px 64px 64px"
  menu-dial:
    backgroundColor: "{colors.superficie-1-claro}"
    textColor: "{colors.tinta-casi-negra}"
    padding: "6px 0 14px"
    width: "288px"
---

# Design System: Okaeri

## Overview

**Creative North Star: "Señal glitch"**

Okaeri es una transmisión que se sintoniza. Cada carril (guitarra o canto) es una frecuencia, cada módulo del temario es un canal y lo que se estudia ahora está «en el aire». La interfaz toma el vocabulario de un receptor: una regla de frecuencia con marcas, barras de señal, estática al cambiar de emisora y titulares con el desplazamiento rojo/cian de una señal mal sintonizada. El mundo se apoya en el rock alternativo electrónico que el usuario eligió en su galería de gustos.

El ruido vive solo en los bordes. Los titulares tiemblan, los canales se desarman al pasar el cursor y la pantalla se llena de estática 300 ms al cambiar de carril; el lector de apuntes, en cambio, es un teletexto limpio: placa opaca, Atkinson Hyperlegible a 18px, 70 caracteres por línea, contraste AA. Estudiar va primero y la aventura nunca estorba la lectura.

El tema claro es el de fábrica: papel hueso, tinta casi negra y rojo y cian de risografía. El oscuro es la pantalla negra original del contrato y se elige en el menú del dial. Los dos comparten forma, escala y reglas; solo cambian los valores de los mismos papeles. El sistema rechaza el panel de progreso de app educativa: tarjetas blancas redondeadas, barras verdes, rachas.

**Key Characteristics:**
- Esquinas rectas en todo, líneas de 1px y trazo discontinuo para lo que falta.
- Cuatro estados de señal en orden fijo, cada uno con su forma y su color.
- Glitch RGB solo en titulares; estática solo en transiciones; ningún efecto sobre párrafos.
- Tres familias con papeles separados: Major Mono (titulares y numerales), Chakra Petch (interfaz), Atkinson Hyperlegible (lectura).
- Líneas de escaneo tenues de fondo, detrás de superficies opacas.
- Iconos SVG de trazo con terminación cuadrada; ningún emoji.

## Colors

Dos temas sobre los mismos cinco papeles (fondo, tinta, rojo, cian, gris), en código `--k`, `--w`, `--r`, `--c`, `--g` sobre `html[data-theme]`. El tema claro rige por defecto; el oscuro se guarda en `localStorage` con la clave `okaeri-tema` y el script de cabecera lo aplica antes de pintar, junto con el `theme-color`. Las superficies y líneas de cada tema se derivan de su fondo y su tinta, sin matices nuevos.

### Primary
- **Rojo de risografía** (claro) / **Rojo señal** (oscuro): lo que está transmitiendo ahora y la acción principal. Marca el módulo «en el aire» (numeral, borde, brillo de fondo, marca alta en la regla), el chip y la etiqueta «En curso», el enlace «Práctica de este apunte», el carril activo en el selector (barra de 2px bajo la etiqueta), la opción marcada del menú y la doble barra del logotipo. El contrato lo limitaba a «en el aire» y la acción principal; el build lo extiende a lo seleccionado ahora y al logotipo, y esa extensión queda como regla.
- **Rojo para texto** (`rojo-risografia-texto` en claro; en oscuro es el mismo rojo señal): texto chico rojo sobre el brillo «en el aire» y en las etiquetas de estado, donde el rojo base no llegaría a AA.

### Secondary
- **Cian de risografía** (claro) / **Cian de sintonía** (oscuro): «sintonizado», es decir, lograda: el tema pasó su evaluación del temario. Barras de señal, marca de la regla, borde de la tarjeta de tema logrado y la línea «Lograda». No se usa para otra cosa.

### Neutral
- **Papel hueso** / **Negro de pantalla**: fondo de la página y texto sobre las superficies invertidas (elemento activo, pestaña marcada).
- **Tinta casi negra** / **Blanco hueso**: todo el texto, las barras de «señal estable», el borde superior de 2px de las placas y el anillo de foco.
- **Gris grafito** / **Gris ceniza**: lo secundario: estados de canal, conteos, metadatos, placeholder, «sin señal».
- **Superficies 1, 2 y 3**: placa del lector y tarjetas (1), hover y bloques internos como citas, cabeceras de tabla y niveles (2), código en línea (3).
- **Línea** y **línea fuerte**: divisiones de estructura (1px) y contornos de controles, respectivamente.
- **Franjas del glitch** (`glitch-rojo-claro`, `glitch-cian-claro`; en oscuro, el rojo y el cian de base): solo en las copias desplazadas de los titulares, con fusión `multiply` en claro y `screen` en oscuro. Nunca como color de texto.
- **Placa de diagrama**: los diagramas de fondo claro se montan sobre blanco (claro) o blanco hueso (oscuro) para que se lean igual en los dos temas.

### Named Rules
**La Regla de los Cuatro Estados.** Los estados de un módulo van siempre en este orden y con esta codificación: sin señal (falta: contorno discontinuo gris), señal estable (visto o escrito: barra llena de tinta), en el aire (en curso: rojo), sintonizado (lograda: cian). No se agregan estados ni se reordenan, y la leyenda los muestra en esa secuencia.

**La Regla de la Señal Verdadera.** El cian solo aparece cuando el tema pasó su evaluación. Un apunte escrito es «señal estable», nunca «sintonizado».

**La Regla AA en los Dos Temas.** Todo texto cumple 4.5:1 sobre su fondo real en claro y en oscuro, incluido el brillo «en el aire». Medido en el build: gris sobre fondo 5.45 (claro) y 6.09 (oscuro), cian claro 4.76, rojo claro 4.56, rojo para texto 5.78, texto sobre rojo 4.56 (claro) y 5.3 (oscuro). Un color nuevo entra solo con su par medido en ambos temas.

## Typography

**Display Font:** Major Mono Display (con Chakra Petch, monospace)
**Body Font:** Atkinson Hyperlegible (con system-ui, sans-serif)
**Label/Mono Font:** Chakra Petch para toda la interfaz; ui-monospace / Cascadia Mono / Consolas para código

**Character:** Major Mono pone la voz de máquina y de pantalla; Chakra Petch, de esquinas cortadas, hace de rotulación de equipo; Atkinson carga la lectura larga sin cansar. Las tres van incrustadas en el HTML como woff2 en subconjunto, así que el panel funciona sin red.

### Hierarchy
- **Display** (400, clamp(56px, 12.4cqi, 176px), 0.92): el nombre del carril en el Recorrido, con glitch.
- **Headline** (400, clamp(38px, 6cqi, 88px), 1): título de vista, por ejemplo «Clases en orden», con glitch.
- **Title** (400, clamp(30px, 3.6cqi, 46px), 1.16): título del apunte o la práctica en el lector, con glitch, hasta 880px.
- **Numeral** (400, clamp(26px, 2.5cqi, 36px), 1): M1 a M9 de los canales, número de clase (46px) y minutos de cada nivel (22px).
- **Section** (Chakra 600, 20.5px, 1.3): subtítulos dentro del apunte, precedidos por un guion de 16x2px.
- **Body** (Atkinson 400, 18px, 1.68; 17.5px en móvil): texto del apunte, máximo 70ch. Introducciones de vista en 17px/1.55 y 62ch.
- **UI** (Chakra 500, 15px, 1.38): elementos del riel, nombres de canal y búsqueda.
- **Label** (Chakra 600, 13.5px, 0.14em, mayúsculas): botones, selector de carril y enlaces de acción. **Label-sm** (700, 11.5 a 12.5px, 0.14 a 0.18em, mayúsculas): estados de canal, grupos del menú, metadatos del lector.
- **Brand** (Chakra 700, 15px, 0.22em): «OKAERI // TRANSMISIÓN».

### Named Rules
**La Regla de la Minúscula.** Los titulares en Major Mono se escriben en minúscula (en código, `text-transform: lowercase` o el texto ya en minúscula) para evitar sus glifos alternos de mayúscula; la fuente dibuja la minúscula con forma de versal. Los numerales de canal (M1 a M9) son la única excepción.

**La Regla de Tres Voces.** Major Mono nunca compone texto corrido ni rótulos de interfaz; Atkinson nunca rotula controles; Chakra no compone párrafos de apunte.

## Layout

Armazón en dos filas: cabecera fija de 64px y debajo un riel de 312px junto a la pantalla, con desplazamiento independiente. El riel («Guía de programación») está cerrado por defecto en escritorio y la preferencia se guarda en `okaeri-riel`; si la vista inicial es un apunte y no hay preferencia (la versión publicada), arranca abierto porque ahí es la navegación. Abre y cierra animando la columna (0.4s).

La pantalla tiene 44px arriba y 48px a los lados. En el Recorrido, el título del carril ocupa el ancho; debajo, la regla de frecuencia y los canales en tantas columnas como módulos, con altura clamp(340px, 46vh, 480px) y las barras de señal apiladas desde abajo. Los paneles de módulo abiertos se separan 44px y sus temas van en una rejilla de mínimo 310px. El lector se centra a 1010px, con una placa de 54px/64px de relleno y texto a 880px.

El ritmo sale de una escala corta: 4px entre barras, 8px entre piezas de un control, 14px dentro de tarjetas, 18px en rellenos de bloque y 44px entre secciones. Todo objetivo de clic mide al menos 44px de alto (40px en controles de la cabecera), porque el panel se usa con el instrumento en la mano.

Hay dos cortes. Con el contenedor por debajo de 820px los canales pasan a filas (numeral, nombre, estado, conteo y barras horizontales), la regla de frecuencia se compacta y aparece el indicador «En el aire», que lleva directo al módulo en curso. Por debajo de 760px de ventana la cabecera se reparte en filas (marca y dial, selector de carril a todo el ancho, búsqueda junto al botón Guía), el riel pasa a cajón lateral de min(88vw, 360px) con velo, la página recupera el desplazamiento normal, la pantalla queda a 16px de lado y la placa del lector va a sangre.

## Elevation & Depth

Plano por capas tonales. La profundidad la dan el fondo con líneas de escaneo (1px cada 3px, opacidad 5% en claro y 3.5% en oscuro), las superficies opacas encima y el borde superior de 2px en tinta de las placas principales. Solo el menú del dial flota con sombra difusa, porque es lo único que se superpone al contenido.

### Shadow Vocabulary
- **Flotante del dial** (`box-shadow: 0 18px 40px -12px var(--pop)`): menú desplegado; `--pop` es rgba(20,20,19,.22) en claro y rgba(0,0,0,.7) en oscuro.
- **Línea de canal abierto** (`box-shadow: inset 0 2px 0 var(--w)`; en rojo si el canal está en el aire): marca el canal cuyo panel está abierto.

### Named Rules
**La Regla del Lector Opaco.** Las líneas de escaneo y la estática pasan por detrás o por encima de todo, pero el texto de un apunte siempre se apoya en una superficie opaca.

## Shapes

Radio cero en todo. La forma la ponen las líneas: 1px sólido para estructura y controles, 2px para la placa principal y la marca activa, y discontinuo para lo que falta o es propuesta (estado «sin señal», etiquetas Falta, pendientes, temas sugeridos por la escalera). Las citas se enmarcan con dos escuadras de 14px en esquinas opuestas. Los iconos son SVG de trazo 1.6 con terminación cuadrada y unión en ángulo. Las señales son rectángulos: barras de 10px, cuadros de 8 a 10px para estados y marcas de regla de 2 a 3px.

## Components

### Buttons
Rotulación de equipo: contorno fino, mayúsculas espaciadas, sin relleno en reposo.
- **Shape:** esquinas rectas (0px), contorno de 1px en línea fuerte, 44px de alto.
- **Primario de contorno:** texto en tinta, rótulo Label, icono de trazo a la izquierda.
- **Hover / Focus:** el contorno pasa a tinta y el fondo a superficie 2 (0.2s); foco con anillo de 2px en tinta separado 3px.
- **Botón cuadrado:** 44x44 para cerrar paneles y para el dial.
- **Acción principal («Práctica de este apunte»):** bloque a todo el ancho del texto con contorno rojo, icono en cuadro rojo de 52px, etiqueta roja, título 21px y flecha; al pasar se llena de rojo y el texto se invierte, y la flecha avanza 4px. La variante de vuelta («Apunte de esta práctica») usa contorno neutro y se llena de tinta.

### Chips
- **Etiquetas de tema (Apunte, Práctica):** el Apunte va en contorno y la Práctica en relleno; el color dice el estado: tinta (hecho), rojo (en curso), gris discontinuo (falta). 32px de alto (28px en pasos).
- **Chip de estado de práctica:** relleno rojo con un cuadro de 8px y rótulo Label-sm; solo en la versión personal.

### Cards / Containers
- **Corner Style:** recto (0px).
- **Background:** superficie 1 para tarjetas de tema y la placa del lector; superficie 2 para bloques internos (cita, nivel, resumen, pie de figura).
- **Shadow Strategy:** ninguna; ver Elevation & Depth.
- **Border:** 1px en línea fuerte; la tarjeta de tema logrado lleva borde cian; la placa del lector, 2px de tinta arriba.
- **Internal Padding:** 16px/18px en tarjetas de tema, 20px en niveles, 54px/64px en la placa del lector.

### Inputs / Fields
- **Style:** búsqueda de 250x40px sobre superficie 1, contorno de 1px en línea fuerte, radio 0, icono de lupa a 12px y texto Chakra 500 15px (16px y 46px de alto en móvil, para que el teléfono no haga zoom).
- **Focus:** el contorno pasa a tinta; el cursor de texto también va en tinta.

### Navigation
- **Cabecera:** botón Guía, marca, selector de carril, búsqueda y dial, sobre el fondo al 90% de opacidad con línea inferior.
- **Selector de carril:** dos mitades Guitarra / Canto con icono; la activa va en tinta sobre superficie 2 y la acompaña una barra roja de 2px que se desliza (0.35s). Al cambiar, la pantalla se llena de estática 300 ms y entra el otro carril.
- **Riel:** encabezado por clase con línea que se extiende, elementos de 44px con icono gris, prácticas colgando de su apunte con una escuadra de 1px; el elemento activo se invierte (tinta de fondo, texto en papel).
- **Menú del dial:** botón de 44px con el icono de dial del usuario; abierto se invierte y el dial gira 40°. La carátula (288px) lleva una regla de sintonizador arriba y dos grupos: Vistas (Recorrido, Clases en orden, con cuadro rojo en la opción marcada; se oculta en la versión publicada) y Tema (segmentado Claro / Oscuro, la opción activa invertida). Se maneja con flechas, Inicio, Fin y Escape. Cambiar de tema pasa por una estática de 200 ms.

### Canales y regla de frecuencia (signature)
La regla de frecuencia es una línea de 2px con marcas cada 12px y una marca alta por módulo: tinta (estable), gris corta (sin señal), cian (sintonizado), roja más alta y gruesa (en el aire). Debajo, un canal por módulo separado por líneas de 1px: numeral Major Mono, nombre, estado en Label-sm, conteo de temas y logradas en cifras tabulares, y barras de señal (una por tema; tinta si está visto, cian si está logrado, contorno discontinuo si falta). El canal en el aire lleva borde izquierdo rojo y un brillo rojo que se apaga hacia abajo. Al pasar el cursor o enfocar, el nombre se desarma con caracteres de ruido y se recompone en 250 ms. Un canal sin temas queda inerte y en gris.

### Indicador «En el aire» (móvil)
Franja de 52px, borde rojo, brillo rojo hacia la derecha, cuadro rojo, rótulo «En el aire» y el nombre del módulo; aparece solo en anchos angostos y abre ese módulo.

### Lector (teletexto limpio)
Placa opaca con borde superior de tinta, título con glitch, línea de metadatos en mayúsculas separada por guiones de 14px, banda de prerrequisitos entre dos líneas, citas con escuadras, tablas con cabecera en Chakra y cifras tabulares, figuras sobre placa clara con pie en Chakra, y resumen con cabecera invertida. Las prácticas se leen en cinco pestañas (Libre, Practicar, Entender, Si falla, Avance) que fluyen con la hoja: barra de 5 columnas con contorno de 1px, la activa invertida, 50px de alto; Libre es la de entrada. En Libre, una línea general y un botón rojo de ancho completo (64px, «Pantalla completa», con la tecla F a la derecha, que se oculta en táctil) sobre las versiones apiladas en placas claras: es la acción principal de la pestaña, y el rojo es el de «en el aire». El botón abre el modo foco: una capa que cubre todo, sobre el fondo del tema, con todas las versiones a la vez en una cuadrícula que se calcula para caber sin scroll (la que deja más grande la imagen más chica), un solo botón de salida de 60px a la derecha (arriba en vertical), anillo de foco de 3px en rojo y una entrada de 280ms que no se anima con movimiento reducido. Tocar una versión la agranda y otro toque la devuelve; el resto de la página queda inerte mientras tanto. En Practicar, un selector de tres niveles con barras de 1, 2 o 3 alturas (la activa invertida, barras en rojo) y debajo los pasos numerados en Major Mono, cada uno con su imagen a todo el ancho del texto sobre placa clara; un botón discontinuo lleva a Si falla. Un apunte no conectado se muestra como aviso discontinuo con reloj, nunca como contenido inventado.

### Transiciones de señal
Cada vista entra con `tuneIn` (0.5s, opacidad 0.35 y desenfoque de 2px a nítido). Al sintonizar, las franjas rojo/cian de los titulares se rasgan en 5 pasos (0.42s) y vuelven a su sitio. La estática es un lienzo de ruido gris con líneas rojas y cianes al 92% que cubre la pantalla. Curva de todo el sistema: `cubic-bezier(.16, 1, .3, 1)`. Con `prefers-reduced-motion` no hay animación, ni transición, ni estática: todo es corte limpio.

**Gestos de los features nuevos (decisión del usuario, 2026-10-21).** No hay un límite de gestos: cada feature que se integre (por ejemplo, la futura tarjeta de personaje con stats o marcar un ejercicio como hecho) lleva los gestos que pida, porque la variedad hace el panel más interactivo. Tres condiciones:
- **Un mismo lenguaje:** todos salen de la señal (estática, sintonizar, rasgado rojo/cian, desarme y recomposición de texto, interferencia que se aclara). Nada de gestos de otro mundo.
- **Un gesto por acción, con significado:** acciones distintas se sienten distintas. Por ejemplo, sumar un punto a un criterio no se anima igual que cambiar de carril.
- **Nunca sobre un párrafo**, y con `prefers-reduced-motion` todos pasan a corte limpio.

## Do's and Don'ts

### Do:
- **Do** mostrar un solo carril a la vez: el selector cambia todo el panel y guitarra y canto nunca comparten pantalla ni cifras.
- **Do** usar los cuatro estados en su orden fijo (sin señal, señal estable, en el aire en rojo, sintonizado en cian) y con su forma de barra, chip y marca.
- **Do** escribir los titulares en Major Mono en minúscula.
- **Do** medir cada par de texto y fondo en los dos temas antes de entrar; 4.5:1 como piso.
- **Do** dar a todo control al menos 44px de alto en la pantalla y en el menú.
- **Do** marcar como «no conectado» o mockup lo que no se leyó completo; solo se muestra contenido real.
- **Do** respetar los ganchos de `sistema/herramientas/publicar-panel.mjs`: una sola coincidencia de `</head>` y de `showView("recorrido");`; el menú de vistas dentro de `.app-menu`; las vistas en `#view-recorrido` y `#view-clase-timeline`; lo personal en `.only-personal` y lo de la versión publicada en `.only-pub`; elementos del riel como `.nav-item[data-key]`; imágenes con `src` relativo a la raíz del repo. Si el panel cambia de forma, se ajusta el script en la misma tarea.
- **Do** incrustar las fuentes como woff2 en subconjunto para que el panel funcione sin red.

### Don't:
- **Don't** aplicar glitch, estática, desarme de texto ni líneas de escaneo sobre un párrafo; el glitch vive en titulares, nombres de canal y transiciones.
- **Don't** usar emojis en la interfaz: iconos SVG de trazo; los emojis de un apunte se muestran con su icono equivalente.
- **Don't** pintar cian algo que no pasó su evaluación, ni rojo algo que no está en curso, seleccionado ahora o que no sea la acción principal.
- **Don't** redondear esquinas, agregar sombras a tarjetas ni usar barras verdes, rachas o avisos de ausencia.
- **Don't** mostrar el Recorrido, Clases en orden ni el estado de las prácticas en la versión publicada.
