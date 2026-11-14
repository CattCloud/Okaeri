# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **El usuario (único).** Aprende guitarra clásica en una academia (martes), con destino la banda de su iglesia. Abre la web en tres momentos: antes de practicar (ubicar qué toca y abrir el apunte o la práctica), con el instrumento en la mano (la web abierta al lado mientras toca) y leyendo con calma (estudiar un apunte completo). El carril de canto se dejó el 2026-11-06 y su hermana, que lo estudiaba con la versión publicada, ya no la usa: la web no se publica desde el 2026-11-11.

## Product Purpose

La web de Okaeri es la cara del sistema: una página local, autocontenida, para navegar los apuntes y prácticas escritos de guitarra sin abrir el repositorio. No reemplaza los `.md`: los lee y los muestra. Éxito: que abrirla y usarla se sienta como una aventura y no como una página estática, sin perder claridad para estudiar.

## Positioning

El avance que muestra es real y medible: un tema solo cuenta como «logrado» cuando pasa su evaluación del temario (R4), no porque haya un apunte escrito. Okaeri recibe al usuario cuando vuelve (おかえり, «bienvenido de vuelta») y nunca le reprocha una ausencia (R3).

## Operating Context

- Archivo único `.impeccable/prototipo/index.html` (versionado, ya generado), que se abre con doble clic, sin servidor. Lo arma `node build.cjs` (Node 22) desde esa carpeta, leyendo los `.md` de `fundamentos/guitarra/` (cada uno dice su módulo en `modulo:`), el temario y `practica/00_indice.md`; se regenera dentro de la tarea que cierra una clase o escribe un apunte o práctica. No hay datos que editar a mano.
- No se publica en internet (decisión del 2026-11-11). El panel anterior, `system.html`, y sus scripts quedaron archivados en `_archivo/panel-system-html/`.
- Un carril activo, guitarra, con su temario (`contexto/plan_estudio/temario_guitarra.md`) y sus apuntes y prácticas por clase (`fundamentos/guitarra/claseNN/`). El carril de canto se dejó el 2026-11-06 y se archivó el 2026-11-12 en `_archivo/canto/`.

## Capabilities and Constraints

- **Vistas actuales:** hero a pantalla completa con paisaje por capas (de día; de noche con el tema oscuro) y el botón del tema arriba a la derecha; franja de módulos (M1 a M9, el en curso ya elegido); por módulo, las dos escenas animadas (fogata y muelle) con sus apuntes al lado; la práctica de cada apunte se abre en su propia vista a pantalla completa, sin escena (botón «Práctica ›» del apunte o el drawer): las versiones en fichas de 1, 2 o 3 columnas, cada una con su tempo, y tema oscuro o claro según Windows (desde el 2026-11-13 también en la hoja del apunte, el visor y el hero; se cambia con el botón del drawer o el de esa vista); drawer con el botón del tema, la ruta del módulo, los otros módulos, buscador y «Clases en orden».
- **Un módulo a la vez.** Los que no tienen apuntes escritos dicen «Sin apuntes aún».
- **Sin emojis** en la interfaz: iconos e ilustraciones propias. Los emojis dentro de un apunte se muestran con su icono equivalente.
- **Solo contenido real:** un módulo sin apuntes lo dice, y un apunte provisional lo dice en su línea de metadatos; nada se inventa para llenar.
- **Pantallas:** escritorio de 18" como principal; debe funcionar bien en celular.
- **Sonido:** pospuesto (2026-11-13): se quitó el botón y su código; las pistas `audio/celta.mp3` y `audio/pantano.mp3` aún no existen.
- **Gamificación (futura, no se construye ahora; el diseño la deja prevista):** una tarjeta de personaje a pantalla completa («mi yo guitarrista»), con sus stats al lado. Cada stat es un criterio que el músico debe desarrollar (p. ej. dedos rápidos, velocidad de cambio de acordes). Al marcar un ejercicio como realizado desde la interfaz, sube un punto en el criterio correspondiente.
- **Decisiones abiertas:** la lista de criterios y qué ejercicio alimenta cada uno; dónde se guarda lo marcado (la web hoy es estática, sin persistencia).

## Brand Commitments

- Nombre: Okaeri (おかえり). Voz de instructor: llana, directa, sin relleno (R7).
- Reglas de diseño vigentes: `DESIGN.md`. Historia de las decisiones del panel anterior y su reemplazo: `sistema/decisiones/decision_system-html.md`.

## Evidence on Hand

- Contenido real: apuntes y prácticas en `fundamentos/guitarra/`, con sus diagramas PNG. Hoy tienen apuntes M1 (6 apuntes, 2 prácticas), M3, M6 y M8.
- Ilustración propia: el hero y las dos escenas son pixel art generado con Gemini y convertido a la cuadrícula del proyecto, con sus personajes (Erick, Tony, el gato guitarrista, la nota con moño, la gata soprano) y los koi; cada raster lleva su procedencia incrustada.

## Product Principles

1. El avance que se muestra es verdadero: «lograda» exige pasar la evaluación.
2. Premiar la vuelta, nunca castigar la ausencia: nada de rachas que se rompen ni avisos de abandono.
3. Un módulo, un foco.
4. Estudiar primero: la aventura no puede estorbar la lectura de un apunte ni la práctica con el instrumento en la mano.

## Accessibility & Inclusion

Lectura larga en pantalla: el texto de los apuntes debe cumplir contraste AA, también cuando el lector lleva la temática. Uso con el instrumento en la mano: objetivos de clic amplios y legibles a distancia de brazo.
