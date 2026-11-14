// Procedencia de cada raster que viaja con el prototipo: la incrusta con `impeccable embed-prompt` (que luego revisa `embed-prompt --scan`).
// build.cjs lo llama al terminar; si el ejecutable no está, solo avisa. Los PNG de img/ se copian en cada build, así que se vuelven a firmar.
const fs = require("fs"), path = require("path"), cp = require("child_process"), os = require("os")
const CLI = "C:/dev/agatha-os/skills/impeccable/scripts/impeccable.cmd"

module.exports = function (AQUI, IMG) {
  if (!fs.existsSync(CLI)) throw new Error("no encuentro el ejecutable de impeccable: la procedencia queda sin incrustar")
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "okaeri-proc-"))
  const GEMINI = "Origen: ilustración pixel art generada por el usuario con Gemini el 2026-11-07 (hero_gemini.jpg y capa1/3/4/5_*_gemini.jpg en .impeccable/mocks/lugares/hero/), aprobada por el usuario el 2026-11-09. Se separó en capas con .impeccable/mocks/lugares/hero/capas.cjs y el prototipo la convierte a WebP con build.cjs. El prompt exacto no se conservó en el repositorio."
  const lista = []
  for (const [f, extra] of [["1_fondo", ""], ["2_arbol", ""], ["3_medio", ""], ["4_frente", " Además, build.cjs (frenteHundido) oscurece sus 380 px inferiores con dither de Bayer 4x4 en bloques de 8 px hacia #040e10, para fundirse con la franja de módulos."]]) {
    const f1 = ["webp", "png"].map(e => path.join(AQUI, "hero", f + "." + e)).find(fs.existsSync)
    if (f1) lista.push([f1, "Capa del hero de Okaeri (prototipo web). " + GEMINI + extra])
  }
  const NOCHE = "Origen: ilustración pixel art generada por el usuario con Gemini el 2026-11-13 a partir del hero de día aprobado: hero_noche_gemini.jpg (la misma escena de noche, mismo encuadre) y capa1/3/4/5_*_noche_gemini.jpg (una edición por capa, con fondo magenta) en .impeccable/mocks/lugares/hero/noche/. El prompt exacto no se conservó en el repositorio. Se separó en capas con .impeccable/mocks/lugares/hero/capas_noche.cjs (cielo de un solo color #1A345C por relleno desde el borde superior, 600 px de cielo agregados arriba) y el prototipo la convierte a WebP con build.cjs."
  for (const f of ["1_fondo", "2_arbol", "3_medio", "4_frente"]) {
    const f1 = ["webp", "png"].map(e => path.join(AQUI, "hero", "noche", f + "." + e)).find(fs.existsSync)
    if (f1) lista.push([f1, "Capa del hero de noche de Okaeri (prototipo web, tema oscuro). " + NOCHE + (f === "4_frente" ? " Además, build.cjs (frenteHundido) oscurece sus 380 px inferiores con dither de Bayer 4x4 hacia #040e10." : "")])
  }
  lista.push([path.join(AQUI, "hero", "suelo.png"), "Suelo de bosque de la franja de módulos del prototipo web de Okaeri. Producido por código, sin modelo de imagen: build.cjs (sueloFranja) con ruido de valor, semilla fija 20261109, paleta de 4 verdes oscuros, celdas de 8 px y dither de Bayer 4x4."])
  for (const [, n] of IMG) lista.push([path.join(AQUI, "img", n), `Diagrama propio del repositorio Okaeri (apuntes de guitarra, fundamentos/guitarra/**/img/${n}), hecho con el procedimiento crear-diagrama del proyecto. Copia sin cambios para el prototipo web.`])
  let fallos = 0
  for (const [f, texto] of lista) {
    if (!fs.existsSync(f)) continue
    const p = path.join(tmp, "p.txt"); fs.writeFileSync(p, texto)
    const r = cp.spawnSync(`"${CLI}"`, ["embed-prompt", `"${f}"`, "--prompt-file", `"${p}"`], { shell: true, encoding: "utf8" })
    if (r.status !== 0) { fallos++; if (fallos <= 2) console.warn("procedencia:", path.basename(f), (r.stderr || r.stdout || "").trim().slice(0, 200)) }
  }
  try { fs.rmSync(tmp, { recursive: true, force: true }) } catch { }
  console.log(`procedencia: ${lista.length - fallos}/${lista.length} rasters firmados`)
}
