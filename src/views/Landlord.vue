<template>
  <div class="Landlord">
    <section class="info py-4 bg-info mb-5">
      <b-container>
        <div class="mb-3 d-flex align-items-end">
          <img
            src="https://images.unsplash.com/profile-1563292410875-3ba284c92d0e?dpr=2&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff"
            alt
            class="mr-1 img-fluid"
          />
          <h1 class="h4 p-1">{{this.email}}</h1>
        </div>
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, beatae. Minima est corrupti id, dignissimos a, illo cumque tempore, voluptatem nesciunt officia voluptas iure placeat distinctio labore temporibus in quia excepturi laboriosam quod commodi! Libero sit eaque recusandae, doloribus corporis labore nobis quae suscipit veritatis, similique totam! Quos minus voluptate necessitatibus non, temporibus soluta fugit quisquam voluptatibus aut officia tempora harum, error expedita veniam quae dolore similique perspiciatis illum commodi deserunt aspernatur natus.</p> -->
      </b-container>
    </section>
    <div v-if="this.status.user === 'member'">
      <section class="lease text-center mb-5">
        <b-container>
          <span>June 2, 2017</span>
          <h2 class="h4 my-2">房屋守則</h2>
          <p
            class="text-truncate"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, beatae. Minima est corrupti id, dignissimos a, illo cumque tempore, voluptatem nesciunt officia voluptas iure placeat distinctio labore temporibus in quia excepturi laboriosam quod commodi! Libero sit eaque recusandae, doloribus corporis labore nobis quae suscipit veritatis, similique totam! Quos minus voluptate necessitatibus non, temporibus soluta fugit quisquam voluptatibus aut officia tempora harum, error expedita veniam quae dolore similique perspiciatis illum commodi deserunt aspernatur natus. Doloribus distinctio quod non sed blanditiis possimus, molestias harum at nobis perferendis dolorum recusandae amet, repellat laborum illum tempore suscipit, alias quidem aperiam esse magnam ea quas.</p>
          <b-button variant="info" size="sm" class="text-primary" v-b-modal.modal-lease>點我查看</b-button>
        </b-container>
      </section>
      <section class="housing">
        <b-container class="bv-example-row">
          <b-row>
            <b-col cols="6" md="3" class="housing-img bg-info p-4">
              <template v-if="houseStatus">
                <House v-for="(item, key) in data" :key="key" :house="item"></House>
              </template>
            </b-col>

            <!--<b-col cols="6" md="3" class="housing-img bg-info"></b-col>
            <b-col cols="6" md="3" class="housing-img bg-info">Column</b-col>
            <b-col cols="6" md="3" class="housing-img bg-info">Column</b-col>
            <div class="w-100"></div>
            <b-col cols="6" md="3" class="housing-img bg-info">Column</b-col>
            <b-col cols="6" md="3" class="housing-img bg-info">Column</b-col>
            <b-col cols="6" md="3" class="housing-img bg-info">Column</b-col>
            <b-col cols="6" md="3" class="housing-img bg-info">Column</b-col>-->
          </b-row>
        </b-container>
      </section>
    </div>
    <div v-else-if="this.status.user === 'landlord'">
      <section>
        <b-container>
          <b-row>
            <b-col md="6" class="mb-2 mb-md-0">
              <div class="reservation bg-info text-center text-primary py-6">
                <b-link :to="{ path: '/housingList' }">
                  <b-icon-book-half-fill></b-icon-book-half-fill>
                  <h2 class="h5">房源列表</h2>
                </b-link>
              </div>
            </b-col>
            <b-col md="6">
              <div class="reservation bg-info text-center text-primary py-6">
                <b-link :to="{ path: '/reservationList' }">
                  <b-icon-house-fill></b-icon-house-fill>
                  <h2 class="h5">預約列表</h2>
                </b-link>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>

    <b-modal id="modal-lease" title="房屋守則" hide-footer>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque cum delectus odit iusto tempora hic repellat, nobis sapiente incidunt impedit excepturi quisquam. Culpa vero provident ad error, adipisci maxime magni! Praesentium, maiores ipsa? Quia necessitatibus, praesentium incidunt rem minus neque numquam eum eos, quos maiores ducimus voluptas culpa quod voluptatibus omnis at illo. Labore beatae ipsam commodi laudantium, magni deserunt reiciendis hic suscipit ad eius atque quibusdam animi culpa odit facere ab provident repudiandae! Dolore ex provident veritatis, odio cum culpa nisi vero labore adipisci et vel, accusamus inventore, assumenda eum saepe error aliquam magnam! Totam consequuntur officia ullam sint distinctio. Quos facere sapiente nesciunt inventore assumenda voluptatum fugit dolorum ea expedita. Reiciendis, magnam velit aut doloremque, incidunt libero ipsam pariatur eveniet reprehenderit neque alias. Pariatur dolorum vel hic similique ipsum at molestiae dicta earum autem quaerat quod unde aliquid, deserunt incidunt praesentium laudantium numquam et architecto maiores eum inventore. Eos, et, aperiam pariatur itaque dolorem soluta quibusdam omnis doloremque incidunt dolorum quos laudantium corrupti ea at tenetur dolores nihil similique dolor repellat autem, alias libero esse obcaecati? Distinctio possimus necessitatibus iusto quidem iure! Quia optio asperiores autem omnis provident quod recusandae ex perferendis tenetur id incidunt voluptatibus sed voluptatum in dolor qui adipisci et culpa, aut maiores? Iste nesciunt unde et! Deleniti eligendi dolores rem adipisci non sit cum vel eaque nobis, nostrum necessitatibus velit aut obcaecati nihil architecto facere quas quidem ipsum aliquam sequi molestiae nemo nulla. Commodi, doloremque rerum fugit a vitae non tempore suscipit iste laboriosam, cupiditate totam inventore saepe labore magni aspernatur quis ducimus explicabo excepturi dolorum facere quasi consequuntur, praesentium placeat! Aliquam consequuntur doloremque excepturi at ut nesciunt eius et fugiat, sit eligendi architecto sequi atque? Debitis, sit dolorem ex similique earum ad, laborum omnis beatae ratione iste obcaecati, rerum consequatur error expedita?</p>
    </b-modal>
  </div>
</template>

<script>
import House from '@/components/House.vue'
export default {
  name: 'Landlord',
  components: {
    House
  },
  data () {
    return {
      status: {},
      email: '',
      housing: [],
      landlord: [],
      houseStatus: false,
      data: []
    }
  },
  methods: {
    async getData () {
      const api = `${process.env.VUE_APP_APIPATH}/register`

      await this.$http.get(api).then(response => {
        this.landlord = response.data
        this.landlord.forEach((item) => {
          if (item.id === Number(this.$route.params.id)) {
            this.email = item.email
          }
        })
      })

      await this.$http.get(`${process.env.VUE_APP_APIPATH}/house`).then(response => {
        // const cacheData = response.data

        // cacheData.forEach((item) => {
        //   item.house = {
        //     name: '',
        //     county: '',
        //     district: ''
        //   }
        // })
        // this.housing = cacheData
        this.housing = response.data
      })

      await this.filterData()
    },
    filterData () {
      this.housing.forEach((house) => {
        if (this.email === house.landlord) {
          this.data.push({
            id: house.id,
            name: house.name,
            county: house.county,
            district: house.district
          })
        }
      })
      this.houseStatus = true
    }
  },
  created () {
    this.status = JSON.parse(localStorage.getItem('STATUS')) || []
    this.getData()
  }
}
</script>

<style scoped>
.housing-img {
  height: 100%;
  border: 1px solid white;
  transform: scale(1, 1);
  transition: all 0.5s ease-out;
}
.housing-img:hover {
  transform: scale(1.2, 1.2);
}
</style>
