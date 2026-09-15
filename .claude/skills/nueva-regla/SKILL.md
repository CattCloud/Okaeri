---
name: nueva-regla
description: Registrar una regla nueva o una corrección del usuario sobre cómo debe trabajar Okaeri (formato, tono, contenido, flujo). Usar cuando el usuario dice "desde ahora", "siempre", "nunca", "no hagas eso", corrige cómo se escribió algo, o pide cambiar una convención.
---

# Registrar una regla nueva

Principio: una regla vive en **un solo lugar**, le llega al agente en el momento en que aplica y, si se puede medir, la comprueba el guardián (R12).

## 1. Ubicarla: seis preguntas, en orden (la primera que diga "sí" decide)

1. **¿Dice dónde va el usuario hoy?** → `sistema/estado/estado_actual.md`. No es una regla: es estado.
2. **¿Aplica en toda conversación, pase lo que pase?** → `AGENTS.md` (constitución). Tope de 12: si entra una, proponer al usuario cuál se fusiona o baja a otra pieza (R10).
3. **¿Solo importa al trabajar cierto tipo de archivo?** → las reglas de su carpeta: `fundamentos/AGENTS.md`, `repertorio/AGENTS.md` o `practica/AGENTS.md`.
4. **¿Es una secuencia de pasos para un momento concreto?** → el procedimiento de ese momento (`.claude/skills/<nombre>/SKILL.md`) o su plantilla. Si el momento no tiene procedimiento y ya ocurrió de verdad, crearlo (R11).
5. **¿Se puede comprobar con un sí o un no?** → además, agregarla a `.claude/hooks/reglas.json` (secciones obligatorias, frases prohibidas, campos obligatorios).
6. **¿Es el porqué de algo?** → `sistema/decisiones/` (con fecha y estado) o `sistema/manual_okaeri.md`.

## 2. Escribirla

- En imperativo y medible, con el porqué en una frase si no es obvio.
- Con su número (R13 no existe: la constitución tiene tope; en carpetas, el siguiente libre: F13, RP7, RG5).
- Si reemplaza a otra, se borra la vieja: nunca dos versiones.
- Si otro archivo necesita mencionarla, la cita por su número; no la copia.
- Si cambia la estructura, se presenta antes de ejecutarla (R10).

## 3. Aplicarla hacia atrás

1. Buscar con grep los archivos que la incumplen.
2. Corregirlos; si son muchos o hay duda, listarlos al usuario con una propuesta.
3. Si se tocó `reglas.json`, correr `node .claude/hooks/verificar.js --todo` y revisar los avisos.

## 4. Dejar constancia

- Una línea en `NOTAS.md` → "Decisiones resueltas": fecha, la regla en una frase y dónde vive.
- Nunca guardarla solo en la memoria del agente.
- Decirle al usuario, en una o dos líneas, dónde quedó y qué archivos se corrigieron.
