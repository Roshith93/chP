import { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { ChirpContext } from '../Context/ChirpContext'

export const ConfirmDeleteModal = () => {
  const { showModal, setShowModal, deleteChildDetails } = useContext(
    ChirpContext
  )
  const deleteRecord = () => {
    deleteChildDetails().then((result) => {
      setShowModal(false)
      console.log(result)
    })
  }
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
          <Button variant='danger' onClick={deleteRecord}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
