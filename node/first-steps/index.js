// CommonJS
// export default Foo
// module.exports = Foo
// import Foo from './path/to/file'
// const Foo = require('./path/to/file')
//
// export function Foo
// export { Foo }
// module.exports = { Foo }
// import { Foo } from './path/to/file'
// const { Foo } = require('./path/to/file')
const express = require('express');

const app = express();

// endpoint
app.get('/', (req, res) => {
  console.log('hola mundo!')
  res.send('<h1>Hello world</h1>')
})

app.get('/posts', (req, res) => {
  res.status(205).json([{ title: 'title 1', body: 'body 1' }])
})

app.listen(8000, () => console.log('Successfully running at http://localhost:8000'))
