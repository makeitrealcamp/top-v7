import { AuthProvider } from './store/AuthContext';
import NavBar from './components/NavBar'
import Button from './components/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Button />
      </AuthProvider>
    </div>
  );
}

export default App;
