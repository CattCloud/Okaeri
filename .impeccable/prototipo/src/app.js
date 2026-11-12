// Okaeri · web. Sin dependencias. Con prefers-reduced-motion: capas quietas, cortes limpios.
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)]
  const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  const salto = (el, opts = {}) => el.scrollIntoView({ block: "start", behavior: quieto ? "auto" : (opts.suave === false ? "instant" : "smooth") })

  // ---------- 1. hero: cada capa va a su velocidad; el bosque del frente (velocidad 0) sube con la página y cubre el paisaje ----------
  const hero = $(".hero")
  const V = { fondo: .55, logo: .3, arbol: .4, medio: .22, frente: 0 }   // el logo sube más rápido que el árbol: nunca lo cruza
  const capas = { fondo: $(".fondo"), arbol: $(".arbol"), medio: $(".medio"), frente: $(".frente"), logo: $(".logo") }
  let pend = false
  function pintar() {
    pend = false
    const y = Math.min(scrollY, hero.offsetHeight)
    for (const n in V) capas[n].style.transform = `translate3d(0,${(y * V[n]).toFixed(1)}px,0)`
    capas.logo.style.opacity = Math.max(0, 1 - y / (hero.offsetHeight * .45)).toFixed(2)
  }
  if (!quieto) { addEventListener("scroll", () => { if (!pend) { pend = true; requestAnimationFrame(pintar) } }, { passive: true }); pintar() }

  // ---------- 2. zona de la página (qué hay en el centro de la pantalla): manda el botón del drawer, el sonido y las escenas ----------
  const zonas = [["hero", ".hero"], ["franja", ".franja"], ["fogata", "#corte-fogata"], ["paso", ".paso"], ["muelle", "#corte-muelle"], ["cierre", ".cierre"]]
  const visibles = new Set()
  const ioZona = new IntersectionObserver(es => {
    for (const e of es) { const z = e.target.dataset.zona; e.isIntersecting ? visibles.add(z) : visibles.delete(z) }
    const z = zonas.map(x => x[0]).find(x => visibles.has(x))
    if (z && document.body.dataset.zona !== z) { document.body.dataset.zona = z; mezclar() }
  }, { rootMargin: "-50% 0px -50% 0px" })
  zonas.forEach(([z, s]) => { const el = $(s); el.dataset.zona = z; ioZona.observe(el) })

  // las escenas solo piden cuadros mientras se ven
  const ioEscena = new IntersectionObserver(es => es.forEach(e => window.COMPUERTAS && COMPUERTAS[e.target.dataset.escena].set(e.isIntersecting)), { rootMargin: "10% 0px" })
  $$(".escena").forEach(el => { el.dataset.escena = el.classList.contains("escena-fogata") ? "fogata" : "muelle"; ioEscena.observe(el) })

  // ---------- 3. módulos: se elige uno en la franja (o en el drawer) y sus apuntes entran en las dos escenas ----------
  const modulo = $("#modulo"), det = $("#fr-det"), apFogata = $("#corte-fogata .apuntes"), apMuelle = $("#corte-muelle .apuntes")
  let actual = 0
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
  const plural = (n, uno, varios) => n + " " + (n === 1 ? uno : varios)
  const dePlantilla = id => { const t = document.getElementById(id); return t ? t.content.cloneNode(true) : document.createDocumentFragment() }
  const modDe = k => (MODULOS.find(m => m.claves.includes(k)) || {}).n
  function detalle(m) {
    const hay = m.claves.length > 0
    const meta = hay ? (m.enCurso ? "En curso · " : "") + plural(m.nApuntes, "apunte", "apuntes") + " · " + plural(m.nPracticas, "práctica", "prácticas") : "Sin apuntes aún"
    det.innerHTML = `<h3 class="fr-nombre">${esc(m.nombre)}</h3>${m.resultado ? `<p class="fr-res">${esc(m.resultado)}</p>` : ""}<p class="fr-meta">${meta}</p>${hay ? `<a class="btn-px" href="#corte-fogata">Entrar al módulo ${ICO_DERECHA}</a>` : ""}`
  }
  function cargar(n) {
    const m = MODULOS[n - 1]; if (!m || actual === n) return
    actual = n
    $$(".mod").forEach(b => { const on = +b.dataset.mod === n; b.setAttribute("aria-pressed", String(on)); b.classList.toggle("act", on) })
    detalle(m)
    const hay = m.claves.length > 0
    modulo.hidden = !hay
    apFogata.replaceChildren(hay ? dePlantilla(`m${n}-fogata`) : ""); apMuelle.replaceChildren(hay ? dePlantilla(`m${n}-muelle`) : "")
    $("#corte-muelle").hidden = $(".paso").hidden = !m.hayMuelle
    $("#cierre-t").textContent = "Fin de " + m.nombre
    const sig = MODULOS[n], bsig = $("#siguiente")   // MODULOS[n] es el módulo n+1
    bsig.hidden = !sig
    if (sig) { bsig.dataset.siguiente = sig.n; $("#siguiente-sub").textContent = `M${sig.n} · ${sig.nombre}` }
    // drawer: la ruta del módulo, sin búsqueda previa, y "Otros módulos" sin el actual
    $("#d-titulo").textContent = `M${n} · ${m.nombre}`
    $("#d-ruta").replaceChildren(hay ? dePlantilla(`m${n}-ruta`) : "")
    $("#buscar").value = ""; $("#d-vacio").hidden = true; $("#d-nota").textContent = ""
    $$(".d-otros li").forEach(li => { li.hidden = +li.dataset.mod === n })
    observarApuntes()
  }
  $$(".mod").forEach(b => b.addEventListener("click", () => cargar(+b.dataset.mod)))
  $("#siguiente").addEventListener("click", () => cargar(+$("#siguiente").dataset.siguiente))

  // ---------- 4. teoría / práctica en el sitio del apunte, y saltos entre apuntes (aunque sean de otro módulo) ----------
  function ver(ap, v, fuera) {
    if (ap.hasAttribute("data-solo")) { if (fuera) salto(ap, { suave: false }); return }   // práctica suelta: no tiene pestañas
    $$(".vista button", ap).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.ver === v)))
    $$("[data-panel]", ap).forEach(p => { p.hidden = p.dataset.panel !== v })
    ap.dataset.vista = v
    // si el apunte empieza arriba de la pantalla, su cabecera vuelve a verse para que el otro panel empiece a la vista
    if (fuera || ap.getBoundingClientRect().top < 0) salto(ap, { suave: false })
  }
  // id = "a-<clave>" lleva al apunte; "p-<clave>", a su práctica
  function irA(id) {
    const k = id.replace(/^[ap]-/, ""), n = modDe(k); if (!n) return
    cargar(n)
    const ap = $(`#a-${k}`)
    if (id.startsWith("p-")) ver(ap, "practica", true); else if (ap.dataset.vista === "practica") ver(ap, "teoria", true); else salto(ap, { suave: false })
    $(".ap-titulo", ap)?.focus({ preventScroll: true })
    history.replaceState(null, "", "#" + id)
  }
  modulo.addEventListener("click", e => {
    const b = e.target.closest(".vista button"); if (b) return ver(b.closest(".apunte"), b.dataset.ver)
    const a = e.target.closest('a.ref[href^="#"]'); if (!a) return
    const id = a.getAttribute("href").slice(1)
    if (!document.getElementById(id)) { e.preventDefault(); irA(id) }   // en este módulo el ancla lleva sola; si es de otro, se carga primero
  })
  const porHash = () => { const h = decodeURIComponent(location.hash.slice(1)); if (/^[ap]-/.test(h)) irA(h) }
  addEventListener("hashchange", porHash)

  // ---------- 5. drawer ----------
  const drawer = $("#drawer"), velo = $("#velo"), abrir = $("#abrir-drawer"), cerrar = $("#cerrar-drawer")
  const fondo = [$("main"), $(".hero"), abrir]
  function abreDrawer(v) {
    if (v === !drawer.inert) return
    drawer.inert = !v; velo.hidden = !v
    drawer.classList.toggle("abierto", v); velo.classList.toggle("abierto", v)
    abrir.setAttribute("aria-expanded", String(v)); document.documentElement.classList.toggle("sin-scroll", v)
    fondo.forEach(el => { el.inert = v })
    if (v) setTimeout(() => $("#buscar").focus({ preventScroll: true }), quieto ? 0 : 60); else abrir.focus({ preventScroll: true })
  }
  // en pantallas angostas el botón se esconde al bajar y vuelve al subir, para no tapar el texto
  let yPrev = scrollY
  addEventListener("scroll", () => {
    const y = scrollY
    if (!matchMedia("(max-width:1199px)").matches || !drawer.inert) { abrir.classList.remove("oculto"); yPrev = y; return }
    if (y > yPrev + 6 && y > 400) abrir.classList.add("oculto"); else if (y < yPrev - 6) abrir.classList.remove("oculto")
    yPrev = y
  }, { passive: true })
  abrir.addEventListener("focus", () => abrir.classList.remove("oculto"))
  abrir.addEventListener("click", () => abreDrawer(true)); cerrar.addEventListener("click", () => abreDrawer(false)); velo.addEventListener("click", () => abreDrawer(false))
  addEventListener("keydown", e => { if (e.key === "Escape" && !drawer.inert) abreDrawer(false) })
  // enlaces del drawer: el apunte, o su práctica abierta en el sitio
  drawer.addEventListener("click", e => {
    const a = e.target.closest("a[href^='#']"); if (!a) return
    e.preventDefault(); abreDrawer(false)
    const id = a.getAttribute("href").slice(1)
    setTimeout(() => irA(id), 0)
  })
  // otros módulos: con apuntes se abren desde el primero; sin apuntes avisan
  $$(".d-mod").forEach(b => b.addEventListener("click", () => {
    const n = +b.dataset.mod
    if (!MODULOS[n - 1].claves.length) { $("#d-nota").textContent = `M${n} todavía no tiene apuntes.`; return }
    abreDrawer(false); cargar(n)
    setTimeout(() => salto($("#corte-fogata"), { suave: false }), 0)
  }))
  // buscador de la ruta
  $("#buscar").addEventListener("input", e => {
    const q = norm(e.target.value.trim()); let n = 0
    $$("#d-ruta > li").forEach(li => { const ok = !q || li.dataset.t.includes(q); li.hidden = !ok; if (ok) n++ })
    $("#d-vacio").hidden = n > 0
  })
  // el apunte que se está leyendo queda marcado en la ruta
  const ioAp = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return
    $$(".d-ap[aria-current]", drawer).forEach(a => a.removeAttribute("aria-current"))
    $(`.d-ap[data-k="${e.target.dataset.k}"]`, drawer)?.setAttribute("aria-current", "location")
  }), { rootMargin: "-40% 0px -55% 0px" })
  function observarApuntes() { ioAp.disconnect(); $$(".apunte").forEach(ap => ioAp.observe(ap)) }

  // ---------- 6. sonido: celta en el hero, la franja y la fogata; pantano en el muelle. Los archivos van en audio/ (celta.mp3, pantano.mp3) ----------
  const PISTAS = { celta: "audio/celta.mp3", pantano: "audio/pantano.mp3" }
  const N = Object.keys(PISTAS).length, pistas = {}, faltan = new Set()
  let sonando = false
  const botones = [$("#sonido"), $("#sonido-drawer")]
  const mensaje = t => [$("#aviso-sonido"), $("#aviso-sonido-d")].forEach(p => { p.textContent = t; p.classList.toggle("ver", !!t) })
  function pintarBotones() {
    const sin = faltan.size === N
    botones.forEach(b => { b.setAttribute("aria-pressed", String(sonando)); b.classList.toggle("sin-audio", sin); $("use", b).setAttribute("href", sonando ? "#i-sonido-on" : "#i-sonido-off") })
    const txt = sin ? "Sonido no disponible: faltan los archivos de audio" : sonando ? "Apagar el sonido" : "Activar el sonido"
    botones.forEach(b => { b.setAttribute("aria-label", txt); b.title = txt })
  }
  function pista(n) {
    if (pistas[n]) return pistas[n]
    const a = new Audio(PISTAS[n]); a.loop = true; a.volume = 0; a.preload = "auto"
    a.addEventListener("error", () => { faltan.add(n); if (faltan.size === N) sonando = false; mensaje("Sin audio: faltan " + [...faltan].map(k => PISTAS[k].replace("audio/", "")).join(" y ") + " en la carpeta audio/."); pintarBotones() })
    return pistas[n] = a
  }
  const pistaDeZona = () => { const z = document.body.dataset.zona; return z === "paso" || z === "muelle" || (z === "cierre" && MODULOS[actual - 1]?.hayMuelle) ? "pantano" : "celta" }
  function fundir(a, objetivo, ms = quieto ? 0 : 1600, pausar = false) {
    clearInterval(a._f); const ini = a.volume, t0 = performance.now()
    if (objetivo > 0 && a.paused) a.play().catch(() => { })
    const fin = () => { a.volume = objetivo; if (pausar) a.pause() }
    if (!ms) return fin()
    a._f = setInterval(() => { const u = Math.min(1, (performance.now() - t0) / ms); a.volume = ini + (objetivo - ini) * u; if (u >= 1) { clearInterval(a._f); fin() } }, 50)
  }
  function mezclar() {
    if (!sonando) return
    const activa = pistaDeZona()
    for (const n of Object.keys(PISTAS)) if (pistas[n] && !faltan.has(n)) fundir(pistas[n], n === activa ? .7 : 0)
  }
  // las dos pistas se crean y arrancan dentro del clic (los navegadores solo lo permiten con un gesto); la inactiva queda en volumen 0
  function sonido(v) {
    sonando = v
    if (v) { for (const n of Object.keys(PISTAS)) { const a = pista(n); if (!faltan.has(n) && a.paused) a.play().catch(() => { }) } mezclar() }
    else Object.values(pistas).forEach(a => fundir(a, 0, quieto ? 0 : 600, true))
    pintarBotones()
  }
  botones.forEach(b => b.addEventListener("click", () => {
    if (faltan.size === N) { faltan.clear(); Object.keys(pistas).forEach(k => delete pistas[k]); mensaje("") }   // reintenta si el usuario los puso después
    sonido(!sonando)
  }))

  // ---------- 7. arranque: el módulo en curso, o el del apunte que pida la dirección ----------
  cargar(modDe(decodeURIComponent(location.hash.slice(1)).replace(/^[ap]-/, "")) || EN_CURSO)
  porHash()
})()
