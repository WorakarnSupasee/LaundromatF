<template lang="pug">
v-card(:max-width="$vuetify.breakpoint.lgAndDown ? '' : '210px'" height="100%")
  v-card.py-2.d-flex.align-center.justify-center.grey.lighten-5(:height="$vuetify.breakpoint.lgAndDown ? '' : '70px'" elevation="0")
    h2 Customer
  v-card.pa-5.d-flex.align-center.justify-center.flex-column(:height="$vuetify.breakpoint.lgAndDown ? '' : '272px'" elevation="0")
    v-card.mb-6.mx-5.d-flex.flex-column.align-center.justify-center(:width="cardImg" :height="cardImg")
      v-img(src="/icon/LINE.svg" max-width="80px" max-height="80px")
    v-btn.white--text.text-capitalize(width="100%" :height="btnHeight" color="green" outlined @click="openQrCode") Scan QR code
  v-dialog(v-model="dialog" max-width="300px" max-height="394px")
    v-card.d-flex.flex-column.align-center
      v-btn.mr-2.d-flex.align-self-end(icon @click="closeQrCode")
        v-icon mdi-window-close
      v-img(src="/icon/qrCode.svg")
      h2.mb-2 @Washchine
      v-card-subtitle.text-center Scan the QR code to add friends to <br> receive notifications when your <br> laundry is done.
      v-btn.mx-7.mb-7(height="48px" width="240px" disabled) Success
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    cardImg () {
      if (this.$vuetify.breakpoint.xlOnly) {
        return '160px'
      } else if (this.$vuetify.breakpoint.lgOnly) {
        return '150px'
      } else if (this.$vuetify.breakpoint.mdOnly) {
        return '80px'
      } else {
        return ''
      }
    },
    btnHeight () {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return '46px'
      } else if (this.$vuetify.breakpoint.mdOnly) {
        return '30px'
      } else {
        return ''
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    openQrCode () {
      this.dialog = true
    },
    closeQrCode () {
      this.dialog = false
    }
  }
}
</script>
