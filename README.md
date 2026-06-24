# StayHere 🎹

> Sistema personal de aprendizaje musical (piano). *Quédate — en la música, en el momento, en el camino.*

## Qué es

StayHere estructura el aprendizaje del piano para alguien que ama la música pero, sin guía clara, siempre terminaba abandonando. La meta no es el virtuosismo ni componer: es ser **intérprete** — sentarse al piano y tocar (y algún día cantar a la vez) las canciones que tocan el corazón.

**El principio rector:** aprender música de verdad —comprendiéndola y reteniéndola— al servicio de la **expresión**, no de la ejecución mecánica.

**El principio anti-muleta** (el corazón del sistema): una canción no está aprendida hasta tocarse **sin app, de memoria, solo**. Nada de "pista que cae" tipo Guitar Hero — eso entrena reacción, no música, y fue el error histórico a no repetir.

**Lo que lo hace distinto** (vs. el sistema de inglés, Oráculo): StayHere es **director de ruta**, no solo consolidador. El sistema lleva la estructura y el camino; el profesor entra después, solo para corregir el cuerpo (postura, manos). Por eso la ruta de las primeras 8 semanas es la pieza más importante.

## Mapa de carpetas

```
stayhere/
├── CLAUDE.md            ← contrato del agente (empezar por aquí)
├── README.md           ← este archivo
├── NOTAS.md            ← ideas y adiciones centralizadas
│
├── sistema/            ← EL MOTOR
│   ├── manual_stayhere.md      ← principio rector + anti-muleta + qué NO hace
│   ├── perfil/yo_musica.md     ← quién es el usuario (leer antes de proponer ruta)
│   ├── ruta/ruta_inicial.md    ← ⭐ las primeras 8 semanas (la pieza clave)
│   ├── herramientas/           ← rol de cada herramienta
│   ├── referencia/             ← checklist de errores predecibles
│   └── decisiones/             ← decisiones ya tomadas
│
├── contexto/           ← documentación de diseño (el QUÉ, CÓMO, CON QUÉ)
├── practica/           ← registro diario + la fecha dura del profesor
└── repertorio/         ← las canciones y su estado de memoria
```

## Cómo se usa

1. **Cada día:** una sesión de práctica (30-45 min) siguiendo `sistema/ruta/ruta_inicial.md`. Se registra desde `practica/_plantillas/plantilla_sesion.md`. **No romper la cadena.**
2. **Cada canción nueva:** se le crea una ficha desde `repertorio/_plantillas/plantilla_pieza.md` y se sigue su estado (`APRENDIENDO` → `TOCO-CON-AYUDA` → `TOCO-DE-MEMORIA-SOLO`).
3. **La fecha dura del profesor** (`practica/00_indice.md`) **no se estira.** Es la salvaguarda contra el abandono.

## Estado

**V1 — Cimientos.** Etapa habilitada: **Practicar**. Sin piezas todavía (nacen con la primera canción). App nueva a instalar: **Oído Perfecto**.

---

*Constelación: TESLA (estudio) · Agatha (vida) · ARCA (metas) · Oráculo (inglés) · **StayHere (música)**.*
