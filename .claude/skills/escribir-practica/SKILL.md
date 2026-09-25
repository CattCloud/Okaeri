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
4. **El gráfico** (F6): muestra lo que se practica, nunca lo que debe salir de memoria. Se genera con `crear-diagrama`.
5. **Los 3 niveles** (F5): cifras exactas en cada fila; la suma de "Cuánto" coincide con los minutos del título; cada nivel incluye al anterior.
6. **Índice:** agregar o actualizar la fila en `fundamentos/00_indice.md`.
7. **Revisar antes de cerrar:**
   - [ ] Existen todas las secciones obligatorias (el guardián lo comprueba al guardar).
   - [ ] Cada referencia interna ("ver Afinación 1") apunta a algo que existe en el archivo.
   - [ ] Ningún término sin definir (R6) ni frase de efecto (R7).
   - [ ] "Hasta cuándo" da un criterio o una fecha; "Qué sigue" nombra el paso siguiente del mapa o de la academia.
8. **Delegar la revisión** al revisor (`revisor-okaeri`) y corregir lo que confirme.
