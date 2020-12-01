require('dotenv').config()
const express = require('express')
const cors = require('cors')
const formData = require('./utils/formData');

const port = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(express.json())

app.post('/profile', formData, (req, res) => {
  console.log(req.body)
  console.log('profile')
})

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})
