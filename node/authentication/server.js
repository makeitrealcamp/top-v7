require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('./src/db');
const userRouter = require('./src/routes/user');
const { auth } = require('./src/utils/auth');

const port = process.env.PORT || 8080;
const app = express();
connect();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/users', userRouter);

app.get('/', auth, (req, res) => {
  console.log(req.user)
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
