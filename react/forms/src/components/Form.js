import React, { Component } from 'react';

class Form extends Component {
  state = {
    title: '',
    description: '',
    done: false,
    message: '',
  };

  // handleChangeTitle = (event) => {
  //   this.setState({ title: event.target.value })
  // }

  // handleChangeDescription = (e) => {
  //   this.setState({ description: e.target.value })
  // }

  handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    // console.log(value, checked)
    // checked ? checked : value
    // input => value: 'on', checked: false
    // e.target => value: 'on', checked: true
    // true ? true : 'on'
    // this.state => done: true
    // input => value: 'on', checked: true
    // e.target => value: 'on', checked: false
    // false ? false : 'on'
    // this.state => done: 'on'
    // input => value: 'on', checked: 'on'
    // e.target => value: 'on', checked: false
    // false ? false : 'on'
    // input => value: 'on', checked: 'on'
    // e.target => value: 'on', checked: false
    // false ? false : 'on'
    // input => value: 'on', checked: 'on'
    this.setState({ [name]: type === 'checkbox' ? checked : value })
    // this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)

    this.setState({
      title: '',
      description: '',
      done: false,
      message: 'Task created successfully'
    })
  }

  render() {
    // console.log(this.state)
    const { title, description, done, message } = this.state
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={this.handleChange}
            value={title}
          />
          <label
            htmlFor="description"
          >
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={this.handleChange}
            value={description}
          />
          <label
            htmlFor="done"
          >
            Complete
          </label>
          <input
            id="done"
            name="done"
            type="checkbox"
            onChange={this.handleChange}
            checked={done}
          />
          <button type="submit">Submit</button>
        </form>
        {message && message}
      </>
    )
  }
}

export default Form;
