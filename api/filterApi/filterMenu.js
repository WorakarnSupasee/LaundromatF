import axios from '../instance'
// import apiConfig from '~/config/endpoint'

export default {
  getMachineType: (param) => {
    return axios.api.get('machine-type/findAllWeight', param).then(response => response.data)
  }
}
