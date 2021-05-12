import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import { NavBar } from './components/NavBar'
import { HomeContainer } from './components/HomeContainer'
import { UserContextProvider } from './Context/UserContext'


const App = () => {
  const getToken = async () => {
    const response = await axios({
      url: 'https://test.salesforce.com/services/oauth2/token',
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
    console.log(response)
  }

  useEffect(() => {
    getToken()
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
