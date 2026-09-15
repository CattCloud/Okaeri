# Decisión: arquitectura de reglas — cada regla en un solo lugar, cargada en el momento

> **Estado:** vigente. **Fecha:** 2026-09-15. **Aprobada por el usuario:** camino A (las cuatro fases).

## Contexto

Los agentes olvidaban reglas del sistema. El diagnóstico del 2026-09-15 encontró que el problema no era el contenido sino su distribución:

- Reglas copiadas en muchos archivos (el piso de 15 minutos en 17; la muleta en 22), con copias que se contradecían: a la pregunta "¿el canto tiene mapa propio?", cuatro archivos daban cuatro respuestas.
- Un `CLAUDE.md` de 14.7 KB que mezclaba reglas, mapa de archivos y un estado ya desactualizado.
- Plantillas sin las reglas agregadas después: 4 de 4 prácticas sin la sección "Qué sigue".
- Ningún control automático: todo dependía de la memoria del agente, que se pierde al compactar una conversación larga.
- Una corrección del usuario guardada solo en la memoria local del agente, fuera del repositorio.

## Decisión

Seis piezas, sobre estándares abiertos (`AGENTS.md`, Agent Skills) y funciones documentadas de Claude Code:

1. **Constitución:** `AGENTS.md`, con un tope de 12 reglas, importada por `CLAUDE.md`.
2. **Reglas de carpeta:** `fundamentos/`, `repertorio/` y `practica/` con su `AGENTS.md` (y un `CLAUDE.md` de una línea que lo importa). Se cargan al trabajar en esa carpeta.
3. **Procedimientos:** `.claude/skills/` — `sesion`, `procesar-clase`, `escribir-practica`, `escribir-apunte`, `crear-diagrama`, `nueva-regla`, con sus plantillas dentro.
4. **Guardianes:** hooks en `.claude/settings.json`. Entregan el estado al iniciar y al compactar, revisan lo medible al guardar y recuerdan lo pendiente antes de terminar. Modo inicial: avisar.
5. **Revisor:** subagente `.claude/agents/revisor-okaeri.md`, con contexto limpio y solo lectura.
6. **Estado único y registro de decisiones:** `estado_actual.md` y esta carpeta.

Decisiones pequeñas del usuario: compatibilidad con otros agentes vía `AGENTS.md`: **sí** · guardianes: **avisar primero** y bloquear después de dos semanas sin avisos falsos · aplicar la misma arquitectura en **TESLA**.

## Qué cambió de lugar

| Antes | Ahora |
|---|---|
| "Reglas de operación" de `CLAUDE.md` | `AGENTS.md` (R1-R12) y reglas de carpeta |
| `sistema/prompts/integracion_academia_sistema.md` | skill `procesar-clase` |
| Protocolo al final de `estado_actual.md` | skill `sesion` |
| `fundamentos/_estilo-visual.md` | skill `crear-diagrama` |
| `fundamentos/_plantillas/plantilla_practica.md` | `.claude/skills/escribir-practica/plantilla.md` (+ plantilla de apunte nueva) |
| Reglas de `fundamentos/00_indice.md` | `fundamentos/AGENTS.md` (F1-F12) |
| `contexto/okaeri-*.md` (diseño de la era piano) | `_archivo/diseno_original/` |
| Memoria del agente "instructor independiente" | R6, R7 y R8 |
| Estado copiado en `CLAUDE.md`, README y perfil | solo `estado_actual.md` |
| `sistema/manual_okaeri.md` con reglas repetidas | el porqué, citando reglas por número |

## Consecuencias

- Lo que se carga en toda conversación no crece con el contenido.
- Toda regla nueva entra por `nueva-regla`, que la ubica, la aplica hacia atrás y la suma al guardián si es medible.
- Guardianes y revisor son de Claude Code; otros agentes siguen `AGENTS.md` y los procedimientos, sin esos controles.
- Fase 4 (con el uso, no antes): procedimientos para momentos que todavía no ocurrieron, como agregar una canción nueva al mapa.
