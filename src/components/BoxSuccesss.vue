<template>
  <div class="reservation-amount">
    <h1 class="h3 text-center my-4">完成租屋</h1>
    <b-row class="justify-content-center mb-5">
      <b-col md="5">
        <div class="steps-line">
          <div class="steps-pointer"></div>
          <div class="steps-pointer"></div>
          <div class="steps-pointer"></div>
          <div class="steps-pointer"></div>
          <div class="steps-pointer active"></div>
        </div>
      </b-col>
    </b-row>
    <div class="d-flex justify-content-center mb-5 flex-column">
      <div>房東姓名：{{ data[0].landlordInfo.landlordEmail }}</div>
      <div>開始租屋日期：{{ data[0].startDate }}</div>
      <div>結束租屋日期：{{ data[0].endDate }}</div>
      <div>居住人數：{{ data[0].adult + data[0].child + data[0].baby + data[0].pet }}</div>
      <small class="text-secondary">感謝您的租屋，住您居住愉快。</small>
      <!-- <img src="../assets/images/success.jpg" height="300" alt /> -->
    </div>
    <b-input-group-append>
      <b-button :to="{ path:'/houses' }" variant="outline-primary" size="lg" class="w-50 mr-1">繼續逛</b-button>
      <b-button
        :to="{ path:`/tenant/${this.status.id}` }"
        variant="primary"
        size="lg"
        class="w-50"
      >查看紀錄</b-button>
    </b-input-group-append>
  </div>
</template>
<script>
export default {
  name: 'RentSuccess',
  data () {
    return {
      status: {},
      data: []
    }
  },
  methods: {
    getData () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/rent`
      let rent = []

      this.$http.get(api).then(response => {
        rent = response.data
        rent.forEach(item => {
          if (item.id === this.$route.params.rentId) {
            vm.data.push(item)
            console.log(vm.data)
          }
        })
      })
    }
  },
  created () {
    this.getData()
    this.status = JSON.parse(localStorage.getItem('STATUS'))
  }
}
</script>
