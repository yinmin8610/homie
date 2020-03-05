<template>
  <div id="app">
    <Navbar></Navbar>
    <router-link to="/">註冊</router-link>
    <router-link to="/index">首頁</router-link>
    <router-link to="/search">搜尋</router-link>
    <router-link to="/detail">房屋</router-link>
    <router-link to="/reservation">預約</router-link>
    <router-link to="/landlord">房東</router-link>
    <router-link to="/tenant">房客</router-link>
    <router-link to="/record">記錄</router-link>
    <router-link to="/house_record">記錄</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/NavBar.vue'

export default {
  components: {
    Navbar
  },
  data () {
    return {}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
