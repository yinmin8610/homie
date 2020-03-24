<template>
  <div class="Error d-flex justify-content-center">
    <div class="">
      <div class="errorImg" :style="{backgroundImage:`url(${errorImg})`}"></div>
      <p class="text-primary display-5 text-center my-5">頁面不存在</p>
      <b-button :to="{ path: '/'}" variant="primary" size="lg" class="btn-block">回首頁</b-button>
    </div>
  </div>
</template>

<script>
import errorImg from '../assets/images/404.png'
export default {
  name: 'Error',
  data () {
    return {
      errorImg
    }
  }
}
</script>

<style scoped>
.errorImg {
  width: 500px;
  height: 240px;
  background-repeat: no-repeat;
}
</style>
