# Okaeri 🎸🎤

> Sistema personal de aprendizaje musical. *おかえり — "bienvenido de vuelta".*

## El nombre

**Okaeri** (おかえり) es lo que en japonés se dice en la puerta al que regresa a casa. Viene de **Toni**, el lorito de casa: nunca le cortaron las alas, tenía el cielo entero disponible y aun así volvía al hombro, hasta el día que un susto lo hizo volar y no volver. El nombre no le pide a nadie que se quede; recibe al que vuelve. Contra un historial de empezar y abandonar, eso es lo que importa: **el sistema no reprocha la ausencia; le quita el costo a regresar.**

*(Historia completa en `_archivo/diseno_original/okaeri-base.md` §0.)*

## Qué es

Okaeri estructura el aprendizaje musical de alguien que ama la música pero, sin guía clara, siempre terminaba abandonando. La meta no es el virtuosismo ni componer: es ser **intérprete** — tocar y cantar a la vez las canciones que tocan el corazón. **Destino concreto: la banda de su iglesia.**

**Dos carriles:** **guitarra clásica** (desde 2026-08-28) y **canto** (desde 2026-09). Cada uno tiene un temario (el mapa de todo lo que hay que aprender y de qué depende cada cosa), una academia presencial (guitarra los martes, canto los jueves) —cuyas clases marcan la ruta— y un marcador (última clase, evaluación en curso y cola de conceptos). El piano fue el primer intento (2026-06 → 2026-08) y está archivado en `_archivo/piano/`.

**El principio anti-muleta:** una canción no está aprendida hasta salir **sin cifrado ni letra delante, de memoria, sola**. Nada de "pista que cae" tipo Guitar Hero: entrena reacción, no música.

## Cómo se usa

1. **Después de cada clase** (martes guitarra, jueves canto): tres líneas al agente — qué se vio, qué tarea dejaron, qué no se entendió.
2. **Los otros días:** sesiones cortas (guitarra 15 min × 3-4 por semana; canto 10 min × 3). Primero la tarea del profesor, luego la sección del mapa. El agente entrega un bloque completo y uno se va a tocar: **el silencio significa que estás tocando**.
3. **Cada sesión se registra** en `practica/`. Una sesión puede partirse en días; `sistema/estado/estado_actual.md` guarda dónde quedó.
4. **Cada canción** tiene su ficha en `repertorio/` y avanza por tres estados de memoria. Solo el último cuenta. **Una canción del mapa por carril.**

**Dónde ver cómo vas:** `sistema/estado/estado_actual.md`.

## Cómo trabajan los agentes aquí

Las reglas para cualquier agente de IA están en **`AGENTS.md`** (la constitución: 12 reglas). Cada carpeta de contenido tiene las suyas (`fundamentos/AGENTS.md`, `repertorio/AGENTS.md`, `practica/AGENTS.md`), y los procedimientos paso a paso viven en `.claude/skills/`. En Claude Code, además, unos guardianes automáticos revisan el trabajo y un revisor independiente relee lo escrito. El porqué de esta organización: `sistema/decisiones/decision_arquitectura_reglas.md`.

## Mapa de carpetas

```
okaeri/
├── AGENTS.md · CLAUDE.md        ← reglas para agentes (constitución · lo propio de Claude)
├── README.md · NOTAS.md         ← este archivo · ideas y decisiones resueltas
│
├── .claude/                     ← procedimientos (skills), guardianes (hooks) y revisor
│
├── contexto/plan_estudio/       ← ⭐ los temarios (guitarra, canto) y los sílabos de las academias
│
├── sistema/
│   ├── estado/estado_actual.md  ← ⚡ dónde vas: marcadores, semana, sesión en curso
│   ├── perfil/yo_musica.md      ← quién es el usuario
│   ├── manual_okaeri.md         ← el porqué del sistema
│   ├── decisiones/              ← registro de decisiones
│   └── herramientas/ · referencia/
│
├── fundamentos/                 ← apuntes (lejos del instrumento) y prácticas (con él), por clase
├── repertorio/                  ← las canciones y su estado de memoria
├── practica/                    ← registro de sesiones, constancia y academias
└── _archivo/                    ← la era piano y el diseño original (solo consulta)
```

---

*Constelación: TESLA (estudio) · Agatha (vida) · ARCA (metas) · Oráculo (inglés) · **Okaeri (música)**.*
