const mongoose = require('mongoose');

function connect() {
  mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once('open', () => console.log(
    'Connection established successfully'
  ));
  mongoose.connection.on('error', (err) => console.log(
    'Something went wrong!', err
  ));

  return mongoose.connection
}

module.exports = { connect }
