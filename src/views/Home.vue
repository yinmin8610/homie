<template>
  <div class="Home">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
