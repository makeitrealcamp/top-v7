require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./src/db');
const taskRouter = require('./src/routes/task');

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/greet', (req, res) => {
  console.log('greet')
  res.status(200).send('hello world')
});

app.use(taskRouter);

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
)
