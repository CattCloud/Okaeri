# Decisión: acordes por recall (drill tipo Anki)

> **Estado:** decidida (emergió del uso real en la Sesión 1 de piano). **Fecha:** 2026-06. **Vigente para guitarra** (2026-08-28): cambia el diagrama, no el método.

## La decisión
Los acordes (sus formas y los cambios entre ellos) se entrenan con un **drill de recall tipo Anki**: una tarjeta muestra el **nombre del acorde** (cifrado), el usuario **recuerda la forma y la toca** en la guitarra, y luego voltea para **verificar**. La herramienta es **Anki** —reusada de la constelación (ya se usa en Oráculo), **footprint nuevo = 0**.

## Por qué (es anti-muleta puro)
- Ver **"Fa"** y tener que producir la forma de memoria es **recall activo del cifrado** — lo opuesto a la muleta (que te da las teclas y solo reaccionas). Construye comprensión y memoria, que es el corazón del sistema.
- La **impredecibilidad** del orden fuerza el **reconocimiento real**: no sabes cuál sigue, debes estar listo y tocarlo. Eso es exactamente la habilidad de la lectura por cifrado que la ruta busca (M1-M2 del temario: los 5 acordes abiertos y los cambios entre ellos).
- La idea la propuso el propio usuario — señal de que el método encaja con cómo aprende.

## La regla de la tarjeta (no negociable)
- **Frente = el NOMBRE del acorde** (cifrado): "Do", "Fa", "Lam".
- **Reverso = el diagrama del acorde** (se reusan los diagramas de `fundamentos/`) + las notas, **solo para autoverificar** después de intentarlo.
- **Nunca al revés.** Si el frente muestra las teclas a apretar, deja de ser recall y se vuelve copiar (muleta). Ver la forma se permite solo en la fase de aprender un acorde nuevo.

## Cómo se usa (dos modos en Anki)
1. **Repaso espaciado** (modo normal de Anki): para que las formas se queden **de por vida**.
2. **Custom Study / mazo filtrado + Auto Advance**: sesión **cronometrada, barajada y solo con los acordes elegidos** — para entrenar la **fluidez de los cambios**.

## Calibración de velocidad (lento es rápido)
El cronómetro arranca **generoso** y se acorta **solo cuando las formas ya salen limpias**. La impredecibilidad entra desde el día 1; la presión de velocidad, después. Apurar antes de que salga limpio graba cambios sucios (error 1.4 de la checklist).

## Evolución futura (declarada, NO ahora)
Más adelante, si el usuario quiere **auto-chequeo**, se evaluará una **app que valide por MIDI** lo que toca (muestra el nombre, tocas, te dice si acertaste, avanza). Queda como **evolución**, no se construye en esta etapa: Anki + autoverificación honesta es suficiente para empezar y mantiene el footprint mínimo. (Misma lógica de minimalismo que el resto del sistema.)

## Implicación para el sistema
- La IA **arma el mazo** (con los diagramas de `fundamentos/`); Anki **ejecuta**; el markdown sigue siendo la **fuente de verdad** (qué acordes se dominan se refleja en el repertorio y la práctica).
- Mazo inicial (era piano): Do, Fa, Sol, Lam — archivado en `_archivo/piano/`. **Mazo de guitarra: Mim, Lam, Re, Sol, Do** (M1), se construye cuando M1 arranca. Crece con el repertorio.
- Rol operativo en `sistema/herramientas/config_herramientas.md`.
