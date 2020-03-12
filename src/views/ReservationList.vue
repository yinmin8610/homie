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
        <b-table hover :items="items" :fields="column">
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
      items: [{}],
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
      ]
    }
  }
}
</script>
