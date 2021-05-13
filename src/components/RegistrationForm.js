import React, { useContext } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { tempData } from '../Context/data'

const languages = tempData.languageDetails

function RegistrationForm(props) {
  const initialValues = {
    month: '',
    year: '',
    gender: '',
    primaryLanguage: '',
    proficiencyLevel: '',
  }
  const validationSchema = Yup.object({
    month: Yup.string().required('Enter the Month'),
    year: Yup.string().required('Enter the Year'),
    gender: Yup.string().required('Select gender'),
    primaryLanguage: Yup.string().required('Select the primary Languagae'),
    proficiencyLevel: Yup.string().required('Please select proficiency level'),
  })
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }, 1000)
    tempData.chirpDetails.push({
      ...values,
      year: 2018,
      recordId: 'aFl0v000000024ACAQ',
      reason: null,
      proficiency: 'Child',
      parent: 'a0y0v000001GjwCAAS',
      month: 'March',
      language: 'English',
      gender: 'Male',
      email: 'abc@cdef.com',
      country: 'India',
      age: 3,
      active: true,
    })
    console.log(values)
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
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md='6' controlId='validationFormik01'>
              <Form.Label>Select Month</Form.Label>
              <Form.Control
                as='select'
                name='month'
                // custom
                // className='form-control'
                value={values.month}
                onChange={handleChange}
                isValid={touched.month && !errors.month}
              >
                <option key={1} value='' selected>
                  Select{' '}
                </option>
                {['Jan', 'Feb'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='6' controlId='validationFormik02'>
              <Form.Label>Select Year</Form.Label>
              <Form.Control
                name='year'
                as='select'
                value={values.year}
                onChange={handleChange}
                isValid={touched.year && !errors.year}
              >
                <option key={1} value='' selected>
                  Select{' '}
                </option>
                {languages.map(({ languageId, name }) => (
                  <option key={languageId}>{name}</option>
                ))}
              </Form.Control>

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md='6' controlId='validationFormik03'>
              <Form.Label>Select Gender</Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className='mb-3'>
                  <Form.Check
                    inline
                    label='Male'
                    name='gender'
                    type={type}
                    id={`inline-${type}-1`}
                    onChange={handleChange}
                    value={'male'}
                  />
                  <Form.Check
                    inline
                    label='Female'
                    name='gender'
                    type={type}
                    id={`inline-${type}-2`}
                    onChange={handleChange}
                    value={'Female'}
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
                {languages.map(({ languageId, name }) => (
                  <option key={languageId}>{name}</option>
                ))}
              </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md='12' controlId='validationFormik01'>
              <Form.Label>Child's Primary Language</Form.Label>
              <Form.Control
                as='select'
                name='proficiencyLevel'
                // custom
                // className='form-control'
                value={values.proficiencyLevel}
                onChange={handleChange}
                isValid={touched.proficiencyLevel && !errors.proficiencyLevel}
              >
                <option key={1} value='-1' selected>
                  Select{' '}
                </option>
                {['Beginner', 'Expert'].map((option) => (
                  <>
                    <option key={option}>{option}</option>
                  </>
                ))}
              </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <br />
          <Button
            type='submit'
            disabled={isSubmitting}
            style={{ margin: '5px' }}
          >
            {isSubmitting ? 'Please wait...' : 'Submit'}
          </Button>
          <Button
            type='button'
            disabled={isSubmitting}
            onClick={() => props.close(false)}
            variant='secondary'
            style={{ margin: '5px' }}
          >
            Cancel
          </Button>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
