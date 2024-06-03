<template lang="pug">
.d-flex
  v-img(:src="`/progress/circle/circle_${(value > 33.33) ? colorCircle : '1'}.svg`" :max-width="widthCircle" :max-height="heightCircle")
  v-img.mx-1.mx-md-1(:src="`/progress/circle/circle_${(value > 66.66) ? colorCircle : '2'}.svg`" :max-width="widthCircle" :max-height="heightCircle")
  v-img(:src="`/progress/circle/circle_${(value >= 100) ? colorCircle : '3'}.svg`" :max-width="widthCircle" :max-height="heightCircle")
</template>

<script>
export default {
  props: {
    value: {
      default: null,
      type: Number
    },
    colorCircle: {
      default: null,
      type: String
    }
  },
  data () {
    return {}
  },
  computed: {
    widthCircle () {
      if (this.$vuetify.breakpoint.xlOnly) {
        return '22px'
      } else if (this.$vuetify.breakpoint.lgOnly) {
        return '20px'
      } else if (this.$vuetify.breakpoint.mdOnly) {
        return '14px'
      } else if (this.$vuetify.breakpoint.smOnly) {
        return ''
      } else if (this.$vuetify.breakpoint.width <= 375) {
        return '17px'
      } else {
        return ''
      }
    },
    heightCircle () {
      if (this.$vuetify.breakpoint.xlOnly) {
        return '22px'
      } else if (this.$vuetify.breakpoint.lgOnly) {
        return '20px'
      } else if (this.$vuetify.breakpoint.mdOnly) {
        return '14px'
      } else if (this.$vuetify.breakpoint.smOnly) {
        return ''
      } else if (this.$vuetify.breakpoint.width <= 375) {
        return '17px'
      } else {
        return ''
      }
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style>

</style>
