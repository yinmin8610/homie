<template>
  <div class="Index">
    <b-container fluid class="p-0">
      <section>
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
                    ></b-form-select>
                    <b-form-select
                      v-model="districtSelected"
                      :options="districtOptions"
                      size="lg"
                      class="mb-2 mr-sm-2 mb-sm-0"
                      disabled-field="notEnabled"
                    ></b-form-select>
                    <b-button
                      :disabled="districtSelected === null"
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
      </section>
      <section class="py-5">
        <h2 class="h5 py-5 text-center">關於 HOMIE</h2>
        <b-row>
          <b-col md="6">
            <div
              class="feature p-4 d-flex"
              :class="{'active': link == 'a'}"
              @click="link = 'a'"
            >
              <b-icon icon="chevron-down" variant="primary" class="h4 bg-info p-1 rounded mr-2"></b-icon>
              <div>
                <span class="text-primary h5">線上預約、租屋</span>
                <p
                  v-if="display=true"
                  class="mt-2"
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ducimus et quam sed minus a laboriosam quasi, hic, enim perferendis ex dolorem in?</p>
              </div>
              <hr />
            </div>
            <div
              class="feature p-4 d-flex"
              :class="{'active': link == 'b'}"
              @click="link = 'b'"
            >
              <b-icon icon="chevron-down" variant="primary" class="h4 bg-info p-1 rounded mr-2"></b-icon>
              <div>
                <span class="text-primary h5">完整記錄</span>
                <p class="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ducimus et quam sed minus a laboriosam quasi, hic, enim perferendis ex dolorem in?</p>
              </div>
              <hr />
            </div>
            <div
              class="feature p-4 d-flex"
              :class="{'active': link == 'c'}"
              @click="link = 'c'"
            >
              <b-icon icon="chevron-down" variant="primary" class="h4 bg-info p-1 rounded mr-2"></b-icon>
              <span>
                <span class="text-primary h5">地圖資訊</span>
                <p
                  v-if="text=false"
                  class="mt-2"
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ducimus et quam sed minus a laboriosam quasi, hic, enim perferendis ex dolorem in?</p>
              </span>
              <hr />
            </div>
          </b-col>
          <b-col md="6">
            <div v-if="link == 'a'">Ａ</div>
            <div v-else-if="link == 'b'">Ｂ</div>
            <div v-else-if="link == 'c'">Ｃ</div>
          </b-col>
        </b-row>
      </section>
      <section class="pt-5">
        <h2 class="h5 py-5 text-center">Find My Homie</h2>
        <div class="bg-info p-5 m-0">
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
            <b-col class="d-flex align-items-center justify-content-center">
              <b-button :to="{ path:'/houses' }" variant="outline-primary" class="">200+個房源</b-button>
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
      countyOptions: [{ value: null, text: '選擇縣市', notEnabled: true }],
      districtOptions: [{ value: null, text: '選擇地區', notEnabled: true }],
      display: false,
      link: 'a'
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
@import "node_modules/bootstrap/scss/functions";
@import "../assets/scss/helpers/_variables.scss";
@import "node_modules/bootstrap/scss/mixins";

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
.feature {
  max-width: 450px;
  border-radius: 4px;
  cursor: pointer;
}
.feature:active {
  box-shadow: 0 20px 40px rgba(38, 153, 251, 0.2);
  margin-bottom: 15px;
  }
.feature:hover{
  box-shadow: 0 20px 40px rgba(38, 153, 251, 0.2);
  margin-bottom: 15px;
  hr {
    border: none;
  }
}
</style>
