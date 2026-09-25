---
name: sesion
description: Abrir, retomar o cerrar una sesión de práctica de Okaeri (guitarra o canto), y cerrar un módulo con su evaluación. Usar cuando el usuario va a tocar o cantar, vuelve después de una pausa o una ausencia, dice que terminó, o cuenta que algo no le sale.
---

# Sesión de práctica

Reglas que rigen: R1 (estado primero) · R3 (sin reproche) · R4 (tarea primero) · R5 (bloques) · R9 (piso y foco).

## 1. Leer el estado

`sistema/estado/estado_actual.md` → el bloque "Marcador" del carril (última clase, evaluación en curso, cola de conceptos), "Semana en curso" y "Sesión en curso".

| Estado de la sesión | Qué se hace |
|---|---|
| `PAUSADA` o `EN-CURSO` | Retomar en el bloque marcado, con un repaso de una frase. Conversación cerrada ≠ sesión terminada. No saltar. |
| `SIN-SESION` o `CERRADA` | Abrir una sesión nueva (paso 2). |

Si pasó más de una semana sin sesión registrada: nombrar el hecho con fechas exactas, abrir la puerta y retomar aquí (R3).

## 2. Abrir

1. **Carril:** guitarra o canto. Si no está claro, una pregunta con las dos alternativas.
2. **Orden fijo:** la tarea del profesor de ese carril → la evaluación en curso → el concepto que sigue en la cola.
3. **Escribir en "Sesión en curso":** estado `EN-CURSO`, carril, fecha y los bloques del día.
4. **Entregar el primer bloque completo** (paso 3) y dejar tocar.

## 3. El bloque completo

Un bloque trae, en este orden:

1. **Objetivo en lenguaje claro:** qué mejora y cómo lo va a notar.
2. **Los 3 niveles del día** (🔵 mínimo / 🟢 natural / 🔥 motivado), con rutina exacta: qué, cuántas repeticiones, minutos por parte, metrónomo sí o no. Cada nivel incluye al anterior.
3. **Explicación corta**, con todo término definido (R6).
4. **El gráfico** de qué practicar, si lo hay.
5. **Cómo suena** cuando está bien.
6. **Los 3 errores típicos** con su arreglo.
7. **Hasta cuándo**, y **qué sigue**.

Si la práctica ya existe en `fundamentos/`, el bloque la enlaza y dice qué nivel hacer; no la copia en el chat. Si no existe y el ejercicio se va a repetir, se crea con `escribir-practica`.

## 4. Mientras toca

- El silencio del usuario significa que está tocando. No se pregunta por cada movimiento.
- Al terminar un bloque, marcarlo en "Bloques del día".
- Si el usuario no responde en horas o días, la sesión pasa sola a `PAUSADA`, con una nota de dónde quedó.
- Si dice que algo no sale: diagnosticar con los 3 errores de la práctica. Si el problema es físico, anotarlo como pregunta para el profesor (R8).

## 5. Cerrar (solo con confirmación explícita del usuario)

1. "Sesión en curso" → `CERRADA`.
2. Registrar según `practica/AGENTS.md`.
3. Si un concepto pasó su evaluación: su marca ✅ en el temario, y actualizar "Evaluación en curso" y la cola en `estado_actual.md`.

## 6. Cerrar un módulo

1. Correr la **Evaluación** del módulo tal como está escrita en el temario del carril.
2. Anotar el resultado tal cual: salió / a medias / no salió.
3. **Aquí sí se pregunta:** ¿avanzamos o repetimos?
4. Si avanza: módulo ✅ en el índice del temario, y "Evaluación en curso" apunta en `estado_actual.md` a la siguiente evaluación pendiente.
