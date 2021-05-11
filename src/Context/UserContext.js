import { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('MichealBerg')
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}
