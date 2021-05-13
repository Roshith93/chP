import { useEffect, useContext } from 'react'
import axios from 'axios'

import { ChirpContext } from '../Context/ChirpContext'

const TOKEN_BASE_URL = 'https://test.salesforce.com/services/oauth2/token'
const CHILD_BASE_URL =
  'https://pra--PERSONAL25.my.salesforce.com/services/apexrest/EmployeeResource/'

export const ServiceCalls = () => {
  const { accessToken, setAccessToken } = useContext(ChirpContext)

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

  const getChildDetails = async () => {
    const response = await axios({
      url: CHILD_BASE_URL,
      method: 'post',
      headers: {
        Authorization: `Bearer 00D0v000000Doeo!ARkAQMWHfx4HcD48mE0r31MLSinMdU7FzKmhowaMspWa.PS1tq.5C0ofuBoTLVvVpTHw3Dif7b3.hA8eN.SecIq5aYW0gIsJ`,
      },
    })
    return response
  }

  useEffect(() => {
    getToken()
      .then((res) => {
        setAccessToken(res.data.access_token)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    getChildDetails()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))

  })
  return null
}

// https://test.salesforce.com/services/oauth2/token?username=integrationuser@prahs.com.personal25&password=Change123X9WXRSwyLiJ8esYzZfH9YCcSF&grant_type=password&client_id=3MVG97wqanbUM37Ktam8sz6Qni79f7xgjwJIfxp8PpsoBcM8ww5r.qdluKamSHXTHsgewcydRlmbz1oeK5dOw&client_secret=BEEFEAECCCD9A5E344190C64A793D477FA1C60A9BFA09090351FF83D17093F11