import { Component } from 'react'
import axios from 'axios'

class Private extends Component {
  state = {
    data: '',
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ data })
    } catch(err) {
      localStorage.removeItem('token');
      this.props.history.push('/login')
    }
  }

  render() {
    return <h1>Access {this.state.data === 'OK' ? 'granted' : 'denied' }</h1>
  }
}

export default Private
