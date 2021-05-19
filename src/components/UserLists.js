import { useContext } from 'react'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { ChirpContext } from '../Context/ChirpContext'

export const UserLists = () => {
  const {
    chirpDetails,
    setShowModal,
    showModal,
    setRecord,
    editChild,
    setIsUserAlreadyRegistered,
    isUserAlreadyRegistered,
    setIsLastRecord,
    setDeregisterModal,
  } = useContext(ChirpContext)
  console.log(chirpDetails)
  const activeData = chirpDetails
    ? chirpDetails.filter(({ active }) => active === true)
    : []
  if (activeData.length === 1 && isUserAlreadyRegistered) {
    // setIsUserAlreadyRegistered(false)
    // call the deregister modal
    setDeregisterModal(true)
  } else {
    // call the deregister modal
    setIsLastRecord(true)
    // setIsUserAlreadyRegistered(true)
  }
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Country</th>
            <th>Language</th>
            <th>Gender</th>
            <th>Action</th>
            <th>Proficiency</th>
          </tr>
        </thead>
        <tbody>
          {activeData.length === 0 ? (
            <tr>
              <td colSpan='6'>No data found</td>
            </tr>
          ) : (
            activeData.map(
              ({ recordId, gender, email, country, language, proficiency }) => {
                return (
                  <tr key={recordId}>
                    <td>{email}</td>
                    <td>{country}</td>
                    <td>{language}</td>
                    <td>{gender}</td>
                    <td>{proficiency}</td>
                    <td>
                      {' '}
                      <Button
                        variant='link'
                        onClick={() => editChild(recordId)}
                      >
                        Edit
                      </Button>{' '}
                      <Button
                        variant='link'
                        onClick={() => {
                          setRecord(recordId)
                          setShowModal(true)
                        }}
                      >
                        Delete
                      </Button>{' '}
                    </td>
                  </tr>
                )
              }
            )
          )}
        </tbody>
      </Table>
    </>
  )
}
