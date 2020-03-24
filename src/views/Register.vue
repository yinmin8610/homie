<template>
  <div class="Register">
    <b-container fluid>
      <b-row>
        <b-col md="6" class="p-0">
          <div
            class="banner-img bg-cover"
            style="height: 100vh;background-image: url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80')"
          ></div>
        </b-col>

        <b-col md="6">
          <h1 class="h5">註冊</h1>
          <small class="d-flex justify-content-end mb-2">
            已有帳號
            <b-link :to="{path: '/login'}" class="ml-1">點我登入</b-link>
          </small>
          <ValidationObserver ref="observer" v-slot="{ passes, invalid }">
            <b-form @submit.prevent="passes(onSubmit)" @reset="resetForm">
              <ValidationProvider name="Email" rules="required|email" v-slot="{ errors, valid }">
                <b-form-group
                  id="input-resgister-account"
                  label="帳號"
                  label-for="input-account"
                  class="mb-2"
                >
                  <b-form-input
                    id="input-account"
                    v-model="register.email"
                    type="email"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="輸入Email帳號"
                  ></b-form-input>
                  <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </ValidationProvider>

              <ValidationProvider
                name="密碼"
                rules="required|length:5"
                vid="password"
                v-slot="{ errors, valid }"
              >
                <b-form-group label="密碼" class="mb-2">
                  <b-form-input
                    v-model="register.password"
                    type="password"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="輸入密碼"
                  ></b-form-input>
                  <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </ValidationProvider>
              <ValidationProvider name="性別" rules="required" v-slot="{ valid, errors }">
                <b-form-group
                  id="input-resgister-gender"
                  label="性別"
                  label-for="input-gender"
                  class="mb-2"
                >
                  <b-form-select
                    id="input-gender"
                    v-model="register.genderSelected"
                    :options="genderOptions"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :state="errors[0] ? false : (valid ? true : null)"
                  ></b-form-select>
                </b-form-group>
              </ValidationProvider>

              <ValidationProvider name="手機" rules="required|length:10" v-slot="{ valid, errors }">
                <b-form-group
                  id="input-resgister-phone"
                  label="手機"
                  label-for="input-phone"
                  class="mb-2"
                >
                  <b-form-input
                    id="input-phone"
                    v-model="register.phone"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :state="errors[0] ? false : (valid ? true : null)"
                  ></b-form-input>
                </b-form-group>
              </ValidationProvider>

              <!-- <ValidationProvider name="居住地區" rules="required" v-slot="{ valid, errors }">
                <b-form-group
                  id="input-resgister-area"
                  label="居住地區"
                  label-for="input-area"
                  class="mb-2"
                >
                  <b-form-select
                    id="input-area"
                    v-model="register.areaSelected"
                    :options="areaOptions"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :state="errors[0] ? false : (valid ? true : null)"
                  ></b-form-select>
                </b-form-group>
              </ValidationProvider>-->

              <div class="d-flex justify-content-end">
                <b-link :disabled="invalid" type="submit" variant="primary">下一步</b-link>
              </div>
            </b-form>
          </ValidationObserver>
        </b-col>

        <b-col md="6">
          <h1 class="h5">註冊</h1>
          <b-link :to="{path: '/login'}" class="d-flex justify-content-end mb-2">
            <small>點我登入</small>
          </b-link>
          <ValidationObserver ref="observer" v-slot="{ passes, invalid }">
            <b-form @submit.prevent="passes(onSubmit)" @reset="resetForm">
              <ValidationProvider name="簡介" rules="required" v-slot="{ errors, valid }">
                <label for="input-info">簡介</label>
                <b-form-textarea
                  id="input-info"
                  v-model="register.info"
                  type="text"
                  :state="errors[0] ? false : (valid ? true : null)"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
                <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
              </ValidationProvider>
              <div class="d-flex justify-content-end">
                <b-link :disabled="invalid" type="submit" variant="primary" class="mt-2">下一步</b-link>
              </div>
            </b-form>
          </ValidationObserver>
        </b-col>

        <b-col md="6">
          <h1 class="h5">註冊</h1>
          <b-link :to="{path: '/login'}" class="d-flex justify-content-end mb-2">
            <small>點我登入</small>
          </b-link>
          <label>個人照</label>
          <b-form-file
            id="input-resgister-account"
            class="mb-2"
            v-model="register.file"
            :state="Boolean(file)"
            drop-placeholder="拖曳至此"
          ></b-form-file>

          <div class="d-flex justify-content-end">
            <b-link
              :disabled="invalid"
              @click="signup"
              type="submit"
              variant="primary"
              class="mt-2"
            >註冊</b-link>
          </div>
        </b-col>

        <b-col md="6">
          <h1 class="h3 text-center my-4">註冊成功</h1>
          <div class="d-flex justify-content-center mb-5">
            <img src="../assets/images/success.jpg" height="300" alt />
          </div>
          <b-button :to="{ path:'/landlord' }" variant="primary" size="lg" class="btn-block">回首頁</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, localize } from 'vee-validate'
import TW from 'vee-validate/dist/locale/zh_TW.json'

localize('zh_TW', TW)

export default {
  name: 'Register',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      value: '',
      register: {
        email: '',
        password: '',
        genderSelected: 0,
        phone: '',
        // areaSelected: 0,
        info: '',
        file: null
      },
      genderOptions: [
        { value: 0, text: '男' },
        { value: 1, text: '女' }
      ],
      status: {
        isLogin: false,
        user: 'guest',
        account: '',
        id: null
      }
      // areaOptions: [
      //   { value: 0, text: '男' },
      //   { value: 1, text: '女' }
      // ]
    }
  },
  methods: {
    async signup () {
      const vm = this
      let cacheAccount = null
      await this.axios
        .get(`${process.env.VUE_APP_APIPATH}/register`)
        .then(response => {
          const cacheData = response.data
          cacheAccount = cacheData.filter(member => {
            return member.email === vm.register.email
          })
        })

      if (cacheAccount.length) {
        return vm.$bvModal.show('register-fail')
      }

      await this.axios
        .post(`${process.env.VUE_APP_APIPATH}/register`, vm.register)
        .then(response => {
          console.log('res' + response)
          vm.$bvModal.hide('modal-register')
          vm.register.email = ''
          vm.register.password = ''
          vm.register.confirmation = ''
          vm.register.name = ''
          vm.status.account = vm.register.email
          // localStorage.setItem('STATUS', JSON.stringify(this.status))
          vm.$bvModal.show('register-success')
        })
    }
  },
  onSubmit () {
    console.log('Form submitted yay!')
  },
  resetForm () {
    this.email = ''
    this.password = ''
    requestAnimationFrame(() => {
      this.$refs.observer.reset()
    })
  }
}
</script>
