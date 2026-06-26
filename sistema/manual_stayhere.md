# 📘 Manual de StayHere

> **Propósito:** guía de operación del sistema. Define cómo opera StayHere, qué filosofía sigue su construcción, y qué queda explícitamente fuera. Equivalente al `manual_oraculo.md` de Oráculo, pero para el dominio música.
> **Fuente de verdad del QUÉ y el PORQUÉ:** `contexto/stayhere-base.md`.

---

## 1. Principio rector

> **StayHere existe para que el usuario aprenda música de verdad —comprendiéndola y reteniéndola— al servicio de la expresión, no de la ejecución mecánica. No reemplaza al instrumento ni al profesor: estructura el aprendizaje para que la base dormida despierte y no se abandone.**

Toda decisión del sistema se evalúa contra las **tres capas** que el aprendizaje debe cubrir (las tres que los intentos previos no cubrieron):

1. **Mecánica** — ¿construye la habilidad física real?
2. **Comprensión** — ¿el usuario entiende *por qué*, no solo *qué* apretar?
3. **Expresión y memoria** — ¿queda retenido y al servicio del sentimiento, o se evapora tras el momento?

> Si una actividad no aporta a alguna de las tres, no entra.

El nombre describe la función, no la adorna. El obstáculo histórico del usuario —en el inglés, en Yousician, en la guitarra, en el canto de la iglesia— fue siempre *irse*: empezar y abandonar. *StayHere* es, literalmente, una instrucción contra ese patrón: **quédate**. En la música, en el momento, en el camino.

---

## 2. El principio anti-muleta (el corazón del sistema)

### Qué es la muleta
Una ayuda visual (la pista que cae, tipo Guitar Hero) que te dice qué tecla apretar *justo cuando* hay que apretarla. Es el equivalente musical de leer con subtítulos en español: el cerebro se apoya en la muleta y nunca construye el conocimiento por debajo.

### Por qué falla
No construye **comprensión** (no entiendes *por qué* suena así) ni **memoria** (no retienes la pieza). Tocas "esa vez" y se evapora. Exactamente lo que le pasó al usuario con Yousician/Synthesia: *"tocaba la canción esa vez pero luego no quedaba nada; de memoria no recuerdo canción alguna"*.

### La regla de "aprendido"
> **Una canción no está aprendida hasta que se puede tocar SIN la app, DE MEMORIA, SOLO.**

Ese es el único indicador de verdad. Tres estados por pieza: `APRENDIENDO` → `TOCO-CON-AYUDA` → `TOCO-DE-MEMORIA-SOLO`. Solo el tercero cuenta como aprendida.

### Cómo se aplica en la operación
- Las apps con notación (Yousician) se usan **en modo sheet/partitura**, nunca en modo "pista que cae". La disciplina la pone el usuario; el sistema se la recuerda en cada interacción relevante.
- La memoria se construye **por capas, no solo muscular**: muscular (dedos), visual (forma en el teclado), auditiva (cómo suena) y estructural (la teoría: "aquí va esta progresión"). La muscular sola es frágil; la multicapa es sólida.
- Cualquier sugerencia que induzca dependencia de la muleta se descarta. Sin excepciones.
- La **capa visual de `fundamentos/`** sigue la misma regla: diagramas **estáticos de comprensión** (el mapa mental: dónde está Do, qué forma tiene un acorde), nunca representaciones de "pista que cae". Detalle en `fundamentos/_estilo-visual.md`.

---

## 3. Las tres capas y las 7 dimensiones

Las 7 dimensiones activas se agrupan en las tres capas del principio rector. El método completo de cada una vive en `contexto/stayhere-metodologia.md`.

| Capa | Dimensiones | Qué aporta |
|------|-------------|------------|
| **Mecánica** (el cómo) | Técnica · Lectura (cifrado primero + pentagrama ligero) · Ritmo | Control físico del instrumento |
| **Comprensión** (el porqué) | Teoría aplicada · Oído | Sentido y memoria — lo que la muleta no dio |
| **Expresión** (el para qué) | Repertorio (con memoria) · Interpretación | El destino: tocar de memoria, con sentimiento |

**Cómo se combinan en una sesión** (30-45 min típica): calentamiento técnico (5-10 min) → material nuevo con chunking y manos separadas (10-15 min) → repertorio (10-15 min) → oído (5 min). La **interpretación no es un paso**: está presente desde el calentamiento.

> 🔑 **Regla de oro:** sesión corta diaria > sesión larga esporádica. 20-30 min al día gana a 3 horas el domingo. La constancia del usuario es más frágil que su capacidad.

### Pedagogía propia de la música (que el inglés no exigía)
- **Práctica deliberada, no repetición mecánica.** Tocar 50 veces en piloto automático *fosiliza errores*. La práctica real es lenta, enfocada, atacando el punto débil.
- **Chunking (trocear).** Fragmentos de 2-4 compases, dominar cada uno, conectarlos. Nunca de corrido.
- **Manos separadas → manos juntas.** Cada mano por su lado hasta fluir, luego juntas. Saltárselo es la causa #1 de frustración del principiante.
- **Memoria por comprensión, no solo muscular.** Lo que hace que una pieza *se quede*. La cura directa al mal de Yousician.
- **Vocabulario antes (o junto a) la práctica.** La base dormida no tiene la estructura: pedirle *"forma Do mayor, manos separadas"* sin haber nombrado esas palabras genera caos y abandono. La dimensión 4 (Teoría aplicada) se materializa en `fundamentos/` — notas cortas, atadas a la canción real, que el usuario estudia. Es la misma cura del anti-muleta: comprensión que sostiene la memoria. El sistema **conduce la sesión** concepto por concepto (entender → tocar → confirmar), nunca suelta jerga de golpe.

---

## 4. Lo que StayHere NO hace

Vetos explícitos, con el porqué. Sirven para que el alcance no se desborde.

| Veto | Por qué |
|------|---------|
| ❌ **No usa la muleta** (pista que cae) como vía de aprendizaje | Entrena reacción, no música. El error histórico a no repetir. Apps solo en modo sheet. |
| ❌ **No reemplaza al instrumento** | El aprendizaje ocurre tocando el Casio, no leyendo sobre música. |
| ❌ **No reemplaza al profesor** para la corrección física (postura, manos, técnica) | La IA no ve las manos. Insustituible — la razón de la fecha dura. |
| ❌ **No enseña composición** | El usuario es intérprete, no compositor. No es meta (se descartó explícitamente). |
| ❌ **No persigue virtuosismo** ni prepara exámenes de conservatorio | La música es expresión emocional, no destreza. |
| ❌ **No impone repertorio de conservatorio** | El material son las canciones que el usuario ama (worship, lofi, instrumental emotivo, pop/indie en inglés). |
| ❌ **No gamifica** (streaks, puntos, badges) | Motivación frágil; se rompe el día que pierdes el streak. El obstáculo histórico es la desmotivación. |
| ❌ **No arranca el canto en paralelo** al piano | Secuencial: piano primero (es base de la voz). Canto es etapa 4, futura. |

> ⚠️ **Cuidado con sobre-construir.** Si la idea es "ya que estoy, integro las apps por API / hago un dashboard / arranco el módulo de canto" → detenerse. Eso es etapa posterior o está vetado. Cada etapa se construye con el dolor real, no antes.

---

## 5. Filosofía de construcción (heredada de TESLA/Oráculo)

- **El método manda, la herramienta se elige después.** No amoldar el aprendizaje a la app.
- **Define-or-link: nada de jerga sin explicar.** Todo término técnico en la ruta o una sesión se glosa en una frase o se enlaza a su nota de `fundamentos/`. Jerga huérfana = bug del sistema.
- **Imágenes pedagógicas, no decorativas.** Cuando una nota se beneficie de un diagrama, se genera en estilo minimalista (`fundamentos/_estilo-visual.md`): una imagen, un concepto inequívoco. No se ilustra por adornar.
- **Pragmatismo: avanzar > pulir.** No iterar indefinidamente. La perfección es enemiga de la constancia.
- **Construir con el dolor real, no antes.** El repertorio crece con el uso; la primera pieza nace con la primera canción real, no antes.
- **Progresión de fricción:** barrera baja al inicio (construir el hábito), potencia después. *Un método mejor que abandonas pierde contra uno peor que mantienes* — más cierto que nunca aquí, dado el patrón de abandono.
- **Preguntas con alternativas concretas, no abiertas.** Minimizar la fricción de decisión.
- **Spanglish controlado.** Tecnicismos musicales con su nombre (cifrado, rubato, chunking, voicing), explicaciones en español.
- **El usuario ajusta en vivo.** Revisa y corrige cada archivo. El `.md` es la única fuente de verdad: releerlo antes de volver a tocarlo, nunca trabajar desde la memoria del chat.

---

## 6. La salvaguarda contra el abandono

El patrón personal del usuario (el dato más importante de todo el sistema): **sin estructura y sin guía clara, se pierde entre infinitas opciones y abandona, incluso amando el dominio.** Le pasó en el inglés, en Yousician, en la guitarra, en el canto.

Dos salvaguardas innegociables, ambas vigiladas por el sistema:

1. **Fecha dura para meter al profesor** (~8 semanas, en `practica/00_indice.md`), en el calendario, no "cuando me sienta listo". **No se estira.**
2. **Accountability mínimo:** registro de práctica diario. Si pasan ~3 días sin registro, es la alarma temprana — el sistema lo señala.

> Estas dos cosas son la diferencia entre que esta vez funcione o sea otro Yousician abandonado. El sistema las protege activamente.

---

> Este manual define cómo opera StayHere. El detalle de cada dimensión vive en `contexto/stayhere-metodologia.md`; el QUÉ y el PORQUÉ completos en `contexto/stayhere-base.md`; el perfil del usuario en `sistema/perfil/yo_musica.md`.
