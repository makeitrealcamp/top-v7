import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom'
import Login from './pages/Login'
import Private from './pages/Private'
import { Home } from './pages/Home'

function PrivateRoute(props) {
  const token = localStorage.getItem('token')

  if(!token) return <Redirect to="/login" />
  return <Route {...props} />
}

function App() {
  // localStorage.setItem('key', 'value')
  // localStorage.setItem('name', 'maria')
  // localStorage.setItem('age', 24)
  // localStorage.setItem('working', true)
  // localStorage.setItem('services', JSON.stringify(['programming', 'testing']))
  // localStorage.setItem('obj', JSON.stringify({ name: 'simon' }))

  // console.log(localStorage.getItem('name'))
  // console.log(JSON.parse(localStorage.getItem('obj')))

  // localStorage.removeItem('working')
  // localStorage.clear();
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/private">Private</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/private" render={(props) => <Private {...props} />} />
          <Redirect exact path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
