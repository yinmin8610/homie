<template>
  <div class="add-type">
    <h1 class="h3 text-center my-4">房源型態</h1>
    <b-row class="justify-content-center mb-5">
      <b-col md="5">
        <div class="steps-line">
          <div class="steps-pointer active"></div>
          <div class="steps-pointer"></div>
          <div class="steps-pointer"></div>
          <div class="steps-pointer"></div>
          <div class="steps-pointer"></div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col>
        <div class="reservation bg-info text-center text-primary py-6">
          <b-link :to="{ path: '/record' }">
            <h2 class="h5">大樓</h2>
          </b-link>
        </div>
      </b-col>
      <b-col>
        <div class="reservation bg-info text-center text-primary py-6">
          <b-link :to="{ path: '/record' }">
            <h2 class="h5">公寓</h2>
          </b-link>
        </div>
      </b-col>
      <b-col>
        <div class="reservation bg-info text-center text-primary py-6">
          <b-link :to="{ path: '/record' }">
            <h2 class="h5">透天</h2>
          </b-link>
        </div>
      </b-col>
    </b-row>
    <b-input-group-append class="mt-5">
      <b-button
        :to="{ path:'/housingList' }"
        variant="outline-primary"
        size="lg"
        class="w-50 mr-1"
      >取消</b-button>
      <b-button
        :disabled="invalid"
        :to="{ path:'/addHousing/info' }"
        variant="primary"
        size="lg"
        class="w-50"
        type="submit"
      >下一步</b-button>
      <router-view></router-view>
    </b-input-group-append>
  </div>
</template>

<script>
export default {
  name: 'AddType'
}
</script>
