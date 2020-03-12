<template>
  <div class="Search">
    <b-container>
      <b-row class="mb-5">
        <b-col lg="3" class="bg-white rounded border p-5 d-none d-md-block">
          <b-form-group label="房屋型態">
            <b-form-radio-group
              v-model="typeSelected"
              :options="typeOptions"
              name="radios-stacked"
              stacked
              @change="getTypeData"
            ></b-form-radio-group>
          </b-form-group>
          <b-form-group label="房間類型">
            <b-form-radio-group
              v-model="patternSelected"
              :options="patternOptions"
              name="radios-stacked"
              stacked
              @change="getPatternData"
            ></b-form-radio-group>
          </b-form-group>
          <b-form-group label="坪數">
            <b-form-radio-group
              v-model="squareSelected"
              :options="squareOptions"
              name="radios-stacked"
              stacked
              @change="getSquareData"
            ></b-form-radio-group>
          </b-form-group>
          <b-form-group label="租金">
            <b-form-radio-group
              v-model="rentalSelected"
              :options="rentalOptions"
              name="radios-stacked"
              stacked
              @change="getRentalData"
            ></b-form-radio-group>
          </b-form-group>
          <b-form-group label="其他條件">
            <b-form-checkbox-group
              v-model="otherSelected"
              :options="otherOptions"
              name="flavour-2a"
              stacked
              @change="getOthersData"
            ></b-form-checkbox-group>
          </b-form-group>
        </b-col>
        <b-col lg="3" class="d-md-none mb-2">
          <b-button v-b-toggle.collapse-1 variant="primary">
            <b-icon-list></b-icon-list>
          </b-button>
          <b-collapse id="collapse-1" class="mt-2">
            <b-card>
              <b-form-group label="房屋型態">
                <b-form-radio-group
                  v-model="typeSelected"
                  :options="typeOptions"
                  name="radios-stacked"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
              <b-form-group label="房間類型">
                <b-form-radio-group
                  v-model="patternSelected"
                  :options="patternOptions"
                  name="radios-stacked"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
              <b-form-group label="坪數">
                <b-form-radio-group
                  v-model="squareSelected"
                  :options="squareOptions"
                  name="radios-stacked"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
              <b-form-group label="租金">
                <b-form-radio-group
                  v-model="rentalSelected"
                  :options="rentalOptions"
                  name="radios-stacked"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
              <b-form-group label="其他條件">
                <b-form-checkbox-group
                  v-model="otherSelected"
                  :options="otherOptions"
                  name="flavour-2a"
                  stacked
                ></b-form-checkbox-group>
              </b-form-group>
            </b-card>
          </b-collapse>
        </b-col>
        <b-col lg="9">
          <div class="searchBar">
            <b-input-group size="lg" class="mb-3">
              <b-form-input v-model="searchText" placeholder="搜尋房源"></b-form-input>
              <b-input-group-append>
                <b-button type="submit" variant="primary" @click="search">
                  <b-icon-search></b-icon-search>
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
          <p class="h3 text-center py-2">
            {{this.$route.query.countySelected}}
            <label
              class="text-secondary ml-1"
            >{{this.$route.query.districtSelected}}</label>
          </p>
          <b-row>
            <b-col sm="6" class="mb-2">
              <b-link :to="{ path: '/houses/:id' }">
                <Card v-for="(item, key) in data" :card="item" :key="key"></Card>
              </b-link>
            </b-col>
            <!-- <b-col sm="6" class="mb-2">
              <Card></Card>
            </b-col>-->
          </b-row>
          <a href="#" class="h1 btn-block text-center my-2 my-md-5">
            <b-icon icon="arrow-down-short" class="rounded-circle bg-primary p-1" variant="light"></b-icon>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Search',
  components: {
    Card
  },
  data () {
    return {
      data: [],
      searchText: '',
      typeSelected: '大樓',
      typeOptions: [{ text: '大樓' }, { text: '公寓' }, { text: '透天' }],
      patternSelected: '雅房',
      patternOptions: [
        { text: '雅房' },
        { text: '獨立套房' },
        { text: '分租套房' }
      ],
      squareSelected: '0',
      squareOptions: [
        { text: '10坪以下', value: 0 },
        { text: '10-20坪', value: 10 },
        { text: '20-30坪', value: 20 },
        { text: '30-40坪', value: 30 },
        { text: '40坪以上', value: 40 }
      ],
      rentalSelected: '0',
      rentalOptions: [
        { text: '5000元以下', value: 0 },
        { text: '5000-10000元', value: 5000 },
        { text: '10000-15000元', value: 10000 },
        { text: '15000-20000元', value: 15000 },
        { text: '20000元以上', value: 20000 }
      ],
      otherSelected: [],
      otherOptions: [
        { text: '車位', value: 0 },
        { text: '寵物', value: 1 },
        { text: '短租', value: 2 },
        { text: '陽台', value: 3 },
        { text: '電梯', value: 4 }
      ]
    }
  },
  methods: {
    search () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/rooms?name_like=${vm.searchText}`
      this.axios.get(api).then(response => {
        vm.data = response.data
      })
    },
    getData () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/house?county=${this.$route.query.countySelected}&district=${this.$route.query.districtSelected}`
      console.log(api)

      this.axios.get(api).then(response => {
        vm.data = response.data
      })
    },
    getTypeData () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/house?type=${vm.typeSelected}`

      this.axios.get(api).then(response => {
        vm.data = response.data
      })
    },
    getPatternData () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/rooms?pattern=${vm.patternSelected}`

      this.axios.get(api).then(response => {
        vm.data = response.data
      })
    },
    getSquareData () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/rooms?${
        this.squareSelected
          ? `square_gte=${this.squareSelected}&square_lte=${this
              .squareSelected + 10}`
          : ''
      }`
      console.log(api, this.squareSelected)

      this.axios.get(api).then(response => {
        vm.data = response.data
      })
    },
    getRentalData () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/rooms?${
        this.rentalSelected
          ? `monthly_gte=${this.rentalSelected}&monthly_lte=${this
              .rentalSelected + 5000}`
          : ''
      }`
      console.log(api, this.rentalSelected)

      this.axios.get(api).then(response => {
        vm.data = response.data
      })
    },
    getOthersData () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/rooms?${
        this.rentalSelected
          ? `monthly_gte=${this.rentalSelected}&monthly_lte=${this
              .rentalSelected + 5000}`
          : ''
      }`
      console.log(api, this.rentalSelected)

      this.axios.get(api).then(response => {
        vm.data = response.data
      })
    }
  },

  created () {
    this.getData()
  }
}
</script>

<style scope>
.col-form-label {
  color: #6591fa;
  font-weight: 500;
}
</style>
