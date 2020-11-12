const express = require('express');
const cors = require('cors');
const { connect } = require('./src/db');
const booksRouter = require('./src/routes/book');

const port = 8080;
const app = express();
connect();

app.use(express.json());
app.use(cors());

app.use('/books', booksRouter)

app.listen(port, () => console.log(
  `App running at http://localhost:${port}`
));
