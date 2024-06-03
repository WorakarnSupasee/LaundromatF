<template lang="pug">
v-card(:max-width="$vuetify.breakpoint.lgAndDown ? '' : '1092px'")
  v-card.px-5.py-4.d-flex.justify-center.grey.lighten-5(:height="$vuetify.breakpoint.lgAndDown ? '' : '70px'" elevation="0")
    h2 Program
  v-card.pa-8.d-flex.justify-space-between.justify-center(class="allCard" :height="$vuetify.breakpoint.lgAndDown ? '' : '274px'" elevation="0")
    v-card.d-flex.flex-column.align-center.justify-center(@click="setProgram('Normal')" :disabled="status.name !== 'Available'" :width="widthButtonImg" :height="heightButtonImg" style="border: 2px solid #6F5EE0;" elevation="0" :class="program == 'Normal' ? '' : 'cardInActive'" )
      v-img.mb-2(:src="program == 'Normal' ? '/icon/program/ShirtColor.svg' : '/icon/program/Shirt.svg'" max-width="80px" max-height="80px")
      h3(style={color:"#6F5EE0"} :class="program == 'Normal' ? '' : 'inActive'") Normal
    v-card.d-flex.flex-column.align-center.justify-center(@click="setProgram('Wool')" :disabled="status.name !== 'Available'" :width="widthButtonImg" :height="heightButtonImg" style="border: 2px solid #6F5EE0;" elevation="0" :class="program == 'Wool' ? '' : 'cardInActive'")
      v-img.mb-2(:src="program == 'Wool' ? '/icon/program/ClewColor.svg' : '/icon/program/Clew.svg'" max-width="80px" max-height="80px")
      h3(style={color:"#6F5EE0"} :class="program == 'Wool' ? '' : 'inActive'") Wool
    v-card.d-flex.flex-column.align-center.justify-center(@click="setProgram('Duvet')" :disabled="status.name !== 'Available'" :width="widthButtonImg" :height="heightButtonImg" style="border: 2px solid #6F5EE0;" elevation="0" :class="program == 'Duvet' ? '' : 'cardInActive'")
      v-img.mb-2(:src="program == 'Duvet' ? '/icon/program/LullabyColor.svg' : '/icon/program/Lullaby.svg'" max-width="80px" max-height="80px")
      h3(style={color:"#6F5EE0"} :class="program == 'Duvet' ? '' : 'inActive'") Duvet
    v-card.d-flex.flex-column.align-center.justify-center(@click="setProgram('Kid Care')" :disabled="status.name !== 'Available'" :width="widthButtonImg" :height="heightButtonImg" style="border: 2px solid #6F5EE0;" elevation="0" :class="program == 'Kid Care' ? '' : 'cardInActive'")
      v-img.mb-2(:src="program == 'Kid Care' ? '/icon/program/BabyFaceColor.svg' : '/icon/program/BabyFace.svg'" max-width="80px" max-height="80px")
      h3(style={color:"#6F5EE0"} :class="program == 'Kid Care' ? '' : 'inActive'") Kid Care
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
      program: 'Normal'
    }
  },
  computed: {
    widthButtonImg () {
      if (this.$vuetify.breakpoint.xlOnly) {
        return '232px'
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
    this.setProgram(this.program)
  },
  methods: {
    setProgram (value) {
      this.program = value
      this.$emit('setProgram', value)
      // console.log('ProgramValue', value)
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
