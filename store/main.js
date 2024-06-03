export const state = () => ({
  topicTitle: {
    headerTitle: 'Washing Machine',
    subtitle: 'Laundry service, cheap price!',
    page: 'HomePage'
  },
  status: [
    { name: 'All', value: 0 },
    { name: 'Available', value: 1 },
    { name: 'Washing', value: 2 },
    { name: 'Complete', value: 3 },
    { name: 'Maintenance', value: 4 }
  ]
})
export const mutations = {
  changeStatus (state, status) {
    state.machineStatus = status
    console.log('testState', status)
  }
}
