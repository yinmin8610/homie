<template>
  <div class="navBar">
    <b-navbar toggleable="md" type="light" variant="transparent">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">HOMIE</b-navbar-brand>

      <b-nav-text href="#" class="d-flex align-items-center order-md-1">
        <b-icon icon="person-fill" class="rounded bg-primary text-white"></b-icon>
      </b-nav-text>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" v-b-modal.modal-register>註冊</b-nav-item>
          <b-nav-item href="#" v-b-modal.modal-login>登入</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-modal id="modal-register" title="BootstrapVue">
      <h2 class="my-4">註冊</h2>
      <b-form inline>
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
            required
            placeholder="輸入Email帳號"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-resgister-password"
          label="密碼"
          label-for="input-password"
          class="mb-2"
        >
          <b-form-input
            id="input-password"
            v-model="register.password"
            type="password"
            required
            placeholder="輸入密碼"
          ></b-form-input>
        </b-form-group>
      </b-form>
      <b-form inline>
        <b-form-group id="input-resgister-name" label="暱稱" label-for="input-name" class="mb-2">
          <b-form-input
            id="input-name"
            v-model="register.name"
            type="text"
            required
            placeholder="輸入暱稱"
          ></b-form-input>
        </b-form-group>
        <b-form-select
          v-model="register.genderSelected"
          :options="register.genderOptions"
          class="mb-2 mr-sm-2 mb-sm-0"
        ></b-form-select>
      </b-form>
      <b-form inline>
        <b-form-select
          v-model="register.idSelected"
          :options="register.identityOptions"
          class="mb-2 mr-sm-2 mb-sm-0"
        ></b-form-select>
        <b-button variant="primary" size="lg">註冊</b-button>
      </b-form>
    </b-modal>

    <b-modal id="modal-login" title="BootstrapVue">
      <h2 class="my-4">登入</h2>
      <b-form>
        <b-form-group id="input-login-account" label="帳號" label-for="input-login-account">
          <b-form-input
            id="input-account"
            v-model="login.email"
            type="email"
            required
            placeholder="輸入Email帳號"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-login-password" label="密碼" label-for="input-login-password">
          <b-form-input
            id="input-password"
            v-model="login.password"
            type="password"
            required
            placeholder="輸入密碼"
          ></b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      register: {
        email: '',
        password: '',
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
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
