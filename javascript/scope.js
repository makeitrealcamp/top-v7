// 'use strict'
// Global
//  Navagodor - window
//  NodeJS - global

// Lexical Scope (estatico)

// Global
//  greet
//  greetFunction
//    greet2
//    bar
//      far
//      baz
//  {}
//    greet3
//  i
//  greet4
//  arr

var greet = 'hola mundo'

function greetFunction() {
  var greet2 = 'hello world'

  function bar(far) {
    var baz = 'foo'
  }
}

if(true) {
  // var greet3 = 'hola'
  let greet3 = 'hola'
}

var arr = []
for(var i = 0; i < arr.length; i++) {
  var greet4 = 'hello'
}

// Hoisting

// undeclared vs undefined
// var bar // undefined

// console.log(bar)
// foo()
// var bar = 'hello world'
// let bar = 'hello world'

// Funciones Declaración
// function foo() {
//   console.log('foo')
// }

// Funciones Anonimas
// var foo = function() {
//   console.log('foo')
// }

// Funciones Flecha
// let foo = () => {
//   console.log('foo')
// }

// Closures
// Es una función que aún siendo invocada por fuera de su lexical scope, tiene acceso a su lexical scope.
// Es caja donde almacenamos la declaración de una función y su lexical scope.
// Son los derechos de nacimiento de una función

// functions are first-citizen
// function sum(a, b) {
//   return a + b
// }

// let acc = sum(1, 2)
// console.log(acc)
// function sum(a, b) {
//   return function() {
//     return a + b
//   }
// }

// let acc = sum(1, 2)
// let acc2 = acc()
// console.log(acc, acc2)

// function multiplyByTwo(n) {
//   return n * 2
// }

// function multiplyByThree(n) {
//   return n * 3
// }

function multiply(factor) {
  function op(n) {
    return n * factor
  }

  return op
}

let multiplyByTwo = multiply(2)
console.log(multiplyByTwo(3))
console.log(multiplyByTwo(1))

let multiplyByTen = multiply(10)
console.log(multiplyByTen(5))

function car() {
  let speed = 0
  let color = 'red'

  function accelerate() {
    speed++
  }

  function getSpeed() {
    console.log(speed)
  }

  function paint(c) {
    color = c
  }

  function getColor() {
    console.log(color)
  }

  return {
    accelerate: accelerate,
    getSpeed: getSpeed,
    paint: paint,
    getColor: getColor
  }
}

let car1 = car()
console.log(car1)
let car2 = car()

car1.accelerate()
car2.accelerate()
car1.accelerate()
car1.getSpeed()
car2.getSpeed()
console.log(car1.speed)

car1.getColor()
car1.paint('blue')
car1.getColor()
// Implicit coercion (casting)
// console.log(2 === '2')
// console.log(typeof(['a'] + ['b']))
// console.log(['a'] + ['b'])
// console.log('1' + 1)
// console.log('1' - 1)

// if(0) {
//   console.log(true)
// }

// falsy values
// 0, '', NaN, undefined, null, false

// Truthy values
// -1, 1, 'h', [], {}, true







