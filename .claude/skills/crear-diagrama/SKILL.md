---
name: crear-diagrama
description: Crear o corregir un diagrama de Okaeri (acordes, TAB, figuras rítmicas, mástil, teclado, esquemas de ejercicios de voz) como SVG por código y PNG. Usar cuando un apunte o una práctica necesita mostrar una forma, una posición, una comparación o un ejercicio.
---

# Crear un diagrama

> **Los diagramas son pedagógicos, no decorativos: una imagen, un concepto inequívoco.** Los genera el agente como **SVG por código**, nunca con un generador de imágenes de IA: un diagrama de acorde exige la cuerda, el traste y el dedo exactos, justo lo que esos modelos fallan (en la era piano, dos rondas con IA de imágenes fallaron; el SVG no).

## 1. Dónde va (antes de dibujar)

- **Apunte:** cualquier diagrama que explique, incluidas las formas que deben salir de memoria (F8).
- **Práctica:** solo el gráfico de qué practicar: TAB del ejercicio, figuras, esquema del ejercicio. Nunca una forma de acorde del drill o de la canción (F6).
- **Anki:** los diagramas de acorde van al reverso de las tarjetas (`sistema/herramientas/anki-acordes/`).

**Test anti-muleta (R2):** si la imagen tiene un eje de tiempo, cuerdas o trastes iluminados en un orden, o flechas que digan *cuándo* tocar, se rehace. Permitido: señalar una ubicación, resaltar una forma, números de **dedo** (no de orden).

## 2. Estilo (permanente)

Diagrama de libro técnico. Fondo blanco puro. Líneas y texto en negro y gris oscuro. Sans-serif limpia (monospace para nombres de nota si hace falta). Sin sombras, gradientes, texturas ni adornos. Color solo como diferenciador funcional. Etiquetas en español con el cifrado americano entre paréntesis: "Sol (G)".

| Color | Para qué |
|---|---|
| 🔴 Rojo `#d23333` | dedo 1 · la nota que cambia · señalar |
| 🟠 Naranja `#e8820c` | dedo 2 · acorde menor |
| 🟢 Verde `#2e9e44` | dedo 3 · acorde mayor resaltado · correcto · zona cómoda de la voz |
| 🔵 Azul `#2b6cb0` | dedo 4 · cuerda al aire resaltada · rango total de la voz |
| 🟣 Morado | capo · cejilla |
| ⚫ Gris | X (cuerda que no se toca) · marcadores de traste |

## 3. Convenciones

**Diagrama de acorde** (vertical, como la guitarra parada de frente):
- 6 líneas verticales = cuerdas, de izquierda a derecha **6ª (Mi grave) → 1ª (Mi aguda)**.
- Líneas horizontales = trastes; la de arriba, gruesa, es la cejuela. Si empieza más arriba del mástil, sin cejuela gruesa y con el número de traste a la izquierda.
- Punto = dónde pisa un dedo, con el número del dedo dentro. **X** arriba = no se toca · **O** arriba = al aire. Cejilla = barra que cruza varias cuerdas con el número 1.
- Debajo o arriba, el nombre: "Sol (G)".

**Dedos:** mano izquierda 1 índice · 2 medio · 3 anular · 4 meñique (el pulgar no se numera). Mano derecha (desde M8): p pulgar · i índice · m medio · a anular.

**Mástil horizontal** (mapas de notas, M5, M7, M8): cejuela a la izquierda, 6ª cuerda **abajo**, marcadores de traste (3, 5, 7, 9, 12) como puntos grises.

**TAB:** 6 líneas, la 1ª cuerda **arriba**; números = trastes.

**Teclado** (canto y teoría de notas): teclas blancas y negras reales, los Do numerados (Do3, Do4…); rango total en azul y zona cómoda en verde.

## 4. Cómo se generan

1. **Acordes:** `fundamentos/_generador.js` (Node puro, sin dependencias). Para un acorde nuevo, agregar su línea a `ACORDES` (va al mazo Anki) o a `VARIANTES` (solo apuntes) y correr `node fundamentos/_generador.js`. Escribe los SVG en `fundamentos/guitarra/m1/img/`.
2. **Otros diagramas:** escribir el `.svg` a mano, con geometría exacta, en `fundamentos/<carril>/mN/img/`.
3. **Rasterizar a PNG** con `sharp` (`density: 200`) para que se vea en cualquier visor. El `.svg` es la fuente; el `.png` es lo que se embebe. Si `sharp` no está instalado, instalarlo en una carpeta temporal fuera del repositorio.

**Nombres:** `claseNN-<concepto>.svg` si nace de una clase · `<concepto>.svg` si nace del mapa · `acorde-<nombre>.svg` para acordes. Minúsculas, guiones, sin tildes.

**Embebido** (después del párrafo que explica; nunca dentro del callout de Repaso):

```markdown
![Diagrama del acorde Mim: dedos 2 y 3 en el traste 2, cuerdas 5ª y 4ª.](img/acorde-mim.png)
*Mim: dos dedos, suenan las seis cuerdas.*
```

Si compara, tabla de imágenes lado a lado con pie en cursiva debajo de cada una.

## 5. Checklist antes de integrar

- [ ] Cuerdas en el orden correcto (6ª a la izquierda en vertical · abajo en horizontal · abajo en TAB).
- [ ] Cada punto en la cuerda y el traste correctos; número de dedo correcto (1-4, sin pulgar).
- [ ] X y O correctos.
- [ ] Nombre con cifrado americano: "Sol (G)".
- [ ] Fondo blanco, color solo funcional, cero adornos.
- [ ] Pasa el test anti-muleta: estático, sin secuencia.
- [ ] Si va en una práctica: muestra qué practicar, nunca una forma que deba salir de memoria.
- [ ] Existe el `.png`, y el texto alternativo describe la imagen completa.
