# 📝 NOTAS — Ideas y adiciones centralizadas

> **Propósito:** un solo lugar para volcar ideas, dudas y adiciones sin romper el flujo ni sobre-construir. Si algo no es de ahora, va aquí, no se construye.

---

## Decisiones resueltas

- ✅ **2026-09-11 — Todo ejemplo visual se muestra, no se cuenta (regla del usuario):** si un apunte nombra una forma, posición o comparación, lleva sus diagramas, lado a lado cuando compara. En CLAUDE.md, `fundamentos/00_indice.md` y `_estilo-visual.md`. El generador ya soporta cejilla y traste inicial.
- ✅ **2026-09-08 — El apunte es atemporal, no un chat (regla del usuario):** nada que solo tenga sentido en el hilo del día vive en un apunte — solo la lección. Personalización pedagógica sí; conversación no. En CLAUDE.md y `fundamentos/00_indice.md`. Apuntes existentes auditados y limpiados.
- ✅ **2026-09-08 — Niveles de avance en las prácticas (pedido del usuario):** cada práctica prescribe **3 niveles con rutina exacta** (🔵 mínimo / 🟢 natural / 🔥 motivado): qué, cuántas repeticiones, minutos por parte, metrónomo sí/no. Sin rangos vagos. Aplicado a las 2 prácticas de la clase 1 y a la plantilla.
- ✅ **2026-09-05 — Formato de prácticas (adición del usuario):** cada práctica trae objetivo en lenguaje claro ("mira lo que estoy mejorando"), tiempo **mínimo** (días sin ganas) y **natural**, y el gráfico SVG de qué practicar. Prácticas **lado a lado con su apunte** en `fundamentos/<instrumento>/mN/` con prefijo `claseNN_` (sin carpeta `ejercicios/`). Los ejercicios del profe son propuestas mejorables sin desviarse ("Afinación del instructor"). Enmienda en `decision_temario_mapa_cancion_vehiculo.md` §2.
- ✅ **2026-09-05 — Clase 1 procesada:** apuntes y prácticas en `fundamentos/guitarra/m1/` y `m3/`. Sílabo Básico 1 mapeado (`silabo_academia_basico1.md`); hallazgo clave: **clase 13 = selección del tema del concierto** → intentar que sea la worship en curso.
- ✅ **2026-08-28 — Rediseño completo: guitarra + academia + temario.** El piano se archivó (`_archivo/piano/`). Diagnóstico y decisiones en `sistema/decisiones/decision_guitarra_academia_primero.md` y `decision_temario_mapa_cancion_vehiculo.md`. El mapa en `contexto/plan_estudio/temario_guitarra.md`.
- ✅ **Canción única del arranque:** *No hay lugar más alto* (Miel San Marcos). Lista de espera en `repertorio/00_indice.md`.
- ✅ **Sin fecha dura.** La sustituye la presentación de fin de nivel de la academia.
- ✅ **Bloques sin ping-pong.** El silencio del usuario = está tocando.
- ✅ Oído Perfecto reemplazada por Anki (2026-07-10). Vigente.
- ✅ Estado de sesión + plan guiado (2026-07-10). Vigente, ahora con marcador del mapa.

## Pendientes del usuario (no del sistema)

- [X]  Respuestas de la academia (2026-08-28). Resumen en `practica/00_indice.md`.
- [X]  **Brochure/sílabus** (prometido para hoy) → pegarlo al agente → mapear sus 4 módulos sobre el temario (como `silabo_curso_aws_dva.md` en TESLA). Ajustar "Lo que NO entra": **la partitura entra por carril academia**.
- [X]  Matrícula (S/50).
- [X]  **Comprar capo.** Instalar afinador.
- [ ]  Pedir a la banda de la iglesia la lista de 5-6 canciones que más repiten.
- [ ]  **Medir el rango vocal con una app** (tu rango = de tu nota más grave a tu más aguda cómodas; desbloquea el tono de *Hosanna* y de todo el repertorio de canto). **Propuesta 09-14, en orden:** ① **Vocaberry** (Android, gratis; trae test de rango guiado y te da el resultado en notas) · ② **Sing Sharp** (test de rango similar) · ③ manual: piano de app + Vocal Pitch Monitor grabándote. Regla: calentar antes (aire/trino 🔵) y **no forzar el agudo** — la app mide lo cómodo de hoy, no lo que se alcanza apretando. Reportar el resultado tal cual lo dé la app.
- [ ]  Decidir la **3ª canción del profesor de canto**: *Al que está sentado en el trono* (Brunet) o *10,000 Razones* (esp.) — ambas suman doble (ya están en la lista de guitarra).
- [ ]  **Apps de canto** (el profe recomendó varias; se decide aparte): propuesta del 09-14 → **Moises** (pista sin voz + cambio de tono) y **AnkiDroid** (oído y acordes). Vocal Pitch Monitor solo para verificar grabaciones, nunca en vivo.
- [ ]  Importar el mazo Anki de acordes de guitarra.

## Pendientes del sistema (cuando toque, no antes)

- **Sesión 0** → ajustar M1 con lo que esté vivo.
- ~~Cuando entren los acordes~~ → **Hecho 2026-09-11** (clase 2): apuntes de acorde/diagramas/8 acordes, `_generador.js` con `chord()`, mazo nuevo `sistema/herramientas/anki-acordes/` (8 acordes). Pendiente del usuario: importarlo.
- ✅ **2026-09-14 — Canto integrado como segundo mapa (aprobado y ejecutado):** `fundamentos/guitarra/` + `fundamentos/canto/` · dos marcadores · dos academias · dos estados por pieza · `decision_canto_segundo_mapa.md` (retira el veto "canto en paralelo"). Clases 1-2 de canto procesadas; repertorio del profesor registrado.
- **M4.1** → confirmar el capo de *No hay lugar más alto* contra la grabación (4 o 2).
- **Primer reporte del martes** → empezar a llenar la tabla de cobertura del temario con lo real.

## Para más adelante (NO ahora)

- **Guitarra de acero** cuando entre a la banda (M9). No antes.
- **Canto:** después de que los acordes salgan sin pensar. Criterio de transición a definir entonces.
- **Repaso espaciado de piezas** cuando haya >1 de memoria.
- **Extender el mapa** más allá del nivel base con lo que Básico II y la banda pidan.
- **Reusar texto de la era piano** (`02_cifrado`, `04_acorde-mayor`, `05_ritmo`) al escribir M1 y M3.

## Ideas sueltas

- Cuando quiera aprender una nueva cancion,  usar la IA para crear un sistema de practica secuencial optimo , una serie de niveles de practica secuenciales, terminas uno y avanzas otro hasta que en nivel final  toques la cancion completa, ahora falta definir en que se basa para definir cada nivel, cada nivel tiene un objetivo, ademas que se generan guias como:
  - Generar el diagrama de acordes musicales que usa la cancion - Grafico
  - etc

---

> **Regla:** si una idea no aporta al módulo en curso o no pasa el filtro del manual, vive aquí hasta que le toque. Avanzar > pulir.
