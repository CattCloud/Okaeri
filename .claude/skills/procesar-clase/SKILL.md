---
name: procesar-clase
description: Procesar lo que pasó en una clase de la academia de Okaeri (guitarra los martes, canto los jueves) — el reporte del usuario, la tarea del profesor o una falta. Usar cuando el usuario cuenta qué vieron en clase, comparte notas o fotos de la clase, o avisa que faltó.
---

# Procesar una clase de la academia

Reglas que rigen: R4 (el temario manda, la tarea va primero) · R6 · R7 · R8 (lo físico lo manda el profesor) · R3 (faltas sin reproche).

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
3. **Marcar 🏫** en el temario del carril, en el índice y en la sección. El marcador no se mueve.
4. **Material:** apunte de lo nuevo con `escribir-apunte`; práctica de la tarea con `escribir-practica`; diagramas con `crear-diagrama`. Los ejercicios del profesor son propuestas: si hay una práctica mejor para el mismo objetivo, se plantea como "Afinación del instructor", sin desviarse del objetivo.
5. **Reescribir "Semana en curso"** en `sistema/estado/estado_actual.md`: la tarea del profesor **primero**, después la sección del mapa. Si un día solo hay 15 minutos, gana la tarea.
6. **Revisión:** delegar lo escrito al revisor (`revisor-okaeri`) y corregir lo que confirme.
7. **Cerrar** con 2-3 líneas: qué se registró y qué toca esta semana.

## Casos

- **La clase adelanta un módulo posterior:** esa semana se practica la tarea **y** el paso propio del mapa; el marcador se queda. Cuando se llegue a ese módulo, ya estará medio andado.
- **La clase se desvía mucho del mapa:** se ajusta el mapa, no la clase. Se presenta el cambio (R10) y se anota el porqué en `NOTAS.md`.
- **El usuario faltó:** se registra la falta sin drama (R3). El reporte siguiente incluye "qué me perdí" (preguntado al profesor o a un compañero) y el apunte cubre el hueco.
- **La academia anuncia la presentación de fin de nivel:** fecha en `practica/00_indice.md`. Es el objetivo visualizable del carril.
- **El sílabo no trae detalle:** se reconstruye clase a clase en el "Registro real"; no se espera un documento de la academia.

## Qué no se le pide a la academia

Que adapte su repertorio (es carril de Okaeri) · que mida la memoria (M4 es de Okaeri) · que reemplace el registro (asistir no es practicar).
