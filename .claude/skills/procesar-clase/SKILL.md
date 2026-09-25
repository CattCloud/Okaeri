---
name: procesar-clase
description: Procesar lo que pasó en una clase de la academia de Okaeri (guitarra los martes, canto los jueves) — el reporte del usuario, la tarea del profesor o una falta. Usar cuando el usuario cuenta qué vieron en clase, comparte notas o fotos de la clase, o avisa que faltó.
---

# Procesar una clase de la academia

Reglas que rigen: R4 (la clase manda la ruta, la tarea va primero) · F14 (sin huecos) · R6 · R7 · R8 (lo físico lo manda el profesor) · R3 (faltas sin reproche).

## Quién manda en qué

| Territorio | Manda | Qué hace Okaeri |
|---|---|---|
| Lo que la clase enseña: técnica, acordes, rasgueo, arpegio, respiración, afinación | La academia, que va adelante | Consolida y profundiza el resto de la semana. En 2 h de clase grupal se ve el 20% de un tema; el 80% son los otros días |
| Lo que la clase no toca: repertorio worship, memoria (M4), cantar y tocar a la vez, la banda, el porqué | Okaeri | Dirige |

## El ciclo

| Carril | Clase | Reporte y proceso |
|---|---|---|
| Guitarra | martes 8-10 pm | miércoles |
| Canto | jueves 8-10 pm | viernes |

## Pasos

1. **Reporte:** tres líneas (qué se vio, qué tarea dejaron, qué no se entendió). No es un examen: se pregunta solo lo que falte y cambie el plan.
2. **Registrar la clase** en la tabla del carril en `practica/00_indice.md` y en el "Registro real" de su sílabo (`contexto/plan_estudio/silabo_academia_*.md`). Si el profesor corrigió algo físico, anotarlo: manda sobre cualquier apunte.
3. **Marcar 🏫** en el temario del carril, en el índice y en la sección: visto en clase, sin evaluar. Pasa a ✅ solo cuando pasa su evaluación.
4. **Auditar y presentar, antes de escribir nada (F14).** Listar los conceptos que tocó la clase y, para cada uno, sus prerrequisitos: explicado (con enlace) o faltante. Presentar al usuario la lista —qué tocó la clase, qué falta y en qué orden recomiendas verlo— y esperar su OK. Lo que la clase abrió y falta va a la **cola de conceptos** de `estado_actual.md`. No se genera material por haber recibido el reporte.
5. **Material, solo con el OK.** Primero la práctica de la tarea del profesor con `escribir-practica` (va primero) y, de a **un concepto por sesión**, el que el usuario elija de la cola con `escribir-apunte` (con su esquema aprobado antes). Diagramas con `crear-diagrama`. Los ejercicios del profesor son propuestas: si hay una práctica mejor para el mismo objetivo, se plantea como "Afinación del instructor", sin desviarse del objetivo.
6. **Reescribir "Semana en curso"** en `sistema/estado/estado_actual.md`: la tarea del profesor **primero**, después el concepto en cola. Actualizar la cola y "Última clase reportada". Si un día solo hay 15 minutos, gana la tarea.
7. **Revisión:** delegar lo escrito al revisor (`revisor-okaeri`) y corregir lo que confirme.
8. **Cerrar** con 2-3 líneas: qué se registró, qué quedó en la cola y qué toca esta semana.

## Casos

- **La clase abre una serie de conceptos:** se presentan todos en la lista del paso 4 y quedan en la cola; se escribe uno por sesión, nunca la serie entera de golpe.
- **Falta un prerrequisito que ninguna sección del temario nombra:** se agrega al mapa (en la lista de "Conceptos" del módulo que lo necesite primero). Se presenta el cambio (R10) y se anota en `NOTAS.md`.
- **La clase se desvía mucho del mapa:** se ajusta el mapa, no la clase. Se presenta el cambio (R10) y se anota el porqué en `NOTAS.md`.
- **El usuario faltó:** se registra la falta sin drama (R3). El reporte siguiente incluye "qué me perdí" (preguntado al profesor o a un compañero) y el apunte cubre el hueco.
- **La academia anuncia la presentación de fin de nivel:** fecha en `practica/00_indice.md`. Es el objetivo visualizable del carril.
- **El sílabo no trae detalle:** se reconstruye clase a clase en el "Registro real"; no se espera un documento de la academia.

## Qué no se le pide a la academia

Que adapte su repertorio (es carril de Okaeri) · que mida la memoria (M4 es de Okaeri) · que reemplace el registro (asistir no es practicar).
