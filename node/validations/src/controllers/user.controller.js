const User = require('../models/user.model');

module.exports = {
  create(req, res) {
    User
      .create(req.body)
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
}
