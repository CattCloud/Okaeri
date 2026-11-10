// Adorno de fin de capítulo (como el de los libros antiguos de fantasía): un rizo en cada extremo, una línea ondulada y un rombo al centro.
// Se dibuja por código sobre una grilla de 161x34 pixeles (1 unidad = 1 pixel del arte) y sale como SVG con un trazo por tramo horizontal, igual que los íconos.
// Uso: node ornamento.cjs -> escribe iconos/ornamento.svg para revisarlo; build.cjs usa svg().
const fs = require("fs"), path = require("path")
const W = 161, H = 34, CX = 80, Y0 = 13          // Y0: altura de la línea en los extremos y en el centro
const g = Array.from({ length: H }, () => Array(W).fill(0))
const ponte = (x, y, v = 1) => { x = Math.round(x); y = Math.round(y); if (x >= 0 && x < W && y >= 0 && y < H && !(g[y][x] > v)) g[y][x] = v }

function mitadIzquierda() {
  // rizo: espiral que sale del centro, da casi dos vueltas y remata arriba corriendo hacia la derecha
  const R0 = 8, cx = 10, cy = Y0 + R0, vueltas = 1.75
  for (let s = 0; s <= 1; s += 0.002) {
    const th = -Math.PI / 2 - s * vueltas * 2 * Math.PI, r = R0 - (R0 - 1.3) * s
    ponte(cx + r * Math.cos(th), cy + r * Math.sin(th))
  }
  // línea ondulada: sube, baja y vuelve a la altura del centro; más gruesa a media onda
  const x0 = 10, x1 = CX - 11
  for (let x = x0; x <= x1; x += 0.25) {
    const u = (x - x0) / (x1 - x0), y = Y0 - 4 * Math.sin(2 * Math.PI * u) * (0.6 + 0.4 * Math.sin(Math.PI * u))
    ponte(x, y)
    if (u > 0.12 && u < 0.88) ponte(x, y + 1)
  }
  // dos yemas pequeñas sobre la cresta y bajo el valle
  for (const [dx, dy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) { ponte(x0 + (x1 - x0) * 0.25 + dx - 0.5, Y0 - 8 + dy); ponte(x0 + (x1 - x0) * 0.75 + dx - 0.5, Y0 + 7 + dy) }
}
mitadIzquierda()
// espejo a la derecha
for (let y = 0; y < H; y++) for (let x = 0; x < CX; x++) if (g[y][x]) g[y][W - 1 - x] = g[y][x]
// rombo central: contorno de radio 6 y núcleo claro (valor 2)
for (let dy = -6; dy <= 6; dy++) for (let dx = -6; dx <= 6; dx++) {
  const d = Math.abs(dx) + Math.abs(dy)
  if (d === 6) g[Y0 + dy][CX + dx] = 1
  else if (d <= 2) g[Y0 + dy][CX + dx] = 2
  else if (d < 6) g[Y0 + dy][CX + dx] = 0
}
// remates: dos pixeles a cada lado del rombo
for (const s of [-1, 1]) { g[Y0][CX + s * 9] = 1; g[Y0][CX + s * 10] = 1 }

function trazo(v) {
  let d = ""
  g.forEach((f, y) => { let x = 0; while (x < W) { if (f[x] !== v) { x++; continue } let e = x; while (e < W && f[e] === v) e++; d += `M${x} ${y}h${e - x}v1h${-(e - x)}z`; x = e } })
  return d
}
const svg = (cl = "orn") => `<svg class="${cl}" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" shape-rendering="crispEdges" aria-hidden="true" focusable="false"><path fill="#ffb53c" d="${trazo(1)}"/><path fill="#fff3c9" d="${trazo(2)}"/></svg>`
module.exports = { svg, W, H }
if (require.main === module) {
  fs.mkdirSync(path.join(__dirname, "iconos"), { recursive: true })
  fs.writeFileSync(path.join(__dirname, "iconos", "ornamento.svg"), svg("orn").replace('class="orn" ', 'xmlns="http://www.w3.org/2000/svg" ') + "\n")
  console.log("ok ornamento", W + "x" + H)
}
