import { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import { ChirpContext } from '../Context/ChirpContext'

export const NavBar = () => {
  const { accessToken } = useContext(ChirpContext)
  console.log(accessToken)
  return (
    <Navbar expand='lg' variant='dark' bg='dark'>
      <Container>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text href='#' style={{fontSize: 'larger', fontWeight: 'bold', color: '#fff'}}>
            {accessToken ? `Username : ${accessToken}` : 'User not logged in'}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
