<template lang="pug">
.content
  .px-6.py-5
    v-row
      v-col.d-flex.flex-column(cols="12" md="9")
        .header.mb-1.d-flex.align-center
          h1.mr-2 {{ text.headerTitle }}
          v-btn.ml-2.text-capitalize.white--text(
            color="#27AE60"
            style="width: 94px; height: 24px;"
            rounded depressed v-if="text.page === 'HomePage' ? true : false"
            ) Open Now!
          .content(:class="$vuetify.breakpoint.xsOnly ? 'd-flex.flex-row.align-start' : 'd-flex'")
            v-chip.d-flex.align-center(label outlined max-width="92px" v-if="text.page === 'HomePage' ? false : true")
              v-icon.black--text mdi-basket-outline
              p.mb-0.mr-1.font-weight-medium {{ machineData.kilogram.kilogram}} KG
            v-chip.mx-sm-2.d-flex.align-center(label outlined max-width="133px" v-if="text.page === 'HomePage' ? false : true")
              v-icon.black--text mdi-timer-outline
              p.mb-0.mr-1.font-weight-medium {{machineData.time.minute}} Minute
            .statusCard(v-if="$vuetify.breakpoint.smAndDown")
              v-card.py-2.px-4.d-flex.justify-center.align-center(
                max-width="152px"
                outlined
                :max-height="$vuetify.breakpoint.smAndDown ? '32px' : ''"
                :color="colorStatus(machineData.status)"
                v-if="text.page === 'HomePage' ? false : true"
                :disabled="machineData.status.statusName === 'Available'")
                v-icon(:color="machineData.status.statusName !== 'Available' ? 'white' : ''") {{ iconStatus(machineData.status)}}
                p.mb-0.font-weight-medium(:class="machineData.status.statusName !== 'Available' ? 'white--text' : ''") {{machineData.status.statusName}}
        .subheader
          p.subtitle-1 {{ text.subtitle }}
      v-col.d-flex.justify-end.align-center.align-sm-start(cols="3" v-if="$vuetify.breakpoint.mdAndUp")
        v-card.mt-sm-2.py-2.px-4.d-flex.justify-center.align-sm-center(
          max-width="152px"
          outlined
          :max-height="$vuetify.breakpoint.smAndDown ? '32px' : ''"
          :color="colorStatus(machineData.status)"
          v-if="text.page === 'HomePage' ? false : true"
          :disabled="machineData.status.statusName === 'Available'"
          )
          v-icon.mr-5(:color="machineData.status.statusName !== 'Available' ? 'white' : ''") {{ iconStatus(machineData.status)}}
          p.mb-0.font-weight-medium(:class="machineData.status.statusName !== 'Available' ? 'white--text' : ''") {{machineData.status.statusName}}
  hr(color="#E5E9EB" v-if="text.page === 'HomePage' ? false : true")
  .py-3.pl-10.mb-8.grey.lighten-5.d-flex(:max-width="$vuetify.breakpoint.lgAndDown ? '1268px' : '1562px'" v-if="text.page === 'HomePage' ? false : true")
    v-icon.mr-2.grey--text mdi-home
    span.mr-1.grey--text(style="cursor: pointer;" @click="goHome") Home /
    span.black--text {{ text.headerTitle }}
</template>

<script>
export default {
  props: {
    text: {
      default: null,
      type: Object
    },
    machineData: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    goHome () {
      this.$router.push({ path: '/' })
    },
    colorStatus (status) {
      if (status.statusName === 'Available') {
        return ''
      } else if (status.statusName === 'Washing') {
        return '#2F80ED'
      } else if (status.statusName === 'Complete') {
        return '#27AE60'
      } else {
        return '#EB5757'
      }
    },
    iconStatus (status) {
      if (status.statusName === 'Available') {
        return 'mdi-information'
      } else if (status.statusName === 'Washing') {
        return 'mdi-cached'
      } else if (status.statusName === 'Complete') {
        return 'mdi-check-circle'
      } else {
        return 'mdi-alert'
      }
    }
  }
}
</script>
