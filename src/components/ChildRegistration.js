import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import RegistrationForm from './RegistrationForm'

export const ChildRegistration = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Button variant='primary' onClick={handleShow} style={{ margin: '5px' }}>
        Add child details
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header>
          <Modal.Title>Add Child Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegistrationForm close={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  )
}
