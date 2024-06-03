<template lang="pug">
v-card.px-2.px-md-6.mt-8.mb-10(:max-width="$vuetify.breakpoint.lgAndDown ? '1268px' : '1562px'" elevation="0" v-if="!loading")
  v-card
    headerTitle(:text="textTitle" :machineData="machine")
  //- p machine: {{ machine }}
  v-row.mt-8
    v-col(cols="12" md="4")
      insertCoinCard(:data="machine" :currentTime="countTime" @start="startWashing" @resetTime='timeReset')
    v-col.d-flex(cols="12" md="8")
      v-row(align-content="space-between")
        v-col(cols="12" md="3")
          qrCodeCard
        v-col(cols="12" md="9")
          temperatureCard(@setTemp="setTemp" :status="statusMachine")
        v-col(cols="12")
          programCard(@setProgram="setProgram" :status="statusMachine")
</template>

<script>
import { mapState } from 'vuex'
import washingAPI from '~/api/mainApi/washingMachine.js'

export default {
  name: 'WashingMachine',
  components: {},
  layout: 'default',
  data () {
    return {
      testValue: 0,
      countTime: 0,
      tempValue: '',
      programValue: '',
      loading: true,
      textTitle: {},
      machine: {}
    }
  },
  computed: {
    ...mapState({
      statusMachine: state => state.main.status
    })
  },
  mounted () {
    // this.$nextTick(() => {
    this.loading = true
    this.getWashingMachine()
    // })
  },
  methods: {
    async getWashingMachine () {
      const items = await washingAPI.getWashingMachine(this.$route.params.id)
      const setStatus = this.statusMachine.find(status => status.value === Number(items.data.status)).name
      this.machine = {
        ...items.data,
        time: { minute: items.data.work_duration, seconds: 0, timeCountDown: items.data.work_duration * 60 },
        kilogram: { kilogram: items.data.weight },
        status: { statusName: setStatus, process: setStatus },
        price: { price: items.data.price },
        test: { processValue: 0, maxProcessValue: items.data.price }
      }
      this.textTitle = {
        headerTitle: 'Washing ' + this.machine.name,
        subtitle: 'Please choose temperature and program that you want, Add Line to receive laundry reminders.'
      }
      if (this.machine.status.statusName === 'Washing') {
        const currentTime = new Date()
        const getService = await washingAPI.getServiceById(this.$route.params.id)
        const finishTime = new Date(getService.data.finish_time)
        const resultTime = finishTime - currentTime
        const resultTimeToSeconds = Math.floor(resultTime / 1000)
        this.countTime = resultTimeToSeconds
        this.countDownTime()
      }
      this.loading = false
    },
    async updateMachineStatus (value) {
      const status = { status: value }
      await washingAPI.patchWashingMachineStatus(this.$route.params.id, status)
      this.loading = false
    },
    // async findCurrentTime () {
    //   try {
    //     const currentTime = new Date()
    //     const getService = await washingAPI.getServiceById(this.$route.params.id)
    //     const finishTime = new Date(getService.data.finish_time)
    //     const resultTime = finishTime - currentTime
    //     const resultTimeToSeconds = resultTime / 1000
    //     this.countTime = resultTimeToSeconds

    //     this.loading = false
    //   } catch {
    //     // console.log('Service not found')
    //   }
    // },
    async startWashing () {
      const body = {
        washing_machine: this.$route.params.id,
        wash_program_tempeture: this.tempValue,
        wash_program_program: this.programValue,
        used_by: 1
      }
      await washingAPI.postWashingService(body)
      this.machine.status.statusName = 'Washing'
      this.getWashingMachine()

      this.loading = false
    },
    timeStart (data) {
      this.machine.status.statusName = this.statusMachine[2].name
      this.updateMachineStatus(String(this.statusMachine[2].value))
      data.status.process = 'Soaking'
      const countDown = setInterval(() => {
        // console.log('Time CountDown', data.time.timeCountDown)
        data.time.timeCountDown -= 1
        if (data.time.timeCountDown === 20) {
          data.status.process = 'Washing'
        } else if (data.time.timeCountDown === 10) {
          data.status.process = 'Rinsing'
        } else if (data.time.timeCountDown === 5) {
          data.status.process = 'Spinning'
        } else if (data.time.timeCountDown === 0) {
          data.status.process = 'Complete'
          this.machine.status.statusName = this.statusMachine[3].name
          this.updateMachineStatus(String(this.statusMachine[3].value))
          clearInterval(countDown)
          // console.log('test', data.test.processValue)
        }
      }, 1000)
      location.reload()
    },
    timeReset () {
      this.machine.status.statusName = this.statusMachine[1].name
      // this.machine.time.timeCountDown = this.machine.time.minute * 60
      this.machine.status.process = ''
      this.updateMachineStatus(String(this.statusMachine[1].value))
    },
    setProgram (value) {
      this.programValue = value
    },
    setTemp (value) {
      this.tempValue = value
    },
    countDownTime () {
      const countDown = setInterval(() => {
        if (this.countTime > 0) {
          this.countTime -= 1
        } else {
          this.machine.status.statusName = this.statusMachine[3].name
          this.machine.status.process = this.statusMachine[3].name
          clearInterval(countDown)
          setTimeout(() => {
            location.reload()
          }, 3000)
        }
      }, 1000)
    }
  }
}
</script>
