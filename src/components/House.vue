<template>
  <div class="house">
    <h5>{{house.name}}</h5>
    <span class="text-primary">
      <b-icon icon="house-fill" variant="primary"></b-icon>
      <label>{{house.county}}</label>
      <label>{{house.district}}</label>
      <!-- <small class="text-secondary">剩餘2間空房</small> -->
    </span>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    house: {
      default: Object,
      house: {
        name: '',
        county: '',
        district: ''
      }
    }
  }
}

</script>
