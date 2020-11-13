const { Schema, model, models } = require('mongoose')

const emailRegexp = new RegExp('[a-zA-Z0-9]{5,}@[a-z]{3,5}\.com?');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El campo nombre es requerido'],
    // minlength: [7, 'El nombre es muy corto'],
    maxlength: [10, 'El nombre muy largo'],
    enum: {
      values: ['Maria', 'Juan', 'Ana', 'Tomas'],
      message: 'El nombre no es valido'
    }
  },
  age: {
    type: Number,
    required: true,
    // min: [18, 'Debes ser mayor de edad'],
    max: [70, 'La edad máxima es 70'],
    validate: [
      {
        validator(value) {
          if(value < 18) {
            return false
          }

          return true
        },
        message: 'no cumple'
      }
    ]
  },
  email: {
    type: String,
    required: true,
    match: [emailRegexp, 'Email invalido'],
    validate: [
      {
        validator(value) {
          return models.User.findOne({ email: value })
            .then(user => !user)
            .catch(() => false)
        },
        message: 'El email ya existe'
      }
    ]
  },
  working: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true
})

const User = model('User', userSchema)

module.exports = User
