---
tema: Guía de estilo visual de fundamentos
estado: VIGENTE (adaptada a guitarra 2026-08-28)
---

# 🎨 Estilo visual de los fundamentos

> **Los diagramas son pedagógicos, no decorativos. Regla de oro: una imagen, un concepto inequívoco.**
> **Los genera el agente**, como SVG por código. El texto solo no transmite "qué forma tiene Sol" — el diagrama sí.
> **Y todo ejemplo visual se muestra, no se cuenta:** si un apunte nombra una forma, una posición o una comparación, lleva sus diagramas — lado a lado cuando compara (tabla de imágenes con pie en cursiva).

---

## 1. La regla anti-muleta aplicada a lo visual

> **Los diagramas son mapas estáticos para *entender* (dónde, qué forma), nunca una "pista que cae" que diga "aprieta esto, ahora".**

Test descalificador — si una imagen tiene esto, se rehace:
- ❌ Un eje temporal o secuencia a seguir.
- ❌ Cuerdas/trastes iluminados en un orden.
- ❌ Flechas que impliquen *cuándo* tocar.

Permitido: ✅ señalar una ubicación · ✅ resaltar una forma de acorde · ✅ números de **dedo** (no de orden).

**Y la regla de destino:** los diagramas de **lo que debe producirse de memoria** (formas de acorde del drill o de la canción) van en el **apunte** y en el **reverso de Anki** — nunca en una práctica: ahí se dice "toca Sol", no se muestra Sol. Una **práctica** sí lleva el gráfico de **qué practicar** (la TAB de un ejercicio técnico, las figuras rítmicas): eso es especificación, no muleta.

---

## 2. Especificación de estilo (permanente)

> Diagrama de libro de texto técnico. Fondo blanco puro. Líneas y texto en negro y gris oscuro. Sans-serif limpia (monospace para nombres de nota si se indica). Sin sombras, gradientes, texturas ni adornos. Color solo como diferenciador funcional. Etiquetas en español (y el cifrado americano entre paréntesis cuando aplique: "Sol (G)").

---

## 3. Convenciones de guitarra

### Diagrama de acorde (el más usado)
- **Vertical**, como se ve la guitarra parada frente a ti.
- **6 líneas verticales = cuerdas.** De izquierda a derecha: **6ª (Mi grave) → 1ª (Mi aguda)**.
- **Líneas horizontales = trastes.** La de arriba, **gruesa**, es la cejuela (traste 0). Si el diagrama empieza más arriba del mástil, se indica el número del traste a la izquierda (ej. "5").
- **Punto = dónde pisa un dedo.** Dentro del punto, el **número del dedo**.
- **X arriba de la cuerda** = no se toca. **O arriba** = se toca al aire.
- **Cejilla** = una barra que cruza varias cuerdas en un traste, con el número 1.
- Debajo: el nombre, **"Sol (G)"**.

### Numeración de dedos
- **Mano izquierda (la del mástil):** 1 = índice · 2 = medio · 3 = anular · 4 = meñique. **El pulgar no se numera** (va detrás del mástil).
- **Mano derecha (la que toca las cuerdas):** **p** = pulgar · **i** = índice · **m** = medio · **a** = anular. Letras, no números. Se usa desde M8.

### Mástil (diapasón) horizontal
- Para mapas de notas (M5, M7, M8): mástil **horizontal**, cejuela a la izquierda, 6ª cuerda **abajo**, marcadores de traste (3, 5, 7, 9, 12) como puntos grises.

---

## 4. Código de color funcional (consistente entre imágenes)

| Color | Para qué |
|---|---|
| 🔴 Rojo | dedo 1 · la nota que cambia · señalar |
| 🟠 Naranja | dedo 2 · acorde menor |
| 🟢 Verde | dedo 3 · acorde mayor resaltado · ✔ correcto |
| 🔵 Azul | dedo 4 · cuerda al aire resaltada |
| 🟣 Morado | capo · cejilla |
| ⚫ Gris | X (cuerda que no se toca) · marcadores de traste |

---

## 5. Cómo se generan: SVG por código

> **Se dibujan como código (SVG), no con un generador de imágenes de IA.** Un diagrama de acorde exige la cuerda exacta, el traste exacto y el dedo exacto — justo lo que los modelos de imagen fallan. El SVG es exacto por construcción y editable. (En la era piano, dos rondas con IA de imágenes fallaron; el SVG no.)

**Flujo:**
1. El agente escribe el `.svg` en `fundamentos/mN/img/` con geometría exacta.
2. Se rasteriza a `.png` (Node + `sharp`, `density: 200`) para que renderice en cualquier visor. El `.svg` es la fuente; el `.png` se embebe.
3. Se verifica contra la checklist (§7).

**Generador reutilizable:** `fundamentos/_generador.js` — Node puro, sin dependencias. Trae `chord({nombre, formas, dedos, capo})` para diagramas de acorde y `fretboard()` para mástil horizontal. **Se escribe cuando M1 arranque** (con Mim), no antes. El de piano (`keyboard()`) está en `_archivo/piano/`.

---

## 6. Convención de archivos y embebido

- **Carpeta:** `fundamentos/mN/img/`. PNG versionados (livianos).
- **Nombre:** `NN-concepto.png` — NN = número de nota dentro del módulo, kebab-case sin tildes. Ej: `m1/img/04-mim.png`. Los de acorde para Anki: `acorde-<nombre>.png`.
- **Embebido** (tras el párrafo que explica, antes del siguiente H2; nunca dentro del callout "Repaso"):

```markdown
![Diagrama del acorde Mim: dedos 2 y 3 en el traste 2, cuerdas 5ª y 4ª.](img/04-mim.png)
*Mim: dos dedos, todas las cuerdas suenan. El más fácil de los cinco.*
```

---

## 7. Checklist (antes de integrar un PNG)

- [ ] 6 cuerdas, orden correcto (6ª a la izquierda en vertical / abajo en horizontal).
- [ ] Cada punto en la cuerda y traste correctos; número de dedo correcto (1-4, sin pulgar).
- [ ] X y O correctos arriba.
- [ ] Nombre con cifrado americano entre paréntesis: "Sol (G)".
- [ ] Fondo blanco, color solo funcional, cero adornos.
- [ ] Pasa el **test anti-muleta** (§1): estático, sin secuencia.
- [ ] Si va en una **práctica**: muestra qué practicar (ejercicio, figuras) — nunca una forma que deba producirse de memoria.

---

## 8. Galería / estado

| Imagen | Archivo | Estado |
|---|---|---|
| TAB del ejercicio 1-2-3-4 + leyenda de dedos | `m1/img/clase01-tab-1234.svg` → `.png` | ✅ práctica clase 1 |
| Anatomía de la TAB (0, números, columna = acorde) | `m1/img/clase01-anatomia-tab.svg` → `.png` | ✅ apunte tablatura |
| Las 6 cuerdas al aire con sus notas | `m1/img/clase01-cuerdas-notas.svg` → `.png` | ✅ apunte notas y cuerdas |
| Mano izquierda: dedos 1-4 + pulgar | `m1/img/clase01-mano-izquierda.svg` → `.png` | ✅ apunte dedos |
| Figuras rítmicas + compás 4/4 con ejemplos | `m3/img/clase01-figuras-compas.svg` → `.png` | ✅ apunte y práctica de ritmo |
| Partes de la guitarra, señaladas | `img/consulta-partes-guitarra.svg` → `.png` | ✅ nota de consulta |
| 8 acordes + 4 variantes + anatomía del diagrama + hoja imprimible | `m1/img/acorde-*.svg`, `clase02-*.svg`, `hoja-8-acordes.svg` | ✅ generados por `_generador.js` (clase 2) |
| Las 4 progresiones en compases | `m1/img/clase02-progresiones.svg` → `.png` | ✅ práctica clase 2 |

> Era piano: 10 diagramas en `_archivo/piano/fundamentos/img/`. No se reusan (son teclado).
