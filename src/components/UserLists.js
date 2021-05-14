import { useContext } from 'react'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { ChirpContext } from '../Context/ChirpContext'

export const UserLists = () => {
  const {
    userDetails,
    setShowModal,
    showModal,
    setRecord,
    editChild,
  } = useContext(ChirpContext)
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Country</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userDetails ? (
            userDetails?.chirpDetails
              .filter(({ active }) => {
                  return active === true
                }
              )
              .map(({ recordId, gender, email, country, age }) => {
                if(!recordId) return <tr><td colSpan="5">No data found</td></tr>
                console.log('active')
                return (
                  <tr key={recordId}>
                    <td>{email}</td>
                    <td>{country}</td>
                    <td>{age}</td>
                    <td>{gender}</td>
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
              })
          ) : (
            <tr>
              <td colSpan='5'>No data found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}
