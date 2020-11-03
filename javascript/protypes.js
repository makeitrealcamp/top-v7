// Todo es un objeto
// String, Number, Boolean, Function, Array, Object
// Objetos literales
const maria = {
  name: 'Maria',
  age: 24,
  greet: function () {
    console.log('hola mi nombre es ' + this.name)
  }
}

const juan = {
  name: 'Juan',
  age: 30,
  greet: function () {
    console.log('hola mi nombre es ' + this.name)
  }
}

// console.log(juan.hasOwnProperty('working'))

// Fabrica objetos
function person(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log('hola mi nombre es ' + this.name)
    }
  }
}

const ana = person('Ana', 32)
const martin = person('Martin', 54)

// Funciones constructoras
const str = 'hola mundo'
// console.log(str.indexOf('h'))
// console.log(str.hasOwnProperty('length'))

// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// Person.prototype.greet = function() {
//   return 'Hola mi nombre es ' + this.name
// }

// Syntatic sugar
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    return 'Hola mi nombre es ' + this.name
  }
}

const pedro = new Person('Pedro', 50)
console.log(pedro)
console.log(pedro.greet())
const juana = new Person('Juana', 50)
console.log(juana)
console.log(juana.greet())

// function Teacher(name, age, lesson) {
//   Person.call(this, name, age)
//   this.lesson = lesson
// }

// Teacher.prototype = new Person()
// Teacher.prototype.constructor = Teacher

class Teacher extends Person {
  constructor(name, age, lesson) {
    // this = { __proto__: Teacher, lesson: lesson, name: name, age: age  }
    super(name, age)
    this.lesson = lesson

    // return this
  }
}

const simon = new Teacher('Simon', 29, 'Top v7')
console.log(simon)
console.log(simon.greet())

// polyfill
Array.prototype.map2 = function(cb) {
  let newArray = []

  for(let i = 0; i < this.length; i++) {
    const newEl = cb(this[i], i, this)
    newArray.push(newEl)
  }

  return newArray
}

Array.prototype.reduce2 = function (cb, init) {
  let result = init

  for(let i = 0; i < this.length; i++) {
    result = cb(result, this[i], i, this)
    // cb(0, 1, 0, [1,2,3]) => 1
    // cb(1, 2, 1, [1,2,3]) => 3
    // cb(3, 3, 2, [1,2,3]) => 6
  }

  return result
}

function multiplyByTwo(el, index, arr) {
  return el * 2
}

// const map1 = [1,2,3].map(multiplyByTwo)
// const map2 = [1,2,3].map2((el, index, arr) => { return el * 2 })

// console.log(map1, map2)

// sum(0, 1, 0, [1,2,3])
// sum(1, 2, 1, [1,2,3])
// sum(3, 3, 2, [1,2,3])
function sum(result, el) {
  // return 0 + 1
  // return 1 + 2
  // retunr 3 + 3
  return result + el
}

function multiply(result, el) {
  return result * el
}

const res1 = [1,2,3].reduce2(sum, 0)
const res2 = [1,2,4,3].reduce2(multiply, 1)

// console.log(res1, res2)












