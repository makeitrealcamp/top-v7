import { useState } from 'react'
import Posts from './components/Posts'
import './App.css';

// class App extends Component {
//   state = {
//     count: 0
//   }

//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   render() {
//     return (
//       <div className="App">
//         <button
//           type="button"
//           onClick={this.handleClick}
//         >
//           {this.state.count}
//         </button>
//       </div>
//     );
//   }
// }

// 1. Los hooks solo se pueden utilizar dentro de otros hooks o componentes de React.
// 2. Los hooks siempre se deben ejecutar exactemente en el mismo orden.
// 3. Los hooks siempre se deben ejecutar en el primer nivel de la función.
// 4. Los hooks siempre se nombran usando el prefijo use.

function App() {
  const [count, setCount] = useState(0)

  // if(count < 3) {
  //   const [name, setName] = useState('');
  // }
  // const [age, setAge] = useState(18);
  // const [working, setWorking] = useState(false)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <button
        type="button"
        onClick={handleClick}
      >
        {count}
      </button>
      {count === 0 && <Posts count={count}/>}
    </div>
  );
}

export default App;
