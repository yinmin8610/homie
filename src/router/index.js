import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('../views/Reservation.vue')
  },
  {
    path: '/landlord',
    name: 'Landlord',
    component: () => import('../views/Landlord.vue')
  },
  {
    path: '/tenant',
    name: 'Tenant',
    component: () => import('../views/Tenant.vue')
  },
  {
    path: '/record',
    name: 'Record',
    component: () => import('../views/Record.vue')
  },
  {
    path: '/house_record',
    name: 'HouseRecord',
    component: () => import('../views/HouseRecord.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
