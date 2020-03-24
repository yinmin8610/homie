<template>
  <div class="Index" style="margin-top: -80px;">
    <b-container fluid class="p-0">
      <section>
        <b-row class="align-items-center">
          <b-col lg="12" class="px-0">
            <div class="cover"></div>
            <div
              class="banner-img bg-cover d-flex justify-content-center align-items-center"
              style="height: 100vh;background-image: url('https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
            >
              <div
                class="text-white d-flex flex-column"
                style="writing-mode: vertical-lr;font-size: 2rem;font-weight: 300;line-height: 1.2;"
              >
                <div class="line wow fadeInDown">尋找理想的短暫駐留</div>
                <!-- <b-row class="justify-content-center">
                  <b-col md="12" style="transform: translateY(-20%);">
                    <div
                      class="search wow fadeIn bg-white p-4 py-md-5 d-flex justify-content-center align-items-center"
                      data-wow-delay="1s"
                      data-wow-offset
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
                </b-row> -->
              </div>
            </div>
          </b-col>
          <b-col class="mt-6 mt-lg-0">
            <b-row class="justify-content-center">
              <b-col md="8" style="transform: translateY(-20%);">
                <div
                  class="search wow fadeIn bg-white p-4 py-md-5 d-flex justify-content-center align-items-center"
                  data-wow-delay="1s"
                  data-wow-offset
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
        <b-row class="flex-column">
          <b-col md="8" class="wow fadeIn mx-auto d-flex mb-4 justify-content-around" data-wow-offset>
            <div class="feature p-4 d-flex" :class="{'active': link == 'a'}" @click="link = 'a'">
              <!-- <b-icon icon="chevron-down" variant="primary" class="h4 bg-info p-1 rounded mr-2"></b-icon> -->
              <div>
                <span class="text-primary h5">多元化房源</span>
              </div>
            </div>
            <div class="feature p-4 d-flex" :class="{'active': link == 'b'}" @click="link = 'b'">
              <!-- <b-icon icon="chevron-down" variant="primary" class="h4 bg-info p-1 rounded mr-2"></b-icon> -->
              <div>
                <span class="text-primary h5">線上預約、租屋</span>
              </div>
            </div>
            <div class="feature p-4 d-flex" :class="{'active': link == 'c'}" @click="link = 'c'">
              <!-- <b-icon icon="chevron-down" variant="primary" class="h4 bg-info p-1 rounded mr-2"></b-icon> -->
                <span class="text-primary h5">完整記錄</span>
            </div>
          </b-col>
          <b-col md="8" class="wow fadeInUp mx-auto">
            <div v-if="link == 'a'">
              <img :src="img1" class="img-fluid">
            </div>
            <div v-else-if="link == 'b'">
               <img :src="img2" class="img-fluid">
            </div>
            <div v-else-if="link == 'c'">
               <img :src="img3" class="img-fluid">
            </div>
          </b-col>
        </b-row>
      </section>
      <section class="pt-5">
        <h2 class="h5 py-5 text-center">尋找我的 HOMIE</h2>
        <div class="bg-info p-5 m-0">
          <h3 class="display-5 mb-4 text-primary">依據縣市</h3>
          <b-row class="mb-4 wow zoomIn" data-wow-offset>
            <b-col>
              <b-link :to="{ path: '/houses?countySelected=台北市'}">
                <b-card
                  overlay
                  title="臺北市"
                  sub-title
                  img-src="https://images.unsplash.com/photo-1519275565142-d81952f9e2d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  img-alt="Image"
                  text-variant="dark"
                  img-height="225"
                >
                  <b-card-text>150多間住宿</b-card-text>
                </b-card>
              </b-link>
            </b-col>
            <b-col>
              <b-link :to="{ path: '/houses?countySelected=台中市'}">
                <b-card
                  overlay
                  title="臺中市"
                  sub-title
                  img-src="https://www.1969blueskyhotel.com/spot-detail/upload/spot_b/tw_spot_list_19e09_gmb6btqvdn.jpg"
                  img-alt="Image"
                  text-variant="white"
                  img-height="225"
                >
                  <b-card-text>150多間住宿</b-card-text>
                </b-card>
              </b-link>
            </b-col>
            <b-col>
              <a href="#">
                <b-card
                  overlay
                  title="高雄市"
                  sub-title
                  img-src="https://www.lookit.tw/upload/83/mXS/b1caad3da79c4c2e9ab49f4d8ff78340.jpg"
                  img-alt="Image"
                  text-variant="dark"
                  img-height="225"
                >
                  <b-card-text>150多間住宿</b-card-text>
                </b-card>
              </a>
            </b-col>
          </b-row>
          <b-row class="mb-4 wow zoomIn" data-wow-offset>
            <b-col>
              <b-link :to="{ path: '/houses?countySelected=台南市'}">
                <b-card
                  overlay
                  title="臺南市"
                  sub-title
                  img-src="https://www.groupmbnb.com/upload/%E5%A5%87%E7%BE%8E%E5%8D%9A%E7%89%A9%E9%A4%A8.jpg"
                  img-alt="Image"
                  text-variant="white"
                  img-height="225"
                >
                  <b-card-text>150多間住宿</b-card-text>
                </b-card>
              </b-link>
            </b-col>
            <b-col>
              <b-link :to="{ path: '/houses?countySelected=台東市'}">
                <b-card
                  overlay
                  title="臺東縣"
                  sub-title
                  img-src="https://www.taiwanngo.tw/var/file/0/1000/img/32/505717097.jpg"
                  img-alt="Image"
                  text-variant="dark"
                  img-height="225"
                >
                  <b-card-text>150多間住宿</b-card-text>
                </b-card>
              </b-link>
            </b-col>
            <b-col class="d-flex align-items-center justify-content-center">
              <b-button :to="{ path:'/houses' }" variant="primary" size="lg">查看200+個房源</b-button>
            </b-col>
          </b-row>
        </div>
        <div class="bg-info p-5 m-0">
          <h3 class="display-5 mb-4 text-primary">依據房型</h3>
          <b-row class="mb-4 wow zoomIn" data-wow-offset>
            <b-col>
              <b-link :to="{ path: '/houses?type=大樓'}">
                <b-card
                  overlay
                  title="大樓"
                  sub-title
                  img-src="https://a0.muscache.com/im/pictures/5096a10b-f10c-41df-a00e-62388c60423c.jpg?aki_policy=xx_large"
                  img-alt="Image"
                  img-height="225"
                  text-variant="dark"
                >
                  <b-card-text>150多間住宿</b-card-text>
                </b-card>
              </b-link>
            </b-col>
            <b-col>
              <b-link :to="{ path: '/houses?type=公寓'}">
                <b-card
                  overlay
                  title="公寓"
                  sub-title
                  img-src="https://a0.muscache.com/im/pictures/889f81f5-c9e2-4445-9711-058a62b38e7f.jpg?aki_policy=xx_large"
                  img-alt="Image"
                  img-height="225"
                  text-variant="white"
                >
                  <b-card-text>150多間住宿</b-card-text>
                </b-card>
              </b-link>
            </b-col>
            <b-col>
              <b-link :to="{ path: '/houses?type=透天'}">
                <b-card
                  overlay
                  title="透天"
                  sub-title
                  img-src="https://a0.muscache.com/im/pictures/1f68be83-f3f7-411e-a126-a186cc726af9.jpg?aki_policy=xx_large"
                  img-alt="Image"
                  text-variant="dark"
                  img-height="225"
                >
                  <b-card-text>150多間住宿</b-card-text>
                </b-card>
              </b-link>
            </b-col>
          </b-row>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
import img1 from '../assets/images/index_img2.png'
import img2 from '../assets/images/index_img1.png'
import img3 from '../assets/images/index_img3.png'

import 'animate.css'
import WOW from 'wow.js'
new WOW({ live: false }).init()

new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true
}).init()

export default {
  name: 'Index',
  data () {
    return {
      img1: img1,
      img2: img2,
      img3: img3,
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

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "@/assets/scss/helpers/_variables.scss";
@import "~bootstrap/scss/mixins";

.banner-img {
  height: 100vh;
  @include media-breakpoint-down(md) {
    max-height: 200px;
  }
}
.cover {
  position: absolute;
  background-color: #00000066;
  width: 100%;
  height: 100%;
}
.bg-cover {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.line {
  position: relative;
}
.line::after {
  content: "";
  position: absolute;
  top: 330px;
  bottom: -150px;
  left: 50%;
  width: 1px;
  transform: translateX(-50%);
  background-color: white;
}
//  a.navbar-brand{
//   color:white !important;
// }
.search {
  box-shadow: 0 20px 40px rgba(38, 153, 251, 0.2);
  // @include media-breakpoint-up(lg) {
  //   margin-left: -300px;
  // }
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
  border: solid 1px #f4f6fc;
}
.feature:hover {
  border: solid 1px #f4f6fc;
}
</style>
