<template>
  <div class="house">
    <h5>{{house.house.name}}</h5>
    <span class="text-primary">
      <b-icon icon="house-fill" variant="primary"></b-icon>
      <label>{{house.house.county}}</label>
      <label>{{house.house.district}}</label>
      <small class="text-secondary">剩餘 2 空房</small>
    </span>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['house']
}

</script>
