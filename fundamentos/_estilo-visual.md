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

## 4. Preámbulo de sistema para Banana Pro

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

| Imagen | Nota | Estado | Archivo |
|--------|------|--------|---------|
| Patrón 2-3 de las negras | 01 | ✅ integrada | `img/01-patron-negras.png` |
| Dónde está Do (+ Do central) | 01 | 🔴 rechazada v1 (notación Do/C mezclada) — regenerar | `img/01-donde-esta-do.png` |
| La octava (Do a Do) | 01 | 🔴 rechazada v1 (los Do a varias octavas) — regenerar | `img/01-octava.png` |

> Estados: ⬜ pendiente · 🟡 generada (sin verificar) · ✅ integrada.

---

## 8. Prompts de generación (versionados)

> Cada prompt = **preámbulo (§4) + el cuerpo de abajo**. Se versionan aquí para poder regenerar igual si hace falta.

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
