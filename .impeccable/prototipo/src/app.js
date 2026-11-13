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
  const DEL_MODULO = ["fogata", "paso", "muelle", "cierre"]
  const ioZona = new IntersectionObserver(es => {
    for (const e of es) { const z = e.target.dataset.zona; e.isIntersecting ? visibles.add(z) : visibles.delete(z) }
    let z = zonas.map(x => x[0]).find(x => visibles.has(x))
    if (z && carrusel() && DEL_MODULO.includes(z)) z = zonaCarrusel()   // en el escenario manda la página, no la tira de tramos que se ve mientras se desliza
    if (z && document.body.dataset.zona !== z) { document.body.dataset.zona = z; mezclar() }
  }, { rootMargin: "-50% 0px -50% 0px" })
  zonas.forEach(([z, s]) => { const el = $(s); el.dataset.zona = z; ioZona.observe(el) })

  // las escenas solo piden cuadros mientras se ven
  const ioEscena = new IntersectionObserver(es => es.forEach(e => window.COMPUERTAS && COMPUERTAS[e.target.dataset.escena].set(e.isIntersecting)), { rootMargin: "10% 0px" })
  $$(".escena").forEach(el => { el.dataset.escena = el.classList.contains("escena-fogata") ? "fogata" : "muelle"; ioEscena.observe(el) })

  // ---------- 3. módulos: se elige uno en la franja (o en el drawer) y sus apuntes entran en las dos escenas ----------
  const modulo = $("#modulo"), tira = $("#pista"), det = $("#fr-det"), apFogata = $("#corte-fogata .apuntes"), apMuelle = $("#corte-muelle .apuntes")
  let actual = 0
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
  const plural = (n, uno, varios) => n + " " + (n === 1 ? uno : varios)
  const dePlantilla = id => { const t = document.getElementById(id); return t ? t.content.cloneNode(true) : document.createDocumentFragment() }
  const modDe = k => (MODULOS.find(m => m.claves.includes(k)) || {}).n
  function detalle(m) {
    const hay = m.claves.length > 0
    const meta = hay ? (m.enCurso ? "En curso · " : "") + plural(m.nApuntes, "apunte", "apuntes") + " · " + plural(m.nPracticas, "práctica", "prácticas") : "Sin apuntes aún"
    det.innerHTML = `<h3 class="fr-nombre" tabindex="-1">${esc(m.nombre)}</h3>${m.resultado ? `<p class="fr-res">${esc(m.resultado)}</p>` : ""}<p class="fr-meta">${meta}</p>${hay ? `<a class="btn-px" href="#modulo">Entrar al módulo ${ICO_DERECHA}</a>` : ""}`
  }
  function cargar(n) {
    const m = MODULOS[n - 1]; if (!m || actual === n) return
    actual = n
    $$(".mod").forEach(b => { const on = +b.dataset.mod === n; b.setAttribute("aria-pressed", String(on)); b.classList.toggle("act", on) })
    detalle(m)
    const hay = m.claves.length > 0
    modulo.hidden = !hay
    apFogata.replaceChildren(hay ? dePlantilla(`m${n}-fogata`) : ""); apMuelle.replaceChildren(hay ? dePlantilla(`m${n}-muelle`) : "")
    prepararImagenes()
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
    armar(0)
    observarApuntes()
  }
  $$(".mod").forEach(b => b.addEventListener("click", () => cargar(+b.dataset.mod)))
  // el botón del cierre desaparece al cargar el módulo siguiente: el foco pasa al nombre del módulo en la franja, adonde lleva el enlace
  $("#siguiente").addEventListener("click", () => { cargar(+$("#siguiente").dataset.siguiente); $(".fr-nombre", det)?.focus({ preventScroll: true }) })

  // ---------- 3b. carrusel de apuntes (≥1200 px): una página por apunte y una de cierre; bajo ese ancho el módulo queda apilado ----------
  // pagina: 0..hojas.length-1 = apuntes en el orden del módulo (fogata y luego muelle); hojas.length = el cierre.
  // Dentro de un tramo (fogata o muelle) la escena queda quieta y solo se deslizan las hojas; entre tramos se desliza la pista entera.
  const mqCarrusel = matchMedia("(min-width:1200px)")
  const carrusel = () => mqCarrusel.matches
  let hojas = [], nFog = 0, nTramos = 2, pagina = 0
  const tramoDe = p => p < nFog ? 0 : p < hojas.length ? 1 : nTramos - 1
  const zonaCarrusel = () => pagina >= hojas.length ? "cierre" : tramoDe(pagina) === 0 ? "fogata" : "muelle"
  const sinAnimar = (clases, hacer) => { modulo.classList.add(...clases); hacer(); void modulo.offsetWidth; modulo.classList.remove(...clases) }
  function marcarRuta(k) {
    $$(".d-ap[aria-current]", drawer).forEach(a => a.removeAttribute("aria-current"))
    if (k) $(`.d-ap[data-k="${k}"]`, drawer)?.setAttribute("aria-current", "location")
  }
  // deja las hojas del tramo de la página p en su sitio: las anteriores a la izquierda, la actual al centro, las siguientes a la derecha
  function colocar(p) {
    const t = tramoDe(p)
    hojas.forEach((h, i) => {
      if (tramoDe(i) !== t) return
      h.classList.toggle("act", i === p); h.classList.toggle("antes", i < p)
    })
    if (hojas[p]) $(".hoja-scroll", hojas[p]).scrollTop = 0   // cada página abre arriba
  }
  const hojaDe = k => hojas.findIndex(h => h.dataset.k === k)
  function fijarZona() {
    if (!carrusel() || !DEL_MODULO.includes(document.body.dataset.zona)) return
    const z = zonaCarrusel(); if (document.body.dataset.zona !== z) { document.body.dataset.zona = z; mezclar() }
  }
  // arma el escenario del módulo recién cargado (o al cruzar los 1200 px); sin animación
  function armar(p) {
    hojas = $$(".hoja", modulo); nFog = $$(".hoja", apFogata).length
    const tramos = [$("#corte-fogata"), ...($("#corte-muelle").hidden ? [] : [$("#corte-muelle")]), $(".cierre")]
    nTramos = tramos.length
    const on = carrusel()
    pagina = on ? Math.max(0, Math.min(hojas.length, p)) : 0
    sinAnimar(["sin-hojas", "sin-pista"], () => {
      if (on) { modulo.setAttribute("role", "region"); modulo.setAttribute("aria-roledescription", "carrusel"); modulo.setAttribute("aria-label", "Apuntes del módulo") }
      else for (const attr of ["role", "aria-roledescription", "aria-label"]) modulo.removeAttribute(attr)
      hojas.forEach((h, i) => {
        h.classList.remove("act", "antes"); h.inert = on && i !== pagina
        if (on) { h.setAttribute("role", "group"); h.setAttribute("aria-roledescription", "apunte"); h.setAttribute("aria-label", `${i + 1} de ${hojas.length}: ${$(".ap-titulo", h).textContent.trim()}`) }
        else for (const attr of ["role", "aria-roledescription", "aria-label"]) h.removeAttribute(attr)
      })
      $(".cierre").inert = on && pagina !== hojas.length
      if (on) colocar(pagina)
      tira.style.transform = on && tramoDe(pagina) ? `translateX(${-100 * tramoDe(pagina)}%)` : ""
    })
    if (on) { marcarRuta(hojas[pagina]?.dataset.k); fijarZona() }
    medir()
  }
  // va a la página p con la animación del carrusel: si cambia de tramo, desliza el escenario; si no, solo la hoja. Un salto largo es un solo deslizamiento
  function ir(p, { foco = true } = {}) {
    if (!carrusel()) return
    p = Math.max(0, Math.min(hojas.length, p)); if (p === pagina) return
    const cruza = tramoDe(p) !== tramoDe(pagina), t = tramoDe(p)
    if (cruza) sinAnimar(["sin-hojas"], () => colocar(p))   // el tramo de destino ya espera en su sitio; el de origen no se toca, se va con la pista
    else colocar(p)
    pagina = p
    hojas.forEach((h, i) => { h.inert = i !== p }); $(".cierre").inert = p !== hojas.length
    tira.style.transform = t ? `translateX(${-100 * t}%)` : ""
    marcarRuta(hojas[p]?.dataset.k); fijarZona()
    alinear()
    if (hojas[p]) history.replaceState(null, "", "#a-" + hojas[p].dataset.k)
    if (foco) (hojas[p] ? $(".ap-titulo", hojas[p]) : $("#cierre-t")).focus({ preventScroll: true })
  }
  modulo.addEventListener("click", e => {
    const b = e.target.closest(".btn-hoja"); if (b) ir(pagina + +b.dataset.dir)
  })
  $("#volver").addEventListener("click", () => ir(hojas.length - 1))
  addEventListener("keydown", e => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return
    if (e.repeat || !carrusel() || modulo.hidden || !drawer.inert || visor.open || practica.open || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return
    if (!DEL_MODULO.includes(document.body.dataset.zona)) return   // solo cuando el escenario es lo que se está mirando
    if (e.target.closest?.("input,textarea,select,[contenteditable],.tabla")) return   // en un campo o una tabla con scroll, las flechas son suyas
    e.preventDefault(); ir(pagina + (e.key === "ArrowRight" ? 1 : -1))
  })
  // al cruzar los 1200 px sigue el mismo apunte: en el carrusel es la hoja actual; apilado, el que marca la ruta del drawer
  mqCarrusel.addEventListener("change", () => {
    const k = carrusel() ? $(".d-ap[aria-current]", drawer)?.dataset.k : hojas[pagina]?.dataset.k   // carrusel() ya es el modo nuevo
    armar(Math.max(0, hojaDe(k))); observarApuntes()
    if (k && !modulo.hidden) salto(carrusel() ? modulo : $(`#a-${k}`), { suave: false })
  })

  // ---------- 3c. una sola barra vertical: la de la página ----------
  // El módulo mide 100svh + lo que el apunte actual excede la pantalla; el escenario queda fijo (sticky) y la hoja no se desplaza sola:
  // su scrollTop sigue al de la página. Al revés también, por si el navegador mueve la hoja (foco con Tab, buscar en la página).
  let activo = null, extra = 0, esperado = 0
  const tope = () => modulo.getBoundingClientRect().top + scrollY
  const ro = new ResizeObserver(() => ajustarAlto())   // cambia el contenido (vista Práctica, imágenes) o la ventana
  function ajustarAlto() {
    activo = carrusel() && hojas[pagina] ? $(".hoja-scroll", hojas[pagina]) : null
    extra = activo ? Math.max(0, activo.scrollHeight - activo.clientHeight) : 0
    modulo.style.height = carrusel() ? `calc(100svh + ${extra}px)` : ""
  }
  function medir() {
    ajustarAlto(); esperado = activo ? activo.scrollTop : 0
    ro.disconnect(); if (activo) { ro.observe(activo); ro.observe(activo.firstElementChild) }
  }
  // la página nueva abre arriba: si se leía más abajo del inicio del escenario, la página vuelve a él
  function alinear() { medir(); if (scrollY > tope() + 1) scrollTo({ top: tope(), behavior: "instant" }) }
  addEventListener("scroll", () => {
    if (!activo) return
    const y = Math.round(Math.max(0, Math.min(extra, scrollY - tope())))
    if (Math.abs(activo.scrollTop - y) > .5) { esperado = y; activo.scrollTop = y }
  }, { passive: true })
  // ---------- 3d. tope al subir (usuario, 2026-11-12) ----------
  // Leyendo, la rueda a veces pasa del inicio del apunte y deja ver la franja. Al llegar arriba el scroll se detiene ahí y se absorbe lo que sobra del gesto
  // (también el impulso del trackpad); un gesto nuevo, tras una pausa, sigue hacia la franja. Solo la rueda: teclado, barra de la página y flechas quedan libres.
  // (Probado y descartado: scroll-snap con stop:always; en Chrome no detiene la rueda: pasó 532 px del punto de anclaje.)
  // Reglas (usuario, 2026-11-12): un empujón (un gesto de rueda o de trackpad, con su inercia) topa y enciende el resplandor; para pasar hacen falta DOS empujones
  // seguidos: otro gesto, tras una pausa, dentro de VENTANA. Pasada la ventana, el siguiente vuelve a ser un primer empujón.
  const GESTO = 110, VENTANA = 600, EMPUJES = 3   // 3 y no 2: dos giros rápidos se hacen sin pensar; tres ya son intención (usuario, 2026-11-12)
  let armado = false, retenido = false, tUlt = 0, tRueda = 0, objetivo = 0, tObj = 0, escuchando = false, tBrillo = 0, dPrev = 0, apagado = false, empujes = 0
  const brillo = $("#brillo")
  const brillar = (n = 1) => { brillo.style.setProperty("--luz", n >= 2 ? 1 : .75); brillo.classList.add("on"); clearTimeout(tBrillo); tBrillo = setTimeout(() => brillo.classList.remove("on"), 450) }
  const aTope = () => scrollTo({ top: tope(), behavior: quieto ? "instant" : "smooth" })
  function alRueda(e) {
    if (!carrusel() || modulo.hidden || e.ctrlKey || !drawer.inert || visor.open || practica.open) return
    const ahora = performance.now()
    if (e.deltaY >= 0) { retenido = false; return }   // bajar siempre es libre y suelta el tope
    const dy = e.deltaY * (e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? innerHeight : 1), mag = -dy
    if (retenido) {
      const hueco = ahora - tUlt
      // otro empujón: hubo una pausa, o el primero venía apagándose (la inercia del trackpad dura más de un segundo) y la rueda vuelve a empujar con fuerza
      const otro = hueco > GESTO || (apagado && mag > dPrev * 1.5 + 4)
      if (mag < dPrev) apagado = true
      dPrev = mag
      if (!otro) { tUlt = ahora; e.preventDefault(); return }   // sigue el mismo gesto (o su inercia): se absorbe
      if (hueco <= VENTANA) {   // otro empujón seguido
        if (++empujes >= EMPUJES) { retenido = false; return }   // el último: pasa de largo hacia la franja
        tUlt = ahora; apagado = false; brillar(empujes); e.preventDefault(); return   // el resplandor sube con cada empujón
      }
      empujes = 1; tUlt = ahora; apagado = false; brillar(1); e.preventDefault(); return   // pasó mucho tiempo: vuelve a ser un primer empujón
    }
    if (!armado) return
    const destino = (ahora - tObj < 250 ? objetivo : scrollY) + dy   // el scroll suave va por detrás de la rueda: se suma lo ya concedido
    if (destino <= tope() + 1) { e.preventDefault(); armado = false; retenido = true; empujes = 1; tUlt = ahora; dPrev = mag; apagado = false; aTope(); brillar(1); objetivo = tope(); tObj = ahora; return }
    objetivo = destino; tObj = ahora
  }
  // el oyente que puede frenar solo está puesto cuando hace falta (cerca del inicio del apunte): uno que bloquea resta fluidez a todo el scroll
  const escuchar = v => { if (v !== escuchando) { escuchando = v; v ? addEventListener("wheel", alRueda, { passive: false }) : removeEventListener("wheel", alRueda) } }
  addEventListener("wheel", e => { if (e.deltaY < 0) tRueda = performance.now() }, { passive: true })
  let yAnt = scrollY
  addEventListener("scroll", () => {
    const sube = scrollY < yAnt; yAnt = scrollY
    if (!carrusel() || modulo.hidden) { escuchar(false); return }
    const r = scrollY - tope(), ahora = performance.now()
    // se arma desde el filo (usuario, 2026-11-12): con el apunte ya a la vista, subir topa aunque no se haya leído nada. En el filo (-1 < r ≤ 8) solo arma si la página no va subiendo:
    // si no, el gesto que acaba de pasar el tope (o la animación hacia él) lo volvería a armar y lo devolvería
    if (r > 8 || (r > -1 && !sube)) { if (!retenido || ahora - tUlt > 700) { retenido = false; armado = true } }   // la animación hacia el tope también pasa por r > 8: no cuenta como volver a leer
    else if (r < -1) {
      if (armado && ahora - tRueda < 250) { armado = false; retenido = true; empujes = 1; tUlt = ahora; dPrev = 0; apagado = false; scrollTo({ top: tope(), behavior: "instant" }); brillar(1) }   // se pasó de largo: vuelve
      else armado = false   // llegó a la franja por otra vía (teclado, barra): el tope no aplica
    }
    escuchar((armado && r < 900) || retenido)
  }, { passive: true })
  modulo.addEventListener("scroll", e => {   // los scroll no burbujean: se escuchan en captura
    if (e.target !== activo || Math.abs(activo.scrollTop - esperado) <= 1) return   // lo demás es el eco de nuestra propia escritura
    esperado = activo.scrollTop; scrollTo({ top: tope() + activo.scrollTop, behavior: "instant" })
  }, true)

  // ---------- 4. saltos entre apuntes (aunque sean de otro módulo) y vista de Práctica ----------
  // id = "a-<clave>" lleva al apunte; "p-<clave>" abre su práctica a pantalla completa (4b), con el apunte detrás para que «Volver» caiga en él
  function irAApunte(k, n) {
    cargar(n)
    const ap = $(`#a-${k}`)
    if (!carrusel()) salto(ap, { suave: false })
    if (carrusel()) salto(modulo, { suave: false })   // el escenario llena la pantalla
    if (carrusel() && hojaDe(k) !== pagina) ir(hojaDe(k))   // la página llega con la misma animación
    else $(".ap-titulo", ap)?.focus({ preventScroll: true })
  }
  function irA(id) {
    const k = id.replace(/^[ap]-/, ""), n = modDe(k); if (!n) return
    const quiereP = id.startsWith("p-")
    if (practica.open) { pvK = null; cerrarPractica() }   // se cierra sin «volver»: se va a otro lado
    // abrir la práctica desde su propio apunte no lo mueve; desde otro sitio (drawer, enlace, dirección) el apunte pasa primero
    const ya = quiereP && !modulo.hidden && actual === n && (!carrusel() || hojas[pagina]?.dataset.k === k)
    if (!ya) irAApunte(k, n)
    if (quiereP) abrirPractica(k); else history.replaceState(null, "", "#" + id)
  }
  modulo.addEventListener("click", e => {
    const p = e.target.closest(".btn-prac"); if (p) return abrirPractica(p.dataset.practica)
    const a = e.target.closest('a.ref[href^="#"]'); if (!a) return
    const id = a.getAttribute("href").slice(1)
    if (carrusel() || !document.getElementById(id)) { e.preventDefault(); irA(id) }   // en el carrusel siempre; apilado, el ancla lleva sola salvo que sea de otro módulo o de una práctica (que ya no tiene ancla)
  })

  // ---------- 4b. vista de Práctica a pantalla completa (usuario, 2026-11-12; contrato en .impeccable/surfaces/system-html.md) ----------
  // Un <dialog> modal sin escena: deja inerte todo lo demás, atrapa el foco y se cierra con Esc o «Volver al apunte». Las columnas (1, 2 o 3) y el tema (oscuro / claro,
  // por defecto el de Windows) se recuerdan en el navegador; el tema vale para todo el sistema (hoy solo lo usa esta vista).
  const practica = $("#practica"), pvT = $("#pv-t"), pvCuerpo = $("#pv-cuerpo"), pvTema = $("#pv-tema")
  const guardado = { leer: k => { try { return localStorage.getItem(k) } catch { return null } }, poner: (k, v) => { try { localStorage.setItem(k, v) } catch { } } }
  const mqOscuro = matchMedia("(prefers-color-scheme: dark)")
  let pvK = null, cols = guardado.leer("okaeri.cols"), tema = guardado.leer("okaeri.tema"), temaElegido = ["claro", "oscuro"].includes(tema)
  if (!["1", "2", "3"].includes(cols)) cols = "2"
  if (!temaElegido) tema = mqOscuro.matches ? "oscuro" : "claro"
  function pintarVista() {
    document.documentElement.dataset.tema = tema
    practica.dataset.cols = cols
    $$(".pv-col", practica).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.cols === cols)))
    const aClaro = tema === "oscuro"   // el botón ofrece el otro tema
    $("use", pvTema).setAttribute("href", aClaro ? "#i-sol" : "#i-luna"); $("span", pvTema).textContent = aClaro ? "Claro" : "Oscuro"
    pvTema.setAttribute("aria-label", aClaro ? "Cambiar a tema claro" : "Cambiar a tema oscuro")
  }
  pintarVista()
  mqOscuro.addEventListener("change", e => { if (!temaElegido) { tema = e.matches ? "oscuro" : "claro"; pintarVista() } })   // mientras no haya elegido, sigue a Windows
  const candado = () => {   // la página de atrás no se mueve mientras haya algo encima (visor, vista de Práctica o drawer)
    const h = document.documentElement.classList
    h.toggle("sin-scroll", visor.open || practica.open || !drawer.inert); if (!practica.open) h.remove("en-practica")
  }
  function cerrarPractica() { document.documentElement.classList.remove("en-practica"); practica.close() }   // la franja vuelve antes de que salga, mientras aún tapa la página
  practica.addEventListener("cancel", () => document.documentElement.classList.remove("en-practica"))   // Esc
  function abrirPractica(k) {
    const tpl = document.getElementById("v-" + k); if (!tpl) return
    pvK = k; pvT.innerHTML = tpl.dataset.t
    pvCuerpo.replaceChildren(tpl.content.cloneNode(true)); pvCuerpo.scrollTop = 0
    prepararImagenes(); pintarVista()
    if (!practica.open) {
      practica.showModal()
      setTimeout(() => { if (practica.open) document.documentElement.classList.add("en-practica") }, quieto ? 0 : 740)   // la franja sin barra solo cuando la vista ya tapa todo: la página de atrás no salta mientras entra
    }
    candado(); history.replaceState(null, "", "#p-" + k)
  }
  practica.addEventListener("close", () => {
    candado()
    if (practica.open || !pvK) return   // open: se cerró para abrir otra; sin clave: se cerró para ir a otro lado
    const k = pvK; pvK = null; history.replaceState(null, "", "#a-" + k)
    if (!carrusel()) { const ap = $(`#a-${k}`); if (ap) salto(ap, { suave: false }) }   // apilado, el apunte vuelve a verse
  })
  practica.addEventListener("click", e => {
    if (e.target.closest("#pv-volver")) return cerrarPractica()
    const c = e.target.closest(".pv-col"); if (c) { cols = c.dataset.cols; guardado.poner("okaeri.cols", cols); return pintarVista() }
    if (e.target.closest("#pv-tema")) { tema = tema === "oscuro" ? "claro" : "oscuro"; temaElegido = true; guardado.poner("okaeri.tema", tema); return pintarVista() }
    const a = e.target.closest('a.ref[href^="#"]'); if (a) { e.preventDefault(); irA(a.getAttribute("href").slice(1)) }
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
    abrir.setAttribute("aria-expanded", String(v)); candado()
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
    setTimeout(() => salto(modulo, { suave: false }), 0)
  }))
  // buscador de la ruta
  $("#buscar").addEventListener("input", e => {
    const q = norm(e.target.value.trim()); let n = 0
    $$("#d-ruta > li").forEach(li => { const ok = !q || li.dataset.t.includes(q); li.hidden = !ok; if (ok) n++ })
    $("#d-vacio").hidden = n > 0
  })
  // el apunte que se está leyendo queda marcado en la ruta (apilado: el que cruza la pantalla; en el carrusel lo marca ir(), porque una hoja corta nunca llega a la franja)
  const ioAp = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) marcarRuta(e.target.dataset.k) }), { rootMargin: "-40% 0px -55% 0px" })
  function observarApuntes() { ioAp.disconnect(); if (!carrusel()) $$(".apunte").forEach(ap => ioAp.observe(ap)) }

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

  // ---------- 6b. visor de imágenes (usuario, 2026-10-21; repuesto en la web 2026-11-12) ----------
  // Clic (o Enter / Espacio con el foco en ella) en una imagen de un apunte o práctica la amplía en un <dialog> modal: lo más grande que quepa, sobre noche.
  // Flechas del teclado o botones pasan a la anterior o siguiente del mismo apunte (solo las visibles, sin repetidas); Inicio y Fin saltan a la primera y la última.
  // Se cierra con la X, Esc o tocando el margen. El <dialog> deja inerte el resto y atrapa el foco; al cerrar, el foco vuelve a la imagen.
  const visor = $("#visor"), vImg = $("#visor-img"), vCont = $("#visor-cont"), vAnt = $("#visor-ant"), vSig = $("#visor-sig"), vX = $("#visor-x")
  let vLista = [], vI = 0, vOrigen = null, vTok = 0
  const srcDe = i => i.getAttribute("src")
  // las imágenes de un apunte llegan con cada módulo cargado: se vuelven botones accesibles (foco por teclado y nombre) una sola vez
  function prepararImagenes() {
    $$(".apunte img, .pv img").forEach(i => {
      if (i.dataset.ampliar !== undefined) return
      i.dataset.ampliar = ""; i.tabIndex = 0; i.setAttribute("role", "button"); i.title = "Ampliar"
      i.setAttribute("aria-label", i.alt ? "Ampliar imagen: " + i.alt : "Ampliar imagen")
    })
  }
  const imagenesDe = ap => { const vistas = new Set(); return $$("img[data-ampliar]", ap).filter(i => !i.closest("[hidden], details:not([open])") && !vistas.has(srcDe(i)) && vistas.add(srcDe(i))) }
  // se espera a que la imagen esté decodificada antes de cambiarla, para que al pasar de una a otra no parpadee en blanco
  const decodificar = src => new Promise(res => { const p = new Image(); p.src = src; p.decode ? p.decode().then(res, res) : (p.onload = p.onerror = res) })
  async function verImagen(i) {
    if (i < 0 || i >= vLista.length) return
    const tok = ++vTok, enfocado = document.activeElement
    vI = i
    vCont.textContent = vLista.length > 1 ? `${i + 1} / ${vLista.length}` : ""
    vAnt.hidden = vSig.hidden = vLista.length < 2
    vAnt.disabled = i === 0; vSig.disabled = i === vLista.length - 1
    if ((enfocado === vAnt && vAnt.disabled) || (enfocado === vSig && vSig.disabled)) (enfocado === vAnt ? vSig : vAnt).focus()   // el botón que acaba de llegar a su tope no puede quedarse con el foco
    await decodificar(srcDe(vLista[i])); if (tok !== vTok) return
    vImg.src = srcDe(vLista[i]); vImg.alt = vLista[i].alt
    for (const j of [i - 1, i + 1]) if (vLista[j]) decodificar(srcDe(vLista[j]))   // las vecinas quedan en caché: pasar de una a otra es inmediato
  }
  function abrirVisor(img) {
    const ap = img.closest(".apunte, .pv"); if (!ap || visor.open) return
    vLista = imagenesDe(ap); vOrigen = img
    visor.showModal(); candado()
    verImagen(Math.max(0, vLista.findIndex(x => srcDe(x) === srcDe(img))))
  }
  visor.addEventListener("close", () => {
    candado(); vTok++; vImg.removeAttribute("src")
    vOrigen?.focus({ preventScroll: true }); vOrigen = null
  })
  document.addEventListener("click", e => {
    if (e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return
    const i = e.target.closest?.(".apunte img[data-ampliar], .pv img[data-ampliar]"); if (i) { e.preventDefault(); abrirVisor(i) }
  })
  document.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && !e.repeat && !e.altKey && !e.ctrlKey && !e.metaKey && e.target.matches?.(".apunte img[data-ampliar], .pv img[data-ampliar]")) { e.preventDefault(); abrirVisor(e.target) }
  })
  vAnt.addEventListener("click", () => verImagen(vI - 1)); vSig.addEventListener("click", () => verImagen(vI + 1)); vX.addEventListener("click", () => visor.close())
  visor.addEventListener("click", e => { if (e.target === visor || e.target.classList.contains("visor-cuadro")) visor.close() })   // el margen cierra; la imagen y los botones no
  visor.addEventListener("keydown", e => {
    if (e.altKey || e.ctrlKey || e.metaKey) return
    if (e.key === "ArrowLeft") verImagen(vI - 1)
    else if (e.key === "ArrowRight") verImagen(vI + 1)
    else if (e.key === "Escape") visor.close()   // a mano: con la vista de Práctica debajo, un solo Esc no debe cerrar las dos (el navegador agrupa los diálogos abiertos sin un clic en medio)
    else if (e.key === "Home") verImagen(0)
    else if (e.key === "End") verImagen(vLista.length - 1)
    else return
    e.preventDefault()
  })
  visor.addEventListener("wheel", e => e.preventDefault(), { passive: false })   // la página de atrás no se mueve

  // ---------- 7. arranque: el módulo en curso, o el del apunte que pida la dirección ----------
  cargar(modDe(decodeURIComponent(location.hash.slice(1)).replace(/^[ap]-/, "")) || EN_CURSO)
  porHash()
})()
