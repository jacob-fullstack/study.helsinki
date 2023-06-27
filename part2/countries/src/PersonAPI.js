import axios from "axios"

const BASE_URL = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(`${BASE_URL}`)
  return request.then(response => response.data)
}
const create = (newData) => {
  const request = axios.post(`${BASE_URL}`, newData)
  return request.then(response => response.data)
}
const update = (id, newData) => {
  const request = axios.put(`${BASE_URL}/${id}`, newData)
  return request.then(response => response.data)
}
const deletePerson = (id) => {
  const request = axios.delete(`${BASE_URL}/${id}`)
  return request.then(response => response.data)
}
export default {create, getAll, update, deletePerson}