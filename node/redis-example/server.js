require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const redis = require('redis');

const port = process.env.PORT || 8000;
const app = express();
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  // db: process.env.REDIS_DB,
  // password: process.env.REDIS_PASSWORD
})

client.on('connect', () => console.log('Connection established successfully'))

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  client.get('name', (err, reply) => {
    console.log(err, reply)
    if (err) {
      res.status(400).json({ message: err.message })
    }

    res.status(200).json({ name: reply })
  })
})

app.post('/', (req, res) => {
  client.set('name', req.body.name, 'EX', 10, (err, reply) => {
    if (err) {
      res.status(400).json({ message: err.message })
    }
  })
})

app.get('/greeting', (req, res) => {
  client.hgetall('person', (err, reply) => {
    if (err) {
      res.status(400).json({ message: err.message })
    }

    res.status(200).json(reply)
  })
})

app.post('/greeting', (req, res) => {
  client.hset('person', 'name', req.body.name, 'age', 25, (err, reply) => {
    if (err) {
      res.status(400).json({ message: err.message })
    }

    res.status(200).json({ message: reply })
  })
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
});

