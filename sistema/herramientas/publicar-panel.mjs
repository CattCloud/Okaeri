#!/usr/bin/env node
// Publica system.html en GitHub Pages (rama gh-pages de este mismo repo).
// Decisión: sistema/decisiones/decision_system-html.md → "Publicación en GitHub Pages".
//
//   node sistema/herramientas/publicar-panel.mjs           arma el sitio y lo sube a gh-pages
//   node sistema/herramientas/publicar-panel.mjs --out <carpeta>   solo arma el sitio ahí (no sube nada)
//
// La versión publicada es la de estudio: sin "Recorrido" ni "Clases en orden" (avance personal) y sin el estado de las prácticas, abre en el primer apunte
// y no pide a los buscadores que la indexen. No toca la rama actual ni el árbol de trabajo: arma el sitio
// en una carpeta temporal con su propio repo y fuerza el push solo sobre gh-pages (rama generada).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const git = (args, cwd = RAIZ) => execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const falla = (m) => { console.error(`publicar-panel: ${m}`); process.exit(1); };

const iOut = process.argv.indexOf('--out');
const soloArmar = iOut !== -1;
const destino = soloArmar ? path.resolve(process.argv[iOut + 1] || falla('--out necesita una carpeta')) : fs.mkdtempSync(path.join(os.tmpdir(), 'okaeri-pages-'));

const origen = path.join(RAIZ, 'system.html');
if (!fs.existsSync(origen)) falla('no existe system.html en la raíz del repo');
let html = fs.readFileSync(origen, 'utf8');

// 1. Versión de estudio. Cada cambio debe coincidir exactamente una vez: si el panel cambia, se avisa en vez de publicar algo roto.
const cambios = [
  ['</head>', '<meta name="robots" content="noindex">\n<style>.app-menu,#view-recorrido,#view-clase-timeline{display:none!important}.only-personal{display:none!important}.only-pub{display:block}</style>\n</head>'],
  ['showView("recorrido");', "{ const primero = document.querySelector('.nav-item[data-key]'); if (primero) primero.click(); }"],
];
for (const [de, a] of cambios) {
  const n = html.split(de).length - 1;
  if (n !== 1) falla(`esperaba 1 coincidencia de «${de}» en system.html y hay ${n}; revisa el panel y este script`);
  html = html.replace(de, () => a);
}

// 2. Imágenes que el panel usa (rutas relativas a la raíz del repo).
// También las de practicasData, donde el HTML va escapado como src=\"…\".
const imagenes = [...new Set([...html.matchAll(/src=\\?"([^"\\#?]+)\\?"/g)].map((m) => m[1]).filter((s) => !/^(https?:|data:|\/\/)/.test(s)))];
const faltan = imagenes.filter((r) => !fs.existsSync(path.join(RAIZ, r)));
if (faltan.length) falla(`el panel usa imágenes que no existen:\n  ${faltan.join('\n  ')}`);

// 3. Armar el sitio.
fs.mkdirSync(destino, { recursive: true });
fs.writeFileSync(path.join(destino, 'index.html'), html);
fs.writeFileSync(path.join(destino, '.nojekyll'), '');
for (const r of imagenes) {
  fs.mkdirSync(path.dirname(path.join(destino, r)), { recursive: true });
  fs.copyFileSync(path.join(RAIZ, r), path.join(destino, r));
}
console.log(`Sitio armado en ${destino}: index.html + ${imagenes.length} imágenes.`);
if (soloArmar) process.exit(0);

// 4. Subir a gh-pages desde la carpeta temporal.
const remoto = git(['remote', 'get-url', 'origin']);
const fecha = new Date().toLocaleDateString('sv-SE');
git(['init', '-q', '-b', 'gh-pages'], destino);
git(['config', 'user.name', git(['config', 'user.name'])], destino);
git(['config', 'user.email', git(['config', 'user.email'])], destino);
git(['add', '-A'], destino);
git(['commit', '-q', '-m', `publicar panel de estudio (${fecha})`], destino);
git(['push', '--force', remoto, 'gh-pages'], destino);
fs.rmSync(destino, { recursive: true, force: true });

const m = remoto.match(/github\.com[/:]([^/]+)\/([^/.]+)/);
console.log(`Publicado en la rama gh-pages.${m ? ` URL: https://${m[1].toLowerCase()}.github.io/${m[2]}/` : ''}`);
