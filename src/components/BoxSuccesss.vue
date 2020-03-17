<template>
  <div class="reservation-amount">
    <h1 class="h3 text-center my-4">完成租屋</h1>
    <b-row class="justify-content-center mb-5">
      <b-col md="5">
        <div class="steps-line">
          <div class="steps-pointer"></div>
          <div class="steps-pointer"></div>
          <div class="steps-pointer"></div>
          <div class="steps-pointer"></div>
          <div class="steps-pointer active"></div>
        </div>
      </b-col>
    </b-row>
    <div class="d-flex justify-content-center mb-5">
      <img src="../assets/images/success.jpg" height="300" alt />
    </div>
     <b-input-group-append>
    <b-button :to="{ path:'/houses' }" variant="outline-primary" size="lg" class="w-50 mr-1">繼續逛</b-button>
    <b-button :to="{ path:'/tenant' }" variant="primary" size="lg" class="w-50">查看紀錄</b-button>
     </b-input-group-append>
  </div>
</template>
