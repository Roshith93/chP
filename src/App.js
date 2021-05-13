import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import { NavBar } from './components/NavBar'
import { HomeContainer } from './components/HomeContainer'
import { UserContextProvider } from './Context/UserContext'

const App = () => {
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
