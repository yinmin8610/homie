(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64f5e5b4"],{"60d4":function(e){e.exports=JSON.parse('{"code":"zh_TW","messages":{"alpha":"{_field_} 須以英文組成","alpha_dash":"{_field_} 須以英數、斜線及底線組成","alpha_num":"{_field_} 須以英數組成","alpha_spaces":"{_field_} 須以英文及空格組成","between":"{_field_} 須介於 {min} 至 {max}之間","confirmed":" {_field_} 不一致","digits":"{_field_} 須為 {length} 位數字","dimensions":"{_field_} 圖片尺寸不正確。須為 {width} x {height} 像素","email":"{_field_} 須為有效的電子信箱","excluded":"{_field_} 的選項無效","ext":"{_field_} 須為有效的檔案","image":"{_field_} 須為圖片","oneOf":"{_field_} 的選項無效","integer":"{_field_} 須為整數","length":"{_field_} 的長度須為 {length}","max":"{_field_} 不能大於 {length} 個字元","max_value":"{_field_} 不得大於 {max}","mimes":"{_field_} 須為有效的檔案類型","min":"{_field_} 不能小於 {length} 個字元","min_value":"{_field_} 不得小於 {min}","numeric":"{_field_} 須為數字","regex":"{_field_} 的格式錯誤","required":"{_field_} 為必填","required_if":"{_field_} 為必填","size":"{_field_} 的檔案須小於 {size}KB"}}')},"93f9":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"reservation-amount"},[i("h1",{staticClass:"h3 text-center my-4"},[e._v("居住原因")]),i("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.passes,s=t.invalid;return[i("b-form",{on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)},reset:e.resetForm}},[i("b-row",{staticClass:"justify-content-center mb-5"},[i("b-col",{attrs:{md:"5"}},[i("div",{staticClass:"steps-line"},[i("div",{staticClass:"steps-pointer"}),i("div",{staticClass:"steps-pointer"}),i("div",{staticClass:"steps-pointer active"}),i("div",{staticClass:"steps-pointer"}),i("div",{staticClass:"steps-pointer"})])])],1),i("ValidationProvider",{attrs:{rules:"required",name:"居住原因"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors,s=t.valid;return[i("b-form-textarea",{attrs:{id:"textarea",value:e.rentInfo.reason,placeholder:"輸入居住原因及用途，例如：上班",rows:"3","max-rows":"6",type:"text",state:!a[0]&&(!!s||null)},on:{update:e.clickfu}}),i("b-form-invalid-feedback",{attrs:{id:"inputLiveFeedback"}},[e._v(e._s(a[0]))])]}}],null,!0)}),i("b-input-group-append",{staticClass:"mt-5"},[i("b-button",{staticClass:"w-50 mr-1",attrs:{to:{path:"/rent/date"},variant:"outline-primary",size:"lg"}},[e._v("上一步")]),i("b-button",{staticClass:"w-50",attrs:{disabled:s,to:{path:"/rent/payment"},variant:"primary",size:"lg"}},[e._v("下一步")]),i("router-view")],1)],1)]}}])})],1)},s=[],n=i("5530"),r=i("2f62"),l=i("7bb1"),o=i("60d4");Object(l["d"])("zh_TW",o);var d={name:"BoxReason",components:{ValidationObserver:l["a"],ValidationProvider:l["b"]},data:function(){return{value:""}},methods:Object(n["a"])({clickfu:function(e){this.$store.commit("REASON",e)},onSubmit:function(){},resetForm:function(){var e=this;this.rentInfo.reason="",requestAnimationFrame((function(){e.$refs.observer.reset()}))}},Object(r["b"])(["pagesStatus"])),computed:Object(n["a"])({},Object(r["c"])(["rentInfo"])),created:function(){this.pagesStatus()}},_=d,f=i("2877"),u=Object(f["a"])(_,a,s,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-64f5e5b4.ba7eac60.js.map