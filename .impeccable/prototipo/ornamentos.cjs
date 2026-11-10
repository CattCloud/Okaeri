// Propuestas de adorno de fin de capítulo para comparar (no entran a la página hasta que el usuario elija). Uso: node ornamentos.cjs -> ornamentos.html
// Todas son pixel art sobre grilla (1 unidad = 1 pixel del arte), con paleta del mundo: ámbar de fuego, crema, verdes de bosque y luciérnaga.
const fs = require("fs"), path = require("path")
const { svg: svgA } = require("./ornamento.cjs")
let sharp = null; try { sharp = require("C:/dev/entertechschool/app_enterbase/node_modules/sharp") } catch { }

function lienzo(W, H) {
  const g = Array.from({ length: H }, () => Array(W).fill(0))
  return { W, H, g, p(x, y, v = 1) { x = Math.round(x); y = Math.round(y); if (x >= 0 && x < W && y >= 0 && y < H) g[y][x] = v },
    espejo(cx) { for (let y = 0; y < H; y++) for (let x = 0; x < cx; x++) if (g[y][x]) g[y][W - 1 - x] = g[y][x] } }
}
function svgDe(L, paleta) {
  const trazo = v => { let d = ""; L.g.forEach((f, y) => { let x = 0; while (x < L.W) { if (f[x] !== v) { x++; continue } let e = x; while (e < L.W && f[e] === v) e++; d += `M${x} ${y}h${e - x}v1h${-(e - x)}z`; x = e } }); return d }
  return `<svg viewBox="0 0 ${L.W} ${L.H}" width="${L.W}" height="${L.H}" shape-rendering="crispEdges" aria-hidden="true">` + Object.entries(paleta).map(([v, c]) => `<path fill="${c}" d="${trazo(+v)}"/>`).join("") + `</svg>`
}
const AMB = "#ffb53c", CRE = "#fff3c9"
const rombo = (L, cx, cy, r, v) => { for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) if (Math.abs(dx) + Math.abs(dy) === r) L.p(cx + dx, cy + dy, v) }
const rombolleno = (L, cx, cy, r, v) => { for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) if (Math.abs(dx) + Math.abs(dy) <= r) L.p(cx + dx, cy + dy, v) }

// B · pentagrama con barra final y calderón (la pausa): la música es el tema de Okaeri
function B() {
  const W = 161, H = 34, CX = 80, L = lienzo(W, H), ys = [11, 14, 17, 20, 23]
  for (const y of ys) for (let x = 8; x <= W - 10; x++) { const d = Math.min(x - 8, W - 10 - x); if (d < 14 && d % 4 === 3) continue; if (Math.abs(x - CX) <= 9) continue; L.p(x, y, 1) }
  for (let y = ys[0]; y <= ys[4]; y++) { L.p(5, y, 1); L.p(W - 9, y, 1); L.p(W - 6, y, 1); L.p(W - 5, y, 1) }   // barra de inicio y barra final doble
  // redonda en la línea central y calderón encima
  for (let y = 12; y <= 22; y++) for (let x = CX - 6; x <= CX + 6; x++) { const e = ((x - CX) / 5.4) ** 2 + ((y - 17) / 3.6) ** 2; if (e <= 1.05 && e >= .42) L.p(x, y, 2) }
  for (let t = Math.PI; t <= 2 * Math.PI + 0.01; t += 0.03) { L.p(CX + 9 * Math.cos(t), 8 + 6 * Math.sin(t), 2) }
  L.p(CX, 6, 2); L.p(CX, 5, 2); L.p(CX - 1, 5, 2); L.p(CX - 1, 6, 2)
  return { L, svg: svgDe(L, { 1: AMB, 2: CRE }) }
}
// C · las seis cuerdas con una roseta al centro (la lección 1.1 de M1)
function C() {
  const W = 161, H = 34, CX = 80, L = lienzo(W, H), ys = [8, 11, 14, 17, 20, 23].map(y => y + 4), Lh = [50, 60, 70, 70, 60, 50]
  ys.forEach((y, k) => { for (let x = CX - Lh[k]; x <= CX + Lh[k]; x++) { if (Math.abs(x - CX) <= 11) continue; L.p(x, y, 1); if (k < 3) L.p(x, y + 1, 1) } })
  rombo(L, CX, 19, 9, 1); rombo(L, CX, 19, 5, 2); L.p(CX, 19, 2)
  for (const s of [-1, 1]) { L.p(CX + s * (Lh[2] + 4), 17, 2); L.p(CX + s * (Lh[2] + 4), 22, 2) }   // clavijas
  return { L, svg: svgDe(L, { 1: AMB, 2: CRE }) }
}
// D · rama con hojas y luciérnagas (une con el muelle)
function D() {
  const W = 161, H = 34, CX = 80, L = lienzo(W, H)
  const VID = 3, HOJA = 4, LUC = 5, BRI = 6
  const y = x => 17 + 3.4 * Math.sin((CX - x) * 0.17)
  for (let x = CX - 12; x >= 6; x -= 0.25) L.p(x, y(x), VID)
  for (let k = 0, x = CX - 17; x > 14; x -= 12, k++) {            // pares de hojas, una arriba y otra abajo
    const yy = Math.round(y(x)), s = k % 2 ? -1 : 1
    for (let i = 0; i < 5; i++) { L.p(x - i, yy - s * (1 + (i >> 1)), HOJA); if (i > 0 && i < 4) L.p(x - i, yy - s * (2 + (i >> 1)), HOJA) }
    for (let i = 0; i < 4; i++) L.p(x - 2 - i, yy + s * (1 + (i >> 1)), HOJA)
  }
  // rizo pequeño al final
  for (let s = 0; s <= 1; s += 0.01) { const th = Math.PI / 2 + s * 1.6 * 2 * Math.PI, r = 4.5 - 3.4 * s; L.p(10 + r * Math.cos(th), y(10) - 4.5 + r * Math.sin(th) + 4.5, VID) }
  L.espejo(CX)
  rombo(L, CX, 17, 5, 1); rombolleno(L, CX, 17, 2, 2)
  // luciérnagas: punto vivo y cruz tenue
  for (const [fx, fy] of [[38, 9], [58, 26], [22, 24], [50, 12]]) for (const x of [fx, W - 1 - fx]) { L.p(x, fy, LUC); L.p(x - 1, fy, BRI); L.p(x + 1, fy, BRI); L.p(x, fy - 1, BRI); L.p(x, fy + 1, BRI) }
  return { L, svg: svgDe(L, { 1: AMB, 2: CRE, 3: "#5fa84e", 4: "#9bd36a", 5: "#e1ff5a", 6: "#6b8a2c" }) }
}
// E · el árbol: la silueta del árbol del hero (sacada de la capa aprobada) con dos líneas de suelo a los lados
async function E() {
  if (!sharp) return null
  const src = path.join(__dirname, "..", "mocks", "lugares", "hero", "capas", "2_arbol.png")
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  let t = info.height, b = 0, l = info.width, r = 0
  for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x += 2) if (data[(y * info.width + x) * 4 + 3] > 200) { if (y < t) t = y; if (y > b) b = y; if (x < l) l = x; if (x > r) r = x }
  const TH = 44
  const rec = await sharp(src).extract({ left: l, top: t, width: r - l, height: b - t }).ensureAlpha().resize({ height: TH, kernel: "lanczos3" }).raw().toBuffer({ resolveWithObject: true })
  const W = 161, H = 48, CX = 80, L = lienzo(W, H), ox = CX - (rec.info.width >> 1)
  for (let y = 0; y < rec.info.height; y++) for (let x = 0; x < rec.info.width; x++) if (rec.data[(y * rec.info.width + x) * 4 + 3] > 120) L.p(ox + x, y, 2)
  const base = TH + 2
  for (let x = 8; x <= CX - 12; x++) { const d = Math.min(x - 8, CX - 12 - x); if (d < 10 && d % 3 === 2) continue; L.p(x, base, 1); L.p(CX + (CX - x), base, 1) }
  for (let x = 20; x < CX - 12; x += 13) for (const xx of [x, W - 1 - x]) { L.p(xx, base - 1, 1); L.p(xx, base - 2, 1); L.p(xx - 1, base - 3, 1); L.p(xx + 1, base - 3, 1) }   // matas
  return { L, svg: svgDe(L, { 1: AMB, 2: CRE }) }
}

;(async () => {
  const A = { svg: svgA("") .replace('class="" ', "") }
  const lista = [
    ["A", "Rizos y rombo", "Tu boceto tal cual: un rizo en cada extremo, la línea ondulada y el rombo. El adorno clásico de los libros antiguos.", A],
    ["B", "Pentagrama con calderón", "Cinco líneas que se desvanecen hacia los lados, una redonda al centro con un calderón (la pausa) y la barra final doble. Es «fin» escrito en música.", B()],
    ["C", "Las seis cuerdas", "Seis cuerdas de guitarra (las tres graves más gruesas) que se acortan hacia los extremos, con una roseta al centro. Es lo primero que enseña M1: las 6 cuerdas.", C()],
    ["D", "Rama con luciérnagas", "Una rama con hojas que sale del rombo hacia los dos lados y termina en rizo, con luciérnagas. Conecta con el muelle que viene después.", D()]
  ].filter(x => x[3])
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Adornos de fin de capítulo · propuestas</title>
<!-- Propuestas para elegir (2026-11-10). Solo para mirar; no es la página. -->
<style>@font-face{font-family:"Jersey 15";src:url(fonts/jersey15.woff2) format("woff2")}
:root{--u:5px}*{box-sizing:border-box}body{margin:0;background:#040e10;color:#e8efe9;font-family:"Jersey 15",monospace}
main{max-width:980px;margin:0 auto;padding:32px 20px 80px}h1{font:400 44px/1 "Jersey 15";margin:0 0 6px}p.s{margin:0 0 28px;color:#9fb3a8;font-size:22px}
section{margin:0 0 8px;padding:26px 0 34px;border-top:3px solid #1c3a31}h2{font:400 34px/1 "Jersey 15";margin:0 0 6px;color:#ffb53c}h2 b{color:#e8efe9;font-weight:400}
.d{margin:0 0 18px;font-size:22px;line-height:1.15;color:#9fb3a8;max-width:46rem}
.v{display:grid;justify-items:center;padding:calc(7*var(--u)) 0}.v svg{display:block;width:calc(161*var(--u));height:auto;image-rendering:pixelated}
.claro{background:#fff;padding:18px 0;margin-top:14px}.claro svg{filter:none}
label{display:inline-block;margin:0 0 12px;font-size:22px;color:#9fb3a8}</style></head><body><main>
<h1>Adornos de fin de capítulo</h1><p class="s">Cuatro ideas para el corte entre la fogata y el muelle. Elige una (o mezcla) y la pongo en la página.</p>
${lista.map(([k, n, d, o]) => `<section><h2><b>${k} ·</b> ${n}</h2><p class="d">${d}</p><div class="v">${o.svg}</div></section>`).join("\n")}
</main></body></html>`
  fs.writeFileSync(path.join(__dirname, "ornamentos.html"), html)
  console.log("ok ornamentos.html con", lista.map(x => x[0]).join(","))
})()
