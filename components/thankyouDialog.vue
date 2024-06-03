<template lang="pug">
v-dialog(v-model="dialog" max-width="300px" max-height="394px")
  v-card.d-flex.flex-column.align-center
    v-btn.mr-2.d-flex.align-self-end(icon @click="dialog=false")
          v-icon mdi-window-close
    v-icon.mb-5.green--text(size="80px") mdi-check-circle
    h2.mb-1 Thank you!
    v-card-subtitle.text-center Thank you for using our laundry shop. <br> We hope you will come back to use our <br> services again.
    v-btn.mx-7.white--text.text-capitalize(height="64px" width="100%" color="#2F80ED" @click="saveData" ) See you!
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {
    openDialog () {
      this.dialog = true
    },
    closeDialog () {
      this.dialog = false
    },
    saveData () {
      this.$emit('saveData')
    }
  }
}
</script>
