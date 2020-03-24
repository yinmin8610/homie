<template>
  <div class="navBar">
    <b-navbar
      toggleable="md"
      type="light"
      variant="transparent"
      v-if="this.status.isLogin && this.status.user == 'member'"
      style="z-index: 1;"
    >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-brand :to="{ path: '/'}">HOMIE</b-navbar-brand>

      <b-nav-item :to="{ path: `/tenant/${this.status.id}` }" class="d-flex align-items-center order-md-1">
        <b-icon icon="person-fill" class="rounded bg-primary text-white"></b-icon>
      </b-nav-item>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="active" @click="switchLandlord">切換出租模式</b-nav-item>
          <b-nav-item href="#" class="active" @click="logout">登出</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-navbar
      toggleable="md"
      type="light"
      variant="transparent"
      v-else-if="this.status.isLogin == false && this.status.user == 'guest'"
      style="z-index: 1;"
    >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-brand :to="{ path: '/'}">HOMIE</b-navbar-brand>

      <b-nav-item @click.prevent="loginConfirm" class="d-flex align-items-center order-md-1">
        <b-icon icon="person-fill" class="rounded bg-primary text-white"></b-icon>
      </b-nav-item>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" v-b-modal.modal-register>註冊</b-nav-item>
          <b-nav-item href="#" v-b-modal.modal-login>登入</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-navbar
      toggleable="md"
      type="light"
      variant="transparent"
      v-else-if="this.status.isLogin && this.status.user == 'landlord'"
      style="z-index: 1;"
    >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-brand :to="{ path: '/'}">HOMIE</b-navbar-brand>

      <b-nav-item :to="{ path: `/landlord/${this.status.id}`}" class="d-flex align-items-center order-md-1">
        <b-icon icon="person-fill" class="rounded bg-primary text-white"></b-icon>
      </b-nav-item>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" @click="switchTenant">切換租屋模式</b-nav-item>
          <b-nav-item href="#" @click="logout">登出</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-modal id="modal-register" title="註冊" hide-footer>
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

          <ValidationProvider
            rules="required|confirmed:password"
            name="確認密碼"
            v-slot="{ valid, errors }"
          >
            <b-form-group label="確認密碼" label-for="input-password-confirm" class="mb-2">
              <b-form-input
                type="password"
                v-model="register.confirmation"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="重新輸入密碼"
              ></b-form-input>
              <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="暱稱" rules="required" v-slot="{ errors, valid }">
            <b-form-group id="input-resgister-name" label="暱稱" label-for="input-name" class="mb-2">
              <b-form-input
                id="input-name"
                v-model="register.name"
                type="text"
                placeholder="輸入暱稱"
                :state="errors[0] ? false : (valid ? true : null)"
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
                :options="register.genderOptions"
                class="mb-2 mr-sm-2 mb-sm-0"
                :state="errors[0] ? false : (valid ? true : null)"
              ></b-form-select>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="身份" rules="required" v-slot="{ valid, errors }">
            <b-form-group
              id="input-resgister-identity"
              label="身份"
              label-for="input-identity"
              class="mb-2"
            >
              <b-form-select
                id="input-identity"
                v-model="register.idSelected"
                :options="register.identityOptions"
                class="mb-2 mr-sm-2 mb-sm-0"
                :state="errors[0] ? false : (valid ? true : null)"
              ></b-form-select>
            </b-form-group>
          </ValidationProvider>
          <div class="d-flex justify-content-end">
            <b-button :disabled="invalid" type="submit" variant="primary" @click="signup">註冊</b-button>
          </div>
        </b-form>
      </ValidationObserver>
    </b-modal>

    <b-modal id="modal-login" title="登入" hide-footer>
      <ValidationObserver ref="observer" v-slot="{ passes, invalid }">
        <b-form @submit.prevent="passes(onSubmit)" @reset="resetForm">
          <ValidationProvider name="Email" rules="required|email" v-slot="{ errors, valid }">
            <b-form-group id="input-login-account" label="帳號" label-for="input-login-account">
              <b-form-input
                id="input-account"
                v-model="login.email"
                type="email"
                placeholder="輸入Email帳號"
                :state="errors[0] ? false : (valid ? true : null)"
              ></b-form-input>
              <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider name="密碼" rules="required|length:5" v-slot="{ errors, valid }">
            <b-form-group id="input-login-password" label="密碼" label-for="input-login-password">
              <b-form-input
                id="input-password"
                v-model="login.password"
                type="password"
                placeholder="輸入密碼"
                :state="errors[0] ? false : (valid ? true : null)"
              ></b-form-input>
              <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <div class="d-flex justify-content-end">
            <b-button :disabled="invalid" type="submit" variant="primary" @click="signin">登入</b-button>
          </div>
        </b-form>
      </ValidationObserver>
    </b-modal>

    <b-modal id="login-success" title="登入成功" hide-footer></b-modal>
    <b-modal id="login-fail" title="登入失敗" hide-footer></b-modal>

    <b-modal id="register-success" title="註冊成功" hide-footer></b-modal>
    <b-modal id="register-fail" title="註冊失敗" hide-footer></b-modal>

    <b-modal id="login-reject" title="請先登入" hide-footer></b-modal>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, localize } from 'vee-validate'
import TW from 'vee-validate/dist/locale/zh_TW.json'

localize('zh_TW', TW)

export default {
  name: 'NavBar',
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
        confirmation: '',
        name: '',
        genderSelected: 0,
        idSelected: 0,
        genderOptions: [
          { value: 0, text: '男' },
          { value: 1, text: '女' }
        ],
        identityOptions: [
          { value: 0, text: '學生' },
          { value: 1, text: '上班族' }
        ]
      },
      login: {
        email: '',
        password: ''
      },
      status: {
        isLogin: false,
        user: 'guest',
        account: '',
        id: null
      }
    }
  },
  methods: {
    async signup () {
      const vm = this
      let cacheAccount = null
      await this.axios.get(`${process.env.VUE_APP_APIPATH}/register`)
        .then(response => {
          const cacheData = response.data
          cacheAccount = cacheData.filter(member => { return member.email === vm.register.email })
        })

      if (cacheAccount.length) {
        return vm.$bvModal.show('register-fail')
      }

      await this.axios.post(`${process.env.VUE_APP_APIPATH}/register`, vm.register)
        .then(response => {
          // console.log('res' + response)
          vm.$bvModal.hide('modal-register')
          vm.register.email = ''
          vm.register.password = ''
          vm.register.confirmation = ''
          vm.register.name = ''
          vm.status.account = vm.register.email
          // localStorage.setItem('STATUS', JSON.stringify(this.status))
          vm.$bvModal.show('register-success')
        })
    },
    signin () {
      const vm = this
      let cacheAccount = null
      this.axios.get(`${process.env.VUE_APP_APIPATH}/register`).then(response => {
        const cacheData = response.data
        cacheAccount = cacheData.filter(member => {
          return (member.email === vm.login.email && member.password === vm.login.password)
        })
        if (cacheAccount.length) {
          const cacheId = cacheData.filter(member => {
            return member.email === vm.login.email
          })
          vm.status.id = cacheId[0].id
          vm.status.account = vm.login.email
          vm.$bvModal.hide('modal-login')
          vm.login.email = ''
          vm.login.password = ''
          vm.$bvModal.show('login-success')
          vm.status.isLogin = true
          vm.status.user = 'member'
          localStorage.setItem('STATUS', JSON.stringify(this.status))
        } else {
          return vm.$bvModal.show('login-fail')
        }
      })
    },
    logout () {
      this.status.isLogin = false
      this.status.user = 'guest'
      localStorage.setItem('STATUS', JSON.stringify(this.status))
      this.$router.push({ path: '/' })
    },
    loginConfirm () {
      let localData = []
      localData = JSON.parse(localStorage.getItem('STATUS'))

      if (localData.isLogin) {
        this.$router.push({ path: '/tenant' })
      } else {
        this.$bvModal.show('login-reject')
      }
    },
    storageData () {
      const localData = JSON.parse(localStorage.getItem('STATUS')) || false // 判斷是否有 localStorage 沒有就是false 就執行setItem
      if (!localData) {
        // 有值 true
        // this.status.isLogin = true
        localStorage.setItem('STATUS', JSON.stringify(this.status))
        return
      }
      this.status = localData
    },
    switchLandlord () {
      this.status.user = 'landlord'
      localStorage.setItem('STATUS', JSON.stringify(this.status))
      this.$router.push('/')
    },
    switchTenant () {
      this.status.user = 'member'
      localStorage.setItem('STATUS', JSON.stringify(this.status))
      this.$router.push('/')
    },
    onSubmit () {
      // console.log('Form submitted yay!')
    },
    resetForm () {
      this.register.email = ''
      this.register.password = ''
      this.register.confirmation = ''
      this.register.genderSelected = ''
      this.register.idSelected = ''
      this.login.email = ''
      this.login.password = ''
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    }
  },
  created () {
    this.storageData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
