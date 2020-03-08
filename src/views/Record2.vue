<template>
  <div class="Record">
    <b-container fluid>
      <b-row>
        <b-col md="6" class="p-0">
          <section class="record-info p-4">
            <b-form inline class>
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
            </b-form>
            <div class="cardlist d-flex d-xl-block mb-2 mb-xl-0">
              <CardList></CardList>
              <CardList></CardList>
              <CardList></CardList>
            </div>
          </section>
        </b-col>
        <b-col md="6">
          <section class="record-map">
            <Map></Map>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import Map from '@/components/Map.vue'

export default {
  components: {
    CardList,
    Map
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
      ]
    }
  }
}
</script>

<style scope lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
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
