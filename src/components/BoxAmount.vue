<template>
  <div class="reservation-amount">
    <h1 class="h3 text-center my-4">居住人數</h1>
    <!-- <ValidationObserver ref="observer" v-slot="{ passes }">
    <b-form @submit.prevent="passes(onSubmit)" @reset="resetForm">-->
    <b-row class="justify-content-center mb-5">
      <b-col md="5">
        <div class="steps-line">
          <div class="steps-pointer active"></div>
          <div class="steps-pointer"></div>
          <div class="steps-pointer"></div>
          <div class="steps-pointer"></div>
          <div class="steps-pointer"></div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col>
        <label for="sb-step">成人</label>
        <b-form-spinbutton id="sb-adult" v-model="adultAmount" min="0" max="10" step="1"></b-form-spinbutton>
      </b-col>
      <b-col>
        <label for="sb-step">兒童</label>
        <b-form-spinbutton id="sb-child" v-model="childAmount" min="0" max="10" step="1"></b-form-spinbutton>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <label for="sb-step">幼兒</label>
        <b-form-spinbutton id="sb-baby" v-model="babyAmount" min="0" max="10" step="1"></b-form-spinbutton>
      </b-col>
      <b-col>
        <label for="sb-step">寵物</label>
        <b-form-spinbutton id="sb-pet" v-model="petAmount" min="0" max="10" step="1"></b-form-spinbutton>
      </b-col>
    </b-row>
    <b-input-group-append class="mt-5">
      <b-button :to="{ path:'/rent' }" variant="outline-primary" size="lg" class="w-50 mr-1">取消</b-button>
      <b-button :to="{ path:'/rent/date' }" variant="primary" size="lg" class="w-50">下一步</b-button>
      <router-view></router-view>
    </b-input-group-append>
    <!-- </b-form>
    </ValidationObserver>-->
  </div>
</template>
<script>
// import { ValidationObserver, ValidationProvider, localize } from 'vee-validate'
// import TW from 'vee-validate/dist/locale/zh_TW.json'
// localize('zh_TW', TW)

export default {
  name: 'Reservation',
  components: {
    // ValidationObserver,
    // ValidationProvider
  },
  data () {
    return {
      // value: '',
      adultAmount: 0,
      childAmount: 0,
      babyAmount: 0,
      petAmount: 0
    }
  },
  methods: {
    //   onSubmit () {
    //     console.log('Form submitted yay!')
    //   },
    //   resetForm () {
    //     this.adultAmount = 0
    //     this.childAmount = 0
    //     this.babyAmount = 0
    //     this.petAmount = 0
    //     this.startDateValue = ''
    //     this.endDateValue = ''
    //     this.textarea = ''
    //     requestAnimationFrame(() => {
    //       this.$refs.observer.reset()
    //     })
    //   }
  }
}
</script>
