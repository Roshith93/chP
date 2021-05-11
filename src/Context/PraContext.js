import { createContext, useState, useEffect } from 'react'
import { tempData } from './data'

export const ChirpContext = createContext()

export const ChirpProvider = (props) => {
  const [userData, setUserData] = useState(tempData)

  return (
    <ChirpContext.Provider value={userData}>
      {props.children}
    </ChirpContext.Provider>
  )
}
