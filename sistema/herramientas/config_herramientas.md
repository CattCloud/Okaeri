# 🛠️ Configuración de herramientas — Rol operativo

> **Propósito:** resumen operativo de *con qué* se ejecuta cada cosa y *cuál es su rol*. Versión corta y accionable de `contexto/okaeri-herramientas.md`.
> **Principio que gobierna:** la herramienta se elige *después* del método. El método manda; las apps son ejecutores. **Anti-muleta:** ninguna app en modo "pista que cae".

---

## El modelo de 3 capas

| Capa | Qué es | Cuándo se usa |
|------|--------|---------------|
| **1. La IA** (Claude Code) | El cerebro: arma la ruta, explica teoría, dirige la práctica, propone repertorio | Default para todo lo cognitivo |
| **2. Markdown** | El sustrato: registro de práctica, índice de repertorio, estado, fuente única de verdad | Default para todo lo que se guarda |
| **3. App / hardware** | Solo lo que las dos de arriba no pueden: producir sonido, dar feedback de notas, ver/oír | Solo si reduce fricción real e insustituible |

> Una herramienta sube de capa solo si la de abajo no puede hacer el trabajo. El **insustituible que no es app** es el **profesor**, para lo físico.

---

## Footprint completo (una sola app nueva)

| Herramienta | Rol | ¿Nueva? | Regla clave |
|-------------|-----|---------|-------------|
| **IA (Claude Code)** | Dirige todo: ruta, teoría, lectura, oído, chunking, repertorio | No (stack) | Es el cerebro. Aquí se juega la calidad del sistema. |
| **Markdown** | Registro de práctica + índice de repertorio con estados. Fuente única de verdad | No (stack) | Las apps ejecutan; el markdown manda. |
| **Casio CT-X800 + MIDI** | El instrumento + feedback a apps + metrónomo integrado | No (ya se tiene) | El aprendizaje ocurre AQUÍ, no leyendo. |
| **Yousician (modo sheet)** | Gimnasio de lectura y práctica de piezas | No (ya pagado) | ⚠️ **SOLO modo sheet/partitura. Nunca pista que cae.** |
| **Oído Perfecto (Perfect Ear)** | Gimnasio de oído (+ refuerza ritmo y lectura) | **Sí — la única nueva** | Gratis / pago único. Acepta el Casio por MIDI. |
| **Anki** | Drill de acordes por **recall** (nombre → recuerdas la forma → la tocas) | No (reusada de la constelación) | Frente = nombre; reverso = diagrama para verificar. Footprint nuevo = 0. |
| **Metrónomo del Casio** | Ritmo | No (integrado) | Para calibrar el pulso, luego soltar. No vivir pegado a él. |
| **YouTube / Spotify** | Referencias de postura e interpretación | No (ya se usa) | Postura (arranque) + cómo frasea el repertorio. |
| **Profesor** | Técnica + interpretación (lo físico) | El ancla humana | Entra en la fecha dura. Insustituible. |

---

## Cómo se usa cada una

### Yousician — en modo sheet (la regla crítica)
- **Rol:** gimnasio de práctica de lectura y de piezas. Es el **Anki de Okaeri**: ejecutor, no cerebro.
- ⚠️ **La trampa:** Yousician permite quedarse en las muletas (notas que caen, colores) **indefinidamente**. Tiene 4 notaciones, incluida **partitura tradicional sin colores ni nombres** — esa es la que se usa.
- **La disciplina la pone el usuario, no la app.** El sistema lo recuerda cada vez que se mencione Yousician.
- **El MIDI del Casio** le da feedback de notas a la app. Pero recordar: **Yousician NO mide el sostenido de las notas**, así que la interpretación no se le delega.

### Oído Perfecto (Perfect Ear) — la única app nueva
- **Rol:** ejecutor del entrenamiento auditivo (reproduce sonidos, evalúa al instante, registra estadísticas) — algo que la IA por texto no hace bien.
- **La IA dirige qué entrenar** ("esta semana, mayor vs. menor; configura así"); la app ejecuta; el markdown guarda el avance.
- **Por qué se ganó el lugar:** personalización real (aislar los sonidos que cuestan, crear ejercicios propios) que Yousician no permite. Pago único, versión gratuita generosa, en español, acepta MIDI del Casio.
- ⚠️ **Honestidad:** reseñas reportan crashes ocasionales (sobre todo iOS) y una sección de ritmo algo confusa. Para el núcleo (intervalos, acordes, escalas de oído) funciona bien.

### Anki — drill de acordes por recall
- **Rol:** ejecutor del entrenamiento de acordes por **recall activo**. Es Anki real (distinto de la metáfora "el Anki de Okaeri" que arriba se usa para Yousician). Decisión completa en `sistema/decisiones/decision_acordes_recall_anki.md`.
- **La regla anti-muleta:** **frente = el nombre** del acorde ("Do", "Fa", "Lam"); recuerdas la forma y la **tocas en el Casio**; el **reverso = el diagrama** (reusa los de `fundamentos/`), solo para verificar. Nunca el frente con las teclas a apretar — eso sería copiar, no recordar.
- **Dos modos:** (1) **repaso espaciado** (modo normal, para que las formas se queden); (2) **Custom Study / mazo filtrado + Auto Advance** (cronometrado, barajado, solo los acordes elegidos) para la **fluidez de cambios**.
- **Velocidad:** el cronómetro arranca **generoso**; se acorta solo cuando las formas salen limpias (*lento es rápido*).
- **Reparto:** la **IA arma el mazo** (con los diagramas), **Anki ejecuta**, el **markdown manda** (qué acordes se dominan se refleja en repertorio/práctica).
- 🔭 **Evolución futura (no ahora):** una app que **valide por MIDI** lo que tocas (auto-chequeo). Se evaluará más adelante si el usuario quiere; por ahora Anki + autoverificación honesta basta y mantiene el footprint mínimo.

#### 🔁 Cómo correr el drill de fluidez (paso a paso, probado 2026-07)
> El repaso normal del mazo **"Acordes"** programa las tarjetas a días de distancia (por eso a veces dice *"¡Finalizaste el mazo!"* — es correcto, es el modo memoria). Para **drillear los 4 acordes ahora, barajados y cronometrados**, se usa un **mazo filtrado** aparte:
> 1. **Herramientas → Crear mazo filtrado.** Búsqueda: `deck:Acordes`. **Desmarcar "Reprogramar las tarjetas según mis respuestas"** (así el drill NO ensucia el calendario del repaso espaciado). Orden: **Aleatorio**. Construir. *(Ya creado: mazo **"Acordes Auto"**.)*
> 2. **Avance automático:** dentro del estudio → **⋮ Más → Avance automático**. Tiempos en el preset **"Acordes (drill)"**: **3 s** para recordar+tocar / **1 s** para verificar (ajustables por AnkiConnect; subir si 3 s queda corto para tocar la forma — *lento es rápido*).
> 3. **Bucle:** Anki no cicla infinito solo. Al terminar los 4 → tecla **R (Reconstruir)** y se rellenan. Reconstruir infinitas veces no daña nada porque "Reprogramar" está desmarcado.
> - **Config vía AnkiConnect** (Anki abierto, `http://127.0.0.1:8765`): los tiempos viven en `secondsToShowQuestion` / `secondsToShowAnswer` del preset; se leen/guardan con `getDeckConfig` / `saveDeckConfig`.

### El Casio CT-X800
- **Instrumento principal.** Todo el aprendizaje real ocurre aquí.
- **MIDI:** conecta a la tablet/laptop para que Yousician y Oído Perfecto validen notas.
- **Metrónomo integrado:** se usa para el ritmo. Cero apps nuevas para esto.

### La IA (Claude Code) — donde está el valor real
- **La dimensión donde más aporta: teoría aplicada** (por qué una canción suena así, qué progresión usa, por qué emociona).
- Arma y afina la **ruta**, propone **repertorio al nivel correcto** (evitando el error 5.4: piezas muy difíciles), ayuda a **trocear** (chunking), explica la estructura para memorizar.
- **Límite honesto:** no ve las manos ni oye cómo se toca. La técnica física y la interpretación las corrige el **profesor**.

---

## Reglas que gobiernan el uso

1. **Anti-muleta:** Yousician solo en modo sheet; ninguna app en modo "pista que cae".
2. **El método dirige las apps:** Oído Perfecto y Yousician son ejecutores; Okaeri/IA decide qué practicar y los configura.
3. **Markdown es siempre la fuente de verdad:** las apps ejecutan, pero el registro de práctica y el índice de repertorio viven en markdown.

> **La pieza que de verdad importa no es ninguna app.** Es (1) la IA orquestando bien la ruta y la teoría, y (2) el profesor corrigiendo el cuerpo a tiempo. Una ruta bien armada y un profesor puntual valen más que cualquier app.
