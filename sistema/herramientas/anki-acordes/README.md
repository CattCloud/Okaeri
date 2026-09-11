# 🃏 Mazo de Anki — Drill de acordes de guitarra por recall

> El drill de acordes de la era guitarra (método en `sistema/decisiones/decision_acordes_recall_anki.md` — vigente; solo cambió el instrumento).
> **Frente = el nombre del acorde** → recuerdas la forma y la **tocas en la guitarra** → volteas y verificas con el diagrama. Recall, no copia.

## Qué hay aquí

- `acordes.tsv` — el mazo importable: los **8 acordes de la clase 2 de la academia** (C, D, E, G, A, Em, Am, Dm).
- `acorde-*.png` — los diagramas del reverso (los mismos de `fundamentos/m1/`, generados con `fundamentos/_generador.js`).

## Cómo importarlo (una vez)

1. **Copia los 8 PNG** a la carpeta de medios de Anki: `…/Anki2/<tu perfil>/collection.media/` (en Anki: *Herramientas → Comprobar medios* muestra dónde está).
2. **Archivo → Importar** → `acordes.tsv`. Se crea el mazo **"Acordes Guitarra"** (tipo Basic, HTML activado — el archivo ya lo indica).
3. Verifica una tarjeta: frente **"Sol (G)"**, reverso el diagrama.

## Cómo practicarlo (dos modos)

- **Repaso espaciado** (mazo normal, cada día): para que las formas queden de por vida.
- **Drill de fluidez** (barajado + cronometrado — el complemento de las progresiones):
  1. *Herramientas → Crear mazo filtrado* → búsqueda `deck:"Acordes Guitarra"` · **desmarcar "Reprogramar las tarjetas según mis respuestas"** · orden **aleatorio** · construir.
  2. *⋮ Más → Avance automático*: **5 s** para recordar+formar / **2 s** para verificar. (En guitarra formar toma más que en piano — subir si 5 s queda corto; *lento es rápido*.)
  3. Al terminar la tanda: tecla **R** (Reconstruir) y otra vuelta. No daña el calendario porque "Reprogramar" está desmarcado.

## La regla (no la rompas)

- **Frente = nombre; tú produces la forma de memoria y la tocas.** El diagrama es para **verificar después**, no para copiar.
- Si al verificar la forma estaba mal: **Again**, y fórmala 3 veces limpia antes de seguir. El oído y la mano se entrenan con verdad.

## Crecer el mazo

Cada acorde nuevo del curso o del repertorio: una línea en `acordes.tsv` + su diagrama (`node fundamentos/_generador.js` con la forma agregada).
