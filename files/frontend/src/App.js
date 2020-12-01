import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [image, setImage] = useState(null)
  const [file, setFile] = useState(null)
  const [username, setUsername] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData()
    data.append('username', username)
    if(file) {
      console.log(typeof file)
      for(let i = 0; i < file.length; i++) {
        data.append(`file_${i}`, file[i], file[i].name)
      }
    }

    const response = await axios({
      method: 'POST',
      baseURL: 'http://localhost:8000',
      url: '/profile',
      data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    console.log(response)
  }

  function readFile(file) {
    const reader = new FileReader();

    reader.onload = e => setImage(e.target.result)
    // reader.onload = e => console.log(e.target.result)

    reader.readAsDataURL(file)
  }

  function handleChange(e) {
    // console.dir(e.target.files)
    // console.log(e.target.files[0].size)
    // if(e.target.files.length > 0 && e.target.files[0].size < 1024 * 1024 * 5) {
    //   readFile(e.target.files[0])
    //   setFile(e.target.files[0])
    // }
    setFile(e.target.files)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <label htmlFor="file">Imagen</label>
        <input
          type="file"
          accept="image/*"
          multiple
          name="file"
          id="file"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
      {!!image && (
        <img src={image} alt="upload preview" />
      )}
    </div>
  );
}

export default App;
