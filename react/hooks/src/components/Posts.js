import { Component, useState, useEffect } from 'react'
import axios from 'axios'

// class Posts extends Component {
//   state = {
//     posts: [],
//     loading: true,
//     error: null,
//   }

//   async componentDidMount() {
//     try{
//       const { data } = await axios({
//         method: 'GET',
//         baseURL: 'https://jsonplaceholder.typicode.com',
//         url: '/posts'
//       });

//       this.setState({
//         posts: data,
//         loading: false,
//       })
//     } catch(err) {
//       this.setState({
//         error: err,
//         loading: false,
//       })
//     }
//   }

//   render() {
//     const { posts, loading, error } = this.state;

//     if(loading) return <p>loading...</p>
//     if(error) return <p>Something went wrong</p>
//     return (
//       <div>
//         {!!posts && posts.length > 0 && posts.map(post => (
//           <div key={post.id}>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

function Posts({ count }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: 'posts',
    })
      .then(({ data }) => {
        setPosts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })

    return () => {
      console.log('unmounting...')
    }
  }, [])

  function handleResize(e) {
    console.log(e.target.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  if(loading) return <p>loading...</p>
  if(error) return <p>Something went wrong</p>
  return (
    <div>
      {!!posts && posts.length > 0 && posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
