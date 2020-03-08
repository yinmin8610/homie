<template>
  <div class="Error">
    <div class="h-100" style="background-image:url('../assets/404.png')"></div>
    <p class="text-primary h3">頁面不存在</p>
    <b-button :to="{ path: '/'}" variant="primary" size="lg" >回首頁</b-button>
  </div>
</template>
