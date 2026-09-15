---
name: escribir-apunte
description: Escribir o corregir un apunte de Okaeri (teoría que se lee lejos del instrumento) o una nota de consulta (_consulta-*). Usar al explicar un concepto nuevo de una clase o del temario, al responder una duda del usuario que debe quedar archivada, o al corregir un apunte existente.
---

# Escribir un apunte

Las reglas de contenido están en `fundamentos/AGENTS.md` (F1-F12). Este archivo solo da los pasos.

## Pasos

1. **¿Apunte, práctica o consulta?** Si se puede hacer sin el instrumento, es apunte (F2). Si es una duda suelta sobre la voz o sobre la guitarra como objeto, va a su consulta (`canto/_consulta-voz.md` o `_consulta-instrumento.md`), con fila en su índice de preguntas y la respuesta escrita (F11).
2. **¿Ya existe?** Buscar en `fundamentos/00_indice.md` y con grep. Un concepto se escribe una vez y se enlaza (F10); si existe, se amplía ese.
3. **Ubicación y nombre** (F1): `fundamentos/<carril>/mN/claseNN_<tema>.md` o `apunte_N.N_<tema>.md`, en el módulo donde el concepto aparece por primera vez.
4. **Copiar `plantilla.md`** (en esta carpeta) y escribir: la definición central en negrita arriba, secciones que se abren una a otra, ejemplos del repertorio del usuario, cierre con `📋 Repaso en una pantalla`.
5. **Todo ejemplo visual se muestra** (F8): si el apunte nombra una forma, una posición o una comparación, lleva diagramas (lado a lado si compara), hechos con `crear-diagrama`.
6. **Índice:** fila en `fundamentos/00_indice.md`.
7. **Revisar antes de cerrar:**
   - [ ] Atemporal (F9): nada de la conversación del día, ni disculpas, ni comentarios sobre el sistema.
   - [ ] Cada término técnico está definido aquí o enlazado (R6).
   - [ ] Sin frases de efecto (R7).
   - [ ] Cada imagen existe, tiene texto alternativo y pie.
8. **Delegar la revisión** al revisor (`revisor-okaeri`) y corregir lo que confirme.
