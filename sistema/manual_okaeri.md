# 📘 Manual de Okaeri — el porqué

> **Qué es este archivo:** la filosofía del sistema, es decir, por qué es como es. **No contiene reglas operativas:** esas viven en `AGENTS.md` (R1-R12), en las reglas de cada carpeta y en los procedimientos de `.claude/skills/`. Aquí se citan por su número. Diseño original (era piano, 2026-06): `_archivo/diseno_original/okaeri-base.md`.

---

## 1. Principio rector

> **Okaeri existe para que el usuario aprenda música de verdad —comprendiéndola y reteniéndola— al servicio de la expresión, no de la ejecución mecánica. No reemplaza al instrumento ni al profesor: estructura el aprendizaje para que la base dormida despierte y no se abandone.**

Toda decisión se evalúa contra **tres capas**:

1. **Mecánica:** ¿construye la habilidad física real?
2. **Comprensión:** ¿el usuario entiende *por qué*, no solo *qué* apretar?
3. **Expresión y memoria:** ¿queda retenido y al servicio de lo que la canción dice, o se evapora?

Si una actividad no aporta a ninguna de las tres, no entra.

**El nombre.** El obstáculo histórico del usuario fue siempre *irse*: empezar y abandonar. *Okaeri* (おかえり) es lo que en japonés se le dice al que vuelve a casa: "bienvenido de vuelta". El sistema no ataca el patrón con una orden; lo ataca quitándole el costo al regreso (R3). Viene de Toni, el lorito que tenía las alas intactas y aun así volvía al hombro (`_archivo/diseno_original/okaeri-base.md` §0).

---

## 2. Por qué anti-muleta (R2)

**La muleta** es la pista que cae (Guitar Hero, Yousician en modo juego, Synthesia): dice qué apretar *justo cuando* hay que apretarlo. El cerebro se apoya en ella y nunca construye el conocimiento por debajo. En palabras del usuario: *"Tocaba la canción esa vez pero luego no quedaba nada."* Entrena reacción, no música.

Por eso:

- **"Aprendida" tiene un solo criterio:** sin nada delante, de memoria, sola. Todo lo demás es un paso intermedio (`repertorio/AGENTS.md`, RP1).
- **La memoria se construye por capas.** En guitarra: muscular (dedos), visual (la forma en el mástil), auditiva (cómo suena) y estructural (la progresión). En canto: la letra recitada, la melodía por frases, la estructura de la canción y dónde se respira. Una capa sola es frágil; varias se sostienen entre sí.
- **Apunte y práctica van separados** (F2): tener la teoría a la vista mientras se toca invita a leer en vez de recordar.
- **El capo no es muleta:** los dedos aprenden las formas reales; solo cambia dónde suena. Es práctica estándar en toda banda.
- **Medir no es muleta:** un afinador o una app de rango usados sobre una grabación o en una medición puntual verifican; lo vetado es cantar siguiendo una línea en la pantalla.

---

## 3. Por qué el temario manda (R4)

El piano falló, entre otras cosas, porque **el usuario no sabía dónde estaba**: la ruta era un plan construido sobre una canción, y terminar la canción no decía qué sabía hacer. De ahí el modelo, heredado de Cloud en TESLA:

| Pieza | Rol | Por qué así |
|---|---|---|
| **Temarios** (`contexto/plan_estudio/`) | La columna: mapas de competencias ordenados por dependencia real | Dicen dónde estás y cuánto falta. Sobreviven a cualquier canción |
| **Academias** (guitarra martes · canto jueves) | Cubren ~80% de la técnica en vivo, ven y oyen, ponen la presentación de fin de nivel | Lo que sostiene al usuario es una persona mirándolo (perfil). La presentación reemplaza a la vieja fecha dura: misma fuerza, pero es un destino y no una deuda |
| **Okaeri** | Consolida entre clase y clase; lidera lo que la academia no toca: repertorio worship, memoria, cantar y tocar a la vez, la banda | Ninguna academia mide la memoria ni conoce la banda de su iglesia |

**Las canciones son vehículos.** Si se borra la canción, el temario sigue en pie; si una canción no mueve al usuario, entra otra que ejercite lo mismo.

### Las 7 dimensiones

| Capa | Dimensiones | En los mapas |
|---|---|---|
| **Mecánica** | Técnica · Lectura (cifrado; TAB en guitarra M8; pentagrama fuera del nivel base) · Ritmo | Guitarra M1-M3, M6-M8 · canto M1-M3 |
| **Comprensión** | Teoría aplicada · Oído | Capa transversal + guitarra M5 · canto M5 |
| **Expresión** | Repertorio (con memoria) · Interpretación | M4 de ambos mapas, guitarra M9, canto M7-M8 + capa transversal |

La interpretación atraviesa todo desde el primer módulo: un acorde solo ya se puede tocar con intención.

---

## 4. Por qué bloques y no ping-pong (R5)

El protocolo viejo era *explico → tocas → me respondes → sigo*. Exigía soltar la guitarra, escribir, esperar y volver por cada movimiento: no era practicar, era chatear con la guitarra al lado. El usuario lo identificó como una de las causas del fallo del piano.

Un bloque completo trae resuelto por adelantado lo que antes se preguntaba: qué hacer, cuánto, cómo suena bien y qué hacer si sale mal (skill `sesion`). El silencio pasa a significar que está tocando. Los 3 niveles del día (F5) existen porque el ánimo varía: un día sin ganas también cumple si hace el mínimo.

---

## 5. Pedagogía propia de la música

- **Práctica deliberada, no repetición mecánica.** Repetir en piloto automático fija los errores.
- **Trocear (chunking).** Fragmentos pequeños: dominar cada uno y después coserlos. Nunca de corrido desde el primer día.
- **Partes separadas → juntas.** En guitarra: la forma de la mano izquierda hasta que salga sola; el patrón de la derecha sobre un solo acorde; recién después, juntas. En canto: la letra, luego la melodía, luego juntas. En canto M7 son tres partes (manos y voz), y no se juntan hasta que cada una salga sola.
- **Lento es rápido.** Precisión antes que velocidad; la velocidad llega sola.
- **Memoria por comprensión.** Entender por qué la progresión va así es lo que hace que una pieza se quede.
- **Vocabulario donde aparece, nunca antes** (R6). Un glosario previo es el muro de material que siempre derrotó al usuario.

---

## 6. Lo que Okaeri no hace — y por qué

| Veto | Por qué | Regla |
|---|---|---|
| Muleta (pista que cae) | Entrena reacción, no música | R2 |
| Reemplazar al instrumento | Se aprende tocando y cantando, no leyendo | F2 |
| Reemplazar al profesor en lo físico | El agente no ve las manos ni oye la voz | R8 |
| Composición · virtuosismo · conservatorio | El usuario es intérprete; busca expresión, no destreza | — |
| Imponer repertorio ajeno | El material es lo que toca la banda de su iglesia y lo que lo mueve | RP6 |
| Gamificar | La motivación por puntos es frágil; solo el registro honesto | RG4 |
| Relleno (historia, biografías, marketing) | Solo entra lo que cambie algo que va a tocar o cantar | R7 |
| Ping-pong | Rompe la práctica | R5 |
| Varias canciones del mapa a la vez | Saltar de canción está en su zona de riesgo | R9 |
| Fecha dura | Medía una deuda futura; la reemplaza la presentación de la academia | — |

---

## 7. Filosofía de construcción

- **El método manda; la herramienta se elige después.** No se amolda el aprendizaje a una app.
- **Progresión de fricción:** barrera baja al inicio. *Un método mejor que se abandona pierde contra uno peor que se mantiene.*
- **Avanzar > pulir.**
- **Construir con el dolor real, no antes** (R11): las notas nacen con la sesión; el mapa se extiende cuando la banda o el siguiente nivel lo pidan.
- **Presentar antes de construir** (R10): el usuario aprueba los cambios estructurales.
- **Una regla, un lugar** (R12): las reglas copiadas en varios archivos terminan contradiciéndose, y el agente obedece la copia que lea primero (`sistema/decisiones/decision_arquitectura_reglas.md`).

---

## 8. La salvaguarda contra el abandono

El dato más importante del sistema: **sin estructura y sin guía clara, el usuario se pierde entre opciones y abandona, incluso amando el dominio.** Le pasó con el inglés, con Yousician, con la guitarra hace años, con el canto y con el piano en 2026.

Lo que lo cura ahora, diseñado desde el diagnóstico del piano:

1. **Temarios que dicen dónde está.** Antes no los había.
2. **Un objetivo que jala, no una deuda que empuja:** la banda de la iglesia y las presentaciones de fin de nivel.
3. **Las academias desde el primer día:** dinero pagado, grupo pequeño, una noche fija por carril. Accountability real, no gamificación.
4. **Un piso de presencia por carril** (R9) y la técnica de los 5 minutos: empezar es el trabajo; el tiempo se estira solo.
5. **Registro honesto**, con chequeo semanal y no diario (RG2).
6. **Okaeri.** Si se va, se le recibe y se retoma donde quedó, sin cobrar (R3).

> Esta es la diferencia entre que esta vez funcione o sea otro intento archivado.
