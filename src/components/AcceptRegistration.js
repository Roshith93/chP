import { useContext, useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { ChirpContext } from '../Context/ChirpContext'
import { agreement } from '../Context/data'
import { SuccessToastEmitter, ErrorToastEmitter } from './ToastContainer'
import { marginTop } from './styles'

export const AcceptRegistration = () => {
  const {
    isUserAlreadyRegistered,                 
    setIsUserAlreadyRegistered, 
    addDataToServer,
    chirpList,
    setIsDataSubmitted,
    checkBoxStatus,
    setCheckBoxStatus,
  } = useContext(ChirpContext)

  useEffect(() => {
    setCheckBoxStatus(isUserAlreadyRegistered)
  },[isUserAlreadyRegistered])

  const triggerAddDataToServer = () => {
    console.log(checkBoxStatus)
    if (checkBoxStatus) {
      addDataToServer()
        .then((res) => {
          setIsDataSubmitted(Math.random())
          SuccessToastEmitter({ message: 'Successfully updated.' })
        })
        .catch((err) => ErrorToastEmitter({ message: 'Some Error Occured' }))
    }
  }
  const handleCheckboxChange = (e) => {
    setCheckBoxStatus(!checkBoxStatus)
  }
  let buttondisable =
    chirpList ?
    chirpList.filter(({ active }) => active === true).length > 0 : false
    console.log(buttondisable)
  return (
    <Container fluid style={marginTop}>
      {/* <Form> */}
      <Row>
        <Col>
          <Card border='primary' style={{ width: 'auto' }}>
            <Card.Header>ChIRP Interest</Card.Header>
            <Card.Body>
              <ListGroup variant='flush'>
                {agreement.map(({ id, label }) => {
                  return <ListGroup.Item key={id}>{label}</ListGroup.Item>
                })}
              </ListGroup>
              <Row className='justify-content-md-center'>
                <Col md='auto'>
                  <Form.Group controlId='formBasicCheckbox'>
                    <Form.Check
                      type='checkbox'
                      label='I have read the above statements  agree'
                      disabled={checkBoxStatus}
                      checked={checkBoxStatus }
                      onClick={handleCheckboxChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row className='justify-content-md-center'>
            <Col md='auto'>
              <Button
                variant='primary'
                type='submit'
                style={{ margin: '10px' }}
                onClick={triggerAddDataToServer}
                disabled={isUserAlreadyRegistered && buttondisable}
              >
                {isUserAlreadyRegistered
                  ? 'Update Registration '
                  : 'Submit Registration'}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* </Form> */}
    </Container>
  )
}
