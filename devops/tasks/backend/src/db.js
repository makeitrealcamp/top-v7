const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options);
const connection = mongoose.connection
connection.once('open', () => console.log('Connection established successfully'));
connection.on('error', err => console.log('Something went wrong!', err));

module.exports = connection;
