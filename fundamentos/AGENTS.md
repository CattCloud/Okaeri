# Reglas de `fundamentos/` — apuntes, prácticas, consultas y diagramas

> Aplican a todo archivo de esta carpeta. Procedimientos: `escribir-apunte`, `escribir-practica` y `crear-diagrama` (`.claude/skills/`). Las reglas generales R1-R12 están en `/AGENTS.md`.

## Organización

**F1 · Ubicación y nombre.** `fundamentos/<carril>/mN/`, donde `mN` es el módulo del temario donde el concepto aparece por primera vez. El nombre dice el origen: `claseNN_<tema>.md` (apunte) y `claseNN_practica_<tema>.md` (práctica) si nació de la clase NN de la academia; `apunte_N.N_<tema>.md` y `practica_N.N_<tema>.md` si nació de la sección N.N del mapa. Imágenes en `mN/img/`. Nombres en minúsculas, con guiones, sin tildes.

**F2 · Apunte y práctica son archivos distintos.** Si se puede hacer sin el instrumento, es apunte: se lee lejos de él. Si necesita el instrumento, es práctica: se usa con él en la mano. Mezclarlos induce a leer mientras se toca (R2). Un mismo ejercicio puede aparecer en los dos con roles distintos: el apunte explica qué entrena y por qué funciona; la práctica prescribe cuánto. Prescribir cantidades es exclusivo de la práctica.

**F3 · Se escriben cuando la sección se toca** (R11), y cada archivo nuevo tiene su fila en `fundamentos/00_indice.md`.

**F13 · Enlaces en formato Markdown estándar.** El usuario no usa Obsidian: todo enlace entre notas se escribe `[texto](ruta.md)`, con la ruta relativa al archivo que enlaza — nunca `[[wikilinks]]`. Es el formato que abren VS Code, GitHub y cualquier visor Markdown sin depender de un programa externo.

## Prácticas

**F4 · Secciones obligatorias:** Qué estás mejorando (en claro) · Cómo se hace (referencia) · Los 3 niveles del día · Cómo suena cuando está bien · Si sale mal — los 3 típicos · Hasta cuándo · Qué sigue. Opcionales: El gráfico (en guitarra, obligatorio si hay algo que mostrar), Afinación del instructor, Verificación. Toda referencia interna ("ver Afinación 1") apunta a algo que existe en el archivo. Plantilla: `.claude/skills/escribir-practica/plantilla.md`.

**F5 · Los 3 niveles son rutinas exactas.** 🔵 mínimo / 🟢 natural / 🔥 motivado, cada uno con sus minutos en el título y filas de qué + cuánto (repeticiones, ciclos o minutos por parte), y si lleva metrónomo. Nada de rangos vagos ("10-15 min las versiones"). Cada nivel incluye al anterior.

**F6 · La práctica nunca muestra lo que debe salir de memoria.** Sí trae el gráfico de qué practicar: la TAB de un ejercicio, las figuras rítmicas, el esquema de un ejercicio de aire. No trae formas de acorde del drill o de la canción, ni la letra o la melodía de una canción de memoria: eso vive en el apunte, en Anki o en la memoria del usuario.

**F7 · Verificar después, no durante.** Una práctica puede cerrar con "Verificación — mirar después de intentar" (el reverso, como en Anki). Mientras una forma es nueva, mirarla se permite; lo prohibido es tocar siempre mirando. En canto la verificación es la grabadora: se canta sin mirar nada, se graba y se escucha al final.

## Apuntes

**F8 · Todo ejemplo visual se muestra.** Si un apunte nombra una forma, una posición o una comparación ("Sol con 3 vs. 4 dedos", "el mismo Do en tres lugares"), lleva sus diagramas, lado a lado cuando compara (tabla de imágenes con pie en cursiva). No se describe con palabras lo que un diagrama muestra.

**F9 · El apunte es atemporal, no un chat.** Solo la lección: nada que dependa de la conversación del día ("tu duda", "como vimos hoy"), ni disculpas, ni deudas o comentarios sobre el sistema. Quien lo relea en tres semanas solo debe encontrar la lección. La personalización pedagógica sí entra: sus ejemplos, su repertorio, lo que le cuesta. Lo operativo va a `estado_actual.md` o `NOTAS.md`; lo del sistema, al frontmatter.

**F10 · Un concepto se escribe una vez.** La teoría común a los dos carriles (notas, octavas, escala) vive en un solo apunte y se enlaza desde el otro. Cada apunte cierra con `📋 Repaso en una pantalla`. Plantilla: `.claude/skills/escribir-apunte/plantilla.md`.

## Consultas y canto

**F11 · Las consultas no son pasos del mapa.** `_consulta-instrumento.md` y `canto/_consulta-voz.md` se consultan siempre. Toda duda de consulta que se responda en el chat se archiva en la de su carril, con fila en su índice de preguntas **y la respuesta escrita** (nunca "explicado en el chat").

**F12 · Canto.** El agente no oye: lo físico de la voz lo manda el profesor (R8). Regla fija de toda práctica de canto: **dolor o carraspera = parar**. La nota de referencia la da la guitarra o un piano de app, no una app que dibuje la afinación mientras se canta (R2).
