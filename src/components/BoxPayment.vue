<template>
  <div class="reservation-amount">
    <h1 class="h3 text-center my-4">付費資訊</h1>
    <ValidationObserver ref="observer" v-slot="{ passes, invalid}">
      <b-form @submit.prevent="passes(onSubmit)" @reset="resetForm">
        <b-row class="justify-content-center mb-5">
          <b-col md="5">
            <div class="steps-line">
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer active"></div>
              <div class="steps-pointer"></div>
            </div>
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col>
            <label for>卡號</label>
            <div class="d-flex">
              <ValidationProvider
                rules="required|length:4|numeric"
                name="卡號"
                v-slot="{ valid, errors }"
                class="mr-auto"
              >
                <b-form-input
                  v-model="cardIput1"
                  placeholder="1234"
                  type="text"
                  :state="errors[0] ? false : (valid ? true : null)"
                ></b-form-input>
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </ValidationProvider>
              <ValidationProvider
                rules="required|length:4|numeric"
                name="卡號"
                v-slot="{ valid, errors }"
                class="mr-auto"
              >
                <b-form-input
                  v-model="cardIput2"
                  placeholder="5678"
                  type="text"
                  :state="errors[0] ? false : (valid ? true : null)"
                ></b-form-input>
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </ValidationProvider>
              <ValidationProvider
                rules="required|length:4|numeric"
                name="卡號"
                v-slot="{ valid, errors }"
                class="mr-auto"
              >
                <b-form-input
                  v-model="cardIput3"
                  placeholder="3456"
                  type="text"
                  :state="errors[0] ? false : (valid ? true : null)"
                ></b-form-input>
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </ValidationProvider>
              <ValidationProvider
                rules="required|length:4|numeric"
                name="卡號"
                v-slot="{ valid, errors }"
              >
                <b-form-input
                  v-model="cardIput4"
                  placeholder="2456"
                  type="text"
                  :state="errors[0] ? false : (valid ? true : null)"
                ></b-form-input>
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </ValidationProvider>
            </div>
          </b-col>
          <!-- <b-col class="d-flex align-items-end">
                <img src="../assets/Group 323.png" width="75" class="p-2 border" />
          </b-col>-->
        </b-row>
        <div class="d-flex">
        <div class="mb-2 mr-auto">
          <ValidationProvider rules="required" name="全名" v-slot="{ valid, errors }">
            <label for>全名</label>
            <b-form-input
              v-model="text"
              type="text"
              :state="errors[0] ? false : (valid ? true : null)"
            ></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
          </ValidationProvider>
        </div>

            <ValidationProvider rules="required" name="到期日" v-slot="{ valid, errors }" class="mr-auto">
              <label for>到期</label>
              <b-form-select
                v-model="endDateSelected1"
                :options="endDateOptions1"
                :state="errors[0] ? false : (valid ? true : null)"
                type="text"
                disabled-field="notEnabled"
              ></b-form-select>
              <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </ValidationProvider>
            <ValidationProvider rules="required" name="到期日" v-slot="{ valid, errors }" class="mr-auto">
              <label for>到期</label>
              <b-form-select
                v-model="endDateSelected2"
                :options="endDateOptions2"
                :state="errors[0] ? false : (valid ? true : null)"
                type="text"
                disabled-field="notEnabled"
              ></b-form-select>
              <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </ValidationProvider>

          <ValidationProvider
            rules="required|length:3|numeric"
            name="卡號"
            v-slot="{ valid, errors }"
          >
            <label for>CVV</label>
            <b-form-input
              v-model="cardNumber"
              placeholder="123"
              :state="errors[0] ? false : (valid ? true : null)"
            ></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
          </ValidationProvider>
        </div>

        <b-input-group-append class="mt-5">
          <b-button
            :to="{ path:'/rent/reason' }"
            variant="outline-primary"
            size="lg"
            class="w-50 mr-1"
          >上一步</b-button>
          <b-button
            :disabled="invalid"
            :to="{ path:'/rent/successs' }"
            variant="primary"
            size="lg"
            class="w-50"
            type="submit"
            @click="rentSuccess"
          >確認租屋</b-button>
          <router-view></router-view>
        </b-input-group-append>
      </b-form>
    </ValidationObserver>
  </div>
</template>

<script>
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
      cardIput1: '',
      cardIput2: '',
      cardIput3: '',
      cardIput4: '',
      text: '',
      endDateSelected1: null,
      endDateSelected2: null,
      endDateOptions1: [
        { value: null, text: '月', notEnabled: true },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: '7' },
        { value: '8', text: '8' },
        { value: '9', text: '9' },
        { value: '10', text: '10' },
        { value: '11', text: '11' },
        { value: '12', text: '12' }
      ],
      endDateOptions2: [
        { value: null, text: '年', notEnabled: true },
        { value: '2021', text: '2021' },
        { value: '2022', text: '2022' },
        { value: '2023', text: '2023' }
      ],
      cardNumber: ''
    }
  },
  methods: {
    rentSuccess () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/rent`

      vm.$http.post(api).then(response => {})
    },
    onSubmit () {
      console.log('Form submitted yay!')
    },
    resetForm () {
      this.cardIput1 = ''
      this.cardIput2 = ''
      this.cardIput3 = ''
      this.cardIput4 = ''
      this.text = ''
      this.endDateSelected1 = ''
      this.endDateSelected2 = ''
      this.cardNumber = ''

      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    }
  }
}
</script>
