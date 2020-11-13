const { model, Schema, models } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator(email) {
        return models.User.findOne({ email })
          .then(user => !user)
          .catch(() => false)
      }
    }
  },
  password: {
    type: String,
    required: true,
  },
  posts: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    required: true,
  }
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;

