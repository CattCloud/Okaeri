---
name: escribir-practica
description: Escribir o corregir una práctica de Okaeri — el archivo que se usa con la guitarra o la voz lista, libre, sin niveles ni minutos por día. Usar al convertir una tarea del profesor o una sección del temario en un ejercicio, o al corregir una práctica existente.
---

# Escribir una práctica

Las reglas de contenido están en `fundamentos/AGENTS.md` (F1-F12). Este archivo solo da los pasos.

## Pasos

1. **Leer antes:** el apunte que la respalda (si hace falta y no existe, escribirlo primero con `escribir-apunte`), la tarea exacta del profesor o la sección del temario, y `sistema/perfil/yo_musica.md` si el ejercicio depende del nivel del usuario.
2. **Ubicación y nombre** (F1): `fundamentos/<carril>/claseNN/claseNN_practica_<tema>.md` si nace de una clase; `fundamentos/<carril>/base/practica_N.N_<tema>.md` si nace del mapa.
3. **Copiar `plantilla.md`** (en esta carpeta) y llenarla sección por sección. Las marcadas como opcionales se borran si no aplican; las demás son obligatorias (F4).
4. **Las imágenes** (F6, F16): una por versión, con su nombre y su indicación dentro; muestran lo que se practica, nunca lo que debe salir de memoria. Se generan con `crear-diagrama`.
5. **Sin niveles** (F5, F16): la práctica es libre, sin cronómetro ni minutos o repeticiones por día. Lo que define cada versión (tempo, cuerda, trastes, dedos) va en la línea de «Cómo se hace» o en su tabla «Versión · Tempo · Dónde»; las condiciones para subir de tempo o de versión, en «Hasta cuándo».
6. **Índice:** agregar o actualizar la fila en `fundamentos/00_indice.md`.
7. **Revisar antes de cerrar:**
   - [ ] Existen todas las secciones obligatorias (el guardián lo comprueba al guardar).
   - [ ] Cada referencia interna ("ver Afinación 1") apunta a algo que existe en el archivo.
   - [ ] Ningún término sin definir (R6) ni frase de efecto (R7).
   - [ ] "Hasta cuándo" da un criterio o una fecha; "Qué sigue" nombra el paso siguiente del mapa o de la academia.
8. **Pasar el texto por `agatha:redaccion-humana`** (cambia el estilo, no el contenido): quita exageración, analogías de relleno, «no es X, es Y» y rayas. Va antes del revisor, para que este lea el texto final.
9. **Delegar la revisión** al revisor (`revisor-okaeri`) y corregir lo que confirme.
10. **Web.** Con la práctica ya revisada: su frontmatter lleva `tipo: practica`, `modulo: mN` y `apunte:` con el enlace al apunte del que cuelga (si todavía no hay apunte, `apunte: "pendiente — …"` y entra suelta en su módulo, con su propio título, como la de arpegio); si cita varios, cuelga del último de la ruta. Regenerar la web con `node build.cjs` desde `.impeccable/prototipo/` y leer los avisos. La web muestra la práctica entera, tal como está escrita, bajo el botón «Práctica» de su apunte. Las pestañas Libre, Practicar, Entender, Si falla y Avance, el modo foco y la convención `data-ref` eran del panel anterior y quedaron archivadas con él (`_archivo/panel-system-html/`); F16 sigue mandando sobre cómo se escribe la práctica. No se publica.
