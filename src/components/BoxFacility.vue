<template>
  <div class="add-photo">
    <h1 class="h3 text-center my-4">房源設備</h1>
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
      <img src="../assets/images/bed.svg" width="35" class="rooms-icon" />
      <img src="../assets/images/desk.svg" width="35" class="rooms-icon" />
      <img src="../assets/images/chair.svg" width="35" class="rooms-icon" />
      <img src="../assets/images/sofa.svg" width="35" class="rooms-icon" />
      <img src="../assets/images/wardrobe.svg" width="35" class="rooms-icon" />
      <img src="../assets/images/fridge.svg" width="35" class="rooms-icon" />
      <img src="../assets/images/television.svg" width="35" class="rooms-icon" />
      <img src="../assets/images/kitchen.svg" width="35" class="rooms-icon" />
      <img src="../assets/images/elevator.svg" width="35" class="rooms-icon" />
      <img src="../assets/images/heater.svg" width="35" class="rooms-icon" />
      <img src="../assets/images/window.svg" width="35" class="rooms-icon" />
      <img src="../assets/images/wifi.svg" width="35" class="rooms-icon" />
      <b-input-group-append class="mt-5">
        <b-button
          :to="{ path:'/addHousing/room' }"
          variant="outline-primary"
          size="lg"
          class="w-50 mr-1"
        >上一步</b-button>
        <b-button
          :disabled="invalid"
          :to="{ path:'/rent/successs' }"
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
