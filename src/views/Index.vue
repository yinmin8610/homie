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
                    @change="selected"
                    disabled-field="notEnabled"
                  >
                  </b-form-select>
                  <b-form-select
                    v-model="districtSelected"
                    :options="districtOptions"
                    size="lg"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    disabled-field="notEnabled"
                  ></b-form-select>
                  <b-button
                    :to="{ path: '/houses', query: {countySelected:countySelected, districtSelected:districtSelected}}"
                    variant="primary"
                    class="searchBtn"
                    size="lg"
                  >搜尋</b-button>
                </b-form>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <section class="py-5">
        <h2 class="h4 py-2">
          <label class="text-primary">關於</label> HOMIE
        </h2>
        <b-row>
          <b-col md="6"></b-col>
          <b-col md="6">
            <div class="icon d-flex align-items-center mb-4">
              <b-icon icon="calendar" variant="primary" class="h2 bg-info p-1 rounded-circle mr-2"></b-icon>
              <span class="text-primary h5">線上預約</span>
            </div>
            <div class="icon d-flex align-items-center mb-4">
              <b-icon icon="book" variant="primary" class="h2 bg-info p-1 rounded-circle mr-2"></b-icon>
              <span class="text-primary h5">完整記錄</span>
            </div>
            <div class="icon d-flex align-items-center">
              <b-icon icon="map" variant="primary" class="h2 bg-info p-1 rounded-circle mr-2"></b-icon>
              <span class="text-primary h5">地圖</span>
            </div>
          </b-col>
        </b-row>
      </section>
      <section class="py-5">
        <h2 class="h4 py-2">
          <label class="text-primary">200+</label> 房源可租
        </h2>
        <div class="bg-info p-5">
          <b-row class="mb-4">
            <b-col>
              <Card></Card>
            </b-col>
            <b-col>
              <Card></Card>
            </b-col>
            <b-col>
              <Card></Card>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <Card></Card>
            </b-col>
            <b-col>
              <Card></Card>
            </b-col>
            <b-col>
              <Card></Card>
            </b-col>
          </b-row>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'Index',
  components: {
    Card
  },
  data () {
    return {
      data: [],
      countySelected: null,
      districtSelected: null,
      countyOptions: [{ value: null, text: '選擇城市', notEnabled: true }],
      districtOptions: [{ value: null, text: '選擇地區', notEnabled: true }]
    }
  },
  methods: {
    getData () {
      const vm = this
      const api =
        'https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/CityCountyData.json'
      this.axios.get(api).then(response => {
        vm.data = response.data
        vm.data.forEach(item => {
          this.countyOptions.push(item.CityName)
        })
      })
    },
    selected () {
      const vm = this
      vm.data.forEach(item => {
        if (item.CityName === this.countySelected) {
          const cache = []
          item.AreaList.forEach(area => {
            cache.push(area.AreaName)
          })

          this.districtOptions = cache
        }
      })
    }
  },
  created () {
    this.getData()
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
.searchBtn {
  @include media-breakpoint-down(sm) {
    width: 100%;
  }
}
</style>
