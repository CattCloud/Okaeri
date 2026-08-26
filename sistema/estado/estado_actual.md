# 📍 Estado actual — Checkpoint de sesión

> **Qué es este archivo:** la memoria de corto plazo del sistema. Dice exactamente **dónde quedó el usuario** dentro de una sesión de práctica, para que cualquier conversación nueva retome desde ahí — no desde donde el agente asume.
>
> **Regla de oro:** una conversación cerrada NO significa una sesión terminada. Si el usuario se va a mitad de sesión, la sesión queda **PAUSADA** en el bloque exacto donde quedó. Al volver (aunque sea otro día), se retoma **ese bloque**, no el siguiente.
>
> **Quién lo actualiza:** el agente, al completar cada bloque y al pausar/cerrar. El usuario puede corregirlo a mano si el agente no llegó a actualizarlo (p.ej. cerró la app de golpe).

---

## Estado de la sesión

| Campo | Valor |
|-------|-------|
| **Estado** | `SIN-SESION` |
| **Fecha de la sesión** | — |
| **Plan que sigue** | `sistema/ruta/plan_semana_prueba.md` |
| **Día del plan** | Día 1 (pendiente de iniciar) |
| **Bloque actual** | — |
| **Paso dentro del bloque** | — |
| **Próxima acción al retomar** | Iniciar el Día 1 del plan de la semana de prueba, desde el Bloque 1 (Reconexión). |

**Estados posibles:** `SIN-SESION` (no hay sesión abierta hoy) · `EN-CURSO` (sesión abierta ahora) · `PAUSADA` (se fue a mitad de sesión; retomar en el bloque marcado) · `CERRADA` (sesión del día completada y registrada).

---

## Bloques del día (checklist viva)

> El agente la reescribe al **iniciar** cada sesión con los bloques del día según el plan, y va marcando. Si el estado es `PAUSADA`, aquí se ve exactamente qué falta.

- [ ] _(se llena al iniciar la sesión del día)_

---

## Notas de la pausa

> Si la sesión quedó `PAUSADA`: ¿en qué se estaba exactamente? ¿algo a medio entender que haya que re-explicar al volver?

_(vacío)_

---

## Protocolo (para el agente)

1. **Al inicio de TODA conversación de práctica:** leer este archivo PRIMERO. Nunca asumir que la sesión anterior terminó.
2. **Si el estado es `PAUSADA`:** retomar en el bloque/paso marcado, con un repaso de 1 frase de lo que se estaba haciendo. No saltar bloques pendientes.
3. **Si el estado es `CERRADA` o `SIN-SESION`:** ofrecer iniciar la sesión del día siguiente del plan.
4. **Al completar cada bloque:** marcar el checkbox y actualizar "Bloque actual".
5. **Antes de despedir al usuario o si dice "me voy" / "pausa":** actualizar estado a `PAUSADA` con notas de dónde quedó.
6. **Solo al confirmar el usuario que terminó:** estado `CERRADA` + crear/actualizar la nota de sesión en `practica/` + fila en `practica/00_indice.md`.
7. **Si el usuario desaparece sin avisar** (la conversación simplemente termina): en la próxima conversación, tratar la última sesión `EN-CURSO` como `PAUSADA` y confirmar con él dónde quedó.
