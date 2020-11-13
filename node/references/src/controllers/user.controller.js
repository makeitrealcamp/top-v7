const User = require('../models/user.models');

module.exports = {
  show(req, res) {
    const { userId } = req.params;
    User
      .findById(userId)
      .select('-password')
      .populate('posts', 'title body')
      .then(user => res.status(200).json(user))
      .catch(err => res.status(404).json(err))
  },
  create(req, res) {
    User
      .create(req.body)
      .select('-password')
      .then(user => res.status(201).json(user))
      .catch(err => res.status(400).json(err))
  }
}
