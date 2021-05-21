import React, { useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { v4 as uuidv4 } from 'uuid'

// import Form from 'react-bootstrap/Form'
import { toast } from 'react-toastify'

import { generateArrayOfYears } from '../Context/data'
import { ChirpContext } from '../Context/ChirpContext'

const validationSchema = Yup.object({
  month: Yup.string().required('Enter the Month'),
  year: Yup.string().required('Enter the Year'),
  gender: Yup.string().required('Select gender'),
  language: Yup.string().required('Select the primary Languagae'),
  proficiency: Yup.string().required('Please select proficiency level'),
})
function RegistrationForm(props) {
  const {
    addChildData,
    loadedData,
    setLoadedData,
    record,
    setRecord,
    editChildData,
    getChildDetails,
    employeeDetails,
    languageDetails,
  } = useContext(ChirpContext)
  const initialValues = {
    month: '',
    year: '',
    gender: '',
    language: '',
    proficiency: '',
  }

  const onSubmit = (values, actions) => {
    let finalData = {
      ...values,
      age: 10,
      active: true,
      country: employeeDetails.country,
      email: employeeDetails.emailAddress,
      empId: employeeDetails.empoyeeId,
      recordId: record ? record : uuidv4(),
    }
    console.log(finalData)
    setTimeout(() => {
      record
        ? editChildData(finalData)
            .then((result) => {
              props.close(false)
              actions.setSubmitting(false)
              // getChildDetails()
              //   .then((response) => {
              //     setUserDetails(response.data)
              //     console.log(response.data)
              //   })
              //   .catch((err) => console.log(err))
              toast.success('🦄 Child Added succesfully!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              actions.resetForm()
              setRecord(null)
            })
            .catch((err) => {
              actions.setSubmitting(false)
              toast.error('🦄Error not add child', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              setRecord(null)
            })
        : addChildData(finalData)
            .then((result) => {
              // console.log(result)
              props.close(false)
              // getChildDetails()
              //   .then((response) => {
              //     setUserDetails(response.data)
              //     console.log(response.data)
              //   })
              //   .catch((err) => console.log(err))
              actions.setSubmitting(false)
              toast.success('🦄 Child Added succesfully!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              actions.resetForm()
              setRecord(null)
              setLoadedData(null)
            })
            .catch((err) => {
              toast.error('🦄Error not add child', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              setRecord(null)
            })
      // alert(JSON.stringify(finalData, null, 2))
    }, 0)

    console.log(values)
  }

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={loadedData || initialValues}
    >
      {({
        touched,
        errors,
        isSubmitting,
        dirty,
        setFieldValue,
        values,
        handleChange,
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
                {[
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ].map((option) => (
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
                {generateArrayOfYears().map((option) => (
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
            <label>Select Gender </label>{' '}
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field type='radio' name='gender' value='Male' /> Male
              </label>{' '}
              <label>
                <Field type='radio' name='gender' value='Female' /> Female
              </label>
            </div>
          </div>
          <br />
          <div className='form-row'>
            <div className='form-group col'>
              <label>Select Primary Language</label>
              <Field
                name='language'
                as='select'
                className={
                  'form-control' +
                  (errors.language && touched.language ? ' is-invalid' : '')
                }
              >
                <option value=''></option>
                {languageDetails.map(({ languageId, name }) => (
                  <option key={languageId}>{name}</option>
                ))}
              </Field>
              <ErrorMessage
                name='language'
                component='div'
                className='invalid-feedback'
              />
            </div>
            <br />
            <div className='form-group col'>
              <label>Select Proficiency Level</label>
              <Field
                name='proficiency'
                as='select'
                className={
                  'form-control' +
                  (errors.proficiency && touched.proficiency
                    ? ' is-invalid'
                    : '')
                }
              >
                <option value=''></option>
                {['Sufficient', 'Insufficient'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </Field>
              <ErrorMessage
                name='proficiency'
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
            onClick={() => {
              props.close(false)
              setLoadedData(null)
            }}
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
