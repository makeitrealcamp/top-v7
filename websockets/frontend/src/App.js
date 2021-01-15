import { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client'
import './App.css';

function App() {
  const ref = useRef()

  useEffect(() => {
    ref.current = io('http://localhost:8000')

    ref.current.on('welcome', data => console.log(data.message))

    ref.current.on('broadcast', data => console.log(data))

    ref.current.on('private', data => console.log(data))

    return () => {
      ref.current.removeAllListeners()
      ref.current.close()
    }
  }, [])

  function handleEmit() {
    ref.current.emit('message', 'hola a todos')
  }

  function joinRoom() {
    ref.current.emit('join room')
  }

  return (
    <div className="App">
      <button
        type="button"
        onClick={handleEmit}
      >
        Enviar
      </button>
      <button
        type="button"
        onClick={joinRoom}
      >
        Unirme
      </button>
    </div>
  );
}

export default App;
