import { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import { ChirpContext } from '../Context/PraContext'
import { UserContext } from '../Context/UserContext'

export const NavBar = () => {
  const { accessToken } = useContext(ChirpContext)
  console.log(accessToken)
  return (
    <Navbar expand='lg' variant='light' bg='light'>
      <Container>
        <Navbar.Brand href='#'>
          {accessToken ? accessToken : 'User not logged in'}
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
