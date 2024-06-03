<template lang="pug">
//- v-card(max-width="436px")
v-card(:max-width="$vuetify.breakpoint.xsOnly ? '' : '436px'")
  .px-5.py-4.d-flex.align-center.justify-space-between.grey.lighten-5
    h3 {{ data.name }}
    v-card.py-2.px-4.d-flex.justify-center(max-width="152px" outlined :color="colorStatus(data.status)" :disabled="data.status.statusName === 'Available'")
      v-icon.mr-5(:color="data.status.statusName !== 'Available' ? 'white' : ''") {{ iconStatus(data.status)}}
      p.mb-0.font-weight-medium(:class="data.status.statusName !== 'Available' ? 'white--text' : ''") {{ data.status.statusName }}
  .pa-8
    v-img(:src="pathImg(data.status)")
    hr.grey--text.mt-8
    .py-6.d-flex.justify-space-between
      v-chip.pa-2.d-flex.align-center(label outlined max-width="92px")
          v-icon.black--text mdi-basket-outline
          p.mb-0.mr-1.font-weight-medium.text-uppercase {{ data.kilogram.kilogram }} Kg
      v-chip.pa-2.d-flex.align-center(label outlined max-width="106px")
        v-icon.black--text mdi-currency-usd
        p.mb-0.mr-1.font-weight-medium.text-uppercase {{ data.price.price }} Baht
      v-chip.pa-2.d-flex.align-center(label outlined max-width="133px")
        v-icon.black--text mdi-timer-outline
        p.mb-0.mr-1.font-weight-medium {{ data.time.minute }} Minute
    v-btn.white--text.text-capitalize(width="100%" color="#6F5EE0" :disabled="data.status.statusName === 'Maintenance'" @click="toInfoPage") view
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    data: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      machineStatus: state => state.main.machineStatus
    })
  },
  mounted () {
  },
  methods: {
    pathImg (data) {
      // console.log('Data Log:', data.statusName)
      if (data.statusName === 'Available') {
        return '/machine/AvailableMachine.svg'
      } else if (data.statusName === 'Washing') {
        return '/machine/WashingMachine.svg'
      } else if (data.statusName === 'Complete') {
        return '/machine/CompleteMachine.svg'
      } else {
        return '/machine/MaintenanceMachine.svg'
      }
    },
    colorStatus (data) {
      if (data.statusName === 'Available') {
        return ''
      } else if (data.statusName === 'Washing') {
        return '#2F80ED'
      } else if (data.statusName === 'Complete') {
        return '#27AE60'
      } else {
        return '#EB5757'
      }
    },
    iconStatus (data) {
      if (data.statusName === 'Available') {
        return 'mdi-information'
      } else if (data.statusName === 'Washing') {
        return 'mdi-cached'
      } else if (data.statusName === 'Complete') {
        return 'mdi-check-circle'
      } else {
        return 'mdi-alert'
      }
    },
    toInfoPage () {
      // console.log('data', this.data)
      this.$router.push({ path: '/infoMachine/' + this.data.id })
      const status = this.data.status.statusName
      this.$store.commit('main/changeStatus', status)
      // console.log('status', status)
    },
    testStatus () {
      this.machineStatus = this.data.status.statusName
    }
  }
}
</script>
