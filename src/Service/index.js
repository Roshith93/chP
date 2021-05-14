import { useEffect, useContext } from 'react'
import axios from 'axios'

import { ChirpContext } from '../Context/ChirpContext'

const TOKEN_BASE_URL = 'https://test.salesforce.com/services/oauth2/token'
export const CHILD_BASE_URL =
  'https://pra--PERSONAL25.my.salesforce.com/services/apexrest/EmployeeResource/'

export const ServiceCalls = () => {
  const {
    accessToken,
    setAccessToken,
    setUserDetails,
    userDetails,
    recordID,
  } = useContext(ChirpContext)

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
  useEffect(() => {
    // if (accessToken === null) {
    // getWithExpiry('accessToken')
    // }
  }, [setAccessToken])

  useEffect(() => {
    getWithExpiry('accessToken')
    getChildDetails()
      .then((response) => {
        setUserDetails(response.data)
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }, [accessToken, userDetails])

  useEffect(() => {
    setInterval(() => {
      console.log('coming here at timeout')
      localStorage.removeItem('accessToken')
      getWithExpiry('accessToken')
    }, 120000)
  }, [accessToken])
  return null
}
