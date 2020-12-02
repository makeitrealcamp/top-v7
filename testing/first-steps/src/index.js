exports.sum = (a, b) => {
  return a + b
}

exports.multiply = (a, b) => {
  return a * b
}

exports.person = (name, age) => {
  return {
    name,
    age,
    greet() {
      return 'hola mundo!'
    }
  }
}

exports.map = (cb) => {
  cb()
}
