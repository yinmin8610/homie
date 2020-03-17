<template>
  <div class="cardList">
    <b-link :to="{ path: `/houses/${cardList.houseId}` }">
      <b-card no-body class="overflow-hidden mb-xl-2 mb-0 mr-2 mr-xl-0" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="4" class="d-none d-xl-block">
            <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
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
                <b-icon icon="calendar-fill" variant="primary"></b-icon>
                <label>{{ cardList.date }}</label>
                <b-icon icon="clock-fill" variant="primary"></b-icon>
                <label>{{ cardList.time }}</label>
              </b-card-text>
              <b-card-text class="d-flex justify-content-end h4">{{ cardList.room.monthly }}/月</b-card-text>
              <div class="d-flex justify-content-end mt-2">
                <b-button
                  variant="outline-primary"
                  :to="{ path:'/rent', params:{ rentId: cardList.id }}"
                  class="text-primary"
                >租屋</b-button>
              </div>
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
