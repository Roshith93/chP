import { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import { ChirpContext } from '../Context/PraContext'
import { UserContext } from '../Context/UserContext'
export const NavBar = () => {
  const userDetails = useContext(UserContext)
  console.log(userDetails)
  return (
    <Navbar expand='lg' variant='light' bg='light' >
      <Container>
        <Navbar.Brand href='#' >{userDetails ? userDetails : 'User not logged in'}</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
