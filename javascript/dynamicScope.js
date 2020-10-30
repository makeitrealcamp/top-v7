// 'use strict'

global.foo = 'global'
let foo = 'module'

// function bar(ctx) {
//   // let foo = 'function'
//   console.log('context: ', ctx)
//   // console.log(foo)
//   console.log(this.foo)
// }

const bar = (ctx) => {
  console.log('context: ', ctx)
  console.log(this.foo)
}

// 1. El this apunta al entorno global. Undefined si estamos en strict mode
bar('global')

// 2. El this es el objeto desde el cual estamos invocando la functión
const obj = {
  foo: 'obj',
  bar: bar,
  baz: {
    bar: bar
  }
}

// obj.bar('object')

// 3. El this es definido por el usuario
const obj2 = {
  foo: 'obj2'
}

// Soft binding
// bar.call(obj2, 'Soft binding call')
// bar.apply(obj2, ['Soft binding apply'])
// obj.bar.call(obj2, 'Extra soft binding')
// obj.baz.bar.call(obj2, 'Nested soft binding')
// bar('Again global')

// Hard binding
// const bar2 = bar.bind(obj2, 'Hard binding')
// function bar2() {
//   return bar.call(obj2, 'Hard binding')
// }

// bar2()
// bar2.call(obj)

// const obj3 = {
//   foo: 'obj3',
//   bar2: bar2
// }

// obj3.bar2()

// 4. Cuando creamos una instancia utilizando la palabra clave new
// - Se crea un nuevo objeto vacio
// - Se asocia ese objeto con otro objeto (prototype)
// - Al this se le asigna el objeto recien creado
// - Si la función no esta retornando un objeto entonces la función retorna el this

// PascalCase
// camelCase
// snake_case
// kebab-case
function Person(name, age) {
  // this = {
  //   name: name,
  //   age: age,
  //   __proto__: Person
  // }

  this.name = name
  this.age = age

  // return this
  return undefined
}

function Car() {
  this.speed = 0
}

// const maria = new Person('Maria', 24)
// console.log(maria)
// console.log(maria instanceof Car)

exports.foo = 'module'
