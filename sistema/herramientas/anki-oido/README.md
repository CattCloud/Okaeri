# 👂 Mazo Anki — Oído (mayor/menor + intervalos)

> **Reemplaza a Perfect Ear** en los bloques de Oído del plan (la app no traía los ejercicios configurables que el plan pedía). Mismo hábito que el drill de acordes: Anki, footprint nuevo cero.
> Audios **sintetizados a medida** (tono tipo piano, registro medio — sirven igual para guitarra: el oído no depende del instrumento): solo lo que la ruta necesita ahora, sin el buffet de los mazos comunitarios.

## Contenido — `Okaeri_Oido.apkg`

| Submazo | Tarjetas | Ejercicio |
|---------|----------|-----------|
| **1 Acordes — ¿mayor o menor?** | 24 (12 raíces × 2) | Suena el acorde (arpegio y luego bloque) → dices **mayor o menor** → verificas. Desde M1 del temario. |
| **2 Intervalos — 3M · 3m · 5J** | 36 (12 raíces × 3) | Suenan 2 notas (una a una y luego juntas) → dices **3ª mayor, 3ª menor o 5ª justa**. Entra en M5 del temario. |

Cada audio toca primero las notas **una por una** (para que el oído las separe) y luego **en bloque** (como suenan en la vida real) — el formato estándar del entrenamiento auditivo.

## Cómo importar

1. Abrir Anki → `Archivo → Importar` → elegir `Okaeri_Oido.apkg`.
2. Aparecen los dos submazos bajo **"StayHere Oído"** — el nombre del mazo viaja dentro del `.apkg` y no cambió con el renombrado del sistema (2026-08-26). Para alinearlo: en Anki, engranaje del mazo → **Renombrar** → `Okaeri Oído`. Es cosmético; si se deja como está, no rompe nada.
3. En AnkiDroid/AnkiMobile se sincroniza solo vía AnkiWeb después de importar en el escritorio.

## Cómo usarlo en la sesión (5 min)

- **Desde M1:** submazo **1 Acordes**. Responder **de oído, sin mirar el nombre** del acorde antes de tiempo. En voz alta: "mayor" / "menor" → mostrar respuesta.
- **Desde M5:** sumar submazo **2 Intervalos**. Truco de la ruta: asociar cada intervalo a una canción conocida.
- Sirve el mismo esquema del drill de acordes: **Custom Study / mazo filtrado** si el repaso espaciado deja el mazo "vacío" un día que se quiere practicar.

## Regla anti-autoengaño

Responder **antes** de destapar, en voz alta. Si la respuesta fue duda ("¿mayor?...creo"), cuenta como fallo — se marca *Again*. El oído se entrena con verdad, no con benevolencia.

## Regeneración

El generador vive en el scratchpad de la sesión que lo creó (`build.py`); si algún día se quieren más intervalos u otras calidades de acorde (7ªs, disminuidos — etapa posterior), se regenera con el mismo método. No construir eso ahora.
