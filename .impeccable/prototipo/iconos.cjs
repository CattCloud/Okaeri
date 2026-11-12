// Íconos pixel del prototipo. Cada ícono es una grilla de 12x12 (un "#" es un pixel). Convención del set: viewBox 0 0 12 12, relleno currentColor,
// shape-rendering crispEdges, sin trazos. Uso: node iconos.cjs  -> escribe iconos/*.svg (fuente de revisión) y exporta el sprite que usa build.cjs.
const fs = require("fs"), path = require("path")

const G = {
  // interfaz
  "sonido-on": [
    "............",
    "............",
    "....#...#...",
    "...##....#..",
    "####..#..#..",
    "####..#..#..",
    "####..#..#..",
    "####..#..#..",
    "...##....#..",
    "....#...#...",
    "............",
    "............"],
  "sonido-off": [
    "............",
    "............",
    "....#.......",
    "...##.#...#.",
    "####..##.##.",
    "####...###..",
    "####...###..",
    "####..##.##.",
    "...##.#...#.",
    "....#.......",
    "............",
    "............"],
  "lista": [
    "............",
    "............",
    "##.########.",
    "##.########.",
    "............",
    "##.########.",
    "##.########.",
    "............",
    "##.######...",
    "##.######...",
    "............",
    "............"],
  "cerrar": [
    "##........##",
    "###......###",
    ".###....###.",
    "..###..###..",
    "...######...",
    "....####....",
    "....####....",
    "...######...",
    "..###..###..",
    ".###....###.",
    "###......###",
    "##........##"],
  "abajo": [
    "............",
    "............",
    "##........##",
    "###......###",
    ".###....###.",
    "..###..###..",
    "...######...",
    "....####....",
    ".....##.....",
    "............",
    "............",
    "............"],
  "derecha": [
    "............",
    ".....#......",
    ".....##.....",
    ".....###....",
    "#########...",
    "##########..",
    "##########..",
    "#########...",
    ".....###....",
    ".....##.....",
    ".....#......",
    "............"],
  "lupa": [
    "............",
    "..#####.....",
    ".#######....",
    "###...###...",
    "##.....##...",
    "##.....##...",
    "###...###...",
    ".#######....",
    "..######....",
    "......####..",
    ".......####.",
    "........###."],
  // reemplazos de los emojis de los apuntes
  "repaso": [
    "...######...",
    "..#......#..",
    "###.####.###",
    "#..#....#..#",
    "#..........#",
    "#..######..#",
    "#..........#",
    "#..######..#",
    "#..........#",
    "#..######..#",
    "#..........#",
    "############"],
  "aviso": [
    ".....##.....",
    "....####....",
    "....####....",
    "...##..##...",
    "...##..##...",
    "..###..###..",
    "..###..###..",
    ".##########.",
    ".####..####.",
    "############",
    "############",
    "............"],
  "meta": [
    "...######...",
    ".##......##.",
    ".#........#.",
    "#...####...#",
    "#..#....#..#",
    "#..#.##.#..#",
    "#..#.##.#..#",
    "#..#....#..#",
    "#...####...#",
    ".#........#.",
    ".##......##.",
    "...######..."],
  "reloj": [
    "...######...",
    ".##......##.",
    ".#...##...#.",
    "#....##....#",
    "#....##....#",
    "#....####..#",
    "#....####..#",
    "#..........#",
    "#..........#",
    ".#........#.",
    ".##......##.",
    "...######..."],
  "impresora": [
    "..########..",
    "..#......#..",
    "..#......#..",
    "############",
    "#..........#",
    "#........#.#",
    "############",
    "..#......#..",
    "..#.####.#..",
    "..#......#..",
    "..########..",
    "............"],
  "ambos": [
    "............",
    "............",
    "...#....#...",
    "..##....##..",
    ".###....###.",
    "############",
    "############",
    ".###....###.",
    "..##....##..",
    "...#....#...",
    "............",
    "............"],
  // nivel de la práctica: tres barras; las llenas son las que tiene el nivel
  "nivel-1": [
    "............",
    "............",
    "............",
    "............",
    "........###.",
    "........###.",
    "....###.###.",
    "....###.###.",
    "###.###.###.",
    "###.###.###.",
    "###.###.###.",
    "###.###.###."].map((f, i) => i < 4 ? f : f), // se rellena abajo
  "nivel-2": [], "nivel-3": []
}

// niveles: alturas 4/7/10 filas; las barras que el nivel no tiene quedan como una línea base de 1 fila
const alturas = [4, 7, 10]
for (const n of [1, 2, 3]) {
  const filas = Array.from({ length: 12 }, () => Array(12).fill("."))
  alturas.forEach((a, k) => {
    const x0 = k * 4, alto = k < n ? a : 1
    for (let y = 12 - alto; y < 12; y++) for (let x = x0; x < x0 + 3; x++) filas[y][x] = "#"
  })
  G["nivel-" + n] = filas.map(f => f.join(""))
}

// una grilla -> un solo <path> con una tira horizontal por cada tramo de pixeles contiguos
function trazo(filas) {
  let d = ""
  filas.forEach((f, y) => {
    let x = 0
    while (x < f.length) {
      if (f[x] !== "#") { x++; continue }
      let e = x; while (e < f.length && f[e] === "#") e++
      d += `M${x} ${y}h${e - x}v1h${-(e - x)}z`
      x = e
    }
  })
  return d
}

function svg(nombre, filas, extra = "") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"${extra}><path d="${trazo(filas)}"/></svg>\n`
}

// «izquierda» es «derecha» espejada (la barra de navegación del carrusel usa las dos)
G["izquierda"] = G["derecha"].map(f => [...f].reverse().join(""))

const sprite = () => `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">` +
  Object.entries(G).map(([n, f]) => `<symbol id="i-${n}" viewBox="0 0 12 12"><path d="${trazo(f)}"/></symbol>`).join("") + `</svg>`

module.exports = { G, sprite, trazo }

if (require.main === module) {
  const dir = path.join(__dirname, "iconos"); fs.mkdirSync(dir, { recursive: true })
  for (const [n, f] of Object.entries(G)) {
    if (f.length !== 12 || f.some(r => r.length !== 12)) { console.error("grilla mal formada:", n); process.exit(1) }
    fs.writeFileSync(path.join(dir, n + ".svg"), svg(n, f))
  }
  console.log("ok", Object.keys(G).length, "iconos en", dir)
}
