import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About';
import {NotFound} from './pages/NotFound';
import Posts from './pages/Posts'
import Post from './pages/Post'

// URL
// protocolo - dominio - :puerto - path - query/search (opt) - hash (opt)
// https://github.com:80/route/to/resource?name=maria&age=24#ref
// parametros de ruta
// https://github.com/:username/:repo/
function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/:name" component={About} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
        {/*<Route path="*" component={NotFound} />*/}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
