

const DATOS_RETOS = {
    reto1: {
        color: '#7c3aed',
        fases: [
            {
                tipo: 'completar', icono: '⚡', nombre: 'Circuito neuronal',
                titulo: 'Completá el circuito',
                instrucciones: 'Elegí la palabra correcta en cada espacio para que la corriente llegue al cerebro.',
                texto: 'El cerebro con TDAH procesa de forma distinta la {0}, un neurotransmisor clave del sistema de {1}. Esto impacta en las funciones {2}, que dependen sobre todo de la corteza {3}.',
                huecos: [
                    ['dopamina', 'adrenalina', 'insulina', 'melatonina', 'hemoglobina'],
                    ['recompensa y motivación', 'digestión', 'visión nocturna', 'equilibrio corporal', 'respiración'],
                    ['ejecutivas', 'motoras', 'digestivas', 'auditivas', 'inmunológicas'],
                    ['prefrontal', 'occipital', 'auditiva', 'cerebelosa', 'olfativa']
                ],
                boton: 'Conectar cables ⚡',
                explicacion: 'La dopamina participa en la motivación y la recompensa. Las funciones ejecutivas (planificar, organizarse, frenar impulsos) dependen mucho de la corteza prefrontal, la "directora de orquesta" del cerebro.'
            },
            {
                tipo: 'parejas', icono: '🔗', nombre: 'Conectar parejas',
                titulo: 'Las funciones ejecutivas',
                instrucciones: 'Tocá una función ejecutiva y luego su definición correcta.',
                pares: [
                    ['Memoria de trabajo', 'Mantener información en mente mientras la usás (ej: recordar una consigna).'],
                    ['Inhibición', 'Frenar un impulso antes de actuar o hablar.'],
                    ['Flexibilidad cognitiva', 'Cambiar de estrategia o pasar de una tarea a otra.'],
                    ['Planificación', 'Organizar los pasos necesarios para llegar a una meta.'],
                    ['Regulación emocional', 'Manejar la intensidad de lo que sentís.']
                ]
            },
            {
                tipo: 'quiz', icono: '🔍', nombre: 'Casos detectivescos',
                titulo: 'Analizá cada caso',
                instrucciones: 'Leé la situación y elegí la mejor respuesta entre todas las opciones.',
                preguntas: [
                    {
                        contexto: 'Fede pierde las llaves todo el tiempo, se olvida la campera en el aula y nunca sabe dónde dejó la mochila.',
                        pregunta: '¿Qué función ejecutiva le está jugando en contra?',
                        opciones: ['La memoria de trabajo.', 'La inteligencia general.', 'La inhibición de impulsos.', 'La vista.', 'La fuerza muscular.'],
                        explicacion: 'La memoria de trabajo es la "libreta mental" que nos ayuda a retener dónde dejamos las cosas o qué teníamos que hacer.'
                    },
                    {
                        contexto: 'Martina responde antes de que la profe termine la pregunta y a veces interrumpe a sus compañeros sin querer.',
                        pregunta: '¿Qué función está más involucrada?',
                        opciones: ['La inhibición (control de impulsos).', 'La memoria a largo plazo.', 'La percepción de colores.', 'La flexibilidad cognitiva.', 'La coordinación motora fina.'],
                        explicacion: 'La inhibición es el "freno" del cerebro. En el TDAH ese freno a veces llega tarde, por eso aparecen respuestas impulsivas.'
                    },
                    {
                        pregunta: 'Según la ciencia, ¿qué es el TDAH?',
                        opciones: ['Una condición del neurodesarrollo.', 'Una enfermedad contagiosa.', 'Falta de educación de los padres.', 'Una moda de los últimos años.', 'Consecuencia de comer mucha azúcar.'],
                        explicacion: 'El TDAH es una condición del neurodesarrollo: el cerebro se desarrolla y funciona de una forma diferente. Forma parte de la neurodiversidad.'
                    },
                    {
                        pregunta: '¿Cuáles son las tres presentaciones del TDAH?',
                        opciones: ['Inatenta, hiperactiva-impulsiva y combinada.', 'Leve, ruidosa y silenciosa.', 'Infantil, adolescente y adulta.', 'Visual, auditiva y kinestésica.', 'Diurna, nocturna y mixta.'],
                        explicacion: 'Algunas personas tienen más dificultades de atención (inatenta), otras de movimiento e impulsividad (hiperactiva-impulsiva) y otras de ambas (combinada).'
                    },
                    {
                        pregunta: '¿Por qué a una persona con TDAH le cuesta tanto empezar una tarea aburrida?',
                        opciones: ['Porque su cerebro recibe menos señal de recompensa (dopamina) de esa tarea.', 'Porque es vaga y no le importa nada.', 'Porque es menos inteligente.', 'Porque duerme demasiado.', 'Porque no le gusta estudiar a nadie.'],
                        explicacion: '¡Exacto! Sin suficiente "chispa" de dopamina, iniciar tareas poco estimulantes cuesta muchísimo más. No es falta de ganas ni de inteligencia.'
                    }
                ]
            }
        ]
    },

    reto2: {
        color: '#ec4899',
        fases: [
            {
                tipo: 'vf', icono: '⏱️', nombre: 'Verdad o Mito contrarreloj',
                titulo: '¿Verdad o Mito?',
                instrucciones: 'Tenés 12 segundos por frase. ¡Cuanto más rápido respondas bien, más puntos! (Atajos: tecla V o M)',
                segundos: 12,
                items: [
                    { t: 'El TDAH solo existe en niños varones.', v: false, e: 'Mito. También afecta a chicas, adolescentes y adultos. En las chicas muchas veces se detecta tarde.' },
                    { t: 'El TDAH puede continuar en la adultez.', v: true, e: 'Verdad. Muchas personas adultas siguen teniendo TDAH y aprenden estrategias para convivir con él.' },
                    { t: 'Las personas con TDAH nunca pueden concentrarse.', v: false, e: 'Mito. Pueden tener hiperfoco: concentrarse intensamente en lo que les interesa.' },
                    { t: 'El TDAH tiene un fuerte componente hereditario.', v: true, e: 'Verdad. La genética tiene un papel muy importante en el TDAH.' },
                    { t: 'El TDAH se "cura" con más castigos y disciplina.', v: false, e: 'Mito. Los castigos no cambian cómo funciona el cerebro; ayudan las estrategias, los apoyos y el acompañamiento profesional.' },
                    { t: 'Hay personas con TDAH que no son hiperactivas.', v: true, e: 'Verdad. En la presentación inatenta casi no hay hiperactividad visible.' },
                    { t: 'Comer mucha azúcar causa TDAH.', v: false, e: 'Mito. No hay evidencia científica de que el azúcar cause TDAH.' },
                    { t: 'Las personas con TDAH son menos inteligentes.', v: false, e: 'Mito. El TDAH no tiene relación con la inteligencia. Hay personas con TDAH en todas las profesiones.' }
                ]
            },
            {
                tipo: 'quiz', icono: '💬', nombre: 'Chat anti-mitos',
                titulo: 'Respondé como un experto/a',
                instrucciones: 'Elegí la respuesta que derriba el mito con información real.',
                preguntas: [
                    {
                        contexto: '📱 Amigo por WhatsApp: "Me cuelgo horas con lo que me gusta, pero Historia me da sueño. Seguro tengo TDAH por vago."',
                        pregunta: '¿Qué le respondés?',
                        opciones: [
                            '"El hiperfoco existe, pero el TDAH no es vagancia y solo lo puede diagnosticar un profesional."',
                            '"Sí, el TDAH es básicamente tener fiaca de estudiar."',
                            '"Si te concentrás en algo, es imposible que tengas TDAH."',
                            '"Hacé un test de internet y listo, ya tenés el diagnóstico."',
                            '"Tomá más café y se te pasa."'
                        ],
                        explicacion: 'El hiperfoco es real, pero no alcanza para diagnosticarse. Además, el TDAH no tiene nada que ver con la vagancia.'
                    },
                    {
                        contexto: '🎮 Un adulto dice: "Juega Valorant cuatro horas seguidas; lo que pasa es que no quiere hacer la tarea."',
                        pregunta: '¿Cuál es la explicación correcta?',
                        opciones: [
                            'Los videojuegos dan recompensas (dopamina) inmediatas y constantes; la tarea no.',
                            'Es pura falta de voluntad: se usa la misma energía para jugar y estudiar.',
                            'Los videojuegos causan el TDAH.',
                            'Si puede jugar, entonces no tiene ninguna dificultad.',
                            'Hay que prohibirle todo y el problema desaparece.'
                        ],
                        explicacion: 'Los juegos están diseñados para dar recompensas inmediatas. El cerebro con TDAH responde muy bien a eso, pero le cuesta con tareas de recompensa lejana.'
                    },
                    {
                        contexto: '🏫 La profe dice: "Sofi es súper tranquila y se pasa la clase en las nubes; no puede tener TDAH porque no se mueve."',
                        pregunta: '¿Qué le contestarías con respeto?',
                        opciones: [
                            'Podría tener TDAH de presentación inatenta: no siempre hay hiperactividad.',
                            'Tiene razón: el TDAH siempre implica moverse todo el tiempo.',
                            'Sofi seguro está aburrida porque la clase es mala.',
                            'Las chicas no pueden tener TDAH.',
                            'Estar en las nubes es solo falta de interés.'
                        ],
                        explicacion: 'La presentación inatenta se ve como distracción, despistes y "estar en las nubes". Por ser silenciosa, suele pasar desapercibida.'
                    },
                    {
                        contexto: '💊 Un compañero comenta: "Tomar medicación para el TDAH es hacer trampa."',
                        pregunta: '¿Qué es lo correcto?',
                        opciones: [
                            'La medicación, indicada por un profesional, ayuda a regular la química cerebral; no da superpoderes.',
                            'Sí, es trampa, te vuelve más inteligente que los demás.',
                            'La medicación cura el TDAH para siempre en una semana.',
                            'Cualquiera puede tomarla sin receta para estudiar mejor.',
                            'Nunca sirve para nada.'
                        ],
                        explicacion: 'Cuando la indica un profesional, la medicación ayuda a equilibrar, no a sacar ventaja. Es una herramienta más, junto a estrategias y apoyos.'
                    }
                ]
            }
        ]
    },

    reto3: {
        color: '#06b6d4',
        fases: [
            {
                tipo: 'clasificar', icono: '🗂️', nombre: '¿Ayuda o sabotea?',
                titulo: 'Clasificá los hábitos',
                instrucciones: 'Arrastrá cada tarjeta (o tocala y después tocá la caja) al grupo correcto.',
                grupos: ['✅ Hack que ayuda', '🚫 Trampa que sabotea'],
                items: [
                    { t: '🍅 Usar un temporizador Pomodoro', g: 0 },
                    { t: '🪜 Dividir la tarea en micro-metas', g: 0 },
                    { t: '📵 Dejar el celular en otra habitación', g: 0 },
                    { t: '📝 Usar listas y alarmas visibles', g: 0 },
                    { t: '🏃 Hacer pausas activas con movimiento', g: 0 },
                    { t: '🌙 Hacer todo la noche anterior sin dormir', g: 1 },
                    { t: '📱 Estudiar con TikTok abierto "de fondo"', g: 1 },
                    { t: '🤞 Confiar en que "me voy a acordar"', g: 1 },
                    { t: '🤹 Hacer 5 tareas al mismo tiempo', g: 1 },
                    { t: '😣 Retarse duramente por cada error', g: 1 }
                ]
            },
            {
                tipo: 'memoria', icono: '🃏', nombre: 'Memotest de hacks',
                titulo: 'Memotest de estrategias',
                instrucciones: 'Encontrá cada estrategia con su descripción. ¡Con pocos errores ganás más puntos!',
                pares: [
                    ['🍅 Pomodoro', '25 min de foco + 5 de descanso'],
                    ['🪜 Micro-metas', 'Dividir lo grande en pasos chiquitos'],
                    ['👯 Body doubling', 'Trabajar acompañado/a de otra persona'],
                    ['⏲️ Tiempo visible', 'Ver un reloj o temporizador para "sentir" el tiempo'],
                    ['🧠 Descarga mental', 'Anotar todo lo que tenés en la cabeza'],
                    ['🎁 Recompensa', 'Premiarte al terminar una parte']
                ]
            },
            {
                tipo: 'quiz', icono: '🛠️', nombre: 'Situaciones reales',
                titulo: 'Aplicá el hack correcto',
                instrucciones: 'Elegí la estrategia que más ayuda en cada situación.',
                preguntas: [
                    {
                        contexto: '⏳ Hoja en blanco en Word, ansiedad y ya van 40 minutos en TikTok.',
                        pregunta: '¿Cómo salís de la parálisis?',
                        opciones: ['Micro-meta: me propongo escribir SOLO el título durante 10 minutos.', 'Me obligo a terminar todo sin dormir.', 'Espero a que me lleguen las ganas o la inspiración.', 'Abro otra pestaña para "relajarme un ratito más".', 'Le pido a alguien que lo haga por mí.'],
                        explicacion: 'Bajar la barrera de entrada es clave: una meta minúscula engaña al cerebro para arrancar, y una vez en marcha es más fácil seguir.'
                    },
                    {
                        contexto: '⏰ "En 5 minutitos voy"... y pasa una hora.',
                        pregunta: '¿Qué herramienta ayuda más con la "ceguera del tiempo"?',
                        opciones: ['Hacer el tiempo VISIBLE con un temporizador (por ejemplo, Pomodoro).', 'Mirar la hora en el celular de vez en cuando.', 'Confiar en el instinto.', 'Poner el celular en silencio y olvidarse.', 'Calcular a ojo cuánto falta.'],
                        explicacion: 'El cerebro con TDAH percibe el tiempo de forma "borrosa". Verlo pasar (un reloj, una barra que avanza) ayuda a regular la atención.'
                    },
                    {
                        contexto: '📚 Tenés que estudiar para tres materias y no sabés por dónde empezar.',
                        pregunta: '¿Cuál es el mejor primer paso?',
                        opciones: ['Hacer una lista y elegir UNA tarea pequeña para arrancar.', 'Estudiar las tres materias al mismo tiempo.', 'Esperar al último día, total con presión rindo más.', 'Preguntar en el grupo y no hacer nada más.', 'Ordenar toda la habitación primero.'],
                        explicacion: 'Sacar las tareas de la cabeza y ponerlas en una lista libera la memoria de trabajo. Elegir una sola evita la parálisis por exceso de opciones.'
                    },
                    {
                        contexto: '🔔 Cada notificación del celular te saca de lo que estás haciendo.',
                        pregunta: '¿Qué hacés?',
                        opciones: ['Activo "No molestar" y dejo el celular fuera de mi alcance.', 'Respondo todos los mensajes primero, así me saco eso de encima.', 'Subo el volumen para no perderme nada importante.', 'Pongo más alarmas para acordarme de no mirarlo.', 'Lo tengo en la mano, pero prometo no usarlo.'],
                        explicacion: 'Reducir las distracciones del entorno es mucho más efectivo que depender de la fuerza de voluntad.'
                    },
                    {
                        contexto: '👯 Lucas rinde mucho más cuando estudia en la biblioteca con amigos, aunque cada uno haga lo suyo.',
                        pregunta: '¿Cómo se llama esta estrategia?',
                        opciones: ['Body doubling.', 'Multitarea.', 'Procrastinación.', 'Hiperactividad.', 'Hiperfoco.'],
                        explicacion: 'El body doubling consiste en trabajar acompañado/a: la presencia de otra persona ayuda a sostener la atención y arrancar las tareas.'
                    }
                ]
            }
        ]
    }
};

const NOMBRES_TIPO = {
    quiz: 'Opción múltiple', completar: 'Completar', parejas: 'Conectar parejas',
    clasificar: 'Clasificar', memoria: 'Memoria', vf: 'Verdad o Mito'
};

function iniciarReto(id) {
    const datos = DATOS_RETOS[id];
    const info = RETOS[id];
    const zona = document.getElementById('zona-juego');
    document.documentElement.style.setProperty('--color-reto', datos.color);

    if (!retoDesbloqueado(id)) {
        const previo = id === 'reto1'
            ? { url: 'aprender.html', txt: 'la Base de Datos (video e información)' }
            : { url: RETOS['reto' + (info.num - 1)].url, txt: `el Reto ${info.num - 1} con nota 6 o más` };
        zona.innerHTML = `
            <div class="bloqueo anim-entrada">
                <span class="candado">🔒</span>
                <h2>Este reto todavía está bloqueado</h2>
                <p class="subtitulo">Para desbloquearlo primero tenés que completar ${previo.txt}.</p>
                <a class="btn btn-primario" href="${previo.url}">Ir ahora ➜</a>
            </div>`;
        return;
    }

    const totalItems = datos.fases.reduce((acc, f) => acc + contarItems(f), 0);
    const m = { aciertos: 0, total: 0, puntos: 0, racha: 0, mejorRacha: 0, fase: 0 };

    function contarItems(f) {
        if (f.tipo === 'quiz') return f.preguntas.length;
        if (f.tipo === 'completar') return f.huecos.length;
        if (f.tipo === 'parejas' || f.tipo === 'memoria') return f.pares.length;
        return f.items.length;
    }

    function intro() {
        const previo = estado.retos[id];
        zona.innerHTML = `
            <div class="intro-reto anim-entrada">
                <span class="icono-gigante">${info.emoji}</span>
                <h2>¿List@ para el desafío, ${escaparHTML(estado.nombre)}?</h2>
                <p class="subtitulo">Este reto tiene ${datos.fases.length} fases y ${totalItems} desafíos en total.</p>
                <div class="lista-fases">
                    ${datos.fases.map((f, i) => `
                        <div class="fase-preview">
                            <span class="num">${i + 1}</span>
                            <div><strong>${f.icono} ${f.nombre}</strong><small>${NOMBRES_TIPO[f.tipo]} · ${contarItems(f)} desafíos</small></div>
                        </div>`).join('')}
                </div>
                <div class="reglas">
                    <span class="regla">✅ +10 pts por acierto</span>
                    <span class="regla">🔥 Racha de 3+: +5 extra</span>
                    <span class="regla">⚡ Bonus por velocidad</span>
                    <span class="regla">🎓 Aprobás con 6/10</span>
                </div>
                ${previo ? `<p class="record">🏅 Tu mejor marca: nota ${previo.mejorNota} · ${previo.mejorPuntos} pts · <span class="estrellas">${estrellasHTML(previo.estrellas)}</span></p>` : ''}
                <div class="acciones"><button class="btn btn-primario btn-grande" id="btn-empezar">¡Empezar reto! 🚀</button></div>
            </div>`;
        document.getElementById('btn-empezar').addEventListener('click', () => {
            sonido('click');
            Object.assign(m, { aciertos: 0, total: 0, puntos: 0, racha: 0, mejorRacha: 0, fase: 0 });
            mostrarFase();
        });
    }

    function mostrarFase() {
        const f = datos.fases[m.fase];
        zona.innerHTML = `
            <div class="hud">
                <div class="hud-fases" aria-label="Fase ${m.fase + 1} de ${datos.fases.length}">
                    ${datos.fases.map((_, i) => `${i ? '<span class="hud-linea"></span>' : ''}<span class="hud-fase ${i < m.fase ? 'hecha' : ''} ${i === m.fase ? 'actual' : ''}">${i < m.fase ? '✓' : i + 1}</span>`).join('')}
                </div>
                <div class="hud-stats">
                    <span class="hud-stat" id="hud-aciertos">✅ ${m.aciertos}/${m.total}</span>
                    <span class="hud-stat" id="hud-puntos">⭐ ${m.puntos} pts</span>
                    <span class="hud-stat hud-racha" id="hud-racha">🔥 x${m.racha}</span>
                </div>
            </div>
            <div class="fase-cabecera anim-entrada">
                <span class="fase-tipo">${f.icono} Fase ${m.fase + 1} · ${NOMBRES_TIPO[f.tipo]}</span>
                <h2>${f.titulo}</h2>
                <p>${f.instrucciones}</p>
            </div>
            <div id="area-fase"></div>`;
        actualizarHUD();
        const area = document.getElementById('area-fase');
        const juegos = { quiz: juegoQuiz, completar: juegoCompletar, parejas: juegoParejas, clasificar: juegoClasificar, memoria: juegoMemoria, vf: juegoVF };
        const aciertosAntes = m.aciertos, totalAntes = m.total;
        juegos[f.tipo](area, f, motor, () => finFase(aciertosAntes, totalAntes));
        zona.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function actualizarHUD(animar) {
        const a = document.getElementById('hud-aciertos');
        const p = document.getElementById('hud-puntos');
        const r = document.getElementById('hud-racha');
        if (!a) return;
        a.textContent = `✅ ${m.aciertos}/${m.total}`;
        p.textContent = `⭐ ${m.puntos} pts`;
        r.textContent = `🔥 x${m.racha}`;
        r.classList.toggle('encendida', m.racha >= 3);
        if (animar) [a, p, r].forEach(el => { el.classList.remove('pulso'); void el.offsetWidth; el.classList.add('pulso'); });
    }

    const motor = {
        registrar(ok, bonus = 0, origen) {
            m.total++;
            let pts = 0;
            if (ok) {
                m.aciertos++;
                m.racha++;
                m.mejorRacha = Math.max(m.mejorRacha, m.racha);
                pts = 10 + bonus + (m.racha >= 3 ? 5 : 0);
                m.puntos += pts;
                sonido('acierto');
                if (origen) {
                    const r = origen.getBoundingClientRect();
                    puntosFlotantes(`+${pts}`, r.left + r.width / 2, r.top);
                }
                if (m.racha === 3) toast('¡Racha x3! Ahora ganás +5 extra por acierto', 'exito', '🔥');
                if (m.racha === 5) desbloquearInsignia('racha');
            } else {
                m.racha = 0;
                sonido('error');
            }
            actualizarHUD(true);
            return pts;
        },
        sumar(aciertos, total, puntos) {
            m.aciertos += aciertos;
            m.total += total;
            m.puntos += puntos;
            actualizarHUD(true);
        },
        romperRacha() {
            m.racha = 0;
            actualizarHUD(true);
        }
    };

    function finFase(aciertosAntes, totalAntes) {
        const ac = m.aciertos - aciertosAntes, tot = m.total - totalAntes;
        m.fase++;
        if (m.fase >= datos.fases.length) { resultados(); return; }
        const pct = tot ? ac / tot : 0;
        const icono = pct === 1 ? '🤩' : pct >= 0.6 ? '😎' : '💪';
        const msg = pct === 1 ? '¡Fase perfecta!' : pct >= 0.6 ? '¡Muy bien, fase superada!' : '¡Seguí así, la próxima sale mejor!';
        const area = document.getElementById('area-fase');
        document.querySelector('.fase-cabecera').remove();
        area.innerHTML = `
            <div class="pantalla-centro anim-entrada">
                <span class="icono-gigante">${icono}</span>
                <h2>${msg}</h2>
                <p class="subtitulo">Acertaste ${ac} de ${tot} en esta fase.</p>
                <p><b>Próxima fase:</b> ${datos.fases[m.fase].icono} ${datos.fases[m.fase].nombre}</p>
                <div class="acciones"><button class="btn btn-primario btn-grande" id="btn-sig-fase">Siguiente fase ➜</button></div>
            </div>`;
        sonido('logro');
        const b = document.getElementById('btn-sig-fase');
        b.focus();
        b.addEventListener('click', mostrarFase);
    }

    function resultados() {
        const nota = Math.round((m.aciertos / m.total) * 100) / 10;
        const estrellas = nota >= 9 ? 3 : nota >= 7 ? 2 : nota >= NOTA_APROBACION ? 1 : 0;
        const aprobado = nota >= NOTA_APROBACION;

        const previo = estado.retos[id] || { mejorNota: 0, mejorPuntos: 0, estrellas: 0, intentos: 0 };
        const xpAntes = previo.mejorPuntos;
        const nuevoRecord = m.puntos > previo.mejorPuntos;
        estado.retos[id] = {
            mejorNota: Math.max(previo.mejorNota, nota),
            mejorPuntos: Math.max(previo.mejorPuntos, m.puntos),
            estrellas: Math.max(previo.estrellas, estrellas),
            intentos: previo.intentos + 1
        };
        guardarEstado();
        const xpGanado = Math.max(0, m.puntos - xpAntes);
        actualizarXPVisual(xpGanado);

        if (aprobado) desbloquearInsignia(info.insignia);
        if (estrellas === 3) desbloquearInsignia('perfecto');
        if (Object.keys(RETOS).every(retoAprobado)) desbloquearInsignia('maestro');

        let titulo, mensaje, icono;
        if (nota >= 9) { icono = '🏆'; titulo = '¡Rendimiento legendario!'; mensaje = 'Dominás este tema como un verdadero experto/a en neurodiversidad.'; }
        else if (nota >= 7) { icono = '🎉'; titulo = '¡Excelente trabajo!'; mensaje = 'Aprobaste con muy buena nota. ¿Te animás a ir por las 3 estrellas?'; }
        else if (aprobado) { icono = '👍'; titulo = '¡Reto aprobado!'; mensaje = 'Lo lograste. Repasá los errores y volvé a intentarlo para mejorar tu nota.'; }
        else { icono = '🧩'; titulo = '¡Casi lo lográs!'; mensaje = 'Necesitás 6 para aprobar. Repasá la Base de Datos y volvé a intentarlo: ¡cada intento te hace más fuerte!'; }

        const colorNota = aprobado ? (nota >= 9 ? '#f59e0b' : '#10b981') : '#f43f5e';
        const siguienteId = 'reto' + (info.num + 1);
        const btnSiguiente = aprobado
            ? (RETOS[siguienteId]
                ? `<a class="btn btn-primario" href="${RETOS[siguienteId].url}">Ir al Reto ${info.num + 1} ➜</a>`
                : `<a class="btn btn-oro" href="logros.html">Ver mis logros 🏆</a>`)
            : `<a class="btn btn-secundario" href="aprender.html">📚 Repasar</a>`;

        zona.innerHTML = `
            <div class="pantalla-centro anim-entrada">
                <span class="icono-gigante">${icono}</span>
                <h2 style="font-size:2rem">${titulo}</h2>
                <p class="subtitulo">${mensaje}</p>
                <div class="estrellas-grandes">${estrellasHTML(estrellas)}</div>
                <div class="nota-circulo" style="--p:${nota * 10};--color-nota:${colorNota}">
                    <div><b style="color:${colorNota}">${nota}</b><small>CALIFICACIÓN</small></div>
                </div>
                <div class="resultado-grid">
                    <div class="resultado-item"><b>${m.aciertos}/${m.total}</b><small>Aciertos</small></div>
                    <div class="resultado-item"><b>${m.puntos}</b><small>Puntos</small></div>
                    <div class="resultado-item"><b>🔥 ${m.mejorRacha}</b><small>Mejor racha</small></div>
                    <div class="resultado-item"><b>+${xpGanado}</b><small>${nuevoRecord ? '¡Nuevo récord! XP' : 'XP nuevo'}</small></div>
                </div>
                ${!nuevoRecord && previo.intentos ? '<p class="record">Tu XP guarda siempre tu mejor puntaje. ¡Superalo para ganar más!</p>' : ''}
                <div class="acciones">
                    <button class="btn btn-secundario" id="btn-reintentar">🔄 Reintentar</button>
                    ${btnSiguiente}
                    <a class="btn btn-secundario" href="index.html">🗺️ Mapa</a>
                </div>
            </div>`;
        document.getElementById('btn-reintentar').addEventListener('click', intro);
        if (aprobado) { confeti(); sonido('logro'); } else sonido('error');
    }

    intro();
}


function juegoQuiz(area, fase, motor, fin) {
    const preguntas = mezclar(fase.preguntas);
    let i = 0;

    function mostrar() {
        const p = preguntas[i];
        const ops = mezclar(p.opciones.map((t, k) => ({ t, ok: k === 0 })));
        area.innerHTML = `
            <div class="tarjeta-juego anim-entrada">
                <div class="mini-progreso"><span style="width:${(i / preguntas.length) * 100}%"></span></div>
                <p class="contador-preg">Pregunta ${i + 1} de ${preguntas.length}</p>
                ${p.contexto ? `<div class="burbuja-contexto">${p.contexto}</div>` : ''}
                <h3 class="pregunta">${p.pregunta}</h3>
                <div class="opciones">
                    ${ops.map((o, k) => `<button class="opcion" data-k="${k}"><span class="letra">${'ABCDEF'[k]}</span><span>${o.t}</span></button>`).join('')}
                </div>
                <div class="explicacion" hidden></div>
                <div class="acciones" hidden><button class="btn btn-primario" data-sig>${i < preguntas.length - 1 ? 'Siguiente pregunta ➜' : 'Continuar ➜'}</button></div>
            </div>`;
        const botones = area.querySelectorAll('.opcion');
        botones.forEach(btn => btn.addEventListener('click', () => {
            const ok = ops[+btn.dataset.k].ok;
            botones.forEach((b, j) => { b.disabled = true; if (ops[j].ok) b.classList.add('correcta'); });
            if (!ok) btn.classList.add('incorrecta');
            const pts = motor.registrar(ok, 0, btn);
            const exp = area.querySelector('.explicacion');
            exp.hidden = false;
            exp.className = 'explicacion ' + (ok ? 'ok' : 'mal');
            exp.innerHTML = `<strong>${ok ? `✔️ ¡Correcto! +${pts} pts.` : '❌ No era esa.'}</strong> ${p.explicacion}`;
            const acc = area.querySelector('.acciones');
            acc.hidden = false;
            acc.querySelector('button').focus();
        }));
        area.querySelector('[data-sig]').addEventListener('click', () => {
            i++;
            if (i < preguntas.length) mostrar(); else fin();
        });
    }
    mostrar();
}


function juegoCompletar(area, fase, motor, fin) {
    const texto = fase.texto.replace(/\{(\d+)\}/g, (_, n) => {
        const ops = mezclar(fase.huecos[n]);
        return `<select class="hueco" data-n="${n}" aria-label="Espacio ${+n + 1}">
            <option value="">— elegí —</option>
            ${ops.map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>`;
    });
    area.innerHTML = `
        <div class="tarjeta-juego anim-entrada">
            <div class="circuito">
                <div class="circuito-icono">⚡</div>
                <p class="texto-completar">${texto}</p>
            </div>
            <div class="explicacion" hidden></div>
            <div class="acciones"><button class="btn btn-primario" data-check>${fase.boton || 'Comprobar ✔'}</button></div>
        </div>`;

    const btn = area.querySelector('[data-check]');
    btn.addEventListener('click', () => {
        const selects = area.querySelectorAll('.hueco');
        if ([...selects].some(s => !s.value)) {
            toast('Te faltó conectar algún cable. Completá todos los espacios.', 'aviso', '⚠️');
            sonido('error');
            selects.forEach(s => { if (!s.value) { s.classList.add('temblor'); setTimeout(() => s.classList.remove('temblor'), 500); } });
            return;
        }
        let correctos = 0;
        selects.forEach(s => {
            const correcta = fase.huecos[s.dataset.n][0];
            const ok = s.value === correcta;
            if (ok) correctos++;
            s.classList.add(ok ? 'ok' : 'mal');
            s.disabled = true;
            motor.registrar(ok, 0, ok ? s : null);
            if (!ok) s.insertAdjacentHTML('afterend', `<span class="correccion">${correcta}</span>`);
        });
        const exp = area.querySelector('.explicacion');
        exp.hidden = false;
        exp.className = 'explicacion ' + (correctos === selects.length ? 'ok' : correctos ? 'info' : 'mal');
        exp.innerHTML = `<strong>${correctos === selects.length ? '⚡ ¡Circuito completo!' : `🔌 Conectaste ${correctos} de ${selects.length} cables.`}</strong> ${fase.explicacion}`;
        btn.textContent = 'Continuar ➜';
        btn.replaceWith(btn.cloneNode(true));
        const nuevo = area.querySelector('[data-check]');
        nuevo.addEventListener('click', fin);
        nuevo.focus();
    });
}

/* =========================================================
   MINIJUEGO: CONECTAR PAREJAS
   ========================================================= */
function juegoParejas(area, fase, motor, fin) {
    const colores = ['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#10b981', '#6366f1'];
    const izq = mezclar(fase.pares.map((p, i) => ({ i, t: p[0] })));
    const der = mezclar(fase.pares.map((p, i) => ({ i, t: p[1] })));
    const fallados = new Set();
    let sel = null, resueltos = 0;

    area.innerHTML = `
        <div class="tarjeta-juego anim-entrada">
            <div class="parejas">
                <div class="columna-parejas"><h4>Función</h4>${izq.map(o => `<button class="par-item izq" data-lado="izq" data-i="${o.i}">${o.t}</button>`).join('')}</div>
                <div class="columna-parejas"><h4>Definición</h4>${der.map(o => `<button class="par-item der" data-lado="der" data-i="${o.i}">${o.t}</button>`).join('')}</div>
            </div>
            <div class="explicacion info" style="text-align:center">🔗 Parejas conectadas: <b id="cont-parejas">0</b>/${fase.pares.length}</div>
            <div class="acciones" hidden><button class="btn btn-primario" data-sig>Continuar ➜</button></div>
        </div>`;

    area.querySelectorAll('.par-item').forEach(btn => btn.addEventListener('click', () => {
        if (btn.disabled) return;
        if (!sel || sel.dataset.lado === btn.dataset.lado) {
            if (sel) sel.classList.remove('seleccionado');
            sel = btn;
            btn.classList.add('seleccionado');
            sonido('click');
            return;
        }
        const a = sel, b = btn;
        sel = null;
        a.classList.remove('seleccionado');
        const idxIzq = a.dataset.lado === 'izq' ? a.dataset.i : b.dataset.i;
        if (a.dataset.i === b.dataset.i) {
            const color = colores[resueltos % colores.length];
            [a, b].forEach(x => { x.classList.add('emparejado'); x.style.setProperty('--par-color', color); x.disabled = true; });
            motor.registrar(!fallados.has(idxIzq), 0, b);
            resueltos++;
            document.getElementById('cont-parejas').textContent = resueltos;
            if (resueltos === fase.pares.length) {
                const acc = area.querySelector('.acciones');
                acc.hidden = false;
                acc.querySelector('button').focus();
            }
        } else {
            fallados.add(idxIzq);
            motor.romperRacha();
            sonido('error');
            [a, b].forEach(x => { x.classList.add('error-par'); setTimeout(() => x.classList.remove('error-par'), 500); });
        }
    }));
    area.querySelector('[data-sig]').addEventListener('click', fin);
}

function juegoClasificar(area, fase, motor, fin) {
    const items = mezclar(fase.items.map((it, i) => ({ ...it, id: i })));
    let seleccionado = null, restantes = items.length;

    area.innerHTML = `
        <div class="tarjeta-juego anim-entrada">
            <div class="clasif-pool" id="pool">
                ${items.map(it => `<button class="chip" draggable="true" data-id="${it.id}">${it.t}</button>`).join('')}
            </div>
            <div class="clasif-cajas">
                ${fase.grupos.map((g, i) => `<div class="caja-clasif ${i === 0 ? 'verde' : 'roja'}" data-g="${i}" tabindex="0" role="button" aria-label="Colocar en ${g}"><h4>${g}</h4><div class="lista"></div></div>`).join('')}
            </div>
            <p class="retro-clasif" id="retro-clasif" aria-live="polite"></p>
            <div class="acciones" hidden><button class="btn btn-primario" data-sig>Continuar ➜</button></div>
        </div>`;

    const retro = document.getElementById('retro-clasif');

    function colocar(chip, g) {
        const it = fase.items[chip.dataset.id];
        const ok = it.g === g;
        chip.classList.remove('seleccionado');
        chip.classList.add(ok ? 'ok' : 'mal');
        chip.draggable = false;
        chip.disabled = true;
        const caja = area.querySelector(`.caja-clasif[data-g="${it.g}"] .lista`);
        caja.appendChild(chip);
        if (!ok) chip.innerHTML += ' ↩';
        motor.registrar(ok, 0, chip);
        retro.textContent = ok ? '✔️ ¡Bien clasificado!' : `❌ Esa iba en "${fase.grupos[it.g]}". La moví a su lugar.`;
        retro.style.color = ok ? '#047857' : '#be123c';
        seleccionado = null;
        restantes--;
        if (restantes === 0) {
            const acc = area.querySelector('.acciones');
            acc.hidden = false;
            acc.querySelector('button').focus();
        }
    }

    area.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            if (chip.disabled) return;
            area.querySelectorAll('.chip').forEach(c => c.classList.remove('seleccionado'));
            seleccionado = chip;
            chip.classList.add('seleccionado');
            sonido('click');
        });
        chip.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', chip.dataset.id);
            chip.classList.add('arrastrando');
        });
        chip.addEventListener('dragend', () => chip.classList.remove('arrastrando'));
    });

    area.querySelectorAll('.caja-clasif').forEach(caja => {
        const g = +caja.dataset.g;
        const usar = () => {
            if (!seleccionado) { toast('Primero elegí una tarjeta', 'aviso', '👆'); return; }
            colocar(seleccionado, g);
        };
        caja.addEventListener('click', e => { if (!e.target.closest('.chip')) usar(); });
        caja.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); usar(); } });
        caja.addEventListener('dragover', e => { e.preventDefault(); caja.classList.add('sobre'); });
        caja.addEventListener('dragleave', () => caja.classList.remove('sobre'));
        caja.addEventListener('drop', e => {
            e.preventDefault();
            caja.classList.remove('sobre');
            const chip = area.querySelector(`.chip[data-id="${e.dataTransfer.getData('text/plain')}"]`);
            if (chip && !chip.disabled) colocar(chip, g);
        });
    });
    area.querySelector('[data-sig]').addEventListener('click', fin);
}


function juegoMemoria(area, fase, motor, fin) {
    const cartas = mezclar(fase.pares.flatMap((p, i) => [{ i, t: p[0], c: true }, { i, t: p[1], c: false }]));
    let abiertas = [], bloqueado = false, encontrados = 0, errores = 0, movimientos = 0;
    const pares = fase.pares.length;

    area.innerHTML = `
        <div class="tarjeta-juego anim-entrada">
            <div class="memoria-info">
                <span class="hud-stat" id="mem-mov">🔄 Movimientos: 0</span>
                <span class="hud-stat" id="mem-par">🧩 Pares: 0/${pares}</span>
                <span class="hud-stat" id="mem-err">❌ Errores: 0</span>
            </div>
            <div class="grid-memoria">
                ${cartas.map((c, k) => `
                    <button class="carta" data-k="${k}" aria-label="Carta ${k + 1}">
                        <div class="carta-inner">
                            <div class="carta-cara carta-dorso"></div>
                            <div class="carta-cara carta-frente ${c.c ? 'concepto' : ''}">${c.t}</div>
                        </div>
                    </button>`).join('')}
            </div>
            <div class="explicacion" hidden></div>
            <div class="acciones" hidden><button class="btn btn-primario" data-sig>Continuar ➜</button></div>
        </div>`;

    function actualizar() {
        document.getElementById('mem-mov').textContent = `🔄 Movimientos: ${movimientos}`;
        document.getElementById('mem-par').textContent = `🧩 Pares: ${encontrados}/${pares}`;
        document.getElementById('mem-err').textContent = `❌ Errores: ${errores}`;
    }

    area.querySelectorAll('.carta').forEach(btn => btn.addEventListener('click', () => {
        if (bloqueado || btn.classList.contains('volteada') || btn.classList.contains('encontrada')) return;
        btn.classList.add('volteada');
        btn.setAttribute('aria-label', cartas[btn.dataset.k].t);
        sonido('voltear');
        abiertas.push(btn);
        if (abiertas.length < 2) return;

        movimientos++;
        const [a, b] = abiertas;
        const ca = cartas[a.dataset.k], cb = cartas[b.dataset.k];
        if (ca.i === cb.i && ca.c !== cb.c) {
            [a, b].forEach(x => { x.classList.remove('volteada'); x.classList.add('encontrada'); });
            encontrados++;
            sonido('acierto');
            const r = b.getBoundingClientRect();
            puntosFlotantes('+10', r.left + r.width / 2, r.top);
            abiertas = [];
            if (encontrados === pares) terminar();
        } else {
            errores++;
            bloqueado = true;
            setTimeout(() => {
                [a, b].forEach(x => { x.classList.remove('volteada'); x.setAttribute('aria-label', 'Carta oculta'); });
                abiertas = [];
                bloqueado = false;
            }, 1000);
        }
        actualizar();
    }));

    function terminar() {
        const penalizacion = Math.min(pares, Math.max(0, errores - pares));
        const bonus = Math.max(0, pares * 2 - errores) * 2;
        const puntos = pares * 10 + bonus;
        motor.sumar(pares, pares + penalizacion, puntos);
        if (errores <= pares) desbloquearInsignia('memoria');
        const exp = area.querySelector('.explicacion');
        exp.hidden = false;
        exp.className = 'explicacion ' + (penalizacion === 0 ? 'ok' : 'info');
        exp.innerHTML = `<strong>🧠 ¡Memotest completo en ${movimientos} movimientos!</strong> Ganaste ${puntos} pts${bonus ? ` (incluye +${bonus} de bonus por pocos errores)` : ''}.`;
        sonido('logro');
        const acc = area.querySelector('.acciones');
        acc.hidden = false;
        acc.querySelector('button').focus();
    }
    area.querySelector('[data-sig]').addEventListener('click', fin);
}


function juegoVF(area, fase, motor, fin) {
    const items = mezclar(fase.items);
    const T = fase.segundos || 12;
    let i = 0, intervalo = null, inicio = 0, respondido = false;

    function teclas(e) {
        if (respondido || e.target.tagName === 'INPUT') return;
        if (e.key.toLowerCase() === 'v') responder(true);
        if (e.key.toLowerCase() === 'm') responder(false);
    }
    document.addEventListener('keydown', teclas);

    function mostrar() {
        const it = items[i];
        respondido = false;
        area.innerHTML = `
            <div class="tarjeta-juego vf-tarjeta anim-entrada">
                <p class="contador-preg">Frase ${i + 1} de ${items.length}</p>
                <div class="temporizador" id="temporizador"><span style="width:100%"></span></div>
                <div class="afirmacion">"${it.t}"</div>
                <div class="botones-vf">
                    <button class="btn-vf verdad" data-v="1">✅ Verdad <kbd>V</kbd></button>
                    <button class="btn-vf mito" data-v="0">❌ Mito <kbd>M</kbd></button>
                </div>
                <div class="explicacion" hidden></div>
                <div class="acciones" hidden><button class="btn btn-primario" data-sig>${i < items.length - 1 ? 'Siguiente frase ➜' : 'Continuar ➜'}</button></div>
            </div>`;
        area.querySelectorAll('.btn-vf').forEach(b => b.addEventListener('click', () => responder(b.dataset.v === '1')));
        area.querySelector('[data-sig]').addEventListener('click', () => {
            i++;
            if (i < items.length) mostrar();
            else { document.removeEventListener('keydown', teclas); fin(); }
        });

        const barra = area.querySelector('#temporizador span');
        const cont = area.querySelector('#temporizador');
        inicio = performance.now();
        clearInterval(intervalo);
        intervalo = setInterval(() => {
            const restante = T - (performance.now() - inicio) / 1000;
            barra.style.width = Math.max(0, (restante / T) * 100) + '%';
            barra.style.backgroundPosition = `${100 - (restante / T) * 100}% 0`;
            cont.classList.toggle('urgente', restante < 4);
            if (restante <= 0) responder(null);
        }, 100);
    }

    function responder(valor) {
        if (respondido) return;
        respondido = true;
        clearInterval(intervalo);
        const it = items[i];
        const segundos = (performance.now() - inicio) / 1000;
        const ok = valor === it.v;
        const bonus = ok ? Math.max(0, Math.ceil((T - segundos) / 2)) : 0;
        const btnElegido = valor === null ? null : area.querySelector(`.btn-vf[data-v="${valor ? 1 : 0}"]`);
        const pts = motor.registrar(ok, bonus, btnElegido);
        if (ok && segundos < 3) desbloquearInsignia('rayo');
        area.querySelectorAll('.btn-vf').forEach(b => b.disabled = true);
        if (btnElegido) btnElegido.style.opacity = 1;
        if (!ok && btnElegido) btnElegido.classList.add('temblor');

        const exp = area.querySelector('.explicacion');
        exp.hidden = false;
        exp.className = 'explicacion ' + (ok ? 'ok' : 'mal');
        const sello = `<span class="sello ${it.v ? 'verdad' : 'mito'}">${it.v ? 'VERDAD' : 'MITO'}</span><br>`;
        const encabezado = valor === null ? '⏰ ¡Se acabó el tiempo!' : ok ? `✔️ ¡Correcto! +${pts} pts${bonus ? ` (⚡ +${bonus} velocidad)` : ''}` : '❌ ¡Uy, no!';
        exp.innerHTML = `${sello}<strong>${encabezado}</strong> ${it.e}`;
        const acc = area.querySelector('.acciones');
        acc.hidden = false;
        acc.querySelector('button').focus();
    }

    mostrar();
}

