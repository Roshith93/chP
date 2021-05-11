import axios from 'axios'

export const API = axios.create({
 baseURL: 'https://pra--PERSONAL25.my.salesforce.com',
 headers: {}
})

export const getToken = async () => {
 const response = await axios.post('https://test.salesforce.com/services/oauth2/token', null ,{params:{
  username:'integrationuser@prahs.com.personal25',
  password: 'Change123X9WXRSwyLiJ8esYzZfH9YCcSF',
  grant_type: 'password',
  client_id: '3MVG97wqanbUM37Ktam8sz6Qni79f7xgjwJIfxp8PpsoBcM8ww5r',
  client_secret: 'BEEFEAECCCD9A5E344190C64A793D477FA1C60A9BFA09090351FF83D17093F11'
 }})
}

// https://test.salesforce.com/services/oauth2/token?username=integrationuser@prahs.com.personal25&password=Change123X9WXRSwyLiJ8esYzZfH9YCcSF&grant_type=password&client_id=3MVG97wqanbUM37Ktam8sz6Qni79f7xgjwJIfxp8PpsoBcM8ww5r.qdluKamSHXTHsgewcydRlmbz1oeK5dOw&client_secret=BEEFEAECCCD9A5E344190C64A793D477FA1C60A9BFA09090351FF83D17093F11