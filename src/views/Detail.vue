<template>
  <div class="Detail">
    <b-container>
      <b-row class="mb-5">
        <b-col md="9" class="carousel">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              caption="First slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://picsum.photos/1024/480/?image=52"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
              <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="https://picsum.photos/1024/480/?image=55"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col md="3"></b-col>
      </b-row>
      <b-row class="mb-5 flex-column-reverse flex-lg-row">
        <b-col lg="8">
          <section class="info p-4 border bg-white">
            <ul class="p-0">
              <b-row>
                <b-col>
                  <li>押金：</li>
                  <li>最短租期：</li>
                  <li>開伙：</li>
                </b-col>
                <b-col>
                  <li>管理費：</li>
                  <li>性別要求：</li>
                  <li>車 位：</li>
                </b-col>
                <b-col>
                  <li>養寵物：</li>
                  <li>建物面積：</li>
                  <li>產權登記：</li>
                </b-col>
              </b-row>
            </ul>
            <hr />
            <h2 class="h4 py-3">房源描述</h2>
            <ol class="pl-3">
              <li>鹽埕愛河畔翻新時尚套房出租(屋主自租)</li>
              <li>臨愛河畔 浪漫多變 全翻新 小資宅</li>
              <li>近駁二藝術特區 棧貳庫 高雄電影館 休閒有去處</li>
              <li>近捷運鹽埕埔站 輕軌大公路站 陸續通車</li>
              <li>大勇商圈 鹽埕舊城區 文武百業 商店商場林立</li>
            </ol>
            <Map></Map>
          </section>
        </b-col>
        <b-col lg="4">
          <section class="landlord p-4 border bg-white">
            <div class="mb-3 d-flex align-items-end">
              <img
                src="https://images.unsplash.com/profile-1563292410875-3ba284c92d0e?dpr=2&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff"
                alt
                class="mr-1 img-fluid"
              />
              <a href="#">
                <b-badge variant="primary" class="p-1">房東姓名</b-badge>
              </a>
            </div>
            <hr>
            <div class="d-flex py-2">
              <h4 class="h5 mr-1">房客</h4>
              <small class="text-primary d-flex align-items-end">
                <b>1</b>位學生
                <b>1</b>位上班族
              </small>
               </div>
              <div class="tenants">
                <Identity></Identity>
              </div>
          </section>
        </b-col>
      </b-row>
    </b-container>

    <section class="bg-info">
      <b-container class="py-5">
        <div class="rooms mb-md-4 flex-column-reverse flex-lg-row">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
        </div>
        <b-row class="mb-md-4">
          <b-col md="6">
            <section>
              <div role="tablist">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-button block href="#" v-b-toggle.accordion-1 variant="info">家具</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <!-- I start opened because
                        <code>visible</code> is
                        <code>true</code> -->
                        <img src="../assets/bed.svg" width="35" class="rooms-icon"/>
                        <img src="../assets/desk.svg" width="35" class="rooms-icon"/>
                        <img src="../assets/chair.svg" width="35" class="rooms-icon"/>
                        <img src="../assets/sofa.svg" width="35" class="rooms-icon"/>
                        <img src="../assets/wardrobe.svg" width="35" class="rooms-icon"/>
                        <img src="../assets/fridge.svg" width="35" class="rooms-icon"/>
                        <img src="../assets/television.svg" width="35" class="rooms-icon"/>
                      </b-card-text>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-button block href="#" v-b-toggle.accordion-2 variant="info">設施</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                       <b-card-text>
                         <img src="../assets/kitchen.svg" width="35" class="rooms-icon"/>
                         <img src="../assets/elevator.svg" width="35" class="rooms-icon"/>
                         <img src="../assets/heater.svg" width="35" class="rooms-icon"/>
                         <img src="../assets/window.svg" width="35" class="rooms-icon"/>
                         <img src="../assets/wifi.svg" width="35" class="rooms-icon"/>
                       </b-card-text>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </section>
          </b-col>
          <b-col md="6">
            <section class="calendar bg-white p-4 border d-flex justify-content-center">
               <b-calendar v-model="value" :date-disabled-fn="dateDisabled" locale="en"></b-calendar>
            </section>
          </b-col>
        </b-row>
        <b-button variant="primary" size="lg" class="btn-block">確認預約</b-button>
      </b-container>
    </section>
  </div>
</template>

<script>
import Identity from '@/components/Identity.vue'
import Map from '@/components/Map.vue'
export default {
  components: {
    Identity,
    Map
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      text: '...',
      value: ''
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    dateDisabled (ymd, date) {
      // Disable weekends (Sunday = `0`, Saturday = `6`) and
      // disable days that fall on the 13th of the month
      const weekday = date.getDay()
      const day = date.getDate()
      // Return `true` if the date should be disabled
      return weekday === 0 || weekday === 6 || day === 13
    }
  }
}
</script>

<style>
ul {
  list-style: none;
}
.rooms-icon{
  padding:5px;
  border:1px solid #DDE6FA;
  margin-right:5px;
}
</style>
