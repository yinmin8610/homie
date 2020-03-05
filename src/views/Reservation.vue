<template>
  <div class="Reservate">
    <Box></Box>
    <Box>
      <div slot="title">完成預約</div>
      <div slot="content">
        <div class="d-flex justify-content-center mb-5">
          <img src="../assets/success.jpg" height="300" alt />
        </div>
        <b-button variant="primary" size="lg" class="btn-block">繼續逛</b-button>
      </div>
    </Box>
    <Box>
      <div slot="title">居住人數</div>
      <div slot="content">
        <b-row class="justify-content-center mb-5">
          <b-col md="5">
            <div class="steps-line">
              <div class="steps-pointer active"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
            </div>
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col>
            <label for="sb-step">成人</label>
            <b-form-spinbutton id="sb-step" v-model="value" min="0" max="10" step="1"></b-form-spinbutton>
          </b-col>
          <b-col>
            <label for="sb-step">兒童</label>
            <b-form-spinbutton id="sb-step" v-model="value" min="0" max="10" step="1"></b-form-spinbutton>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <label for="sb-step">幼兒</label>
            <b-form-spinbutton id="sb-step" v-model="value" min="0" max="10" step="1"></b-form-spinbutton>
          </b-col>
          <b-col>
            <label for="sb-step">寵物</label>
            <b-form-spinbutton id="sb-step" v-model="value" min="0" max="10" step="1"></b-form-spinbutton>
          </b-col>
        </b-row>
        <b-input-group-append class="mt-5">
          <b-button variant="outline-primary" size="lg" class="w-50 mr-1">取消</b-button>
          <b-button variant="primary" size="lg" class="w-50">下一步</b-button>
        </b-input-group-append>
      </div>
    </Box>
    <Box>
      <div slot="title">居住日期</div>
      <div slot="content">
        <b-row class="justify-content-center mb-5">
          <b-col md="5">
            <div class="steps-line">
              <div class="steps-pointer"></div>
              <div class="steps-pointer active"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
            </div>
          </b-col>
        </b-row>
        <div class="mb-2">
          <label for="example-datepicker">開始日期</label>
          <b-form-datepicker id="example-datepicker" v-model="startDateValue" class="mb-2"></b-form-datepicker>
        </div>
        <div>
          <label for="example-datepicker">結束日期</label>
          <b-form-datepicker id="example-datepicker" v-model="endDateValue" class="mb-2"></b-form-datepicker>
        </div>
        <b-input-group-append class="mt-5">
          <b-button variant="outline-primary" size="lg" class="w-50 mr-1">上一步</b-button>
          <b-button variant="primary" size="lg" class="w-50">下一步</b-button>
        </b-input-group-append>
      </div>
    </Box>
    <Box>
      <div slot="title">居住原因</div>
      <div slot="content">
        <b-row class="justify-content-center mb-5">
          <b-col md="5">
            <div class="steps-line">
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer active"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
            </div>
          </b-col>
        </b-row>
        <b-form-textarea
          id="textarea"
          v-model="textarea"
          placeholder="輸入居住原因及用途，例如：上班"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <b-input-group-append class="mt-5">
          <b-button variant="outline-primary" size="lg" class="w-50 mr-1">上一步</b-button>
          <b-button variant="primary" size="lg" class="w-50">下一步</b-button>
        </b-input-group-append>
      </div>
    </Box>
    <Box>
      <div slot="title">付費資訊</div>
      <div slot="content">
        <b-row class="justify-content-center mb-5">
          <b-col md="5">
            <div class="steps-line">
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer active"></div>
              <div class="steps-pointer"></div>
            </div>
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col>
            <label for>卡號</label>
            <b-form-input v-model="text" placeholder="12334 5678 3456 2456"></b-form-input>
          </b-col>
          <b-col class="d-flex align-items-end">
            <img src="../assets/Group 323.png" width="75" class="p-2 border" />
          </b-col>
        </b-row>
        <div class="mb-2">
          <label for>全名</label>
          <b-form-input v-model="text"></b-form-input>
        </div>
        <b-row>
          <b-col>
            <label for>到期日</label>
            <b-form-select v-model="selected" :options="options"></b-form-select>
            <b-form-select v-model="selected" :options="options"></b-form-select>
          </b-col>
          <b-col>
            <label for>CVV</label>
            <b-form-input v-model="text" placeholder="123"></b-form-input>
          </b-col>
        </b-row>
        <b-input-group-append class="mt-5">
          <b-button variant="outline-primary" size="lg" class="w-50 mr-1">上一步</b-button>
          <b-button variant="primary" size="lg" class="w-50">下一步</b-button>
        </b-input-group-append>
      </div>
    </Box>
    <Box>
      <div slot="title">完成租屋</div>
      <div slot="content">
         <b-row class="justify-content-center mb-5">
          <b-col md="5">
            <div class="steps-line">
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer"></div>
              <div class="steps-pointer active"></div>
            </div>
          </b-col>
        </b-row>
        <div class="d-flex justify-content-center mb-5">
          <img src="../assets/success.jpg" height="300" alt />
        </div>
        <b-button variant="primary" size="lg" class="btn-block">繼續逛</b-button>
      </div>
    </Box>
  </div>
</template>

<script>
import Box from '@/components/Box.vue'
export default {
  name: 'Reservation',
  components: {
    Box
  },
  data () {
    return {
      value: 0,
      startDateValue: '',
      endDateValue: '',
      textarea: '',
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      ampmSelected: '上午',
      ampmOptions: [
        { value: '上午', text: '上午' },
        { value: '下午', text: '下午' }
      ],
      timeSelected: '11:00',
      timeOptions: [
        { value: '11:00', text: '11:00' },
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
.steps-line {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.steps-line::after {
  content: "";
  position: absolute;
  height: 1px;
  background-color: #dde6fa;
  top: 50%;
  left: 0;
  right: 0;
}
.steps-pointer {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #dde6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  .active {
    content: "";
    height: 15;
    width: 15;
    display: block;
    background-color: white;
    border: 3px solid #6691fa;
    border-radius: 50%;
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
/*
  .steps-pointer::after{
    content:"";
    position: absolute;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid #6691FA;
    z-index: 1;
    transform: translateX(-50%);
    background-color: white;
  } */
</style>
