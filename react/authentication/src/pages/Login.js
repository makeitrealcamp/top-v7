import { Component } from 'react'
import axios from 'axios'

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { data: { token } } = await axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/users/signin',
      data: { email, password }
    });

    localStorage.setItem('token', token)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button>Login</button>
      </form>
    );
  }
}

export default Login
