import { useContext, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'

import { ChirpContext } from '../Context/ChirpContext'

export const AuthComponent = () => {
  const [show, setShow] = useState(true)
  const { error } = useContext(ChirpContext)
  let loginError = null
  if (error) {
    loginError = (
      <>
        {' '}
        <p>{error.message}</p>
        <p>{error.debug}</p>
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
                onClose={() => setShow(false)}
                dismissible
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
