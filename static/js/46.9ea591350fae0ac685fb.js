webpackJsonp([46],{"05Xd":function(t,a,e){"use strict";var i={props:{params:Object},data:function(){return{date1:"",pickerOptions1:{disabledDate:function(t){return t.getTime()>Date.now()}},mallName:"",mallVal:"",mallOpt:[],monitoryVal:"",monitoryName:"",monitoryOpt:[],cameraVal:"",cameraOpt:[],typeVal:"",timeVal:[],account_id:"",Params:{},isEffect:!0,pageLimit:45}},created:function(){this.timeVal=[dateUnit.dateFormat(new Date,"yyyy-MM-dd")+" 00:00:00",dateUnit.dateFormat(new Date,"yyyy-MM-dd")+" 23:59:59"],this.getMallList()},mounted:function(){},methods:{getMallList:function(){var t=this;this.mallOpt=[],this.mallVal="",this.mallName="",this.axios.get("/malls",{params:{accountId:this.$cookie.get("accountId"),status:1,_t:Date.parse(new Date)/1e3}}).then(function(a){var e=a.data.data,i="";if(e.length>0){var o=window.sessionStorage.getItem("mallId");o&&Number(o),t.mallOpt=e,e.forEach(function(t,a){o&&t.id==o&&(i=t.name)}),t.mallName=i||e[0].name,t.mallVal=o?Number(o):e[0].id,t.getGates(t.mallVal),t.clickHandle()}}).catch(function(t){})},chooseMall:function(){var t=this;this.mallOpt.forEach(function(a){a.id==t.mallVal&&(t.mallName=a.name)}),this.getGates(this.mallVal)},getGates:function(t){var a=this;this.monitoryOpt=[],this.monitoryVal="",this.monitoryName="",this.axios.get("/gates",{params:{mallId:t,status:1,isHasFace:1,_t:Date.parse(new Date)/1e3}}).then(function(t){var e=t.data.data;e.length&&(e.unshift({id:"",name:a.$t("pholder.allGate")}),a.monitoryOpt=e,a.monitoryVal=e[0].id,a.monitoryName=e[0].name+" ",a.getChannels(a.monitoryVal))}).catch(function(t){})},chooseMonitory:function(){var t=this;this.monitoryOpt.forEach(function(a){a.id==t.monitoryVal&&(t.monitoryName=a.name+" ")}),this.getChannels(this.monitoryVal)},getChannels:function(t){var a=this;t&&(this.cameraOpt=[],this.cameraVal="",this.axios.get("/channels",{params:{gateId:t,_t:Date.parse(new Date)/1e3}}).then(function(t){var e=t.data;e.data.length>0&&(e.data.unshift({id:"",name:a.$t("pholder.allChannel")}),a.cameraVal=e.data[0].id,a.cameraOpt=e.data)}).catch(function(t){}))},clickHandle:function(){var t=this;this.$emit("startLoading","camera"),this.timeVal.length<=1&&(this.timeVal=[dateUnit.dateFormat(new Date,"yyyy-MM-dd")+" 00:00:00",dateUnit.dateFormat(new Date,"yyyy-MM-dd")+" 23:59:59"]),setTimeout(function(){var a={counttime_gte:t.timeVal[0],counttime_lte:t.timeVal[1],accountId:t.$cookie.get("accountId"),mallId:t.mallVal,age_gt:t.isEffect?0:null,channelId:t.cameraVal?t.cameraVal:null,gateId:t.monitoryVal?t.monitoryVal:null,personType:t.typeVal?t.typeVal:null,direction:1,page:1,pageSize:t.pageLimit,sortName:"counttime",sortOrder:"DESC"};t.Params="&counttime_gte="+t.timeVal[0]+"&counttime_lte="+t.timeVal[1]+"&accountId="+t.$cookie.get("accountId")+"&mallId="+t.mallVal,t.cameraVal&&(t.Params=t.Params+"&channelId="+t.cameraVal),t.monitoryVal&&(t.Params=t.Params+"&gateId="+t.monitoryVal),t.typeVal&&(t.Params=t.Params+"&personType="+t.typeVal),t.Params=t.Params+"&direction=1&page=1&pageSize="+t.pageLimit+"&sortName=counttime&sortOrder=DESC";var e=(t.mallName?t.mallName+"-":t.mallName)+t.monitoryName+" "+t.timeVal[0].split(" ")[0]+"至"+t.timeVal[1].split(" ")[0]+" ";t.$emit("emitTitle",e),t.$emit("emitParams",a)},1e3)},searchHandle:function(t,a){var e=this,i=a||this.pageLimit,o=t||1,l={counttime_gte:this.timeVal[0],counttime_lte:this.timeVal[1],mallId:this.mallVal,channelId:this.cameraVal?this.cameraVal:null,gateId:this.monitoryVal?this.monitoryVal:null,personType:this.typeVal?this.typeVal:null,direction:1,page:o,pageSize:i,sortName:"counttime",sortOrder:"DESC",_t:Date.parse(new Date)/1e3};this.axios.get("/faceRecognitions",{params:l}).then(function(t){var a=t.data;200==a.code?e.$emit("conditionData",a.data):e.$message({showClose:!0,type:"error",message:e.$t("message.captureFailed")+a.msg})}).catch(function(t){})},resetRefresh:function(){this.timeVal=[dateUnit.dateFormat(new Date,"yyyy-MM-dd")+" 00:00:00",dateUnit.dateFormat(new Date,"yyyy-MM-dd")+" 23:59:59"]},uploadData:function(){var t=localStorage.getItem("lang");if(t){t="&localLanguage="+{mall_cn:"zh_CN",zh_CN:"zh_CN",en_US:"en_US",zh_TW:"zh_TW"}[t]}var a=window.apiUrl+"/faceRecognitions/excel?"+this.Params+t;window.open(a)}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"behavior-more-option behavior-test-option"},[e("div",{staticClass:"opt-left"},[e("div",{staticClass:"test-opt-mall test-camera"},[e("el-select",{staticClass:"mall-opt",attrs:{filterable:"",placeholder:t.$t("pholder.shopSelect")},on:{change:t.chooseMall},model:{value:t.mallVal,callback:function(a){t.mallVal=a},expression:"mallVal"}},t._l(t.mallOpt,function(t,a){return e("el-option",{key:t.value,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),e("div",{staticClass:"test-opt-monitory test-camera"},[e("el-select",{staticClass:"monitory-opt",attrs:{filterable:"",placeholder:t.$t("pholder.site")},on:{change:t.chooseMonitory},model:{value:t.monitoryVal,callback:function(a){t.monitoryVal=a},expression:"monitoryVal"}},t._l(t.monitoryOpt,function(t,a){return e("el-option",{key:t.value,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),""!==t.monitoryVal?e("div",{staticClass:"test-opt-camera test-camera"},[e("el-select",{attrs:{filterable:"",placeholder:t.$t("pholder.camera")},model:{value:t.cameraVal,callback:function(a){t.cameraVal=a},expression:"cameraVal"}},t._l(t.cameraOpt,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1):t._e(),t._v(" "),e("div",{staticClass:"test-opt-type"},[e("el-select",{attrs:{filterable:"",placeholder:t.$t("pholder.type")},model:{value:t.typeVal,callback:function(a){t.typeVal=a},expression:"typeVal"}},[e("el-option",{attrs:{label:t.$t("pholder.allType"),value:""}},[t._v(t._s(t.$t("pholder.allType")))]),t._v(" "),e("el-option",{attrs:{label:t.$t("dictionary.staff"),value:"1"}},[t._v(t._s(t.$t("dictionary.staff")))]),t._v(" "),e("el-option",{attrs:{label:t.$t("dictionary.custom"),value:"0"}},[t._v(t._s(t.$t("dictionary.custom")))])],1)],1),t._v(" "),e("div",{staticClass:"test-opt-time mr20"},[e("el-date-picker",{staticClass:"time-opt",attrs:{type:"datetimerange","picker-options":t.pickerOptions1,format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":t.$t("pholder.startDate"),"end-placeholder":t.$t("pholder.endDate")},on:{change:t.clickHandle},model:{value:t.timeVal,callback:function(a){t.timeVal=a},expression:"timeVal"}})],1),t._v(" "),e("div",{staticClass:"test-opt-type test-opt-effect"},[e("el-checkbox",{model:{value:t.isEffect,callback:function(a){t.isEffect=a},expression:"isEffect"}},[t._v(t._s(t.$t("Behavior.isEffTra")))])],1)]),t._v(" "),e("div",{staticClass:"opt-right"},[e("el-button",{staticClass:"primary-btn behavior-collapse-btn",attrs:{type:"primary",size:"samll"},on:{click:t.clickHandle}},[t._v(t._s(t.$t("button.confirm")))]),t._v(" "),e("el-button",{staticClass:"primary-btn behavior-collapse-btn",attrs:{type:"primary",size:"samll"},on:{click:t.uploadData}},[t._v(t._s(t.$t("button.load")))])],1)])},staticRenderFns:[]},l=e("VU/8")(i,o,!1,function(t){e("yGCa")},"data-v-4b4f9f5c",null);a.a=l.exports},"3B08":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("gRE1"),o=e.n(i),l=e("05Xd"),n=e("3MSA"),r=e.n(n),s={data:function(){return{activeIndex:"",moreOptVisible:!1,tableData:[],defaultImg:r.a,currentPage:1,pageArr:[10,50,100],pageSize:10,totalPage:null,repTitle:"",behaviorMenu:[{path:"mallgroup",name:"mallGroup",iconClass:"icon font_family icon-mallgroup_icon custom-icon mallgroup-icon"},{path:"effectiveflow",name:"effectiveflow",iconClass:"icon font_family icon-effectiveflow_icon custom-icon effectiveflow-icon"},{path:"capturecamera",name:"capturecamera",iconClass:"icon font_family icon-shot_icon custom-icon shot-icon"},{path:"clerkcamera",name:"clerkcamera",iconClass:"icon font_family icon-clerkcamera_icon custom-icon clerkcamera-icon"},{path:"grouptime",name:"groupTime",iconClass:"icon font_family icon-grouptime_icon custom-icon grouptime-icon"},{path:"gateflow",name:"gateFlow",iconClass:"icon font_family icon-gateflow_icon custom-icon gateflow-icon"},{path:"areaflowtime",name:"areaflowtime",iconClass:"icon font_family icon-gateflow_icon custom-icon gateflow-icon"},{path:"customgroup",name:"customGroup",iconClass:"icon font_family icon-grouptime_icon custom-icon grouptime-icon"}],menuObj:{},menuArr:[]}},components:{"test-option":l.a},methods:{i18n:function(t){var a="Behavior."+t;return this.$t(a)},permissControl:function(t){return!!window.allMenu||!!this.menuObj.hasOwnProperty(t)},menuSelect:function(t,a){-1===window.location.href.indexOf(t)&&this.$router.push("/behavior/"+a)},refreshSelect:function(t){this.$router.push("/behavior/"+t)},refresh:function(){var t=this.$router.history.current.name,a=(this.$router.history.current.path,{capturecamera:"capturecamera",clerkcamera:"clerkcamera",mallgroup:"mallgroup",customgroup:"customgroup",grouptime:"grouptime",areagroup:"areagroup",gateflow:"gateflow",areaflowtime:"areaflowtime",effectiveflow:"effectiveflow"});a.hasOwnProperty(t)&&(this.activeIndex=a[t],this.refreshSelect(a[t]))}},created:function(){window.allMenu||(this.menuArr=JSON.parse(window.localStorage.getItem("menu")))},mounted:function(){var t=this,a=void 0;window.allMenu?a="mallgroup":(this.menuArr.forEach(function(a,e){"behavior"==a.label&&a.children.forEach(function(a,e){t.menuObj[a.label]=a.label})}),a=o()(this.menuObj)[0]),this.$router.history.current.name?this.refresh():(this.activeIndex=a,this.menuSelect(a,[a]))}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"behavior-wrapper"},[e("el-container",[e("el-aside",{attrs:{width:"200px",height:"100%"}},[e("el-menu",{staticClass:"aside-menu-wrapper",attrs:{"default-active":t.activeIndex,"background-color":"#414755","text-color":"#fff"},on:{select:t.menuSelect}},t._l(t.behaviorMenu,function(a){return t.permissControl(a.path)?e("el-menu-item",{key:a.path,attrs:{index:a.path,router:"true"}},[e("i",{class:a.iconClass}),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.i18n(a.name)))])]):t._e()}))],1),t._v(" "),e("el-container",[e("router-view")],1)],1)],1)},staticRenderFns:[]},m=e("VU/8")(s,c,!1,function(t){e("EhXv")},"data-v-1231b99c",null);a.default=m.exports},EhXv:function(t,a){},yGCa:function(t,a){}});