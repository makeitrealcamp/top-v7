const mongoose = require('mongoose');

function db() {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/tasks';

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(uri, options);
  const connection = mongoose.connection
  connection.once('open', () => console.log('Connection established successfully'));
  connection.on('error', err => console.log('Something went wrong!', err));

  return connection;
}

module.exports = db;
