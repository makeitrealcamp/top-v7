import { Component, useState, useEffect, useReducer } from 'react'
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

const SET_POSTS = 'SET_POSTS'
const SET_ERRORS = 'SET_ERRORS'

function reducer(state, action) {
  switch(action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case SET_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}

const initialState = {
  posts: [],
  loading: true,
  error: null
}

function usePosts() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: 'posts',
    })
      .then(({ data }) => {
        dispatch({ type: SET_POSTS, payload: data })
      })
      .catch(err => {
        dispatch({ type: SET_ERRORS, payload: err })
      })

    return () => {
      console.log('unmounting...')
    }
  }, [])

  return state;
}

function Posts({ count }) {
  const { loading, error, posts } = usePosts();

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
