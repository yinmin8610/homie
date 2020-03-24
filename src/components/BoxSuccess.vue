<template>
  <div class="reservation-success">
    <h1 class="h3 text-center my-4">預約成功</h1>
    <div class="d-flex justify-content-center mb-5 flex-column">
        <div>房東姓名：{{this.$route.params.landlordEmail}}</div>
        <div>預約日期：{{data[0].date}}</div>
        <div>預約時間：{{data[0].hour}}{{data[0].time}}</div>
        <!-- <div>預約房型：{{}}</div> -->
        <small class="text-secondary">感謝您的預約，房東會再與您聯繫</small>
      <!-- <img src="../assets/images/success.jpg" height="300" alt /> -->
    </div>
    <b-input-group-append>
      <b-button :to="{ path:'/houses' }" variant="outline-primary" size="lg" class="w-50 mr-1">繼續逛</b-button>
      <b-button :to="{ path:'/tenant/:id' }" variant="primary" size="lg" class="w-50">查看紀錄</b-button>
      <router-view></router-view>
    </b-input-group-append>
  </div>
</template>

<script>
export default {
  name: 'reservation-success',
  data () {
    return {
      reservation: [],
      data: []
    }
  },
  methods: {
    async getData () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/reservation`
      // console.log(this.$route.params.reservationId)
      await this.$http.get(url).then(response => {
        vm.reservation = response.data
        vm.reservation.forEach(item => {
          if (item.id === this.$route.params.reservationId) {
            vm.data.push(item)
            // console.log(vm.data)
          }
        })
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>
