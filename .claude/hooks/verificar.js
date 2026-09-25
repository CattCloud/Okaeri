#!/usr/bin/env node
// Guardián de Okaeri: comprueba lo medible de las reglas en los Markdown del sistema (config: reglas.json).
//   node .claude/hooks/verificar.js --todo          revisa todo el alcance
//   node .claude/hooks/verificar.js <archivo...>    revisa esos archivos
//   --al-guardar   hook PostToolUse: revisa el archivo recién escrito y le avisa al agente
//   --al-terminar  hook Stop: revisa lo que el agente tocó en esta sesión antes de cerrar
'use strict';
const fs = require('fs');
const path = require('path');
const os = require('os');

const RAIZ = path.resolve(__dirname, '..', '..');
const CONFIG = JSON.parse(fs.readFileSync(path.join(__dirname, 'reglas.json'), 'utf8'));
const TIPOS_CONTENIDO = ['apunte', 'practica', 'consulta'];

const aRel = (p) => path.relative(RAIZ, path.resolve(RAIZ, p)).split(path.sep).join('/');

function enAlcance(rel) {
  if (!rel.endsWith('.md') || rel.startsWith('..')) return false;
  if (CONFIG.excluir.some((e) => rel.startsWith(e) || rel.includes('/' + e))) return false;
  return CONFIG.alcance.some((a) => (a.endsWith('/') ? rel.startsWith(a) : rel === a));
}

function recorrer(dir, fuera = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) recorrer(abs, fuera);
    else fuera.push(aRel(abs));
  }
  return fuera;
}

let indiceNombres = null;
function existeNota(destino, dirArchivo) {
  if (!indiceNombres) {
    indiceNombres = new Set(recorrer(RAIZ).filter((r) => r.endsWith('.md')).map((r) => path.posix.basename(r, '.md').toLowerCase()));
  }
  const limpio = destino.replace(/\\$/, '').trim();
  if (fs.existsSync(path.resolve(dirArchivo, limpio + '.md')) || fs.existsSync(path.resolve(dirArchivo, limpio))) return true;
  return indiceNombres.has(path.posix.basename(limpio).toLowerCase());
}

function leerFrontmatter(texto) {
  const m = texto.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const campos = {};
  for (const linea of m[1].split(/\r?\n/)) {
    const k = linea.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (k) campos[k[1]] = k[2].replace(/\s+#.*$/, '').replace(/^"|"$/g, '').trim();
  }
  return campos;
}

function revisar(rel) {
  const abs = path.join(RAIZ, rel);
  if (!fs.existsSync(abs)) return [];
  const texto = fs.readFileSync(abs, 'utf8');
  const lineas = texto.split(/\r?\n/);
  const avisos = [];
  const aviso = (regla, msg, linea) => avisos.push({ archivo: rel, regla, msg, linea });
  const fm = leerFrontmatter(texto);
  const tipo = (fm.tipo || '').split(/\s/)[0];

  const ed = CONFIG.estado_duplicado;
  if (!ed.permitido.includes(rel)) {
    lineas.forEach((l, i) => {
      if (ed.patrones.some((p) => new RegExp(p).test(l))) aviso(ed.regla, `estado fuera de sistema/estado/estado_actual.md: "${l.trim().slice(0, 80)}"`, i + 1);
    });
  }

  for (const f of CONFIG.frases_prohibidas) {
    if (f.tipos && !f.tipos.includes(tipo)) continue;
    const re = new RegExp(f.patron, 'i');
    lineas.forEach((l, i) => {
      if (re.test(l)) aviso(f.regla, `${f.motivo}: "${l.trim().slice(0, 90)}"`, i + 1);
    });
  }

  if (TIPOS_CONTENIDO.includes(tipo)) revisarImagenesYEnlaces(lineas, abs, tipo, aviso);
  if (tipo === 'practica') revisarPractica(lineas, fm, aviso);
  if (tipo === 'apunte') revisarApunte(lineas, fm, aviso);
  if (rel === CONFIG.repertorio.indice) revisarRepertorio(lineas, aviso);
  return avisos;
}

function revisarImagenesYEnlaces(lineas, abs, tipo, aviso) {
  const dir = path.dirname(abs);
  const reImg = /!\[([^\]]*)\]\(([^)\s]+)\)/g;
  const reLink = /(?<!!)\[([^\]]*)\]\(([^)\s]+\.md)\)/g;
  lineas.forEach((l, i) => {
    for (const [, alt, src] of l.matchAll(reImg)) {
      if (/^https?:/.test(src)) continue;
      if (!fs.existsSync(path.resolve(dir, decodeURIComponent(src)))) aviso('F8', `imagen que no existe: ${src}`, i + 1);
      if (!alt.trim()) aviso('F8', `imagen sin texto alternativo: ${src}`, i + 1);
      if (tipo === 'practica' && CONFIG.practica.imagenes_prohibidas.some((p) => path.posix.basename(src).startsWith(p))) {
        aviso('F6', `la práctica muestra una forma que debe salir de memoria: ${src}`, i + 1);
      }
    }
    for (const [, , destino] of l.matchAll(reLink)) {
      if (!existeNota(destino.replace(/\.md$/, ''), dir)) aviso('F10', `enlace a una nota que no existe: (${destino})`, i + 1);
    }
  });
}

function revisarPractica(lineas, fm, aviso) {
  const cfg = CONFIG.practica;
  for (const c of cfg.campos) if (!(c in fm)) aviso('F4', `falta el campo "${c}" en el frontmatter`);
  const titulos = lineas.map((l, i) => ({ l, i })).filter((x) => /^#{2,3} /.test(x.l));
  for (const s of cfg.secciones) {
    if (!titulos.some((t) => new RegExp(s.patron, 'i').test(t.l))) aviso(s.regla, `falta la sección "${s.nombre}"`);
  }
  for (const e of cfg.niveles) {
    const t = titulos.find((x) => x.l.startsWith('### ' + e));
    if (!t) aviso('F5', `falta el nivel ${e}`);
    else if (!/\d+(\.\d+)?\s*min/.test(t.l)) aviso('F5', `el nivel ${e} no dice sus minutos en el título`, t.i + 1);
  }
  if (lineas.some((l) => /ver Afinaci[oó]n/i.test(l)) && !titulos.some((t) => /^## Afinación del instructor/i.test(t.l))) {
    aviso('F4', 'cita "ver Afinación" pero no existe la sección "## Afinación del instructor"');
  }
  const inicio = lineas.findIndex((l) => l.startsWith('### ' + cfg.niveles[0]));
  if (inicio >= 0) {
    for (let i = inicio; i < lineas.length && !/^## /.test(lineas[i]); i++) {
      if (/^\|/.test(lineas[i]) && /\b\d+\s*-\s*\d+\s*min\b/.test(lineas[i])) aviso('F5', `rango vago de minutos en un nivel: "${lineas[i].trim().slice(0, 80)}"`, i + 1);
    }
  }
}

function revisarApunte(lineas, fm, aviso) {
  for (const c of CONFIG.apunte.campos) if (!(c in fm)) aviso('F10', `falta el campo "${c}" en el frontmatter`);
  if (!lineas.some((l) => /^# /.test(l))) aviso('F10', 'falta el título principal (# ...)');
  if (!lineas.some((l) => new RegExp(CONFIG.apunte.repaso).test(l))) aviso('F10', 'falta el cierre "📋 Repaso en una pantalla"');
}

function revisarRepertorio(lineas, aviso) {
  const cfg = CONFIG.repertorio;
  const inicio = lineas.findIndex((l) => l.trim() === cfg.seccion_en_curso);
  if (inicio < 0) return;
  let filas = 0;
  let cabecera = true;
  for (let i = inicio + 1; i < lineas.length && !/^## /.test(lineas[i]); i++) {
    const l = lineas[i].trim();
    if (!l.startsWith('|')) continue;
    if (/^\|[\s:|-]+\|$/.test(l)) continue;
    if (cabecera) { cabecera = false; continue; }
    if (l.replace(/[|\s]/g, '')) filas++;
  }
  if (filas > cfg.max_en_curso) aviso('RP2', `hay ${filas} canciones "En curso"; el máximo por carril es ${cfg.max_en_curso}`, inicio + 1);
}

function formatear(avisos) {
  return avisos.map((a) => `- ${a.archivo}${a.linea ? ':' + a.linea : ''} [${a.regla}] ${a.msg}`).join('\n');
}

function leerEntrada() {
  try { return JSON.parse(fs.readFileSync(0, 'utf8') || '{}'); } catch { return {}; }
}

const registro = (sesion) => path.join(os.tmpdir(), `okaeri-guardian-${String(sesion || 'sin-sesion').replace(/[^\w-]/g, '')}.json`);
function leerRegistro(sesion) {
  try { return JSON.parse(fs.readFileSync(registro(sesion), 'utf8')); } catch { return { tocados: [], bloqueos: 0 }; }
}
const guardarRegistro = (sesion, datos) => fs.writeFileSync(registro(sesion), JSON.stringify(datos));

const args = process.argv.slice(2);

if (args[0] === '--al-guardar') {
  const entrada = leerEntrada();
  const archivo = entrada.tool_input && (entrada.tool_input.file_path || entrada.tool_input.path);
  if (!archivo) process.exit(0);
  const rel = aRel(archivo);
  if (!enAlcance(rel)) process.exit(0);
  const datos = leerRegistro(entrada.session_id);
  if (!datos.tocados.includes(rel)) datos.tocados.push(rel);
  guardarRegistro(entrada.session_id, datos);
  const avisos = revisar(rel);
  if (!avisos.length) process.exit(0);
  process.stderr.write(`Guardián de Okaeri — ${avisos.length} aviso(s) en ${rel}:\n${formatear(avisos)}\nCorrígelos, o explícale al usuario por qué no aplican.\n`);
  process.exit(2);
}

if (args[0] === '--al-terminar') {
  const entrada = leerEntrada();
  const datos = leerRegistro(entrada.session_id);
  const avisos = datos.tocados.flatMap(revisar);
  if (!avisos.length) process.exit(0);
  if (entrada.stop_hook_active && (CONFIG.modo !== 'bloquear' || datos.bloqueos >= 3)) process.exit(0);
  datos.bloqueos += 1;
  guardarRegistro(entrada.session_id, datos);
  process.stderr.write(`Guardián de Okaeri — antes de terminar, ${avisos.length} aviso(s) en lo que escribiste en esta sesión:\n${formatear(avisos)}\nCorrígelos, o dile al usuario en una línea por qué no aplican. (modo: ${CONFIG.modo})\n`);
  process.exit(2);
}

const archivos = args.includes('--todo')
  ? recorrer(RAIZ).filter(enAlcance)
  : args.map(aRel);
const avisos = archivos.flatMap(revisar);
if (!avisos.length) {
  console.log(`Guardián de Okaeri: ${archivos.length} archivo(s) revisados, sin avisos.`);
  process.exit(0);
}
console.log(`Guardián de Okaeri: ${avisos.length} aviso(s) en ${archivos.length} archivo(s) revisados.\n${formatear(avisos)}`);
process.exit(1);
