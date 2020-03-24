<template>
  <div class="add-type">
    <h1 class="h3 text-center my-4">房源資訊</h1>
    <ValidationObserver ref="observer" v-slot="{ passes, invalid }">
      <b-form @submit.prevent="passes(onSubmit)" @reset="resetForm">
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
            <ValidationProvider name="房源名稱" rules="required" v-slot="{ valid, errors }">
              <b-form-group
                id="input-housing-name"
                label="房源名稱"
                label-for="input-name"
                class="mb-2"
              >
                <b-form-input
                  id="input-name"
                  type="text"
                  v-model="name"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  :state="errors[0] ? false : (valid ? true : null)"
                ></b-form-input>
              </b-form-group>
              <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </ValidationProvider>
          </b-col>
          <b-col>
            <ValidationProvider name="房源間數" rules="required" v-slot="{ valid, errors }">
              <b-form-group
                id="input-housing-room"
                label="房源間數"
                label-for="input-room"
                class="mb-2"
              >
                <b-form-input
                  id="input-room"
                  type="number"
                  v-model="room"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  :state="errors[0] ? false : (valid ? true : null)"
                ></b-form-input>
              </b-form-group>
              <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </ValidationProvider>
          </b-col>
        </b-row>

        <b-row class="mb-2">
          <b-col>
            <ValidationProvider name="房源縣市" rules="required" v-slot="{ valid, errors }">
              <b-form-group
                id="input-housing-county"
                label="房源縣市"
                label-for="input-county"
                class="mb-2"
              >
                <b-form-select
                  id="input-county"
                  v-model="countySelected"
                  :options="countyOptions"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  :state="errors[0] ? false : (valid ? true : null)"
                ></b-form-select>
              </b-form-group>
              <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </ValidationProvider>
          </b-col>
          <b-col>
            <ValidationProvider name="房源市區" rules="required" v-slot="{ valid, errors }">
              <b-form-group
                id="input-housing-dist"
                label="房源市區"
                label-for="input-dist"
                class="mb-2"
              >
                <b-form-select
                  id="input-dist"
                  v-model="distSelected"
                  :options="distOptions"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  :state="errors[0] ? false : (valid ? true : null)"
                ></b-form-select>
              </b-form-group>
              <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </ValidationProvider>
          </b-col>
          <b-col>
            <ValidationProvider name="房源地址" rules="required" v-slot="{ valid, errors }">
              <b-form-group
                id="input-housing-address"
                label="房源地址"
                label-for="input-address"
                class="mb-2"
              >
                <b-form-input
                  id="input-address"
                  type="text"
                  v-model="address"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  :state="errors[0] ? false : (valid ? true : null)"
                ></b-form-input>
              </b-form-group>
              <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </ValidationProvider>
          </b-col>
        </b-row>

        <ValidationProvider name="房屋守則" rules="required" v-slot="{ valid, errors  }">
          <label for="input-lease">房屋守則</label>
          <b-form-textarea
            id="input-lease"
            v-model="lease"
            type="text"
            :state="errors[0] ? false : (valid ? true : null)"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
        </ValidationProvider>

        <b-input-group-append class="mt-5">
          <b-button
            :to="{ path:'/addHousing' }"
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
  name: 'BoxInfo',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      value: '',
      name: '',
      room: '',
      countySelected: '',
      countyOptions: [{ text: '選擇縣市' }, { text: '1' }],
      distSelected: '',
      distOptions: [{ text: '選擇地區' }, { text: '1' }],
      address: '',
      lease: ''
    }
  },
  methods: {
    onSubmit () {
      // console.log('Form submitted yay!')
    },
    resetForm () {
      this.name = ''
      this.room = ''
      this.countySelected = ''
      this.distSelected = ''
      this.address = ''
      this.lease = ''
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    }
  }
}
</script>
