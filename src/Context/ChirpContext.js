import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { tempData } from './data'

export const ChirpContext = createContext()

const TOKEN_BASE_URL = 'https://test.salesforce.com/services/oauth2/token'
const CHILD_BASE_URL =
  'https://pra--PERSONAL25.my.salesforce.com/services/apexrest/EmployeeResource/'

export const ChirpProvider = (props) => {
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem('accessToken'))
  )
  const [userDetails, setUserDetails] = useState(null)
  const [chirpDetails, setChirpDetails] = useState(null)
  const [languageDetails, setLanguageDetails] = useState(null)
  const [employeeDetails, setEmployeeDetails] = useState(null)
  const [loadedData, setLoadedData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [record, setRecord] = useState(null)
  const [addEditModal, setAddEditModal] = useState(false)
  const [isUserAlreadyRegistered, setisUserAlreadyRegistered] = useState(false)
  const [isLastRecord, setIsLastRecord] = useState(false)
  const [deregisterModal, setDeregisterModal] = useState(false)

  // ==  get Token
  const getToken = async () => {
    const response = await axios({
      url: TOKEN_BASE_URL,
      method: 'post',
      params: {
        username: 'integrationuser@prahs.com.personal25',
        password: 'Change123X9WXRSwyLiJ8esYzZfH9YCcSF',
        grant_type: 'password',
        client_id:
          '3MVG97wqanbUM37Ktam8sz6Qni79f7xgjwJIfxp8PpsoBcM8ww5r.qdluKamSHXTHsgewcydRlmbz1oeK5dOw',
        client_secret:
          'BEEFEAECCCD9A5E344190C64A793D477FA1C60A9BFA09090351FF83D17093F11',
      },
    })
    return response
  }
  // == get User userDetails
  const setWithExpiry = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    setAccessToken(JSON.parse(localStorage.getItem('accessToken')))
  }
  const getWithExpiry = async (key) => {
    const itemStr = localStorage.getItem(key)
    // if the item doesn't exist, return null
    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (!itemStr || now.getTime() > item.expiry) {
      await getToken()
        .then((response) => {
          setWithExpiry('accessToken', response.data.access_token)
        })
        .catch((err) => console.log(err))
    }
  }
  //  == get child Details
  const getChildDetails = async () => {
    const response = await axios({
      url: CHILD_BASE_URL,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        username: 'test-krishnapparavi@prahs.com',
      },
    })
    return response
  }
  const addLocalDataToServer = async () => {
    let submitMethod = 'post'
    let localData = chirpDetails.filter(({ active }) => active === true)
    let postLocalArray = localData.map(({ recordId, ...keepRest }) =>
      recordId.includes('-') && keepRest
    )
    // if post array is empty, dont post
    let anyNewData = postLocalArray.filter(e => {
      return e !== false
      
    });
    console.log(anyNewData)

    let finalData = {
      chirpList: anyNewData,
    }
    console.log(finalData)
    const response = await axios({
      url: CHILD_BASE_URL,
      method: submitMethod,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: finalData,
    })
    return response
  }
  const addServerDataToServer = async () => {}

  //  ! Add data to server
  const addDataToServer = async () => {
    let data = chirpDetails
      .filter(({ active }) => active === true)
      .map(({ recordId, ...keepRest }) => recordId.includes('-') && keepRest)
    console.log(data)
    let anyNewData = data.filter(e => {
      console.log(e)
      return e !== false
    
    });

      if (anyNewData.length > 0) {
      addLocalDataToServer().then((res) => alert('successfull from local data'))
    }
  }

  // == Add child data locally
  const addChildData = async (data) => {
    await setChirpDetails((prevValue) => {
      return [...prevValue, data]
    })
    console.log(chirpDetails)
    // const response = await axios({
    //   url: CHILD_BASE_URL,
    //   method: 'post',
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    //   data: finalData,
    // })
    // return response
  }

  // == Edit child data
  const editChildData = async (data) => {
    // data is a object
    await setChirpDetails((prevState) => {
      var index = prevState
        .map(function (el) {
          return el.recordId
        })
        .indexOf(data.recordId)
      prevState.splice(index, 1, data)
      return prevState
    })
    // console.log(JSON.stringify(finalData))
    // const response = await axios({
    //   url: CHILD_BASE_URL,
    //   method: 'patch',
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    //   data: finalData,
    // })
    // return response
  }

  //  == Delete child
  const deleteChild = async () => {
    // let data = chirpDetails.filter(({ active }) => active === true).filter((chirpList) => {
    //     if (chirpList.recordId === record) {
    //       return (chirpList = [{ ...chirpList, active: false }])
    //     }
    //   })
    // let finalData = {
    //   chirpList: [{ ...data[0], active: false }],
    // }
    // await setChirpDetails((prevState) => {
    //   let data = chirpDetails
    //     .filter(({ active }) => active === true)
    //     .filter((chirp) => {
    //       if (chirp.recordId === record) {
    //         chirp.active = false
    //         return chirp
    //       }
    //     })
    //   console.log(data)
    //   var index = prevState
    //     .map(function (el) {
    //       return el.recordId
    //     })
    //     .indexOf(data[0].recordId)
    //   prevState.splice(index, 1, data)
    //   return prevState
    // })
    // const response = await axios({
    //   url: CHILD_BASE_URL,
    //   method: 'patch',
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    //   data: finalData,
    // })
    // return response
  }

  const deleteChildDetails = async () => {
    // let data = chirpDetails
    //   .filter(({ active }) => active === true)
    //   .filter((chirp) => {
    //     if (chirp.recordId === record) {
    //       chirp.active = false
    //       return chirp
    //     }
    //   })
    await setChirpDetails((prevState) => {
      // find data object\
      // let activeDatas =  prevState ? prevState.filter(({ active }) => active === true) : []
      // if(activeDatas.length === 1) {
      //   setDeregisterModal(true)
      // }
      let deleteData = prevState
        .filter(({ active }) => active === true)
        .filter((chirp) => chirp.recordId === record)
      // convert arry to object and
      const convertArrayToObject = (array) => {
        const initialValue = {}
        return array.reduce((obj, item) => {
          return {
            ...obj,
            ...item,
          }
        }, initialValue)
      }
      let data = convertArrayToObject(deleteData)

      var index = prevState
        .map(function (el) {
          return el.recordId
        })
        .indexOf(data.recordId)
      prevState.splice(index, 1, { ...data, active: false })
      return prevState
    })
    // await setChirpDetails((prevState) => {

    //    prevState
    //     .filter(({ active }) => active === true)
    //     .filter((chirp) => {
    //       let index = prevState
    //         .map(function (el) {
    //           return el.recordId
    //         })
    //         .indexOf(record)
    //       if (chirp.recordId === record) {
    //         chirp.active = false
    //         return prevState.splice(index, 1, chirp)
    //       }
    //     })
    //   // var index = prevState
    //   //   .map(function (el) {
    //   //     return el.recordId
    //   //   })
    //   //   .indexOf(data[0].recordId)
    //   // prevState.splice(index, 1, data[0])
    //   // return prevState
    // })
    console.log('coming')

    // await deleteChild()
    //   .then((result) => {
    //     getChildDetails()
    //       .then((response) => {
    //         setUserDetails(response.data)
    //         setRecord(null)
    //       })
    //       .catch((err) => console.log(err))
    //     console.log(result.data[0].message)
    //     if (result.data[0].success === 'true') {
    //       console.log('true')

    //       setShowModal(false)
    //       toast.error('🦄 Deleted succesfully!', {
    //         position: 'top-right',
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       })
    //     } else if (result.data[0].success === 'false') {
    //       console.log('false')

    //       toast.error(result.data[0].message, {
    //         position: 'top-right',
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       })
    //       setShowModal(false)
    //     }
    //   })
    //   .catch((err) => console.error(err))
  }
  //  ==  Edit Record
  const editChild = async (id) => {
    setRecord(id)
    let data = chirpDetails
      .filter(({ active }) => active === true)
      .filter((chirpList) => {
        return chirpList.recordId === id
      })

    const result = data.map(
      ({ month, year, gender, language, proficiency }) => ({
        month,
        year,
        gender,
        language,
        proficiency,
      })
    )
    setLoadedData({
      month: result[0].month,
      year: result[0].year,
      gender: result[0].gender,
      language: result[0].language,
      proficiency: result[0].proficiency,
    })
    setAddEditModal(true)
  }
  useEffect(() => {
    getWithExpiry('accessToken')
    getChildDetails()
      .then((response) => {
        let { chirpDetails, languageDetails, employeeDetails } = response.data
        setUserDetails(response.data)
        setChirpDetails(chirpDetails)
        setLanguageDetails(languageDetails)
        setEmployeeDetails(employeeDetails)
        chirpDetails
          ? chirpDetails.filter(({ active }) => {
              if (active === true) {
                setisUserAlreadyRegistered(true)
              }
            })
          : setisUserAlreadyRegistered(false)
      })
      .catch((err) => console.log(err))
  }, [])
  // useEffect(() => {
  //   getWithExpiry('accessToken')
  //   getChildDetails()
  //     .then((response) => {
  //       setUserDetails(response.data)
  //       console.log(response.data)
  //     })
  //     .catch((err) => console.log(err))
  // }, [userDetails])
  useEffect(() => {
    setInterval(() => {
      console.log('coming here at timeout')
      localStorage.removeItem('accessToken')
      getWithExpiry('accessToken')
    }, 120000)
  }, [accessToken])

  return (
    <ChirpContext.Provider
      value={{
        userDetails,
        setUserDetails,
        chirpDetails,
        employeeDetails,
        languageDetails,
        accessToken,
        setAccessToken,
        showModal,
        setShowModal,
        record,
        setRecord,
        deleteChildDetails,
        addChildData,
        deleteChild,
        getChildDetails,
        editChild,
        setLoadedData,
        loadedData,
        setAddEditModal,
        addEditModal,
        editChildData,
        isUserAlreadyRegistered,
        setisUserAlreadyRegistered,
        isLastRecord,
        setIsLastRecord,
        deregisterModal,
        setDeregisterModal,
        addDataToServer,
      }}
    >
      {props.children}
    </ChirpContext.Provider>
  )
}
