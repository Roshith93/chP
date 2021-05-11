import { useContext } from 'react'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { ChirpContext } from '../Context/PraContext'

export const UserLists = () => {
  const userDetails = useContext(ChirpContext)
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
          {userDetails &&
            userDetails?.chirpDetails.map(({ recordId,gender, email, country, age }) => {
              return (
                <tr key={recordId}>
                  <td>{email}</td>
                  <td>{country}</td>
                  <td>{age}</td>
                  <td>{gender}</td>
                  <td>
                    {' '}
                    <Button variant='link' onClick={() =>alert(recordId)}>Edit</Button>{' '}
                    <Button variant='link'>Delete</Button>{' '}
                  </td>
                </tr>
              )
            })}
        </tbody>
      </Table>
      {/* <pre>{JSON.stringify(userDetails, null, 2)}</pre> */}
    </>
  )
}
