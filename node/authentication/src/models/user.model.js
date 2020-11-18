const { model, Schema, models } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      async validator(email) {
        try {
          const user = await models.User.findOne({ email });
          return !user;
        } catch(err) {
          return false;
        }
      },
      message: 'Correo ya está en uso',
    }
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;

