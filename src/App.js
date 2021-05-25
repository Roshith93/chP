import Container from 'react-bootstrap/Container'

import { NavBar } from './components/NavBar'
import { HomeContainer } from './components/HomeContainer'
import { ConfirmDeleteModal } from './components/ConfirmDeleteModal'
import { Toast } from './components/ToastContainer'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
      <ConfirmDeleteModal />
      <Toast />
        <NavBar />
      <Container>
        <HomeContainer />
      </Container>
      <Footer />
    </>
  )
}

export default App
