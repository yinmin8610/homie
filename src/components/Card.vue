<template>
  <div class="cards">
    <b-card
      :title="card.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      class="mb-2"
    >
      <b-card-text class="d-flex justify-content-end h3">{{card.monthly}}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['card'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
.card {
  cursor: pointer;
}
a{
  color:black;
}
 a:hover {
   color:black;
    text-decoration: none;
  }
</style>
