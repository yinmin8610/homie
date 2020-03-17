<template>
  <div class="HousingList">
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
        <b-col>
          <b-button
            :to="{ path:'/rent/successs' }"
            variant="primary"
            size="lg"
            class="w-50"
            type="submit"
          >新增房源</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-table hover :items="items" :fields="column">
        </b-table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HousingList',
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
      items: [
        // { id: '1', name: this.landlord.house.name, dist: this.landlord.house.county, amount: this.landlord.house.district }
      ],
      column: [
        {
          key: 'id',
          sortable: true,
          label: '編號'
        },
        {
          key: 'name',
          sortable: true,
          label: '房源名稱'
        },
        {
          key: 'dist',
          sortable: true,
          label: '房源地區'
        },
        {
          key: 'amount',
          sortable: true,
          label: '房間數量'
        },
        {
          key: 'status',
          sortable: true,
          label: '狀態'
        },
        {
          key: 'monthly',
          sortable: true,
          label: '收入'
        }
      ],
      landlord: [],
      housing: [],
      houseStatus: false
    }
  },
  methods: {
    async getData () {
      const api = `${process.env.VUE_APP_APIPATH}/landlord`

      await this.$http.get(api).then(response => {
        this.landlord = response.data
        console.log(this.landlord)
      })

      await this.$http.get(`${process.env.VUE_APP_APIPATH}/house`).then(response => {
        this.housing = response.data
        console.log(this.housing)
      })

      await this.filterData()
    },
    filterData () {
      this.landlord.forEach((landlord) => {
        this.housing.forEach((house) => {
          if (landlord.email === 'yinmin@gmail.com') {
            landlord.house = {}
            landlord.house.id = house.id
            landlord.house.name = house.name
            landlord.house.county = house.county
            landlord.house.district = house.district
          }
        })
      })
      this.houseStatus = true
      console.log(this.landlord)
    }
  },
  created () {
    this.getData()
  }
}
</script>
