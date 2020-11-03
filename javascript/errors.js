'use strict'

// const name = 'maria'
// console.log(name)
// name()

// let a, b, c
// for(let i = 0; i < name.length; i++) {
//   console.log(i)
// }

// try {
//   console.log(notDefined)
// } catch(err) {
//   console.log('Ups something went wrong')
//   console.log(err.message)
//   console.log(err.name)
//   console.log(err.stack)
// }
class DivideByZeroError extends Error {
  constructor(message) {
    super(message)
    this.name = 'DivideByZeroError'
  }
}

function division(a, b) {
  if(b === 0) {
    throw new DivideByZeroError('Cannot divide by zero')
  }

  return a / b
}

try {
  division(1, 0)
} catch(err) {
  console.log(err.name, err.message)
}
