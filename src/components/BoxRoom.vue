<template>
  <div class="add-type">
    <h1 class="h3 text-center my-4">房間資訊</h1>
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
    <div class="mb-2">
      <ValidationObserver ref="observer" v-slot="{ passes, invalid }">
        <b-form @submit.prevent="passes(onSubmit)" @reset="resetForm">
          <b-row class="mb-2">
            <b-col>
              <ValidationProvider name="房間名稱" rules="required|max:15" v-slot="{ valid, errors }">
                <b-form-group id="input-room-name" label="房間名稱" label-for="input-name" class="mb-2">
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
          </b-row>
          <b-row class="mb-2">
            <b-col>
              <ValidationProvider name="房間類型" rules="required" v-slot="{ valid, errors }">
                <b-form-group
                  id="input-room-pattern"
                  label="房間類型"
                  label-for="input-pattern"
                  class="mb-2"
                >
                  <b-form-select
                    id="input-pattern"
                    v-model="patternSelected"
                    :options="patternOptions"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :state="errors[0] ? false : (valid ? true : null)"
                  ></b-form-select>
                </b-form-group>
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </ValidationProvider>
            </b-col>

            <b-col>
              <ValidationProvider name="房間坪數" rules="required|numeric" v-slot="{ valid, errors }">
                <b-form-group
                  id="input-room-square"
                  label="房間坪數"
                  label-for="input-square"
                  class="mb-2"
                >
                  <b-form-input
                    id="input-square"
                    type="text"
                    v-model="square"
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
              <ValidationProvider name="容納房客" rules="required" v-slot="{ valid, errors }">
                <b-form-group
                  id="input-room-people"
                  label="容納房客"
                  label-for="input-people"
                  class="mb-2"
                >
                  <b-form-input
                    id="input-people"
                    type="number"
                    v-model="people"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :state="errors[0] ? false : (valid ? true : null)"
                  ></b-form-input>
                </b-form-group>
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </ValidationProvider>
            </b-col>
            <b-col>
              <ValidationProvider name="房間租金" rules="required|numeric" v-slot="{ errors, valid }">
                <b-form-group
                  id="input-room-rental"
                  label="房間租金"
                  label-for="input-people"
                  class="mb-2"
                >
                  <b-form-input
                    id="input-rental"
                    type="text"
                    v-model="rental"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :state="errors[0] ? false : (valid ? true : null)"
                  ></b-form-input>
                </b-form-group>
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </ValidationProvider>
            </b-col>
          </b-row>
          <b-input-group-append class="mt-5">
            <b-button
              :to="{ path:'/addHousing/photo' }"
              variant="outline-primary"
              size="lg"
              class="w-50 mr-1"
            >上一步</b-button>
            <b-button
              :disabled="invalid"
              :to="{ path:'/addHousing/facility' }"
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
      patternSelected: '',
      patternOptions: [
        { text: '選擇類型' },
        { text: '雅房' },
        { text: '獨立套房' },
        { text: '分租套房' }
      ],
      square: '',
      people: '',
      rental: ''
    }
  },
  methods: {
    onSubmit () {
      // console.log('Form submitted yay!')
    },
    resetForm () {
      this.textarea = ''
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    }
  }
}
</script>
