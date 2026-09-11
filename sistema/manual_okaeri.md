# 📘 Manual de Okaeri

> **Propósito:** guía de operación del sistema. Define cómo opera Okaeri, qué filosofía sigue su construcción, y qué queda explícitamente fuera.
> **Fuente de verdad del QUÉ y el PORQUÉ:** `contexto/okaeri-base.md` (escrito en la era piano; principios vigentes). **El rediseño de 2026-08-28** está en `sistema/decisiones/decision_guitarra_academia_primero.md` y `decision_temario_mapa_cancion_vehiculo.md`.

---

## 1. Principio rector

> **Okaeri existe para que el usuario aprenda música de verdad —comprendiéndola y reteniéndola— al servicio de la expresión, no de la ejecución mecánica. No reemplaza al instrumento ni al profesor: estructura el aprendizaje para que la base dormida despierte y no se abandone.**

Toda decisión se evalúa contra las **tres capas**:

1. **Mecánica** — ¿construye la habilidad física real?
2. **Comprensión** — ¿el usuario entiende *por qué*, no solo *qué* apretar?
3. **Expresión y memoria** — ¿queda retenido y al servicio del sentimiento, o se evapora?

> Si una actividad no aporta a alguna de las tres, no entra.

El nombre describe la función. El obstáculo histórico del usuario fue siempre *irse*: empezar y abandonar. *Okaeri* (おかえり) es lo que se le dice al que vuelve: **"bienvenido de vuelta"**. No ataca el patrón con una orden: lo ataca **quitándole el costo al regreso**. Regla de tono: **nunca se reprocha una ausencia; se registra la verdad y se recibe.** Origen del nombre —y de Toni— en `contexto/okaeri-base.md` §0.

---

## 2. El principio anti-muleta (el corazón del sistema)

**Qué es la muleta:** la pista que cae (Guitar Hero, Yousician en modo juego, Synthesia) que dice qué apretar *justo cuando* hay que apretarlo. El cerebro se apoya en ella y nunca construye el conocimiento por debajo.

**Por qué falla:** no construye comprensión ni memoria. *"Tocaba la canción esa vez pero luego no quedaba nada."*

**La regla de "aprendido":**
> **Una canción no está aprendida hasta que se puede tocar SIN cifrado, DE MEMORIA, SOLA.**

Tres estados por pieza: `APRENDIENDO` → `TOCO-CON-AYUDA` → `TOCO-DE-MEMORIA-SOLO`. Solo el tercero cuenta.

**Cómo se aplica:**
- **Teoría y práctica: archivos distintos, lado a lado en `fundamentos/mN/`.** El apunte (`claseNN_<tema>`) se lee lejos de la guitarra; la práctica (`claseNN_practica_<tema>`) se usa con la guitarra. La práctica trae el gráfico de **qué practicar**, pero **nunca el diagrama de lo que hay que producir de memoria** (formas del drill o de la canción — solo en el apunte y en Anki). Es la regla del drill (frente = nombre, reverso = verificación) hecha archivo.
- La memoria se construye **por capas**: muscular (dedos), visual (la forma en el mástil), auditiva (cómo suena), estructural (la progresión). La muscular sola es frágil.
- **El capo no es muleta.** Los dedos aprenden las formas reales; solo cambia dónde suena. Es práctica estándar en toda banda.
- Los diagramas son **mapas estáticos para entender**, nunca secuencia (`fundamentos/_estilo-visual.md`).
- Cualquier sugerencia que induzca dependencia se descarta.

---

## 3. El modelo: temario · academia · Okaeri

| Pieza | Rol |
|---|---|
| **Temario** (`contexto/plan_estudio/temario_guitarra.md`) | La columna. Un **mapa** de competencias ordenado por dependencia. Dice dónde estás. **Sobrevive a cualquier canción.** |
| **Academia** (martes, grupos de 4) | Cubre ~80% de la técnica en vivo. Ve las manos. Pone la **presentación de fin de nivel** — el objetivo visualizable que sustituye a la fecha dura. **No mueve el marcador del mapa.** |
| **Okaeri** | Consolida entre martes y martes. Lidera solo lo que la academia no toca: repertorio worship, memoria (M4), banda (M9), capa transversal. |

Protocolo completo: `sistema/prompts/integracion_academia_sistema.md`. Regla corta: **no te saltas, pero haces la tarea. La tarea va primero.**

### Las 7 dimensiones

| Capa | Dimensiones |
|---|---|
| **Mecánica** | Técnica · Lectura (cifrado; TAB en M8; pentagrama fuera del nivel base) · Ritmo |
| **Comprensión** | Teoría aplicada · Oído |
| **Expresión** | Repertorio (con memoria) · Interpretación |

La **interpretación atraviesa todo desde M1**. El **canto** es posterior y secuencial.

### Cómo se conduce una sesión — bloques, no ping-pong

El agente entrega **un bloque completo** y el usuario se va a tocar:

1. **Objetivo en lenguaje claro** — qué mejora y cómo lo va a notar (motivación, no jerga)
2. **Los 3 niveles del día** — 🔵 mínimo (sin ganas) / 🟢 natural / 🔥 motivado — cada uno con rutina **exacta**: qué, cuántas repeticiones, minutos por parte, metrónomo sí/no. Cada nivel incluye al anterior. "Pon cronómetro; cuando suena, paras"
3. Explicación corta (define-or-link)
4. El gráfico de qué practicar, si hay (SVG generado por el agente)
5. **Cómo se hace cada parte** (referencia, descrita una vez; los niveles prescriben cantidades)
6. **Cómo suena cuando está bien**
7. **Los 3 errores típicos y su arreglo** — por adelantado
8. Hasta cuándo / cuándo ya está, y qué sigue

Los ejercicios del profesor son **propuestas, no límites**: si hay una práctica mejor para el mismo objetivo, el agente la plantea con confianza ("Afinación del instructor"), sin desviarse.

**El silencio del usuario = está tocando.** No se le pregunta por cada movimiento. Se pregunta solo al cerrar un módulo, tras el martes, o cuando él diga que algo no sale. Esto corrige el protocolo viejo (*explico → tocas → confirmas → sigo*), que el usuario identificó como causa del fallo.

**Sección ≠ sesión.** Mínimo **15 min, 3-4 veces por semana**. Una sesión puede partirse en días; el estado la guarda.

### Pedagogía propia de la música
- **Práctica deliberada, no repetición mecánica.** Repetir en piloto automático fosiliza errores.
- **Chunking.** Fragmentos, dominar cada uno, coser. Nunca de corrido.
- **Manos separadas → juntas** (en guitarra: la forma de la izquierda hasta que salga sola; el patrón de la derecha sobre un solo acorde; recién entonces juntas).
- **Lento es rápido.** Precisión antes que velocidad.
- **Memoria por comprensión.** Entender la progresión es lo que hace que una pieza se quede.
- **Vocabulario donde aparece, nunca antes.** Un concepto se define en el módulo que lo pide. Las notas nacen con la sesión, no en bloque.

---

## 4. Lo que Okaeri NO hace

| Veto | Por qué |
|---|---|
| ❌ Muleta (pista que cae) | Entrena reacción, no música. |
| ❌ Reemplazar al instrumento | Se aprende tocando. |
| ❌ Reemplazar al profesor en lo físico | El agente no ve las manos. Si el profesor corrige el cuerpo, eso manda. |
| ❌ Composición · virtuosismo · exámenes | Intérprete. Expresión, no destreza. |
| ❌ Imponer repertorio ajeno | El material es lo que la banda de su iglesia toca y lo que a él lo mueve. |
| ❌ Gamificar | Motivación frágil. Solo el registro honesto. |
| ❌ **Relleno** | Historia, marketing, biografías, teoría que no ilumina lo que toca. Solo lo que cambie algo que va a tocar. |
| ❌ **Ping-pong** | Preguntar tras cada movimiento rompe la práctica. |
| ❌ Canto en paralelo · varias canciones a la vez | Secuencial. Una canción hasta que salga de memoria. |
| ❌ Fecha dura | Murió con el rediseño. Lo que obliga ahora es la presentación de la academia. |

> ⚠️ **Cuidado con sobre-construir.** Nada de APIs, dashboards, módulos de canto, ni escribir 40 notas de golpe.

---

## 5. Filosofía de construcción (heredada de TESLA/Oráculo)

- **El método manda, la herramienta se elige después.**
- **El temario manda, la clase alimenta.** (Cloud en TESLA.)
- **Define-or-link, y nunca antes.** Jerga huérfana = bug del sistema.
- **Diagramas pedagógicos, no decorativos.** SVG por código.
- **Pragmatismo: avanzar > pulir.**
- **Construir con el dolor real, no antes.** Las notas nacen con la sesión; el mapa se extiende cuando la banda lo pida.
- **Progresión de fricción:** barrera baja al inicio. *Un método mejor que abandonas pierde contra uno peor que mantienes.*
- **Preguntas con alternativas concretas, y pocas.**
- **Lenguaje llano.** El usuario lo pidió: si no puede saber qué significa, no se dice sin explicar.
- **El usuario ajusta en vivo.** El `.md` es la única fuente de verdad.

---

## 6. La salvaguarda contra el abandono

El patrón (el dato más importante del sistema): **sin estructura y sin guía clara, el usuario se pierde entre opciones y abandona, incluso amando el dominio.** Le pasó en el inglés, en Yousician, en la guitarra (hace años), en el canto, y en el piano (2026).

Lo que lo cura ahora —diseñado desde el diagnóstico del fallo del piano:

1. **Un temario que dice dónde estás.** Antes no lo había.
2. **Un objetivo que jala, no una deuda que empuja.** La banda de la iglesia + la presentación de fin de nivel. La fecha dura del profesor medía el futuro; esto mide el presente.
3. **La academia desde el día uno.** Dinero pagado, grupo de 4, un martes fijo. Accountability real, no gamificación.
4. **Mínimo irreducible de 15 min, 3-4 veces por semana** + la técnica de los 5 minutos. El piso es de presencia, no de contenido.
5. **Registro honesto.** Cada sesión en `practica/`. El chequeo es semanal (¿hubo ≥3 sesiones?), no una alarma diaria.
6. **Okaeri.** Si se va, se le recibe. Se retoma donde quedó, sin cobrar.

> Esto es la diferencia entre que esta vez funcione o sea otro intento archivado.

---

> El detalle de cada dimensión vive en `contexto/okaeri-metodologia.md` (era piano, principios vigentes); el mapa en `contexto/plan_estudio/temario_guitarra.md`; el perfil en `sistema/perfil/yo_musica.md`.
