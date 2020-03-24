<template>
  <div class="reservation-amount">
    <h1 class="h3 text-center my-4">居住原因</h1>
    <ValidationObserver ref="observer" v-slot="{ passes, invalid}">
      <b-form @submit.prevent="passes(onSubmit)" @reset="resetForm">
        <b-row class="justify-content-center mb-5">
          <b-col md="5">
            <div class="steps-line">
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer active"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
            </div>
          </b-col>
        </b-row>
        <ValidationProvider rules="required" name="居住原因" v-slot="{ errors, valid }">
          <b-form-textarea
            id="textarea"
            @update="clickfu"
            :value="rentInfo.reason"
            placeholder="輸入居住原因及用途，例如：上班"
            rows="3"
            max-rows="6"
            type="text"
            :state="errors[0] ? false : (valid ? true : null)"
          ></b-form-textarea>
          <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
        </ValidationProvider>
        <b-input-group-append class="mt-5">
          <b-button :to="{ path:'/rent/date' }" variant="outline-primary" size="lg" class="w-50 mr-1">上一步</b-button>
          <b-button :disabled="invalid" :to="{ path:'/rent/payment' }" variant="primary" size="lg" class="w-50">下一步</b-button>
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
  name: 'BoxReason',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    clickfu (e) {
      this.$store.commit('REASON', e)
    },
    onSubmit () {
      console.log('Form submitted yay!')
    },
    resetForm () {
      this.rentInfo.reason = ''
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
