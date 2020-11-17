const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const port = 8080;
const app = express();

function logger(config) {
  return function(req, res, next) {
    console.log(config)
    req.user = 'Maria'
    console.log(req.method, req.path)
    next();
  }
}

function errorHandler(err, req, res, next) {
  console.log('here')
  res.status(400).send(err)
}

// app.use(logger);
// app.use('/about', logger);
app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use(morgan('dev'));
app.use(errorHandler)

app.get('/', (req, res, next) => {
  try {
    // console.log(req.user)
    throw new Error('hola error')
    res.send('hola mundo')
  } catch(err) {
    next(err)
  }
});

app.get('/about', (req, res) => {
  res.send('about')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('created')
})

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});
