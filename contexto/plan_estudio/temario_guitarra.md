---
tipo: temario
tema: guitarra — nivel base (acompañamiento → instrumental → banda)
instrumento: guitarra clásica (nylon)
modulos: 9
secciones: 53
conceptos: ~40
estado: EN PROGRESO
inicio: 2026-08-28
---

# 🎸 Temario — Guitarra, nivel base

> **Esta es la pieza más importante de Okaeri.** Es el **mapa**: todo el territorio que un guitarrista de acompañamiento necesita, ordenado por dependencia real. Sustituye a la `ruta_inicial.md` de la era piano — que era un plan de acción, no un inventario. Por eso antes no sabías dónde estabas: aquí sí.
>
> 📌 **Alcance:** llegar a tocar canciones de worship en español con acordes y rasgueo, **de memoria y sin nada delante**; después puntear y arpegiar; al final, tocar con otros. El destino concreto es **la banda de la iglesia del usuario**.

## Qué es y qué no es

| Es | No es |
|---|---|
| Un **mapa** de competencias, secuencial por dependencia | Un calendario. No tiene fechas ni "semana 3" |
| La columna que **sobrevive a cualquier canción** — si borras la canción, el mapa sigue en pie | Un plan construido sobre una canción (el error de la era piano) |
| Lo que dice **dónde estás y cuánto falta** | Lo que dice qué hacer hoy — eso es el plan semanal (`sistema/estado/estado_actual.md`) |

**Si borras la canción, el temario debe seguir en pie.** Ese es el test. Las canciones son **vehículos**: donde se practica y se evalúa un módulo. Son intercambiables; el módulo no se mueve.

## Cómo usarlo

**La ruta es secuencial.** Se recorre en orden: cada módulo depende del anterior (no hay cejilla sin acordes abiertos; no hay arpegio sin acorde; no hay ritmo sin pulso). El **marcador** (dónde vas) vive en `sistema/estado/estado_actual.md` y avanza **solo cuando completas tus secciones, en orden**.

**La academia no mueve el marcador.** Lo que se vea el martes en clase se **marca** en este mapa (✅ "visto en clase") y se profundiza esa semana, pero tú sigues en tu sección. Si la clase adelanta algo del módulo 7 cuando vas en el 3, lo guardas: cuando llegues al 7, ya está medio andado. Protocolo completo en `sistema/prompts/integracion_academia_sistema.md`.

**Sección ≠ sesión.** Una sección puede tomar 10 minutos o tres días. El mapa mide **contenido**; tu día mide **tiempo**. Mínimo irreducible: **15 min, 3-4 veces por semana** — es el piso para presentarte, no el techo del contenido.

**Teoría y práctica son archivos distintos, lado a lado** (regla anti-muleta hecha archivo). Ambos viven en `fundamentos/mN/` — la carpeta dice en qué punto del temario está cada cosa:
- `claseNN_<tema>.md` → el **apunte**: se lee **lejos de la guitarra**.
- `claseNN_practica_<tema>.md` → la **práctica**: se usa **con la guitarra**. Trae objetivo en lenguaje claro, tiempo mínimo y natural, el gráfico de **qué practicar** (SVG), y los 3 errores típicos con arreglo. **Nunca trae el diagrama de lo que hay que producir de memoria** (formas de acorde del drill o de la canción) — eso es copiar, no recordar.
- Prefijo `claseNN_` = nació de esa clase de la academia; una práctica nacida del mapa lleva su sección (`practica_4.4_...`).

> Límite: *si lo puedes hacer sin la guitarra en la mano, es apunte; si necesitas la guitarra, es práctica.*

**Los conceptos se definen donde aparecen por primera vez. Nunca antes.** Regla define-or-link: ninguna sección usa un término sin que su apunte exista o se defina en una frase. Las notas **no se escriben todas de golpe**: nacen cuando su módulo las pide, con lo conversado en la sesión.

**Fuentes** (verificadas 2026-08-28):

| Fuente | Qué aporta | Estado |
|---|---|---|
| **Academia** (Básico 1, martes) | El 80% de la técnica, en vivo, con profesor que ve las manos | **Matriculado, en curso desde 2026-09-01.** Sílabo general recibido: `silabo_academia_basico1.md` (5 módulos × 4 clases → concierto dic-2026). El detalle real se anota clase a clase |
| **Estándares graduados** (ABRSM · Trinity · RCM · JustinGuitar) | La secuencia de dependencia — es la misma en todos, porque la guitarra la impone | Referencia de forma, no de repertorio |
| **El agente** | Lo que ninguna de las dos cubre: tu repertorio, la memoria, la banda | — |

**Lo que NO entra** (regla: solo contenido que cambie algo que vas a tocar): historia de la guitarra · biografías · marketing de marcas o apps · lectura de partitura (pentagrama) — decisión `cifrado_primero` vigente · teoría que no ilumine una canción tuya · virtuosismo · composición.

---

## 📊 Índice

> **El orden de los números ES el orden de estudio.** Marcador y cobertura se actualizan en vivo.

| # | Módulo | Secciones | Cubre la academia (probable) | Estado |
|---|---|:-:|:-:|---|
| 1 | Los primeros acordes | 9 | ✅ | 🏫 clase 2: diagrama + los 8 acordes — **evaluación M1 en curso** |
| 2 | El cambio de acorde | 5 | ✅ | 🏫 parcial (clase 2: anclas, cambios en progresión) |
| 3 | Mano derecha: pulso y rasgueo | 6 | ✅ | 🏫 parcial (clase 1: pulso, figuras, 4/4, metrónomo) |
| 4 | **Tu primera canción completa** 🎯 | 6 | ❌ **Okaeri solo** | ⬜ |
| 5 | Ampliar el vocabulario | 6 | ✅ parcial | 🏫 parcial (clase 2: La, Mi, Rem + progresiones dictadas) |
| 6 | Ritmo de verdad | 5 | ✅ | ⬜ |
| 7 | La cejilla | 5 | ✅ | ⬜ |
| 8 | Punteo y arpegio | 6 | ✅ **temprano** (clases 5-8) | 🏫 TAB vista (clase 1) |
| 9 | **Tocar con otros** (la banda) | 5 | ❌ **Okaeri solo** | ⬜ |
| — | Capa transversal (memoria · oído · teoría aplicada · interpretación) | — | ❌ **Okaeri solo** | siempre |

Estados: ⬜ pendiente · 🔄 en curso · ✅ completado (evaluación pasada) · 🏫 visto en clase (adelantado, no completado).

> **Sesión 0 — diagnóstico.** El usuario tiene **base dormida** en guitarra (tocó hace años). Antes de M1: con la guitarra en la mano, se prueban los 5 acordes de M1 y se marca qué está vivo. Lo que ya sale, se marca ✅ y se salta. No se diagnostica hablando: se diagnostica tocando.

---

## M1 · Los primeros acordes

**Resultado:** formar los 5 acordes abiertos base, limpios, cada uno de memoria al oír su nombre.

| # | Sección | Qué sabes hacer al terminar |
|---|---|---|
| 1.1 | Las 6 cuerdas: nombre y número | Decir el nombre de cada cuerda (Mi-La-Re-Sol-Si-Mi) y su número (6ª grave → 1ª aguda) |
| 1.2 | Cómo se lee un diagrama de acorde — y el cifrado | Leer cualquier diagrama (cuerdas, trastes, puntos, X, O) y saber que **Sol = G, Do = C, Re = D, Mim = Em, Lam = Am** |
| 1.3 | Los dedos de la mano izquierda | Numerar 1-4 (índice a meñique) y poner el pulgar donde va |
| 1.4 | Mim | Formarlo limpio |
| 1.5 | Lam | Formarlo limpio — el primer menor |
| 1.6 | Re | Formarlo limpio |
| 1.7 | Sol | Formarlo limpio |
| 1.8 | Do | Formarlo limpio — el que más cuesta de los cinco |
| 1.9 | Que suene limpio: presión, punta y ángulo | Diagnosticar por qué zumba una cuerda y arreglarlo solo |

**Conceptos (se definen aquí):** nota · cuerda al aire · traste · diapasón (mástil) · digitación · **acorde** · acorde mayor y menor · **cifrado** · **Do-Re-Mi vs. A-B-C** (equivalencia — va primero: sin ella no se lee ningún cifrado de internet).

**Repertorio de práctica:** ninguna canción todavía — los acordes sueltos. Herramienta: **drill Anki por recall** (frente = nombre, tú formas, reverso verifica). Se reconstruye el mazo con formas de guitarra.

**Evaluación:** el agente dice un nombre al azar de los 5 → lo formas en < 5 s y suena limpio. Sin mirar ningún diagrama.

---

## M2 · El cambio de acorde ← *el muro real*

**Resultado:** cambiar entre los 5 acordes sin parar a buscar. Es donde abandona la mayoría; por eso es módulo propio.

| # | Sección | Qué sabes hacer al terminar |
|---|---|---|
| 2.1 | El cambio es un movimiento, no dos fotos | Pensar el cambio como *un* gesto de toda la mano |
| 2.2 | Dedos ancla | Ver qué dedo se queda quieto entre dos acordes y usarlo de pivote |
| 2.3 | Cambiar sin mirar la mano | Hacer al menos 3 cambios con la vista en otro lado |
| 2.4 | Los cambios de tu canción, aislados | Los 3-4 cambios que tu canción usa, en bucle |
| 2.5 | Cambiar a tiempo aunque suene feo | Priorizar caer a tiempo sobre sonar perfecto — el cambio cae, esté como esté la mano |

**Conceptos:** dedo ancla · transición · economía de movimiento.

**Repertorio:** los cambios de *No hay lugar más alto* (Sol↔Do, Do↔Re, Re↔Mim, Mim↔Sol). Drill Anki en modo **mazo filtrado barajado + avance automático** (la fluidez, no la memoria).

**Evaluación:** 1 minuto de cambios barajados dictados por el agente, sin frenar más de un pulso en ninguno.

---

## M3 · Mano derecha: pulso y rasgueo

**Resultado:** un patrón de rasgueo estable, sin parar al cambiar de acorde.

| # | Sección | Qué sabes hacer al terminar |
|---|---|---|
| 3.1 | Contar 1-2-3-4 en voz alta | Sostener el conteo mientras la mano izquierda hace lo suyo |
| 3.2 | Púa o dedos | Elegir cómo atacas las cuerdas (en nylon, dedos es lo natural) y sostenerlo |
| 3.3 | Rasgueo hacia abajo | 4 abajo por compás, parejos |
| 3.4 | Abajo y arriba | Alternar sin que el brazo se trabe |
| 3.5 | Tu primer patrón | Un patrón de 4/4 sencillo (↓ ↓↑ ↑↓↑ o similar), en bucle sobre un acorde |
| 3.6 | **Rasguear sin parar mientras cambias de acorde** | El patrón sigue aunque el cambio salga sucio — la mano derecha nunca se detiene |

**Conceptos:** **pulso** · **compás** · **tempo y BPM** · métrica 4/4 · rasgueo · metrónomo · púa.

**Repertorio:** el patrón sobre la progresión de tu canción.

**Evaluación:** 8 compases con el patrón sobre Sol-Do-Re-Mim, a metrónomo lento, sin que la mano derecha se detenga en ningún cambio.

---

## M4 · Tu primera canción completa 🎯 — *Okaeri solo*

**Resultado:** *No hay lugar más alto* de principio a fin, **de memoria, sin nada delante**. El hito del nivel base y el criterio anti-muleta hecho módulo.

| # | Sección | Qué sabes hacer al terminar |
|---|---|---|
| 4.1 | El capo: qué es y cómo se pone | Ponerlo en el traste que la canción pide, sin que zumbe |
| 4.2 | Leer el cifrado de tu canción | Seguir un cifrado de internet (letra + acordes encima) |
| 4.3 | La estructura: intro, verso, coro, puente | Decir de memoria el orden de las secciones y qué acordes lleva cada una |
| 4.4 | Tocarla con la grabación | Acompañar el audio de principio a fin (aunque te atrases) |
| 4.5 | Dinámica: suave y con cuerpo | Verso íntimo, coro abierto — la misma progresión, otra intención |
| 4.6 | **Tocarla sola, de memoria, sin nada delante** | El test. Papel fuera, celular fuera. Vale trabarse; no vale mirar |

**Conceptos:** **capo** · tono / tonalidad · transportar · estructura de canción · dinámica · cómo se lee un cifrado de canción.

**Repertorio:** **No hay lugar más alto** (Miel San Marcos) — ficha en `repertorio/no-hay-lugar-mas-alto/00_indice.md`. Alternativas con las mismas formas: *10,000 Razones*, *Eres* (Un Corazón), *Al que está sentado en el trono* (Brunet).

**Evaluación:** la 4.6. Resultado se anota tal cual (salió / a medias / no salió). Cuando sale → la ficha pasa a `TOCO-DE-MEMORIA-SOLO` y el contador de `repertorio/00_indice.md` marca **1**.

---

## M5 · Ampliar el vocabulario

**Resultado:** leer y tocar cualquier cifrado de worship sin cejilla, y entender **por qué** tus canciones usan los mismos acordes.

| # | Sección | Qué sabes hacer al terminar |
|---|---|---|
| 5.1 | La, Mi, Rem | Tres acordes abiertos más — con ellos cubres casi todo el cifrado sin cejilla |
| 5.2 | Acordes de séptima (Sol7, Re7, Mi7) | Formarlos y oír qué "piden" |
| 5.3 | sus2 y sus4 — el sonido worship | Dosus2, Resus4: los que dan ese aire abierto a la adoración |
| 5.4 | Acordes con bajo distinto (Re/Fa#, Sol/Si) | Leerlos y decidir cuándo tocar el bajo y cuándo ignorarlo |
| 5.5 | Qué acordes viven juntos en cada tono | La familia de Sol (Sol-Do-Re-Mim-Lam) y la de Do; por qué cinco canciones tuyas caben en cuatro formas |
| 5.6 | Sacar un cifrado nuevo solo | Buscar una canción, leer su cifrado, decidir capo, tocarla sin ayuda del agente |

**Conceptos:** escala mayor · **grados (I-IV-V-vi)** · **progresión** — la nota pendiente desde el piano · familia de acordes · séptima · sus2 / sus4 · acorde con bajo distinto (*slash chord*).

**Repertorio:** segunda canción (de la lista en espera o de la banda). Entra aquí, no antes.

**Evaluación:** un cifrado que nunca viste → lo tocas completo en una sesión, decidiendo tú el capo.

---

## M6 · Ritmo de verdad

**Resultado:** que la mano derecha tenga *groove* — acentos, silencios, apagados — y aguante una canción rápida.

| # | Sección | Qué sabes hacer al terminar |
|---|---|---|
| 6.1 | Más patrones de rasgueo | 3 patrones distintos, reconocibles, a elección según la canción |
| 6.2 | Silencios y acentos: dónde NO tocar | Dejar huecos a propósito; acentuar el 2 y el 4 |
| 6.3 | Apagar las cuerdas (mute) | El "chk" percusivo con la palma o los dedos |
| 6.4 | Tocar con metrónomo y soltarlo | Calibrar el pulso con el clic y luego sostenerlo sin él |
| 6.5 | Compases de 3/4 y 6/8 | Reconocerlos y rasguearlos (mucho worship lento va en 6/8) |

**Conceptos:** subdivisión (negras y corcheas) · acento · silencio · **síncopa** · apagado (mute) · 3/4 y 6/8.

**Repertorio:** *I'd Come For You* (Nickelback, capo 7 — por el rasgueo de balada rock) y la primera alabanza rápida que la banda toque.

**Evaluación:** una canción de alabanza a su tempo real, con un patrón con acentos y al menos un apagado, sin perder el pulso.

---

## M7 · La cejilla

**Resultado:** Fa y Sim limpios, y entender que **una forma da doce acordes**.

| # | Sección | Qué sabes hacer al terminar |
|---|---|---|
| 7.1 | Qué es y por qué duele | Saber qué hace el índice y por qué al inicio no suena |
| 7.2 | Fa — y su versión sin cejilla (Famaj7) | Tocar Fa completo; usar Famaj7 mientras no salga |
| 7.3 | Sim | La forma de Lam movida al traste 2 con cejilla |
| 7.4 | Una forma, doce acordes | Mover la forma de Mi y la de La por el mástil y nombrar lo que sale |
| 7.5 | Cuándo cejilla y cuándo capo | Decidir con criterio, no por miedo |

**Conceptos:** **cejilla** · tono y semitono · el traste como semitono · forma móvil.

**Repertorio:** *Amor sin condición* (TWICE, capo 5) — entra completa aquí con el Fa real. *I'd Come For You* sin capo (Sim).

**Evaluación:** Fa y Sim limpios en < 3 s cada uno, y cambiar Do→Fa→Sol sin que la cejilla zumbe.

---

## M8 · Punteo y arpegio ← *aquí entra lo instrumental*

**Resultado:** la guitarra sola suena completa — melodía y acompañamiento a la vez.

| # | Sección | Qué sabes hacer al terminar |
|---|---|---|
| 8.1 | Los dedos de la mano derecha (p-i-m-a) | Asignar pulgar a las graves, índice-medio-anular a las agudas |
| 8.2 | Arpegio sobre acordes que ya sabes | Tocar cuerda por cuerda un acorde abierto, parejo |
| 8.3 | Patrones de arpegio | 2-3 patrones (p-i-m-a, p-a-m-i, p-i-m-i) en bucle sobre tu progresión |
| 8.4 | Combinar rasgueo y arpegio | Verso arpegiado, coro rasgueado — la dinámica hecha técnica |
| 8.5 | Puntear una melodía | La melodía de un coro, nota por nota, leyendo TAB |
| 8.6 | Escalas: para qué sirven de verdad | La escala mayor en una posición — como mapa del mástil, no como ejercicio de velocidad |

**Conceptos:** melodía vs. armonía · **arpegio** · punteo · p-i-m-a · escala · **tablatura (TAB)**.

**Repertorio:** *No hay lugar más alto* con verso arpegiado. Una pieza instrumental suave (a elegir entonces).

**Evaluación:** tu canción con verso arpegiado y coro rasgueado, de memoria.

---

## M9 · Tocar con otros ← *la banda* — *Okaeri solo*

**Resultado:** entrar a un ensayo de la banda de la iglesia y hacer tu parte.

| # | Sección | Qué sabes hacer al terminar |
|---|---|---|
| 9.1 | Seguir a un líder y entrar a tiempo | Arrancar cuando el líder marca, no cuando estás listo |
| 9.2 | Tu rol cuando hay más instrumentos | Qué dejar de tocar cuando hay piano, bajo y batería |
| 9.3 | Cambiar de tono al vuelo con el capo | Que digan "en Si" y saber dónde va el capo sin calcular |
| 9.4 | Entradas, cortes y finales | Los gestos que la banda usa para empezar, parar y terminar |
| 9.5 | Aprender una canción nueva en pocos días | El método completo (cifrado → estructura → cambios → memoria) comprimido a una semana |

**Conceptos:** tono cómodo del cantante · groove · entradas, cortes y finales · rol dentro del conjunto.

**Repertorio:** la lista real de la banda.

**Evaluación:** un ensayo real. O, mientras no lo haya: 3 canciones de la banda de memoria, cambiando de tono con capo a la orden.

---

## Capa transversal — atraviesa todos los módulos

No son módulos: son **lentes** con los que se practica todo lo demás, desde M1.

| Dimensión | Qué es aquí | Herramienta |
|---|---|---|
| **Memoria** | El criterio anti-muleta: nada está aprendido hasta salir sin nada delante. Se construye por 4 capas: muscular (dedos), visual (la forma en el mástil), auditiva (cómo suena), estructural (la progresión) | Drill Anki de acordes · test de memoria al cerrar cada canción |
| **Oído** | Mayor vs. menor → intervalos → reconocer la progresión de una canción al oírla | Mazo `sistema/herramientas/anki-oido/` |
| **Teoría aplicada** | Solo la que ilumina lo que tocas: por qué esos acordes, por qué ese menor emociona | Los apuntes de `fundamentos/`, escritos cuando el módulo los pide |
| **Interpretación** | Desde el día uno. Un acorde solo ya se puede tocar con intención | La ficha de cada pieza, sección "Notas de interpretación" |

**Conceptos transversales:** las 4 memorias · fraseo · intervalo · mayor vs. menor de oído.

---

## 🎵 Repertorio — dónde cuelga cada canción

| Canción | Banda | Formas | Capo | Entra en | Estado |
|---|---|---|:-:|:-:|---|
| **No hay lugar más alto** | Miel San Marcos ft. Christine D'Clario | Sol · Do · Re · Mim | 4* | **M4** | 🎯 canción única del arranque |
| Amor sin condición | TWICE | Lam · Sol · Fa · Do | 5 | M4 (Famaj7) · M7 (Fa real) | en espera |
| 10,000 Razones | Matt Redman (versión español) | Do · Sol · Re · Mim | — | M4 / M5 | en espera |
| Eres | Un Corazón | Sol · Mim · Re · Dosus2 | — | M4 / M5 | en espera |
| Al que está sentado en el trono | Marcos Brunet | Sol · Mim · Do · Re | 4 | M4 / M5 | en espera |
| Gracias a la Cruz | TWICE | Do · Sol · Lam · Fa | — | M7 | en espera |
| I'd Come For You | Nickelback | Re · Sol · La · Sim → con capo 7: Sol · Do · Re · Mim | 7 | M6 · M7 | en espera (la favorita no-worship) |
| Capitán | TWICE | lleva Sim, 143 BPM | — | M6 + M7 | todavía no |

\* Capo a confirmar contra la grabación en la primera sesión de M4 (los cifrados de internet difieren; si la grabación está en La, es capo 2 — las formas no cambian).

> **Las cinco primeras viven en el mismo puñado de formas.** Por eso M1 + M2 es la llave del repertorio entero: aprendes una cosa y cobras cinco veces. **Una sola canción a la vez** hasta que salga de memoria (el patrón de "saltar de canción" está en la zona de riesgo del perfil).

---

## Quién cubre qué

| | Módulos | Cómo opera Okaeri ahí |
|---|---|---|
| **La academia** (sílabo real: `silabo_academia_basico1.md`) | Módulo I → M1-M3 · Módulo II → **M8 (adelantado)** · Módulo III → M7 + M5 · Módulos IV-V → M4 parcial (repertorio, concierto) | Consolida y profundiza lo del martes. La tarea del profesor va primero; lo adelantado se marca 🏫 sin mover el marcador |
| **Okaeri solo** | **M4** (la memoria y tu canción), **M6** (el sílabo solo trae "ritmos sencillos"), **M9**, capa transversal | Lidera. Aquí no entra nadie más: tu canción, tu memoria, tu banda |

> 🎯 **Clase 13 ("Selección de tema"):** el alumno elige la pieza de su concierto. Si el profesor acepta la worship en curso, la canción de Okaeri y la del concierto de diciembre son **la misma**. Preguntar los criterios antes de llegar ahí.

El 80% se lo lleva la clase. El 20% que es tuyo es exactamente lo que ninguna academia mide.

---

> **Después del nivel base:** el mapa se extiende con lo que la banda y el Básico II pidan. No se construye antes. *Construir con el dolor real, no antes.*
