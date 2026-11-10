const CLAVE_ESTADO = 'misionNeurodiversa_v2';
const XP_INFO = 50;
const XP_BITACORA = 50;
const NOTA_APROBACION = 6;

const RETOS = {
    reto1: { num: 1, titulo: 'El Cerebro y las Conexiones', corto: 'Neurobiología', emoji: '🧠', url: 'reto1.html', insignia: 'cerebro' },
    reto2: { num: 2, titulo: 'Cazadores de Mitos', corto: 'Mitos', emoji: '🛡️', url: 'reto2.html', insignia: 'mitos' },
    reto3: { num: 3, titulo: 'Hackeando el TDAH', corto: 'Estrategias', emoji: '⏱️', url: 'reto3.html', insignia: 'tiempo' }
};

const NIVELES = [
    { min: 0, nombre: 'Aprendiz Neurocurioso', icono: '🥉' },
    { min: 200, nombre: 'Explorador Atento', icono: '🥈' },
    { min: 450, nombre: 'Hacker Cognitivo', icono: '🥇' },
    { min: 700, nombre: 'Maestro Neurodiverso', icono: '🏆' }
];

const INSIGNIAS = [
    { id: 'primer-paso', nombre: 'Primer Paso', icono: '📚', desc: 'Completaste la investigación inicial.' },
    { id: 'cerebro', nombre: 'Cerebro Conectado', icono: '🧠', desc: 'Aprobaste el Reto 1: Neurobiología.' },
    { id: 'mitos', nombre: 'Cazador de Mitos', icono: '🛡️', desc: 'Aprobaste el Reto 2: Mitos.' },
    { id: 'tiempo', nombre: 'Hacker del Tiempo', icono: '⏱️', desc: 'Aprobaste el Reto 3: Estrategias.' },
    { id: 'racha', nombre: 'Racha de Fuego', icono: '🔥', desc: 'Lograste 5 respuestas correctas seguidas.' },
    { id: 'rayo', nombre: 'Mente Veloz', icono: '⚡', desc: 'Acertaste un Verdad o Mito en menos de 3 segundos.' },
    { id: 'memoria', nombre: 'Memoria de Elefante', icono: '🐘', desc: 'Completaste el juego de memoria con pocos errores.' },
    { id: 'perfecto', nombre: 'Perfeccionista', icono: '⭐', desc: 'Conseguiste 3 estrellas en un reto.' },
    { id: 'bitacora', nombre: 'Mente Reflexiva', icono: '📝', desc: 'Escribiste tu bitácora de salida.' },
    { id: 'maestro', nombre: 'Maestro Neurodiverso', icono: '🏆', desc: 'Aprobaste los tres retos.' }
];

const AVATARES = ['🦊', '🐼', '🤖', '🦄', '🐙', '🚀', '🐱', '🦖'];

function estadoInicial() {
    return { nombre: '', avatar: '🦊', infoCompletada: false, tarjetasVistas: [], retos: {}, insignias: [], bitacora: '', sonido: true };
}

function cargarEstado() {
    try {
        const guardado = JSON.parse(localStorage.getItem(CLAVE_ESTADO));
        return Object.assign(estadoInicial(), guardado || {});
    } catch (e) {
        return estadoInicial();
    }
}

let estado = cargarEstado();

function guardarEstado() {
    try { localStorage.setItem(CLAVE_ESTADO, JSON.stringify(estado)); } catch (e) { /* almacenamiento no disponible */ }
}

function calcularXP() {
    let xp = estado.infoCompletada ? XP_INFO : 0;
    if (estado.bitacora) xp += XP_BITACORA;
    for (const id in estado.retos) xp += estado.retos[id].mejorPuntos || 0;
    return xp;
}

function nivelDe(xp) {
    let actual = NIVELES[0], siguiente = NIVELES[1];
    NIVELES.forEach((n, i) => {
        if (xp >= n.min) { actual = n; siguiente = NIVELES[i + 1] || null; }
    });
    return { actual, siguiente };
}

function retoAprobado(id) {
    const r = estado.retos[id];
    return !!(r && r.mejorNota >= NOTA_APROBACION);
}

function retoDesbloqueado(id) {
    if (id === 'reto1') return estado.infoCompletada;
    if (id === 'reto2') return retoAprobado('reto1');
    if (id === 'reto3') return retoAprobado('reto2');
    return true;
}

function notaPromedio() {
    const ids = Object.keys(RETOS);
    const suma = ids.reduce((acc, id) => acc + ((estado.retos[id] && estado.retos[id].mejorNota) || 0), 0);
    return Math.round((suma / ids.length) * 10) / 10;
}

function escaparHTML(txt) {
    return String(txt).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function mezclar(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function estrellasHTML(n, total = 3) {
    let html = '';
    for (let i = 0; i < total; i++) html += `<span class="${i < n ? '' : 'estrella-off'}">⭐</span>`;
    return html;
}

let audioCtx = null;
function sonido(tipo) {
    if (!estado.sonido) return;
    try {
        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        const notas = {
            acierto: [[660, 0], [880, 0.09]],
            error: [[220, 0], [180, 0.12]],
            click: [[520, 0]],
            logro: [[523, 0], [659, 0.1], [784, 0.2], [1046, 0.3]],
            voltear: [[400, 0]]
        }[tipo] || [[440, 0]];
        notas.forEach(([frec, retraso]) => {
            const osc = audioCtx.createOscillator();
            const gan = audioCtx.createGain();
            osc.type = tipo === 'error' ? 'sawtooth' : 'sine';
            osc.frequency.value = frec;
            const t = audioCtx.currentTime + retraso;
            gan.gain.setValueAtTime(0.0001, t);
            gan.gain.exponentialRampToValueAtTime(tipo === 'error' ? 0.06 : 0.15, t + 0.02);
            gan.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
            osc.connect(gan).connect(audioCtx.destination);
            osc.start(t);
            osc.stop(t + 0.25);
        });
    } catch (e) { }
}

function toast(mensaje, tipo = 'info', icono = '💬', detalle = '') {
    const cont = document.getElementById('toasts');
    if (!cont) return;
    const el = document.createElement('div');
    el.className = `toast ${tipo}`;
    el.innerHTML = `<span class="toast-icono">${icono}</span><div>${mensaje}${detalle ? `<small>${detalle}</small>` : ''}</div>`;
    cont.appendChild(el);
    setTimeout(() => {
        el.classList.add('saliendo');
        setTimeout(() => el.remove(), 400);
    }, tipo === 'insignia' ? 4200 : 2800);
}

function puntosFlotantes(texto, x, y, color) {
    const el = document.createElement('div');
    el.className = 'flotante';
    el.textContent = texto;
    el.style.left = (x || window.innerWidth / 2) + 'px';
    el.style.top = (y || window.innerHeight / 2) + 'px';
    if (color) el.style.color = color;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
}

function confeti(duracion = 2500) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let canvas = document.getElementById('confeti');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'confeti';
        document.body.appendChild(canvas);
    }
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colores = ['#7c3aed', '#ec4899', '#06b6d4', '#f59e0b', '#10b981'];
    const piezas = Array.from({ length: 160 }, () => ({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * canvas.height * 0.5,
        w: 6 + Math.random() * 8,
        h: 8 + Math.random() * 10,
        vy: 2 + Math.random() * 4,
        vx: -2 + Math.random() * 4,
        rot: Math.random() * 360,
        vr: -8 + Math.random() * 16,
        color: colores[Math.floor(Math.random() * colores.length)]
    }));
    const inicio = performance.now();
    function cuadro(t) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        piezas.forEach(p => {
            p.x += p.vx; p.y += p.vy; p.rot += p.vr;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });
        if (t - inicio < duracion) requestAnimationFrame(cuadro);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    requestAnimationFrame(cuadro);
}

function desbloquearInsignia(id) {
    if (estado.insignias.includes(id)) return false;
    const ins = INSIGNIAS.find(i => i.id === id);
    if (!ins) return false;
    estado.insignias.push(id);
    guardarEstado();
    setTimeout(() => {
        sonido('logro');
        toast(`¡Insignia desbloqueada: ${ins.nombre}!`, 'insignia', ins.icono, ins.desc);
    }, 400);
    return true;
}

function renderTopbar() {
    const cont = document.getElementById('topbar');
    if (!cont || !estado.nombre) return;
    const pagina = document.body.dataset.page;
    const xp = calcularXP();
    const { actual, siguiente } = nivelDe(xp);
    const pct = siguiente ? ((xp - actual.min) / (siguiente.min - actual.min)) * 100 : 100;
    const enlaces = [
        { id: 'inicio', url: 'index.html', txt: 'Mapa', ico: '🗺️' },
        { id: 'aprender', url: 'aprender.html', txt: 'Aprender', ico: '📚' },
        { id: 'reto1', url: 'reto1.html', txt: 'Reto 1', ico: '🧠' },
        { id: 'reto2', url: 'reto2.html', txt: 'Reto 2', ico: '🛡️' },
        { id: 'reto3', url: 'reto3.html', txt: 'Reto 3', ico: '⏱️' },
        { id: 'logros', url: 'logros.html', txt: 'Logros', ico: '🏆' }
    ];
    cont.innerHTML = `
        <div class="topbar-inner">
            <a href="index.html" class="logo">🧠 <span>Misión<b>Neurodiversa</b></span></a>
            <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>
            <nav class="nav-principal" aria-label="Páginas de la misión">
                ${enlaces.map(l => {
        const bloq = RETOS[l.id] && !retoDesbloqueado(l.id);
        const act = pagina === l.id;
        return `<a href="${l.url}" class="${act ? 'activo' : ''} ${bloq ? 'bloqueado' : ''}" ${act ? 'aria-current="page"' : ''}>${bloq ? '🔒' : l.ico} ${l.txt}</a>`;
    }).join('')}
            </nav>
            <div class="jugador-chip" title="${actual.nombre}">
                <span class="avatar">${estado.avatar}</span>
                <div class="jugador-datos">
                    <strong>${escaparHTML(estado.nombre)}</strong>
                    <small>${actual.icono} ${actual.nombre}</small>
                    <div class="barra-xp" role="progressbar" aria-valuenow="${Math.round(pct)}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>
                </div>
                <span class="xp-pill" id="xp-pill">${xp} XP</span>
                <button class="btn-sonido" aria-label="Activar o desactivar sonido">${estado.sonido ? '🔊' : '🔇'}</button>
            </div>
        </div>`;

    const toggle = cont.querySelector('.menu-toggle');
    const nav = cont.querySelector('.nav-principal');
    toggle.addEventListener('click', () => {
        const abierto = nav.classList.toggle('abierto');
        toggle.setAttribute('aria-expanded', abierto);
    });
    cont.querySelector('.btn-sonido').addEventListener('click', e => {
        estado.sonido = !estado.sonido;
        guardarEstado();
        e.currentTarget.textContent = estado.sonido ? '🔊' : '🔇';
        sonido('click');
    });
}

function actualizarXPVisual(ganado) {
    const nivelAntes = nivelDe(calcularXP() - ganado).actual;
    renderTopbar();
    const pill = document.getElementById('xp-pill');
    if (pill && ganado > 0) {
        pill.classList.add('pulso');
        const r = pill.getBoundingClientRect();
        puntosFlotantes(`+${ganado} XP`, r.left + r.width / 2, r.bottom + 10, '#f59e0b');
    }
    const nivelAhora = nivelDe(calcularXP()).actual;
    if (nivelAhora.nombre !== nivelAntes.nombre) {
        setTimeout(() => {
            sonido('logro');
            toast(`¡Subiste de nivel! Ahora sos ${nivelAhora.nombre}`, 'insignia', nivelAhora.icono);
            confeti(1800);
        }, 900);
    }
}


function iniciarPaginaInicio() {
    const login = document.getElementById('pantalla-login');
    const hub = document.getElementById('hub');
    if (!estado.nombre) {
        login.hidden = false;
        hub.hidden = true;
        prepararLogin();
    } else {
        login.hidden = true;
        hub.hidden = false;
        renderHub();
    }
}

function prepararLogin() {
    const selector = document.getElementById('selector-avatar');
    let elegido = estado.avatar || AVATARES[0];
    selector.innerHTML = AVATARES.map(a => `<button type="button" class="${a === elegido ? 'elegido' : ''}" aria-label="Avatar ${a}">${a}</button>`).join('');
    selector.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
        selector.querySelectorAll('button').forEach(x => x.classList.remove('elegido'));
        b.classList.add('elegido');
        elegido = b.textContent;
        sonido('click');
    }));

    document.getElementById('form-login').addEventListener('submit', e => {
        e.preventDefault();
        const nombre = document.getElementById('nombre-jugador').value.trim();
        const aviso = document.getElementById('error-login');
        if (!nombre) {
            aviso.hidden = false;
            aviso.textContent = '⚠️ ¡Alto ahí, explorador/a! Ingresá tu nombre para continuar.';
            document.querySelector('.caja-login').classList.add('temblor');
            setTimeout(() => document.querySelector('.caja-login').classList.remove('temblor'), 500);
            sonido('error');
            return;
        }
        estado.nombre = nombre.slice(0, 30);
        estado.avatar = elegido;
        guardarEstado();
        sonido('logro');
        confeti(1500);
        iniciarPaginaInicio();
        renderTopbar();
    });
}

function renderHub() {
    const xp = calcularXP();
    const { actual } = nivelDe(xp);
    document.getElementById('hub-avatar').textContent = estado.avatar;
    document.getElementById('hub-nombre').textContent = estado.nombre;

    const completados = Object.keys(RETOS).filter(retoAprobado).length;
    document.getElementById('hub-stats').innerHTML = `
        <div class="stat"><span class="stat-icono">⚡</span><div><b>${xp}</b><small>Puntos XP</small></div></div>
        <div class="stat"><span class="stat-icono">${actual.icono}</span><div><b style="font-size:1.05rem">${actual.nombre}</b><small>Nivel actual</small></div></div>
        <div class="stat"><span class="stat-icono">🎯</span><div><b>${completados}/3</b><small>Retos aprobados</small></div></div>
        <div class="stat"><span class="stat-icono">🏅</span><div><b>${estado.insignias.length}/${INSIGNIAS.length}</b><small>Insignias</small></div></div>`;

    const pasos = [
        {
            titulo: 'Base de Datos', sub: 'Mirá el video y explorá la información clave sobre el TDAH.', emoji: '📚', url: 'aprender.html',
            estado: estado.infoCompletada ? 'completado' : 'disponible', extra: `+${XP_INFO} XP`
        },
        ...Object.keys(RETOS).map(id => {
            const r = RETOS[id];
            const datos = estado.retos[id];
            const est = retoAprobado(id) ? 'completado' : (retoDesbloqueado(id) ? 'disponible' : 'bloqueado');
            return {
                titulo: `Reto ${r.num}: ${r.titulo}`, sub: r.corto, emoji: r.emoji, url: r.url, estado: est,
                extra: datos ? `<span class="estrellas">${estrellasHTML(datos.estrellas)}</span> · Nota ${datos.mejorNota}` : 'Sin jugar'
            };
        }),
        { titulo: 'Salón de la Fama', sub: 'Tus insignias, calificaciones y bitácora final.', emoji: '🏆', url: 'logros.html', estado: 'disponible', extra: 'Siempre abierto' }
    ];
    const etiquetas = { completado: '✔ Completado', disponible: '▶ Disponible', bloqueado: '🔒 Bloqueado' };
    document.getElementById('mapa').innerHTML = pasos.map((p, i) => `
        <a class="nodo ${p.estado} anim-entrada" style="animation-delay:${i * 0.1}s" href="${p.url}">
            <span class="nodo-emoji">${p.estado === 'bloqueado' ? '🔒' : p.emoji}</span>
            <div>
                <h3>${p.titulo}</h3>
                <p>${p.sub}</p>
                <span class="nodo-estado">${etiquetas[p.estado]}</span>
                <small style="margin-left:6px;color:var(--texto-suave);font-weight:700">${p.extra}</small>
            </div>
        </a>`).join('');

    const siguiente = pasos.find(p => p.estado === 'disponible');
    const btn = document.getElementById('btn-continuar');
    if (siguiente && btn) {
        btn.href = siguiente.url;
        btn.textContent = `Continuar: ${siguiente.titulo} ➜`;
    }
}


function iniciarPaginaAprender() {
    const tarjetas = document.querySelectorAll('.flip');
    const total = tarjetas.length;
    const contador = document.getElementById('contador-tarjetas');
    const btnCompletar = document.getElementById('btn-completar-info');

    function actualizarChecklist() {
        const vistas = estado.tarjetasVistas.length;
        contador.textContent = `${vistas}/${total}`;
        document.getElementById('check-tarjetas').classList.toggle('hecho', vistas >= total);
        document.getElementById('check-tabs').classList.toggle('hecho', tabsVistas.size >= 3);
        document.getElementById('check-video').classList.toggle('hecho', videoVisto);
        const listo = vistas >= total && tabsVistas.size >= 3 && videoVisto;
        if (estado.infoCompletada) {
            btnCompletar.disabled = false;
            btnCompletar.textContent = '✔ Investigación completada · Ir al Reto 1 ➜';
        } else {
            btnCompletar.disabled = !listo;
            btnCompletar.textContent = listo ? `Completar investigación (+${XP_INFO} XP) 🚀` : 'Completá las 3 misiones de arriba para continuar';
        }
    }

    tarjetas.forEach(t => {
        if (estado.tarjetasVistas.includes(t.dataset.id)) t.classList.add('vista');
        t.addEventListener('click', () => {
            t.classList.toggle('girada');
            sonido('voltear');
            if (!estado.tarjetasVistas.includes(t.dataset.id)) {
                estado.tarjetasVistas.push(t.dataset.id);
                guardarEstado();
                const r = t.getBoundingClientRect();
                puntosFlotantes('✔', r.left + r.width / 2, r.top + 20, '#7c3aed');
                actualizarChecklist();
            }
        });
    });

    const tabsVistas = new Set(estado.infoCompletada ? ['a', 'b', 'c'] : []);
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(t => { t.classList.remove('activa'); t.setAttribute('aria-selected', 'false'); });
        tab.classList.add('activa');
        tab.setAttribute('aria-selected', 'true');
        document.querySelectorAll('.panel-tab').forEach(p => p.hidden = p.id !== tab.dataset.panel);
        tabsVistas.add(tab.dataset.panel);
        sonido('click');
        actualizarChecklist();
    }));
    if (tabs[0]) tabsVistas.add(tabs[0].dataset.panel);

    let videoVisto = estado.infoCompletada;
    document.getElementById('btn-video-visto').addEventListener('click', e => {
        videoVisto = true;
        e.currentTarget.textContent = '✔ ¡Video visto!';
        e.currentTarget.disabled = true;
        sonido('acierto');
        actualizarChecklist();
    });
    if (videoVisto) {
        const b = document.getElementById('btn-video-visto');
        b.textContent = '✔ ¡Video visto!';
        b.disabled = true;
    }

    const datos = [
        'Se estima que alrededor del 5% de niñas, niños y adolescentes en el mundo tienen TDAH.',
        'Muchas chicas con TDAH reciben el diagnóstico más tarde porque suelen tener la presentación inatenta, que "se nota menos".',
        'El TDAH tiene un fuerte componente hereditario: es común que haya otros familiares con características similares.',
        'Personas con TDAH suelen destacarse por su creatividad, energía y capacidad de pensar "fuera de la caja".',
        'El hiperfoco permite pasar horas concentrado/a en algo que apasiona... ¡y olvidarse hasta de comer!',
        'El TDAH no desaparece mágicamente al crecer: muchas personas adultas lo siguen teniendo y aprenden estrategias para convivir con él.'
    ];
    let iDato = 0;
    const txtDato = document.getElementById('dato-texto');
    function mostrarDato() {
        txtDato.style.opacity = 0;
        setTimeout(() => { txtDato.textContent = datos[iDato]; txtDato.style.opacity = 1; }, 250);
    }
    document.getElementById('btn-dato').addEventListener('click', () => {
        iDato = (iDato + 1) % datos.length;
        mostrarDato();
        sonido('click');
    });
    txtDato.textContent = datos[0];

    btnCompletar.addEventListener('click', () => {
        if (estado.infoCompletada) { location.href = 'reto1.html'; return; }
        estado.infoCompletada = true;
        guardarEstado();
        actualizarXPVisual(XP_INFO);
        desbloquearInsignia('primer-paso');
        confeti();
        toast('¡Reto 1 desbloqueado!', 'exito', '🔓');
        actualizarChecklist();
    });

    actualizarChecklist();
}


function iniciarPaginaLogros() {
    const xp = calcularXP();
    const { actual, siguiente } = nivelDe(xp);
    const pct = siguiente ? ((xp - actual.min) / (siguiente.min - actual.min)) * 100 : 100;
    const prom = notaPromedio();

    document.getElementById('perfil').innerHTML = `
        <span class="hero-avatar">${estado.avatar}</span>
        <div>
            <span class="etiqueta">${actual.icono} ${actual.nombre}</span>
            <h1>${escaparHTML(estado.nombre)}</h1>
            <p>${xp} XP ${siguiente ? `· Te faltan ${siguiente.min - xp} XP para ser <b>${siguiente.nombre}</b>` : '· ¡Nivel máximo alcanzado!'}</p>
            <div class="barra-xp"><span style="width:${pct}%"></span></div>
        </div>
        <div class="nota-general"><small>Calificación general</small><b>${prom}</b><small>/ 10</small></div>`;

    document.getElementById('tabla-retos').innerHTML = Object.keys(RETOS).map(id => {
        const r = RETOS[id];
        const d = estado.retos[id];
        const desbloq = retoDesbloqueado(id);
        return `
        <div class="fila-reto">
            <span class="nodo-emoji">${desbloq ? r.emoji : '🔒'}</span>
            <div><strong>Reto ${r.num}: ${r.titulo}</strong><br><small style="color:var(--texto-suave)">${d ? `${d.intentos} intento(s) · Mejor puntaje: ${d.mejorPuntos} XP` : (desbloq ? 'Disponible para jugar' : 'Bloqueado')}</small></div>
            <span class="estrellas">${estrellasHTML(d ? d.estrellas : 0)}</span>
            <span class="nota-mini ${d ? (d.mejorNota >= NOTA_APROBACION ? 'aprobado' : 'desaprobado') : ''}">${d ? d.mejorNota : '—'}</span>
            ${desbloq ? `<a class="btn btn-secundario" href="${r.url}">${d ? 'Mejorar' : 'Jugar'}</a>` : '<span></span>'}
        </div>`;
    }).join('');

    document.getElementById('grid-insignias').innerHTML = INSIGNIAS.map(ins => {
        const ganada = estado.insignias.includes(ins.id);
        return `<article class="insignia ${ganada ? 'ganada' : ''}">
            <div class="medalla">${ins.icono}</div>
            <h4>${ins.nombre}</h4>
            <p>${ganada ? ins.desc : '🔒 ' + ins.desc}</p>
        </article>`;
    }).join('');
    document.getElementById('contador-insignias').textContent = `${estado.insignias.length}/${INSIGNIAS.length}`;

    const textarea = document.getElementById('reflexion');
    const fb = document.getElementById('fb-bitacora');
    textarea.value = estado.bitacora || '';
    document.getElementById('form-bitacora').addEventListener('submit', e => {
        e.preventDefault();
        const texto = textarea.value.trim();
        if (texto.length < 15) {
            fb.hidden = false;
            fb.className = 'explicacion mal';
            fb.textContent = '⚠️ Escribí una reflexión un poco más completa (al menos 15 caracteres).';
            sonido('error');
            return;
        }
        const primeraVez = !estado.bitacora;
        estado.bitacora = texto;
        guardarEstado();
        fb.hidden = false;
        fb.className = 'explicacion ok';
        fb.textContent = primeraVez ? `🏆 ¡Bitácora guardada! Ganaste +${XP_BITACORA} XP.` : '💾 Bitácora actualizada.';
        if (primeraVez) {
            actualizarXPVisual(XP_BITACORA);
            desbloquearInsignia('bitacora');
            confeti(1500);
        }
        sonido('acierto');
        renderCertificado();
    });

    renderCertificado();

    document.getElementById('btn-reiniciar').addEventListener('click', () => {
        if (confirm('¿Seguro que querés borrar todo tu progreso y empezar de cero?')) {
            localStorage.removeItem(CLAVE_ESTADO);
            location.href = 'index.html';
        }
    });
}

function renderCertificado() {
    const cont = document.getElementById('certificado');
    const todos = Object.keys(RETOS).every(retoAprobado);
    if (!todos) {
        cont.innerHTML = `<div class="pantalla-centro"><span class="icono-gigante">📜</span>
            <h3>Certificado bloqueado</h3><p class="subtitulo">Aprobá los tres retos (nota 6 o más) para obtener tu certificado de Misión Cumplida.</p></div>`;
        return;
    }
    const fecha = new Date().toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
    cont.innerHTML = `
        <div class="certificado">
            <div style="font-size:3rem">🏆</div>
            <h2>Certificado de Misión Cumplida</h2>
            <p>Se otorga a</p>
            <div class="nombre-cert">${escaparHTML(estado.nombre)}</div>
            <p>por completar <b>Misión Neurodiversa: Descubriendo el Cerebro TDAH</b><br>
            con una calificación general de <b>${notaPromedio()}/10</b> y <b>${calcularXP()} XP</b>.</p>
            <p style="margin-top:12px;color:var(--texto-suave)">${fecha}</p>
        </div>
        <div class="acciones no-imprimir"><button class="btn btn-oro" onclick="window.print()">🖨️ Imprimir / Guardar PDF</button></div>`;
}


document.addEventListener('DOMContentLoaded', () => {
    const fondo = document.createElement('div');
    fondo.className = 'fondo-animado';
    fondo.setAttribute('aria-hidden', 'true');
    fondo.innerHTML = '<span></span><span></span><span></span>';
    document.body.prepend(fondo);

    const toasts = document.createElement('div');
    toasts.id = 'toasts';
    toasts.setAttribute('aria-live', 'polite');
    document.body.appendChild(toasts);

    const pie = document.createElement('footer');
    pie.className = 'pie';
    pie.innerHTML = 'Alexander Goncalves - 2026 - Misión Neurodiversidad | Diseño de Objeto de Aprendizaje INET.';
    document.body.appendChild(pie);

    const pagina = document.body.dataset.page;
    if (pagina !== 'inicio' && !estado.nombre) {
        location.href = 'index.html';
        return;
    }

    renderTopbar();

    if (pagina === 'inicio') iniciarPaginaInicio();
    else if (pagina === 'aprender') iniciarPaginaAprender();
    else if (pagina === 'logros') iniciarPaginaLogros();
    else if (RETOS[pagina] && typeof iniciarReto === 'function') iniciarReto(pagina);
});
