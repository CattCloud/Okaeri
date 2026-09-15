#!/usr/bin/env node
// Guardián de inicio de Okaeri (hook SessionStart): entrega al agente la fecha y el estado del día.
// Se ejecuta al empezar, retomar, limpiar o compactar una conversación; su salida entra al contexto.
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const RAIZ = path.resolve(__dirname, '..', '..');
let entrada = {};
try { entrada = JSON.parse(fs.readFileSync(0, 'utf8') || '{}'); } catch { entrada = {}; }

const salida = [];
const fecha = new Date().toLocaleDateString('es-PE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
salida.push(`[Guardián de inicio · Okaeri] Hoy es ${fecha}. Reglas: AGENTS.md (R1-R12). Procedimientos: .claude/skills/.`);

if (entrada.source === 'compact') {
  salida.push('La conversación se acaba de compactar. Si había una sesión en curso, se retoma en el bloque exacto (R1). Las reglas de cada carpeta se vuelven a cargar al abrir un archivo de esa carpeta.');
}

const archivoEstado = path.join(RAIZ, 'sistema', 'estado', 'estado_actual.md');
if (fs.existsSync(archivoEstado)) {
  const secciones = fs.readFileSync(archivoEstado, 'utf8')
    .split(/\r?\n(?=## )/)
    .filter((s) => /^## .*(Marcador|Semana en curso|Sesión en curso)/.test(s))
    .map((s) => s.replace(/\r?\n---\s*$/, '').trim());
  salida.push(`Estado actual (fuente única: sistema/estado/estado_actual.md):\n\n${secciones.join('\n\n')}`);
} else {
  salida.push('Aviso: no existe sistema/estado/estado_actual.md.');
}

try {
  execFileSync(process.execPath, [path.join(__dirname, 'verificar.js'), '--todo'], { cwd: RAIZ, stdio: 'pipe' });
} catch (e) {
  const n = (String(e.stdout || '').match(/^- /gm) || []).length;
  if (n) salida.push(`El guardián tiene ${n} aviso(s) pendientes en el repositorio. Verlos: node .claude/hooks/verificar.js --todo`);
}

process.stdout.write(salida.join('\n\n') + '\n');
