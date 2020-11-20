import { createContext, useState } from 'react'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  const handleLogin = () => {
    setIsAuthenticated(true)
    setCurrentUser('Maria')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
