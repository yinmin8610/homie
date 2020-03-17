import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'leaflet/dist/leaflet.css'
import './vee-validate'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log('還沒通過驗證')
    const status = JSON.parse(localStorage.getItem('STATUS')) || []

    if (status.isLogin === true) {
      next()
    } else {
      next(
        console.log('還沒通過驗證')
      )
    }
  } else {
    next()
  }
})
