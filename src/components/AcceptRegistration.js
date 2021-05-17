import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const AcceptRegistration = () => {
  return (
    <Container fluid>
      <Form>
        <Row>
          <Col>
            <Card border='primary' style={{ width: 'auto' }}>
              <Card.Header>ChIRP Interest</Card.Header>
              <Card.Body>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    I have discussed ChIRP with my child(ren) and I and they
                    have agreed they are interested in taking part.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    I agree for my child(ren) to be listed in the database of
                    participants. I understand that this will include their
                    name, date of birth and gender.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    I understand that I can request for my child to be removed
                    from the database at any time.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    I understand that each child will be allocated a
                    unique number in the database and their name and date of
                    birth will not be visible in the database.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    I understand that any report generated from the database
                    will only include the allocated unique number, age and
                    gender of the child.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    I understand that the PRA system administrator will be able
                    to see my child’s month and year of birth and country in
                    which they live only.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    I understand my PRA email address will be stored in the
                    database and will be used to send me an emailed link to
                    access  any review requests.
                  </ListGroup.Item>
                </ListGroup>
                <Row className='justify-content-md-center'>
                  <Col md='auto'>
                    <Form.Group controlId='formBasicCheckbox'>
                      <Form.Check
                        type='checkbox'
                        label='I have read the above statements  agree'
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
                >
                  {true ? 'Update Registration ' : 'Submit Registration'}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
