---
tema: Guía de estilo visual de fundamentos
estado: EN-CURSO
---

# 🎨 Estilo visual de los fundamentos

> **Las notas de `fundamentos/` integran diagramas pedagógicos, no decorativos. Regla de oro: una imagen, un concepto inequívoco.**
> El texto solo no transmite bien una indicación precisa ("dónde está Do", "qué forma tiene un acorde"). La imagen lo hace. Pero la calidad está en lo **pedagógico**, no en lo bonito: diseño simple a propósito.

Este archivo es la fuente de verdad del estilo. Rescata la especificación que vivía en `PROMPT.md` (que está en `.gitignore`) y la vuelve permanente y versionada. Toda imagen del sistema lo sigue.

---

## 1. La regla anti-muleta aplicada a lo visual

> **Los diagramas son mapas estáticos para *entender* (dónde, qué, qué forma), nunca una "pista que cae" que diga "aprieta esto, ahora".**

El fracaso histórico fue la muleta tipo Guitar Hero. Una imagen puede caer en lo mismo si representa **secuencia/tiempo**. Test descalificador — si una imagen tiene cualquiera de esto, se rehace:

- ❌ Un eje temporal (líneas que "avanzan" hacia el que toca).
- ❌ Teclas iluminadas en un orden a seguir.
- ❌ Bloques que "caen" o flechas que implican *cuándo* tocar.

Permitido: ✅ flechas que señalan una **ubicación** (dónde está Do). ✅ resaltar una **forma** de acorde. ✅ números de **dedo** (no de orden). Si hay duda, la imagen es un mapa, no una película.

---

## 2. Especificación de estilo (permanente)

> Infografía educativa minimalista, fondo blanco puro, líneas y textos en negro y gris oscuro. Tipografía sans-serif limpia (monospace cuando sea código). Sin adornos decorativos, sin gradientes, sin fondos texturizados. Colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como diferenciadores funcionales para resaltar conceptos clave. Estilo de diagrama de libro de texto técnico. Alta resolución, vectores definidos.

---

## 3. Código de color funcional (consistente entre imágenes)

El color **significa lo mismo en todas las imágenes**. Nunca es decorativo.

| Color | Para qué |
|-------|----------|
| 🔴 Rojo | señalar / la nota que cambia / dedo 1 (pulgar) |
| 🟠 Naranja | grupo de 3 negras / dedo 2 / acorde menor |
| 🟢 Verde | grupo de 2 negras / acorde mayor resaltado / dedo 3 / ✔ correcto |
| 🔵 Azul | la tecla Do / dedo 4 |
| 🟣 Morado | la octava / dedo 5 |

> Los **dedos** usan 1=rojo, 2=naranja, 3=verde, 4=azul, 5=morado. Mantener idéntico en toda imagen que numere dedos.

---

## 4. Cómo se generan los diagramas: SVG por código (método principal)

> **Los diagramas técnicos (teclado, dedos, formas de acorde) se DIBUJAN COMO CÓDIGO (SVG), no con un generador de imágenes de IA.**
> Un teclado exige conteo exacto y texto correcto en cada tecla — justo lo que los modelos de imagen fallan. El SVG es exacto por construcción, en este estilo, editable y versionado.

**Flujo:**
1. Se escribe el `.svg` en `img/` con geometría exacta (7 blancas, 5 negras en sus posiciones, etiquetas en español).
2. Se rasteriza a `.png` con Node + sharp (para que renderice en cualquier visor). El `.svg` es la **fuente editable**; el `.png` es lo que se embebe en la nota.
3. Se verifica el PNG contra la checklist (§7) antes de integrar.

**Rasterizar** (`npm i sharp` una vez en cualquier carpeta de trabajo, p. ej. el scratchpad):
```js
const sharp = require('sharp'); const fs = require('fs');
const base = 'C:/cerebro/Okaeri/fundamentos/img/';
for (const f of ['01-patron-negras','01-donde-esta-do','01-octava'])
  sharp(fs.readFileSync(base+f+'.svg'), {density:200}).png().toFile(base+f+'.png');
```

> **Generador reutilizable:** los diagramas de teclado/acordes se producen con `fundamentos/_generador.js` (Node puro, sin dependencias: `node _generador.js` escribe los `.svg` a `img/`). Trae una función `keyboard()` que coloca blancas/negras, resaltados, nombres y círculos de dedo — úsala para diagramas nuevos (p. ej. la nota 05). Las manos (`03-numeracion-dedos.svg`) y los diagramas de la nota 01 son SVG a mano.

> **Por qué SVG y no IA:** dos rondas con Google Banana Pro fallaron (notación Do/C mezclada, octavas mal contadas, nombres en inglés). Ningún generador de imágenes garantiza exactitud en diagramas técnicos; el SVG sí. El preámbulo de IA (§5) y los prompts (§8) se conservan **solo** por si algún día se quiere una imagen *ilustrativa no técnica* — para teclados/acordes, siempre SVG.

---

## 5. Preámbulo de IA (fallback — solo ilustraciones NO técnicas)

> **Copiar este bloque al inicio de CADA prompt**, y debajo el cuerpo específico de la imagen (sección 8).

```
Infografía educativa minimalista en español, estilo diagrama de libro de texto técnico. Fondo blanco puro (#FFFFFF). Líneas, contornos y texto en negro y gris oscuro. Tipografía sans-serif limpia y geométrica; usa monospace solo para código o nombres de notas cuando se indique. Sin sombras, sin gradientes, sin texturas, sin adornos decorativos, sin logos ni marcas de agua, sin bordes de color, sin fondos de color. Composición limpia con amplio espacio en blanco. Usa colores vibrantes (verde, naranja, rojo, azul, morado) ÚNICAMENTE como resaltadores funcionales de los conceptos clave que se indican abajo — nunca decorativos. Todas las etiquetas de texto en español, legibles y correctamente escritas. Diagrama estático de comprensión: NO representa una secuencia de tocado ni notas que caen. Alta resolución, trazos vectoriales nítidos, orientación horizontal.
```

---

## 5. Convención de archivos y embebido

- **Carpeta:** `fundamentos/img/`. PNGs versionados en git (son material de estudio liviano, no media pesada).
- **Nombre:** `NN-concepto.png` — NN = número de nota, concepto en kebab-case **sin tildes ni ñ**. Ej: `01-patron-negras.png`.
- **Embebido en la nota** (después del párrafo que explica el concepto, antes del siguiente H2; nunca dentro de los callouts "Repaso" o "Ahora al teclado"):

```markdown
![Texto alternativo descriptivo del diagrama.](img/01-donde-esta-do.png)
*Pie en cursiva: una línea que refuerza el concepto.*
```

---

## 6. Checklist de verificación (antes de integrar un PNG)

Los generadores de IA dibujan teclados mal con frecuencia. **No se integra ninguna imagen sin pasar esto:**

- [ ] Patrón de negras correcto (2-3-2-3) si hay teclado.
- [ ] Do realmente a la izquierda de un grupo de **2** negras.
- [ ] Nombres de nota bien escritos (Do, Re, Mi, Fa, Sol, La, Si).
- [ ] Números de dedo correctos (pulgar = 1 en ambas manos).
- [ ] Fondo blanco puro, color solo funcional, cero adornos/marcas de agua.
- [ ] Pasa el **test anti-muleta** (§1): estático, sin secuencia.

---

## 7. Galería / estado

| Imagen | Nota | Estado | Archivo (fuente + PNG) |
|--------|------|--------|---------|
| Patrón 2-3 de las negras | 01 | ✅ integrada | `img/01-patron-negras.svg` → `.png` |
| Dónde está Do (+ Do central) | 01 | ✅ integrada | `img/01-donde-esta-do.svg` → `.png` |
| La octava (Do a Do) | 01 | ✅ integrada | `img/01-octava.svg` → `.png` |
| Nombres de las negras (♯/♭) | 01 | ✅ integrada | `img/01-negras-nombres.svg` → `.png` |
| Numeración de dedos 1-5 | 03 | ✅ integrada | `img/03-numeracion-dedos.svg` → `.png` |
| Calentamiento de 5 dedos | 03 | ✅ integrada | `img/03-calentamiento.svg` → `.png` |
| Forma de Do mayor | 04 | ✅ integrada | `img/04-do-mayor.svg` → `.png` |
| Tres acordes mayores | 04 | ✅ integrada | `img/04-tres-acordes.svg` → `.png` |
| Mayor vs. menor | 04 | ✅ integrada | `img/04-mayor-vs-menor.svg` → `.png` |
| Tarjetas de acorde (Do/Fa/Sol/Lam) | mazo Anki | ✅ generadas | `img/acorde-*.svg` → `.png` (reverso del mazo) |

> Estados: ⬜ pendiente · 🟡 generada (sin verificar) · ✅ integrada.

---

## 8. Prompts de generación de IA (históricos — superados por SVG)

> ⚠️ **Estos prompts ya NO se usan para los diagramas de teclado.** Se conservan como registro de los intentos con Banana Pro (que fallaron en exactitud). El método vigente es SVG por código (§4). Quedan aquí solo por si alguna vez se necesita una imagen ilustrativa no técnica.
>
> Cada prompt = **preámbulo de IA (§5) + el cuerpo de abajo**.

### 01-A · `01-patron-negras.png`
```
Dibuja un fragmento de teclado de piano visto de frente, mostrando aproximadamente dos octavas. Resalta cómo las teclas negras forman grupos alternados: un grupo de 2 teclas negras, luego un grupo de 3, luego 2, luego 3, repitiéndose. Encima de cada grupo coloca una etiqueta sans-serif: "2" sobre cada grupo de dos negras y "3" sobre cada grupo de tres. Pinta los grupos de 2 negras en VERDE y los grupos de 3 negras en NARANJA (relleno sólido y plano sobre esas teclas negras, como único recurso de color). Las teclas blancas en blanco con contornos finos negros. Sin nombres de notas, sin manos, sin flechas. Una llave o corchete fino debajo agrupa visualmente la idea "2 + 3 se repite". Proporción horizontal.
```

### 01-B · `01-donde-esta-do.png` (v2 — corregido)
> v1 falló: mezcló "Do" con notación "C3/C4/C5" y puso doble etiqueta en el Do central. v2 fuerza español y una sola etiqueta.
```
Dibuja un teclado de piano de frente abarcando unas 3 octavas completas. Identifica TODAS las teclas Do: cada Do es la tecla blanca inmediatamente a la izquierda de un grupo de 2 teclas negras. Marca cada Do con un punto AZUL y la etiqueta "Do" en negro debajo de esa tecla. Usa SOLO nombres en español (Do); NO uses notación con letras ni números como C, C3, C4, C5. Al Do que queda más o menos en el centro del teclado, señálalo además con UNA sola flecha vertical ROJA apuntando hacia abajo a esa tecla, y debajo, en rojo, la etiqueta "Do central" (esa tecla lleva solo esa etiqueta, no dos). El resto del teclado en blanco y negro neutro, sin más etiquetas. Sin números de dedos, sin manos. La flecha roja señala una ubicación fija, no una secuencia.
```

### 01-C · `01-octava.png` (v2 — corregido)
> v1 falló: los dos Do quedaron a varias octavas de distancia y hubo manchas de color en negras. v2 fuerza EXACTAMENTE una octava y negras limpias.
```
Dibuja un tramo de teclado de piano que muestre EXACTAMENTE una octava: desde una tecla Do hasta la SIGUIENTE tecla Do, es decir 8 teclas blancas consecutivas (Do, Re, Mi, Fa, Sol, La, Si, Do) con sus 5 teclas negras intercaladas. NO dibujes más teclas que esas; el diagrama abarca solo una octava, nada más. Marca la primera tecla "Do" (izquierda) y la última tecla "Do" (derecha), ambas con etiqueta en negro y un punto MORADO. Etiqueta las 6 blancas intermedias en gris claro: Re, Mi, Fa, Sol, La, Si, en orden. Debajo, un corchete horizontal fino que une los dos Do con el texto centrado "1 octava". Las teclas negras quedan completamente negras, SIN ninguna mancha ni marca de color. Sin flechas, sin números de dedos. Es un diagrama de distancia, no de secuencia.
```
