<template>
  <div class="add-photo">
    <h1 class="h3 text-center my-4">房源照片</h1>
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
    <div class="mb-2">
      <b-form-file
        id="input-resgister-account"
        class="mb-2"
        v-model="file"
        :state="Boolean(file)"
        drop-placeholder="拖曳至此"
      ></b-form-file>
      <b-input-group-append class="mt-5">
        <b-button
          :to="{ path:'/addHousing/info' }"
          variant="outline-primary"
          size="lg"
          class="w-50 mr-1"
        >上一步</b-button>
        <b-button
          :disabled="invalid"
          :to="{ path:'/addHousing/room' }"
          variant="primary"
          size="lg"
          class="w-50"
          type="submit"
        >下一步</b-button>
        <router-view></router-view>
      </b-input-group-append>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BoxPhoto',
  data () {
    return {
      file: null
    }
  }
}
</script>
