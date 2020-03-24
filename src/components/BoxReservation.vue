<template>
  <div class="BoxReservation">
      <h1 class="h3 text-center my-4">選擇預約時間</h1>
       <ValidationObserver ref="observer" v-slot="{ passes, invalid}">
      <b-form @submit.prevent="passes(onSubmit)" @reset="resetForm">
      <div class="my-5">
        <p class="font-weight-bold text-primary h4 mb-2">
          {{ $route.params.dateValue }}
        </p>
        <b-form inline>
          <label class="sr-only">搜尋房源</label>
          <ValidationProvider
              rules="required"
            >
          <b-form-select
            v-model="ampmSelected"
            :options="ampmOptions"
            size="lg"
            class="mb-2 mr-sm-2 mb-sm-0"
          ></b-form-select>
          </ValidationProvider>
          <ValidationProvider
              rules="required"
            >
          <b-form-select
            v-model="timeSelected"
            :options="timeOptions"
            size="lg"
            class="mb-2 mr-sm-2 mb-sm-0"
          ></b-form-select>
          </ValidationProvider>
        </b-form>
      </div>
      <b-input-group-append>
        <b-button :to="{ path:'/houses/:id' }" variant="outline-primary" size="lg" class="w-50 mr-1">取消</b-button>
        <b-button
          :disabled="invalid"
          @click="reservation"
          variant="primary"
          size="lg"
          class="w-50"
           >
           確認預約
        </b-button>
        <router-view></router-view>
      </b-input-group-append>
      </b-form>
       </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'BoxReservation',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      value: '',
      ampmSelected: '上午',
      ampmOptions: [
        { value: '上午', text: '上午' },
        { value: '下午', text: '下午' }
      ],
      timeSelected: '11:00',
      timeOptions: [
        { value: '11:00', text: '11:00' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      params: {

      },
      status: {},
      reservationId: 0
    }
  },
  methods: {
    reservation () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/reservation`
      const data = { date: this.params.dateValue, hour: vm.ampmSelected, time: vm.timeSelected, userId: this.status.id, houseId: this.params.houseId, landlordId: this.$route.params.landlordId, landlordEmail: this.$route.params.landlordEmail, lat: this.params.lat, lng: this.params.lng }
      this.axios.post(api, data).then(response => {
        vm.reservationId = response.data.id

        this.$router.push({ name: 'BoxSuccess', params: { landlordEmail: this.$route.params.landlordEmail, reservationId: vm.reservationId } })
      })
    },
    onSubmit () {
      // console.log('Form submitted yay!')
    },
    resetForm () {
      this.cardIput1 = ''
      this.cardIput2 = ''
      this.cardIput3 = ''
      this.cardIput4 = ''
      this.endDateSelected1 = ''
      this.endDateSelected2 = ''
      this.cardNumber = ''

      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    }
  },
  created () {
    this.params.dateValue = this.$route.params.dateValue
    this.params.houseId = this.$route.params.houseId
    this.params.lat = this.$route.params.lat
    this.params.lng = this.$route.params.lng
    this.status = JSON.parse(localStorage.getItem('STATUS'))
  }
}
</script>

<style scoped lang="scss">
</style>
