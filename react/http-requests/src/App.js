import React from 'react';
import axios from 'axios';
import './App.css';

// JSON
// JavaScript Object Notation
// {
//   "name": "Simon",
//   "age": 29
// }

class App extends React.Component {
  // mount
  //   X componentWillMount
  //   render
  //   componetDidMount
  //
  // update
  //   shouldComponentUpdate
  //   X componentWillUpdate
  //   render
  //   componentDidUpdate
  //
  // unmount
  //   componetWillUnmount
  state = {
    posts: [],
    loading: true,
    error: null,
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.setState({
        posts: data,
        loading: false
      })
    } catch(err) {
      this.setState({
        error: err,
        loading: false,
      })
    } finally {
      console.log('always')
    }
    // axios({
    //   method: 'GET',
    //   url: 'https://jsonplaceholder.typicode.com/posts/',
      // baseURL: 'http://localhost:8080',
      // url: '/posts'
    // })
    //   .then(({ data }) => {
    //     this.setState({
    //       posts: data,
    //       loading: false,
    //     })
    //   })
    //   .catch((err) => {
    //     this.setState({
    //       error: err,
    //       loading: false,
    //     })
    //   })
    //   .finally(() => console.log('always'))
  }

  render() {
    const { posts, loading, error } = this.state;

    if(loading) return <p>Loading...</p>
    if(error) return <p>Ups! Something went wrong</p>
    return (
      <div className="App">
        {!!posts && posts.length > 0 && posts.map(post => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
