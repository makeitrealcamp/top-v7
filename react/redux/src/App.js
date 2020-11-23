import { connect } from 'react-redux';
import Counter from './components/Counter';
import Button from './components/Button';
import { INCREMENT, DECREMENT, increment } from './store/countReducer';
import './App.css';
import TextArea from './components/TextArea';
import Text from './components/Text';

function App({ increment, decrement }) {
  return (
    <div className="App">
      <Counter three={3} />
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <TextArea />
      <Text />
    </div>
  );
}

// currying
// function foo(a) {
//   return function bar(b) {
//     return function baz(c) {
//       return a + b + c
//     }
//   }
// }
//
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch({ type: DECREMENT }),
  }
}

export default connect(null, mapDispatchToProps)(App);
