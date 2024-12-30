import Bola from "./Bola.js";
import Paleta from "./Paleta.js";

const bola  = new Bola(document.getElementById("bola"))
const paletaPlayer = new Paleta(document.getElementById("paleta-jogador"))
const paletaComputador = new Paleta(document.getElementById("paleta-computador"))
let ultimoTempo

function update(tempo) {
    if (ultimoTempo != null) {
    const delta = tempo - ultimoTempo

    //  bola.update(delta)
    paletaComputador.update(delta, bola.y)
    }

    
    ultimoTempo = tempo
    window.requestAnimationFrame(update)
}

document.addEventListener("mousemove", e =>{
    paletaPlayer.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)