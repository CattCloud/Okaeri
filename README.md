# Okaeri 🎸

> Sistema personal de aprendizaje musical. *おかえり — "bienvenido de vuelta".*

## El nombre

**Okaeri** (おかえり) es lo que en japonés se dice en la puerta al que regresa a casa. Viene de **Toni**, el lorito de casa: nunca le cortaron las alas, tenía el cielo entero disponible y aun así volvía al hombro — hasta el día que un susto lo hizo volar y no volver. El nombre no le pide a nadie que se quede; recibe al que vuelve. Contra un historial de empezar y abandonar, eso es lo que importa: **el sistema no reprocha la ausencia — le quita el costo a regresar.**

*(Historia completa en `contexto/okaeri-base.md` §0.)*

## Qué es

Okaeri estructura el aprendizaje musical para alguien que ama la música pero, sin guía clara, siempre terminaba abandonando. La meta no es el virtuosismo ni componer: es ser **intérprete** — tocar (y algún día cantar a la vez) las canciones que tocan el corazón. **Destino concreto: la banda de su iglesia.**

**Instrumento activo: guitarra clásica** (desde 2026-08-28). El piano fue el primer intento (2026-06 → 2026-08); está archivado en `_archivo/piano/`, con su diagnóstico.

**El principio rector:** aprender música de verdad —comprendiéndola y reteniéndola— al servicio de la **expresión**, no de la ejecución mecánica.

**El principio anti-muleta** (el corazón del sistema): una canción no está aprendida hasta tocarse **sin cifrado, de memoria, sola**. Nada de "pista que cae" tipo Guitar Hero — entrena reacción, no música.

**El modelo** (el de Cloud en TESLA): el **temario** es la columna —un mapa de 9 módulos ordenado por dependencia—; la **academia** (curso presencial, martes) cubre la técnica en vivo; **Okaeri** consolida entre martes y martes y lidera solo lo que la academia no toca: el repertorio worship, la memoria, la banda.

## Mapa de carpetas

```
okaeri/
├── CLAUDE.md                  ← contrato del agente (empezar por aquí)
├── README.md · NOTAS.md
│
├── contexto/
│   ├── plan_estudio/temario_guitarra.md   ← ⭐ EL MAPA (la pieza clave)
│   └── okaeri-*.md            ← diseño original (era piano; principios vigentes)
│
├── sistema/                   ← EL MOTOR
│   ├── estado/estado_actual.md      ← ⚡ dónde estás (marcador + plan semanal + bloque)
│   ├── prompts/integracion_academia_sistema.md  ← el temario manda, la clase alimenta
│   ├── perfil/yo_musica.md          ← quién es el usuario
│   ├── decisiones/                  ← por qué el sistema es como es
│   ├── herramientas/ · referencia/ · manual_okaeri.md
│
├── fundamentos/               ← teoría y práctica por módulo, lado a lado
│     m1/clase01_<tema>.md            (apunte — lejos de la guitarra)
│     m1/clase01_practica_<tema>.md   (práctica — con la guitarra)
├── repertorio/                ← las canciones y su estado de memoria
├── practica/                  ← registro de sesiones, constancia, academia
└── _archivo/piano/            ← la era piano (solo para reusar, nunca para operar)
```

## Cómo se usa

1. **Martes:** clase en la academia. Después, tres líneas al agente: qué se vio, qué tarea dejaron, qué no se entendió.
2. **Los otros días:** sesiones de mínimo 15 min, 3-4 veces por semana. Primero la tarea del profesor, luego la sección del mapa que toca. El agente entrega un bloque completo y uno se va a tocar; **el silencio significa que estás tocando**.
3. **Cada sesión se registra** en `practica/`. Una sesión puede partirse en días; `estado_actual.md` guarda dónde quedó.
4. **Cada canción** tiene ficha en `repertorio/` y pasa por `APRENDIENDO` → `TOCO-CON-AYUDA` → `TOCO-DE-MEMORIA-SOLO`. Solo la última cuenta. **Una canción a la vez.**

## Estado

**Rediseño 2026-08-28.** Marcador: Sesión 0 (diagnóstico) pendiente. Academia inicia 2026-09-01. Canción única: *No hay lugar más alto* (Miel San Marcos). Canciones de memoria: **0**.

---

*Constelación: TESLA (estudio) · Agatha (vida) · ARCA (metas) · Oráculo (inglés) · **Okaeri (música)**.*
