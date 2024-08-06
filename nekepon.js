const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonTierra = document.getElementById('boton-tierra')
const botonAire = document.getElementById('boton-aire')
const botonHielo = document.getElementById('boton-hielo')
const botonVacio = document.getElementById('boton-vacio')
const botonPsiquico = document.getElementById('boton-psiquico')
const botonRayo = document.getElementById('boton-rayo')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const versusNames = document.getElementById('versusNames')
const versusEnemy = document.getElementById('versusEnemy')
sectionReiniciar.style.display = 'none'

const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

 
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputTroyaNight
let inputSahnt
let inputLuminen
let inputZekki
let inputBlade
let inputBolt
let inputGrik
let inputRockita
let vidasJugador = 3
let vidasEnemigo = 3
let mascotaJugador = document.getElementById('mascota-jugador')
let nombreXD  
let userName = prompt(`Ingresa un nombre (es opcional, y no, no se guarda, es para el juego.) `)
const villanos = [
    "Lord Averno",
    "Draugon el Oscuro",
    "Sombra Nocturna",
    "Vórtice",
    "Tempestad",
    "Kharon el Destructor",
    "Inferno",
    "Cazador Sombrío",
    "Némesis",
    "Viperfang",
    "Maestro Caos",
    "Ragnarok",
    "Lucius Malefic",
    "Lord Malevolus",
    "Aracnus"
];
let randomIndex = Math.floor(Math.random() * villanos.length);
let randomVillainName = villanos[randomIndex];

    
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let troyaNight = new Mokepon('TroyaNight', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let sahnt = new Mokepon('Sahnt', './assets/mokepons_mokepon_capipepo_attack.png', 5)

let luminen = new Mokepon('Luminen', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

let rockita = new Mokepon('rockita', './assets/mokepons_mokepon_ratigueya_attack.png', 5 )

let zekki = new Mokepon('Zekki', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

let bolt = new Mokepon('Bolt', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

let grik = new Mokepon('Grik', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

let blade = new Mokepon('Blade', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

troyaNight.ataques.push(
    { nombre: '☄️', id: 'boton-vacio' },
    { nombre: '☄️', id: 'boton-vacio' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌪️', id: 'boton-aire' },
    
)

sahnt.ataques.push(
    { nombre: '♾️', id: 'boton-psiquico' },
    { nombre: '♾️', id: 'boton-psiquico' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '☄️', id: 'boton-vacio' },
)

luminen.ataques.push(
    { nombre: '❄️', id: 'boton-hielo' },
    { nombre: '❄️', id: 'boton-hielo' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '☄️', id: 'boton-vacio' },
)

rockita.ataques.push (
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌪️', id: 'boton-aire' },
)

grik.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '🌪️', id: 'boton-aire' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '♾️', id: 'boton-psiquico' },

)

bolt.ataques.push(
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '⚡', id: 'boton-rayo' },
    { nombre: '☄️', id: 'boton-vacio' },
    { nombre: '♾️', id: 'boton-psiquico' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌪️', id: 'boton-aire' },
)

zekki.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '♾️', id: 'boton-psiquico' },
    { nombre: '❄️', id: 'boton-hielo' },
    { nombre: '🌪️', id: 'boton-aire' },
)
blade.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '❄️', id: 'boton-hielo' },
    { nombre: '♾️', id: 'boton-psiquico' },
    { nombre: '☄️', id: 'boton-vacio' },
    { nombre: '⚡', id: 'boton-rayo' },


)


mokepones.push(troyaNight,sahnt,luminen,rockita,grik,bolt,zekki,blade)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputTroyaNight = document.getElementById('TroyaNight')
     inputSahnt = document.getElementById('Sahnt')
     inputLuminen = document.getElementById('Luminen')
     inputRockita = document.getElementById('rockita')
     inputGrik = document.getElementById('Grik')
     inputBolt = document.getElementById('Bolt')
     inputZekki = document.getElementById('Zekki')
     inputBlade = document.getElementById('Blade')

    })
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    contenedorTarjetas.addEventListener('dblclick', seleccionarMascotaJugador)
    

    botonFuego.addEventListener('click', ataqueFuego)
    
    botonAgua.addEventListener('click', ataqueAgua)
    
    botonTierra.addEventListener('click', ataqueTierra)

    botonHielo.addEventListener('click', ataqueHielo)

    botonVacio.addEventListener('click', ataqueVacio)

    botonAire.addEventListener('click', ataqueAire)

    botonRayo.addEventListener('click', ataqueRayo)

    botonPsiquico.addEventListener('click', ataquePsiquico)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function showAttacks() {
    // Ocultar todas las secciones
    const botones = document.querySelectorAll('.boton');
    botones.forEach(button => {
        button.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    const selectedButton = document.getElementById(botonFuego);
    if (selectedButton) {
        botones.style.display = 'block';
    } else {
        
}
}
function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    
    sectionSeleccionarAtaque.style.display = 'flex'
    
    nombreXD = seleccionarMascotaEnemigo()

    
    if (inputBlade.checked) {
        spanMascotaJugador.innerHTML = inputBlade.id
        versusNames.innerHTML  = (`La lucha comienza!, el jugador ${userName} junto a su mascota: `) + inputBlade.id + (` se enfrenta contra el villano ${randomVillainName} y su mascota ${nombreXD}, Quien ganara? `)  
        
    } else if (inputRockita.checked) {
        spanMascotaJugador.innerHTML = inputRockita.id
        versusNames.innerHTML  = (`La lucha comienza!, el jugador ${userName} junto a su mascota: `) + inputRockita.id + (` se enfrenta contra el villano ${randomVillainName} y su mascota ${nombreXD}, Quien ganara? `) 
        botonFuego.style.display = 'block'
        botonVacio.style.display = 'none'
        botonPsiquico.style.display = 'none'
        botonTierra.style.display = 'block'
        botonAgua.style.display = 'none'
        botonRayo.style.display = 'block'
        botonAire.style.display = 'none'
        botonHielo.style.display = 'none'
    }  else if (inputGrik.checked) {
        spanMascotaJugador.innerHTML = inputGrik.id
        versusNames.innerHTML  = (`La lucha comienza!, el jugador ${userName} junto a su mascota: `) + inputGrik.id + (` se enfrenta contra el villano ${randomVillainName} y su mascota ${nombreXD}, Quien ganara? `) 
        botonFuego.style.display = 'none'
        botonVacio.style.display = 'none'
        botonPsiquico.style.display = 'block'
        botonTierra.style.display = 'block'
        botonAgua.style.display = 'none'
        botonRayo.style.display = 'none'
        botonAire.style.display = 'block'
        botonHielo.style.display = 'none'
    }  else if (inputBolt.checked) {
        spanMascotaJugador.innerHTML = inputBolt.id
        versusNames.innerHTML  = (`La lucha comienza!, el jugador ${userName} junto a su mascota: `) + inputBolt.id + (` se enfrenta contra el villano ${randomVillainName} y su mascota ${nombreXD}, Quien ganara? `) 
        botonFuego.style.display = 'block'
        botonVacio.style.display = 'none'
        botonPsiquico.style.display = 'block'
        botonTierra.style.display = 'none'
        botonAgua.style.display = 'none'
        botonRayo.style.display = 'block'
        botonAire.style.display = 'block'
        botonHielo.style.display = 'none'
    }  else if (inputZekki.checked) {
        spanMascotaJugador.innerHTML = inputZekki.id
        versusNames.innerHTML  = (`La lucha comienza!, el jugador ${userName} junto a su mascota: `) + inputZekki.id + (` se enfrenta contra el villano ${randomVillainName} y su mascota ${nombreXD}, Quien ganara? `) 
        botonFuego.style.display = 'block'
        botonVacio.style.display = 'block'
        botonPsiquico.style.display = 'block'
        botonTierra.style.display = 'none'
        botonAgua.style.display = 'none'
        botonRayo.style.display = 'block'
        botonAire.style.display = 'block'
        botonHielo.style.display = 'none'
    } else if (inputTroyaNight.checked) {
        spanMascotaJugador.innerHTML = inputTroyaNight.id
        versusNames.innerHTML  = (`La lucha comienza!, el jugador ${userName} junto a su mascota: `) + inputTroyaNight.id + (` se enfrenta contra el villano ${randomVillainName} y su mascota ${nombreXD}, Quien ganara? `) 
        botonFuego.style.display = 'none'
        botonVacio.style.display = 'none'
        botonPsiquico.style.display = 'block'
        botonTierra.style.display = 'none'
        botonAgua.style.display = 'block'
        botonRayo.style.display = 'none'
        botonAire.style.display = 'block'
        botonHielo.style.display = 'block'
    } else if (inputLuminen.checked) {
        spanMascotaJugador.innerHTML = inputLuminen.id
        versusNames.innerHTML  = (`La lucha comienza!, el jugador ${userName} junto a su mascota: `) + inputLuminen.id + (` se enfrenta contra el villano ${randomVillainName} y su mascota ${nombreXD}, Quien ganara? `) 
        botonFuego.style.display = 'block'
        botonVacio.style.display = 'block'
        botonPsiquico.style.display = 'none'
        botonTierra.style.display = 'block'
        botonAgua.style.display = 'none'
        botonRayo.style.display = 'block'
        botonAire.style.display = 'none'
        botonHielo.style.display = 'none'
    } else if (inputSahnt.checked) {
        spanMascotaJugador.innerHTML = inputSahnt.id
        versusNames.innerHTML  = (`La lucha comienza!, el jugador ${userName} junto a su mascota: `) + inputSahnt.id + (` se enfrenta contra el villano ${randomVillainName} y su mascota ${nombreXD}, Quien ganara? `) 
        botonFuego.style.display = 'none'
        botonVacio.style.display = 'block'
        botonPsiquico.style.display = 'block'
        botonTierra.style.display = 'block'
        botonAgua.style.display = 'block'
        botonRayo.style.display = 'none'
        botonAire.style.display = 'block'
        botonHielo.style.display = 'block'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    /*let mascotaAleatoria = aleatorio(0, mokepones.length -1)
    let MascotaEnmigo = mokepones[mascotaAleatoria].nombre
    spanMascotaEnemigo.innerHTML = MascotaEnmigo
    let otroNombreMascota = spanMascotaEnemigo.MascotaEnmigo
    return otroNombreMascota*/

    let mascotaAleatoria = aleatorio(0, mokepones.length - 1);
let MascotaEnemigo = mokepones[mascotaAleatoria].nombre;
let nombreEnemigo = MascotaEnemigo // Asignar nombre al span

// Guardar el mismo nombre en una variable
let otroNombreMascota = MascotaEnemigo;
spanMascotaEnemigo.innerHTML = (`${nombreXD}`)
return MascotaEnemigo
  
   
  
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
    versusNames.innerHTML  = ''
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
    versusNames.innerHTML  = ''
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
    versusNames.innerHTML  = ''
}
function ataqueRayo() {
    ataqueJugador = 'RAYO'
    ataqueAleatorioEnemigo()
    versusNames.innerHTML  = ''
}
function ataquePsiquico() {
    ataqueJugador = 'PSIQUICO'
    ataqueAleatorioEnemigo()
    versusNames.innerHTML  = ''
}
function ataqueHielo() {
    ataqueJugador = 'HIELO'
    ataqueAleatorioEnemigo()
    versusNames.innerHTML  = ''
}
function ataqueVacio() {
ataqueJugador = 'VACIO'
ataqueAleatorioEnemigo()
versusNames.innerHTML  = ''
 }
function ataqueAire () {
ataqueJugador = 'AIRE'
ataqueAleatorioEnemigo()
versusNames.innerHTML  = ''
}



function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 8)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'RAYO'
    } else if (ataqueAleatorio == 4) {
        ataqueEnemigo = 'PSIQUICO'
    } else if (ataqueAleatorio == 5) {
        ataqueEnemigo = 'VACIO'
    } else if (ataqueAleatorio == 6) {
        ataqueEnemigo = 'HIELO'
    } else if (ataqueAleatorio == 7) {
        ataqueEnemigo = 'AIRE'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje(`EMPATE, tu y tu enemigo ${randomVillainName} usaron el mismo ataque ${ataqueJugador}!!, (eso fue chepa porque hay muchos ataques diferentes)`)
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje(`Bien!, tu ataque ${ataqueJugador} es mas poderoso que el ${ataqueEnemigo} de ${randomVillainName}! `)
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje(`Bien!, tu ataque ${ataqueJugador} es mas poderoso que el ${ataqueEnemigo} de ${randomVillainName}! `)
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje(`Bien!, tu ataque ${ataqueJugador} es mas poderoso que el ${ataqueEnemigo} de ${randomVillainName}! `)
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (
        
        ataqueJugador == 'HIELO' && ataqueEnemigo == 'AIRE' ||
        
        ataqueJugador == 'HIELO' && ataqueEnemigo == 'AGUA' ||
        ataqueJugador == 'HIELO' && ataqueEnemigo == 'TIERRA' ||
        ataqueJugador == 'RAYO' && ataqueEnemigo == 'HIELO' ||
        ataqueJugador == 'RAYO' && ataqueEnemigo == 'AGUA' ||
        ataqueJugador == 'RAYO' && ataqueEnemigo == 'AIRE' ||
        ataqueJugador == 'RAYO' && ataqueEnemigo == 'PSIQUICO' ||
        ataqueJugador == 'VACIO' && ataqueEnemigo == 'FUEGO' ||
        ataqueJugador == 'VACIO' && ataqueEnemigo == 'AGUA' ||
        ataqueJugador == 'VACIO' && ataqueEnemigo == 'HIELO' ||
        ataqueJugador == 'VACIO' && ataqueEnemigo == 'RAYO' ||
        ataqueJugador == 'VACIO' && ataqueEnemigo == 'AIRE' ||
        ataqueJugador == 'VACIO' && ataqueEnemigo == 'FUEGO' ||
        ataqueJugador == 'VACIO' && ataqueEnemigo == 'TIERRA' ||
        ataqueJugador == 'PSIQUICO' && ataqueEnemigo == 'VACIO' ||
        ataqueJugador == 'FUEGO' && ataqueEnemigo == 'AIRE' ||
        ataqueJugador == 'FUEGO' && ataqueEnemigo == 'HIELO' ||
        ataqueJugador == 'TIERRA' && ataqueEnemigo == 'RAYO' ||
        ataqueJugador == 'AIRE' && ataqueEnemigo == 'AGUA' ||
        ataqueJugador == 'AGUA' && ataqueEnemigo == 'PSIQUICO' 
     ) {
        crearMensaje(`Bien!, tu ataque ${ataqueJugador} es mas poderoso que el ${ataqueEnemigo} de ${randomVillainName}! `)
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'RAYO' && ataqueEnemigo == 'FUEGO') {
        crearMensaje(`EMPATE!! ${ataqueJugador} y ${ataqueEnemigo} TIENEN EL MISMO PODER!`)
    }
    
    else {
        crearMensaje(`AUCH!!, tu ataque ${ataqueJugador} es mas debil que el ${ataqueEnemigo} de tu enemigo ${randomVillainName}, intentalo de nuevo y ten cuidado!, que no te gane!`)
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal(`Tu ${userName}, has derrotado a ${randomVillainName}!!! GG (y que bueno, porque imaginate que te gane un bot🤣🤣) `)
    } else if (vidasJugador == 0) {
        crearMensajeFinal(`Te dejaste ganar por un bot 🤣🤣🤣(se llama ${randomVillainName} porcierto) `)
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal

    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    botonAire.disabled = true
    
    botonVacio.disabled = true
    
    botonRayo.disabled = true

    botonPsiquico.disabled = true
    
    botonHielo.disabled = true
    
    

    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

/*else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id
} else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id
} */
