const mongoose = require('mongoose');

function connect() {
  const uri = process.env.MONGO_URI;
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(uri, opts);

  mongoose.connection.once('open', () => {
    console.log('connection established successfully');
  });
  mongoose.connection.on('error', err => {
    console.log('Something went wrong', err);
  });
}

module.exports = { connect }
