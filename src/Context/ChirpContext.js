import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { tempData } from './data'
import { CHILD_BASE_URL } from '../Service'

export const ChirpContext = createContext()

export const ChirpProvider = (props) => {
  const [accessToken, setAccessToken] = useState('')
  const [userName, setuserName] = useState('')
  const [userDetails, setUserDetails] = useState(null)

  const [showModal, setShowModal] = useState(false)
  const [record, setRecord] = useState(null)

  const deleteChildDetails = async () => {
    let data = userDetails?.chirpDetails.filter(({ recordId }) => {
      return recordId === record
    })
    console.log(data[0])
    let stringy = JSON.stringify(data[0])
    let finalData2 = {
      "chirpList": [{
        stringy
      }]
    }
  //   let finalData = {
  //     "chirpList": [
  //        {
  //       "year": 2010,
  //       "recordId": "aFl0v0000008R9rCAE",
  //       "reason": null,
  //       "proficiency": "Child",
  //       "parent": "a0y0v000001dPwcAAE",
  //       "month": "April",
  //       "language": "English",
  //       "gender": "Male",
  //       "email": "test-krishnapparavi@prahs.com",
  //       "country": "India",
  //       "age": 10,
  //       "active": true
  //     }
  //     ]
  // }
      
    // let serverData = {JSON.stringify(data)}
    const response = await axios({
      url: CHILD_BASE_URL,
      method: 'patch',
      headers: {
        Authorization: `Bearer 00D0v000000Doeo!ARkAQMWHfx4HcD48mE0r31MLSinMdU7FzKmhowaMspWa.PS1tq.5C0ofuBoTLVvVpTHw3Dif7b3.hA8eN.SecIq5aYW0gIsJ`,
      },
      data: finalData2,
    })
    return response
  }


  return (
    <ChirpContext.Provider
      value={{
        userDetails,
        setUserDetails,
        accessToken,
        setAccessToken,
        showModal,
        setShowModal,
        record,
        setRecord,
        deleteChildDetails,
      }}
    >
      {props.children}
    </ChirpContext.Provider>
  )
}
