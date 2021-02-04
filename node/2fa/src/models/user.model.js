const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: String,
  password: String,
  secret: String,
  enable2fa: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;

