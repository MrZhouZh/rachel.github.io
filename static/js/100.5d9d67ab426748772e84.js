webpackJsonp([100],{"+F2z":function(t,a){},"16KL":function(t,a,e){"use strict";var i=e("mvHQ"),s=e.n(i),l={props:{mallData:Array},data:function(){return{seraching:!1,pickerOptions1:{disabledDate:function(t){return t.getTime()>Date.now()}},weekPickerOpt:{firstDayOfWeek:1},tabItem:[],panelObj:{mallPanel:!1,floorPanel:!1,formatPanel:!1,ioPanel:!1,shopPanel:!1},analyasisTime:[{label:"日",value:"day",is_active:"time-btn"},{label:"周",value:"week",is_active:"time-btn"},{label:"月",value:"month",is_active:"time-btn"},{label:"年",value:"year",is_active:"time-btn"}],reportTime:{isDay:!1,isWeek:!1,isMonth:!1,isYear:!1},dayTime:"",weekTime:"",monthTime:"",yearTime:"",mallVal:"",floorVal:"",formatVal:"",ioVal:"",zoneVal:"",asisLevel:"",kpiVal:"TRAFFIC",kpiOpt:[],floorData:[],zoneData:[],formatData:[],ioData:[],paramId:"",gateVal:"",floorItem:"",zoneItem:"",floorList:[],zoneList:[],gateData:[],shopFloorData:[],shopFloorId:"",shopFloorVal:"",gateLevel:"all",gateLevelList:[{label:"全部",value:"all"},{label:"广场",value:"mall"},{label:"楼层",value:"floor"},{label:"店铺",value:"zone"}]}},created:function(){if(this.tabItem=[],"mall"===this.$Project){var t={floor:"floor",store:"shop"};for(var a in t)this.tabItem.push({label:a,value:t[a],className:"analysis-item"})}else this.tabItem=[{label:"mall",value:"mall",className:"analysis-item"}];this.tabClickHandle(0)},methods:{i18nFormatter:function(t){var a="asisTab."+t;return this.$t(a)},initAsis:function(t){if(this.paramId=t,this.mallVal=t,this.tabClickHandle(0),"floor"===this.asisLevel)this.timeHandle(0),this.getFloorOpt(t,!0);else{this.getFloorOpt(t),this.timeHandle(0);var a={asis_level:this.asisLevel,asis_date:"day",asis_time:this.dayTime,asis_org:this.paramId};this.$emit("initData",a)}},tabClickHandle:function(t){if("analysis-item"===this.tabItem[t].className){this.tabItem.forEach(function(t){t.className="analysis-item"}),this.tabItem[t].className="analysis-item tabs-active";for(var a in this.panelObj)this.panelObj[a]=!1;switch(this.kpiVal="",this.asisLevel="",this.tabItem[t].value){case"mall":this.panelObj.mallPanel=!0,this.asisLevel="mall",this.kpiOpt=[{label:"客流量",value:"TRAFFIC"},{label:"销售额",value:"SALES"},{label:"游逛深度",value:"DEPTH"},{label:"客单价",value:"PREPRICE"},{label:"坪效",value:"PERAREAVALUE"},{label:"滞留时间",value:"DURATIONTIME"}],this.kpiVal="TRAFFIC";break;case"floor":this.panelObj.floorPanel=!0,this.asisLevel="floor",this.kpiOpt=[{label:"客流量",value:"TRAFFIC"},{label:"销售额",value:"SALES"}],this.kpiVal="TRAFFIC";break;case"format":this.panelObj.formatPanel=!0,this.asisLevel="format",this.kpiOpt=[{label:"客流量",value:"TRAFFIC"},{label:"销售额",value:"SALES"}],this.kpiVal="TRAFFIC";break;case"io":this.panelObj.ioPanel=!0,this.asisLevel="gate",this.kpiOpt=[{label:"客流量",value:"TRAFFIC"}],this.kpiVal="TRAFFIC";break;case"shop":this.panelObj.shopPanel=!0,this.asisLevel="zone",this.kpiOpt=[{label:"客流量",value:"TRAFFIC"},{label:"销售额",value:"SALES"},{label:"进店率",value:"ENTERINGRATE"},{label:"客单价",value:"PREPRICE"},{label:"坪效",value:"PERAREAVALUE"},{label:"成交量",value:"ORDER"},{label:"提袋率",value:"HANDBAGRATE"},{label:"滞留时间",value:"DURATIONTIME"}],this.kpiVal="TRAFFIC";break;default:this.kpiOpt=[],this.kpiVal=""}}},gateLevelChange:function(){"all"===this.gateLevel?this.getAllGates():"mall"===this.gateLevel?this.getMallGates():"floor"===this.gateLevel?this.getFloorList():this.getZoneList()},getAllGates:function(){var t=this;this.gateData=[],this.gateVal="",this.axios.get("/gates",{params:{accountId:this.$cookie.get("accountId"),mallId:this.mallVal,_t:Date.parse(new Date)/1e3}}).then(function(a){if(a.data.data.length>0){var e=a.data.data;e.forEach(function(t){window.sessionStorage.setItem("gate-"+t.id,t.name)}),t.gateVal=e[0].id,t.gateData=e}else t.gateVal="",t.gateData=[]})},getMallGates:function(){var t=this;this.gateData=[],this.gateVal="",this.axios.get("/gates",{params:{mallId:this.mallVal,isMallGate:1,_t:Date.parse(new Date)/1e3}}).then(function(a){if(a.data.data.length>0){var e=a.data.data;t.gateVal=e[0].id,t.gateData=e}})},getFloorList:function(){var t=this;this.floorItem="",this.floorList=[],this.gateData=[],this.gateVal="",this.axios.get("/floors",{params:{mallId:this.mallVal,_t:Date.parse(new Date)/1e3}}).then(function(a){if(a.data.data.length>0){var e=a.data.data;t.floorItem=e[0].id,t.getFloorGate(t.floorItem),t.floorList=e}})},getZoneList:function(){var t=this;this.zoneItem="",this.zoneList=[],this.gateData=[],this.gateVal="",this.axios.get("/zones",{params:{mallId:this.mallVal,sortName:'"floor".name, "zone".name',_t:Date.parse(new Date)/1e3}}).then(function(a){if(a.data.data.length>0){var e=a.data.data;t.zoneItem=e[0].id,t.getZoneGate(t.zoneItem),t.zoneList=e}})},levelFloorChange:function(){this.floorItem?this.getFloorGate(this.floorItem):(this.gateVal="",this.gateData=[])},getFloorGate:function(t){var a=this;this.gateData=[],this.gateVal="",this.axios.get("/floorGates",{params:{FloorId_arr:t,_t:Date.parse(new Date)/1e3}}).then(function(t){if(t.data.data.length>0){var e=t.data.data;e.forEach(function(t){t.id=t.gateId,t.name=window.sessionStorage.getItem("gate-"+t.gateId)}),a.gateVal=e[0].id,a.gateData=e}})},levelZoneChange:function(){this.zoneItem?this.getZoneGate(this.zoneItem):(this.gateVal="",this.gateData=[])},getZoneGate:function(t){var a=this;this.gateData=[],this.gateVal="",this.axios.get("/zoneGates",{params:{ZoneId_arr:t,_t:Date.parse(new Date)/1e3}}).then(function(t){if(t.data.data.length>0){var e=t.data.data;e.forEach(function(t){t.id=t.gateId,t.name=window.sessionStorage.getItem("gate-"+t.gateId)}),a.gateVal=e[0].id,a.gateData=e}})},getFloorOpt:function(t,a){var e=this;this.floorData=[],this.shopFloorData=[],this.floorVal="",this.shopFloorId="",this.shopFloorVal="",this.axios.get("/floors",{params:{mallId:t,accountId:this.$cookie.get("accountId"),status:1,_t:Date.parse(new Date)/1e3}}).then(function(i){if(i.data.data.length>0){var l=JSON.parse(s()(i.data.data));if(l.unshift({name:e.$t("asisTab.all"),id:""}),e.floorData=i.data.data,e.floorVal=i.data.data[0].id,e.shopFloorData=l,e.shopFloorId=l[0].id,e.shopFloorVal=l[0].id,e.getIoOpt(t,e.floorVal),e.getZoneOpt(t,e.shopFloorVal),a){var n={asis_level:e.asisLevel,asis_date:"day",asis_time:e.dayTime,asis_org:e.floorVal};e.$emit("initData",n)}}else e.getZoneOpt(t)}).catch(function(t){})},getZoneOpt:function(t,a){var e=this;this.zoneData=[],this.zoneVal="",this.axios.get("/zones",{params:{mallId:t,floorId:a,accountId:this.$cookie.get("accountId"),status:1,sortName:'"floor".name, "zone".name',_t:Date.parse(new Date)/1e3}}).then(function(t){t.data.data.length>0&&(e.zoneData=t.data.data,e.zoneVal=t.data.data[0].id)}).catch(function(t){})},getIoOpt:function(t,a){var e=this;this.ioData=[],this.ioVal="",this.axios.get("/gates",{params:{mallId:t,floorId:a,accountId:this.$cookie.get("accountId"),status:1,_t:Date.parse(new Date)/1e3}}).then(function(t){t.data.data.length>0&&(e.ioData=t.data.data,e.ioVal=t.data.data[0].id)}).catch(function(t){})},getFormatOpt:function(){var t=this;this.formatData=[],this.formatVal="",this.axios.get("/formats",{params:{_t:Date.parse(new Date)/1e3}}).then(function(a){a.data.data.length>0&&(t.formatData=a.data.data,t.formatVal=a.data.data[0].id)}).catch(function(t){})},timeHandle:function(t){if("time-btn"===this.analyasisTime[t].is_active){this.analyasisTime.forEach(function(t){t.is_active="time-btn"});for(var a in this.reportTime)this.reportTime[a]=!1;this.analyasisTime[t].is_active="time-btn active-time";switch(this.analyasisTime[t].value){case"day":this.reportTime.isDay=!0;break;case"week":this.reportTime.isWeek=!0;break;case"month":this.reportTime.isMonth=!0;break;case"year":this.reportTime.isYear=!0}}},mallChange:function(){this.getFloorOpt(this.mallVal)},gateMallChange:function(){this.gateLevel="all",this.gateLevelChange()},floorChange:function(){this.getZoneOpt(this.mallVal,this.shopFloorVal)},confirmCondition:function(){var t={asis_level:"",asis_date:"",asis_time:"",asis_org:"",asis_kpi:"",asis_format:""};switch(this.asisLevel){case"mall":this.paramId=this.mallVal,t.asis_tit=this.getItemName(this.mallData,this.paramId);break;case"floor":this.paramId=this.floorVal,t.asis_tit=this.getItemName(this.mallData,this.mallVal)+"-"+this.getItemName(this.floorData,this.paramId);break;case"format":t.asis_format=this.formatVal,this.paramId=this.mallVal;break;case"gate":this.paramId=this.gateVal,t.asis_tit=this.getItemName(this.mallData,this.mallVal)+"-"+this.getItemName(this.gateData,this.paramId);break;case"zone":this.paramId=this.zoneVal,t.asis_tit=this.getItemName(this.mallData,this.mallVal)+"-"+this.getItemName(this.zoneData,this.paramId)}this.paramId&&(t.asis_level=this.asisLevel,t.asis_date="day",t.asis_time=this.dayTime,t.asis_org=this.paramId,t.asis_kpi=this.kpiVal,this.$emit("reportTime",t))},getItemName:function(t,a){var e="",i=a.toString().split(",")[0];return t.forEach(function(t){t.id==i&&(e=t.name)}),e},resetRefresh:function(){this.tabClickHandle(0),this.timeHandle(0),this.mallVal=this.mallData[0].id,this.dayTime=dateUnit.dateFormat(new Date,"yyyy-MM-dd")}},mounted:function(){this.dayTime=this.dayTime?this.dayTime:dateUnit.dateFormat(new Date,"yyyy-MM-dd")}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"analysis-option-wrapper"},[e("div",{staticClass:"analysis-level-wrapper"},[e("div",{staticClass:"analysis-level-left"},[e("i",{staticClass:"el-icon-search"}),t._v(" "),e("span",{staticClass:"analysis-level-text"},[t._v(t._s(t.$t("asisTab.level")))])]),t._v(" "),e("div",{staticClass:"analysis-level-right"},[e("ul",{staticClass:"analysis-type-box"},t._l(t.tabItem,function(a,i){return e("li",{key:a.value,class:a.className,on:{click:function(a){t.tabClickHandle(i)}}},[e("span",{staticClass:"analysis-item-title"},[t._v(t._s(t.i18nFormatter(a.label)))])])}))])]),t._v(" "),e("div",{staticClass:"panels-content"},[e("div",{staticClass:"panels-main-top"},[t.panelObj.mallPanel?e("ul",{staticClass:"condition-box"},[e("li",{staticClass:"condition-item"},[e("span",{staticClass:"condition-item-text"},[t._v(t._s(t.$t("asisTab.mallT")))]),t._v(" "),e("div",{staticClass:"condition-item-option",on:{change:t.mallChange}},[e("el-select",{staticClass:"mall-sel-box",attrs:{filterable:"",placeholder:"请选择广场"},model:{value:t.mallVal,callback:function(a){t.mallVal=a},expression:"mallVal"}},t._l(t.mallData,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)])]):t._e(),t._v(" "),t.panelObj.floorPanel?e("ul",{staticClass:"condition-box"},[e("li",{staticClass:"condition-item"},[e("span",{staticClass:"condition-item-text"},[t._v(t._s(t.$t("asisTab.mallT")))]),t._v(" "),e("div",{staticClass:"condition-item-option"},[e("el-select",{staticClass:"mall-sel-box",attrs:{filterable:"",placeholder:"请选择广场"},on:{change:t.mallChange},model:{value:t.mallVal,callback:function(a){t.mallVal=a},expression:"mallVal"}},t._l(t.mallData,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),e("li",{staticClass:"condition-item"},[e("span",{staticClass:"condition-item-text"},[t._v(t._s(t.$t("asisTab.floorT")))]),t._v(" "),e("div",{staticClass:"condition-item-option"},[e("el-select",{staticClass:"floor-sel-box",attrs:{filterable:"",placeholder:t.$t("pholder.floorSelect")},model:{value:t.floorVal,callback:function(a){t.floorVal=a},expression:"floorVal"}},t._l(t.floorData,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)])]):t._e(),t._v(" "),t.panelObj.formatPanel?e("ul",{staticClass:"condition-box"},[e("li",{staticClass:"condition-item"},[e("span",{staticClass:"condition-item-text"},[t._v(t._s(t.$t("asisTab.mallT")))]),t._v(" "),e("div",{staticClass:"condition-item-option"},[e("el-select",{staticClass:"mall-sel-box",attrs:{filterable:"",placeholder:"请选择广场"},model:{value:t.mallVal,callback:function(a){t.mallVal=a},expression:"mallVal"}},t._l(t.mallData,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),e("li",{staticClass:"condition-item"},[e("span",{staticClass:"condition-item-text"},[t._v(t._s(t.$t("asisTab.floorT")))]),t._v(" "),e("div",{staticClass:"condition-item-option"},[e("el-select",{staticClass:"floor-sel-box",attrs:{filterable:"",placeholder:t.$t("pholder.floorSelect")},model:{value:t.floorVal,callback:function(a){t.floorVal=a},expression:"floorVal"}},t._l(t.floorData,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),e("li",{staticClass:"condition-item"},[e("span",{staticClass:"condition-item-text"},[t._v("业态 :")]),t._v(" "),e("div",{staticClass:"condition-item-option"},[e("el-select",{staticClass:"format-sel-box",attrs:{filterable:"",placeholder:"业态"},model:{value:t.formatVal,callback:function(a){t.formatVal=a},expression:"formatVal"}},t._l(t.formatData,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)])]):t._e(),t._v(" "),t.panelObj.ioPanel?e("ul",{staticClass:"condition-box"},[e("li",{staticClass:"condition-item"},[e("span",{staticClass:"condition-item-text"},[t._v(t._s(t.$t("asisTab.mallT")))]),t._v(" "),e("div",{staticClass:"condition-item-option"},[e("el-select",{staticClass:"mall-sel-box",attrs:{filterable:"",placeholder:"请选择广场"},on:{change:t.gateMallChange},model:{value:t.mallVal,callback:function(a){t.mallVal=a},expression:"mallVal"}},t._l(t.mallData,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),e("li",{staticClass:"condition-item gate-level-item"},[e("span",{staticClass:"condition-item-text"},[t._v(t._s(t.$t("asisTab.inOutLev")))]),t._v(" "),e("div",{staticClass:"condition-item-option"},[e("el-select",{staticClass:"floor-sel-box",attrs:{placeholder:t.$t("pholder.gateLevel")},on:{change:t.gateLevelChange},model:{value:t.gateLevel,callback:function(a){t.gateLevel=a},expression:"gateLevel"}},t._l(t.gateLevelList,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),"floor"===t.gateLevel||"zone"===t.gateLevel?e("span",[t._v("-")]):t._e(),t._v(" "),"floor"===t.gateLevel?e("el-select",{staticClass:"floor-sel-box",attrs:{filterable:"",placeholder:t.$t("pholder.floorSelect")},on:{change:t.levelFloorChange},model:{value:t.floorItem,callback:function(a){t.floorItem=a},expression:"floorItem"}},t._l(t.floorList,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})):t._e(),t._v(" "),"zone"===t.gateLevel?e("el-select",{staticClass:"zone-sel-box",attrs:{filterable:"",placeholder:t.$t("pholder.zoneSelect")},on:{change:t.levelZoneChange},model:{value:t.zoneItem,callback:function(a){t.zoneItem=a},expression:"zoneItem"}},t._l(t.zoneList,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})):t._e()],1)]),t._v(" "),e("li",{staticClass:"condition-item"},[e("span",{staticClass:"condition-item-text"},[t._v(t._s(t.$t("asisTab.inOutT")))]),t._v(" "),e("div",{staticClass:"condition-item-option"},[e("el-select",{staticClass:"format-sel-box",attrs:{filterable:"",placeholder:t.$t("pholder.gateType")},model:{value:t.gateVal,callback:function(a){t.gateVal=a},expression:"gateVal"}},t._l(t.gateData,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)])]):t._e(),t._v(" "),t.panelObj.shopPanel?e("ul",{staticClass:"condition-box"},[e("li",{staticClass:"condition-item"},[e("span",{staticClass:"condition-item-text"},[t._v(t._s(t.$t("asisTab.mallT")))]),t._v(" "),e("div",{staticClass:"condition-item-option"},[e("el-select",{staticClass:"mall-sel-box",attrs:{filterable:"",placeholder:"请选择广场"},on:{change:t.mallChange},model:{value:t.mallVal,callback:function(a){t.mallVal=a},expression:"mallVal"}},t._l(t.mallData,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),e("li",{staticClass:"condition-item"},[e("span",{staticClass:"condition-item-text"},[t._v(t._s(t.$t("asisTab.floorT")))]),t._v(" "),e("div",{staticClass:"condition-item-option"},[e("el-select",{staticClass:"floor-sel-box",attrs:{filterable:"",placeholder:t.$t("pholder.floorSelect")},on:{change:t.floorChange},model:{value:t.shopFloorVal,callback:function(a){t.shopFloorVal=a},expression:"shopFloorVal"}},t._l(t.shopFloorData,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),e("li",{staticClass:"condition-item"},[e("span",{staticClass:"condition-item-text"},[t._v(t._s(t.$t("asisTab.storeT")))]),t._v(" "),e("div",{staticClass:"condition-item-option  "},[e("el-select",{staticClass:"shop-sel-box",attrs:{filterable:"",placeholder:t.$t("pholder.zoneSelect")},model:{value:t.zoneVal,callback:function(a){t.zoneVal=a},expression:"zoneVal"}},t._l(t.zoneData,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)])]):t._e()]),t._v(" "),e("div",{staticClass:"panels-main-bottom"},[e("ul",{staticClass:"condition-box"},[e("li",{staticClass:"condition-item"},[e("span",{staticClass:"condition-item-text"},[t._v(t._s(t.$t("asisTab.date")))]),t._v(" "),e("div",{staticClass:"condition-item-option"},[e("el-date-picker",{staticClass:"date-input analysis-date-input",attrs:{"value-format":"yyyy-MM-dd",align:"right",type:"date",size:"mini",placeholder:t.$t("pholder.date"),"picker-options":t.pickerOptions1},model:{value:t.dayTime,callback:function(a){t.dayTime=a},expression:"dayTime"}})],1)]),t._v(" "),e("li",{staticClass:"condition-item"},[e("el-button",{staticClass:"primary-btn analysis-collapse-btn",attrs:{type:"primary",size:"samll"},on:{click:t.confirmCondition}},[t._v(t._s(t.$t("button.confirm")))]),t._v(" "),e("el-button",{staticClass:"reset-btn analysis-collapse-btn",attrs:{size:"samll"},on:{click:t.resetRefresh}},[t._v(t._s(t.$t("button.reset")))])],1)])])])])},staticRenderFns:[]},o=e("VU/8")(l,n,!1,function(t){e("Uwob")},"data-v-46973f5e",null);a.a=o.exports},JSkH:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("g74D"),s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"base-analysis"},[e("el-header",{attrs:{height:"70px"}},[e("span",{staticClass:"asis-title"},[t._v(t._s(t.asisName)+" "+t._s(t.$t("asis.HeatMap")))]),t._v(" "),e("span",{staticClass:"more-option-wrapper",on:{click:t.showCollapse}},[e("span",{staticClass:"more-option-text"},[t._v(t._s(t.$t("asis.moreOp")))]),t._v(" "),e("i",{class:t.moreOptVisible?"el-icon-arrow-down more-option-arrow":"el-icon-arrow-down more-option-arrow more-option-up"})])]),t._v(" "),e("in-heat-option",{directives:[{name:"show",rawName:"v-show",value:t.moreOptVisible,expression:"moreOptVisible"}],ref:"init",attrs:{mallData:t.mallData},on:{reportTime:t.reportHandler,initData:t.initTab}}),t._v(" "),e("div",{staticClass:"element-main area-heat-main"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"area-heat-container"},[e("div",{attrs:{id:"areaHeatmap"}},[e("div",{staticClass:"heat-silder"},[e("el-slider",{attrs:{max:t.sliderMax,min:1,vertical:"",disabled:t.sliderDisabled,height:"200px"},on:{change:function(a){t.slideHandle(t.sliderVal)}},model:{value:t.sliderVal,callback:function(a){t.sliderVal=a},expression:"sliderVal"}})],1),t._v(" "),t._l(t.newImgList,function(a,i){return e("ul",{key:i,staticClass:"inside-bg-box"},t._l(a,function(a,i){return e("li",{key:i,staticClass:"inside-bg-item",style:t.liWidth},[e("img",{staticClass:"area-img",attrs:{onload:t.getDate(),src:a.shotpic},on:{error:function(a){t.dealErrImg(a)}}}),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"item1.loading"}],staticClass:"heatmap-div"},[e("div",{attrs:{id:a.id}})])])}))})],2)])])],1)},staticRenderFns:[]},l=function(t){e("+F2z")},n=e("VU/8")(i.a,s,!1,l,"data-v-4b12f338",null);a.default=n.exports},Uwob:function(t,a){},g74D:function(t,a,e){"use strict";(function(t){var i=e("mvHQ"),s=e.n(i),l=e("16KL"),n=e("PAnj"),o=e.n(n);a.a={data:function(){return{moreOptVisible:!1,mallData:[],asisName:"",emitData:{},loading:!0,heatmapInstance:{},heatmapImg:"",sliderVal:null,sliderDisabled:!0,imgList:[],heatInstance:{},heatDataObj:{},sliderMax:300,defaultDevimg:o.a,divList:[],newImgList:[],count:null,computed:"",countArr:[],liWidth:null}},components:{"in-heat-option":l.a},watch:{count:function(t){var a=this;t==this.imgList.length&&this.imgList.forEach(function(t,e){a.getTableData(t.id,e)})}},created:function(){},computed:{},mounted:function(){this.getGatesFilterMall(),this.showCollapse()},updated:function(){},methods:{computedW:function(){var t=this.imgList.length;return 1==t?"width: 100%":t>1&&t<5?"width: 48.5%;":"width: 32.5%;"},getDate:function(){var t=this.imgList.length;if(this.count<t)return this.count+=1},dealErrImg:function(t){(t||window.event).target.src=o.a},showCollapse:function(){var a=this,e="",i="",s="",l="";e=this.getStyleFn(".el-header","height"),i=this.getStyleFn(".analysis-wrapper .el-header","height"),this.moreOptVisible?(this.moreOptVisible=!1,l=e+i+8+"px",t(".area-heat-main").animate({marginTop:l})):(this.moreOptVisible=!0,setTimeout(function(){s=a.getStyleFn(".analysis-option-wrapper","height"),l=e+i+s+8+"px",t(".area-heat-main").animate({marginTop:l})},100))},getGatesFilterMall:function(){var t=this;this.axios.get("/gates",{params:{accountId:this.$cookie.get("accountId"),status:1,_t:Date.parse(new Date)/1e3}}).then(function(a){var e=a.data.data,i="",s=null,l=[],n=window.sessionStorage.getItem("mallId");n&&Number(n),e.forEach(function(a,e){if(4==a.type){var s={};s.name=a.mall.name,s.id=a.mallId,-1===l.indexOf(s.id)&&(n&&s.id==n&&(i=s.name),t.mallData.push(s),l.push(a.mallId))}}),t.asisName=i||t.mallData[0].name,s=i?Number(n):t.mallData[0].id,t.$refs.init.initAsis(s)}).catch(function(t){})},getMallOpt:function(){var t=this;this.axios.get("/malls",{params:{accountId:this.$cookie.get("accountId"),_t:Date.parse(new Date)/1e3}}).then(function(a){var e="",i=null;if(a.data.data.length>=1){var s=window.sessionStorage.getItem("mallId");s&&Number(s),a.data.data.forEach(function(a,i){t.mallData.push(a),s&&a.id==s&&(e=a.name)}),t.asisName=e||a.data.data[0].name,i=s?Number(s):a.data.data[0].id,t.$refs.init.initAsis(i)}})},getChannel:function(){var t=this;this.count=null,this.countArr=[],this.imgList=[],this.newImgList=[],this.heatInstance={},this.sliderDisabled=!0,this.axios.get("/channels",{params:{mallId:this.emitData.asis_org,type:3,_t:Date.parse(new Date)/1e3}}).then(function(a){if(a.data.data.forEach(function(a,e){t.imgList[e]={id:a.id,channelnum:a.serialnum,shotpic:"/snapshot/real/"+a.serialnum+".jpg?x-oss-process=style/thumbnail-0.1",loading:!0},t.heatInstance[e]={}}),t.liWidth=t.computedW(),t.imgList.length>2&&t.imgList.length<=4)for(var e=Math.ceil(t.imgList.length/2),i=0;i<e;i++){var s=[];if(0==i)for(var l=0;l<2;l++)t.imgList[l]&&s.push(t.imgList[l]);else for(var n=2*i;n<=2*i+2;n++)t.imgList[n]&&s.push(t.imgList[n]);t.newImgList[i]=s}else for(e=Math.ceil(t.imgList.length/3),i=0;i<e;i++){s=[];if(0==i)for(l=0;l<=2;l++)t.imgList[l]&&s.push(t.imgList[l]);else for(n=3*i;n<=3*i+2;n++)t.imgList[n]&&s.push(t.imgList[n]);t.newImgList[i]=s}t.loading=!1}).catch(function(t){console.log(t)})},getTableData:function(t,a){var e=this,i=this.emitData.asis_time+" 09:00:00",s=this.emitData.asis_time+" 22:00:00";this.axios.get("/heatmapDataRaws",{params:{channelSerialnum:this.imgList[a].channelnum,counttime_gte:i,counttime_lte:s,_t:Date.parse(new Date)/1e3}}).then(function(i){var s=i.data;if(e.countArr.push(!0),s.data.length){e.heatDataObj[t]=s.data;var l=e,n=new Image;n.src=l.imgList[a].shotpic,n.onload=function(){var t=l.getStyleFn(".area-img","width"),e=l.getStyleFn(".area-img","height");l.getHeatData(t,e,this.width,this.height,a)},n.onerror=function(){var t=this;setTimeout(function(){var e=l.getStyleFn(".area-img","width"),i=l.getStyleFn(".area-img","height"),s=t.width?t.width:e,n=t.height?t.height:i;l.getHeatData(e,i,s,n,a)},100)}}else e.imgList[a].loading=!1,e.$forceUpdate()}).catch(function(t){e.imgList[a].loading=!1,e.$forceUpdate()})},getHeatData:function(t,a,e,i,l){var n=this.imgList[l].id,o=1;if(this.heatInstance[l]._renderer){var r=document.getElementById(n);if(!r.getContext)return;var c=r.getContext("2d");r.width=t,r.height=a,c.clearRect(0,0,r.width,r.height)}else{var h=document.getElementById(n);h.style.width=t+"px",h.style.height=a+"px",this.heatInstance[l]=this.$heatmapjs.create({container:h})}var m=document.getElementById(n);m.style.width=t+"px",m.style.height=a+"px";var d=[],p={};this.heatDataObj[n]&&this.heatDataObj[n].forEach(function(s){s.score>o&&(o=s.score),p={x:parseInt(s.x*t/e),y:parseInt(s.y*a/i),value:1},d.push(p)});var u={max:isNaN(o)?1:Math.ceil(o/2),data:d};if(this.heatInstance[l].setData(u),this.imgList[l].loading=!1,this.$forceUpdate(),this.countArr.length==this.imgList.length){var f=isNaN(o)?1:Math.ceil(o/2);for(var g in this.heatInstance)"{}"!==s()(this.heatInstance[g])&&this.heatInstance[g].setDataMax(f);if(this.sliderMax=isNaN(o)?1:Math.ceil(o),this.sliderVal=isNaN(o)?1:Math.ceil(o/2),this.sliderMax==this.sliderVal){this.sliderMax=150,this.sliderVal=75;for(var v in this.heatInstance)"{}"!==s()(this.heatInstance[v])&&this.heatInstance[v].setDataMax(this.sliderVal)}this.sliderDisabled=!1}this.loading=!1},slideHandle:function(t){for(var a in this.heatInstance)"{}"!==s()(this.heatInstance[a])&&this.heatInstance[a].setDataMax(t)},initTab:function(t){this.loading=!0,this.asisName=t.asis_tit,this.emitData=t,this.getChannel()},reportHandler:function(t){this.loading=!0,this.asisName=t.asis_tit,this.emitData=t,this.getChannel()}}}}).call(a,e("7t+N"))}});