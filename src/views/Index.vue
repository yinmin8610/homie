<template>
  <div class="Index">
    <b-container fluid>
      <b-row class="align-items-center">
        <b-col sm="12" lg="5" class="px-0">
          <div
            class="banner-img bg-cover"
            style="height: 100vh;background-image: url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80')"
          ></div>
        </b-col>
        <b-col lg="7" class="mt-6 mt-lg-0">
          <b-row class="justify-content-center">
            <b-col md="10" style="transform: translateY(-20%);">
              <h2 class="d-flex justify-content-md-end mb-2">2 of 2</h2>
              <div
                class="search bg-white p-4 py-md-6 d-flex justify-content-center align-items-center"
              >
                <b-form inline>
                  <label class="sr-only">搜尋房源</label>
                  <b-form-select
                    v-model="countySelected"
                    :options="countyOptions"
                    size="lg"
                    class="mb-2 mr-sm-2 mb-sm-0"
                  ></b-form-select>
                  <b-form-select
                    v-model="districtSelected"
                    :options="districtOptions"
                    size="lg"
                    class="mb-2 mr-sm-2 mb-sm-0"
                  ></b-form-select>
                  <b-button :to="{ path: '/houses' }" variant="primary" class="searchBtn" size="lg">搜尋</b-button>
                </b-form>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
      imgUrl:
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80',
      countySelected: null,
      districtSelected: null,
      countyOptions: [
        { value: null, text: '選擇城市' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      districtOptions: [
        { value: null, text: '選擇地區' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

body {
  background: #fcfcfc;
}
.banner-img {
  height: 100vh;
  @include media-breakpoint-down(md) {
    max-height: 200px;
  }
}
.bg-cover {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.search {
  box-shadow: 0 20px 40px rgba(38, 153, 251, 0.2);
  @include media-breakpoint-up(lg) {
    margin-left: -300px;
  }
}
.searchBtn{
  @include media-breakpoint-down(sm) {
    width:100%;
  }
}
</style>
