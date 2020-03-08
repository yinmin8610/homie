<template>
  <div class="Search">
    <b-container>
      <b-row>
        <b-col lg="3" class="bg-white rounded border p-5 d-none d-md-block">
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
              <b-form-input placeholder="搜尋房源"></b-form-input>
              <b-input-group-append>
                <b-button type="submit" variant="primary">
                  <b-icon-search></b-icon-search>
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
          <p class="h3 text-center py-2">
            高雄市
            <label class="text-secondary ml-1">鹽埕區</label>
          </p>
          <b-row>
            <b-col sm="6" class="mb-2">
              <b-link :to="{ path: '/houses/:id' }"><Card></Card></b-link>
            </b-col>
            <b-col sm="6" class="mb-2">
              <Card></Card>
            </b-col>
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
  components: {
    Card
  },
  data () {
    return {
      typeSelected: 'first',
      typeOptions: [
        { text: '大樓', value: 'first' },
        { text: '公寓', value: 'second' },
        { text: '透天', value: 'third' }
      ],
      patternSelected: 'first',
      patternOptions: [
        { text: '雅房', value: 'first' },
        { text: '獨立套房', value: 'second' },
        { text: '分租套房', value: 'third' }
      ],
      squareSelected: 'first',
      squareOptions: [
        { text: '10坪以下', value: 'first' },
        { text: '10-20坪', value: 'second' },
        { text: '20-30坪', value: 'third' },
        { text: '30-40坪', value: 'second' },
        { text: '40坪以上', value: 'second' }
      ],
      rentalSelected: 'first',
      rentalOptions: [
        { text: '5000元以下', value: 'first' },
        { text: '5000-10000元', value: 'second' },
        { text: '10000-20000元', value: 'third' },
        { text: '20000-30000元', value: 'second' },
        { text: '30000-40000元', value: 'second' },
        { text: '40000元以上', value: 'second' }
      ],
      otherSelected: [],
      otherOptions: [
        { text: '車位', value: 'first' },
        { text: '寵物', value: 'second' },
        { text: '短租（一年以下）', value: 'third' },
        { text: '陽台', value: 'third' },
        { text: '電梯', value: 'third' }
      ]
    }
  }
}
</script>

<style scope>
.col-form-label {
  color: #6591fa;
  font-weight: 500;
}
</style>
