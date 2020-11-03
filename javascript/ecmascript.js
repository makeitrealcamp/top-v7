// Parametros por defecto
// function sum(a, b) {
//   if(typeof(a) !== 'number') {
//     return 'must be a number'
//   }
//   if(b === undefined) {
//     b = 0
//   }
//   return a + b
// }

function sum(a = 0, b = 0) {
  return a + b
}

// console.log(sum())
// console.log(sum(1))
// console.log(sum(1,2))
// console.log(sum(1,2,3))

// Plantillas literales (cadenas crudas)
// (cadenas interpretadas)
let name = 'Ana'
// console.log('Hola ' + name + '!' + '\nnew line')
// console.log(`Hola ${name}!`)
// console.log(`Hola ${1 + 2}!`)
// console.log(`Hola ${sum}!`)
// console.log(`Hola ${sum(5, 7)}!`)
// console.log(`hola
// ${name}`)

// Destructuring
// let obj = { a: 1, b: 2, c: 3 }

// let a = obj.a
// let b = obj.b
// let c = obj.c

// let { a: x, b, c } = obj

// console.log(x, b, c)

// let arr = [4,5,6]

// let first = arr[0]
// let loquesea = arr[1]

// let [first, loquesea] = arr

// console.log(first, loquesea)

// Spread operator (...)
// variadic functions
// console.log(Math.max(1, 2, 4, 10, 25))

// let nums = [1,2,4,10,25]
// let nums2 = [11, 12]

// console.log(Math.max(nums))
// console.log(Math.max.apply(null, nums))
// console.log(Math.max(...nums))

// let nums3 = [...nums, ...nums2]

// console.log(nums3)

// let obj2 = { ...obj }

// console.log(obj2)
// console.log(obj2 === obj)

// Rest (...)
// let { b: t, ...obj3 } = obj2

// console.log(a)
// console.log(obj3)

// let [z, ...rest] = nums

// console.log(z, rest)

// console.log([...12345 + ''])

// Propiedades y métodos conscisos
let lesson = 'TOP'
function bar() {}
function person(name, age) {
  return {
    name,
    age,
    lesson,
    bar,
    greet() {
      console.log('hola mundo')
    }
  }
}

const maria = person('Maria', 25)
console.log(maria)
maria.greet()

// const, let
// arrow function
// const person = (name, age) => {
//   return {}
// }

