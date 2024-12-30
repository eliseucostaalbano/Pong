import Bola from "./Bola.js";

const bola  = new Bola(document.getElementById("bola"))
let ultimoTempo

function update(tempo) {
    if (ultimoTempo != null) {
    const delta = tempo - ultimoTempo

     bola.update(delta)
    }

    
    ultimoTempo = tempo
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)