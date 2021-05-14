import { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { ChirpContext } from '../Context/ChirpContext'

export const ConfirmModal = () => {
  const { showModal, setShowModal, deleteChildDetails } = useContext(
    ChirpContext
  )
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete the child?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant='danger' onClick={deleteChildDetails}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}