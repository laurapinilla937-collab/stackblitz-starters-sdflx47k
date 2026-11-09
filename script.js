// =======================================================
// 1. BASE DE DATOS Y ESTADO (CRUCES Y TIERRA: LATINOAMÉRICA)
// =======================================================
let baseUsuarios = JSON.parse(localStorage.getItem('crucesYTierraDB')) || {};
let usuarioActivo = null;
let modoAuth = 'login'; 

// =======================================================
// 2. FRASES Y MOTIVACIÓN LATINOAMERICANA
// =======================================================
const bancoSorpresasLatam = {
    bronce: [
        { tipo: "🌱 Semilla", texto: "Comprender la raíz de las violencias en nuestra patria grande es el primer paso para dejar de repetirlas." },
        { tipo: "✊ Memoria", texto: "Un pueblo que conoce sus conflictos no se resigna a padecerlos eternamente." }
    ],
    plata: [
        { tipo: "🕊️ Resistencia", texto: "La paz no es el silencio de la sumisión, sino la construcción activa de la justicia social." },
        { tipo: "🌍 Conciencia", texto: "Las fronteras de América Latina comparten cicatrices profundas; sanarlas exige rigor y empatía." }
    ],
    oro: [
        { tipo: "☀️ Transformación", texto: "Has dominado el mapa complejo de nuestros conflictos. Ahora tienes la brújula para transformar tu entorno." },
        { tipo: "🔥 Dignidad", texto: "La memoria histórica es el faro que impide que el olvido gobierne el futuro de nuestra sociedad." }
    ]
};

// =======================================================
// 3. ESTRUCTURA DE LOS 7 MÓDULOS AMPLIADOS
// =======================================================
const contenidosModulos = [
    {
        id: 0,
        titulo: "Anatomía del Conflicto en América Latina",
        icono: "🌋",
        desc: "Comprender qué es un conflicto, su génesis estructural, escalada y dinámicas en la región.",
        subniveles: [
            {
                titulo: "Naturaleza y Génesis del Conflicto Social",
                teoria: "<b>¿Qué es un conflicto estructural?</b><br>En América Latina, los conflictos no surgen por malentendidos aislados, hunden sus raíces en asimetrías históricas de poder, tenencia inequitativa de la tierra y exclusión política heredadas del período colonial y republicano. Comprender la génesis implica analizar cómo la distribución desigual de la riqueza genera tensiones permanentes entre élites y sectores subalternos.",
                tipo: "quiz",
                preguntas: [
                    { pregunta: "¿Cuál es la diferencia fundamental entre un desacuerdo cotidiano y un conflicto estructural en América Latina?", opciones: ["El conflicto estructural involucra asimetrías profundas de poder, recursos y exclusión histórica", "El desacuerdo cotidiano siempre termina en violencia armada", "No existe ninguna diferencia conceptual en sociología", "El conflicto estructural solo ocurre en zonas urbanas"], correcta: 0 },
                    { pregunta: "¿Qué papel juega la concentración de la tierra en la génesis de los conflictos latinoamericanos?", opciones: ["Es el eje histórico central de despojo, resistencia campesina y surgimiento de guerrillas", "Es un factor menor sin relevancia económica", "Garantiza la paz agraria a largo plazo", "Impide la industrialización urbana"], correcta: 0 }
                ],
                puntosMax: 50
            },
            {
                titulo: "Dinámicas de Escalada y Actores Armados",
                teoria: "<b>La Escalada del Conflicto y la Polarización:</b><br>Los conflictos escalan cuando la comunicación se rompe, se polarizan las identidades bajo lógicas de 'amigo-enemigo' y entran en juego actores armados irregulares y fuerzas estatales bajo doctrinas de seguridad nacional. La escalada transforma desacuerdos políticos en espirales de violencia sistemática.",
                tipo: "completar",
                textoGuia: "La polarización ideológica y la militarización del territorio aceleran la [1] de la violencia, fragmentando el tejido comunitario y generando desplazamientos masivos que alteran el mapa [2] de la nación.",
                palabrasCorrectas: ["escalada", "demográfico"],
                puntosMax: 50
            }
        ]
    },
    {
        id: 1,
        titulo: "Resolución, Mediación y Transformación",
        icono: "🤝",
        desc: "Métodos alternativos, negociación pacífica, justicia restaurativa y superación de la polarización.",
        subniveles: [
            {
                titulo: "Enfoques de Negociación y Mediación Comunitaria",
                teoria: "<b>De la Resolución a la Transformación:</b><br>Mientras la resolución busca apagar el fuego inmediato, la transformación de conflictos aborda las causas profundas y busca cambiar las estructuras injustas que los alimentan. La mediación comunitaria utiliza terceros neutrales para restablecer el diálogo horizontal.",
                tipo: "emparejar",
                instrucciones: "Relaciona cada concepto con su definición correcta:",
                columnaA: ["Mediación", "Negociación distributiva", "Justicia Restaurativa"],
                columnaB: [
                    "Intervención de un tercero imparcial para facilitar acuerdos",
                    "Enfoque de suma cero donde lo que gana uno lo pierde el otro",
                    "Enfoque centrado en reparar el daño a las víctimas y la comunidad"
                ],
                mapaCorrecto: { 0: 0, 1: 1, 2: 2 },
                puntosMax: 50
            },
            {
                titulo: "Autoevaluación de Reacción ante el Conflicto",
                teoria: "<b>Reflexión Personal sobre la Escucha:</b><br>¿Cómo reaccionas ante un escenario de alta tensión o polarización ideológica? La capacidad de escucha activa es indispensable para evitar que los desacuerdos escalen hacia la agresión simbólica o física.",
                tipo: "quiz",
                preguntas: [
                    { pregunta: "Ante una discusión polarizada sobre derechos sociales, ¿cuál es la postura más constructiva desde la transformación de conflictos?", opciones: ["Escuchar activamente los intereses subyacentes y buscar puntos de dignidad común", "Atacar los argumentos del oponente con descalificaciones personales", "Abandonar el espacio y cortar todo canal de diálogo", "Imponer la propia verdad por la fuerza"], correcta: 0 },
                    { pregunta: "¿Qué busca principalmente un proceso de diálogo intercultural en medio de tensiones?", opciones: ["Reconocer al otro como interlocutor válido y legítimo", "Convencer al otro de que está equivocado", "Acelerar la votación de leyes punitivas", "Evitar que se hable del pasado"], correcta: 0 }
                ],
                puntosMax: 50
            }
        ]
    },
    {
        id: 2,
        titulo: "El Proceso de Paz en Guatemala y Esquipulas",
        icono: "🇬🇹",
        desc: "Acuerdos de Esquipulas I y II, el genocidio maya, la Comisión de Esclarecimiento Histórico y los actores en pugna.",
        subniveles: [
            {
                titulo: "Contexto del Conflicto Armado y Acuerdos de Esquipulas",
                teoria: "<b>Guatemala (1960-1996):</b><br>Marcado por el golpe de Estado contra Jacobo Árbenz en 1954, el conflicto enfrentó al Estado y élites militares contra la URNG. Los Acuerdos de Esquipulas (I y II, 1986-1987), impulsados por mandatarios centroamericanos, permitieron la salida negociada regional sin injerencias externas.",
                tipo: "quiz",
                preguntas: [
                    { pregunta: "¿Cuál fue el objetivo histórico principal de los Acuerdos de Esquipulas II en Centroamérica?", opciones: ["Establecer mecanismos para alcanzar la paz firme y duradera mediante el diálogo nacional en la región", "Consolidar una alianza militar ofensiva continental", "Repartir recursos petroleros entre los firmantes", "Establecer una moneda única centroamericana"], correcta: 0 },
                    { pregunta: "¿Qué factor desató estructuralmente el conflicto armado en Guatemala en los años 60?", opciones: ["La exclusión agraria y el derrocamiento del gobierno democrático de Jacobo Árbenz", "Una disputa por rutas de navegación marítima", "La invasión de potencias europeas", "La falta de tecnología industrial"], correcta: 0 }
                ],
                puntosMax: 50
            },
            {
                titulo: "Memoria y Conclusión de los Acuerdos de Paz (1996)",
                teoria: "<b>La Firma de la Paz y el Informe CEH:</b><br>El acuerdo final de 1996 reconoció la identidad multiétnica del país. Posteriormente, la Comisión de Esclarecimiento Histórico documentó que las masacres contra comunidades mayas constituyeron actos de genocidio imputables a fuerzas estatales.",
                tipo: "completar",
                textoGuia: "El informe de la Comisión de Esclarecimiento Histórico determinó que las masacres contra el pueblo [1] constituyeron actos de [2] durante el conflicto guatemalteco.",
                palabrasCorrectas: ["maya", "genocidio"],
                puntosMax: 50
            }
        ]
    },
    {
        id: 3,
        titulo: "Los Acuerdos de Sapoá en Nicaragua",
        icono: "🇳🇮",
        desc: "Contexto histórico de la revolución sandinista, la contra nicaragüense y el alto al fuego de 1988.",
        subniveles: [
            {
                titulo: "Revolución Sandinista y la Guerra de 'La Contra'",
                teoria: "<b>Nicaragua en los 80s:</b><br>Tras el triunfo del FSLN en 1979 derrocando a la dictadura somocista, el país se convirtió en epicentro de la Guerra Fría con el surgimiento de 'La Contra' (fuerzas contrarrevolucionarias financiadas por EE.UU.).",
                tipo: "quiz",
                preguntas: [
                    { pregunta: "¿Qué contexto geopolítico internacional sobrealimentó el conflicto armado en Nicaragua durante la década de 1980?", opciones: ["La confrontación de la Guerra Fría entre Estados Unidos y la Unión Soviética en Centroamérica", "Las guerras comerciales por el café con Europa", "El conflicto fronterizo por la Amazonía", "La crisis del canal interoceánico"], correcta: 0 },
                    { pregunta: "¿Quiénes conformaban principalmente la fuerza armada conocida como 'La Contra'?", opciones: ["Grupos armados irregulares contrarrevolucionarios apoyados logísticamente por Washington", "Defensores de la dictadura somocista exclusivamente urbanos", "Tropas regulares de la ONU", "Comunidades indígenas aliadas al gobierno sandinista"], correcta: 0 }
                ],
                puntosMax: 50
            },
            {
                titulo: "Los Acuerdos de Sapoá y el Cese al Fuego",
                teoria: "<b>El Pacto de 1988:</b><br>Firmados en Sapoá en marzo de 1988, el gobierno sandinista y la Contra pactaron un cese al fuego histórico, amnistías y garantías democráticas que abrieron paso a las elecciones de 1990.",
                tipo: "quiz",
                preguntas: [
                    { pregunta: "¿Qué significó históricamente el acuerdo de Sapoá para el proceso nicaragüense?", opciones: ["Un pacto pionero de cese al fuego bilateral que demostró la viabilidad de la salida negociada", "La rendición incondicional del ejército sandinista", "La anexión territorial de Nicaragua a sus vecinos", "La cancelación definitiva de las elecciones"], correcta: 0 },
                    { pregunta: "¿Cuál fue una de las consecuencias políticas inmediatas tras los acuerdos de paz y desmovilización en los 90?", opciones: ["La transición hacia elecciones generales ganadas por la coalición opositora liderada por Violeta Chamorro", "La instauración de una monarquía parlamentaria", "El cierre permanente de fronteras", "La estatización total de la economía privada"], correcta: 0 }
                ],
                puntosMax: 50
            }
        ]
    },
    {
        id: 4,
        titulo: "Procesos de Paz en Colombia: Raíces y Actores Armados",
        icono: "🇨🇴",
        desc: "La época de la violencia, surgimiento detallado de guerrillas (M-19, FARC, ELN), narcotráfico y Acuerdo de 2016.",
        subniveles: [
            {
                titulo: "La Época de la Violencia y el Surgimiento de las FARC",
                teoria: "<b>Orígenes Agrarios y Autodefensas (1940s-1960s):</b><br>El asesinato de Jorge Eliécer Gaitán en 1948 desató 'La Violencia' bipartidista. En zonas rurales de resistencia comunista (como Marquetalia), campesinos organizados fundaron en 1964 las FARC-EP bajo una plataforma agraria de autodefensa móvil.",
                tipo: "quiz",
                preguntas: [
                    { pregunta: "¿Qué hito histórico nacional suele señalarse como detonante masivo de la Época de la Violencia en 1948?", opciones: ["El asesinato del líder político liberal Jorge Eliécer Gaitán (El Bogotazo)", "La firma del Frente Nacional", "La independencia de Panamá", "La creación de los cultivos ilícitos"], correcta: 0 },
                    { pregunta: "¿Cuál fue el origen sociopolítico directo de las FARC-EP en la década de 1960?", opciones: ["La autodefensa de comunidades campesinas agredidas por ofensivas militares en repúblicas independientes como Marquetalia", "Una escisión de las fuerzas armadas regulares urbanas", "Un grupo de empresarios industriales opuestos al café", "Una milicia financiada por potencias europeas"], correcta: 0 }
                ],
                puntosMax: 50
            },
            {
                titulo: "El ELN y la Teología de la Liberación",
                teoria: "<b>Surgimiento del ELN (1964-1965):</b><br>El Ejército de Liberación Nacional (ELN) nació en Santander influenciado por la Revolución Cubana, el foquismo guevarista y corrientes católicas de la Teología de la Liberación, integrando a intelectuales, sacerdotes (como Camilo Torres Restrepo) y estudiantes universitarios.",
                tipo: "quiz",
                preguntas: [
                    { pregunta: "¿Qué corrientes ideológicas y sociales marcaron fuertemente la fundación del ELN en 1964?", opciones: ["El foquismo guevarista, la revolución cubana y la Teología de la Liberación", "El liberalismo radical y el librecambio económico", "La monarquía parlamentaria europea", "El sindicalismo industrial automotriz"], correcta: 0 },
                    { pregunta: "¿Qué figura sacerdotal e intelectual se unió al ELN convirtiéndose en símbolo de la alianza entre cristianismo y revolución?", opciones: ["Camilo Torres Restrepo", "Monseñor Óscar Romero", "Bartolomé de las Casas", "Ernesto Cardenal"], correcta: 0 }
                ],
                puntosMax: 50
            },
            {
                titulo: "El M-19: Insurgencia Urbana y Apertura Democrática",
                teoria: "<b>El Movimiento 19 de Abril (M-19):</b><br>Surgido tras el fraude electoral de 1970 contra Rojas Pinilla, el M-19 operó principalmente en escenarios urbanos con acciones de alto impacto mediático. Tras su desmovilización en 1990, fue actor clave en la Asamblea Nacional Constituyente de 1991.",
                tipo: "quiz",
                preguntas: [
                    { pregunta: "¿Cuál fue el detonante político directo que impulsó la creación del movimiento guerrillero urbano M-19?", opciones: ["El fraude electoral de las elecciones presidenciales de 1970 en Colombia", "Una huelga general de petroleros en la costa caribe", "La reforma agraria de los años 50", "La disolución del Congreso por decreto militar"], correcta: 0 },
                    { pregunta: "¿Qué hito institucional histórico logró propiciar el M-19 tras su dejación de armas en 1990?", opciones: ["La convocatoria e impulso de la Asamblea Nacional Constituyente de 1991 y la nueva Constitución", "La presidencia inmediata de la república por decreto", "La privatización total de la banca nacional", "La creación de un nuevo partido conservador tradicional"], correcta: 0 }
                ],
                puntosMax: 50
            },
            {
                titulo: "Narcotráfico, Panorama Político y Acuerdo de 2016",
                teoria: "<b>Mutación del Conflicto y Diálogos de La Habana:</b><br>El narcotráfico permeó a todos los actores (guerrillas, paramilitares y agentes del Estado). Tras múltiples procesos, el Acuerdo de 2016 con las FARC creó el Sistema Integral de Verdad, Justicia, Reparación y No Repetición, destacando la Comisión de la Verdad.",
                tipo: "completar",
                textoGuia: "El Acuerdo de Paz de 2016 en Colombia dio origen a la [1] de la Verdad, un mecanismo extrajudicial destinado a esclarecer patrones históricos y dignificar a las [2] del conflicto armado.",
                palabrasCorrectas: ["comisión", "víctimas"],
                puntosMax: 50
            }
        ]
    },
    {
        id: 5,
        titulo: "Justicia Transicional y Reparación",
        icono: "⚖️",
        desc: "Garantías de no repetición, verdad, juicios restaurativos y centralidad de las víctimas.",
        subniveles: [
            {
                titulo: "Principios y Pilares de la Justicia Transicional",
                teoria: "<b>Equilibrio entre Paz y Justicia:</b><br>La justicia transicional opera cuando una sociedad transita del conflicto a la democracia. Busca equilibrar la paz sostenible con los derechos de las víctimas a la verdad, la justicia restaurativa y la reparación integral.",
                tipo: "emparejar",
                instrucciones: "Empareja cada pilar de la justicia transicional con su definición:",
                columnaA: ["Verdad", "Reparación", "Garantías de No Repetición"],
                columnaB: [
                    "Derecho colectivo e individual a saber lo ocurrido y quiénes fueron los responsables",
                    "Medidas materiales y simbólicas para restituir la dignidad de los afectados",
                    "Reformas institucionales y de seguridad para evitar que el conflicto renazca"
                ],
                mapaCorrecto: { 0: 0, 1: 1, 2: 2 },
                puntosMax: 50
            },
            {
                titulo: "Retos Éticos de la Memoria y la Sanción",
                teoria: "<b>La Centralidad de las Víctimas:</b><br>El gran dilema transicional consiste en ofrecer tratamientos penales diferenciados a cambio de confesiones plenas de verdad y compromiso activo con la restauración del tejido social.",
                tipo: "quiz",
                preguntas: [
                    { pregunta: "¿Por qué se afirma que las víctimas deben ser el centro de la justicia transicional?", opciones: ["Porque sin su reconocimiento, dignificación y participación activa, cualquier acuerdo de paz carece de legitimidad ética", "Porque son quienes deben pagar los costos de la guerra", "Porque determinan las tasas de interés bancario", "Porque reemplazan al poder judicial ordinario"], correcta: 0 },
                    { pregunta: "¿Qué busca una sanción propia dentro del modelo transicional restaurativo?", opciones: ["Trabajos, obras o actividades reparadoras que reconstruyan el daño causado a la comunidad", "Cadena perpetua en celdas de máxima seguridad sin contacto", "El exilio obligatorio perpetuo", "El perdón automático sin investigación previa"], correcta: 0 }
                ],
                puntosMax: 50
            }
        ]
    },
    {
        id: 6,
        titulo: "Liderazgo y Transformación Social",
        icono: "🌟",
        desc: "Cómo las pequeñas acciones locales y el liderazgo ciudadano son el primer peldaño para cambiar la sociedad.",
        subniveles: [
            {
                titulo: "El Poder de las Pequeñas Acciones Colectivas",
                teoria: "<b>Micropolítica y Tejido Social:</b><br>Los grandes acuerdos nacionales fracasan si en la base comunitaria no se reconstruye la confianza. Un líder social local que fomenta el diálogo cotidiano está haciendo verdadera construcción de paz.",
                tipo: "quiz",
                preguntas: [
                    { pregunta: "¿Por qué las pequeñas acciones comunitarias son vitales en la construcción de paz?", opciones: ["Porque reparan el tejido social desgastado y generan confianza cara a cara entre vecinos", "Porque reemplazan por completo a los gobiernos nacionales", "Porque eliminan la necesidad de presupuestos estatales", "Porque evitan que la gente trabaje en la industria"], correcta: 0 },
                    { pregunta: "¿Qué define a un liderazgo transformador en contextos de postconflicto?", opciones: ["La capacidad de escuchar a los sectores excluidos y movilizar soluciones colaborativas", "La imposición de órdenes autoritarias sin consultar", "El beneficio económico personal a corto plazo", "El uso de la intimidación política"], correcta: 0 }
                ],
                puntosMax: 50
            },
            {
                titulo: "Reflexión Final del Perfil y Compromiso Ciudadano",
                teoria: "<b>Tu Rol en la Sociedad:</b><br>Has recorrido el mapa de los dolores y esperanzas de América Latina. Es momento de plasmar tu propia visión sobre cómo transformar los conflictos de tu entorno.",
                tipo: "reflexion",
                puntosMax: 50
            }
        ]
    }
];

// =======================================================
// 4. FUNCIONES DE AUTENTICACIÓN Y ALMACENAMIENTO
// =======================================================
function guardarEnBD() {
    localStorage.setItem('crucesYTierraDB', JSON.stringify(baseUsuarios));
}

function calcularRacha(usuario) {
    const hoy = new Date().toDateString();
    if (usuario.ultimoIngreso === hoy) return; 
    let ayer = new Date();
    ayer.setDate(ayer.getDate() - 1);
    if (usuario.ultimoIngreso === ayer.toDateString()) {
        usuario.racha += 1;
    } else {
        usuario.racha = 1; 
    }
    usuario.ultimoIngreso = hoy;
    guardarEnBD();
}

function cambiarModoAuth(modo) {
    modoAuth = modo;
    mostrarPantallaAuth();
}

function procesarAuth() {
    const user = document.getElementById('input-user').value.trim().toLowerCase();
    const pass = document.getElementById('input-pass').value.trim();
    
    if(!user || !pass) return alert("Introduce usuario y contraseña.");

    if (modoAuth === 'registro') {
        if (baseUsuarios[user]) return alert("❌ Ese nombre de usuario ya existe.");
        const nombre = document.getElementById('input-nombre').value.trim() || "Ciudadano Constructor de Paz";
        const emoji = document.querySelector('.emoji-opt.selected').innerText;

        baseUsuarios[user] = {
            password: pass, nombre: nombre, username: user, avatar: emoji, 
            bordePerfil: "border-none", fondoPerfil: "bg-default", tituloPerfil: "Constructor de Paz",
            enfoque: "Conflictos en América Latina", 
            puntos: 0, racha: 1, ultimoIngreso: new Date().toDateString(), 
            avataresDesbloqueados: ['🌱', '🕊️', '✊', '🌍', '⚖️'],
            bordesDesbloqueados: ['border-none'],
            fondosDesbloqueados: ['bg-default'],
            titulosDesbloqueados: ['Constructor de Paz'],
            reflexionFinal: "", 
            modulosCompletados: [0],
            subnivelesHechos: {}, 
            progresoModulos: {} 
        };
        guardarEnBD();
        alert("¡Registro completado con éxito! Bienvenido a Cruces y Tierra.");
        cambiarModoAuth('login');
    } else {
        if (baseUsuarios[user] && baseUsuarios[user].password === pass) {
            usuarioActivo = baseUsuarios[user];
            if(!usuarioActivo.progresoModulos) usuarioActivo.progresoModulos = {};
            if(!usuarioActivo.subnivelesHechos) usuarioActivo.subnivelesHechos = {};
            if(!usuarioActivo.bordePerfil) usuarioActivo.bordePerfil = "border-none";
            if(!usuarioActivo.fondoPerfil) usuarioActivo.fondoPerfil = "bg-default";
            if(!usuarioActivo.tituloPerfil) usuarioActivo.tituloPerfil = "Constructor de Paz";
            if(!usuarioActivo.bordesDesbloqueados) usuarioActivo.bordesDesbloqueados = ['border-none'];
            if(!usuarioActivo.fondosDesbloqueados) usuarioActivo.fondosDesbloqueados = ['bg-default'];
            if(!usuarioActivo.titulosDesbloqueados) usuarioActivo.titulosDesbloqueados = ['Constructor de Paz'];
            calcularRacha(usuarioActivo);
            mostrarMapaPrincipal();
        } else {
            alert("❌ Credenciales inválidas.");
        }
    }
}

function cerrarSesion() {
    usuarioActivo = null;
    mostrarPantallaAuth();
}

function selecEmojiAuth(el) {
    document.querySelectorAll('.emoji-opt').forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
}

// =======================================================
// 5. RENDERIZADO VISUAL CON PROGRESO REAL BASADO EN ACIERTOS
// =======================================================
function mostrarPantallaAuth() {
    let contenidoRegistro = modoAuth === 'registro' ? `
        <div class="form-group"><label>Tu Nombre o Identificador:</label><input type="text" id="input-nombre" placeholder="Ej. Lucía"></div>
        <div class="form-group"><label>Elige tu Símbolo:</label>
            <div class="selector-emojis">
                <span onclick="selecEmojiAuth(this)" class="emoji-opt selected">🌱</span>
                <span onclick="selecEmojiAuth(this)" class="emoji-opt">🕊️</span>
                <span onclick="selecEmojiAuth(this)" class="emoji-opt">✊</span>
                <span onclick="selecEmojiAuth(this)" class="emoji-opt">🌍</span>
                <span onclick="selecEmojiAuth(this)" class="emoji-opt">⚖️</span>
            </div>
        </div>
        <div class="form-group"><label>Enfoque de Estudio:</label>
            <input type="text" value="Conflictos y Paz en América Latina" disabled style="background:#f1f5f9; color:#15803d; border-color:#cbd5e1;">
        </div>
    ` : '';

    document.getElementById('app').innerHTML = `
        <div class="registro-wrapper" style="background: linear-gradient(135deg, #f0fdf4 0%, #e2e8f0 100%);">
            <div class="registro-container">
                <div class="logo-grande">🌱 CRUCES Y TIERRA</div>
                <h1>${modoAuth === 'login' ? 'Acceso al Sistema' : 'Registro Ciudadano'}</h1>
                <p>Conflictos, Memoria y Paz en América Latina.</p>
                
                <div class="auth-tabs">
                    <button class="auth-tab ${modoAuth === 'login' ? 'active' : ''}" onclick="cambiarModoAuth('login')">Ingresar</button>
                    <button class="auth-tab ${modoAuth === 'registro' ? 'active' : ''}" onclick="cambiarModoAuth('registro')">Registrarse</button>
                </div>

                <div class="form-group">
                    <label>Usuario:</label>
                    <input type="text" id="input-user" placeholder="usuario_latam">
                </div>
                <div class="form-group">
                    <label>Contraseña:</label>
                    <input type="password" id="input-pass" placeholder="••••••••">
                </div>
                
                ${contenidoRegistro}

                <button class="btn-primary-large" onclick="procesarAuth()">
                    ${modoAuth === 'login' ? 'Iniciar Recorrido 🌿' : 'Crear Registro ✊'}
                </button>
            </div>
        </div>
    `;
}

function mostrarMapaPrincipal() {
    let htmlCards = "";
    contenidosModulos.forEach((mod, idx) => {
        let hechos = (usuarioActivo.subnivelesHechos[idx] || []).length;
        let totalSub = mod.subniveles.length;
        
        // Cálculo basado estrictamente en el puntaje real obtenido de respuestas correctas
        let progMod = usuarioActivo.progresoModulos[idx];
        let porcentajeProgreso = 0;
        let maxPosibleModulo = 0;
        mod.subniveles.forEach(s => maxPosibleModulo += s.puntosMax);

        if (progMod && maxPosibleModulo > 0) {
            porcentajeProgreso = Math.round((progMod.obtenidos / maxPosibleModulo) * 100);
            if (porcentajeProgreso > 100) porcentajeProgreso = 100;
        } else if (hechos > 0) {
            porcentajeProgreso = Math.round((hechos / totalSub) * 50);
        }
        
        let yaCompletado = usuarioActivo.modulosCompletados.includes(idx + 1);
        let estaBloqueado = !usuarioActivo.modulosCompletados.includes(idx);
        
        let estadoTexto = estaBloqueado ? "🔒 Bloqueado por pre-requisitos" : `🌿 Progreso de aciertos: ${porcentajeProgreso}% (${hechos}/${totalSub} niveles)`;
        if (yaCompletado && hechos === totalSub) {
            if (porcentajeProgreso === 100) {
                estadoTexto = "✨ Módulo Dominado (100% Precisión)";
            } else {
                estadoTexto = `✨ Módulo Completado (${porcentajeProgreso}% de aciertos)`;
            }
        }

        htmlCards += `
            <div class="card ${estaBloqueado ? 'locked' : ''}" style="border-left: 4px solid #15803d;" onclick="clicModulo(${idx})">
                <div class="card-icon">${mod.icono}</div>
                <div class="card-content" style="width:100%;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                        <span class="level-tag">Módulo ${idx + 1}</span>
                        <span style="font-size:0.75rem; font-weight:bold; color:#15803d;">${porcentajeProgreso}%</span>
                    </div>
                    <h3>${mod.titulo}</h3>
                    <p>${mod.desc}</p>
                    <div style="background:#e2e8f0; width:100%; height:6px; border-radius:3px; margin:8px 0; overflow:hidden;">
                        <div style="background:#15803d; width:${porcentajeProgreso}%; height:100%;"></div>
                    </div>
                    <span class="status">${estadoTexto}</span>
                </div>
            </div>
        `;
    });

    document.getElementById('app').innerHTML = `
        <header class="navbar">
            <div class="logo">🌱 Cruces y Tierra</div>
            <div class="user-stats">
                <div class="user-info" onclick="mostrarPerfilUsuario()" style="cursor:pointer;">
                    <span>${usuarioActivo.avatar}</span>
                    <span style="color: #0f172a; font-weight:600;">${usuarioActivo.nombre}</span>
                </div>
                <span class="racha-badge" style="background:#dcfce7; color:#166534;">🔥 ${usuarioActivo.racha} Días</span>
                <span class="puntos-badge" style="background:#fef9c3; color:#854d0e; cursor:pointer;" onclick="mostrarTienda()">⭐ ${usuarioActivo.puntos} Pts</span>
                <span class="puntos-badge" style="background:#e0f2fe; color:#0369a1; cursor:pointer;" onclick="mostrarMedallasLatam()">🏆 Medallas</span>
                <button class="btn-logout" onclick="cerrarSesion()">Salir</button>
            </div>
        </header>
        <section class="hero-mini" style="background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 30px 20px; text-align:center;">
            <h1 style="color: #15803d; margin-bottom: 10px;">Ruta de Aprendizaje Latinoamericano</h1>
            <p style="color: #64748b; max-width: 700px; margin: 0 auto;">Comprende los conflictos estructurales, los procesos de paz y la construcción de tejido social en nuestra región.</p>
        </section>
        <main class="container">
            <div class="levels-grid">${htmlCards}</div>
        </main>
    `;
}

function clicModulo(idx) {
    if (!usuarioActivo.modulosCompletados.includes(idx)) {
        return alert("🔒 Módulo bloqueado. Completa el módulo anterior para continuar.");
    }
    mostrarSubNivelesModulo(idx);
}

function mostrarSubNivelesModulo(modIdx) {
    let mod = contenidosModulos[modIdx];
    let listaSub = mod.subniveles;

    let htmlSubs = "";
    listaSub.forEach((sub, sIdx) => {
        let hechosModulo = usuarioActivo.subnivelesHechos[modIdx] || [];
        let estaHecho = hechosModulo.includes(sIdx);
        let badgeSub = estaHecho ? '<span style="color:#16a34a; font-weight:700;">✨ Nivel Superado</span>' : '<span style="color:#ca8a04; font-weight:700;">🌿 Disponible</span>';

        htmlSubs += `
            <div class="card" style="border-left: 4px solid #ca8a04;" onclick="mostrarTeoriaLeccion(${modIdx}, ${sIdx})">
                <div class="card-icon">📖</div>
                <div class="card-content">
                    <span class="level-tag">Nivel ${sIdx + 1}</span>
                    <h3>${sub.titulo}</h3>
                    <p>${badgeSub}</p>
                    <span class="status" style="color: #15803d;">⭐ Máximo ${sub.puntosMax} Pts</span>
                </div>
            </div>
        `;
    });

    document.getElementById('app').innerHTML = `
        <header class="navbar">
            <button class="btn-back" style="background: #f1f5f9; color: #15803d; border:1px solid #cbd5e1; padding:8px 15px; border-radius:6px; cursor:pointer;" onclick="mostrarMapaPrincipal()">← Volver al Mapa</button>
            <div class="logo">${mod.titulo}</div>
        </header>
        <main class="container">
            <div class="levels-grid" style="margin-top: 20px;">${htmlSubs}</div>
        </main>
    `;
}

function mostrarTeoriaLeccion(modIdx, subIdx) {
    let mod = contenidosModulos[modIdx];
    let sub = mod.subniveles[subIdx];

    document.getElementById('app').innerHTML = `
        <header class="navbar">
            <button class="btn-back" style="background: #f1f5f9; color: #15803d; border:1px solid #cbd5e1; padding:8px 15px; border-radius:6px; cursor:pointer;" onclick="mostrarSubNivelesModulo(${modIdx})">← Volver</button>
            <div class="logo">Contexto e Información Relevante</div>
        </header>
        <main class="container" style="max-width: 800px;">
            <div class="lesson-card">
                <div class="lesson-icon" style="font-size: 3rem; margin-bottom: 15px;">📜</div>
                <h2>${sub.titulo}</h2>
                <div class="lesson-body"><p>${sub.teoria}</p></div>
                <button class="btn-primary-large" onclick="mostrarActividadLeccion(${modIdx}, ${subIdx})">Iniciar Actividad Evaluativa ⚡</button>
            </div>
        </main>
    `;
}

function mostrarActividadLeccion(modIdx, subIdx) {
    let mod = contenidosModulos[modIdx];
    let sub = mod.subniveles[subIdx];

    let actividadHtml = "";

    if (sub.tipo === "quiz") {
        sub.preguntas.forEach((p, pIdx) => {
            let opcHtml = "";
            p.opciones.forEach((op, oIdx) => {
                opcHtml += `<button class="btn-opcion btn-q-${pIdx}" style="background:#f8fafc; color:#1e293b; border:1px solid #cbd5e1; padding:12px; margin:6px 0; width:100%; text-align:left; border-radius:8px; cursor:pointer;" onclick="selecOpcionLatam(${pIdx}, ${oIdx}, this)">${op}</button>`;
            });
            actividadHtml += `
                <div style="margin-bottom: 25px;" data-p="${pIdx}">
                    <p style="font-weight: 600; margin-bottom: 10px; color: #0f172a;"><b>Pregunta ${pIdx + 1}:</b> ${p.pregunta}</p>
                    <div id="q-box-${pIdx}">${opcHtml}</div>
                </div>
            `;
        });
    } else if (sub.tipo === "completar") {
        actividadHtml = `
            <p style="color: #0f172a; margin-bottom: 15px; font-weight:600;">Completa los espacios en blanco escribiendo la palabra correcta:</p>
            <p style="line-height: 2.2; color: #334155; font-size: 1.1rem;">${sub.textoGuia.replace("[1]", '<input type="text" id="blank-0" style="background:#f8fafc; color:#15803d; border:1px solid #cbd5e1; padding:6px; border-radius:6px; width:130px; font-weight:bold;">').replace("[2]", '<input type="text" id="blank-1" style="background:#f8fafc; color:#15803d; border:1px solid #cbd5e1; padding:6px; border-radius:6px; width:130px; font-weight:bold;">')}</p>
        `;
    } else if (sub.tipo === "emparejar") {
        actividadHtml = `
            <p style="color: #0f172a; margin-bottom: 15px; font-weight:600;">${sub.instrucciones}</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div>
                    <h4 style="color:#15803d; margin-bottom:10px;">Columna A</h4>
                    ${sub.columnaA.map((item, i) => `<div style="background:#f8fafc; padding:12px; margin-bottom:10px; border-radius:8px; border:1px solid #cbd5e1; color:#334155;"><b>${i+1}.</b> ${item}</div>`).join('')}
                </div>
                <div>
                    <h4 style="color:#15803d; margin-bottom:10px;">Asigna el número de la Columna A:</h4>
                    ${sub.columnaB.map((item, i) => `
                        <div style="background:#f8fafc; padding:10px; margin-bottom:10px; border-radius:8px; border:1px solid #cbd5e1; display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:0.9rem; color:#334155; margin-right:10px;">${item}</span>
                            <select id="match-${i}" style="background:#ffffff; color:#15803d; border:1px solid #cbd5e1; padding:6px; border-radius:6px; font-weight:bold;">
                                <option value="">--Elije--</option>
                                <option value="0">1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                            </select>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (sub.tipo === "reflexion") {
        actividadHtml = `
            <p style="color: #0f172a; margin-bottom: 15px; font-weight:600;">Redacta una reflexión personal (mínimo 40 palabras) sobre cómo tus conocimientos y pequeñas acciones pueden transformar tu comunidad frente a los conflictos:</p>
            <textarea id="input-reflexion" rows="6" style="width:100%; background:#f8fafc; color:#0f172a; border:1px solid #cbd5e1; padding:12px; border-radius:8px; font-size:1rem;" placeholder="Escribe aquí tu compromiso ciudadano...">${usuarioActivo.reflexionFinal || ""}</textarea>
        `;
    }

    window.actividadActualDatos = { modIdx, subIdx, sub };
    window.respuestasQuizLatam = {};

    document.getElementById('app').innerHTML = `
        <header class="navbar">
            <button class="btn-back" style="background: #f1f5f9; color: #15803d; border:1px solid #cbd5e1; padding:8px 15px; border-radius:6px; cursor:pointer;" onclick="mostrarTeoriaLeccion(${modIdx}, ${subIdx})">← Volver a Teoría</button>
            <div class="logo">Evaluación de Nivel</div>
        </header>
        <main class="container" style="max-width: 800px;">
            <div class="lesson-card">
                <h2>Desafío Analítico</h2>
                <div style="margin-bottom: 25px;">${actividadHtml}</div>
                <button class="btn-primary-large" onclick="procesarEnvioActividad()">Enviar y Evaluar 🎯</button>
            </div>
        </main>
    `;
}

function selecOpcionLatam(pIdx, oIdx, btn) {
    const contenedor = document.getElementById(`q-box-${pIdx}`);
    contenedor.querySelectorAll('.btn-opcion').forEach(b => {
        b.style.background = "#f8fafc";
        b.style.color = "#1e293b";
        b.style.borderColor = "#cbd5e1";
    });
    btn.style.background = "#dcfce7";
    btn.style.color = "#14532d";
    btn.style.borderColor = "#16a34a";
    window.respuestasQuizLatam[pIdx] = oIdx;
}

function procesarEnvioActividad() {
    const { modIdx, subIdx, sub } = window.actividadActualDatos;
    let esCorrecto = true;
    let detalleRetro = "";

    if (sub.tipo === "quiz") {
        sub.preguntas.forEach((p, pIdx) => {
            let userAns = window.respuestasQuizLatam[pIdx];
            if (userAns !== p.correcta) {
                esCorrecto = false;
                detalleRetro += `<p style="color:#991b1b; margin-bottom:8px;">❌ <b>Pregunta ${pIdx + 1}:</b> Incorrecto. La respuesta axiomática correcta era: <i>"${p.opciones[p.correcta]}"</i>.</p>`;
            } else {
                detalleRetro += `<p style="color:#166534; margin-bottom:8px;">✅ <b>Pregunta ${pIdx + 1}:</b> ¡Correcto! Demuestras precisión analítica.</p>`;
            }
        });
    } else if (sub.tipo === "completar") {
        let b0 = document.getElementById('blank-0').value.trim().toLowerCase();
        let b1 = document.getElementById('blank-1').value.trim().toLowerCase();
        if (b0 === sub.palabrasCorrectas[0] && b1 === sub.palabrasCorrectas[1]) {
            detalleRetro = `<p style="color:#166534;">✅ ¡Excelente! Has completado los términos históricos con precisión exacta.</p>`;
        } else {
            esCorrecto = false;
            detalleRetro = `<p style="color:#991b1b;">❌ Hay errores en los términos. Las palabras correctas eran: <b>${sub.palabrasCorrectas[0]}</b> y <b>${sub.palabrasCorrectas[1]}</b>.</p>`;
        }
    } else if (sub.tipo === "emparejar") {
        let errorMatch = false;
        sub.columnaB.forEach((_, i) => {
            let val = parseInt(document.getElementById(`match-${i}`).value);
            if (val !== sub.mapaCorrecto[i]) errorMatch = true;
        });
        if (!errorMatch) {
            detalleRetro = `<p style="color:#166534;">✅ ¡Emparejamiento perfecto! Comprendes la correlación conceptual.</p>`;
        } else {
            esCorrecto = false;
            detalleRetro = `<p style="color:#991b1b;">❌ El emparejamiento tiene errores conceptuales. Revisa la teoría previa.</p>`;
        }
    } else if (sub.tipo === "reflexion") {
        let texto = document.getElementById('input-reflexion').value.trim();
        if (texto.length >= 40) {
            usuarioActivo.reflexionFinal = texto;
            detalleRetro = `<p style="color:#166534;">✅ Tu reflexión ha quedado grabada permanentemente en tu perfil ciudadano.</p>`;
        } else {
            esCorrecto = false;
            detalleRetro = `<p style="color:#991b1b;">❌ La reflexión es demasiado breve. Escribe al menos 40 palabras para consolidar tu compromiso.</p>`;
        }
    }

    let puntosGanados = esCorrecto ? sub.puntosMax : Math.round(sub.puntosMax * 0.2);

    if (!usuarioActivo.progresoModulos[modIdx]) {
        usuarioActivo.progresoModulos[modIdx] = { obtenidos: 0, maximo: 0 };
    }
    
    let maxMod = 0;
    contenidosModulos[modIdx].subniveles.forEach(s => maxMod += s.puntosMax);
    usuarioActivo.progresoModulos[modIdx].maximo = maxMod;
    usuarioActivo.progresoModulos[modIdx].obtenidos += puntosGanados;

    document.getElementById('app').innerHTML = `
        <header class="navbar">
            <button class="btn-back" style="background: #f1f5f9; color: #15803d; border:1px solid #cbd5e1; padding:8px 15px; border-radius:6px; cursor:pointer;" onclick="mostrarSubNivelesModulo(${modIdx})">← Volver</button>
            <div class="logo">Resultado de Evaluación</div>
        </header>
        <main class="container" style="max-width: 800px;">
            <div class="lesson-card">
                <h2>${esCorrecto ? "✨ Nivel Superado con Éxito" : "⚠️ Retroalimentación Constructiva"}</h2>
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1; margin-bottom: 25px;">${detalleRetro}</div>
                <p style="color: #15803d; margin-bottom: 25px; font-weight:bold;">Puntos obtenidos: +${puntosGanados} Pts</p>
                <button class="btn-primary-large" onclick="completarNivelExito(${modIdx}, ${subIdx}, ${puntosGanados}, ${esCorrecto})">Continuar la Ruta 🌿</button>
            </div>
        </main>
    `;
}

function completarNivelExito(modIdx, subIdx, pts, esCorrecto) {
    usuarioActivo.puntos += pts;
    if (!usuarioActivo.subnivelesHechos[modIdx]) usuarioActivo.subnivelesHechos[modIdx] = [];
    if (!usuarioActivo.subnivelesHechos[modIdx].includes(subIdx)) usuarioActivo.subnivelesHechos[modIdx].push(subIdx);

    let mod = contenidosModulos[modIdx];
    if (usuarioActivo.subnivelesHechos[modIdx].length >= mod.subniveles.length) {
        if (modIdx < contenidosModulos.length - 1 && !usuarioActivo.modulosCompletados.includes(modIdx + 1)) {
            usuarioActivo.modulosCompletados.push(modIdx + 1);
        }
    }
    guardarEnBD();
    mostrarSubNivelesModulo(modIdx);
}

// =======================================================
// MEDALLAS DEFINIDAS ESTRICTAMENTE POR LAS RESPUESTAS CORRECTAS (SS)
// =======================================================
function mostrarMedallasLatam() {
    let htmlMedallas = "";
    
    contenidosModulos.forEach((mod, idx) => {
        let hechosSS = usuarioActivo.subnivelesHechos[idx] || [];
        let totalSS = mod.subniveles.length;
        
        let emoji = "🔒";
        let estado = "Bloqueado";
        let colorFondo = "#f1f5f9";

        if (hechosSS.length > 0) {
            let progresoMod = usuarioActivo.progresoModulos[idx] || { obtenidos: 0, maximo: 100 };
            let porcentajeAciertos = progresoMod.maximo > 0 ? (progresoMod.obtenidos / progresoMod.maximo) * 100 : (hechosSS.length / totalSS) * 100;

            if (porcentajeAciertos >= 100 && hechosSS.length === totalSS) {
                emoji = "☀️";
                estado = `Medalla de Oro (Precisión del 100% en SS)`;
                colorFondo = "#fef9c3";
            } else if (porcentajeAciertos >= 60) {
                emoji = "🪙";
                estado = `Medalla de Plata (${Math.round(porcentajeAciertos)}% de aciertos)`;
                colorFondo = "#e0f2fe";
            } else {
                emoji = "🥉";
                estado = `Medalla de Bronce (${Math.round(porcentajeAciertos)}% - Margen de mejora)`;
                colorFondo = "#ffedd5";
            }
        } else if (usuarioActivo.modulosCompletados.includes(idx)) {
            emoji = "🌿";
            estado = `Disponible (Sin evaluaciones aprobadas aún)`;
            colorFondo = "#dcfce7";
        }

        htmlMedallas += `
            <div style="background: ${colorFondo}; border: 1px solid #cbd5e1; padding: 20px; border-radius: 10px; text-align: center;">
                <span style="font-size: 3rem;">${emoji}</span>
                <h3 style="color: #0f172a; margin-top: 10px; font-size: 1rem;">Módulo ${idx + 1}</h3>
                <p style="color: #334155; font-size: 0.85rem; margin-top: 5px; font-weight:600;">${estado}</p>
            </div>
        `;
    });

    document.getElementById('app').innerHTML = `
        <header class="navbar">
            <button class="btn-back" style="background: #f1f5f9; color: #15803d; border:1px solid #cbd5e1; padding:8px 15px; border-radius:6px; cursor:pointer;" onclick="mostrarMapaPrincipal()">← Volver al Mapa</button>
            <div class="logo">Condecoraciones de Paz</div>
        </header>
        <main class="container" style="max-width: 900px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">${htmlMedallas}</div>
        </main>
    `;
}

// =======================================================
// PERFIL CIUDADANO CON ESTILOS PERSONALIZADOS
// =======================================================
function mostrarPerfilUsuario() {
    let estiloBorde = usuarioActivo.bordePerfil === 'border-gold' ? 'border: 4px solid #ca8a04;' : (usuarioActivo.bordePerfil === 'border-green' ? 'border: 4px solid #16a34a;' : 'border: 1px solid #cbd5e1;');
    let estiloFondo = usuarioActivo.fondoPerfil === 'bg-sunset' ? 'background: linear-gradient(135deg, #fef08a 0%, #bbf7d0 100%);' : (usuarioActivo.fondoPerfil === 'bg-forest' ? 'background: #064e3b; color: #ecfdf5;' : 'background: #f8fafc;');

    document.getElementById('app').innerHTML = `
        <header class="navbar">
            <button class="btn-back" style="background: #f1f5f9; color: #15803d; border:1px solid #cbd5e1; padding:8px 15px; border-radius:6px; cursor:pointer;" onclick="mostrarMapaPrincipal()">← Volver al Mapa</button>
            <div class="logo">Perfil Ciudadano</div>
        </header>
        <main class="container" style="max-width: 700px;">
            <div class="lesson-card" style="text-align:center; ${estiloFondo}">
                <div style="font-size: 5rem; margin-bottom: 15px; display:inline-block; padding:10px; border-radius:50%; ${estiloBorde}">${usuarioActivo.avatar}</div>
                <h2>${usuarioActivo.nombre}</h2>
                <p style="color: #15803d; font-weight: 700; margin-bottom: 5px;">🎖️ Título: "${usuarioActivo.tituloPerfil}"</p>
                <p style="color: #64748b; font-weight: 600; margin-bottom: 20px;">@${usuarioActivo.username} • Enfoque: ${usuarioActivo.enfoque}</p>
                <div style="background: rgba(255,255,255,0.8); padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1; text-align: left; margin-top: 20px;">
                    <h4 style="color: #15803d; margin-bottom: 10px;">📜 Tu Reflexión Ciudadana Registrada:</h4>
                    <p style="color: #334155; font-style: italic;">${usuarioActivo.reflexionFinal || "Aún no has registrado tu reflexión en el Módulo 7."}</p>
                </div>
            </div>
        </main>
    `;
}

// =======================================================
// TIENDA EXPANDIDA CON BORDES, FONDOS Y TÍTULOS DE PERFIL
// =======================================================
function mostrarTienda() {
    document.getElementById('app').innerHTML = `
        <header class="navbar">
            <button class="btn-back" style="background: #f1f5f9; color: #15803d; border:1px solid #cbd5e1; padding:8px 15px; border-radius:6px; cursor:pointer;" onclick="mostrarMapaPrincipal()">← Volver al Mapa</button>
            <div class="logo">Tienda Ciudadana</div>
            <div class="puntos-badge" style="background:#fef9c3; color:#854d0e; padding: 6px 12px; border-radius: 20px; font-weight: bold;">⭐ ${usuarioActivo.puntos} Pts</div>
        </header>
        <main class="container" style="max-width: 900px;">
            <div class="lesson-card">
                <h2>Personalización y Símbolos de Identidad</h2>
                <p style="color: #64748b; margin-bottom: 25px;">Adquiere avatares, bordes especiales, fondos para tu perfil y títulos de honor con tus puntos.</p>
                
                <h3 style="color:#15803d; margin-bottom:15px;">🌟 Avatares</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 15px; margin-bottom:30px;">
                    ${generarItemsTienda('avatar', [
                        { e: '🌱', c: 60 }, { e: '🕊️', c: 100 }, { e: '✊', c: 150 }, { e: '🌍', c: 200 }, { e: '⚖️', c: 250 }, { e: '🌿', c: 300 }
                    ])}
                </div>

                <h3 style="color:#15803d; margin-bottom:15px;">🖼️ Bordes de Avatar</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin-bottom:30px;">
                    ${generarItemsTienda('borde', [
                        { id: 'border-gold', nombre: 'Borde Dorado ⭐', c: 150 },
                        { id: 'border-green', nombre: 'Borde Esmeralda 🌿', c: 120 }
                    ])}
                </div>

                <h3 style="color:#15803d; margin-bottom:15px;">🎨 Fondos de Perfil</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin-bottom:30px;">
                    ${generarItemsTienda('fondo', [
                        { id: 'bg-sunset', nombre: 'Atardecer Andino 🌅', c: 200 },
                        { id: 'bg-forest', nombre: 'Bosque Profundo 🌲', c: 250 }
                    ])}
                </div>

                <h3 style="color:#15803d; margin-bottom:15px;">📜 Títulos de Honor</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    ${generarItemsTienda('titulo', [
                        { id: 'Mediador de Paz', nombre: 'Mediador de Paz 🕊️', c: 180 },
                        { id: 'Guardián de la Memoria', nombre: 'Guardián de la Memoria 📜', c: 220 }
                    ])}
                </div>
            </div>
        </main>
    `;
}

function generarItemsTienda(tipo, lista) {
    let html = "";
    lista.forEach(item => {
        let idVal = item.e || item.id;
        let nombreVal = item.e || item.nombre;
        let costo = item.c;

        let esDueño = false;
        let esActual = false;

        if (tipo === 'avatar') {
            esDueño = usuarioActivo.avataresDesbloqueados.includes(idVal);
            esActual = usuarioActivo.avatar === idVal;
        } else if (tipo === 'borde') {
            esDueño = usuarioActivo.bordesDesbloqueados.includes(idVal);
            esActual = usuarioActivo.bordePerfil === idVal;
        } else if (tipo === 'fondo') {
            esDueño = usuarioActivo.fondosDesbloqueados.includes(idVal);
            esActual = usuarioActivo.fondoPerfil === idVal;
        } else if (tipo === 'titulo') {
            esDueño = usuarioActivo.titulosDesbloqueados.includes(idVal);
            esActual = usuarioActivo.tituloPerfil === idVal;
        }

        html += `
            <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 15px; border-radius: 10px; text-align: center;">
                <span style="font-size: ${tipo === 'avatar' ? '2.5rem' : '1.2rem'}; display:block; margin-bottom: 8px; font-weight:bold;">${nombreVal}</span>
                <p style="font-weight:bold; color: #b45309; margin-bottom: 8px; font-size:0.9rem;">${esDueño ? 'Adquirido' : costo + ' Pts'}</p>
                ${esActual ? 
                    `<button style="background:#e2e8f0; color:#64748b; width:100%; padding:6px; border:none; border-radius:6px; font-size:0.85rem;" disabled>Equipado</button>` : 
                  esDueño ? 
                    `<button style="background:#dcfce7; color:#15803d; width:100%; padding:6px; border:none; border-radius:6px; cursor:pointer; font-weight:600; font-size:0.85rem;" onclick="equiparItem('${tipo}', '${idVal}')">Usar</button>` :
                    `<button style="background:#ca8a04; color:#ffffff; width:100%; padding:6px; border:none; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.85rem;" onclick="comprarItem('${tipo}', '${idVal}', ${costo})">Adquirir</button>`}
            </div>
        `;
    });
    return html;
}

function comprarItem(tipo, idVal, costo) {
    if (usuarioActivo.puntos >= costo) {
        usuarioActivo.puntos -= costo;
        if (tipo === 'avatar') {
            usuarioActivo.avataresDesbloqueados.push(idVal);
            usuarioActivo.avatar = idVal;
        } else if (tipo === 'borde') {
            usuarioActivo.bordesDesbloqueados.push(idVal);
            usuarioActivo.bordePerfil = idVal;
        } else if (tipo === 'fondo') {
            usuarioActivo.fondosDesbloqueados.push(idVal);
            usuarioActivo.fondoPerfil = idVal;
        } else if (tipo === 'titulo') {
            usuarioActivo.titulosDesbloqueados.push(idVal);
            usuarioActivo.tituloPerfil = idVal;
        }
        guardarEnBD();
        alert(`¡Adquisición exitosa!`);
        mostrarTienda();
    } else {
        alert("❌ Puntos insuficientes. Supera más niveles en los módulos.");
    }
}

function equiparItem(tipo, idVal) {
    if (tipo === 'avatar') usuarioActivo.avatar = idVal;
    else if (tipo === 'borde') usuarioActivo.bordePerfil = idVal;
    else if (tipo === 'fondo') usuarioActivo.fondoPerfil = idVal;
    else if (tipo === 'titulo') usuarioActivo.tituloPerfil = idVal;
    
    guardarEnBD();
    mostrarTienda();
}

// Inicialización
mostrarPantallaAuth();