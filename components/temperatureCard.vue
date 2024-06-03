<template lang="pug">
v-card(:max-width="$vuetify.breakpoint.lgAndDown ? '' : '850px'" style="height:100%")
  v-card.py-4.d-flex.justify-center.grey.lighten-5(:height="$vuetify.breakpoint.lgAndDown ? '' : '70px'" elevation="0")
    h2 Temperature
  v-card.pa-8.d-flex.justify-space-between(class="allCard" :height="$vuetify.breakpoint.lgAndDown ? '' : '272px'" elevation="0")
    v-card.mr-lg-8.d-flex.flex-column.align-center.justify-center( @click="setTemp('Hot')" :disabled="status.name !== 'Available'" :width="widthButtonImg" :height="heightButtonImg" style="border: 2px solid #EB5757;" :class="temp == 'Hot' ? '' : 'cardInActive'" elevation="0")
      v-img.mb-2(:src="temp == 'Hot' ? '/icon/temperature/FireColor.svg' : '/icon/temperature/Fire.svg'" max-width="80px" max-height="80px")
      h3(style={color:"#EB5757"} :class="temp == 'Hot' ? '' : 'inActive'") HOT
    v-card.mr-lg-8.d-flex.flex-column.align-center.justify-center(@click="setTemp('Warm')" :disabled="status.name !== 'Available'" :width="widthButtonImg" :height="heightButtonImg" style="border: 2px solid #FFD43E;" :class="temp == 'Warm' ? '' : 'cardInActive'" elevation="0")
      v-img.mb-2(:src="temp == 'Warm' ? '/icon/temperature/SummerColor.svg' : '/icon/temperature/Summer.svg'" max-width="80px" max-height="80px")
      h3(style={color:"#FFD43E"} :class="temp == 'Warm' ? '' : 'inActive'") WARM
    v-card.d-flex.flex-column.align-center.justify-center(@click="setTemp('Cool')" :disabled="status.name !== 'Available'" :width="widthButtonImg" :height="heightButtonImg" style="border: 2px solid #2F80ED;" :class="temp == 'Cool' ? '' : 'cardInActive'" elevation="0")
      v-img.mb-2(:src="temp == 'Cool' ? '/icon/temperature/DefrostingColor.svg' : '/icon/temperature/Defrosting.svg'" max-width="80px" max-height="80px")
      h3(style={color:"#2F80ED"} :class="temp == 'Cool' ? '' : 'inActive'") COOL
</template>

<script>
export default {
  props: {
    status: {
      default: null,
      type: Array
    }
  },
  data () {
    return {
      temp: 'Warm'
    }
  },
  computed: {
    widthButtonImg () {
      if (this.$vuetify.breakpoint.xlOnly) {
        return '242px'
      } else if (this.$vuetify.breakpoint.lgOnly) {
        return '150px'
      } else if (this.$vuetify.breakpoint.mdOnly) {
        return '120px'
      } else if (this.$vuetify.breakpoint.smOnly) {
        return '150px'
      } else {
        return ''
      }
    },
    heightButtonImg () {
      if (this.$vuetify.breakpoint.xlOnly) {
        return '210px'
      } else if (this.$vuetify.breakpoint.lgOnly) {
        return '150px'
      } else if (this.$vuetify.breakpoint.mdOnly) {
        return '120px'
      } else if (this.$vuetify.breakpoint.smOnly) {
        return '130px'
      } else {
        return ''
      }
    }
  },
  created () {},
  mounted () {
    this.setTemp(this.temp)
    console.log('status', this.status)
    console.log('temp', this.temp)
  },
  methods: {
    setTemp (value) {
      this.temp = value
      this.$emit('setTemp', value)
      // console.log('TempValue', value)
    }
  }
}
</script>

<style>
.inActive{
  color: #D1D5DB !important
}
.cardInActive{
  border-color: #D1D5DB !important
}

@media only screen and (max-width: 600px) {
  .allCard {
    display: flex;
    flex-direction: column;
  }
}
</style>
