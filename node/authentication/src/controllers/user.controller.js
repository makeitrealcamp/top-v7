const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

module.exports = {
  async signup(req, res) {
    try {
      const { email, password } = req.body;
      const encPassword = await bcrypt.hash(password, 8);
      const user = await User.create({ email, password: encPassword });

      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 },
      );

      res.status(201).json({ token });
    } catch(err) {
      res.status(400).json({ message: err.message });
    }
  },
  async signin(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if(!user) {
        throw new Error('Usuario o contraseña invalida')
      }

      const isValid = await bcrypt.compare(password, user.password);

      if(!isValid) {
        throw new Error('Usuario o contraseña invalida')
      }

      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 },
      );

      res.status(200).json({ token });
    } catch(err) {
      res.status(401).json({ message: err.message })
    }
  }
}
