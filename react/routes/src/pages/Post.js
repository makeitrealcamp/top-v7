import React from 'react'
import axios from 'axios'

class Post extends React.Component {
  state = {
    post: null,
    loading: true,
    error: null,
  }

  componentDidMount() {
    axios({
      method: 'get',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: `/posts/${this.props.match.params.id}`
    })
      .then(({ data }) => {
        this.setState({
          post: data,
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
    const { post, loading, error } = this.state;

    if(loading) return <p>Loading...</p>
    if(error) return <p>Something went wrong</p>
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <span>{post.userId}</span>
      </div>
    )
  }
}

export default Post
