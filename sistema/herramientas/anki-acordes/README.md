# 🃏 Mazo de Anki — Drill de acordes por recall

> El mazo inicial del **drill de acordes** (ver `sistema/decisiones/decision_acordes_recall_anki.md`).
> **Frente = el nombre del acorde** → tú recuerdas la forma y la **tocas en el Casio** → volteas y verificas con el diagrama. Recall, no copia.

## Qué hay aquí
- `acordes.tsv` — el mazo importable (4 acordes de *10,000 Reasons*: **Do, Fa, Sol, Lam**).
- `acorde-do.png`, `acorde-fa.png`, `acorde-sol.png`, `acorde-lam.png` — los diagramas del reverso.

## Cómo importarlo (una vez)
1. **Copia los 4 PNG** (`acorde-*.png`) a la carpeta de medios de Anki: `…/Anki2/<tu perfil>/collection.media/`. (En Anki: *Herramientas → Comprobar medios* te muestra dónde está, si dudas.)
2. En Anki: **Archivo → Importar** → elige `acordes.tsv`. Se creará el mazo **"Acordes"** (tipo Basic, con HTML activado — el archivo ya lo indica).
3. Verifica una tarjeta: frente **"Lam (Am)"**, reverso **"La · Do · Mi"** + el diagrama.

## Cómo practicarlo (dos modos)
- **Repaso espaciado** (para que se queden): estudia el mazo "Acordes" normal, cada día.
- **Drill rápido de cambios** (impredecible + cronometrado):
  1. *Herramientas → Crear mazo filtrado* → búsqueda `deck:Acordes`, **orden: aleatorio**.
  2. Activa **Auto Advance** (en las opciones de repaso): *segundos para mostrar la pregunta* ≈ **5 s**, *para la respuesta* ≈ **3 s**, auto-calificar "Bien".
  3. Al ver el nombre, **tócalo de memoria ANTES** de que voltee. Ese es el recall.

## La regla (no la rompas)
- **Frente = nombre; tú produces la forma de memoria.** El diagrama es para **verificar**, no para copiar.
- **Cronómetro generoso primero.** Acórtalo solo cuando las formas salgan limpias (*lento es rápido*).

## Crecer el mazo
Cada acorde nuevo del repertorio se suma con una línea en `acordes.tsv` y su diagrama (lo genera la IA con `fundamentos/_generador.js`).

> 🔭 **Evolución futura:** una app que valide por MIDI lo que tocas (auto-chequeo). Por ahora, autoverificación honesta con Anki.
