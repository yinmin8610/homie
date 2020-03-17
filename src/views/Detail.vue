<template>
  <div class="Detail">
    <b-container>
      <h1 class="h4 mb-2">{{ house.name }}</h1>
      <b-row class="mb-5">
        <b-col md="9" class="carousel">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54"></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="https://picsum.photos/1024/480/?image=55"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image"></b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col md="3"></b-col>
      </b-row>
      <b-row class="mb-5 flex-column-reverse flex-lg-row">
        <b-col lg="8">
          <section class="info p-4 border bg-white">
            <ul class="p-0">
              <b-row>
                <b-col>
                  <li>押金：{{ house.deposit ? house.deposit : '--'}}</li>
                  <li>最短租期：{{ house.lease }}</li>
                  <li>開伙：{{ house.fire }}</li>
                </b-col>
                <b-col>
                  <li>管理費：{{ house.fee }}</li>
                  <li>性別要求：{{ house.gender }}</li>
                  <li>車 位：{{ house.carport }}</li>
                </b-col>
                <b-col>
                  <li>養寵物：{{ house.pet }}</li>
                  <li>建物面積：{{ house.areal }}</li>
                  <li>產權登記：{{ house.enroll }}</li>
                </b-col>
              </b-row>
            </ul>
            <hr />
            <h2 class="h4 py-3">房源描述</h2>
            <ol class="pl-3">{{ house.info }}</ol>
            <Map :lat="house.latitude" :lng="house.longitude" v-if="latlngStatus"></Map>
          </section>
        </b-col>
        <b-col lg="4">
          <section class="landlord p-4 border bg-white">
            <div class="mb-3 d-flex align-items-end">
              <img
                src="https://images.unsplash.com/profile-1563292410875-3ba284c92d0e?dpr=2&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff"
                alt
                class="mr-1 img-fluid"
              />
              <b-link :to="{ path:'/landlord/:id' }">
                <b-badge variant="primary" class="p-1">房東姓名</b-badge>
              </b-link>
            </div>
            <hr />
            <div class="d-flex py-2">
              <h4 class="h5 mr-1">房客</h4>
              <small class="text-primary d-flex align-items-end">
                <b>1</b>位學生
                <b>1</b>位上班族
              </small>
            </div>
            <div class="tenants">
              <Identity></Identity>
            </div>
          </section>
        </b-col>
      </b-row>
    </b-container>

    <section class="bg-info">
      <b-container class="py-5">
        <div class="rooms mb-md-4 flex-column-reverse flex-lg-row">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
        </div>
        <b-row class="mb-md-4">
          <b-col md="6">
            <section>
              <div role="tablist">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-button block href="#" v-b-toggle.accordion-1 variant="info">家具</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                      <span v-if="rooms.bed"><img src="../assets/images/bed.svg" width="35" class="rooms-icon" /></span>
                       <span v-if="rooms.desk"><img src="../assets/images/desk.svg" width="35" class="rooms-icon" /></span>
                       <span v-if="rooms.chair"><img src="../assets/images/chair.svg" width="35" class="rooms-icon" /></span>
                       <span v-if="rooms.sofa"><img src="../assets/images/sofa.svg" width="35" class="rooms-icon" /></span>
                       <span v-if="rooms.closet"><img src="../assets/images/wardrobe.svg" width="35" class="rooms-icon" /></span>
                       <span v-if="rooms.fridge"><img src="../assets/images/fridge.svg" width="35" class="rooms-icon" /></span>
                       <span v-if="rooms.tv"><img src="../assets/images/television.svg" width="35" class="rooms-icon" /></span>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-button block href="#" v-b-toggle.accordion-2 variant="info">設施</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <span v-if="rooms.kitchen">
                          <img src="../assets/images/kitchen.svg" width="35" class="rooms-icon" />
                        </span>
                        <span v-if="rooms.kitchen ">
                          <img src="../assets/images/kitchen.svg" width="35" class="rooms-icon" />
                        </span>
                        <span v-if="rooms.elevator">
                          <img src="../assets/images/elevator.svg" width="35" class="rooms-icon" />
                        </span>
                        <span v-if="rooms.heater">
                          <img src="../assets/images/heater.svg" width="35" class="rooms-icon" />
                        </span>
                        <span v-if="rooms.window">
                          <img src="../assets/images/window.svg" width="35" class="rooms-icon" />
                        </span>
                        <span v-if="rooms.wifi">
                          <img src="../assets/images/wifi.svg" width="35" class="rooms-icon" />
                        </span>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </section>
          </b-col>
          <b-col md="6">
            <section class="calendar bg-white p-4 border d-flex justify-content-center">
              <b-calendar v-model="dateValue" :date-disabled-fn="dateDisabled" locale="en"></b-calendar>
            </section>
          </b-col>
        </b-row>
        <b-button
          :disabled="dateValue === ''"
          variant="primary"
          size="lg"
          class="btn-block"
          @click="loginConfirm"
        >確認預約</b-button>
      </b-container>
    </section>
    <b-modal id="login-reject2" title="請先登入" hide-footer></b-modal>
  </div>
</template>

<script>
import Identity from '@/components/Identity.vue'
import Map from '@/components/Map.vue'
export default {
  name: 'Detail',
  components: {
    Identity,
    Map
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      dateValue: '',
      house: {},
      houseId: '',
      rooms: {},
      latlngStatus: false
    }
  },
  methods: {
    getData (id) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/house/${id}`
      vm.$http.get(url).then(response => {
        vm.house = response.data
        vm.latlngStatus = true
      })
      vm.$http.get(`${process.env.VUE_APP_APIPATH}/rooms/${id}`).then(response => {
        vm.rooms = response.data
      })
    },
    loginConfirm () {
      const status = JSON.parse(localStorage.getItem('STATUS')) || []
      // console.dir(status)
      if (status.isLogin) {
        this.$router.push({ name: 'BoxReservation', params: { dateValue: this.dateValue, houseId: this.houseId, lat: this.house.latitude, lng: this.house.longitude } })
      } else {
        this.$bvModal.show('login-reject2')
      }
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    dateDisabled (ymd, date) {
      // Disable weekends (Sunday = `0`, Saturday = `6`) and
      // disable days that fall on the 13th of the month
      const weekday = date.getDay()
      const day = date.getDate()
      // Return `true` if the date should be disabled
      return weekday === 0 || weekday === 6 || day === 13
    }
  },
  created () {
    const vm = this
    vm.houseId = vm.$route.params.id
    vm.getData(vm.houseId)
  }
}
</script>

<style>
ul {
  list-style: none;
}
.rooms-icon {
  padding: 5px;
  background-color: #dde6fa;
  /* border: 1px solid #dde6fa; */
  margin-right: 5px;
  border-radius: 4px;
}
</style>
