# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **El usuario (principal).** Aprende guitarra clásica y canto en dos academias (guitarra: martes; canto: jueves), con destino la banda de su iglesia. Abre el panel en tres momentos: antes de practicar (ubicar qué toca y abrir el apunte o la práctica), con el instrumento en la mano (el panel abierto al lado mientras toca o canta) y leyendo con calma (estudiar un apunte completo).
- **Su hermana.** Estudia canto con la versión publicada (https://cattcloud.github.io/Okaeri/), sin ver guitarra y partiendo sin conocimientos.

## Product Purpose

`system.html` es la cara de Okaeri: un panel local, autocontenido, para navegar los apuntes y prácticas escritos y ver el avance de cada carril sin abrir el repositorio. No reemplaza los `.md`: los lee y los resume. Éxito: que abrirlo y usarlo se sienta como una aventura y no como una página estática, sin perder claridad para estudiar.

## Positioning

El avance que muestra es real y medible: un tema solo cuenta como «logrado» cuando pasa su evaluación del temario (R4), no porque haya un apunte escrito. Okaeri recibe al usuario cuando vuelve (おかえり, «bienvenido de vuelta») y nunca le reprocha una ausencia (R3).

## Operating Context

- Archivo único `system.html` en la raíz del repo, no versionado; se regenera a mano dentro de la tarea que cierra una clase o escribe un apunte o práctica.
- Se publica con `node sistema/herramientas/publicar-panel.mjs` (rama `gh-pages`). El script reemplaza `</head>` y `showView("recorrido");` (una coincidencia exacta cada uno) y oculta `.app-menu`, `#view-recorrido`, `#view-clase-timeline` y `.only-personal`; si el panel cambia de forma, hay que ajustar el script.
- Dos carriles, guitarra y canto, cada uno con su temario (`contexto/plan_estudio/`), sus apuntes y prácticas por clase (`fundamentos/<carril>/claseNN/`).

## Capabilities and Constraints

- **Vistas actuales:** barra lateral (árbol por módulo del temario, solo lo escrito, con las prácticas colgando de su apunte; búsqueda), Recorrido (mapa plegable carril → módulos → temas, con etiquetas Apunte y Práctica y estados falta / en curso / listo / lograda), Clases en orden (timeline), lector de apunte y de práctica (prácticas con 3 niveles).
- **Un carril a la vez:** guitarra y canto nunca se muestran juntos ni se combinan; un selector global cambia todo el panel.
- **Sin emojis** en la interfaz: iconos e ilustraciones propias (SVG). Los emojis dentro de un apunte se muestran con su icono equivalente.
- **Solo contenido real:** lo que no se leyó completo se marca como mockup / no conectado.
- **Versión publicada:** sin Recorrido, Clases en orden ni estado de las prácticas; abre en el primer apunte; `noindex`.
- **Pantallas:** escritorio de 18" como principal; debe funcionar bien en celular.
- **Gamificación (futura, no se construye ahora; el diseño la deja prevista):** una tarjeta de personaje a pantalla completa por carril (un personaje, no un héroe; «hero» se refería a la sección de pantalla completa) («mi yo guitarrista»), con sus stats al lado. Cada stat es un criterio que el músico debe desarrollar (p. ej. dedos rápidos, velocidad de cambio de acordes). Al marcar un ejercicio como realizado desde la interfaz, sube un punto en el criterio correspondiente.
- **Decisiones abiertas:** la lista de criterios por carril y qué ejercicio alimenta cada uno; dónde se guarda lo marcado (el panel hoy es estático, sin persistencia); si la gamificación también llega a la hermana en la versión publicada.

## Brand Commitments

- Nombre: Okaeri (おかえり). Voz de instructor: llana, directa, sin relleno (R7).
- Reglas de diseño vigentes y su historia: `sistema/decisiones/decision_system-html.md`.

## Evidence on Hand

- Contenido real: apuntes y prácticas en `fundamentos/`, ya embebidos en `system.html` con sus diagramas SVG/PNG.
- No hay ilustraciones, personajes ni mascota propios todavía: no se inventan como si existieran.

## Product Principles

1. El avance que se muestra es verdadero: «lograda» exige pasar la evaluación.
2. Premiar la vuelta, nunca castigar la ausencia: nada de rachas que se rompen ni avisos de abandono.
3. Un carril, un foco.
4. Estudiar primero: la aventura no puede estorbar la lectura de un apunte ni la práctica con el instrumento en la mano.

## Accessibility & Inclusion

Lectura larga en pantalla: el texto de los apuntes debe cumplir contraste AA, también cuando el lector lleva la temática. Uso con el instrumento en la mano: objetivos de clic amplios y legibles a distancia de brazo.
