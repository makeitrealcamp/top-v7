import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts1'
    })
      .then(({ data }) => {
        setPosts(data)
      })
      .catch((err) => {
        setError(err)
      })
  }, [])

  if(error) return <p>Something went wrong</p>
  return (
    <div className="App">
      {!!posts && posts.length > 0 && posts.map(({ id, title, body }) => {
        return (
          <div
            data-testid="post"
            key={id}
          >
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
