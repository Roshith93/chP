import { useContext } from 'react'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { ChirpContext } from '../Context/ChirpContext'

export const UserLists = () => {
  const {
    chirpList,
    setShowModal,
    showModal,
    setRecord,
    editChild,
    setIsUserAlreadyRegistered,
    isUserAlreadyRegistered,
    setIsLastRecord,
    setDeregisterModal,
  } = useContext(ChirpContext)
  console.log(chirpList)
  const activeData = chirpList
    ? chirpList.filter(({ active }) => active === true)
    : []
  if (activeData.length === 1 && isUserAlreadyRegistered) {
    // setIsUserAlreadyRegistered(false)
    // call the deregister modal
    // setDeregisterModal(true)
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
            <th>Child's DOB</th>
            <th>Child's Gender</th>
            <th>Child's Primary Language</th>
            <th>Child's Reading English Proficiency Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {activeData.length === 0 ? (
            <tr>
              <td colSpan='6'>No data found</td>
            </tr>
          ) : (
            activeData.map(
              ({ recordId, gender, month, year, language, proficiency }) => {
                return (
                  <tr key={recordId}>
                    <td>{`${month} ${year}`}</td>
                    <td>{gender}</td>
                    <td>{language}</td>
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
