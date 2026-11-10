// Separadores del prototipo (decisión del usuario, 2026-11-10; propuestas en ornamentos.html):
//  · ramita(): rama con hojas y luciérnagas, entre apuntes de la MISMA escena (sobre blanco, así que con verdes y ámbar oscuros). Grilla 161x34.
//  · cuerdas() + roseta(): las seis cuerdas con una roseta en rombo al centro, en el corte entre DOS escenas. Las cuerdas son líneas de CSS que se estiran hasta los bordes.
// Todo es pixel art sobre grilla: 1 unidad = 1 pixel del arte = var(--u) px en pantalla (siempre entero). Uso: lo importa build.cjs.
function lienzo(W, H) {
  const g = Array.from({ length: H }, () => Array(W).fill(0))
  return { W, H, g, p(x, y, v = 1) { x = Math.round(x); y = Math.round(y); if (x >= 0 && x < W && y >= 0 && y < H) g[y][x] = v },
    espejo(cx) { for (let y = 0; y < H; y++) for (let x = 0; x < cx; x++) if (g[y][x]) g[y][W - 1 - x] = g[y][x] } }
}
function svgDe(L, paleta, cl, recorta) {
  let y0 = 0, y1 = L.H - 1
  if (recorta) { y0 = L.H; y1 = -1; L.g.forEach((f, y) => { if (f.some(v => v)) { if (y < y0) y0 = y; if (y > y1) y1 = y } }) }
  const alto = y1 - y0 + 1
  const trazo = v => { let d = ""; L.g.forEach((f, y) => { let x = 0; while (x < L.W) { if (f[x] !== v) { x++; continue } let e = x; while (e < L.W && f[e] === v) e++; d += `M${x} ${y}h${e - x}v1h${-(e - x)}z`; x = e } }); return d }
  return `<svg class="${cl}" viewBox="0 ${y0} ${L.W} ${alto}" width="${L.W}" height="${alto}" shape-rendering="crispEdges" aria-hidden="true" focusable="false">` + Object.entries(paleta).map(([v, c]) => `<path fill="${c}" d="${trazo(+v)}"/>`).join("") + `</svg>`
}
const rombo = (L, cx, cy, r, v) => { for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) if (Math.abs(dx) + Math.abs(dy) === r) L.p(cx + dx, cy + dy, v) }
const romboLleno = (L, cx, cy, r, v) => { for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) if (Math.abs(dx) + Math.abs(dy) <= r) L.p(cx + dx, cy + dy, v) }

function ramita(W, cl) {
  const H = 34, CX = (W - 1) / 2, L = lienzo(W, H), VID = 3, HOJA = 4, LUC = 5, BRI = 6
  const y = x => 17 + 3.4 * Math.sin((CX - x) * 0.17)
  for (let x = CX - 12; x >= 6; x -= 0.25) L.p(x, y(x), VID)
  for (let k = 0, x = CX - 17; x > 14; x -= 12, k++) {                       // pares de hojas, una arriba y otra abajo
    const yy = Math.round(y(x)), sg = k % 2 ? -1 : 1
    for (let i = 0; i < 5; i++) { L.p(x - i, yy - sg * (1 + (i >> 1)), HOJA); if (i > 0 && i < 4) L.p(x - i, yy - sg * (2 + (i >> 1)), HOJA) }
    for (let i = 0; i < 4; i++) L.p(x - 2 - i, yy + sg * (1 + (i >> 1)), HOJA)
  }
  for (let t = 0; t <= 1; t += 0.01) { const th = Math.PI / 2 + t * 1.6 * 2 * Math.PI, r = 4.5 - 3.4 * t; L.p(10 + r * Math.cos(th), y(10) + r * Math.sin(th), VID) }   // rizo al final
  L.espejo(CX)
  rombo(L, CX, 17, 5, 1); romboLleno(L, CX, 17, 2, 2)
  const esc = CX / 80                                                          // las luciérnagas se reparten según el ancho
  for (const [fx, fy] of [[38, 11], [58, 23], [22, 22], [50, 12]]) { const xf = Math.round(fx * esc); for (const x of [xf, W - 1 - xf]) { L.p(x, fy, LUC); L.p(x - 1, fy, BRI); L.p(x + 1, fy, BRI); L.p(x, fy - 1, BRI); L.p(x, fy + 1, BRI) } }   // punto y cruz tenue
  // todo en dorado, de la rampa del ámbar: #d09431 el trazo, #f7af3a el núcleo y las luciérnagas, #ffcf82 su brillo
  return svgDe(L, { 1: "#d09431", 2: "#f7af3a", 3: "#d09431", 4: "#d09431", 5: "#f7af3a", 6: "#ffcf82" }, cl, true)
}

// adorno A (rizos y rombo) con ancho variable: la línea ondulada se alarga y el resto queda igual. Sobre blanco: dorado de la rampa del ámbar (#d09431) con núcleo #f7af3a; el ámbar claro no se lee sobre blanco.
function rizos(W, cl) {
  const H = 34, CX = (W - 1) / 2, Y0 = 13, L = lienzo(W, H), R0 = 6, cx = 9, cy = Y0 + R0, x0 = 9, x1 = CX - 11
  for (let t = 0; t <= 1; t += 0.002) { const th = -Math.PI / 2 - t * 1.5 * 2 * Math.PI, r = R0 - (R0 - 1.3) * t; L.p(cx + r * Math.cos(th), cy + r * Math.sin(th)) }     // rizo
  for (let x = x0; x <= x1; x += 0.25) { const u = (x - x0) / (x1 - x0), y = Y0 - 3 * Math.sin(2 * Math.PI * u) * (0.6 + 0.4 * Math.sin(Math.PI * u)); L.p(x, y); if (u > 0.12 && u < 0.88) L.p(x, y + 1) }   // línea ondulada
  for (const [dx, dy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) { L.p(x0 + (x1 - x0) * 0.25 + dx - 0.5, Y0 - 7 + dy); L.p(x0 + (x1 - x0) * 0.75 + dx - 0.5, Y0 + 6 + dy) }   // yemas
  L.espejo(CX)
  rombo(L, CX, Y0, 6, 1); romboLleno(L, CX, Y0, 2, 2)
  for (const sg of [-1, 1]) { L.p(CX + sg * 9, Y0, 1); L.p(CX + sg * 10, Y0, 1) }
  return svgDe(L, { 1: "#d09431", 2: "#f7af3a" }, cl, true)
}

// roseta chica (9x9) para el separador entre apuntes: contorno del rombo y núcleo en cruz
function rosetaChica() {
  const L = lienzo(9, 9)
  rombo(L, 4, 4, 4, 1); for (const [dx, dy] of [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]) L.p(4 + dx, 4 + dy, 2)
  return svgDe(L, { 1: "#d09431", 2: "#f7af3a" }, "roseta")
}

function roseta() {
  const L = lienzo(19, 19)
  rombo(L, 9, 9, 9, 1); rombo(L, 9, 9, 5, 2); L.p(9, 9, 2)
  return svgDe(L, { 1: "#d09431", 2: "#f7af3a" }, "roseta")
}
// seis cuerdas: de arriba abajo la 6ª a la 1ª (las tres graves, más gruesas). Cada ala se alinea hacia la roseta y se acorta hacia fuera.
function cuerdas(lado, largos = [70, 84, 100, 100, 84, 70]) {
  return `<div class="cuerdas cuerdas-${lado}">` + largos.map(l => `<i style="--l:${l}%"></i>`).join("") + `</div>`
}
module.exports = { ramita, rizos, roseta, rosetaChica, cuerdas }
