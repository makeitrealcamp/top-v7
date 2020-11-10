import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

class Posts extends React.Component {
  state = {
    posts: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    axios({
      method: 'get',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then(({ data }) => {
        this.setState({
          posts: data,
          loading: false,
        })
      })
      .catch((err) => {
        this.setState({
          error: err,
          loading: false,
        })
      })
  }

  render() {
    const { posts, loading, error } = this.state;
    if(loading) return <p>Loading...</p>
    if(error) return <p>Somthing went wrong</p>
    return (
      <div className="posts">
        {!!posts && posts.length > 0 && posts.map(post => (
          <div className="post" key={post.id}>
            <h1>{post.title}</h1>
            <Link to={`/posts/${post.id}`}>Ver más</Link>
          </div>
        ))}
      </div>
    )
  }
}

export default Posts
