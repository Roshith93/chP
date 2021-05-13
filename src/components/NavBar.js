import { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import { ChirpContext } from '../Context/ChirpContext'

export const NavBar = () => {
  const { userDetails } = useContext(ChirpContext)
  console.log(userDetails)
  return (
    <Navbar expand='lg' variant='dark' bg='dark'>
      <Container>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text href='#' style={{fontSize: 'larger', fontWeight: 'bold', color: '#fff'}}>
            {userDetails ? `Logged in as : ${userDetails?.employeeDetails?.fullName}` : 'User not logged in'}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
