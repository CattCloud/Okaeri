#!/usr/bin/env node
// Pasa una práctica (.md) a system.html: escribe su HTML en practicasData[clave].
// Paso 10 de .claude/skills/escribir-practica. Reglas del panel: sistema/decisiones/decision_system-html.md.
//
//   node sistema/herramientas/panel-practica.mjs <ruta .md> <clave>            muestra el HTML, no escribe
//   node sistema/herramientas/panel-practica.mjs <ruta .md> <clave> --write    escribe en system.html
//
// La clave existente se actualiza; si no existe, se crea con su título, carril, estado y el apunte del frontmatter
// (el apunte debe estar en system.html). Lo que no hace: el tema y las etiquetas del Recorrido (`recorrido`) y el
// grupo de una práctica sin apunte; eso se agrega a mano, como dice la skill.
// Antes de escribir deja una copia de system.html en la carpeta temporal y dice dónde.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const falla = (m) => { console.error(`panel-practica: ${m}`); process.exit(1); };
const [rel, clave, modo] = process.argv.slice(2);
if (!rel || !clave) falla('uso: node sistema/herramientas/panel-practica.mjs <ruta .md desde la raíz> <clave> [--write]');

const archivo = path.join(RAIZ, rel);
if (!fs.existsSync(archivo)) falla(`no existe ${rel}`);
const ruta = path.join(RAIZ, 'system.html');
let html = fs.readFileSync(ruta, 'utf8');

// Claves de los apuntes: cada ficha del panel trae su `key` y su `path`.
const apuntePorArchivo = {};
for (const m of html.matchAll(/key:"([^"]+)",\s*path:"([^"]+)"/g)) apuntePorArchivo[path.basename(m[2])] = m[1];
// Prácticas ya conectadas (archivo → clave), para enlazar de una práctica a otra.
const practicaPorArchivo = {
  'clase01_practica_independencia-1234.md': 'p-g-1234',
  'clase01_practica_ritmo-metronomo.md': 'p-g-ritmo',
  'clase02_practica_progresiones.md': 'p-g-progresiones',
  'clase03_practica_lectura-ritmica.md': 'p-g-lectura',
  'clase03_practica_pentatonica.md': 'p-g-pentatonica',
  'clase08_practica_arpegio.md': 'p-g-arpegio',
  'clase01_practica_respiracion-trino.md': 'p-c-respiracion',
};
practicaPorArchivo[path.basename(rel)] = clave;
const claveDe = (nombre) => apuntePorArchivo[nombre] || practicaPorArchivo[nombre];

const raw = fs.readFileSync(archivo, 'utf8');
const fm = (k) => (raw.match(new RegExp('^' + k + ': "?([^"\\n]*)', 'm')) || [])[1];
const md = raw.replace(/^---[\s\S]*?\n---\n/, '');
const mins = ['tiempo_minimo', 'tiempo_natural', 'tiempo_motivado'].map((k) => parseInt(fm(k))).join(' · ') + ' min';
const dirImg = rel.replace(/[^/]+$/, '');
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const inl = (t) => esc(t.replace(/\p{Extended_Pictographic}\uFE0F?\s?/gu, ''))
  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
  .replace(/\*(.+?)\*/g, '<i>$1</i>')
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, txt, href) => {
    const nombre = href.split('/').pop();
    const k = claveDe(nombre);
    if (!k) falla(`el enlace a ${nombre} no tiene clave: agrégalo al panel o, si es otra práctica, a practicaPorArchivo`);
    return `<a href="#" data-key="${k}">${txt}</a>`;
  });

const celdas = (r) => r.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
const tabla = (filas) => {
  const [cab, , ...cuerpo] = filas;
  return `<table><tr>${celdas(cab).map((c) => `<th>${inl(c)}</th>`).join('')}</tr>${cuerpo.map((r) => `<tr>${celdas(r).map((c) => `<td>${inl(c)}</td>`).join('')}</tr>`).join('')}</table>`;
};
const bloques = (lineas) => {
  const out = []; let b = [];
  for (const l of lineas) { if (l.trim() === '') { if (b.length) out.push(b); b = []; } else b.push(l); }
  if (b.length) out.push(b);
  return out;
};
const figura = (alt, src, ref) => `<figure${ref ? ` data-ref="${ref}"` : ''}><img src="${dirImg}${src}" alt="${esc(alt)}"></figure>`;
// Una lista numerada puede partirse con líneas en blanco y llevar una imagen indentada dentro de un ítem
// (la Afinación con imagen): los ítems se unen en una sola lista y la imagen es la «A» de su número.
const render = (lineas, afinacion = false) => {
  const out = [];
  for (const b of bloques(lineas)) {
    const prev = out[out.length - 1];
    if (b[0].startsWith('|')) out.push(tabla(b));
    else if (/^\s+!\[/.test(b[0]) && prev && prev.endsWith('</li></ol>')) {
      const [, alt, src] = b[0].trim().match(/!\[(.+)\]\((.+)\)/);
      out[out.length - 1] = prev.slice(0, -'</li></ol>'.length) + figura(alt, src, 'A' + (prev.split('<li>').length - 1)) + '</li></ol>';
    } else if (b[0].startsWith('![')) {
      out.push(b.map((l) => { const [, alt, src] = l.match(/!\[(.+)\]\((.+)\)/); const v = alt.match(/^([VA]\d+)\b/); return figura(alt, src, v && v[1]); }).join('\n'));
    } else if (b[0].startsWith('- ')) out.push(`<ul>${b.map((l) => `<li>${inl(l.slice(2))}</li>`).join('')}</ul>`);
    else if (/^\d+\. /.test(b[0])) {
      const items = b.map((l) => `<li>${inl(l.replace(/^\d+\. /, ''))}</li>`).join('');
      const abre = afinacion ? '<ol class="afinacion">' : '<ol>';
      if (prev && prev.startsWith(abre)) out[out.length - 1] = prev.slice(0, -'</ol>'.length) + items + '</ol>';
      else out.push(`${abre}${items}</ol>`);
    } else out.push(`<p>${inl(b.join(' '))}</p>`);
  }
  return out.join('\n');
};

// Partir en secciones ##
const secs = { _top: [] }; const orden = []; let cur = '_top';
for (const l of md.split('\n')) {
  const m = l.match(/^## (.+)/);
  if (m) { cur = m[1].replace(/^[^\wÁÉÍÓÚáéíóúÑñ¿]+/u, '').trim(); orden.push(cur); secs[cur] = []; } else secs[cur].push(l);
}
const cita = secs._top.join('\n').match(/^> (.+)$/m);
if (!cita) falla('la práctica no tiene su línea de introducción con «> »');
let h = `<div class="p-meta only-personal"><span class="pr-chip curso"><i></i>En curso</span><span class="pill"><svg class="icon"><use href="#i-clock"/></svg>${mins}</span><span class="pill">${esc(fm('origen'))}</span></div>\n`;
h += `<blockquote>${inl(cita[1])}</blockquote>\n`;

for (const s of orden) {
  const L = secs[s];
  if (s.startsWith('Los 3 niveles')) {
    const partes = L.join('\n').split(/^### /m);
    h += `<h4>Los 3 niveles del día</h4>\n${render(partes[0].split('\n'))}\n<div class="levels">\n`;
    partes.slice(1).forEach((p, i) => {
      const [cab, ...resto] = p.split('\n');
      const m = cab.match(/^\S+\s+(\S+) — (\d+ min)(?: \((.+)\))?/);
      if (!m) falla(`no entiendo la cabecera de nivel: ${cab}`);
      const sub = m[3] ? ` <span class="sub">${esc(m[3])}</span>` : '';
      let cuerpo = '';
      for (const b of bloques(resto)) {
        if (b[0].startsWith('|')) cuerpo += tabla(b);
        else if (/^Todo el /.test(b[0])) cuerpo += `<p class="inc">${inl(b.join(' '))}</p>`;
        else cuerpo += `<p>${inl(b.join(' '))}</p>`;
      }
      h += `<div class="level"><div class="level-head"><span class="bars l${i + 1}" aria-hidden="true"><b></b><b></b><b></b></span>${m[1]}${sub}<span class="mins">${m[2]}</span></div><div class="level-body">${cuerpo}</div></div>\n`;
    });
    h += '</div>\n';
  } else if (s.startsWith('Hasta cuándo')) {
    const txt = (bloques(L).map((b) => b.join(' ')).find((t) => t.includes('**')) || '').trim();
    const negritas = [...txt.matchAll(/\*\*[^*]+\*\*/g)];
    const desde = negritas.filter((m) => /list[ao]/.test(m[0])).pop() || negritas[0];
    const pub = desde ? txt.slice(desde.index).replace(/ Si en clase el profesor[^.]+\.$/, '') : null;
    h += `<div class="only-personal"><h4>Hasta cuándo</h4>${render(L)}</div>\n` + (pub ? `<div class="only-pub"><h4>Cuándo ya está</h4><p>${inl(pub)}</p></div>\n` : '');
  } else {
    h += `<h4>${esc(s)}</h4>\n${render(L, s.startsWith('Afinación'))}\n`;
  }
}
// «Hasta cuándo» al final, como en las demás prácticas
const hc = h.match(/<div class="only-personal"><h4>Hasta cuándo[\s\S]*?<\/div>\n(?:<div class="only-pub">[\s\S]*?<\/div>\n)?/);
if (hc) h = h.replace(hc[0], '') + hc[0];
h = h.trim();

const re = /const practicasData\s*=\s*(\{.*?\});\s*\n/s;
const datos = JSON.parse(html.match(re)[1]);
let nueva = false;
if (!datos[clave]) {
  const ap = (fm('apunte') || '').match(/\(([^)]+)\)/);
  const claveAp = ap && apuntePorArchivo[path.basename(ap[1])];
  if (!claveAp) falla(`la clave ${clave} no existe en practicasData y su apunte no está en el panel: agrégala a mano (con "apuntes":[] y "grupo" si no tiene apunte)`);
  const carril = (rel.match(/fundamentos\/([^/]+)\//) || [])[1];
  datos[clave] = { titulo: `Práctica — ${fm('titulo')}`, tituloCorto: fm('titulo'), apuntes: [claveAp], carril, estado: fm('estado') || 'EN-CURSO', html: '' };
  nueva = true;
}
datos[clave].html = h;

if (modo !== '--write') { console.log(h); console.log(`\n(${nueva ? 'clave nueva' : 'clave existente'}; no se escribió nada: agrega --write)`); process.exit(0); }
const copia = path.join(os.tmpdir(), `system.antes-panel-practica-${Date.now()}.html`);
fs.copyFileSync(ruta, copia);
html = html.replace(re, (todo, json) => todo.replace(json, () => JSON.stringify(datos)));
fs.writeFileSync(ruta, html);
console.log(`Escrito ${clave} en system.html (${nueva ? 'clave nueva' : 'actualizada'}). Copia previa: ${copia}`);
if (nueva) console.log('Falta a mano: el tema y sus etiquetas en `recorrido`, y el grupo si no tiene apunte (ver escribir-practica, paso 10).');
