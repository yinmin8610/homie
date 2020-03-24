<template>
  <div class="cards col-md-6">
    <b-link :to="{ path: `/houses/${card.id}`}" @click="getRoomData(card.id)">
      <b-card
        :title="card.name"
        :img-src="card.imgUrl"
        img-alt="Image"
        img-top
        class="mb-4"
        img-height="243"
      >
        <b-card-text class="d-flex justify-content-end h3">{{card.monthly}}</b-card-text>
      </b-card>
    </b-link>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default () {
        return {
          name: '',
          monthly: ''
        }
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    getRoomData (id) {
      const api = `${process.env.VUE_APP_APIPATH}/rooms/${id}`
      this.axios.get(api).then(response => {
        // console.log(response)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
}
.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
a {
  color: black;
}
a:hover {
  color: black;
  text-decoration: none;
}
</style>
