---
name: escribir-apunte
description: Escribir o corregir un apunte de Okaeri (teoría que se lee lejos del instrumento) o una nota de consulta (_consulta-*). Usar al explicar un concepto nuevo de una clase o del temario, al responder una duda del usuario que debe quedar archivada, o al corregir un apunte existente.
---

# Escribir un apunte

Las reglas de contenido están en `fundamentos/AGENTS.md` (F1-F14). Este archivo solo da los pasos.

## Pasos

1. **¿Apunte, práctica o consulta?** Si se puede hacer sin el instrumento, es apunte (F2). Si es una duda suelta sobre la voz o sobre la guitarra como objeto, va a su consulta (`canto/_consulta-voz.md` o `_consulta-instrumento.md`), con fila en su índice de preguntas y la respuesta escrita (F11).
2. **¿Ya existe?** Buscar en `fundamentos/00_indice.md` y con grep. Un concepto se escribe una vez y se enlaza (F10); si existe, se amplía ese.
3. **Auditar prerrequisitos (F14).** Listar lo que hay que entender para comprender este concepto y marcar cada uno: explicado (con enlace) o faltante. Si falta uno, se presenta al usuario y se escribe **antes**, como su propio apunte; este espera. Un apunte, un concepto: si al explicarlo aparece un segundo concepto grande, es otro apunte.
4. **Presentar el esquema y esperar el OK del usuario:** 3-5 líneas con el concepto, sus prerrequisitos y los ejemplos que usará. No se escribe antes.
5. **Ubicación y nombre** (F1): `fundamentos/<carril>/claseNN/claseNN_<tema>.md`, en la carpeta de la clase que lo abrió; si no nació de una clase, `fundamentos/<carril>/base/apunte_N.N_<tema>.md`.
6. **Copiar `plantilla.md`** (en esta carpeta) y escribir: debajo del título, la línea «Antes de esto necesitas: …» con enlaces; luego la definición central en negrita, secciones que se abren una a otra, ejemplos del repertorio del usuario, cierre con `📋 Repaso en una pantalla`.
7. **Todo ejemplo visual se muestra** (F8): si el apunte nombra una forma, una posición o una comparación, lleva diagramas (lado a lado si compara), hechos con `crear-diagrama`.
8. **Índice:** fila en `fundamentos/00_indice.md`, dentro de la sección de su clase.
9. **Revisar antes de cerrar:**
   - [ ] Abre con «Antes de esto necesitas: …» y cada enlace existe (F14).
   - [ ] Atemporal (F9): nada de la conversación del día, ni disculpas, ni comentarios sobre el sistema.
   - [ ] Cada término técnico está definido aquí o enlazado (R6).
   - [ ] Sin frases de efecto (R7).
   - [ ] Cada imagen existe, tiene texto alternativo y pie.
10. **Delegar la revisión** al revisor (`revisor-okaeri`) y corregir lo que confirme.
