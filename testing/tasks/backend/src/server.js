require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');

const port = process.env.PORT || 8000;

const app = express();
db();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/users', userRouter);
app.use('/tasks', taskRouter);

app.get('/', (req,res) => {
  res.status(200).send('Hello world')
})

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
