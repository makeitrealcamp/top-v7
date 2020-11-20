import { useContext } from 'react'
import { AuthContext } from '../store/AuthContext';

function Button() {
  const auth = useContext(AuthContext)

  return (
    <button
      type="button"
      onClick={auth.handleLogin}
    >
      login
    </button>
  )
}

export default Button;
