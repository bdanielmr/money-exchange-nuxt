import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://exchangeratecs.herokuapp.com/api/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getCurrent() {
    return apiClient.get('/rates')
  },
}
