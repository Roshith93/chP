import React, { useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { ChirpContext } from '../Context/ChirpContext'
import { reasonForDiscontinuation } from '../Context/data'

function CancellationForm(props) {
  const { setDeregisterModal, setIsUserAlreadyRegistered } = useContext(
    ChirpContext
  )

  const initialValues = {
    option: '',
    reason: '',
    other: '',
  }
  const validationSchema = Yup.object({
    option: Yup.string().required('Please select an option'),
    reason: Yup.string().required('Please select the reason'),
    other: Yup.string()
      .required('Please enter the comments')
      .max(250, 'Maximum 250 characters'),
  })
  const onSubmit = (values, actions) => {
    let finalData = {}
    setIsUserAlreadyRegistered(false)
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
        isSubmitting,
      }) => (
        <Form>
          <Row>
            <p>
              Thank you for your participation to date. We understand that you
              would like to remove your child(ren) from the ChIRP database. No
              further review requests will be sent to you for your child(ren).
              It would be really helpful for us if you could let us know why you
              or your child(ren) no longer wish to take part to help us improve
              ChIRP in the future.
            </p>
          </Row>
          <Row>
            <div className='form-row'>
              <div className='form-group col'>
                <label>Select Gender </label>{' '}
                <div role='group' aria-labelledby='my-radio-group'>
                  <label>
                    <Field
                      type='radio'
                      name='option'
                      value='Child no longer wants to take part'
                    />{' '}
                    Child no longer wants to take part
                  </label>{' '}
                  <br />
                  <label>
                    <Field
                      type='radio'
                      name='option'
                      value='I no longer want my child to take part'
                    />{' '}
                    I no longer want my child to take part
                  </label>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className='form-row'>
              <div className='form-group col'>
                <label>Please choose one option</label>
                <Field
                  name='reason'
                  as='select'
                  className={
                    'form-control' +
                    (errors.reason && touched.reason ? ' is-invalid' : '')
                  }
                >
                  <option value=''></option>
                  {reasonForDiscontinuation.map(({ reason, label }) => (
                    <option key={reason}>{label}</option>
                  ))}
                </Field>
                <ErrorMessage
                  name='reason'
                  component='div'
                  className='invalid-feedback'
                />
              </div>
            </div>
          </Row>

          <br />
          <Button type='submit' variant='danger' style={{ margin: '5px' }}>
            I no longer wish my child(rens) to participate in chirp
          </Button>
          <Button
            type='button'
            variant='secondary'
            onClick={() => {
              props.close(false)
            }}
          >
            Cancel
          </Button>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  )
}

export default CancellationForm
