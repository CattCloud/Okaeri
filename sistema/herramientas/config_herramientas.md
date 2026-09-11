# 🛠️ Configuración de herramientas — Rol operativo

> **Propósito:** con qué se ejecuta cada cosa y cuál es su rol. Versión corta de `contexto/okaeri-herramientas.md` (era piano; el modelo de 3 capas sigue vigente).
> **Principio:** la herramienta se elige *después* del método. **Anti-muleta:** ninguna app en modo "pista que cae".
> **Actualizado:** 2026-08-28 (guitarra).

---

## El modelo de 3 capas

| Capa | Qué es | Cuándo |
|---|---|---|
| **1. La IA** (Claude Code) | El cerebro: mantiene el mapa, escribe apuntes y ejercicios, genera diagramas, dirige la semana | Default para lo cognitivo |
| **2. Markdown** | El sustrato: temario, estado, registro, repertorio. Fuente única de verdad | Default para lo que se guarda |
| **3. Instrumento / app / humano** | Lo que 1 y 2 no pueden: sonar, ver las manos, medir el pulso | Solo si es insustituible |

---

## Footprint

| Herramienta | Rol | ¿Nueva? | Regla clave |
|---|---|---|---|
| **Guitarra clásica (nylon)** | El instrumento. Todo el aprendizaje real ocurre aquí | No (ya se tiene) | Se afina **cada vez** antes de tocar (`fundamentos/_consulta-instrumento.md`) |
| **Capo** | Tocar en el tono de la grabación con formas abiertas, sin cejilla | **Sí — por comprar** | No es muleta: los dedos aprenden las formas reales. Equivale al Transpose del Casio |
| **Afinador** (app o pinza) | Afinar | App gratuita | Un minuto al inicio de cada sesión |
| **Metrónomo** (app) | Pulso | App gratuita | Se calibra y se suelta. No vivir pegado |
| **Academia** (martes 8-10 pm, grupo de 4) | Técnica física en vivo, corrección del cuerpo, presentación de fin de nivel | **Sí** — desde 2026-09-01 | Cubre ~80% de la técnica. **No mueve el marcador del mapa.** Protocolo en `sistema/prompts/integracion_academia_sistema.md` |
| **Anki — drill de acordes** | Recall: frente = nombre, tú formas, reverso verifica | No (reusada) | Mazo por **reconstruir con formas de guitarra** en M1. Método en `sistema/decisiones/decision_acordes_recall_anki.md` |
| **Anki — mazo de oído** | Mayor/menor, intervalos | No (ya existe) | `sistema/herramientas/anki-oido/`. Es de música, sirve igual para guitarra |
| **YouTube / Spotify** | La grabación de cada canción; referencia de interpretación | No | Tocar *sobre* la grabación no es muleta: el oído manda, no una pista que cae |
| **Cifrados públicos** (Cifra Club, La Cuerda, Ultimate Guitar) | Leer el cifrado de una canción | No | Varían entre sí: se fija **uno** por canción en su ficha. Se usan mientras se aprende; el test es sin ellos |
| **IA (Claude Code)** | Mantiene el mapa · escribe apuntes y ejercicios · **genera los diagramas** (SVG) · arma la semana · registra | No (stack) | Límite honesto: no ve las manos ni oye. Eso es de la academia |
| **Profesor** | Lo físico | El ancla humana | Si corrige el cuerpo, eso manda sobre cualquier apunte |

**Fuera del foco:** Casio CT-X800 (era piano) · Yousician (pagado; si algún día se usa para guitarra, **solo modo sheet**) · Oído Perfecto (reemplazada por Anki en 2026-07).

---

## Cómo se usa cada una

### Anki — drill de acordes por recall
- **Frente = el nombre** ("Sol", "Mim"). Recuerdas la forma y **la tocas en la guitarra**. **Reverso = el diagrama** (generado por el agente), solo para verificar. Nunca al revés.
- **Dos modos:** (1) repaso espaciado normal, para que las formas se queden; (2) **mazo filtrado + avance automático** (barajado, cronometrado, sin reprogramar) para la fluidez de cambios — M2.
- **Cronómetro generoso primero.** Se acorta solo cuando las formas salen limpias.
- **Paso a paso del mazo filtrado (probado 2026-07, sigue igual):** *Herramientas → Crear mazo filtrado* · búsqueda `deck:Acordes` · **desmarcar "Reprogramar las tarjetas según mis respuestas"** · orden aleatorio · construir. En estudio: *⋮ Más → Avance automático* (3 s pregunta / 1 s respuesta; subir si queda corto). Al terminar: **R** (Reconstruir) para otra vuelta.

### Anki — oído
- `sistema/herramientas/anki-oido/README.md`. Submazo 1 (mayor/menor) desde M1; submazo 2 (intervalos) desde M5. 5 min, responder en voz alta **antes** de destapar.

### El capo
- Se pone justo **detrás** del traste (pegado a la barrita, lado de la pala), recto, con presión suficiente para que ninguna cuerda zumbe. Se explica en M4 (4.1).

### Los diagramas (los genera la IA)
- SVG por código, reglas en `fundamentos/_estilo-visual.md`. Los diagramas de **acorde** (lo que se produce de memoria) van en el **apunte** y en el **reverso** de Anki — nunca en la práctica. La **práctica** lleva solo el gráfico de *qué practicar* (TAB del ejercicio, figuras rítmicas).

---

## Reglas

1. **Anti-muleta:** ninguna app en modo pista que cae. La práctica nunca trae el diagrama de lo que debe salir de memoria.
2. **El temario manda; la academia alimenta; la IA sostiene.**
3. **Markdown es la fuente de verdad.** La academia enseña, las apps ejecutan, el `.md` registra.

> **La pieza que de verdad importa no es ninguna app.** Es (1) el mapa bien armado, (2) el martes con el profesor, y (3) el hábito mínimo de 15 minutos.
