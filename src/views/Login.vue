<template>
  <div class="Login">
    <b-container fluid>
      <b-row>
        <b-col md="6">
          <h1 class="h5">登入</h1>
          <small class="d-flex justify-content-end mb-2">
            沒有帳號
            <b-link :to="{path: '/register'}" class="ml-1">點我註冊</b-link>
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
                    v-model="email"
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
                    v-model="password"
                    type="password"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="輸入密碼"
                  ></b-form-input>
                  <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </ValidationProvider>
              <p class="text-center py-2">OR</p>
              <b-button variant="outline-primary" size="lg" class="btn-block mb-2">使用 Google 登入</b-button>
              <div class="d-flex justify-content-end">
                <b-button
                  :disabled="invalid"
                  :to="{ path:'/landlord' }"
                  variant="primary"
                  size="lg"
                  class="btn-block"
                >登入</b-button>
              </div>
              <router-view></router-view>
            </b-form>
          </ValidationObserver>
        </b-col>
        <b-col md="6" class="p-0">
          <div
            class="banner-img bg-cover"
            style="height: 100vh;background-image: url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80')"
          ></div>
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
  name: 'Login',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      value: '',
      email: '',
      password: ''
    }
  },
  methods: {
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
}
</script>
