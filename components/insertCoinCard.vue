<template lang="pug">
v-card.mx-auto(:max-width="$vuetify.breakpoint.smAndDown ? '434px' : '434px'")
  v-card.px-sm-5.d-flex.align-center.justify-space-between.grey.lighten-5(:height="$vuetify.breakpoint.lgAndDown ? '60px' : '70px'" elevation="0")
    h3.my-5 Please insert coin
    br
    //- p currentTime: {{ currentTime }}
    v-card.py-2.px-4.my-4.d-flex.justify-center(:max-width="$vuetify.breakpoint.lgAndDown ? '' : '152px'" outlined color="#6F5EE0")
      v-icon.white--text mdi-currency-usd
      p.mb-0.font-weight-medium.white--text {{ data.price.price }} Baht
  v-card.pa-8(elevation="0" :height="$vuetify.breakpoint.lgAndDown ? '' : heightValue")
    v-img.mb-8(src="/machine/washingBG.svg" class="imgContainer")
      progressBar(class="progressBar" :value="percentage" :colorCircle="colorCircle")
      v-img(:src="data.status.statusName === 'Available' ? statusImg : statusProcessImg" :max-width="sizeImg" :max-height="sizeImg" class="faceMachine")
      v-progress-circular(class="circularBar" :rotate="-90" :size="sizeProcessCircular" :width="widthProcessCircular" :value="percentage" :color="processColor")
      v-progress-linear(class="linearBar" :height="heightProcessLinear" :value="percentage" :color="processColor" )
    .d-flex.justify-center(v-if="data.status.statusName !== 'Available'")
      v-card.mb-6.d-flex.justify-center.align-center(width="192px" height="72px")
        h2.font-weight-medium {{ displayTime() }}
    v-btn.mb-6.text-capitalize(v-else width="100%" outlined  @click="insertCoin" style={color:"#DF3F69"} :class="insertCoinValue == '1' ? '' : 'colorInsertBtn'")
      v-icon mdi-currency-usd
      | {{ currentCoin }}
    hr.mb-8.grey.lighten-5
    v-btn.white--text.text-capitalize(v-if="data.status.statusName !== 'Complete'" width="100%" height="46px" :disabled="!((currentCoin === maxProcessValue))" @click="startBtn" color="#6F5EE0") Start
    v-btn.white--text.text-capitalize(v-else width="100%" height="46px" :disabled="data.status.statusName !== 'Complete'" @click="completeBtn" color="#27AE60") Complete
  thankyouDialog(ref="thankyouDialog" @saveData="completeWashing")
</template>

<script>
export default {
  props: {
    data: {
      default: null,
      type: Object
    },
    currentTime: {
      default: 0,
      type: Number
    }
  },
  data () {
    return {
      colorCircle: '',
      processColor: '',
      interval: {},
      insertCoinValue: '',
      currentCoin: 0,
      processValue: 0,
      maxProcessValue: this.data.price.price,
      // maxProcessValue: this.data.test.maxProcessValue,
      heightValue: '650px'
    }
  },
  computed: {
    statusImg () {
      const result = (this.processValue * 100) / this.maxProcessValue
      if (result === 0) {
        return '/progress/sad-face.svg'
      } else if (result <= 25) {
        return '/progress/sad-face.svg'
      } else if (result === 50) {
        return '/progress/neutral-face.svg'
      } else if (result <= 75 || result < 99) {
        return '/progress/neutral-face.svg'
      } else if (result === 100) {
        return '/progress/happy-face.svg'
      } else {
        return ''
      }
    },
    statusProcessImg () {
      if (this.data.status.process === 'Soaking') {
        return '/progress/status/Soaking.svg'
      } else if (this.data.status.process === 'Washing') {
        return '/progress/status/Washing.svg'
      } else if (this.data.status.process === 'Rinsing') {
        return '/progress/status/Rinsing.svg'
      } else if (this.data.status.process === 'Spinning') {
        return '/progress/status/Spinning.svg'
      } else if (this.data.status.process === 'Complete') {
        return '/progress/status/Complete.svg'
      } else {
        return ''
      }
    },
    percentage () {
      if (this.data.status.statusName === 'Washing' || this.data.status.statusName === 'Complete') {
        const result = (this.data.time.timeCountDown - this.currentTime) * (100 / this.data.time.timeCountDown)
        return result
      } else {
        const resultValue = this.processValue * (100 / this.maxProcessValue)
        return resultValue
      }
    },
    heightProcessLinear () {
      if (this.$vuetify.breakpoint.xlOnly) {
        return '25'
      } else if (this.$vuetify.breakpoint.lgOnly) {
        return '20'
      } else if (this.$vuetify.breakpoint.mdOnly) {
        return '15'
      } else if (this.$vuetify.breakpoint.smOnly) {
        return '25'
      } else if (this.$vuetify.breakpoint.width <= 375) {
        return '19'
      } else {
        return '22'
      }
    },
    sizeProcessCircular () {
      if (this.$vuetify.breakpoint.xlOnly) {
        return '228'
      } else if (this.$vuetify.breakpoint.lgOnly) {
        return '202'
      } else if (this.$vuetify.breakpoint.mdOnly) {
        return '150'
      } else if (this.$vuetify.breakpoint.smOnly) {
        return '228'
      } else if (this.$vuetify.breakpoint.width <= 375) {
        return '190'
      } else {
        return '210'
      }
    },
    widthProcessCircular () {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return '20'
      } else if (this.$vuetify.breakpoint.mdOnly) {
        return '15'
      } else if (this.$vuetify.breakpoint.smOnly) {
        return '20'
      } else {
        return '20'
      }
    },
    sizeImg () {
      if (this.$vuetify.breakpoint.xlOnly) {
        return '100px'
      } else if (this.$vuetify.breakpoint.lgOnly) {
        return '80px'
      } else if (this.$vuetify.breakpoint.mdOnly) {
        return '60px'
      } else {
        return ''
      }
    }
  },
  mounted () {
    this.changeColor()
    this.changeHeight()
  },
  methods: {
    insertCoin () {
      // this.insertCoinValue = 1
      if (this.currentCoin === this.maxProcessValue) {
        return this.maxProcessValue
      } else {
        this.currentCoin += 10
        this.processValue += 10
      }
    },
    startBtn () {
      this.$emit('start', this.data)
      this.colorCircle = 'blue'
      this.heightValue = '668px'
      this.processColor = '#2F80ED'
      // this.processValue = 0
      this.currentCoin = 0
      // this.interval = setInterval(() => {
      //   // console.log('process value', this.processValue)
      //   // this.processValue += 1
      //   if (this.processValue === this.percentage) {
      //     this.processColor = '#27AE60'
      //     this.colorCircle = 'green'
      //     clearInterval(this.interval)
      //   }
      // }, 1000)
    },
    displayTime () {
      const minutes = Math.floor(this.currentTime / 60)
      const seconds = this.currentTime % 60
      return `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`
    },
    completeBtn () {
      this.$refs.thankyouDialog.openDialog()
    },
    completeWashing () {
      this.heightValue = '650px'
      this.processValue = 0
      this.colorCircle = 'red'
      this.maxProcessValue = this.data.price.price
      this.currentCoin = 0
      this.processColor = '#DF3F69'
      this.insertCoinValue = 0
      this.$refs.thankyouDialog.closeDialog()
      this.$emit('resetTime')
    },
    changeColor () {
      if (this.data.status.statusName === 'Available') {
        this.processColor = '#DF3F69'
        this.colorCircle = 'red'
      } else if (this.data.status.statusName === 'Washing') {
        this.processColor = '#2F80ED'
        this.colorCircle = 'blue'
      } else if (this.data.status.statusName === 'Complete') {
        this.processColor = '#27AE60'
        this.colorCircle = 'green'
      }
    },
    changeHeight () {
      if (this.data.status.statusName === 'Available') {
        this.heightValue = '650px'
      } else {
        this.heightValue = '668px'
      }
    }
  }
}
</script>

<style>
  .colorInsertBtn{
    color: black !important;
  }
  .circularBar {
  position: absolute;
  top: 57%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  }
  .linearBar{
    position: absolute;
    width: 104px;
    top: 3%;
    left: 4%;
    border-radius: 16px;
  }
  .progressBar{
    position: absolute;
    top: 12px;
    left: 76.6%;
  }
  .faceMachine {
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .imgContainer {
    position: relative;
  }

@media only screen and (max-width: 600px) {
  .linearBar {
    width: 95px;
    top: 3.3%;
    left: 3.8%;
  }
  .circularBar{
    top:56.5%
  }
}

@media only screen and (min-width: 600px) and (max-width: 960px) {
  .progressBar{
    top: 14px;
    left: 76.8%;
  }
  .linearBar {
    width: 101px;
    left: 4%;
  }
  .circularBar{
    top:56.5%
  }
}

@media only screen and (min-width: 960px) and (max-width: 1264px) {
  .progressBar{
    top: 10px;
    left: 76.5%;
  }
  .linearBar {
    width: 70px;
    left: 3.1%;
  }
}

@media only screen and (min-width: 1264px) and (max-width: 1904px) {
  .linearBar {
    width: 90px;
  }
}

@media only screen and (min-width: 1904px) {
  .linearBar {
    width: 104px;
  }

  .progressBar{
    top: 14px;
    left: 77%;
  }

}
</style>
