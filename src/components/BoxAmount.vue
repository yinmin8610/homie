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
        <b-form-spinbutton id="sb-adult" @input="clickfu('adult')" :value="rentInfo.adult" min="0" max="10" step="1"></b-form-spinbutton>
      </b-col>
      <b-col>
        <label for="sb-step">兒童</label>
        <b-form-spinbutton id="sb-child" @input="clickfu('child')" :value="rentInfo.child" min="0" max="10" step="1"></b-form-spinbutton>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <label for="sb-step">幼兒</label>
        <b-form-spinbutton id="sb-baby" @input="clickfu('baby')" :value="rentInfo.baby" min="0" max="10" step="1"></b-form-spinbutton>
      </b-col>
      <b-col>
        <label for="sb-step">寵物</label>
        <b-form-spinbutton id="sb-pet" @input="clickfu('pet')" :value="rentInfo.pet" min="0" max="10" step="1"></b-form-spinbutton>
      </b-col>
    </b-row>
    <b-input-group-append class="mt-5">
      <b-button @click="pathLink" variant="outline-primary" size="lg" class="w-50 mr-1">取消</b-button>
      <b-button @click="passInfo" :to="{ path: '/rent/date' }" variant="primary" size="lg" class="w-50">下一步</b-button>
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
import { mapGetters } from 'vuex'

export default {
  name: 'Reservation',
  components: {
    // ValidationObserver,
    // ValidationProvider
  },
  data () {
    return {
      // value: '',
      landlordInfo: {}
    }
  },
  methods: {
    pathLink () {
      if (this.$route.params.srcName === 'Record') {
        this.$router.push({ path: '/reservationRecord' })
      } else {
        this.$router.push({ path: '/houses/:id' })
      }
    },
    clickfu (name) {
      switch (name) {
        case 'adult':
          this.$store.commit('ADULT')
          break
        case 'child':
          this.$store.commit('CHILD')
          break
        case 'baby':
          this.$store.commit('BABY')
          break
        case 'pet':
          this.$store.commit('PET')
          break
      }
    },
    passInfo () {
      this.$store.commit('RENTLANDLORD', this.landlord)
    }

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
  },
  computed: {
    ...mapGetters(['rentInfo'])
  },
  created () {
    this.landlord = {
      landlordId: this.$route.params.landlordId,
      landlordEmail: this.$route.params.landlordEmail,
      lat: this.$route.params.lat,
      lng: this.$route.params.lng,
      houseId: this.$route.params.houseId
    }
    // if (this.$store.state.rentInfo.reason === '') {
    //   this.$router.push(`/houses/${this.landlord.houseId}`)
    // }
  }
}
</script>
