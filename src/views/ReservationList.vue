<template>
  <div class="ReservationList">
    <b-container>
      <b-row>
        <b-col>
          <div class="searchBar">
            <b-input-group size="lg" class="mb-3">
              <b-form-input placeholder="搜尋房源" v-model="searchValue"></b-form-input>
              <b-input-group-append>
                <b-button type="submit" variant="primary">
                  <b-icon-search></b-icon-search>
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </b-col>
        <b-col>
          <b-form-group id="input-month" label-for="input-month" class="mb-2">
            <b-form-select
              id="input-month"
              v-model="monthSelected"
              :options="monthOptions"
              class="mb-2 mr-sm-2 mb-sm-0"
              size="lg"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-table hover :items="data" :fields="column">
           <template v-slot:cell(id)="data">{{ data.index +1 }}</template>
           <template v-slot:cell(date)="data" v-if="reservationStatus">
                 {{ data.item.date }}
            </template>
            <template v-slot:cell(member)="data" v-if="reservationStatus">
                 {{ data.item.member }}
            </template>
            <template v-slot:cell(name)="data" v-if="reservationStatus">
                 {{ data.item.name }}{{ data.item.district }}
            </template>
             <template v-slot:cell(address)="data" v-if="reservationStatus">
                 {{ data.item.address }}
            </template>
             <template v-slot:cell(room)="data" v-if="reservationStatus">
                 {{ data.item.room }}
            </template>
        </b-table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ReservationList',
  data () {
    return {
      searchValue: '',
      monthSelected: 1,
      monthOptions: [
        { text: '1月', value: 1 },
        { text: '2月', value: 2 },
        { text: '3月', value: 3 },
        { text: '4月', value: 4 },
        { text: '5月', value: 5 },
        { text: '6月', value: 6 },
        { text: '7月', value: 7 },
        { text: '8月', value: 8 },
        { text: '9月', value: 9 },
        { text: '10月', value: 10 },
        { text: '11月', value: 11 },
        { text: '12月', value: 12 }
      ],
      column: [
        {
          key: 'id',
          sortable: true,
          label: '編號'
        },
        {
          key: 'date',
          sortable: true,
          label: '預約日期'
        },
        {
          key: 'member',
          sortable: true,
          label: '預約者'
        },
        {
          key: 'name',
          sortable: true,
          label: '房源名稱'
        },
        {
          key: 'address',
          sortable: true,
          label: '房源地址'
        },
        {
          key: 'room',
          sortable: true,
          label: '房間名稱'
        }
      ],
      reservation: [],
      housing: [],
      rooms: [],
      reservationStatus: false,
      status: {},
      data: []

    }
  },
  methods: {
    async getData () {
      const api = `${process.env.VUE_APP_APIPATH}/reservation`
      const cacheData = []
      await this.$http.get(api).then(response => {
        this.reservation = response.data

        this.reservation.forEach((item) => {
          if (item.landlordEmail === this.status.account) {
            cacheData.push({
              date: item.date,
              hour: item.hour,
              time: item.time,
              userId: item.userId,
              houseId: item.houseId,
              name: '',
              county: '',
              district: '',
              room: ''
            })
          }
        })
      })
      // console.log(cacheData)
      await this.$http.get(`${process.env.VUE_APP_APIPATH}/house`).then(response => {
        this.housing = response.data
        this.housing.forEach((item) => {
          for (let i = 0; i < cacheData.length; i++) {
            if (item.id === cacheData[i].userId) {
              cacheData[i].name = item.name
              cacheData[i].county = item.county
              cacheData[i].district = item.district
            }
          }
        })
      })
      // await this.$http.get(`${process.env.VUE_APP_APIPATH}/rooms`).then(response => {
      //   this.rooms = response.data
      //   this.rooms.forEach((item) => {
      //     if (cacheData.houseId === item.houseId) {
      //       cacheData[0].room = item.room
      //     }
      //   })
      // })
      // console.log(cacheData)
    },
    filterData () {
      this.reservation.forEach(async reservation => {
        this.housing.forEach(house => {
          if (reservation.houseId === String(house.id)) {
            reservation.room.id = house.id
            reservation.room.name = house.name
            reservation.room.room = house.room
            reservation.room.monthly = house.monthly
          }
        })
      })
    }
  },
  created () {
    this.getData()
    this.status = JSON.parse(localStorage.getItem('STATUS'))
  }
}
</script>
