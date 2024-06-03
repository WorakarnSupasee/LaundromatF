<template lang="pug">
//- .d-flex.justify-center(:style="{ backgroundImage: `url(${backgroundPage})` }")
.d-flex.justify-center(:style="{ backgroundImage: `url(${'https://static.tildacdn.com/tild3862-3632-4261-b433-313830666262/Path.svg'})` }")
  v-card.my-6()
    v-row.ma-10
      v-icon(color="blue") mdi-heart
      h3.ml-1.blue--text ghostlamp
    //- v-container
    v-row.ma-10
      v-col.cols-8
        v-img(:src="CounterImg" max-width="700")
      v-col.cols-4
        h1.font-weight-regular.black--text Welcome Back :)
        p.mt-2.font-weight-light.black--text <br> to keep connected with us please login with your personal <br> information by email address and password
          v-icon(color="#FFC359") mdi-bell
        v-form.mt-8(ref="form" v-model="validForm")
          //- text field
          v-text-field.white.pb-0(ref="emailField" v-model="email" filled hide-details :rules="emailRules" required)
            template(#label)
              span.grey--text Email Address
            template(#prepend-inner)
              v-icon.mx-3.grey--text mdi-email-outline
            template(#append)
              v-icon(v-if="checkEmail()" color="green") mdi-check-circle
              v-icon(v-else="" color="red") mdi-close-circle
          v-text-field.white(ref="passwordField" v-model="password" type="password" filled hide-details :rules="passwordRules" required)
            template(#label)
              span.grey--text Password
            template(#prepend-inner)
              v-icon.mx-3.grey--text mdi-spin mdi-lock
            template(#append)
              v-icon(v-if="checkPassword()" color="green") mdi-check-circle
              v-icon(v-else color="red") mdi-close-circle
          //- check box
          .d-flex.justify-space-between.align-center
            v-checkbox(v-model="checkbox" color="green" on-icon="mdi-check-circle" off-icon="mdi-checkbox-blank-circle-outline")
              template(#label)
                span.black--text.font-weight-light Remember Me
            p.mb-0.black--text.font-weight-light Forget Password
          //- button
          .my-5
            v-btn.mr-4.mb-1.text-capitalize(color="primary" rounded @click="summitForm") Login Now
            v-btn.mb-1.black--text.text-capitalize(color="white" rounded) Create Account
        p.black--text.font-weight-light Or you can join with
        v-btn.mx-2(fab color="white" small)
          v-img(src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width="20")
        v-btn.mx-2(fab color="indigo darken-1" small)
          v-icon.white--text mdi-facebook
        v-btn.mx-2(fab color="blue" small)
          v-icon.white--text mdi-twitter
</template>

<script>
import counterImg from '~/assets/img/counter.png'
import bgPage from '~/assets/img/bg-green.png'
export default {
  name: 'LoginPage',
  components: {},
  layout: 'login',
  data () {
    return {
      validForm: true,
      email: '',
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 4) || 'Name must be more than 4 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      CounterImg: counterImg,
      backgroundPage: bgPage,
      checkbox: false
    }
  },
  computed: {
  },
  created () {},
  mounted () {},
  methods: {
    summitForm () {
      if (this.$refs.form && this.$refs.form.validate()) {
        alert('Login Succeed')
        this.$router.push({ path: '/' })
      } else {
        // alert('Email or Password is not correct')
      }
    },
    checkEmail () {
      if (this.$refs.emailField && this.$refs.emailField.valid) {
        return this.$refs.emailField.valid
      } else {
        return false
      }
    },
    checkPassword () {
      if (this.$refs.passwordField && this.$refs.passwordField.valid) {
        return this.$refs.passwordField.valid
      } else {
        return false
      }
    }
  }
}
</script>
