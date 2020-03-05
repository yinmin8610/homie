<template>
  <div class="cardList">
    <b-card no-body class="overflow-hidden mb-xl-2 mb-0 mr-2 mr-xl-0" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="4" class="d-none d-xl-block">
          <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="8">
          <b-card-body>
            <div class="closeBtn d-flex justify-content-end">
               <a href="#" class="h2"><b-icon icon="x" variant="danger"></b-icon></a>
            </div>
            <b-card-title>Name Surname</b-card-title>
            <b-card-text>
              <b-icon icon="calendar-fill" variant="primary"></b-icon><label>2020/4/5</label>
              <b-icon icon="clock-fill" variant="primary"></b-icon><label>16:30</label>
            </b-card-text>
            <b-card-text class="d-flex justify-content-end h4">6,000/月</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<style scope lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

  .cardList{
    @include media-breakpoint-down(lg) {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    }
    .card{
      @include media-breakpoint-down(lg) {
        width:250px;
        border: none;
      }
    }
  }
</style>
