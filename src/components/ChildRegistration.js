import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import RegistrationForm from './RegistrationForm'
import CancellationForm from './CancellationForm'

export const ChildRegistration = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button variant='primary' onClick={() => setShow(true)} style={{margin:'5px'}}>
        Add child details
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        aria-labelledby='example-modal-sizes-title-lg'
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'  >
            Add Child Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegistrationForm />
        </Modal.Body>
      </Modal>
    </>
  )
}
