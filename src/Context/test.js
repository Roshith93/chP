const convertArrayToObject = (array) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      ...item,
    }
  }, initialValue)
}
let res = convertArrayToObject([
  { id: 111, name: 'John', age: 29 },
  { id: 121, name: 'John', age: 29 },
])
  console.log(res)
