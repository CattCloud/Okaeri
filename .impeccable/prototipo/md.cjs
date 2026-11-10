// Markdown de apuntes y prácticas -> HTML del prototipo. Solo lo que usan los .md de Okaeri: frontmatter, h1-h3, párrafos, citas (con listas dentro), tablas,
// listas (con bloques continuados), figuras con pie, **negrita**, *cursiva*, `código` y enlaces. Los emojis nunca llegan al HTML: se cambian por íconos
// pixel (PRODUCT.md: «Sin emojis en la interfaz») y, si queda alguno, el build falla.
const fs = require("fs"), path = require("path")

const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
const icono = (n, cl = "ico") => `<svg class="${cl}" viewBox="0 0 12 12" aria-hidden="true"><use href="#i-${n}"/></svg>`

function frontmatter(txt) {
  const m = txt.replace(/\r/g, "").match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) return { fm: {}, cuerpo: txt }
  const fm = {}
  for (const l of m[1].split("\n")) { const k = l.match(/^(\w+):\s*(.*)$/); if (k) fm[k[1]] = k[2].replace(/^"(.*)"$/, "$1") }
  return { fm, cuerpo: m[2] }
}

// contexto: { tabla:boolean, enlaces:(archivo)=>string|null, aviso:(msg)=>void }
function inline(s, ctx = {}) {
  const guardas = []
  const guarda = h => { guardas.push(h); return `\u0000${guardas.length - 1}\u0000` }
  s = s.replace(/`([^`]+)`/g, (_, c) => guarda(`<code>${esc(c)}</code>`))
  // imágenes dentro de una celda de tabla (los diagramas de acorde van en rejillas)
  s = s.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, a, h) => guarda(`<img class="cel-img" src="${ctx.imagen ? ctx.imagen(h) : h}" alt="${esc(a)}" loading="lazy" decoding="async">`))
  // emojis -> íconos. Los círculos de color de la tabla de dedos son puntos de color; fuera de ella son niveles de práctica.
  const dedos = { "🔴": "d1", "🟠": "d2", "🟢": "d3", "🔵": "d4" }
  s = s.replace(/[🔴🟠🟢🔵]/gu, e => ctx.tabla ? guarda(`<span class="dedo ${dedos[e]}" aria-hidden="true"></span>`) : guarda(icono(e === "🔵" ? "nivel-1" : "nivel-2", "ico ico-nivel")))
  s = s.replace(/🔥/gu, () => guarda(icono("nivel-3", "ico ico-nivel")))
  s = s.replace(/📋️?/gu, () => guarda(icono("repaso")))
  s = s.replace(/⚠️?/gu, () => guarda(icono("aviso")))
  s = s.replace(/🎯️?/gu, () => guarda(icono("meta")))
  s = s.replace(/⏱️?/gu, () => guarda(icono("reloj")))
  s = s.replace(/🖨️?/gu, () => guarda(icono("impresora")))
  s = s.replace(/↔️?/gu, () => guarda(icono("ambos", "ico ico-flecha")))
  s = esc(s)
  s = s.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, "$1<i>$2</i>")
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, h) => {
    const m = h.match(/^([^#]*\.md)(#.*)?$/)
    if (!m) return `<a href="${h}">${t}</a>`
    const dest = ctx.enlaces ? ctx.enlaces(m[1]) : null
    return dest ? `<a class="ref" href="${dest}">${t}</a>` : `<span class="ref ref-fuera" title="Fuera del módulo: no está conectado en el prototipo">${t}</span>`
  })
  s = s.replace(/\u0000(\d+)\u0000/g, (_, i) => guardas[+i])
  return s
}

function tabla(lineas, ctx) {
  const celdas = l => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(c => c.trim())
  const enc = celdas(lineas[0]), alin = celdas(lineas[1]).map(c => /^:-+:$/.test(c) ? "c" : /-+:$/.test(c) ? "r" : "")
  const c2 = { ...ctx, tabla: true }
  const fila = (cs, t) => `<tr>${cs.map((c, i) => `<${t}${alin[i] ? ` class="a-${alin[i]}"` : ""}>${inline(c, c2)}</${t}>`).join("")}</tr>`
  return `<div class="tabla" tabindex="0" role="region" aria-label="Tabla"><table><thead>${fila(enc, "th")}</thead><tbody>${lineas.slice(2).map(l => fila(celdas(l), "td")).join("")}</tbody></table></div>`
}

const esItem = l => /^(\s*)([-*]|\d+\.)\s+/.test(l)
const esBloque = l => /^(#{1,3}\s|\||>|!\[)/.test(l) || esItem(l)

function bloques(lineas, ctx, nivel = 0) {
  const out = []
  let i = 0
  while (i < lineas.length) {
    const l = lineas[i]
    if (!l.trim() || /^---\s*$/.test(l)) { i++; continue }
    let m
    if ((m = l.match(/^(#{1,3})\s+(.*)$/))) {
      const n = m[1].length
      let t = m[2]
      if (n === 1) t = t.replace(/^[^\p{L}\p{N}"«¿¡]+/u, "")           // el h1 pierde su emoji de cabecera
      out.push({ tipo: "h", n, html: inline(t, ctx), texto: t }); i++; continue
    }
    if (l.startsWith("|")) { const t = []; while (i < lineas.length && lineas[i].startsWith("|")) t.push(lineas[i++]); out.push({ tipo: "html", html: tabla(t, ctx) }); continue }
    if (l.startsWith(">")) {
      const t = []; while (i < lineas.length && lineas[i].startsWith(">")) t.push(lineas[i++].replace(/^>\s?/, ""))
      out.push({ tipo: "cita", hijos: bloques(t, ctx, nivel + 1), crudo: t.join("\n") }); continue
    }
    if (/^!\[/.test(l)) {
      const t = [l]; i++; while (i < lineas.length && lineas[i].trim() && !/^!\[/.test(lineas[i]) && !esBloque(lineas[i])) t.push(lineas[i++])
      const mm = t.join(" ").match(/^!\[(.*?)\]\(([^)]*)\)\s*(.*)$/)
      if (!mm) { out.push({ tipo: "p", html: inline(t.join(" "), ctx) }); continue }
      const src = ctx.imagen ? ctx.imagen(mm[2]) : mm[2]
      out.push({ tipo: "html", html: `<figure><img src="${src}" alt="${esc(mm[1])}" loading="lazy" decoding="async">${mm[3] ? `<figcaption>${inline(mm[3], ctx)}</figcaption>` : ""}</figure>` }); continue
    }
    if (esItem(l)) {
      const ord = /^\s*\d+\./.test(l), items = []
      while (i < lineas.length && (esItem(lineas[i]) || (!lineas[i].trim() && i + 1 < lineas.length && /^\s{2,}\S/.test(lineas[i + 1])) || /^\s{2,}\S/.test(lineas[i]))) {
        if (!lineas[i].trim()) { i++; continue }
        if (esItem(lineas[i]) && !/^\s{2,}\S/.test(lineas[i])) {
          const cuerpo = [lineas[i].replace(/^\s*([-*]|\d+\.)\s+/, "")]; i++
          while (i < lineas.length && (/^\s{2,}\S/.test(lineas[i]) || (!lineas[i].trim() && i + 1 < lineas.length && /^\s{2,}\S/.test(lineas[i + 1])))) cuerpo.push(lineas[i++].replace(/^\s{2,4}/, ""))
          items.push(cuerpo)
        } else { i++ }
      }
      out.push({ tipo: "lista", ord, items: items.map(c => bloques(c, ctx, nivel + 1)) }); continue
    }
    const t = [l]; i++
    while (i < lineas.length && lineas[i].trim() && !esBloque(lineas[i]) && !/^---\s*$/.test(lineas[i])) t.push(lineas[i++])
    out.push({ tipo: "p", html: inline(t.join(" "), ctx), texto: t.join(" ") })
  }
  return out
}

const sinP = h => h.replace(/^<p[^>]*>([\s\S]*)<\/p>$/, "$1")

function render(bs, nivelH = 4) {
  return bs.map(b => {
    if (b.tipo === "html") return b.html
    if (b.tipo === "h") { const n = Math.min(6, nivelH + b.n - 2); return `<h${n} class="t${b.n}">${b.html}</h${n}>` }
    if (b.tipo === "p") {
      if (/^<b>Antes de esto necesitas:?<\/b>/.test(b.html) || /^<b>Antes de esto necesitas:<\/b>/.test(b.html)) return `<p class="previo">${b.html}</p>`
      return `<p>${b.html}</p>`
    }
    if (b.tipo === "lista") return `<${b.ord ? "ol" : "ul"}>${b.items.map(it => `<li>${it.map(x => x.tipo === "p" ? sinP(render([x])) : render([x], nivelH)).join("")}</li>`).join("")}</${b.ord ? "ol" : "ul"}>`
    if (b.tipo === "cita") {
      const primero = b.hijos[0], txt = (primero && primero.texto) || ""
      let clase = "clave", cab = ""
      if (/Repaso en una pantalla/i.test(txt)) { clase = "repaso"; cab = `<p class="cab">${icono("repaso", "ico")}<span>Repaso en una pantalla</span></p>`; b.hijos = b.hijos.slice(1) }
      else if (/Versión imprimible/i.test(txt)) clase = "nota"
      else if (!/^\*\*/.test(txt)) clase = "nota"
      return `<blockquote class="${clase}">${cab}${render(b.hijos, nivelH)}</blockquote>`
    }
    return ""
  }).join("\n")
}

// devuelve { fm, titulo, html, texto } para un archivo; ctx lleva el mapa de enlaces y de imágenes
function convertir(archivo, ctx) {
  const { fm, cuerpo } = frontmatter(fs.readFileSync(archivo, "utf8"))
  const c = { ...ctx, imagen: src => ctx.imagen(path.resolve(path.dirname(archivo), src), src) }
  const bs = bloques(cuerpo.replace(/\r/g, "").split("\n"), c)
  const h1 = bs.find(b => b.tipo === "h" && b.n === 1)
  const resto = bs.filter(b => b !== h1)
  const html = render(resto)
  if (/\p{Extended_Pictographic}/u.test(html.replace(/<svg[\s\S]*?<\/svg>/g, ""))) {
    const sobra = [...new Set(html.match(/\p{Extended_Pictographic}/gu))]
    throw new Error(`${path.basename(archivo)}: quedaron emojis sin ícono: ${sobra.join(" ")}`)
  }
  const plano = resto.length ? html.replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/\s+/g, " ").trim() : ""
  return { fm, titulo: h1 ? h1.texto : fm.titulo, tituloHtml: h1 ? h1.html : esc(fm.titulo || ""), html, texto: plano }
}

module.exports = { convertir, inline, icono, esc }
