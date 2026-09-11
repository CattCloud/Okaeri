# OKAERI — Plan de Implementación V1

> ⚠️ **Documento de la era piano (2026-06).** Los **principios** (anti-muleta, tres capas, dimensiones, método manda) siguen vigentes; los **ejemplos, el instrumento y la implementación** están archivados. Lo vigente desde 2026-08-28: `contexto/plan_estudio/temario_guitarra.md` · `sistema/decisiones/decision_guitarra_academia_primero.md` · `decision_temario_mapa_cancion_vehiculo.md`. No reescrito a propósito (no sobre-construir).

> Documento operativo para construir Okaeri desde cero.
> Pensado para ejecutarse con un agente IA (Claude Code en terminal), espejando la arquitectura de TESLA y Oráculo.
> **Documentos hermanos:** `okaeri-base.md` (el QUÉ y PORQUÉ) · `okaeri-metodologia.md` (el CÓMO practicar) · `okaeri-herramientas.md` (el CON QUÉ) · `okaeri-errores-comunes-musica.md` (la checklist preventiva). Este documento define el CÓMO construir y el ORDEN.

> **Constelación:** TESLA (estudio) · Agatha (gestión de vida) · ARCA (metas) · Oráculo (inglés) · **Okaeri (música)**.

---

## Índice

- [0. Cómo usar este documento](#0-cómo-usar-este-documento)
- [1. Lo que hace distinto a Okaeri (vs Oráculo)](#1-lo-que-hace-distinto-a-okaeri-vs-oráculo)
- [2. El ciclo de vida de Okaeri](#2-el-ciclo-de-vida-de-okaeri)
- [3. Arquitectura: qué hereda](#3-arquitectura-qué-hereda)
- [4. Estructura de carpetas objetivo](#4-estructura-de-carpetas-objetivo)
- [5. Plan de construcción por pasos (Fase Cimientos)](#5-plan-de-construcción-por-pasos-fase-cimientos)
- [6. Especificación de los archivos a crear](#6-especificación-de-los-archivos-a-crear)
- [7. Qué NO se construye en V1](#7-qué-no-se-construye-en-v1)
- [8. Criterio de "listo para la primera práctica"](#8-criterio-de-listo-para-la-primera-práctica)
- [9. Qué viene después (la ruta de las primeras 8 semanas)](#9-qué-viene-después-la-ruta-de-las-primeras-8-semanas)
- [10. Notas para el agente](#10-notas-para-el-agente)

---

## 0. Cómo usar este documento

El alcance de V1 es **dejar el sistema listo para empezar a practicar y registrar**, no construir todo. Okaeri arranca en modo **autodidacta-guiado** (sin profesor los primeros 1-2 meses), así que V1 debe dejar lista la estructura mínima para que la práctica diaria empiece con guía y se registre.

**Orden de lectura para el agente:**
1. Este documento (plan).
2. `okaeri-base.md` (diagnóstico, "para qué", las 7 dimensiones, el papel de director de ruta, qué NO hace).
3. `okaeri-metodologia.md` (cómo se practica cada dimensión).
4. `okaeri-herramientas.md` (qué herramientas y su rol).
5. `okaeri-errores-comunes-musica.md` (la checklist preventiva).
6. Si está disponible, TESLA y Oráculo como **molde arquitectónico** (estructura, convenciones, CLAUDE.md) — no para copiar contenido.

**Regla de oro de V1:** construir poco, bien, y dejar que la práctica real dicte el resto. Y la regla anti-muleta gobierna todo el sistema.

---

## 1. Lo que hace distinto a Okaeri (vs Oráculo)

El agente debe internalizar esta diferencia antes de construir (está en §3.bis del base):

- **Oráculo es consolidador:** viene *después* de la clase de inglés; la academia define el currículum (CEFR), el sistema fija.
- **Okaeri es director de ruta + consolidador:** el sistema **lleva la estructura y la ruta** (la música no tiene un CEFR universal). El profesor entra *después* (mes 2-3) para corregir el cuerpo y dar accountability, no para definir qué se aprende.

**Implicación para la construcción:** Okaeri debe poder **proponer y dirigir una ruta de práctica** desde V1, porque durante el arranque autodidacta es la única guía. Esto es más responsabilidad que la que cargaba Oráculo. La calidad de la ruta importa más aquí.

**El principio anti-muleta** (del base §4) gobierna todo: nada se construye de forma que induzca dependencia de "pista que cae". El criterio de "aprendido" es: tocar sin app, de memoria, solo.

---

## 2. El ciclo de vida de Okaeri

| # | Etapa | Qué hace | Estado en V1 |
|---|---|---|---|
| 1 | **Practicar** | Sesiones diarias guiadas (técnica, lectura, teoría, oído, repertorio) con registro | 🎯 **Se habilita en V1** |
| 2 | **Consolidar** | Memorizar repertorio, repaso espaciado de piezas, activar oído/teoría | ⬜ Arranca con la práctica real |
| 3 | **Corregir** | Entrada del profesor (mes 2-3): técnica física, interpretación, accountability | ⬜ Post-fecha-dura |
| 4 | **Expandir** | Más repertorio, canto (futuro, sobre la base del piano) | ⬜ Más adelante |

**V1 habilita la etapa 1 (Practicar)**: deja lista la estructura para que la práctica diaria guiada empiece y se registre, con la ruta inicial de las primeras semanas definida.

---

## 3. Arquitectura: qué hereda

Okaeri replica los patrones probados de TESLA(C:\cerebro\mi-sistema-estudio) y Oráculo:

| Patrón | Cómo se aplica en Okaeri |
|---|---|
| Separación motor / output (`sistema/` vs output) | `sistema/` (motor) vs `practica/` y `repertorio/` (output) |
| Índice como fuente única de control | `00_indice.md` global de repertorio + estado por pieza |
| Prompts/rutas por etapa | La ruta de práctica vive en `sistema/`, se llena con el uso |
| Checklist preventiva (como L1 en Oráculo) | `referencia/errores-comunes-musica.md` |
| Decisiones documentadas | `sistema/decisiones/` |
| Perfil que calibra al agente | `sistema/perfil/yo_musica.md` |
| CLAUDE.md raíz como contrato del agente | CLAUDE.md raíz de Okaeri |
| Markdown local, sin Notion, en VSCode | Idéntico |

---

## 4. Estructura de carpetas objetivo

Estructura **mínima de V1**. Espeja TESLA/Oráculo, solo con lo que se llena desde la primera semana.

```
okaeri/
├── CLAUDE.md                       ← contrato del agente
├── README.md                       ← qué es Okaeri, cómo se usa
├── NOTAS.md                        ← ideas y adiciones centralizadas
│
├── sistema/                        ← EL MOTOR
│   ├── manual_okaeri.md          ← principio rector + anti-muleta + qué NO hace
│   ├── perfil/
│   │   └── yo_musica.md            ← nivel, "para qué", repertorio, patrón de abandono
│   ├── referencia/
│   │   └── errores-comunes-musica.md   ← checklist preventiva
│   ├── ruta/
│   │   └── ruta_inicial.md         ← las primeras 8 semanas autodidacta-guiado
│   ├── herramientas/
│   │   └── config_herramientas.md  ← rol de Yousician (modo sheet), Oído Perfecto, MIDI, metrónomo
│   └── decisiones/
│       ├── decision_piano_primero.md
│       ├── decision_cifrado_primero.md
│       └── decision_autodidacta_luego_profesor.md
│
├── contexto/                       ← DOCUMENTACIÓN DEL PROYECTO
│   ├── okaeri-base.md
│   ├── okaeri-metodologia.md
│   ├── okaeri-herramientas.md
│   └── okaeri-plan-implementacion-v1.md
│
├── practica/                       ← REGISTRO DE PRÁCTICA (output diario)
│   ├── 00_indice.md                ← estado de constancia + accountability
│   └── _plantillas/
│       └── plantilla_sesion.md     ← molde de registro de sesión diaria
│
└── repertorio/                     ← LAS CANCIONES (output)
    ├── 00_indice.md                ← índice global: piezas + estado de memoria
    └── _plantillas/
        └── plantilla_pieza.md      ← molde del índice de cada pieza
```

**Nota:** `practica/` registra el día a día (la constancia, el accountability del arranque autodidacta). `repertorio/` registra las canciones y su estado de memoria (*aprendiendo* / *toco-con-ayuda* / *toco-de-memoria-solo*). En V1 no se crea ninguna pieza todavía — solo las plantillas. La primera pieza nace con la primera canción real.

---

## 5. Plan de construcción por pasos (Fase Cimientos)

Ejecutar en orden. Fase corta: una o dos sesiones, no semanas.

### Paso 1 — Estructura de carpetas
Crear el árbol de §4, solo lo que se llena en V1. No crear piezas de repertorio todavía.

### Paso 2 — Inicializar Git
`git init` en la raíz. Primer commit tras colocar los documentos en `contexto/`. Mensaje: `chore: cimientos de Okaeri V1`.

### Paso 3 — CLAUDE.md raíz
El contrato del agente. La pieza más importante. Ver §6.1. Molde: el CLAUDE.md de TESLA, adaptado al ciclo de vida de Okaeri y al rol de director de ruta.

### Paso 4 — manual_okaeri.md
Principio rector + el principio anti-muleta + las tres capas + qué NO hace el sistema (§7 del base). Ver §6.2.

### Paso 5 — perfil/yo_musica.md
Extraer del base (§1 y §2): nivel real, "para qué" (intérprete, no compositor), repertorio, el patrón de abandono, el plan autodidacta-luego-profesor. Ver §6.3.

### Paso 6 — referencia/errores-comunes-musica.md
Copiar el documento `okaeri-errores-comunes-musica.md` a la carpeta de referencia. Es referencia estática.

### Paso 7 — ruta/ruta_inicial.md
**La pieza más distintiva de Okaeri.** La ruta de las primeras 8 semanas autodidacta-guiado: qué practicar cada semana (refresco técnico, primeros acordes, primera canción simple, lectura, oído). Ver §6.4 y §9. Esto es lo que Oráculo no necesitaba (porque la academia ponía el currículum).

### Paso 8 — herramientas/config_herramientas.md
Cómo se usa cada herramienta y su rol: Yousician en modo sheet (con la advertencia anti-muleta), Oído Perfecto, el MIDI del Casio, el metrónomo integrado. Resumen operativo del documento de herramientas.

### Paso 9 — decisiones/
Tres archivos cortos documentando las decisiones clave (del §8 del base): piano primero, cifrado primero, autodidacta-luego-profesor.

### Paso 10 — plantillas
- `practica/_plantillas/plantilla_sesion.md` — molde de registro de sesión diaria. Ver §6.5.
- `repertorio/_plantillas/plantilla_pieza.md` — molde del índice de cada pieza con sus 3 estados de memoria. Ver §6.6.

### Paso 11 — índices globales
- `practica/00_indice.md` — estado de constancia y accountability (la fecha dura del profesor vive aquí).
- `repertorio/00_indice.md` — índice de todas las piezas y su estado (vacío de piezas en V1).

### Paso 12 — README.md
Entrada del repo: qué es Okaeri, el principio rector y el anti-muleta en una línea, el mapa de carpetas, cómo se usa.

### Paso 13 — Dry run
Simular una sesión de práctica ficticia con la plantilla, y registrar una pieza ficticia con sus estados. Verificar que el flujo no tiene fricciones. Borrar lo ficticio al terminar.

### Paso 14 — Fijar la fecha dura del profesor
En `practica/00_indice.md`, escribir la **fecha concreta** (~8 semanas desde hoy) en que se buscará profesor, pase lo que pase. No es opcional — es la salvaguarda contra el patrón de abandono (§6 del base).

### Paso 15 — Commit final de cimientos
`git add . && git commit -m "feat: Okaeri V1 listo para la primera práctica"`.

---

## 6. Especificación de los archivos a crear

### 6.1 CLAUDE.md (raíz)
Contrato del agente. Mínimo:
- **Qué es Okaeri:** sistema de aprendizaje musical (piano), enfocado en intérprete (tocar/cantar canciones que se aman), no compositor ni virtuoso.
- **Principio rector** (citado) + **principio anti-muleta** (citado).
- **El papel de director de ruta** (§3.bis del base): Okaeri lleva la estructura; el profesor corrige el cuerpo. Distinto de Oráculo.
- **El ciclo de vida** (§2) y qué etapa está habilitada (V1: Practicar).
- **Qué NO hace** (§7 del base): no usa muleta, no enseña composición, no persigue virtuosismo, no reemplaza al profesor para lo físico, no gamifica, no arranca canto en paralelo.
- **Mapa de archivos clave** (tabla ruta → propósito).
- **Reglas de operación:** leer el perfil antes de proponer ruta; pragmatismo > pulir; preguntas con alternativas concretas; anti-muleta siempre; tecnicismos musicales con su nombre, explicaciones en español.
- **Estado actual:** etapa habilitada, fecha dura del profesor, repertorio en curso (al inicio: ninguno).

### 6.2 manual_okaeri.md
Principio rector expandido + el principio anti-muleta (qué es la muleta, por qué falla, la regla de "aprendido = de memoria, solo, sin app") + las tres capas (mecánica/comprensión/expresión) + la lista de "lo que Okaeri NO hace".

### 6.3 perfil/yo_musica.md
Del base §1 y §2:
- Nivel real (base dormida; conoce algo sin estructura; tiempo sin tocar).
- Instrumento (Casio CT-X800 + MIDI).
- "Para qué": intérprete (tocar y eventualmente cantar canciones que ya existen), expresión emocional, NO composición, NO virtuosismo.
- Repertorio (worship, clásico/instrumental emotivo, lofi, pop/indie/rock en inglés).
- El patrón de abandono (sin estructura se pierde y se rinde) — el dato más importante.
- Historial: Yousician/Synthesia (muleta), pentagrama abandonado, canto de iglesia (base dormida).
- Plan de arranque: autodidacta-guiado 1-2 meses → profesor, con salvaguardas.

### 6.4 ruta/ruta_inicial.md
La ruta de las primeras 8 semanas (ver §9). Por semana: foco de cada dimensión, primera canción meta, qué herramienta se usa. Es la guía que sustituye al profesor durante el arranque. Debe respetar: cifrado primero, manos separadas, chunking, interpretación desde el inicio, anti-muleta.

### 6.5 practica/_plantillas/plantilla_sesion.md
Molde de registro de sesión diaria (≤3 min de llenado). Campos:
- Fecha y duración
- Qué se practicó (dimensiones tocadas)
- Pieza(s) trabajada(s) y avance
- Dificultades / dónde se trabó
- Errores notados (cruzar con la checklist preventiva)
- Sensación / motivación

### 6.6 repertorio/_plantillas/plantilla_pieza.md
Molde del índice de cada pieza — fuente única de control de esa canción. Campos:
- Nombre, artista, tonalidad, dificultad estimada
- Estado de memoria: `APRENDIENDO` / `TOCO-CON-AYUDA` / `TOCO-DE-MEMORIA-SOLO`
- Estructura (progresión de acordes / secciones) para memoria por comprensión
- Fragmentos (chunking): estado de cada uno
- Notas de interpretación (dinámicas, fraseo, rubato)
- Estado de repaso espaciado (última vez tocada de memoria, próxima)

---

## 7. Qué NO se construye en V1

- ❌ **Ninguna pieza de repertorio real** todavía — nace con la primera canción.
- ❌ **Sin integración técnica con Oído Perfecto / Yousician** (son apps externas independientes; el sistema las dirige por instrucción, no por API en V1).
- ❌ **Sin scripts de automatización ni MIDI capture** — V1 es estructura + plantillas + ruta, no lógica ejecutable.
- ❌ **Sin módulo de canto** — es etapa 4, futura.
- ❌ **Sin dashboards ni gamificación** — solo el registro honesto.
- ❌ **No se salta la ruta inicial hacia "piezas difíciles"** — respeta la progresión (error 5.4 de la checklist).

---

## 8. Criterio de "listo para la primera práctica"

- [ ] Estructura de carpetas creada (solo lo de V1).
- [ ] Git inicializado, con commits.
- [ ] `CLAUDE.md` raíz redactado, fiel al principio rector y anti-muleta.
- [ ] `manual_okaeri.md` con principio rector + anti-muleta + qué NO hace.
- [ ] `perfil/yo_musica.md` completo.
- [ ] `referencia/errores-comunes-musica.md` colocada.
- [ ] `ruta/ruta_inicial.md` con las primeras 8 semanas.
- [ ] `herramientas/config_herramientas.md` con roles y advertencia anti-muleta.
- [ ] Decisiones documentadas (3 archivos).
- [ ] Plantillas de sesión y de pieza listas y probadas en dry run.
- [ ] Índices globales de práctica y repertorio creados.
- [ ] README.md de entrada.
- [ ] **Fecha dura del profesor fijada** en `practica/00_indice.md`.
- [ ] Dry run ejecutado y validado.

Cuando todas estén marcadas → **empezar la primera sesión de práctica siguiendo la ruta inicial, y registrarla.**

---

## 9. Qué viene después (la ruta de las primeras 8 semanas)

Esbozo de la ruta inicial (a detallar en `ruta/ruta_inicial.md` durante la construcción). Es orientativa; el agente la afina con el usuario. Respeta cifrado-primero, manos separadas, chunking, interpretación desde el inicio, anti-muleta.

- **Semanas 1-2 — Refresco y fundamentos.** Postura y posición de manos (videos de referencia). Reactivar las notas en el teclado. Primeros 2-3 acordes mayores. Calentamiento diario. Oído: distinguir mayor/menor en Oído Perfecto. Empezar registro de práctica (accountability).
- **Semanas 3-4 — Primeros acordes y primera progresión.** Dominar 4-5 acordes comunes y cambiar entre ellos. Primera progresión (ej. I-V-vi-IV). Primera canción simple del repertorio (worship de 4 acordes suele ser ideal). Pentagrama: ubicar notas, dosis ligera. Oído: intervalos básicos.
- **Semanas 5-6 — Primera canción tocable.** Trocear (chunking) la primera canción, manos separadas → juntas. Ritmo: pulso estable, contar en voz alta. Interpretación: dinámicas simples desde ya. Teoría aplicada: por qué la canción suena así.
- **Semanas 7-8 — Consolidar y preparar al profesor.** Memorizar la primera canción (criterio: tocarla sin app, de memoria, sola). Segunda canción en proceso. Revisar el registro: qué se trabó, qué errores recurren. **Llegar a la fecha dura: buscar profesor** con un diagnóstico claro de qué se necesita.

El detalle semana a semana se construye en `ruta_inicial.md`. Después de la semana 8, entra el profesor (etapa 3: Corregir) y el sistema sigue dirigiendo la ruta.

---

## 10. Notas para el agente

- **Ruta de TESLA/Oráculo de referencia:** el usuario puede compartir las rutas a esos sistemas. Úsalas como **molde arquitectónico** (estructura, convenciones, CLAUDE.md), no como fuente de contenido.
- **Documentos base:** todo el QUÉ, el CÓMO practicar y el CON QUÉ están en `contexto/`. Ante dudas, esa es la fuente de verdad.
- **No sobre-construir.** Si la tentación es "construyo ya el módulo de canto / integro las apps por API / hago un dashboard" → detenerse. Eso es etapa posterior. V1 termina en las plantillas + la ruta inicial + la fecha del profesor.
- **El anti-muleta es sagrado.** Cualquier cosa que el sistema proponga debe construir comprensión y memoria, nunca dependencia de "pista que cae". Si una sugerencia induce muleta, descártala.
- **La fecha dura del profesor no se estira.** Es la salvaguarda contra el patrón de abandono del usuario. El sistema la vigila.
- **Preguntas con alternativas concretas, no abiertas.** Minimizar fricción.
- **El usuario ajusta en vivo.** Igual que en TESLA, el usuario revisa y ajusta cada archivo generado. No buscar la perfección en una pasada.
- **Pragmatismo:** avanzar > pulir.

---

> **Resumen de una línea:** V1 deja Okaeri listo para empezar a practicar y registrar, con la ruta inicial de 8 semanas y la fecha dura del profesor fijadas. Okaeri es director de ruta (no solo consolidador como Oráculo), el anti-muleta gobierna todo, y el esfuerzo va en la calidad de la ruta, no en integrar apps.
