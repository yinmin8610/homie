(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-282a3906"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("d3b7"),r("e6cf");function i(t,e,r,i,n,a,o){try{var s=t[a](o),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(i,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function s(t){i(o,n,a,s,u,"next",t)}function u(t){i(o,n,a,s,u,"throw",t)}s(void 0)}))}}},"1fb3":function(t,e,r){"use strict";var i=r("4720"),n=r.n(i);n.a},4720:function(t,e,r){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var i=r("1d80"),n=r("5899"),a="["+n+"]",o=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),u=function(t){return function(e){var r=String(i(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,r){var i=r("861d"),n=r("d2bb");t.exports=function(t,e,r){var a,o;return n&&"function"==typeof(a=e.constructor)&&a!==r&&i(o=a.prototype)&&o!==r.prototype&&n(t,o),t}},"96cf":function(t,e,r){var i=function(t){"use strict";var e,r=Object.prototype,i=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function u(t,e,r,i){var n=e&&e.prototype instanceof h?e:h,a=Object.create(n.prototype),o=new I(i||[]);return a._invoke=E(t,r,o),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(i){return{type:"throw",arg:i}}}t.wrap=u;var l="suspendedStart",m="suspendedYield",f="executing",p="completed",d={};function h(){}function v(){}function b(){}var g={};g[a]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(S([])));w&&w!==r&&i.call(w,a)&&(g=w);var x=b.prototype=h.prototype=Object.create(g);function q(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t){function e(r,n,a,o){var s=c(t[r],t,n);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,o)}))}o(s.arg)}var r;function n(t,i){function n(){return new Promise((function(r,n){e(t,i,r,n)}))}return r=r?r.then(n,n):n()}this._invoke=n}function E(t,e,r){var i=l;return function(n,a){if(i===f)throw new Error("Generator is already running");if(i===p){if("throw"===n)throw a;return O()}r.method=n,r.arg=a;while(1){var o=r.delegate;if(o){var s=L(o,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===l)throw i=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=f;var u=c(t,e,r);if("normal"===u.type){if(i=r.done?p:m,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=p,r.method="throw",r.arg=u.arg)}}}function L(t,r){var i=t.iterator[r.method];if(i===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=c(i,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,d;var a=n.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){while(++n<t.length)if(i.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:O}}function O(){return{value:e,done:!0}}return v.prototype=x.constructor=b,b.constructor=v,b[s]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},q(_.prototype),_.prototype[o]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,i,n){var a=new _(u(e,r,i,n));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},q(x),x[s]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var i=e.pop();if(i in t)return r.value=i,r.done=!1,r}return r.done=!0,r}},t.values=S,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(i,n){return s.type="throw",s.arg=t,r.next=i,n&&(r.method="next",r.arg=e),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var i=r.completion;if("throw"===i.type){var n=i.arg;C(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,i){return this.delegate={iterator:S(t),resultName:r,nextLoc:i},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=i}catch(n){Function("r","regeneratorRuntime = r")(i)}},a9e3:function(t,e,r){"use strict";var i=r("83ab"),n=r("da84"),a=r("94ca"),o=r("6eeb"),s=r("5135"),u=r("c6b6"),c=r("7156"),l=r("c04e"),m=r("d039"),f=r("7c73"),p=r("241c").f,d=r("06cf").f,h=r("9bf2").f,v=r("58a8").trim,b="Number",g=n[b],y=g.prototype,w=u(f(y))==b,x=function(t){var e,r,i,n,a,o,s,u,c=l(t,!1);if("string"==typeof c&&c.length>2)if(c=v(c),e=c.charCodeAt(0),43===e||45===e){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+c}for(a=c.slice(2),o=a.length,s=0;s<o;s++)if(u=a.charCodeAt(s),u<48||u>n)return NaN;return parseInt(a,i)}return+c};if(a(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var q,_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(w?m((function(){y.valueOf.call(r)})):u(r)!=b)?c(new g(x(e)),r,_):x(e)},E=i?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;E.length>L;L++)s(g,q=E[L])&&!s(_,q)&&h(_,q,d(g,q));_.prototype=y,y.constructor=_,o(n,b,_)}},b0c0:function(t,e,r){var i=r("83ab"),n=r("9bf2").f,a=Function.prototype,o=a.toString,s=/^\s*function ([^ (]*)/,u="name";!i||u in a||n(a,u,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},e6c4:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Landlord"},[r("section",{staticClass:"info py-4 bg-info mb-5"},[r("b-container",[r("div",{staticClass:"mb-3 d-flex align-items-end"},[r("img",{staticClass:"mr-1 img-fluid",attrs:{src:"https://images.unsplash.com/profile-1563292410875-3ba284c92d0e?dpr=2&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff",alt:""}}),r("h1",{staticClass:"h4 p-1"},[t._v(t._s(this.email))])])])],1),"member"===this.status.user?r("div",[r("section",{staticClass:"lease text-center mb-5"},[r("b-container",[r("span",[t._v("June 2, 2017")]),r("h2",{staticClass:"h4 my-2"},[t._v("房屋守則")]),r("p",{staticClass:"text-truncate"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, beatae. Minima est corrupti id, dignissimos a, illo cumque tempore, voluptatem nesciunt officia voluptas iure placeat distinctio labore temporibus in quia excepturi laboriosam quod commodi! Libero sit eaque recusandae, doloribus corporis labore nobis quae suscipit veritatis, similique totam! Quos minus voluptate necessitatibus non, temporibus soluta fugit quisquam voluptatibus aut officia tempora harum, error expedita veniam quae dolore similique perspiciatis illum commodi deserunt aspernatur natus. Doloribus distinctio quod non sed blanditiis possimus, molestias harum at nobis perferendis dolorum recusandae amet, repellat laborum illum tempore suscipit, alias quidem aperiam esse magnam ea quas.")]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lease",modifiers:{"modal-lease":!0}}],staticClass:"text-primary",attrs:{variant:"info",size:"sm"}},[t._v("點我查看")])],1)],1),r("section",{staticClass:"housing"},[r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",{staticClass:"housing-img bg-info p-4",attrs:{cols:"6",md:"3"}},[t.houseStatus?t._l(t.data,(function(t,e){return r("House",{key:e,attrs:{house:t}})})):t._e()],2)],1)],1)],1)]):"landlord"===this.status.user?r("div",[r("section",[r("b-container",[r("b-row",[r("b-col",{staticClass:"mb-2 mb-md-0",attrs:{md:"6"}},[r("div",{staticClass:"reservation bg-info text-center text-primary py-6"},[r("b-link",{attrs:{to:{path:"/housingList"}}},[r("b-icon-book-half-fill"),r("h2",{staticClass:"h5"},[t._v("房源列表")])],1)],1)]),r("b-col",{attrs:{md:"6"}},[r("div",{staticClass:"reservation bg-info text-center text-primary py-6"},[r("b-link",{attrs:{to:{path:"/reservationList"}}},[r("b-icon-house-fill"),r("h2",{staticClass:"h5"},[t._v("預約列表")])],1)],1)])],1)],1)],1)]):t._e(),r("b-modal",{attrs:{id:"modal-lease",title:"房屋守則","hide-footer":""}},[r("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque cum delectus odit iusto tempora hic repellat, nobis sapiente incidunt impedit excepturi quisquam. Culpa vero provident ad error, adipisci maxime magni! Praesentium, maiores ipsa? Quia necessitatibus, praesentium incidunt rem minus neque numquam eum eos, quos maiores ducimus voluptas culpa quod voluptatibus omnis at illo. Labore beatae ipsam commodi laudantium, magni deserunt reiciendis hic suscipit ad eius atque quibusdam animi culpa odit facere ab provident repudiandae! Dolore ex provident veritatis, odio cum culpa nisi vero labore adipisci et vel, accusamus inventore, assumenda eum saepe error aliquam magnam! Totam consequuntur officia ullam sint distinctio. Quos facere sapiente nesciunt inventore assumenda voluptatum fugit dolorum ea expedita. Reiciendis, magnam velit aut doloremque, incidunt libero ipsam pariatur eveniet reprehenderit neque alias. Pariatur dolorum vel hic similique ipsum at molestiae dicta earum autem quaerat quod unde aliquid, deserunt incidunt praesentium laudantium numquam et architecto maiores eum inventore. Eos, et, aperiam pariatur itaque dolorem soluta quibusdam omnis doloremque incidunt dolorum quos laudantium corrupti ea at tenetur dolores nihil similique dolor repellat autem, alias libero esse obcaecati? Distinctio possimus necessitatibus iusto quidem iure! Quia optio asperiores autem omnis provident quod recusandae ex perferendis tenetur id incidunt voluptatibus sed voluptatum in dolor qui adipisci et culpa, aut maiores? Iste nesciunt unde et! Deleniti eligendi dolores rem adipisci non sit cum vel eaque nobis, nostrum necessitatibus velit aut obcaecati nihil architecto facere quas quidem ipsum aliquam sequi molestiae nemo nulla. Commodi, doloremque rerum fugit a vitae non tempore suscipit iste laboriosam, cupiditate totam inventore saepe labore magni aspernatur quis ducimus explicabo excepturi dolorum facere quasi consequuntur, praesentium placeat! Aliquam consequuntur doloremque excepturi at ut nesciunt eius et fugiat, sit eligendi architecto sequi atque? Debitis, sit dolorem ex similique earum ad, laborum omnis beatae ratione iste obcaecati, rerum consequatur error expedita?")])])],1)},n=[],a=(r("4160"),r("b0c0"),r("a9e3"),r("159b"),r("96cf"),r("1da1")),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"house"},[r("h5",[t._v(t._s(t.house.name))]),r("span",{staticClass:"text-primary"},[r("b-icon",{attrs:{icon:"house-fill",variant:"primary"}}),r("label",[t._v(t._s(t.house.county))]),r("label",[t._v(t._s(t.house.district))])],1)])},s=[],u={name:"",props:{house:{default:Object,house:{name:"",county:"",district:""}}}},c=u,l=r("2877"),m=Object(l["a"])(c,o,s,!1,null,null,null),f=m.exports,p={name:"Landlord",components:{House:f},data:function(){return{status:{},email:"",housing:[],landlord:[],houseStatus:!1,data:[]}},methods:{getData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="".concat("http://localhost:3000","/register"),e.next=3,t.$http.get(r).then((function(e){t.landlord=e.data,t.landlord.forEach((function(e){e.id===Number(t.$route.params.id)&&(t.email=e.email)}))}));case 3:return e.next=5,t.$http.get("".concat("http://localhost:3000","/house")).then((function(e){t.housing=e.data}));case 5:return e.next=7,t.filterData();case 7:case"end":return e.stop()}}),e)})))()},filterData:function(){var t=this;this.housing.forEach((function(e){t.email===e.landlord&&t.data.push({id:e.id,name:e.name,county:e.county,district:e.district})})),this.houseStatus=!0}},created:function(){this.status=JSON.parse(localStorage.getItem("STATUS"))||[],this.getData()}},d=p,h=(r("1fb3"),Object(l["a"])(d,i,n,!1,null,"e3fe8b40",null));e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-282a3906.411c65e7.js.map