---
name: escribir-practica
description: Escribir o corregir una práctica de Okaeri — el archivo que se usa con la guitarra o la voz lista, con los 3 niveles del día. Usar al convertir una tarea del profesor o una sección del temario en un ejercicio, o al corregir una práctica existente.
---

# Escribir una práctica

Las reglas de contenido están en `fundamentos/AGENTS.md` (F1-F12). Este archivo solo da los pasos.

## Pasos

1. **Leer antes:** el apunte que la respalda (si hace falta y no existe, escribirlo primero con `escribir-apunte`), la tarea exacta del profesor o la sección del temario, y `sistema/perfil/yo_musica.md` si el ejercicio depende del nivel del usuario.
2. **Ubicación y nombre** (F1): `fundamentos/<carril>/claseNN/claseNN_practica_<tema>.md` si nace de una clase; `fundamentos/<carril>/base/practica_N.N_<tema>.md` si nace del mapa.
3. **Copiar `plantilla.md`** (en esta carpeta) y llenarla sección por sección. Las marcadas como opcionales se borran si no aplican; las demás son obligatorias (F4).
4. **Las imágenes** (F6, F16): una por versión, con su nombre y su indicación dentro; muestran lo que se practica, nunca lo que debe salir de memoria. Se generan con `crear-diagrama`.
5. **Los 3 niveles** (F5, F16): cifras exactas en cada fila; la suma de "Cuánto" coincide con los minutos del título; cada nivel incluye al anterior; cada fila nombra su versión o su afinación; una nota por nivel, de dos líneas como máximo.
6. **Índice:** agregar o actualizar la fila en `fundamentos/00_indice.md`.
7. **Revisar antes de cerrar:**
   - [ ] Existen todas las secciones obligatorias (el guardián lo comprueba al guardar).
   - [ ] Cada referencia interna ("ver Afinación 1") apunta a algo que existe en el archivo.
   - [ ] Ningún término sin definir (R6) ni frase de efecto (R7).
   - [ ] "Hasta cuándo" da un criterio o una fecha; "Qué sigue" nombra el paso siguiente del mapa o de la academia.
8. **Pasar el texto por `agatha:redaccion-humana`** (cambia el estilo, no el contenido): quita exageración, analogías de relleno, «no es X, es Y» y rayas. Va antes del revisor, para que este lea el texto final.
9. **Delegar la revisión** al revisor (`revisor-okaeri`) y corregir lo que confirme.
10. **Panel y publicación.** Con la práctica ya revisada: pasarla al panel con `node sistema/herramientas/panel-practica.mjs <ruta .md> <clave> --write` (sin `--write` solo muestra el HTML; si la clave es nueva la crea con el apunte del frontmatter y la agrega a mano al `recorrido`; deja una copia previa de `system.html` en la carpeta temporal), y agregar a mano su apunte y su tema en `recorrido`, dentro de `system.html` (`practicasData` ya lo hace la herramienta; reglas en `sistema/decisiones/decision_system-html.md`, sección «Recorrido y prácticas», y diseño en `DESIGN.md`; si la práctica no tiene apunte, `"apuntes": []` y `"grupo": "cN"` con su clase, y el grupo en `gruposGuitarra`/`gruposCanto` si falta, para que salga en la Guía) y publicar con `node sistema/herramientas/publicar-panel.mjs`. En la versión publicada la práctica va sin estado ni fecha de la academia (`only-personal`). En el HTML de la práctica, cada imagen de «Cómo se hace» va como `<figure data-ref="V1">` (V2, V3…) y la Afinación del instructor como `<ol class="afinacion">`, con `data-ref="A1"` en la imagen de una afinación si la tiene: así la pestaña Practicar pone cada imagen junto a su paso (reglas en `decision_system-html.md`, «Práctica en pestañas»). Todas las prácticas se leen en pestañas, con la pestaña Libre y su modo foco (decisión «Práctica libre y modo foco»), así que no hay lista que actualizar: basta con que la práctica siga F16 y con la convención `data-ref`.
