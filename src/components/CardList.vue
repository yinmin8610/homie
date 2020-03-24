<template>
  <div class="cardList">
    <b-link :to="{ path: `/houses/${cardList.houseId}` }">
      <b-card no-body class="overflow-hidden mb-xl-2 mb-0 mr-2 mr-xl-0" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="4" class="d-none d-xl-block">
            <b-card-img :src="cardList.room.img1" class="rounded-0" height="100%"></b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body>
              <!-- <div class="closeBtn d-flex justify-content-end">
               <a href="#" class="h2"><b-icon icon="x" variant="danger"></b-icon></a>
              </div>-->
              <b-card-title>
                {{ cardList.room.name }}-
                <small class="text-secondary">{{ cardList.room.room }}</small>
              </b-card-title>
              <b-card-text>
                <template v-if="cardList.date">
                  <b-icon icon="calendar-fill" variant="primary"></b-icon>
                  <label class="mr-2">{{ cardList.date }}</label>
                  <b-icon icon="clock-fill" variant="primary"></b-icon>
                  <label>{{ cardList.time }}</label>
                </template>
                <template v-if-else>
                  <b-icon icon="calendar-fill" variant="primary"></b-icon>
                  <label class="mr-2">{{ cardList.startDate }} </label>
                  <label class="mr-2">{{ cardList.endDate }}</label>
                </template>
              </b-card-text>
              <b-card-text class="d-flex justify-content-end align-items-end h4">{{ cardList.room.monthly }}/月
               <template v-if="cardList.date">
                <b-button
                  variant="outline-primary"
                  :to="{ name:'amount', params:{ rentId: cardList.id, srcName: $route.name, houseId: cardList.houseId, landlordId: cardList.landlordId, landlordEmail: cardList.landlordEmail, lat:cardList.lat, lng:cardList.lng}}"
                  class="ml-2 text-primary"
                >租屋</b-button>
               </template>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-link>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: ['cardList'],
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "../assets/scss/helpers/_variables.scss";
@import "node_modules/bootstrap/scss/mixins";

.cardList {
  @include media-breakpoint-down(lg) {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
  .card {
    @include media-breakpoint-down(lg) {
      width: 250px;
      border: none;
    }
  }
  a{
    color: inherit;
  }
  a:hover {
    color: inherit;
    text-decoration: none;
  }
  a .btn:hover{
    color:white !important;
  }
}
</style>
