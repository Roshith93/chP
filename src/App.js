import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

import { NavBar } from './components/NavBar'
import { HomeContainer } from './components/HomeContainer'
import { UserContextProvider } from './Context/UserContext'
import { ConfirmModal } from './components/ConfirmModal'
import { Toast } from './components/ToastContainer'

const App = () => {
  return (
    <>
      <ConfirmModal />
      <Toast />
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
