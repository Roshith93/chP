import { useContext } from 'react'
import Container from 'react-bootstrap/Container'

import { NavBar } from './components/NavBar'
import { HomeContainer } from './components/HomeContainer'
import { ConfirmDeleteModal } from './components/ConfirmDeleteModal'
import { Toast } from './components/ToastContainer'
import { Footer } from './components/Footer'
import { Loading } from './components/Loading'
import { ChirpContext } from './Context/ChirpContext'

const App = () => {
  const { isUserLoggedIn } = useContext(ChirpContext)
   return isUserLoggedIn ? (
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
     <Loading/>
    )
}

export default App
