// functions are first-class citizen
// Composición
function person(name, age) {
  return {
    name,
    age,
  }
}

const maria = person('Maria', 26)

function teacher(name, age, lesson) {
  return {
    ...person(name, age),
    lesson
  }
}

const simon = teacher('Simon', 29, 'TOP')

// console.log(simon)

// Immutabilidad
let arr = [1,2,3]
arr = arr.concat(4)

// Pure functions
// No tiene side effects
let num = 1
let obj = {}
function pureFunction(a) {
  a = 2
  console.log(num)
}

// Dados los mismos argumentos siempre retorna el mismo resultado
function sum(a, b) {
  return a + b
}

console.log(sum(1, num))
console.log(sum(1, num))
num = 2
console.log(sum(1, num))




