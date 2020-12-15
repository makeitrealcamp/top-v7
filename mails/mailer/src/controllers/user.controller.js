const User = require('../models/user.model');
const { transporter, welcome } = require('../utils/mailer');

module.exports = {
  async signup(req, res) {
    const user = await User.create(req.body)

    await transporter.sendMail(welcome(user))

    res.status(201).json(user)
  }
}
