import { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import { ChirpContext } from '../Context/ChirpContext'

export const NavBar = () => {
  const { employeeDetails } = useContext(ChirpContext)
  console.log(employeeDetails)
  return (
    <Navbar expand='lg' variant='dark' bg='dark'>
      <Navbar.Brand
        href='#home'
        style={{
          paddingLeft: '10px',
          fontSize: 'larger',
          fontWeight: 'bold',
          color: '#fff',
        }}
      >
        <img
          alt=''
          src='/images/sub_logo.jpg'
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        Children's Internal Review Panel (ChiRP)
      </Navbar.Brand>
      <Container>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text
            href='#'
            style={{ fontSize: 'larger', fontWeight: 'bold', color: '#fff' }}
          >
            {employeeDetails
              ? `Logged in as : ${employeeDetails?.fullName}`
              : 'User not logged in'}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
