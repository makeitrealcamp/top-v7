// Array
// Immutabilidad
let arr = [1,2,3,4,5]

// Obtener
// console.log(arr[1])
// console.log(arr[5])

// Copiar
// let arr2 = arr.slice()
// console.log(arr === arr2)

// Agregar
// Al final
// console.log(arr.push(7))
// console.log(arr)
// Al principio
// console.log(arr.unshift(0))
// console.log(arr)
// Medio
// Splice: Indice de inicio, # Elementos a eliminar, Elementos a agregar
// console.log(arr.splice(2, 0, 50))
// console.log(arr)

// Al final
// let arr3 = arr.concat(10)
// let arr3 = arr.concat([1,2,3])
// All Principio
// let arr3 = [0].concat(arr)
// Medio
// let arr3 = arr.slice(0, 3).concat(10).concat(arr.slice(3))
// console.log(arr3)

// Modificar
// console.log(arr.splice(2, 1, 10))
// console.log(arr[2] = 10)
// console.log(arr)

// let arr4 = arr.slice(0, 3).concat(10).concat(arr.slice(4))

// Eliminar
// Al final
// console.log(arr.pop())
// console.log(arr)
// Al principio
// console.log(arr.shift())
// console.log(arr)
// Medio
// console.log(arr.splice(1, 1))
// console.log(arr)

// let arr5 = arr.slice(0, 3).concat(arr.slice(4))

// Iteraciones
// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// for(let elem of arr) {
//   console.log(elem)
// }

// for(let i in arr) {
//   console.log(i)
// }

// for(let char of str) {
//   console.log(char)
// }

// Objetos
let obj = {
  a: 1,
  'hola mundo': 2,
  hola_mundo: 3,
  'hola-mundo': 4
}

// Obtener
// console.log(obj.a)
// console.log(obj['a'])
// let prop = 'a'
// console.log(obj[prop])

// Agregar o Modificar
// console.log(obj.b = 2)
// console.log(obj['c'] = 3)
// let prop = 'd'
// console.log(obj[prop] = 4)
// console.log(obj)

// let obj3 = Object.assign({}, obj, { b: 2 }, { a: 5 })
// console.log(obj3)

// Eliminar
// delete obj.a
// console.log(obj)

for(let key in obj) {
  let value = obj[key]
  console.log(key, value)
}

// Primitivos vs Referencia
let a = [1]
let b = [1]
let c = a

console.log(a == b) // False
console.log(b == c) // False
console.log(c == a) // True
c.push(10)
console.log(a)

let x = { a: 1 }
let y = { a: 1 }
let z = x

console.log(x == y) // False
console.log(y == z) // False
console.log(z == x) // True
z.b = 2
console.log(x)

// Primitivos
// 186, true, 'hola mundo'
let i = 0

// Objeto
// Number, Boolean, String
let j = {}

