webpackJsonp([109],{"+T3x":function(e,t,a){"use strict";(function(e){t.a={data:function(){return{blocList:[],mallListForTerm:[],floorListForTerm:[],zoneListForTerm:[],blocValue:"",mallValue:"",floorValue:"",zoneValue:"",isAisle:"",mallGateVal:"",tableHeight:0,tableData:[],total:0,pageSize:10,currentPage:1,mallList:[],levelVal:"",mallItem:"",mallOps:[],floorItem:"",floorOps:[],zoneItem:"",zoneOps:[],gateItem:"",gateOps:[],localIp_like:"",serialnum_like:"",cStatus:"",lang:"",isSup:!1,serialnumList:[],deviceSerialnum:"",date:""}},watch:{},components:{},mounted:function(){},created:function(){this.isSup="super"===this.$cookie.get("user_type");var t=e(window).height();this.tableHeight=t-.24*t,this.getAccountList()},methods:{i18n:function(e){var t="pholder."+e;return"allFloor"==e?this.$t(t):e},bindRow:function(){this.$refs.bindModel.dialogInit()},addDeviceHandle:function(){this.$refs.addeviceModel.dialogInit(this.mallValue)},getTableData:function(){var e=this;this.tableData=[],this.serialnumList=[];var t="/devices/filter",a={accountId:this.$cookie.get("accountId"),mallId:this.mallValue,floorId:this.floorValue?this.floorValue:null,zoneId:this.zoneValue?this.zoneValue:null,isMallGate:this.mallGateVal?this.mallGateVal:null,status:this.cStatus,isAisle:this.isAisle?this.isAisle:null,serialnum_like:"%"+this.serialnum_like+"%",_t:Date.parse(new Date)/1e3};this.mallValue||(t="/devices"),this.axios.get(t,{params:a}).then(function(t){t.data.data.forEach(function(t){var a={};a.id=t.id,a.serialnum=t.serialnum,e.serialnumList.push(a)}),e.deviceSerialnum=e.serialnumList[0].serialnum,e.getCountData()}).catch(function(e){})},getCountData:function(){var e=this;this.axios.get("/countDatas",{params:{page:this.currentPage,pageSize:this.pageSize,deviceSerialnum:this.deviceSerialnum,countdate:this.date}}).then(function(t){var a=t.data;a.data.list.forEach(function(t,a){t.tabOrder=(e.currentPage-1)*e.pageSize+a+1}),e.tableData=a.data.list,e.total=a.data.total,console.log(e.tableData)}).catch(function(e){})},sizeChange:function(e){this.pageSize=e,this.getCountData()},cerrentChange:function(e){this.currentPage!=e&&(this.currentPage=e,this.getCountData())},statusFormatter:function(e,t,a){return 1==a?"在线":"离线"},searchFun:function(){this.currentPage=1,this.getTableData()},getAccountList:function(){var e=this;this.blocList=[],this.blocValue="",this.axios.get("/accounts",{params:{_t:Date.parse(new Date)/1e3}}).then(function(t){var a=t.data;a.data.forEach(function(t,a,l){t.id==e.$cookie.get("accountId")&&(e.blocValue=t.id)}),e.blocList=a.data,e.getMallListForTerm(e.blocValue)}).catch(function(e){})},blocChange:function(){this.getMallListForTerm(this.blocValue)},mallChange:function(){this.setSessionLocal("manageMallId",this.mallValue),this.getFloorListForTerm(this.mallValue)},floorChange:function(){this.getZoneListForTerm(this.mallValue,this.floorValue)},getMallListForTerm:function(e){var t=this;this.mallListForTerm=[],this.mallValue="",this.axios.get("/malls",{params:{accountId:e,_t:Date.parse(new Date)/1e3}}).then(function(e){var a=e.data;a.data.length&&(t.getSessionLocal("manageMallId")||t.setSessionLocal("manageMallId",t.mallValue),t.getFloorListForTerm(t.mallValue),t.mallListForTerm=a.data),t.getTableData()}).catch(function(e){})},getFloorListForTerm:function(e){var t=this;this.floorValue="",this.floorListForTerm=[],this.axios.get("/floors",{params:{mallId:e,_t:Date.parse(new Date)/1e3}}).then(function(a){var l=a.data;l.data.length>0?(l.data.unshift({id:"",name:t.$t("pholder.allFloor")}),t.floorValue=l.data[0].id,t.getZoneListForTerm(e,t.floorValue),t.floorListForTerm=l.data):t.getZoneListForTerm(e)}).catch(function(e){})},getZoneListForTerm:function(e,t){var a=this;this.zoneValue="",this.zoneListForTerm=[],this.axios.get("/zones",{params:{mallId:e,floorId:t||null,sortName:'"floor".name, "zone".name',_t:Date.parse(new Date)/1e3}}).then(function(e){var t=e.data;t.data.length>0&&t.data.unshift({id:"",name:"全部区域"}),a.zoneListForTerm=t.data,a.floorListForTerm.forEach(function(e){0==index&&(a.zoneValue=e.id)})}).catch(function(e){})}}}}).call(t,a("7t+N"))},hK9x:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("+T3x"),s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manage-container deviceStatus-wrapper"},[a("el-row",{staticClass:"manage-head-wrapper"},[a("el-col",{attrs:{span:24,sm:24}},[a("div",{staticClass:"manage-select-box"},[a("el-select",{attrs:{filterable:"",placeholder:e.$t("pholder.shop")},on:{change:e.mallChange},model:{value:e.mallValue,callback:function(t){e.mallValue=t},expression:"mallValue"}},[a("el-option",{attrs:{label:e.$t("asisTab.all"),value:""}}),e._v(" "),e._l(e.mallListForTerm,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})],2)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"mall"==e.$Project,expression:"$Project == 'mall' ? true : false"}],staticClass:"manage-select-box"},[a("el-select",{attrs:{filterable:"",placeholder:e.$t("pholder.floor")},on:{change:e.floorChange},model:{value:e.floorValue,callback:function(t){e.floorValue=t},expression:"floorValue"}},e._l(e.floorListForTerm,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"mall"==e.$Project,expression:"$Project == 'mall' ? true : false"}],staticClass:"manage-select-box"},[a("el-select",{attrs:{filterable:"",placeholder:e.$t("pholder.area")},model:{value:e.zoneValue,callback:function(t){e.zoneValue=t},expression:"zoneValue"}},e._l(e.zoneListForTerm,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("div",{staticClass:"manage-select-box"},[a("el-select",{staticClass:"mall-gate-sel",attrs:{placeholder:e.$t("asisTab.inOut")},model:{value:e.isAisle,callback:function(t){e.isAisle=t},expression:"isAisle"}},[a("el-option",{attrs:{label:e.$t("pholder.all"),value:""}}),e._v(" "),a("el-option",{attrs:{label:e.$t("pholder.inOut"),value:"true"}}),e._v(" "),a("el-option",{attrs:{label:e.$t("pholder.Nonentry"),value:"false"}})],1)],1),e._v(" "),a("div",{staticClass:"manage-select-box device-inp-box"},[a("el-select",{staticClass:"manage-sel level-status-sel",attrs:{placeholder:e.$t("pholder.state")},model:{value:e.cStatus,callback:function(t){e.cStatus=t},expression:"cStatus"}},[a("el-option",{attrs:{label:e.$t("pholder.allstate"),value:""}}),e._v(" "),a("el-option",{attrs:{label:e.$t("pholder.stateA"),value:1}}),e._v(" "),a("el-option",{attrs:{label:e.$t("pholder.stateB"),value:0}})],1)],1),e._v(" "),a("div",{staticClass:"manage-select-box"},[a("el-button",{staticClass:"search-btn",attrs:{type:"primary",plain:"",size:"mini"},on:{click:e.searchFun}},[e._v(e._s(e.$t("button.deviceSearch")))])],1),e._v(" "),a("div",{staticClass:"manage-select-box device-select"},[a("el-select",{attrs:{filterable:"",placeholder:e.$t("pholder.deviceNumber")},on:{change:function(t){e.getCountData()}},model:{value:e.deviceSerialnum,callback:function(t){e.deviceSerialnum=t},expression:"deviceSerialnum"}},e._l(e.serialnumList,function(e){return a("el-option",{key:e.id,attrs:{label:e.serialnum,value:e.serialnum}})}))],1),e._v(" "),a("div",{staticClass:"manage-select-box"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:e.$t("pholder.date")},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),a("el-button",{staticClass:"search-btn",attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(t){e.getCountData()}}},[e._v(e._s(e.$t("button.search")))])],1)],1),e._v(" "),a("el-row",{staticClass:"manage-content"},[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"max-height":e.tableHeight,"header-row-class-name":"manage-tab-head"}},[a("el-table-column",{attrs:{prop:"tabOrder",align:"center",label:e.$t("table.order"),width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"deviceSerialnum",label:e.$t("table.deviceNum"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"innum",label:e.$t("format.INNUM"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"outnum",label:e.$t("format.OUTNUM"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"counttime",label:e.$t("table.time"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.state"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{class:t.row.status?"online-column":"offline-column"},[e._v(e._s(t.row.status?e.$t("pholder.stateA"):e.$t("pholder.stateB")))])]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"manage-pagination-box",attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":e.pageSize,layout:"sizes, prev, pager, next, slot",total:e.total},on:{"size-change":e.sizeChange,"current-change":e.cerrentChange}},[a("span",{staticClass:"slot-pagination-ele slot-ele-total"},[e._v(e._s(e.$t("table.pageHead"))+" "+e._s(e.total)+" "+e._s(e.$t("table.pageTail")))])])],1)],1)],1)},staticRenderFns:[]},i=function(e){a("mTNC")},o=a("VU/8")(l.a,s,!1,i,"data-v-55c3af9b",null);t.default=o.exports},mTNC:function(e,t){}});