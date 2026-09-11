// Generador de diagramas de acorde (SVG) — Okaeri, era guitarra.
// Node puro, sin dependencias:  node _generador.js   → escribe los .svg en m1/img/
// Convenciones: fundamentos/_estilo-visual.md §3 (vertical, 6ª a la izquierda, colores por dedo).
// Rasterizar a PNG: sharp con density 200 (ver _estilo-visual.md §5).

const fs = require('fs');
const path = require('path');

const COLOR_DEDO = { 1: '#d23333', 2: '#e8820c', 3: '#2e9e44', 4: '#2b6cb0' };
const FONT = 'font-family="Segoe UI, Arial, sans-serif"';

// frets/fingers: arrays de 6 (de la 6ª a la 1ª). fret: -1 = X, 0 = al aire, n = traste. finger: 0 = ninguno.
// Opcionales: startFret (primer traste visible, >1 = sin cejuela gruesa y con etiqueta),
//             barre {fret, from, to, finger} (cejilla: from/to = índice de cuerda 0..5).
const ACORDES = [
  { file: 'acorde-do',  name: 'Do (C)',   frets: [-1, 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0] },
  { file: 'acorde-re',  name: 'Re (D)',   frets: [-1, -1, 0, 2, 3, 2], fingers: [0, 0, 0, 1, 3, 2] },
  { file: 'acorde-mi',  name: 'Mi (E)',   frets: [0, 2, 2, 1, 0, 0],  fingers: [0, 2, 3, 1, 0, 0] },
  { file: 'acorde-sol', name: 'Sol (G)',  frets: [3, 2, 0, 0, 3, 3],  fingers: [2, 1, 0, 0, 3, 4] },
  { file: 'acorde-la',  name: 'La (A)',   frets: [-1, 0, 2, 2, 2, 0], fingers: [0, 0, 1, 2, 3, 0] },
  { file: 'acorde-mim', name: 'Mim (Em)', frets: [0, 2, 2, 0, 0, 0],  fingers: [0, 2, 3, 0, 0, 0] },
  { file: 'acorde-lam', name: 'Lam (Am)', frets: [-1, 0, 2, 2, 1, 0], fingers: [0, 0, 2, 3, 1, 0] },
  { file: 'acorde-rem', name: 'Rem (Dm)', frets: [-1, -1, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1] },
];

// Variantes ilustrativas (para apuntes; NO van al mazo Anki).
const VARIANTES = [
  { file: 'acorde-sol-3dedos', name: 'Sol (G)', frets: [3, 2, 0, 0, 0, 3], fingers: [2, 1, 0, 0, 0, 3] },
  { file: 'acorde-re-alt', name: 'Re (D)', frets: [-1, -1, 0, 2, 3, 2], fingers: [0, 0, 0, 2, 3, 1] },
  { file: 'acorde-do-traste3', name: 'Do (C)', startFret: 3, frets: [-1, 3, 5, 5, 5, 3], fingers: [0, 1, 2, 3, 4, 1], barre: { fret: 3, from: 1, to: 5, finger: 1 } },
  { file: 'acorde-do-traste8', name: 'Do (C)', startFret: 8, frets: [8, 10, 10, 9, 8, 8], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 8, from: 0, to: 5, finger: 1 } },
];

// Geometría (canvas 240×292): nombre arriba, X/O, cejuela, 4 trastes, números de cuerda abajo.
const X0 = 60, DX = 28;            // cuerdas: x = 60..200 (6ª a la izquierda)
const Y_NAME = 32, Y_XO = 56, Y_NUT = 66, DY = 48, NFRETS = 4;
const W = 240, H = 292;

function xCuerda(i) { return X0 + i * DX; }           // i: 0 = 6ª … 5 = 1ª
function yTraste(f) { return Y_NUT + (f - 0.5) * DY; } // centro del traste f

function chordSVG({ name, frets, fingers, startFret = 1, barre = null }) {
  const rel = f => f - startFret + 1; // traste absoluto → fila visible
  const p = [];
  p.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" ${FONT}>`);
  p.push(`<rect width="${W}" height="${H}" fill="#ffffff"/>`);
  p.push(`<text x="${W / 2}" y="${Y_NAME}" text-anchor="middle" font-size="20" font-weight="bold" fill="#111111">${name}</text>`);
  // cejuela (solo si el diagrama empieza en el traste 1) + trastes
  if (startFret === 1) {
    p.push(`<rect x="${X0 - 1}" y="${Y_NUT - 5}" width="${5 * DX + 2}" height="5" fill="#111111"/>`);
  } else {
    p.push(`<line x1="${X0}" y1="${Y_NUT}" x2="${X0 + 5 * DX}" y2="${Y_NUT}" stroke="#999999" stroke-width="1.5"/>`);
    p.push(`<text x="${X0 - 14}" y="${yTraste(1) + 5}" text-anchor="end" font-size="14" font-weight="bold" fill="#888888">${startFret}</text>`);
  }
  for (let f = 1; f <= NFRETS; f++)
    p.push(`<line x1="${X0}" y1="${Y_NUT + f * DY}" x2="${X0 + 5 * DX}" y2="${Y_NUT + f * DY}" stroke="#999999" stroke-width="1.5"/>`);
  // cuerdas
  for (let i = 0; i < 6; i++)
    p.push(`<line x1="${xCuerda(i)}" y1="${Y_NUT}" x2="${xCuerda(i)}" y2="${Y_NUT + NFRETS * DY}" stroke="#333333" stroke-width="${2.6 - i * 0.25}"/>`);
  // cejilla (barre)
  if (barre) {
    const y = yTraste(rel(barre.fret));
    const xa = xCuerda(barre.from), xb = xCuerda(barre.to);
    p.push(`<rect x="${xa - 11}" y="${y - 11}" width="${xb - xa + 22}" height="22" rx="11" fill="${COLOR_DEDO[barre.finger]}"/>`);
    p.push(`<text x="${(xa + xb) / 2}" y="${y + 5}" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">${barre.finger}</text>`);
  }
  // X / O / puntos
  for (let i = 0; i < 6; i++) {
    const x = xCuerda(i), fret = frets[i], dedo = fingers[i];
    if (fret === -1) {
      p.push(`<text x="${x}" y="${Y_XO}" text-anchor="middle" font-size="16" font-weight="bold" fill="#888888">✕</text>`);
    } else if (fret === 0) {
      p.push(`<circle cx="${x}" cy="${Y_XO - 5}" r="7" fill="none" stroke="#111111" stroke-width="2"/>`);
    } else if (barre && fret === barre.fret && i >= barre.from && i <= barre.to) {
      // cuerda cubierta por la cejilla: ya dibujada
    } else {
      const color = COLOR_DEDO[dedo] || '#111111';
      p.push(`<circle cx="${x}" cy="${yTraste(rel(fret))}" r="12" fill="${color}"/>`);
      if (dedo) p.push(`<text x="${x}" y="${yTraste(rel(fret)) + 5}" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">${dedo}</text>`);
    }
  }
  // números de cuerda
  for (let i = 0; i < 6; i++)
    p.push(`<text x="${xCuerda(i)}" y="${Y_NUT + NFRETS * DY + 18}" text-anchor="middle" font-size="11" fill="#aaaaaa">${6 - i}ª</text>`);
  p.push('</svg>');
  return p.join('\n');
}

// Diagrama anatómico: un acorde real (Lam) + etiquetas de qué significa cada cosa.
function anatomiaSVG() {
  const base = chordSVG(ACORDES.find(a => a.file === 'acorde-lam'))
    .replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '')
    .replace('<rect width="240" height="292" fill="#ffffff"/>', '');
  const L = [];
  L.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 300" ${FONT}>`);
  L.push(`<rect width="620" height="300" fill="#ffffff"/>`);
  L.push(`<g>${base}</g>`);
  const label = (y, txt) => L.push(`<text x="255" y="${y}" font-size="13.5" fill="#333333">${txt}</text>`);
  label(58, '✕ = esta cuerda NO se toca · ○ = se toca al aire (sin pisar)');
  label(78, 'La barra gruesa de arriba es la cejuela (el traste 0).');
  label(120, 'Punto = dónde pisa un dedo. El número dice CUÁL dedo:');
  const dedos = [['1', 'índice'], ['2', 'medio'], ['3', 'anular'], ['4', 'meñique']];
  dedos.forEach(([n, nom], k) => {
    const x = 265 + k * 88;
    L.push(`<circle cx="${x}" cy="146" r="10" fill="${COLOR_DEDO[n]}"/>`);
    L.push(`<text x="${x}" y="150" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">${n}</text>`);
    L.push(`<text x="${x + 14}" y="150" font-size="12" fill="#333333">${nom}</text>`);
  });
  label(190, 'Izquierda = 6ª cuerda (la gruesa) · derecha = 1ª (la fina).');
  label(210, 'Es la guitarra vista de frente, parada.');
  label(252, 'Se lee: pisa lo marcado, y toca SOLO las cuerdas sin ✕.');
  L.push('</svg>');
  return L.join('\n');
}

// Hoja de repaso imprimible: los 8 acordes en una sola imagen (A4 apaisado).
function hoja8SVG() {
  const strip = (a) => chordSVG(a).replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '')
    .replace(`<rect width="${W}" height="${H}" fill="#ffffff"/>`, '');
  const by = f => ACORDES.find(a => a.file === f);
  const mayores = ['acorde-do', 'acorde-re', 'acorde-mi', 'acorde-sol', 'acorde-la'].map(by);
  const menores = ['acorde-mim', 'acorde-lam', 'acorde-rem'].map(by);
  const L = [];
  L.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 860" ${FONT}>`);
  L.push(`<rect width="1240" height="860" fill="#ffffff"/>`);
  L.push(`<text x="620" y="42" text-anchor="middle" font-size="26" font-weight="bold" fill="#111111">Los 8 acordes abiertos — Básico 1</text>`);
  L.push(`<text x="30" y="95" font-size="17" font-weight="bold" fill="#555555">MAYORES</text>`);
  mayores.forEach((a, i) => L.push(`<g transform="translate(${20 + i * 242}, 100) scale(0.97)">${strip(a)}</g>`));
  L.push(`<text x="30" y="455" font-size="17" font-weight="bold" fill="#555555">MENORES</text>`);
  menores.forEach((a, i) => L.push(`<g transform="translate(${20 + i * 242}, 460) scale(0.97)">${strip(a)}</g>`));
  // leyenda en el espacio libre de la fila 2
  const lx = 20 + 3 * 242 + 30, ly = 560;
  L.push(`<text x="${lx}" y="${ly}" font-size="16" font-weight="bold" fill="#111111">Cómo se lee</text>`);
  const dedos = [['1', 'índice'], ['2', 'medio'], ['3', 'anular'], ['4', 'meñique']];
  dedos.forEach(([n, nom], k) => {
    const y = ly + 32 + k * 32;
    L.push(`<circle cx="${lx + 12}" cy="${y - 5}" r="11" fill="${COLOR_DEDO[n]}"/>`);
    L.push(`<text x="${lx + 12}" y="${y}" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">${n}</text>`);
    L.push(`<text x="${lx + 32}" y="${y}" font-size="14" fill="#333333">${nom}</text>`);
  });
  L.push(`<text x="${lx}" y="${ly + 168}" font-size="14" fill="#333333">○ = cuerda al aire · ✕ = no se toca</text>`);
  L.push(`<text x="${lx}" y="${ly + 192}" font-size="14" fill="#333333">Barra gruesa = cejuela (traste 0)</text>`);
  L.push(`<text x="${lx + 190}" y="${ly + 32}" font-size="14" fill="#555555" font-style="italic">Hoja de repaso — se mira</text>`);
  L.push(`<text x="${lx + 190}" y="${ly + 52}" font-size="14" fill="#555555" font-style="italic">para verificar, no mientras</text>`);
  L.push(`<text x="${lx + 190}" y="${ly + 72}" font-size="14" fill="#555555" font-style="italic">se toca.</text>`);
  L.push('</svg>');
  return L.join('\n');
}

const OUT = path.join(__dirname, 'm1', 'img');
fs.mkdirSync(OUT, { recursive: true });
for (const a of [...ACORDES, ...VARIANTES]) fs.writeFileSync(path.join(OUT, a.file + '.svg'), chordSVG(a));
fs.writeFileSync(path.join(OUT, 'clase02-anatomia-diagrama.svg'), anatomiaSVG());
fs.writeFileSync(path.join(OUT, 'hoja-8-acordes.svg'), hoja8SVG());
console.log(`ok: ${ACORDES.length} acordes + ${VARIANTES.length} variantes + anatomía → ${OUT}`);
