import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { tempData } from './data'
import { CHILD_BASE_URL } from '../Service'

export const ChirpContext = createContext()

export const ChirpProvider = (props) => {
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem('accessToken'))
  )
  const [userName, setuserName] = useState('')
  const [userDetails, setUserDetails] = useState(null)

  const [showModal, setShowModal] = useState(false)
  const [record, setRecord] = useState(null)

  const deleteChild = async () => {
    let data = userDetails?.chirpDetails
      .filter(({ active }) => active === true)
      .filter((chirpList) => {
        if (chirpList.recordId === record) {
          return chirpList = [{ ...chirpList, active: false }]
        }
      })

    let finalData = {
      chirpList: [{...data[0], active: false}],
    }
    console.log(finalData)
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
  const deleteChildDetails = async () => {
    console.log('coming')
    await deleteChild()
      .then((result) => {
        console.log(result.data[0].message)
        if (result.data[0].success === 'true') {
          console.log('true')

          setShowModal(false)
          toast.error('🦄 Deleted succesfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        } else if (result.data[0].success === 'false') {
          console.log('false')

          toast.error(result.data[0].message, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          setShowModal(false)
        }
      })
      .catch((err) => console.error(err))
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
