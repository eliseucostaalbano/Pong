const VELOCIDADE_INICIAL = 0.015
const AUMENTO_VELOCIDADE = 0.00001

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

rect(){
    return this.bolaElem.getBoundingClientRect()
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



update(delta, paddleRects){
    this.x +=  this.direction.x * this.velocidade * delta
    this.y +=  this.direction.y * this.velocidade * delta
    this.velocidade += AUMENTO_VELOCIDADE* delta
    const rect = this.rect()

    if (rect.bottom >= window.innerHeight || rect.top <= 0) {
        this.direction.y *= -1
      }
      
      if (paddleRects.some(r => isCollision(r, rect))) {
        this.direction.x *= -1
      }

    }
}

function randomNumberBetween(min, max){
    return Math.random() * (max - min) + min
}

function isCollision(rect1, rect2) {
    return (
      rect1.left <= rect2.right &&
      rect1.right >= rect2.left &&
      rect1.top <= rect2.bottom &&
      rect1.bottom >= rect2.top
    )
  }