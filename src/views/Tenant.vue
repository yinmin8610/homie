<template>
  <div class="Tenant">
    <b-container>
      <div class="mb-2">
        <h1 class="h4">Hi, {{this.status.account}}</h1>
        <div class="identity"></div>
      </div>
      <section class="record">
        <b-row>
          <b-col md="6" class="mb-2 mb-md-0">
            <div class="reservation bg-info text-center text-primary py-6">
              <b-link :to="{ path: '/reservationRecord' }">
                <b-icon-book-half-fill></b-icon-book-half-fill>
                <h2 class="h5">預約記錄</h2>
              </b-link>
            </div>
          </b-col>
          <b-col md="6">
            <div class="reservation bg-info text-center text-primary py-6">
              <b-link :to="{ path: '/rentRecord' }">
                <b-icon-house-fill></b-icon-house-fill>
                <h2 class="h5">租屋記錄</h2>
              </b-link>
            </div>
          </b-col>
        </b-row>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Tenant',
  data () {
    return {
      status: {}
    }
  },
  methods: {

  },
  created () {
    this.status = JSON.parse(localStorage.getItem('STATUS'))
  }
}
</script>
