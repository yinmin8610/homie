<template>
  <div class="box">
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="10">
          <div class="form p-4 bg-white">
            <router-view></router-view>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scope>
.form {
  box-shadow: 0 20px 40px rgba(38, 153, 251, 0.2);
  margin-top: calc(10%);
}
</style>
