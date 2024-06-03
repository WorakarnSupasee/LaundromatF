<template lang="pug">
v-card.px-2.px-md-6.mt-8.mb-10.pb-6(:max-width="$vuetify.breakpoint.lgAndDown ? '1268px' : '1562px'")
  headerTitle(:text="title")
  filterTab(
    @filterTab="tabFilter"
    @searchBar="searchData"
    :list="listWeight"
    :tabs="tabs"
    :tabValue="tabValue"
    )
  v-tabs-items(
    v-if="!loading"
    v-model="tabValue"
    style="with:100%;"
    )
    v-tab-item(
      v-for="(tab, index) in tabs"
      :key="tab.value"
      :value="index"
      )
      hr.mt-4.mb-8
      v-row(v-if="machinesDisplay.length")
        v-col(
          v-for="(machine, index) in machinesDisplay"
            :key="index" cols="12" md="6" lg="4"
            :class="$vuetify.breakpoint.smAndDown ? 'd-flex justify-center' : ''"
            )
          machineCard.ma-2(:data="machine")
      p.mx-auto.text-center(v-else) NO-DATA
      hr.mt-8.mb-4
      //- v-pagination.mb-4(v-model="page" :length="6" circle color="pink")
  v-skeleton-loader(
    v-else
    class="mx-auto mt-6"
    type="image"
    )
</template>

<script>
import { mapState } from 'vuex'
import washingAPI from '~/api/mainApi/washingMachine.js'
import filterAPI from '~/api/filterApi/filterMenu.js'

export default {
  name: 'HomePage',
  components: {},
  layout: 'default',
  data () {
    return {
      filter: {
        status: '',
        name: '',
        weight: ''
      },
      loading: true,
      tabValue: null,
      tabs: [
        // { name: 'All', value: 0 },
        // { name: 'Available', value: 1 },
        // { name: 'Washing', value: 2 },
        // { name: 'Complete', value: 3 },
        // { name: 'Maintenance', value: 4 }
      ],
      machines: [],
      machinesDisplay: [],
      listWeight: [],
      page: 1
    }
  },
  computed: {
    ...mapState({
      title: state => state.main.topicTitle,
      statusMachine: state => state.main.status
    })
  },
  created () {},
  mounted () {
    this.getFilterMenu()
    this.getWashingMachine()
    this.tabValue = 0
    this.tabs = this.statusMachine
  },
  methods: {
    async getWashingMachine () {
      const params = {
        page: '1',
        limit: '6',
        status: this.filter.status ? this.filter.status : null,
        search: this.filter.name ? this.filter.name : null,
        weight: this.filter.weight ? this.filter.weight : null
      }

      const items = await washingAPI.getPaginationSearch({ params })
      this.machinesDisplay = items.data.data.map((item) => {
        return {
          ...item,
          time: { minute: item.work_duration, seconds: 0 },
          kilogram: { kilogram: item.weight },
          status: { statusName: this.statusMachine.find(status => status.value === Number(item.status)).name },
          price: { price: item.price }
        }
      })
      this.loading = false
    },
    async updateMachineStatus () {
      await washingAPI.patchWashingMachineStatus(this.$route.params.id, this.machine.status)
      this.loading = false
    },
    async tabFilter (tab) {
      this.loading = true
      this.filter.status = await tab.value
      this.tabValue = await tab.value
      this.getWashingMachine()
    },
    searchData (searchData, kilogramModel) {
      if (this.time) {
        clearTimeout(this.time)
        this.time = null
      }
      if (this.filter.weight !== kilogramModel) {
        this.filter.weight = kilogramModel
        this.getWashingMachine()
      }
      if (this.filter.name !== searchData) {
        this.filter.name = searchData
        this.time = setTimeout(() => {
          this.getWashingMachine()
        }, 1000)
      }
    },
    async getFilterMenu () {
      const items = await filterAPI.getMachineType()
      // console.log('Menu1', items.data)
      this.listWeight = items.data
      this.loading = false
    }
  }
}
</script>
