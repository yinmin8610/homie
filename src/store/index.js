import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    rentInfo: {
      adult: 0,
      child: 0,
      baby: 0,
      pet: 0,

      reason: ''

    }
  },
  mutations: {
    ADULT (state, payload) {
      state.rentInfo.adult += 1
    },
    CHILD (state, payload) {
      state.rentInfo.child += 1
    },
    BABY (state, payload) {
      state.rentInfo.baby += 1
    },
    PET (state, payload) {
      state.rentInfo.pet += 1
    },
    STARTDATE (state, payload) {
      console.log(payload)
      state.rentInfo.startDate = payload
    },
    ENDDATE (state, payload) {
      state.rentInfo.endDate = payload
    },
    REASON (state, payload) {
      state.rentInfo.reason = payload
    },
    CARDINPUT1 (state, payload) {
      state.rentInfo.cardInput1 = payload
    },
    CARDINPUT2 (state, payload) {
      state.rentInfo.cardInput2 = payload
    },
    CARDINPUT3 (state, payload) {
      state.rentInfo.cardInput3 = payload
    },
    CARDINPUT4 (state, payload) {
      state.rentInfo.cardInput4 = payload
    },
    FULLNAME (state, payload) {
      state.rentInfo.fullName = payload
    },
    ENDMONTH (state, payload) {
      state.rentInfo.endMonth = payload
    },
    ENDYEAR (state, payload) {
      state.rentInfo.endYear = payload
    },
    CARDNUMBER (state, payload) {
      state.rentInfo.cardNumber = payload
    },
    RENTLANDLORD (state, payload) {
      state.rentInfo.landlordInfo = payload
    }
  },
  actions: {
    ajax (context) {
      context.commit('DATA', 'res.data')
    }
  },
  getters: {
    rentInfo (state) {
      return state.rentInfo
    }
  },
  modules: {
  }
})
