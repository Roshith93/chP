import { useContext, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'

import { ChirpContext } from '../Context/ChirpContext'

export const AuthComponent = () => {
  const [show, setShow] = useState(true)
  const { error } = useContext(ChirpContext)
  console.log(error)
  let loginError = null
  if (error) {
    loginError = (
      <>
        {' '}
        <p>{error.message || error}</p>
        <p>{error.debug || null}</p>
      </>
    )
  }
  return (
    <>
      <Router>
        <Route
          exact
          path='/'
          render={() =>
            show ? (
              <Alert
                variant='danger'
                onClose={() => window.location.reload()}
                dismissible
                closeLabel="Reload page"
              >
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                {loginError}
              </Alert>
            ) : null
          }
        />
      </Router>
    </>
  )
}
