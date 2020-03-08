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
            <ValidationProvider
              rules="required|length:4|numeric"
              name="卡號"
              v-slot="{ valid, errors }"
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
          </b-col>
          <!-- <b-col class="d-flex align-items-end">
                <img src="../assets/Group 323.png" width="75" class="p-2 border" />
          </b-col>-->
        </b-row>
        <div class="mb-2">
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
        <b-row>
          <b-col>
            <ValidationProvider rules="required" name="到期日" v-slot="{ valid, errors }">
              <label for>到期日</label>
              <b-form-select
                v-model="endDateSelected1"
                :options="endDateOptions1"
                :state="errors[0] ? false : (valid ? true : null)"
                type="text"
              ></b-form-select>
              <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </ValidationProvider>
            <ValidationProvider rules="required" name="到期日" v-slot="{ valid, errors }">
              <b-form-select
                v-model="endDateSelected2"
                :options="endDateOptions1"
                :state="errors[0] ? false : (valid ? true : null)"
                type="text"
              ></b-form-select>
              <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </ValidationProvider>
          </b-col>
          <b-col>
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
          </b-col>
        </b-row>
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
          >下一步</b-button>
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
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      endDateOptions2: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      cardNumber: ''
    }
  },
  methods: {
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
