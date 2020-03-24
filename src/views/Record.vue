<template>
  <div class="ReservationRecord">
    <b-container fluid>
      <b-row>
        <b-col md="6" class="p-0">
          <section class="record-info p-4 h-100">
            <!-- <b-form class="d-flex mb-2">
              <label class="sr-only">搜尋房源</label>
                  <b-form-select
                    v-model="typeSelected"
                    :options="typeOptions"
                    class="mr-sm-1 w-100"
                    disabled-field="notEnabled"
                  ></b-form-select>
                  <b-form-select
                    v-model="patternSelected"
                    :options="patternOptions"
                    class="mr-sm-1 w-100"
                    disabled-field="notEnabled"
                  ></b-form-select>
                  <b-form-select
                    v-model="squareSelected"
                    :options="squareOptions"
                    class="mr-sm-1 w-100"
                    disabled-field="notEnabled"
                  ></b-form-select>
                  <b-form-select
                    v-model="rentalSelected"
                    :options="rentalOptions"
                    class="mr-sm-1 w-100"
                    disabled-field="notEnabled"
            ></b-form-select>-->
            <!-- <div class="ml-auto d-none d-lg-block">
                  <b-button variant="outline-primary btn-block">編輯</b-button>
            </div>-->
            <!-- </b-form> -->
            <div class="cardlist d-flex d-xl-block mb-2 mb-xl-0">
              <template v-if="reservationStatus">
                <CardList v-for="(item, key) in reservation" :cardList="item" :key="key"></CardList>
              </template>
            </div>
          </section>
        </b-col>
        <b-col md="6" class="pr-0">
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
                <template v-if="reservationStatus">
                <l-marker :lat-lng="[item.lat, item.lng]" v-for="(item, key) in reservation" :key="key">
                  <l-popup>
                    <div><b>房源名稱：</b>{{item.room.name}}</div>
                    <div><b>預約日期：</b>{{item.date}}</div>
                    <div><b>預約時間：</b>{{item.hour}} {{item.time}}</div>
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
  name: 'ReservationRecord',
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
        { value: null, text: '房源型態', notEnabled: true },
        { value: '大樓', text: '大樓' },
        { value: '公寓', text: '公寓' },
        { value: '透天', text: '透天' }
      ],
      patternSelected: null,
      patternOptions: [
        { value: null, text: '房間類型', notEnabled: true },
        { value: '雅房', text: '雅房' },
        { value: '獨立套房', text: '獨立套房' },
        { value: '分租套房', text: '分租套房' }
      ],
      squareSelected: null,
      squareOptions: [
        { value: null, text: '坪數', notEnabled: true },
        { value: '10坪以下', text: '10坪以下' },
        { value: '10-20坪', text: '10-20坪' },
        { value: '20-30坪', text: '20-30坪' },
        { value: '30-40坪', text: '30-40坪' },
        { value: '40坪以上', text: '40坪以上' }
      ],
      rentalSelected: null,
      rentalOptions: [
        { value: null, text: '租金', notEnabled: true },
        { value: '5000元以下', text: '5000元以下' },
        { value: '5000-10000元', text: '5000-10000元' },
        { value: '10000-15000元', text: '10000-15000元' },
        { value: '15000-20000元', text: '15000-20000元' },
        { value: '20000元以上', text: '20000元以上' }
      ],
      reservation: [],
      reservationStatus: false,
      houseId: [],
      room: [],
      status: {},
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 12,
      center: [22.623716, 120.284243],
      bounds: null
    }
  },
  methods: {
    async getData () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/reservation`
      this.status = JSON.parse(localStorage.getItem('STATUS'))

      await vm.$http.get(api).then(response => {
        let data = {}
        data = response.data

        data.forEach((item) => {
          if (item.userId === this.status.id) {
            vm.reservation.push(item)
          }
        })

        vm.reservation.forEach(item => {
          vm.houseId.push(item.houseId)
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
      this.reservation.forEach(async house => {
        this.room.forEach(room => {
          if (house.houseId === String(room.id)) {
            house.room.id = room.id
            house.room.name = room.name
            house.room.room = room.room // 物件新增
            house.room.monthly = room.monthly
            house.room.img1 = room.img1
          }
        })
      })
      this.reservationStatus = true
      // console.log(this.reservation)
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

.record-info {
  background-color: #f4f6fc;
  @include media-breakpoint-down(lg) {
    background-color: white;
  }
}
.cardlist {
  overflow: scroll;
  @include media-breakpoint-down(lg) {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
  }
}
</style>
