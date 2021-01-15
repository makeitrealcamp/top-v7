const express = require('express');
const SocketIO = require('socket.io');
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = SocketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

io.on('connection', socket => {
  console.log('new connection')
  socket.emit('welcome', { message: 'hola mundo' })

  socket.on('message', data => {
    io.emit('broadcast', 'new user says hello')
    io.to('some room').emit('private', 'hola private')
  })

  socket.on('join room', () => {
    console.log('new user in room')
    socket.join('some room')
  })

  socket.on('disconnet', () => {
    console.log('user disconnected')
  })
})

server.listen(8000, () => console.log('server running'))
