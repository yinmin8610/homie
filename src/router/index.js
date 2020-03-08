import Vue from 'vue'
import VueRouter from 'vue-router'
import ErrorPage from '@/views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: ErrorPage // 404
  },
  // 登入前
  {
    path: '/',
    name: '',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/houses',
        name: 'Search',
        component: () => import('../views/Search.vue')
      },
      {
        path: '/houses/:id',
        name: 'Detail',
        component: () => import('../views/Detail.vue')
      },
      {
        path: '/landlord',
        name: 'Landlord',
        component: () => import('../views/Landlord.vue')
      }
    ]
  },
  // 登入後
  {
    path: '/',
    name: '',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/tenant',
        name: 'Tenant',
        component: () => import('../views/Tenant.vue')
      },
      {
        path: '/reservation',
        name: '',
        component: () => import('../views/Reservation.vue'),
        children: [
          {
            path: '',
            name: 'BoxReservation',
            component: () => import('../components/BoxReservation.vue')
          },
          {
            path: 'success',
            name: 'BoxSuccess',
            component: () => import('../components/BoxSuccess.vue')
          }
        ]
      },
      {
        path: '/rent',
        name: '',
        component: () => import('../views/Rent.vue'),
        children: [
          {
            path: '',
            name: 'amount',
            component: () => import('../components/BoxAmount.vue')
          },
          {
            path: 'date',
            name: 'date',
            component: () => import('../components/BoxDate.vue')
          },
          {
            path: 'reason',
            name: 'reason',
            component: () => import('../components/BoxReason.vue')
          },
          {
            path: 'payment',
            name: 'payment',
            component: () => import('../components/BoxPayment.vue')
          },
          {
            path: 'successs',
            name: 'successs',
            component: () => import('../components/BoxSuccesss.vue')
          }
        ]
      }
    ]
  },
  // 需要改
  {
    path: '/',
    name: '',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Record',
        component: () => import('../views/Record.vue')
      },
      {
        path: '/record2',
        name: 'Record2',
        component: () => import('../views/Record2.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
