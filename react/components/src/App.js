import React from 'react';
import './App.css';

// props { name: 'Maria' }
function Paragraph({ name }) {
  return name ? <p>Hola {name}</p> : null
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>
}

class Counter extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     count: 1
  //   }

  //   this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick() {
  //   console.log(this.state)
  //   this.state.count = 2
  // }

  state = {
    static: 'Simon',
    count: 1
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{this.state.static}</p>
        <p>{this.state.count}</p>
        <Button onClick={this.handleClick}>Increment</Button>
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Paragraph name="Maria" age={25} working />
      <Paragraph name="Santiago" />
      <Paragraph name="Ana" />
      <Paragraph name="Juan" />
      <Button>Learn more</Button>
      <Button>Contact us</Button>
      <Counter title="counter" />
    </div>
  );
}

export default App;
