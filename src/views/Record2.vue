<template>
  <div class="RentRecord">
    <b-container fluid>
      <b-row>
        <b-col md="6" class="p-0">
          <section class="record-info p-4 h-100">
            <!-- <b-form inline class>
              <label class="sr-only">搜尋房源</label>
              <b-row class="mb-2">
                <b-col lg="2">
                  <b-form-select
                    v-model="typeSelected"
                    :options="typeOptions"
                    class="mr-sm-1 w-100"
                  ></b-form-select>
                </b-col>
                <b-col lg="2">
                  <b-form-select
                    v-model="patternSelected"
                    :options="patternOptions"
                    class="mr-sm-1 w-100"
                  ></b-form-select>
                </b-col>
                <b-col lg="2">
                  <b-form-select
                    v-model="squareSelected"
                    :options="squareOptions"
                    class="mr-sm-1 w-100"
                  ></b-form-select>
                </b-col>
                <b-col lg="2">
                  <b-form-select
                    v-model="rentalSelected"
                    :options="rentalOptions"
                    class="mr-sm-1 w-100"
                  ></b-form-select>
                </b-col>
                <b-col lg="2" class="ml-auto d-none d-lg-block">
                  <b-button variant="outline-primary btn-block">編輯</b-button>
                </b-col>
              </b-row>
            </b-form> -->
            <div class="cardlist d-flex d-xl-block mb-2 mb-xl-0">
              <template v-if="rentStatus">
              <CardList v-for="(item, key) in rent" :cardList="item" :key="key"></CardList>
              </template>
            </div>
          </section>
        </b-col>
        <b-col md="6">
          <section class="record-map">
            <div style="height:100vh;">
              <l-map
                style="height: 100%; width: 100%"
                :zoom="zoom"
                :center="center"
                @update:zoom="zoomUpdated"
                @update:center="centerUpdated"
                @update:bounds="boundsUpdated"
              >
                <l-tile-layer :url="url"></l-tile-layer>
                <template v-if="rentStatus">
                <l-marker :lat-lng="[item.landlordInfo.lat, item.landlordInfo.lng]" v-for="(item, key) in rent" :key="key">
                  <l-popup>
                    <div><b>房源名稱：</b>{{item.room.name}}</div>
                    <div><b>預約日期：</b>{{item.startDate}} ~ {{item.endDate}}</div>
                  </l-popup>
                </l-marker>
                </template>
              </l-map>
            </div>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import { Icon } from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'RentRecord',
  components: {
    CardList,
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data () {
    return {
      typeSelected: null,
      typeOptions: [
        { value: null, text: '房源型態' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      patternSelected: null,
      patternOptions: [
        { value: null, text: '房間類型' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      squareSelected: null,
      squareOptions: [
        { value: null, text: '坪數' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      rentalSelected: null,
      rentalOptions: [
        { value: null, text: '租金' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      rent: [],
      status: {},
      houseId: [],
      room: [],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 12,
      center: [22.623716, 120.284243],
      bounds: null,
      rentStatus: false
    }
  },
  methods: {
    async getData () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/rent`
      this.status = JSON.parse(localStorage.getItem('STATUS'))

      await vm.$http.get(api).then(response => {
        let data = {}
        data = response.data

        data.forEach((item) => {
          if (item.account === this.status.account) {
            vm.rent.push(item)
          }
        })

        vm.rent.forEach(item => {
          vm.houseId.push(item.landlordInfo.houseId)
          item.room = {}
        })
      })
      const cache = []
      await vm.houseId.forEach(id => {
        cache.push(
          vm.$http
            .get(`${process.env.VUE_APP_APIPATH}/rooms/${id}`)
            .then(response => {
              vm.room.push(response.data) // 每筆房間資訊
            })
        )
      })

      Promise.all(cache).then(res => {
        vm.filterData()
      })
    },
    filterData () {
      this.rent.forEach(async house => {
        this.room.forEach(room => {
          if (house.landlordInfo.houseId === String(room.id)) {
            house.room.id = room.id
            house.room.name = room.name
            house.room.room = room.room
            house.room.monthly = room.monthly
            house.room.img1 = room.img1
          }
        })
      })
      this.rentStatus = true
      // console.log(this.rent)
    },
    zoomUpdated (zoom) {
      this.zoom = zoom
    },
    centerUpdated (center) {
      this.center = center
    },
    boundsUpdated (bounds) {
      this.bounds = bounds
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "../assets/scss/helpers/_variables.scss";
@import "node_modules/bootstrap/scss/mixins";

  .record-info{
    background-color:#F4F6FC;
    @include media-breakpoint-down(lg) {
      background-color: white;
    }
  }
  .cardlist{
    overflow:scroll;
    @include media-breakpoint-down(lg) {
      position:fixed;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1030;
    }
  }
</style>
