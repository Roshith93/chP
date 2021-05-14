import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { tempData } from './data'

export const ChirpContext = createContext()

const TOKEN_BASE_URL = 'https://test.salesforce.com/services/oauth2/token'
const CHILD_BASE_URL =
  'https://pra--PERSONAL25.my.salesforce.com/services/apexrest/EmployeeResource/'

export const ChirpProvider = (props) => {
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem('accessToken'))
  )
  const [userName, setuserName] = useState('')
  const [userDetails, setUserDetails] = useState(null)

  const [showModal, setShowModal] = useState(false)
  const [record, setRecord] = useState(null)

  // ==  get Token
  const getToken = async () => {
    const response = await axios({
      url: TOKEN_BASE_URL,
      method: 'post',
      params: {
        username: 'integrationuser@prahs.com.personal25',
        password: 'Change123X9WXRSwyLiJ8esYzZfH9YCcSF',
        grant_type: 'password',
        client_id:
          '3MVG97wqanbUM37Ktam8sz6Qni79f7xgjwJIfxp8PpsoBcM8ww5r.qdluKamSHXTHsgewcydRlmbz1oeK5dOw',
        client_secret:
          'BEEFEAECCCD9A5E344190C64A793D477FA1C60A9BFA09090351FF83D17093F11',
      },
    })
    return response
  }
  // == get User userDetails
  const setWithExpiry = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    setAccessToken(JSON.parse(localStorage.getItem('accessToken')))
  }
  const getWithExpiry = async (key) => {
    console.log('hello')
    const itemStr = localStorage.getItem(key)
    // if the item doesn't exist, return null
    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (!itemStr || now.getTime() > item.expiry) {
      await getToken()
        .then((response) => {
          setWithExpiry('accessToken', response.data.access_token)
        })
        .catch((err) => console.log(err))
    }
  }

  const getChildDetails = async () => {
    const response = await axios({
      url: CHILD_BASE_URL,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        username: 'test-krishnapparavi@prahs.com',
      },
    })
    return response
  }

  // == Add child data
  const addChildData = async (data) => {
    // let data = userDetails?.chirpDetails
    //   .filter(({ active }) => active === true)
    //   .filter((chirpList) => {
    //     if (chirpList.recordId === record) {
    //       return chirpList = [{ ...chirpList, active: false }]
    //     }
    //   })

    console.log(data)
    // let finalData = {
    //   chirpList: [{...data[0], active: false}],
    // }
    // const response = await axios({
    //   url: CHILD_BASE_URL,
    //   method: 'post',
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    //   data: finalData,
    // })
    // return response
  }
  //  == Delete child
  const deleteChild = async () => {
    let data = userDetails?.chirpDetails
      .filter(({ active }) => active === true)
      .filter((chirpList) => {
        if (chirpList.recordId === record) {
          return (chirpList = [{ ...chirpList, active: false }])
        }
      })

    let finalData = {
      chirpList: [{ ...data[0], active: false }],
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
        getChildDetails()
          .then((response) => {
            setUserDetails(response.data)
            console.log(response.data)
          })
          .catch((err) => console.log(err))
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

  useEffect(() => {
    getWithExpiry('accessToken')
    getChildDetails()
      .then((response) => {
        setUserDetails(response.data)
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    setInterval(() => {
      console.log('coming here at timeout')
      localStorage.removeItem('accessToken')
      getWithExpiry('accessToken')
    }, 120000)
  }, [accessToken])

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
        addChildData,
        deleteChild,
      }}
    >
      {props.children}
    </ChirpContext.Provider>
  )
}
