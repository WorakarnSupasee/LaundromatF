import axios from 'axios'
import apiConfig from '~/config/endpoint'

const apiInstance = {
  api: null,
  context: null
}

export const createInstance = () => {
  const instance = axios.create({
    baseURL: apiConfig.ENDPOINT_URL
  })

  instance.interceptors.request.use((config) => {
    config.headers = {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RBZG1pbiIsImlkIjoxLCJyb2xlIjoxLCJpYXQiOjE3MDkwOTEwMjR9.dSK8ncdZt0WFPjzPDtcXgUMw90guZ8F64Ovfm6IsbVQ'
    }
    return config
  })

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      throw error
    }
  )

  apiInstance.api = instance
}
export default apiInstance
