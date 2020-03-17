<template>
  <div class="reservation-success">
    <h1 class="h3 text-center my-4">預約成功</h1>
    <div class="d-flex justify-content-center mb-5">
      <img src="../assets/images/success.jpg" height="300" alt />
    </div>
    <b-input-group-append>
      <b-button :to="{ path:'/houses' }" variant="outline-primary" size="lg" class="w-50 mr-1">繼續逛</b-button>
      <b-button :to="{ path:'/tenant' }" variant="primary" size="lg" class="w-50">查看紀錄</b-button>
      <router-view></router-view>
    </b-input-group-append>
  </div>
</template>

<script>
export default {
  name: 'reservation-success',
  components: {}
}
</script>
