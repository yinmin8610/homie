<template>
  <div class="Rent">
    <Box></Box>
  </div>
</template>

<style scope lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

.steps-line {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.steps-line::after {
  content: "";
  position: absolute;
  height: 1px;
  background-color: #dde6fa;
  top: 50%;
  left: 0;
  right: 0;
}
.steps-pointer {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #dde6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  .active {
    content: "";
    height: 15;
    width: 15;
    display: block;
    background-color: white;
    border: 3px solid #6691fa;
    border-radius: 50%;
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
/*
  .steps-pointer::after{
    content:"";
    position: absolute;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid #6691FA;
    z-index: 1;
    transform: translateX(-50%);
    background-color: white;
  } */
</style>

<script>
import Box from '@/components/Box.vue'
export default {
  name: 'Rent',
  components: {
    Box
  }
}
</script>
