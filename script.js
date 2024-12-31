import Bola from "./Bola.js";
import Paleta from "./Paleta.js";

const bola  = new Bola(document.getElementById("bola"))
const paletaPlayer = new Paleta(document.getElementById("paleta-jogador"))
const paletaComputador = new Paleta(document.getElementById("paleta-computador"))
const placarPlayerElem = document.getElementById("jogador-placar")
const placarComputadorElem = document.getElementById("computador-placar")
let ultimoTempo

function update(tempo) {
    if (ultimoTempo != null) {
    const delta = tempo - ultimoTempo

     bola.update(delta ,[paletaPlayer.rect(), paletaComputador.rect()])
    paletaComputador.update(delta, bola.y)
    const hue = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--hue")
      )

      document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

   if (estaPerdendo())lidarDerrota()

   }


    
    ultimoTempo = tempo
    window.requestAnimationFrame(update)
}

function estaPerdendo() {
    const rect = bola.rect()
   return rect.right >= window.innerWidth|| rect.left <= 0
}

function lidarDerrota() {
    const rect = bola.rect()
  if (rect.right >= window.innerWidth) {
    placarPlayerElem.textContent = parseInt(placarPlayerElem.textContent) + 1
  } else{
    placarComputadorElem.textContent = parseInt(placarComputadorElem.textContent) + 1
  }
    bola.reset()
    paletaComputador.reset()
}

document.addEventListener("mousemove", e =>{
    paletaPlayer.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)