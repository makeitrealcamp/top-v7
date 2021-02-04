const mongoose = require('mongoose');

function connect() {
  const mongoURI = process.env.mongoURI || 'mongodb://localhost:27017/2fa';
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(mongoURI, options);

  const { connection } = mongoose;

  connection.once('open', () => {
    console.log('Connection established successfully');
  });
  connection.on('error', () => {
    console.log('Something went wrong', error);
  });

  return connection;
}

module.exports = connect;

