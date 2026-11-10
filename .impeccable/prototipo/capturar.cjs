// Capturas del prototipo con Chrome headless por CDP (sin dependencias; Node 22+). Uso: node capturar.cjs <salida> [escritorio|movil|ambos]
// Escribe un PNG por toma en <salida>/ y, si hay sharp, una hoja de contacto por tamaño. Las animaciones quedan como están: cada toma es un instante.
const fs = require("fs"), path = require("path"), cp = require("child_process"), os = require("os")
const SALIDA = path.resolve(process.argv[2] || "capturas"), QUE = process.argv[3] || "ambos"
const URL_ = "file:///" + path.join(__dirname, "index.html").replace(/\\/g, "/")
const CHROME = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find(fs.existsSync)
const PUERTO = 9400 + Math.floor(Math.random() * 400)
const dormir = ms => new Promise(r => setTimeout(r, ms))
fs.mkdirSync(SALIDA, { recursive: true })

const TOMAS = {
  escritorio: { w: 1440, h: 900, pasos: [
    ["01-hero", "scrollTo(0,0)"],
    ["02-parallax", "scrollTo(0,480)"],
    ["03-franja", "document.querySelector('#modulos').scrollIntoView({behavior:'instant'})"],
    ["04-fogata-inicio", "document.querySelector('#corte-fogata').scrollIntoView({behavior:'instant'})"],
    ["05-fogata-medio", "scrollTo(0,document.querySelector('#corte-fogata').offsetTop+1500)"],
    ["05b-rama-entre-apuntes", "(()=>{const s=document.querySelector('.sep'),r=s.getBoundingClientRect();scrollTo(0,scrollY+r.top-(innerHeight-r.height)/2)})()"],
    ["06-practica-en-sitio", "(()=>{const ap=document.querySelector('#a-dedos');ap.querySelector('[data-ver=practica]').click();ap.scrollIntoView({behavior:'instant'})})()"],
    ["06b-paso-brasas", "(()=>{const p=document.querySelector('.paso'),r=p.getBoundingClientRect();scrollTo(0,scrollY+r.top-(innerHeight-r.height)/2)})()"],
    ["06c-entrada-muelle", "scrollTo(0,document.querySelector('#corte-muelle').offsetTop-120)"],
    ["07-muelle-inicio", "document.querySelector('#corte-muelle').scrollIntoView({behavior:'instant'})"],
    ["08-tablas-muelle", "scrollTo(0,document.querySelector('#a-ocho-acordes').offsetTop+document.querySelector('#corte-muelle').offsetTop+260)"],
    ["09-cierre", "document.querySelector('.cierre').scrollIntoView({behavior:'instant'})"],
    ["10-drawer", "document.querySelector('#abrir-drawer').click()"]
  ] },
  movil: { w: 390, h: 844, mobile: true, pasos: [
    ["m1-hero", "scrollTo(0,0)"],
    ["m2-franja", "document.querySelector('#modulos').scrollIntoView({behavior:'instant'})"],
    ["m3-fogata", "document.querySelector('#corte-fogata').scrollIntoView({behavior:'instant'})"],
    ["m4-apunte", "scrollTo(0,document.querySelector('#a-notas-y-cuerdas').getBoundingClientRect().top+scrollY+120)"],
    ["m5-tabla", "scrollTo(0,document.querySelector('#a-dedos').getBoundingClientRect().top+scrollY+520)"],
    ["m6-drawer", "document.querySelector('#abrir-drawer').click()"]
  ] }
}

;(async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "okaeri-chrome-"))
  const proc = cp.spawn(CHROME, [`--remote-debugging-port=${PUERTO}`, `--user-data-dir=${dir}`, "--headless=new", "--no-first-run", "--no-default-browser-check", "--disable-extensions", "--mute-audio", "--force-device-scale-factor=1", "about:blank"], { stdio: "ignore" })
  try {
    let objetivo
    for (let i = 0; i < 60 && !objetivo; i++) { await dormir(250); try { objetivo = (await (await fetch(`http://127.0.0.1:${PUERTO}/json/list`)).json()).find(t => t.type === "page") } catch { } }
    if (!objetivo) throw new Error("Chrome no abrió")
    const ws = new WebSocket(objetivo.webSocketDebuggerUrl); await new Promise(r => ws.addEventListener("open", r))
    let n = 0; const esperando = new Map(), eventos = []
    ws.addEventListener("message", m => { const d = JSON.parse(m.data); if (d.id && esperando.has(d.id)) { esperando.get(d.id)(d); esperando.delete(d.id) } else eventos.push(d) })
    const cmd = (method, params = {}) => new Promise(r => { const id = ++n; esperando.set(id, r); ws.send(JSON.stringify({ id, method, params })) })
    await cmd("Page.enable"); await cmd("Runtime.enable")
    const consola = []
    ws.addEventListener("message", m => { const d = JSON.parse(m.data); if (d.method === "Runtime.consoleAPICalled" && ["error", "warning"].includes(d.params.type)) consola.push(d.params.args.map(a => a.value || a.description).join(" ")); if (d.method === "Runtime.exceptionThrown") consola.push("EXC " + d.params.exceptionDetails.text + " " + (d.params.exceptionDetails.exception?.description || "")) })
    const ev = expresion => cmd("Runtime.evaluate", { expression: expresion, returnByValue: true, awaitPromise: true })

    const hojas = {}
    for (const [nombre, T] of Object.entries(TOMAS)) {
      if (QUE !== "ambos" && QUE !== nombre) continue
      await cmd("Emulation.setDeviceMetricsOverride", { width: T.w, height: T.h, deviceScaleFactor: 1, mobile: !!T.mobile })
      await cmd("Page.navigate", { url: URL_ }); await dormir(3500)
      const archivos = []
      for (const [id, js] of T.pasos) {
        if (id.endsWith("drawer")) { await ev("document.documentElement.scrollTo(0,0)"); await ev("document.querySelector('#corte-fogata').scrollIntoView({behavior:'instant'})"); await dormir(300) }
        await ev(js); await dormir(id.endsWith("drawer") ? 700 : 900)
        const r = await cmd("Page.captureScreenshot", { format: "png" })
        const f = path.join(SALIDA, id + ".png"); fs.writeFileSync(f, Buffer.from(r.result.data, "base64")); archivos.push(f)
        if (id.endsWith("drawer")) await ev("document.querySelector('#cerrar-drawer').click()")
      }
      // medidas útiles de una vez
      const med = await ev(`(()=>{const r=s=>{const e=document.querySelector(s);if(!e)return null;const b=e.getBoundingClientRect();return [Math.round(b.width),Math.round(b.height)]};return JSON.stringify({ancho:innerWidth,scrollX:document.documentElement.scrollWidth,escena:r('.escena'),apunte:r('.apunte'),h1:getComputedStyle(document.querySelector('.logo')).fontSize,cuerpo:getComputedStyle(document.querySelector('.ap-cuerpo p')).fontSize,fuentes:[...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family+' '+f.weight+' '+f.style)})})()`)
      console.log(nombre, med.result.result.value)
      hojas[nombre] = archivos
    }
    console.log("consola:", consola.length ? consola.slice(0, 12).join("\n  ") : "sin errores ni avisos")
    ws.close()

    // hoja de contacto (si hay sharp)
    let sharp; try { sharp = require("C:/dev/entertechschool/app_enterbase/node_modules/sharp") } catch { }
    if (sharp) for (const [nombre, archivos] of Object.entries(hojas)) {
      const T = TOMAS[nombre], cols = nombre === "movil" ? 6 : 2, ancho = nombre === "movil" ? 260 : 720, alto = Math.round(ancho * T.h / T.w), sep = 8
      const filas = Math.ceil(archivos.length / cols)
      const piezas = await Promise.all(archivos.map(async (f, i) => ({ input: await sharp(f).resize(ancho, alto).png().toBuffer(), left: (i % cols) * (ancho + sep), top: Math.floor(i / cols) * (alto + sep) })))
      await sharp({ create: { width: cols * ancho + (cols - 1) * sep, height: filas * alto + (filas - 1) * sep, channels: 3, background: "#808080" } }).composite(piezas).png().toFile(path.join(SALIDA, `hoja-${nombre}.png`))
    }
  } finally { proc.kill(); setTimeout(() => { try { fs.rmSync(dir, { recursive: true, force: true }) } catch { } }, 1500) }
})().catch(e => { console.error(e); process.exit(1) })
