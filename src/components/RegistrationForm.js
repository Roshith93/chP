import React, { useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

import { tempData } from '../Context/data'

const languages = tempData.languageDetails

const validationSchema = Yup.object({
  month: Yup.string().required('Enter the Month'),
  year: Yup.string().required('Enter the Year'),
  gender: Yup.string().required('Select gender'),
  primaryLanguage: Yup.string().required('Select the primary Languagae'),
  proficiencyLevel: Yup.string().required('Please select proficiency level'),
})
function RegistrationForm(props) {
  const initialValues = {
    month: '',
    year: '',
    gender: '',
    primaryLanguage: '',
    proficiencyLevel: '',
  }

  const onSubmit = (values, actions) => {
    console.log(values)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }, 1000)

    console.log(values)
  }

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({
        touched,
        errors,
        isSubmitting,
        dirty,
        setFieldValue,
        values,
        handleChange
      }) => (
        <Form>
          <div className='form-row'>
            <div className='form-group col'>
              <label>Select Month</label>
              <Field
                name='month'
                as='select'
                className={
                  'form-control' +
                  (errors.month && touched.month ? ' is-invalid' : '')
                }
              >
                <option value=''></option>
                {['Jan', 'Feb'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </Field>
              <ErrorMessage
                name='month'
                component='div'
                className='invalid-feedback'
              />
            </div>
            <br />
            <div className='form-group col'>
              <label>Select Year</label>
              <Field
                name='year'
                as='select'
                className={
                  'form-control' +
                  (errors.year && touched.year ? ' is-invalid' : '')
                }
              >
                <option value=''></option>
                {['2021', '2020', '2019'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </Field>
              <ErrorMessage
                name='year'
                component='div'
                className='invalid-feedback'
              />
            </div>
            <br />
          </div>
          <div className='form-group col'>
            <label>Select Gender </label>

            <div class='custom-control custom-radio'>
              <input
                type='radio'
                class='custom-control-input'
                id='Male'
                name='gender'
                value={'male'}
                onChange={handleChange}
              />{' '}
              <label class='custom-control-label' for='Male'>
                Male
              </label>{' '}
              <input
                type='radio'
                class='custom-control-input'
                id='Female'
                name='gender'
                value={'Female'}
                onChange={handleChange}
              />{' '}
              <label class='custom-control-label' for='Female'>
                Female
              </label>{' '}
            </div>
          </div>
          <br />
          <div className='form-row'>
            <div className='form-group col'>
              <label>Select Primary Language</label>
              <Field
                name='primaryLanguage'
                as='select'
                className={
                  'form-control' +
                  (errors.primaryLanguage && touched.primaryLanguage
                    ? ' is-invalid'
                    : '')
                }
              >
                <option value=''></option>
                {languages.map(({ languageId, name }) => (
                  <option key={languageId}>{name}</option>
                ))}
              </Field>
              <ErrorMessage
                name='primaryLanguage'
                component='div'
                className='invalid-feedback'
              />
            </div>
            <br />
            <div className='form-group col'>
              <label>Select Proficiency Level</label>
              <Field
                name='proficiencyLevel'
                as='select'
                className={
                  'form-control' +
                  (errors.proficiencyLevel && touched.proficiencyLevel
                    ? ' is-invalid'
                    : '')
                }
              >
                <option value=''></option>
                {['Beginner', 'Intermediate', 'Expert'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </Field>
              <ErrorMessage
                name='proficiencyLevel'
                component='div'
                className='invalid-feedback'
              />
            </div>
          </div>

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
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
