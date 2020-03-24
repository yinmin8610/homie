import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/404'
  },
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
        path: '/404',
        name: 'Error',
        component: () => import('../views/404.vue')
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
        path: '/landlord/:id',
        name: 'Landlord',
        component: () => import('../views/Landlord.vue')
      },
      {
        path: '/tenant/:id',
        name: 'Tenant',
        component: () => import('../views/Tenant.vue')
      },
      {
        path: '/reservationRecord',
        name: 'Record',
        component: () => import('../views/Record.vue')
      },
      {
        path: '/rentRecord',
        name: 'Record2',
        component: () => import('../views/Record2.vue')
      },
      {
        path: '/housingList',
        name: 'HousingList',
        component: () => import('../views/HousingList.vue')
      },
      {
        path: '/reservationList',
        name: 'ReservationList',
        component: () => import('../views/ReservationList.vue')
      }
    ]
  },
  // 房東新增房源
  {
    path: '/addHousing',
    name: '',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('../views/Reservation.vue'),
        children: [
          {
            path: '',
            name: 'Type',
            component: () => import('../components/BoxType.vue')
          },
          {
            path: 'info',
            name: 'Info',
            component: () => import('../components/BoxInfo.vue')
          },
          {
            path: 'photo',
            name: 'Photo',
            component: () => import('../components/BoxPhoto.vue')
          },
          {
            path: 'room',
            name: 'Room',
            component: () => import('../components/BoxRoom.vue')
          },
          {
            path: 'facility',
            name: 'Facility',
            component: () => import('../components/BoxFacility.vue')
          }
        ]
      }
    ]
  },
  // 房客預約
  {
    path: '/reservation',
    name: '',
    component: () => import('../views/Home.vue'),
    children: [

      {
        path: '',
        name: '',
        component: () => import('../views/Reservation.vue'),
        meta: { requiresAuth: true },
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
      }
    ]
  },
  // 房客租房
  {
    path: '/rent',
    name: '',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
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
  }
  // 後台登入
  // {
  //   path: '/admin',
  //   name: '',
  //   component: () => import('../views/Home.vue'),
  //   children: [
  //     {
  //       path: '',
  //       name: 'Login',
  //       component: () => import('../views/Login.vue')
  //     },
  //     {
  //       path: 'register',
  //       name: 'Register',
  //       component: () => import('../views/Register.vue')
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
