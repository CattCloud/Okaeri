@AGENTS.md

## Solo en Claude Code

- **Procedimientos = skills.** Los de la tabla "Dónde vive cada cosa" están en `.claude/skills/` y se invocan por nombre (`/procesar-clase`) o se activan por su descripción. Si la tarea coincide con uno, se carga **antes** de actuar.
- **Guardianes** (`.claude/settings.json` → `.claude/hooks/`): al empezar, retomar o compactar la conversación entregan el estado del día; al guardar un archivo revisan lo medible; antes de terminar recuerdan lo que quedó pendiente. Modo actual: **avisar** (`.claude/hooks/reglas.json`). Un aviso se corrige antes de cerrar la tarea, o se le explica al usuario por qué no aplica.
- **Revisor** (`.claude/agents/revisor-okaeri.md`): al cerrar `procesar-clase`, `escribir-apunte` o `escribir-practica`, delegarle la revisión de lo escrito y corregir lo que confirme.
- **Memoria automática:** solo preferencias de esta máquina. Las reglas del sistema viven en el repositorio (R12).
