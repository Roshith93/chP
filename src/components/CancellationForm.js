import React, { useContext } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { ChirpContext } from '../Context/ChirpContext'

function CancellationForm(props) {
  const { setDeregisterModal, setisUserAlreadyRegistered } = useContext(ChirpContext)

  const initialValues = {
    option: '',
    reason: '',
  }
  const validationSchema = Yup.object({
    option: Yup.string().required('Select option'),
    reason: Yup.string().required('Select the Reason'),
  })
  const onSubmit = (values, actions) =>{
    setisUserAlreadyRegistered(false)
  }

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque ab tempore quaerat repudiandae dolorum dolores
              consequuntur culpa? Assumenda, illo accusamus.
            </p>
          </Row>
          <Row>
            <Form.Group as={Col} md='6' controlId='validationFormik03'>
              <Form.Label>Select option</Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className='mb-3'>
                  <Form.Check
                    inline
                    label='Child no longer want to take part'
                    name='option'
                    type={type}
                    id={`inline-${type}-1`}
                    onChange={handleChange}
                    value={'Child no longer'}
                  />
                  <Form.Check
                    inline
                    label='I no longer want child to take part'
                    name='option'
                    type={type}
                    id={`inline-${type}-2`}
                    onChange={handleChange}
                    value={'I no longer'}
                  />
                </div>
              ))}
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md='12' controlId='validationFormik01'>
              <Form.Label>Child's Primary Language</Form.Label>
              <Form.Control
                as='select'
                name='primaryLanguage'
                // custom
                // className='form-control'
                value={values.primaryLanguage}
                onChange={handleChange}
                isValid={touched.primaryLanguage && !errors.primaryLanguage}
              >
                <option key={1} value='' selected>
                  Select{' '}
                </option>
                {['English', 'Spanish'].map((option) => (
                  <>
                    <option key={option}>{option}</option>
                  </>
                ))}
              </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <br />
          <Button type='submit' variant='danger'>
            I no longer wish my child(rens) to participate in chirp
          </Button>
          <Button type='button' variant='secondary' onClick={props.close()}>
            Cancel
          </Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default CancellationForm
