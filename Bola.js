const VELOCIDADE_INICIAL = 0.015

export default class Bola {
    constructor(bolaElem){
        this.bolaElem = bolaElem
        this.reset()
    }

get x(){
    return parseFloat(getComputedStyle(this.bolaElem).getPropertyValue("--x"))
    }

set x(value){
    this.bolaElem.style.setProperty("--x", value)
}

get y(){
    return parseFloat(getComputedStyle(this.bolaElem).getPropertyValue("--y"))
    }

set y(value){
    this.bolaElem.style.setProperty("--y", value)
}

reset(){
this.x = 50
this.y = 50
this.direction = {x:0 }

while (Math.abs(this.direction.x) <= 0.2 ||
Math.abs(this.direction.x) >= 0.9) {
    const caminho = randomNumberBetween(0, 2 * Math.PI)
    this.direction = { x: Math.cos(caminho), y: Math.sin(caminho) }
}
this.velocidade = VELOCIDADE_INICIAL
}

update(delta){
    this.x +=  this.direction.x * this.velocidade * delta
    this.y +=  this.direction.y * this.velocidade * delta
    }
}

function randomNumberBetween(min, max){
    return Math.random() * (max - min) + min
}