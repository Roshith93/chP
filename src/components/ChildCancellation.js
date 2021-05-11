import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import CancellationForm from './CancellationForm'

export const ChildCancellation = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button variant='primary' onClick={() => setShow(true)}>
        Child Cancellation
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        aria-labelledby='example-modal-sizes-title-lg'
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CancellationForm/>
        </Modal.Body>
      </Modal>
    </>
  )
}
