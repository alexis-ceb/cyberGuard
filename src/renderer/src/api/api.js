import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:3210/api',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

export default api
