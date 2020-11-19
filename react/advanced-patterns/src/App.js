import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import './App.css';

// HOF o HOC
//
// function foo(Component) {
//   const improvements = ''
//   return function (props) {
//     return (
//       <Component
//         {...improvements}
//         {...props}
//       />
//     )
//   }
// }
//
// Render Props
//
// class Route extends React.Component {
//   state = {
//     history: {},
//     location: {},
//     match: {},
//     results: [],
//   }
//
//   async componentDidMount() {
//     const res = await axios({ method: GET })
//     this.setState({ results: res })
//   }
//
//   handleSubmit
//
//   return this.props.render(state, results)
// }
//
// Hooks

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="*" render={(props) => <Home something={1} {...props} />}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
