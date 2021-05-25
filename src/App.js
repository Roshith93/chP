import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

import { NavBar } from './components/NavBar'
import { HomeContainer } from './components/HomeContainer'
import { UserContextProvider } from './Context/UserContext'
import { ConfirmDeleteModal } from './components/ConfirmDeleteModal'
import { Toast } from './components/ToastContainer'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
      <ConfirmDeleteModal />
      <Toast />
      <UserContextProvider>
        <NavBar />
      </UserContextProvider>
      <Container>
        <HomeContainer />
      </Container>
      <Footer />
    </>
  )
}

export default App
