import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


function RegistrationForm() {
  const initialValues = {
    month:'',
    year:'',
    gender:'',
    primaryLanguage:'',
    proficiencyLevel:'',
  }
  const validationSchema = Yup.object({
    month: Yup.string().required('Enter the Month'),
    year: Yup.string().required('Enter the Year'),
    gender: Yup.string().required('Select gender'),
    primaryLanguage: Yup.string().required('Select the primary Languagae'),
    proficiencyLevel: Yup.string().required('Please select proficiency level'),
  })
  const onSubmit = (values, actions) => console.log(values)

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
                {['2021', '2021'].map((option) => (
                  <option key={option}>{option}</option>
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
                {['English', 'Spanish'].map((option) => (
                  <>
                    <option key={option}>{option}</option>
                  </>
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
          <br/>
          <Button type='submit'>Submit </Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
