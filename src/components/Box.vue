<template>
  <div class="box">
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="10">
          <div class="form p-4 bg-white">
            <h1 class="h3 text-center my-4">
              <slot name="title">選擇預約時間</slot>
            </h1>
            <slot name="content">
              <div class="my-5">
                <p class="font-weight-bold text-primary h4">
                  2020/2/26
                  <label>(三)</label>
                </p>
                <b-form inline>
                  <label class="sr-only">搜尋房源</label>
                  <b-form-select
                    v-model="ampmSelected"
                    :options="ampmOptions"
                    size="lg"
                    class="mb-2 mr-sm-2 mb-sm-0"
                  ></b-form-select>
                  <b-form-select
                    v-model="timeSelected"
                    :options="timeOptions"
                    size="lg"
                    class="mb-2 mr-sm-2 mb-sm-0"
                  ></b-form-select>
                </b-form>
              </div>
              <b-input-group-append>
                <b-button variant="outline-primary" size="lg" class="w-50 mr-1">取消</b-button>
                <b-button variant="primary" size="lg" class="w-50">下一步</b-button>
              </b-input-group-append>
            </slot>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scope>
.form {
  box-shadow: 0 20px 40px rgba(38, 153, 251, 0.2);
}
</style>
