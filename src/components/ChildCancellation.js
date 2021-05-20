import { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import CancellationForm from './CancellationForm'
import { ChirpContext } from '../Context/ChirpContext'

export const ChildCancellation = () => {
  const { deregisterModal, setDeregisterModal } = useContext(ChirpContext)
  console.log(deregisterModal)
  return (
    <>
      {/* <Button variant='primary' onClick={() => setDeregisterModal(true)}>
        Child Cancellation
      </Button> */}

      <Modal
        show={deregisterModal}
        onHide={() => setDeregisterModal(false)}
        dialogClassName='modal-90w'
        aria-labelledby='example-modal-sizes-title-lg'
        size='lg'
      >
        <Modal.Header>
          <Modal.Title id='example-modal-sizes-title-lg'>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CancellationForm  close={() => setDeregisterModal(false)}/>
        </Modal.Body>
      </Modal>
    </>
  )
}
