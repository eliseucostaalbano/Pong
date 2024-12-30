const VELO = 0.02

export default class Paleta{
    constructor(paletaElem) {
        this.paletaElem = paletaElem
        this.reset()
      }

get position() {
        return parseFloat(
          getComputedStyle(this.paletaElem).getPropertyValue("--position")
        )
      }

set position(value) {
        this.paletaElem.style.setProperty("--position", value)
      }


reset(){
    this.position = 50
}

update(delta, bolaHeight){
    this.position += VELO * delta * (bolaHeight - this.position)
}
}