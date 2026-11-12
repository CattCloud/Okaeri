// Prototipo web de Okaeri (superficie system-html, rediseño del universo pixel). Uso: node build.cjs (desde .impeccable/prototipo/)
// Lee los apuntes y prácticas de todos los módulos (cada .md dice el suyo en `modulo:`), el temario y el índice de clases; convierte las capas del hero; arma las dos escenas animadas
// (fogata y muelle, de .impeccable/mocks/lugares/) con su motor intacto; y escribe index.html + hero/ + img/ junto a este archivo.
// Las escenas van con imágenes en base64 a propósito: el motor lee píxeles del lienzo (getImageData) y desde file:// una imagen suelta lo bloquearía.
const fs = require("fs"), path = require("path")
const { convertir, inline, icono, esc } = require("./md.cjs")
const { sprite } = require("./iconos.cjs")
const { rosetaChica, cuerdas } = require("./separadores.cjs")
const TRES = [70, 100, 70]

const AQUI = __dirname
const RAIZ = path.resolve(AQUI, "..", "..")
const LUG = path.join(RAIZ, ".impeccable", "mocks", "lugares")
const GUIT = path.join(RAIZ, "fundamentos", "guitarra")
const leer = f => fs.readFileSync(f, "utf8").replace(/\r/g, "")
const b64 = (f, t) => `data:${t};base64,` + fs.readFileSync(f).toString("base64")
const aviso = m => console.warn("AVISO:", m)

// ---------- 1. los apuntes de todos los módulos: cada .md dice el suyo en `modulo:`; el orden es el de las clases (R4) ----------
const EN_CURSO = 1   // el módulo que la franja abre ya elegido (marcador de guitarra en sistema/estado/estado_actual.md)
// dentro de una misma clase el orden es el de enseñanza; lo que esta lista no nombra va después, por nombre de archivo
const ORDEN_EN_CLASE = ["clase01_notas-y-cuerdas.md", "clase01_tablatura.md", "clase01_dedos-mano-izquierda.md", "clase02_el-acorde.md", "clase02_diagramas-de-acorde.md", "clase02_los-8-acordes.md"]
const bloqueFm = t => (t.match(/^---\n([\s\S]*?)\n---/) || [])[1] || ""
const campo = (b, k) => ((b.match(new RegExp(`^${k}:\\s*(.*)$`, "m")) || [])[1] || "").trim().replace(/^"(.*)"$/, "$1")
const archivos = []
for (const c of fs.readdirSync(GUIT).filter(d => /^clase\d+$/.test(d)).sort())
  for (const f of fs.readdirSync(path.join(GUIT, c)).filter(x => x.endsWith(".md")).sort()) {
    const b = bloqueFm(leer(path.join(GUIT, c, f))), mod = campo(b, "modulo").match(/^m([1-9])$/i), tipo = campo(b, "tipo"), estado = campo(b, "estado")
    if (!mod || !["apunte", "practica"].includes(tipo)) { aviso(`${c}/${f}: sin modulo o sin tipo (apunte/practica); no entra`); continue }
    if (estado === "BORRADOR") continue
    archivos.push({ rel: `${c}/${f}`, f, tipo, mod: +mod[1], estado, apunte: campo(b, "apunte") })
  }
const claseDe = rel => +rel.match(/^clase(\d+)/)[1]
const rango = rel => { const i = ORDEN_EN_CLASE.indexOf(path.basename(rel)); return i < 0 ? 99 : i }
const orden = (a, b) => a.mod - b.mod || claseDe(a.f) - claseDe(b.f) || rango(a.f) - rango(b.f) || a.f.localeCompare(b.f)
const claveArchivo = rel => path.basename(rel, ".md").replace(/^clase\d+_/, "").replace(/^practica_/, "")

const RUTA = archivos.filter(a => a.tipo === "apunte").map(a => ({ k: claveArchivo(a.rel), f: a.rel, mod: a.mod, estado: a.estado })).sort(orden)
// una práctica cuelga del último apunte (en orden de ruta) que nombra en `apunte:`; si no nombra ninguno que exista, entra suelta en su módulo
for (const pr of archivos.filter(a => a.tipo === "practica")) {
  const citados = [...pr.apunte.matchAll(/\]\(([^)]+\.md)\)/g)].map(m => path.basename(m[1]))
  const host = RUTA.filter(r => citados.includes(path.basename(r.f))).pop()
  if (host && !host.practica) { host.practica = pr.rel; if (host.mod !== pr.mod) aviso(`${pr.rel} es de M${pr.mod} y cuelga de ${host.f} (M${host.mod})`) }
  else { if (host) aviso(`${host.f} ya tiene práctica; ${pr.rel} entra suelta`); RUTA.push({ k: claveArchivo(pr.rel), f: pr.rel, mod: pr.mod, estado: pr.estado, solo: true }) }
}
RUTA.sort(orden)
const repetidas = RUTA.map(r => r.k).filter((k, i, a) => a.indexOf(k) !== i)
if (repetidas.length) throw new Error("claves repetidas entre apuntes: " + [...new Set(repetidas)].join(", "))

const IMG = new Map()   // ruta absoluta de la imagen -> nombre en img/
const enlaceDe = new Map(RUTA.flatMap(r => r.solo ? [[path.basename(r.f), `#a-${r.k}`]] : [[path.basename(r.f), `#a-${r.k}`], ...(r.practica ? [[path.basename(r.practica), `#p-${r.k}`]] : [])]))
const ctx = {
  enlaces: archivo => enlaceDe.get(path.basename(archivo)) || null,
  imagen: (abs, original) => {
    if (!fs.existsSync(abs)) { aviso(`imagen que no existe: ${original}`); return original }
    const n = path.basename(abs); if (IMG.has(abs) && IMG.get(abs) !== n) aviso("dos imágenes con el mismo nombre: " + n)
    IMG.set(abs, n); return "img/" + n
  }
}
const sinPrefijo = h => h.replace(/^Práctica\s*[—–-]\s*/, "")
for (const r of RUTA) {
  if (r.solo) { r.p = convertir(path.join(GUIT, r.f), ctx); r.t = r.p }   // suelta: la práctica es todo el apunte; su título es el del apunte
  else { r.t = convertir(path.join(GUIT, r.f), ctx); if (r.practica) r.p = convertir(path.join(GUIT, r.practica), ctx) }
  const o = (r.t.fm.origen || "").match(/clase(\d+)\s*\((\d{4}-\d{2}-\d{2})\)/)
  r.clase = o ? +o[1] : null; r.fecha = o ? o[2] : null; r.seccion = (r.t.fm.secciones_mapa || "").match(/^[\d.]+/)?.[0] || ""
  r.provisional = /^PROVISIONAL/.test(r.estado)
}

// ---------- 2. temario (nombres de módulos y su resultado) y clases en orden ----------
const limpia = s => s.replace(/\*\*/g, "").replace(/\p{Extended_Pictographic}\uFE0F?/gu, "").replace(/←.*$/, "").replace(/\s+/g, " ").trim()
const tem = leer(path.join(RAIZ, "contexto", "plan_estudio", "temario_guitarra.md"))
const MODS = []
for (let n = 1; n <= 9; n++) {
  const fila = tem.match(new RegExp(`^\\|\\s*${n}\\s*\\|\\s*(.+?)\\s*\\|\\s*(\\d+)\\s*\\|`, "m"))
  const sec = tem.split(new RegExp(`^## M${n} ·`, "m"))[1] || ""
  const res = (sec.match(/\*\*Resultado:\*\*\s*(.+)/) || [])[1]
  MODS.push({ n, nombre: fila ? limpia(fila[1]) : `Módulo ${n}`, secciones: fila ? +fila[2] : 0, resultado: res ? limpia(res).replace(/^./, c => c.toUpperCase()) : "" })
}
for (const m of MODS) {
  m.rutas = RUTA.filter(r => r.mod === m.n)
  m.nApuntes = m.rutas.filter(r => !r.solo).length
  m.nPracticas = m.rutas.filter(r => r.p).length
  m.enCurso = m.n === EN_CURSO
  // dos escenas por módulo, fogata y luego muelle: la primera mitad de los apuntes va con la primera (impar: lleva uno más; uno solo = solo fogata)
  const nFog = Math.ceil(m.rutas.length / 2)
  m.rutas.forEach((r, i) => r.escena = i < nFog ? "fogata" : "muelle")
}
// lo que el navegador necesita de cada módulo (el HTML de sus apuntes va aparte, en <template>)
const MODS_JS = MODS.map(m => ({ n: m.n, nombre: m.nombre, resultado: m.resultado, nApuntes: m.nApuntes, nPracticas: m.nPracticas, enCurso: m.enCurso, hayMuelle: m.rutas.some(r => r.escena === "muelle"), claves: m.rutas.map(r => r.k) }))

const idx = leer(path.join(RAIZ, "practica", "00_indice.md"))
const bloqueG = idx.split(/^## .*Guitarra.*$/m)[1].split(/^## /m)[0]
const CLASES = []
for (const l of bloqueG.split("\n")) {
  const c = l.split("|").map(x => x.trim()); if (c.length < 7 || !/^\d+$/.test(c[1])) continue
  const vio = limpia(c[4].replace(/`/g, ""))
  CLASES.push({ n: +c[1], fecha: c[2], asistio: /✅/.test(c[3]), vio: /^No asisti/i.test(vio) ? "Sin clase registrada" : vio.split(" · ").slice(0, 3).join(" · ") })
}
const MES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
const fechaCorta = f => { const m = f.match(/^(\d{4})-(\d{2})-(\d{2})$/); return m ? `${+m[3]} ${MES[+m[2] - 1]}` : f }

// ---------- 3. hero: capas (WebP si hay sharp; si no, el PNG tal cual) ----------
const CAPAS = [["1_fondo", "fondo"], ["3_medio", "medio"], ["2_arbol", "arbol"], ["4_frente", "frente"]]
let sharp = null; try { sharp = require("C:/dev/entertechschool/app_enterbase/node_modules/sharp") } catch { }
const EXT = sharp ? "webp" : "png"

async function frenteHundido(src, dst) {
  // el bosque del frente se oscurece en bloques de 8 px (dither de Bayer 4x4) hacia el suelo de la franja, para que cubra la pantalla en vez de cortarse recto
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const W = info.width, H = info.height, FIN = H - 240, INI = FIN - 380, B = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5], NO = [4, 14, 16]
  for (let y = INI; y < FIN; y++) { const t = (y - INI) / (FIN - INI); for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4; if (data[i + 3] < 255) continue
    if (t * 1.15 > B[(((y / 8) | 0) % 4) * 4 + (((x / 8) | 0) % 4)] / 16 + .04) for (let k = 0; k < 3; k++) data[i + k] = (NO[k] + (data[i + k] - NO[k]) * .12) | 0 } }
  await sharp(data, { raw: { width: W, height: H, channels: 4 } }).webp({ quality: 90, alphaQuality: 100, effort: 5 }).toFile(dst)
}
async function sueloFranja(dst) {
  // suelo de bosque de la franja: manchas de copas oscuras en celdas de 8 px que aparecen bajo el frente y se apagan hacia abajo. Código puro, semilla fija.
  const CEL = 8, W = 322, H = 90, PAL = [[4, 14, 16], [8, 25, 26], [13, 36, 32], [20, 53, 43]], LUZ = [31, 74, 57]
  let s = 20261109; const az = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296
  const L = 40, lat = Array.from({ length: L }, () => Array.from({ length: L }, az)), sm = t => t * t * (3 - 2 * t)
  const ruido = (x, y) => { const x0 = Math.floor(x), y0 = Math.floor(y), fx = sm(x - x0), fy = sm(y - y0), g = (i, j) => lat[((j % L) + L) % L][((i % L) + L) % L]
    return g(x0, y0) * (1 - fx) * (1 - fy) + g(x0 + 1, y0) * fx * (1 - fy) + g(x0, y0 + 1) * (1 - fx) * fy + g(x0 + 1, y0 + 1) * fx * fy }
  const paso = (a, b2, v) => sm(Math.min(1, Math.max(0, (v - a) / (b2 - a)))), BY = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5]
  const buf = Buffer.alloc(W * CEL * H * CEL * 3)
  for (let r = 0; r < H; r++) for (let q = 0; q < W; q++) {
    const n = .6 * ruido(q / 9, r / 7) + .4 * ruido(q / 4 + 7, r / 3.5), env = paso(0, 14, r) * (1 - paso(34, H, r)), v = n * env * 1.4 + (BY[(r % 4) * 4 + (q % 4)] / 16 - .5) * .1
    const col = v > .6 && az() < .16 ? LUZ : PAL[v < .2 ? 0 : v < .32 ? 1 : v < .44 ? 2 : 3]
    for (let j = 0; j < CEL; j++) for (let i = 0; i < CEL; i++) { const o = (((r * CEL + j) * W * CEL) + q * CEL + i) * 3; buf[o] = col[0]; buf[o + 1] = col[1]; buf[o + 2] = col[2] } }
  await sharp(buf, { raw: { width: W * CEL, height: H * CEL, channels: 3 } }).png({ palette: true, colors: 6, compressionLevel: 9 }).toFile(dst)
}
async function activos() {
  fs.mkdirSync(path.join(AQUI, "hero"), { recursive: true }); fs.mkdirSync(path.join(AQUI, "img"), { recursive: true })
  const mioT = fs.statSync(__filename).mtimeMs
  for (const [f] of CAPAS) {
    const src = path.join(LUG, "hero", "capas", f + ".png"), dst = path.join(AQUI, "hero", f + "." + EXT)
    if (fs.existsSync(dst) && fs.statSync(dst).mtimeMs > Math.max(mioT, fs.statSync(src).mtimeMs)) continue
    if (sharp && f === "4_frente") await frenteHundido(src, dst)
    else if (sharp) await sharp(src).webp({ quality: 90, alphaQuality: 100, effort: 5 }).toFile(dst); else fs.copyFileSync(src, dst)
  }
  const sue = path.join(AQUI, "hero", "suelo.png")
  if (sharp && !(fs.existsSync(sue) && fs.statSync(sue).mtimeMs > mioT)) await sueloFranja(sue)
  for (const [abs, n] of IMG) fs.copyFileSync(abs, path.join(AQUI, "img", n))
}

// ---------- 4. escenas: el motor de cada una, intacto, dentro de su ámbito y con una compuerta que lo pausa fuera de pantalla ----------
function escenaFogata() {
  const L = path.join(LUG, "fogata")
  const capas = Object.fromEntries(fs.readdirSync(path.join(L, "personajes", "capas")).map(f => [f.replace(".png", ""), b64(path.join(L, "personajes", "capas", f), "image/png")]))
  const pj = leer(path.join(L, "pxl", "personajes.js")).replace('document.getElementById("pj")', "__pj")
  return `(function(__c,__pj,requestAnimationFrame){
${leer(path.join(L, "pxl", "escena.js"))}
const im=new Image();im.onload=()=>iniciar(__c,im);im.src="${b64(path.join(L, "pxl", "fondo_personajes.png"), "image/png")}"
const PJ=${leer(path.join(L, "personajes", "posiciones.json"))},SRC=${JSON.stringify(capas)}
${pj}
})`
}
function escenaMuelle() {
  const L = path.join(LUG, "muelle")
  const lista = [...fs.readdirSync(path.join(L, "personajes", "capas")).map(f => [f.replace(".png", ""), path.join(L, "personajes", "capas", f)]), ["soprano", path.join(L, "personajes", "soprano.png")], ["baculo", path.join(L, "personajes", "baculo.png")]]
  const capas = Object.fromEntries(lista.map(([n, f]) => [n, b64(f, "image/png")]))
  const pj = leer(path.join(L, "pxl", "personajes.js")).replace('document.getElementById("pj")', "__pj")
  return `(function(__c,__pj,requestAnimationFrame){
const KOI=${leer(path.join(L, "koi", "koi_dir.json"))},RUTAS=${leer(path.join(L, "koi", "recorridos.json"))}
${leer(path.join(L, "pxl", "escena.js"))}
const F=new Image(),Bc=new Image();let n=0;const listo=()=>{if(++n==2)iniciar(__c,F,Bc)};F.onload=Bc.onload=listo;F.src="${b64(path.join(L, "pxl", "fondo_mov.png"), "image/png")}";Bc.src="${b64(path.join(L, "pxl", "barca.png"), "image/png")}"
const PJ=${leer(path.join(L, "personajes", "posiciones.json"))},SRC=${JSON.stringify(capas)}
${pj}
})`
}
const ESCENAS_JS = `// compuerta: la escena solo pide cuadros mientras está a la vista
function compuerta(){let on=false,cola=[];return{raf:f=>{if(on)window.requestAnimationFrame(f);else cola.push(f)},set(v){on=v;if(v)cola.splice(0).forEach(f=>window.requestAnimationFrame(f))}}}
window.COMPUERTAS={fogata:compuerta(),muelle:compuerta()}
const fogata=${escenaFogata()};fogata(document.getElementById("c-fogata"),document.getElementById("pj-fogata"),COMPUERTAS.fogata.raf)
const muelle=${escenaMuelle()};muelle(document.getElementById("c-muelle"),document.getElementById("pj-muelle"),COMPUERTAS.muelle.raf)`
const ARIA = {
  fogata: "Una fogata encendida en una loma junto a un río, con una mochila y dos tazas. Un gato naranja toca la guitarra sentado en un tronco; frente a él, un forastero con gorro de mago descansa en una piedra, con un perico que canta sobre el gorro. A lo lejos, un gran árbol con ventanas encendidas.",
  muelle: "Un muelle de madera de noche en un lago con nenúfares gigantes cuyas flores brillan, un farol encendido y luciérnagas. Un forastero con gorro de mago pesca sentado al borde del muelle, con un perico dormido sobre el gorro; a su lado, una nota musical con moño mece las patitas en el agua. En una barca, una gata siamesa en kimono canta bajito. Bajo el agua nadan despacio cuatro peces koi."
}

// ---------- 5. piezas de la interfaz ----------
const ico = (n, cl = "ico") => icono(n, cl)
// marco pixel: 5x5 unidades con las esquinas cortadas; border-image-slice:2 y borde de 6px -> cada unidad mide 3px
const marco = c => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 0 5 5' shape-rendering='crispEdges' fill='${c}'><path d='M1 0h3v1H1zM0 1h1v3H0zM4 1h1v3H4zM1 4h3v1H1z'/></svg>`)}")`
const conector = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='12' height='18' viewBox='0 0 12 18' shape-rendering='crispEdges' fill='%231c3a31'><path d='M0 0h2v14h10v2H0z'/></svg>`.replace("%23", "#"))}")`
const fuentes = [
  ["Jersey 15", 400, "normal", "jersey15.woff2"], ["Atkinson Hyperlegible", 400, "normal", "atkinson-400.woff2"],
  ["Atkinson Hyperlegible", 700, "normal", "atkinson-700.woff2"], ["Atkinson Hyperlegible", 400, "italic", "atkinson-400-it.woff2"]
].map(([f, w, s, a]) => `@font-face{font-family:"${f}";font-weight:${w};font-style:${s};font-display:swap;src:url(${b64(path.join(AQUI, "fonts", a), "font/woff2")}) format("woff2")}`).join("\n")

// Los .md cierran con un pie de enlaces («← anterior · índice · siguiente → X · su práctica: Y»). En el carrusel la barra al pie hace lo de anterior/siguiente,
// así que se marcan esas partes para esconderlas allí (apilado se ven: no hay barra). «su práctica» se conserva; un pie sin ella se esconde entero.
const pieNav = html => html.replace(/<p>((?:(?!<\/p>).)*?)<\/p>/gs, (m, dentro) => {
  const partes = dentro.trim().split(" · ")
  const esNav = p => /^<a[^>]*>(?:←|siguiente →)[^<]*<\/a>$/.test(p) || /^<span[^>]*>índice<\/span>$/.test(p)
  if (!partes.some(p => /^<span[^>]*>índice<\/span>$/.test(p)) || !partes.every(p => esNav(p) || /^su práctica:/.test(p))) return m
  const nav = partes.filter(esNav), prac = partes.filter(p => !esNav(p))
  return `<p class="pie-nav${prac.length ? "" : " solo-nav"}"><span class="pn-nav">${nav.join(" · ")}</span>${prac.length ? `<span class="pn-sep"> · </span><span class="pn-prac">${prac.join(" · ")}</span>` : ""}</p>`
})
const idPrac = r => `p-${r.k}`
const tPractica = r => sinPrefijo(r.p.tituloHtml)
function apunteHtml(r) {
  const meta = [r.solo ? "Práctica" : "", r.clase ? `Clase ${r.clase}` : "", r.fecha ? fechaCorta(r.fecha) : "", r.seccion ? `sección ${r.seccion}` : "", r.provisional ? "provisional" : ""].filter(Boolean).join(" · ")
  const cab = `<header class="ap-cab">
<h3 class="ap-titulo" tabindex="-1">${r.solo ? tPractica(r) : r.t.tituloHtml}</h3>
${meta ? `<p class="ap-meta">${esc(meta)}</p>` : ""}
${r.p && !r.solo ? `<div class="vista" role="group" aria-label="Qué lees de este apunte"><button type="button" data-ver="teoria" aria-pressed="true">Teoría</button><button type="button" data-ver="practica" aria-pressed="false">Práctica</button></div>` : ""}
</header>`
  // práctica suelta (su apunte aún no existe): es todo el apunte, sin pestañas Teoría/Práctica
  if (r.solo) return `<article class="apunte" id="a-${r.k}" data-k="${r.k}" data-vista="practica" data-solo>
${cab}
<div class="ap-cuerpo" data-panel="practica" id="${idPrac(r)}">
${pieNav(r.p.html)}
</div>
</article>`
  return `<article class="apunte" id="a-${r.k}" data-k="${r.k}" data-vista="teoria">
${cab}
<div class="ap-cuerpo" data-panel="teoria">
${pieNav(r.t.html)}
</div>
${r.p ? `<div class="ap-cuerpo" data-panel="practica" id="${idPrac(r)}" hidden>
<h4 class="ap-practica">Práctica: ${tPractica(r)}</h4>
${pieNav(r.p.html)}
</div>` : ""}
</article>`
}

// el corte es el marco fijo (escena + columna); los apuntes de cada módulo entran en su columna desde las <template>
function corte(nombre) {
  return `<section class="corte corte-${nombre}" id="corte-${nombre}" aria-label="Apuntes con la escena ${nombre === "fogata" ? "de la fogata" : "del muelle"}">
<div class="escena escena-${nombre}"><div class="lienzo"><canvas id="c-${nombre}" role="img" aria-label="${esc(ARIA[nombre])}"></canvas><canvas id="pj-${nombre}" class="pj" aria-hidden="true"></canvas></div></div>
<div class="apuntes"></div>
</section>`
}
const SEP = `<div class="sep" aria-hidden="true">${cuerdas("izq", TRES)}${rosetaChica()}${cuerdas("der", TRES)}</div>`
const buscable = r => (r.t.titulo + " " + r.t.texto + (r.p && !r.solo ? " " + r.p.titulo + " " + r.p.texto : "")).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
const rutaItem = (r, i) => `<li data-t="${esc(buscable(r))}">
<a class="d-ap" href="#a-${r.k}" data-k="${r.k}"><span class="d-n">${i + 1}</span><span class="d-t">${r.solo ? "Práctica: " + tPractica(r) : r.t.tituloHtml}</span></a>
${r.p && !r.solo ? `<a class="d-prac" href="#${idPrac(r)}" data-k="${r.k}" data-practica>Práctica: ${tPractica(r)}</a>` : ""}
</li>`
// carrusel (≥1200 px): cada apunte es una hoja con su propio scroll y su barra al pie. Bajo 1200 px la hoja no existe (display:contents) y el módulo se lee apilado, con sus separadores.
// «Siguiente» dice solo eso (usuario, 2026-11-12); el título del apunte que sigue en el orden del módulo (fogata y luego muelle) va en `title` y `aria-label`; el último dice «Fin del módulo».
const tituloPlano = r => r.solo ? sinPrefijo(r.p.titulo) : r.t.titulo
function hojaHtml(r, i, rutas) {
  const ant = rutas[i - 1], sig = rutas[i + 1]
  const botonSig = sig
    ? `<button type="button" class="btn-hoja sig" data-dir="1" aria-label="Siguiente: ${esc(tituloPlano(sig))}" title="${esc(tituloPlano(sig))}"><span class="btn-txt">Siguiente</span>${ico("derecha")}</button>`
    : `<button type="button" class="btn-hoja sig" data-dir="1"><span class="btn-txt">Fin del módulo</span>${ico("derecha")}</button>`
  // la barra va dentro del scroll de la hoja, pegada al pie (sticky): comparte el ancho del apunte y no hace falta medir la barra de desplazamiento
  return `<div class="hoja" data-k="${r.k}">
<div class="hoja-scroll">
${apunteHtml(r)}
<nav class="hoja-nav" aria-label="Moverse entre los apuntes del módulo">
${ant ? `<button type="button" class="btn-hoja ant" data-dir="-1">${ico("izquierda")}<span class="btn-txt">Anterior</span></button>` : "<span></span>"}
<p class="hoja-cuenta">${i + 1} de ${rutas.length}</p>
${botonSig}
</nav>
</div>
</div>`
}

// los apuntes de cada módulo no se pintan hasta que se elige el módulo
const plantillas = MODS.filter(m => m.rutas.length).map(m => {
  const de = e => m.rutas.map((r, i) => [r, i]).filter(([r]) => r.escena === e)
  const hojas = e => de(e).map(([r, i]) => hojaHtml(r, i, m.rutas)).join(`\n${SEP}\n`)
  return `<template id="m${m.n}-fogata">${hojas("fogata")}</template>
<template id="m${m.n}-muelle">${hojas("muelle")}</template>
<template id="m${m.n}-ruta">${m.rutas.map(rutaItem).join("\n")}</template>`
}).join("\n")

const estadoMod = m => m.enCurso ? "en curso" : m.rutas.length ? "con apuntes" : "sin apuntes aún"
const mods = MODS.map(m => `<li><button type="button" class="mod${m.n === EN_CURSO ? " act" : ""}${m.rutas.length ? "" : " fuera"}" data-mod="${m.n}" aria-pressed="${m.n === EN_CURSO}" aria-label="Módulo ${m.n}: ${esc(m.nombre)}, ${estadoMod(m)}"><span>M${m.n}</span></button></li>`).join("")

const clasesDrawer = CLASES.map(c => {
  const dest = RUTA.find(r => r.clase === c.n)
  const cuerpo = `<span class="d-n">${c.n}</span><span class="d-t">${esc(c.vio)}<small>${esc(fechaCorta(c.fecha))}</small></span>`
  return `<li>${dest ? `<a class="d-ap" href="#a-${dest.k}">${cuerpo}</a>` : `<span class="d-ap d-quieto">${cuerpo}</span>`}</li>`
}).join("\n")

// "Otros módulos": todos menos el que se está leyendo (app.js esconde el actual); los vacíos no llevan a ningún lado
const otrosDrawer = MODS.map(m => `<li data-mod="${m.n}"><button type="button" class="d-mod" data-mod="${m.n}"${m.rutas.length ? "" : ' aria-disabled="true"'}><span class="d-n">M${m.n}</span><span class="d-t">${esc(m.nombre)}</span></button></li>`).join("")

const HTML = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#040e10">
<meta name="robots" content="noindex">
<title>Okaeri</title>
<!-- Web de Okaeri. Lo arma build.cjs; no se edita a mano. Fuentes: Jersey 15 (pixel) y Atkinson Hyperlegible (lectura), ambas OFL. -->
<style>
${fuentes}
:root{--m-claro:${marco("#e8efe9")};--m-tinta:${marco("#26241f")};--m-ambar:${marco("#ffb53c")};--m-pino:${marco("#1c3a31")};--m-suave:${marco("#52705f")};--conector:${conector}}
${leer(path.join(AQUI, "src", "estilo.css"))}
</style>
</head>
<body data-zona="hero">
${sprite()}
<a class="salto" href="#modulos">Saltar a los módulos</a>

<header class="hero" id="inicio">
<div class="paisaje" aria-hidden="true">
<img class="capa fondo" src="hero/1_fondo.${EXT}" alt="" fetchpriority="high" decoding="async">
<img class="capa medio" src="hero/3_medio.${EXT}" alt="" decoding="async">
<img class="capa arbol" src="hero/2_arbol.${EXT}" alt="" decoding="async">
<img class="capa frente" src="hero/4_frente.${EXT}" alt="" decoding="async">
</div>
<h1 class="logo">okaeri</h1>
<div class="hero-sonido">
<button type="button" class="btn-sonido" id="sonido" aria-pressed="false" aria-label="Activar el sonido"><svg class="ico" viewBox="0 0 12 12" aria-hidden="true"><use href="#i-sonido-off"/></svg></button>
<p class="aviso-sonido" id="aviso-sonido" role="status"></p>
</div>
<a class="bajar" href="#modulos" aria-label="Bajar a los módulos">${ico("abajo")}</a>
</header>

<main>
<section class="franja" id="modulos" aria-labelledby="fr-t">
<div class="fr-in">
<h2 class="fr-t" id="fr-t">Módulos</h2>
<ul class="fr-lista" role="list">${mods}</ul>
<div class="fr-det" id="fr-det" aria-live="polite"></div>
</div>
</section>

<div class="modulo" id="modulo" hidden>
<div class="escenario">
<div class="brillo" id="brillo" aria-hidden="true"></div>
<div class="pista" id="pista">
${corte("fogata")}
<div class="paso" aria-hidden="true"><i></i></div>
${corte("muelle")}
<section class="cierre" aria-label="Fin del módulo">
<h2 class="cierre-t" id="cierre-t" tabindex="-1"></h2>
<a class="btn-px" id="siguiente" href="#modulos" hidden>Módulo siguiente ${ico("derecha")}<span class="btn-sub" id="siguiente-sub"></span></a>
<button type="button" class="btn-px chico" id="volver">${ico("izquierda")}Volver al último apunte</button>
</section>
</div>
</div>
</div>
</main>

<button type="button" class="btn-drawer" id="abrir-drawer" aria-label="Abrir la ruta del módulo" aria-controls="drawer" aria-expanded="false">${ico("lista")}</button>
<div class="velo" id="velo" hidden></div>
<aside class="drawer" id="drawer" role="dialog" aria-modal="true" aria-labelledby="d-titulo" inert>
<div class="d-cab"><h2 id="d-titulo"></h2><div class="d-acc"><button type="button" class="btn-sonido en-drawer" id="sonido-drawer" aria-pressed="false" aria-label="Activar el sonido" title="Activar el sonido">${ico("sonido-off")}</button><button type="button" class="btn-cerrar" id="cerrar-drawer" aria-label="Cerrar">${ico("cerrar")}</button></div></div>
<p class="aviso-sonido d-aviso" id="aviso-sonido-d" role="status"></p>
<label class="d-buscar"><span class="vh">Buscar en los apuntes</span>${ico("lupa")}<input type="search" id="buscar" placeholder="Buscar en los apuntes" autocomplete="off" spellcheck="false"></label>
<p class="d-vacio" id="d-vacio" role="status" hidden>Ningún apunte lo nombra.</p>
<nav aria-label="Ruta de apuntes"><h3 class="d-h">Ruta del módulo</h3><ol class="d-ruta" id="d-ruta"></ol></nav>
<nav aria-label="Otros módulos"><h3 class="d-h">Otros módulos</h3><ul class="d-otros">${otrosDrawer}</ul><p class="d-nota" id="d-nota" role="status"></p></nav>
<nav aria-label="Clases en orden"><h3 class="d-h">Clases en orden</h3><ol class="d-clases">
${clasesDrawer}
</ol></nav>
</aside>

${plantillas}

<script>
const MODULOS=${JSON.stringify(MODS_JS)},EN_CURSO=${EN_CURSO},ICO_DERECHA=${JSON.stringify(ico("derecha"))};
${leer(path.join(AQUI, "src", "app.js"))}
</script>
<script>
${ESCENAS_JS}
</script>
</body>
</html>
`

;(async () => {
  await activos()
  fs.writeFileSync(path.join(AQUI, "index.html"), HTML)
  try { require("./procedencia.cjs")(AQUI, IMG) } catch (e) { aviso("procedencia: " + e.message) }
  console.log(`ok index.html ${(HTML.length / 1024) | 0} KB · ${RUTA.length} entradas en ${MODS.filter(m => m.rutas.length).length} módulos (${MODS.map(m => `M${m.n}:${m.rutas.length}`).join(" ")}) · ${RUTA.filter(r => r.p).length} prácticas · ${IMG.size} imágenes · hero .${EXT} · ${CLASES.length} clases`)
})().catch(e => { console.error(e); process.exit(1) })
