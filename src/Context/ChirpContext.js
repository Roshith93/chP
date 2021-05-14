import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { tempData } from './data'
import { CHILD_BASE_URL } from '../Service'

export const ChirpContext = createContext()

export const ChirpProvider = (props) => {
  const [accessToken, setAccessToken] = useState(JSON.parse(localStorage.getItem('accessToken')))
  const [userName, setuserName] = useState('')
  const [userDetails, setUserDetails] = useState(null)

  const [showModal, setShowModal] = useState(false)
  const [record, setRecord] = useState(null)

  const deleteChildDetails = async () => {
    let data = userDetails?.chirpDetails.filter(({ recordId }) => {
      return recordId === record
    })
    let stringy = data && JSON.stringify(data[0])
    let finalData = {
      "chirpList": [{
        stringy
      }]
    }
    const response = await axios({
      url: CHILD_BASE_URL,
      method: 'patch',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: finalData,
    })
    return response
  }
  deleteChildDetails().then(result => {
    console.log(result.success)
  })

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
