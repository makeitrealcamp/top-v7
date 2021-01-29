const { sum } = require('../_utils/utils');

module.exports = (req, res) => {
  const { a, b } = req.body

  const result = sum(a, b)
  res.status(200).json({ result })
}
