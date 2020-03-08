<template>
  <div class="cards">
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
    >
      <b-card-text>6,000/月</b-card-text>
    </b-card>
  </div>
</template>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
.card {
  cursor: pointer;
}
 a:hover {
   color:#356df8;
    text-decoration: none;
  }
</style>
