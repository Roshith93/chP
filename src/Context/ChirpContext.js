import { createContext, useState, useEffect } from 'react'
import { tempData } from './data'
import { getToken } from '../Service'

export const ChirpContext = createContext()

export const ChirpProvider = (props) => {
  const [accessToken, setAccessToken] = useState('')
  const [userDetails, setUserDetails] = useState(tempData?.chirpDetails)

  useEffect(() => {
    // getToken()
    //   .then((res) => {
    //     setAccessToken(res.data.access_token)
    //     console.log(res.data.access_token)
    //   })
    //   .catch((err) => console.log(err))
  }, [])
  return (
    <ChirpContext.Provider value={{ userDetails, accessToken, setAccessToken }}>
      {props.children}
    </ChirpContext.Provider>
  )
}
