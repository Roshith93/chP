import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import { NavBar } from './components/NavBar'
import { HomeContainer } from './components/HomeContainer'
import { UserContextProvider } from './Context/UserContext'

// let axiosConfig = {
//   headers: {},
//   params: {
//     username: 'integrationuser@prahs.com.personal25',
//     password: 'Change123X9WXRSwyLiJ8esYzZfH9YCcSF',
//     grant_type: 'password',
//     client_id: '3MVG97wqanbUM37Ktam8sz6Qni79f7xgjwJIfxp8PpsoBcM8ww5r',
//     client_secret:
//       'BEEFEAECCCD9A5E344190C64A793D477FA1C60A9BFA09090351FF83D17093F11',
//   },
// }
const App = () => {
  const getToken = async () => {
    const response = await axios({
      url: 'https://test.salesforce.com/services/oauth2/token',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      },
      method: 'post',
      params: {
        username: 'integrationuser@prahs.com.personal25',
        password: 'Change123X9WXRSwyLiJ8esYzZfH9YCcSF',
        grant_type: 'password',
        client_id: '3MVG97wqanbUM37Ktam8sz6Qni79f7xgjwJIfxp8PpsoBcM8ww5r',
        client_secret:
          'BEEFEAECCCD9A5E344190C64A793D477FA1C60A9BFA09090351FF83D17093F11',
      },
    })
    console.log(response)
  }

  const getDummyData = async () => {
    const response1 = await axios({
      url: 'https://jsonplaceholder.typicode.com/users',

      method: 'get',
    })
    console.log(response1)
  }
  useEffect(() => {
    getToken()
    getDummyData()
  }, [])
  return (
    <>
      <UserContextProvider>
        <NavBar />
      </UserContextProvider>
      <Container>
        <HomeContainer />
      </Container>
    </>
  )
}

export default App
