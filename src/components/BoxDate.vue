<template>
  <div class="reservation-date">
    <h1 class="h3 text-center my-4">居住日期</h1>
    <ValidationObserver ref="observer" v-slot="{ passes, invalid }">
      <b-form @submit.prevent="passes(onSubmit)" @reset="resetForm">
        <b-row class="justify-content-center mb-5">
          <b-col md="5">
            <div class="steps-line">
              <div class="steps-pointer"></div>
              <div class="steps-pointer active"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
            </div>
          </b-col>
        </b-row>
        <div class="mb-2">
          <ValidationProvider rules="required" name="開始日期" v-slot="{ errors, valid }">
            <label for="example-datepicker">開始日期</label>
            <b-form-datepicker
              id="startdatepicker"
              v-model="startDate"
              class="mb-2"
              placeholder="選擇開始日期"
              :state="errors[0] ? false : (valid ? true : null)"
            ></b-form-datepicker>
            <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
          </ValidationProvider>
        </div>
        <div>
          <ValidationProvider rules="required" name="結束日期" v-slot="{ errors, valid }">
            <label for="example-datepicker">結束日期</label>
            <b-form-datepicker
              id="enddatepicker"
              v-model="endDate"
              class="mb-2"
              placeholder="選擇結束日期"
              :state="errors[0] ? false : (valid ? true : null)"
            ></b-form-datepicker>
            <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
          </ValidationProvider>
        </div>
        <b-input-group-append class="mt-5">
          <b-button :to="{ path:'/rent' }" variant="outline-primary" size="lg" class="w-50 mr-1">上一步</b-button>
          <b-button
            :disabled="invalid"
            :to="{ path:'/rent/reason' }"
            variant="primary"
            size="lg"
            class="w-50"
            type="submit"
            @click="clickfu"
          >下一步</b-button>
          <router-view></router-view>
        </b-input-group-append>
      </b-form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider, localize } from 'vee-validate'

import TW from 'vee-validate/dist/locale/zh_TW.json'

localize('zh_TW', TW)

export default {
  name: 'BoxDate',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      value: '',
      startDate: '',
      endDate: ''
    }
  },
  methods: {
    clickfu () {
      this.$store.commit('STARTDATE', this.startDate)
      this.$store.commit('ENDDATE', this.endDate)
    },
    onSubmit () {
      console.log('Form submitted yay!')
    },
    resetForm () {
      this.rentInfo.startDate = ''
      this.rentInfo.endDate = ''
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    }
  },
  computed: {
    ...mapGetters(['rentInfo'])
  }
}
</script>
