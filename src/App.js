import { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container'

import { NavBar } from './components/NavBar'
import { HomeContainer } from './components/HomeContainer'
import { ConfirmDeleteModal } from './components/ConfirmDeleteModal'
import { Toast } from './components/ToastContainer'
import { Footer } from './components/Footer'
import { Loading } from './components/Loading'
import { AuthComponent } from './components/AuthComponent'
import { ChirpContext } from './Context/ChirpContext'

const App = () => {
  const { isAuthenticated, login, error } = useContext(ChirpContext)

  useEffect(() => {
    
    setTimeout(() => {
      login()
    },1000)
  }, [])
  return isAuthenticated ? (
    <>
      <ConfirmDeleteModal />
      <Toast />
      <NavBar />
      <Container>
        <HomeContainer />
      </Container>
      <Footer />
    </>
  ) : (
    error ? <AuthComponent ></AuthComponent>: <Loading message="Loading..."/>
  )
}

export default App
