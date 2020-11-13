const mongoose = require('mongoose');

function connect() {
  mongoose.connect('mongodb://localhost:27017/validations', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection.once('open', () => {
    console.log('Connection established successfully')
  })
  mongoose.connection.on('error', () => {
    console.log('Something went wrong', err)
  })

  return mongoose.connection
}

module.exports = { connect }
