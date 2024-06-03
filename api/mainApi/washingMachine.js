import axios from '../instance'

export default {
  getPaginationSearch: (param) => {
    return axios.api.get('washing-machine/pagination/search?', param).then(response => response.data)
  },
  getWashingMachine: (id) => {
    return axios.api.get(`washing-machine/${id}`).then(response => response.data)
  },
  getAllWashingMachine: () => {
    return axios.api.get('washing-machine').then(response => response.data)
  },
  patchWashingMachineStatus: (id, value) => {
    return axios.api.patch(`washing-machine/${id}`, value).then(response => response.data)
  },
  postWashingService: (value) => {
    return axios.api.post('wash-service', value).then(response => response.data)
  },
  getServiceById: (id) => {
    return axios.api.get(`wash-service/findByMachineId/${id}`).then(response => response.data)
  }
}
