webpackJsonp([14],{"/fXB":function(e,t){},"0Ub8":function(e,t,a){"use strict";var l={data:function(){return{addDialogVisible:!1,accountList:[],mallList:[],addForm:{serialnum:"",name:"",channelCount:"",mac:"",status:null,localIp:"",wanIp:"",software:"",hardware:"",accountId:"",mallId:""},rules:{serialnum:[{required:!0,message:"请输入设备序列号",trigger:"blur"}],accountId:[{required:!0,message:"请选择集团",trigger:"change"}],mallId:[{required:!0,message:"请选择门店",trigger:"change"}]},curMallId:null}},created:function(){},methods:{dialogInit:function(e){this.curMallId=e,this.addDialogVisible=!0},dialogOpen:function(e){this.getAccountList()},getAccountList:function(){var e=this;this.accountList=[],this.axios.get("/accounts",{params:{_t:Date.parse(new Date)/1e3}}).then(function(t){var a=t.data;a.data.forEach(function(t){t.id==e.$cookie.get("accountId")&&(e.addForm.accountId=t.id)}),e.accountList=a.data,e.getMallList(e.addForm.accountId)}).catch(function(e){})},changeAddAccount:function(e){this.getMallList(e)},getMallList:function(e){var t=this;this.mallList=[],this.addForm.mallId="",e&&this.axios.get("/malls",{params:{accountId:e,_t:Date.parse(new Date)/1e3}}).then(function(e){var a=e.data;a.data.forEach(function(e){e.id==t.curMallId&&(t.addForm.mallId=e.id)}),t.mallList=a.data,t.mallList.length>0&&(t.curMallId||(t.addForm.mallId=t.mallList[0].id))}).catch(function(e){})},addSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.addForm.createUser=t.$cookie.get("userId"),t.addForm.modifyUser=t.$cookie.get("userId"),t.axios.post("/devices",t.addForm).then(function(e){t.addDialogVisible=!1,t.$parent.getTableData()}).catch(function(e){})})},addDialogClose:function(){this.$refs.addForm.resetFields()}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"manage-dialog",attrs:{title:e.$t("dialog.addDevice"),visible:e.addDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addDialogVisible=t},open:function(t){e.dialogOpen(e.addForm)},close:e.addDialogClose}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,"status-icon":"",rules:e.rules}},[a("el-form-item",{attrs:{label:e.$t("dialog.number"),prop:"serialnum"}},[a("el-input",{model:{value:e.addForm.serialnum,callback:function(t){e.$set(e.addForm,"serialnum",t)},expression:"addForm.serialnum"}}),e._v(" "),a("i",{staticClass:"error-tip"},[e._v("*")])],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("dialog.deviceName"),prop:"name"}},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.channelNum"),prop:"channelCount"}},[a("el-input",{model:{value:e.addForm.channelCount,callback:function(t){e.$set(e.addForm,"channelCount",t)},expression:"addForm.channelCount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("dialog.Mac"),prop:"mac"}},[a("el-input",{model:{value:e.addForm.mac,callback:function(t){e.$set(e.addForm,"mac",t)},expression:"addForm.mac"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.state"),prop:"status"}},[a("el-select",{staticClass:"manage-sel",attrs:{placeholder:e.$t("pholder.state")},model:{value:e.addForm.status,callback:function(t){e.$set(e.addForm,"status",t)},expression:"addForm.status"}},[a("el-option",{attrs:{label:e.$t("pholder.stateA"),value:1}}),e._v(" "),a("el-option",{attrs:{label:e.$t("pholder.stateB"),value:0}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.localIP"),prop:"localIp"}},[a("el-input",{model:{value:e.addForm.localIp,callback:function(t){e.$set(e.addForm,"localIp",t)},expression:"addForm.localIp"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.extranet"),prop:"wanIp"}},[a("el-input",{model:{value:e.addForm.wanIp,callback:function(t){e.$set(e.addForm,"wanIp",t)},expression:"addForm.wanIp"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("dialog.swVersion"),prop:"software"}},[a("el-input",{model:{value:e.addForm.software,callback:function(t){e.$set(e.addForm,"software",t)},expression:"addForm.software"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("dialog.hwVersion"),prop:"hardware"}},[a("el-input",{model:{value:e.addForm.hardware,callback:function(t){e.$set(e.addForm,"hardware",t)},expression:"addForm.hardware"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.bloc"),prop:"accountId"}},[a("el-select",{staticClass:"manage-sel",attrs:{filterable:"",placeholder:e.$t("pholder.select"),"no-data-text":e.$t("pholder.nodata")},on:{change:e.changeAddAccount},model:{value:e.addForm.accountId,callback:function(t){e.$set(e.addForm,"accountId",t)},expression:"addForm.accountId"}},e._l(e.accountList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("i",{staticClass:"error-tip"},[e._v("*")])],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.square"),prop:"mallId"}},[a("el-select",{staticClass:"manage-sel",attrs:{filterable:"",placeholder:e.$t("pholder.select"),"no-data-text":e.$t("pholder.nodata")},model:{value:e.addForm.mallId,callback:function(t){e.$set(e.addForm,"mallId",t)},expression:"addForm.mallId"}},e._l(e.mallList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("i",{staticClass:"error-tip"},[e._v("*")])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"dialog-btn",on:{click:function(t){e.addDialogVisible=!1}}},[e._v(e._s(e.$t("dialog.cancel")))]),e._v(" "),a("el-button",{staticClass:"dialog-btn dialog-confirm-btn",attrs:{type:"primary"},on:{click:function(t){e.addSubmit("addForm")}}},[e._v(e._s(e.$t("dialog.confirm")))])],1)],1)},staticRenderFns:[]},s=a("VU/8")(l,i,!1,null,null,null);t.a=s.exports},CLk3:function(e,t,a){"use strict";(function(e){var l=a("mvHQ"),i=a.n(l),s=a("0Ub8"),o=a("wi84"),n=a("sKek"),r=a("dzeu");t.a={data:function(){return{blocList:[],mallListForTerm:[],floorListForTerm:[],zoneListForTerm:[],blocValue:"",mallValue:"",floorValue:"",zoneValue:"",isAisle:"",mallGateVal:"",tableHeight:0,tableData:[],total:0,pageSize:10,currentPage:1,mallList:[],levelVal:"",mallItem:"",mallOps:[],floorItem:"",floorOps:[],zoneItem:"",zoneOps:[],gateItem:"",gateOps:[],localIp_like:"",serialnum_like:"",cStatus:1,lang:"",isSup:!1}},watch:{},components:{"add-device-dialog":s.a,"edit-device-dialog":o.a,"detail-device-dialog":n.a,"bind-device-dialog":r.a},mounted:function(){},created:function(){this.isSup="super"===this.$cookie.get("user_type");var t=e(window).height();this.tableHeight=t-.24*t,this.getAccountList()},methods:{i18n:function(e){var t="pholder."+e;return"allFloor"==e?this.$t(t):e},bindRow:function(){this.$refs.bindModel.dialogInit()},addDeviceHandle:function(){this.$refs.addeviceModel.dialogInit(this.mallValue)},getTableData:function(){var e=this;this.tableData=[];var t="/devices/filter",a={accountId:this.$cookie.get("accountId"),mallId:this.mallValue,floorId:this.floorValue?this.floorValue:null,zoneId:this.zoneValue?this.zoneValue:null,isMallGate:this.mallGateVal?this.mallGateVal:null,status:this.cStatus,isAisle:this.isAisle?this.isAisle:null,localIp_like:"%"+this.localIp_like+"%",serialnum_like:"%"+this.serialnum_like+"%",page:this.currentPage,pageSize:this.pageSize,sortName:"sort_ip",sortOrder:"ASC",_t:Date.parse(new Date)/1e3};this.mallValue||(t="/devices"),this.axios.get(t,{params:a}).then(function(t){var a=t.data;a.data.list.forEach(function(t,a){t.tabOrder=(e.currentPage-1)*e.pageSize+a+1}),e.tableData=a.data.list,e.total=a.data.total}).catch(function(e){})},sizeChange:function(e){this.pageSize=e,this.getTableData()},cerrentChange:function(e){this.currentPage!=e&&(this.currentPage=e,this.getTableData())},statusFormatter:function(e){return 1==e?this.$t("pholder.stateA"):3==e?this.$t("table.stateB"):this.$t("pholder.stateB")},searchFun:function(){this.currentPage=1,this.getTableData()},getAccountList:function(){var e=this;this.blocList=[],this.blocValue="",this.axios.get("/accounts",{params:{_t:Date.parse(new Date)/1e3}}).then(function(t){var a=t.data;a.data.forEach(function(t,a,l){t.id==e.$cookie.get("accountId")&&(e.blocValue=t.id)}),e.blocList=a.data,e.getMallListForTerm(e.blocValue)}).catch(function(e){})},blocChange:function(){this.getMallListForTerm(this.blocValue)},mallChange:function(){this.setSessionLocal("manageMallId",this.mallValue),this.getFloorListForTerm(this.mallValue)},floorChange:function(){this.getZoneListForTerm(this.mallValue,this.floorValue)},getMallListForTerm:function(e){var t=this;this.mallListForTerm=[],this.mallValue="",this.axios.get("/malls",{params:{accountId:e,_t:Date.parse(new Date)/1e3}}).then(function(e){var a=e.data;a.data.length&&(t.getSessionLocal("manageMallId")?t.mallValue=Number(t.getSessionLocal("manageMallId")):(t.mallValue=a.data[0].id,t.setSessionLocal("manageMallId",t.mallValue)),t.getFloorListForTerm(t.mallValue),t.mallListForTerm=a.data),t.getTableData()}).catch(function(e){})},getFloorListForTerm:function(e){var t=this;this.floorValue="",this.floorListForTerm=[],this.axios.get("/floors",{params:{mallId:e,_t:Date.parse(new Date)/1e3}}).then(function(a){var l=a.data;l.data.length>0?(l.data.unshift({id:"",name:t.$t("pholder.allFloor")}),t.floorValue=l.data[0].id,t.getZoneListForTerm(e,t.floorValue),t.floorListForTerm=l.data):t.getZoneListForTerm(e)}).catch(function(e){})},getZoneListForTerm:function(e,t){var a=this;this.zoneValue="",this.zoneListForTerm=[],this.axios.get("/zones",{params:{mallId:e,floorId:t||null,sortName:'"floor".name, "zone".name',_t:Date.parse(new Date)/1e3}}).then(function(e){var t=e.data;t.data.length>0&&t.data.unshift({id:"",name:"全部区域"}),a.zoneListForTerm=t.data,a.floorListForTerm.forEach(function(e){0==index&&(a.zoneValue=e.id)})}).catch(function(e){})},editRow:function(e){var t=JSON.parse(i()(e));this.$refs.editdeviceModel.dialogInit(t)},detailRow:function(e){var t=JSON.parse(i()(e));this.$refs.detailModel.dialogInit(t)},deviceDisable:function(e){var t=this;3!==e.status&&this.axios.post("/devices/"+e.id,{status:3}).then(function(e){t.getTableData(),t.$message({showClose:!0,type:"success",message:t.$t("message.disableSuccess")})}).catch(function(e){t.$message({showClose:!0,type:"error",message:t.$t("message.disableFailed")})})}}}}).call(t,a("7t+N"))},KRov:function(e,t){},dzeu:function(e,t,a){"use strict";var l={data:function(){return{bindVisible:!1,belongMallVal:"",belongMallList:[],devSerialnum:"",devList:[],bindDisable:!1,noDataText:this.$t("echartsTitle.noData"),checkedDev:[]}},methods:{dialogInit:function(){if(this.getDevMallList(),"mall"==this.$Project){var e={IpOrSerialnum:this.devSerialnum?this.devSerialnum:null,mallId_null:!0,_t:Date.parse(new Date)/1e3};this.getAllUnbindDev(e)}this.bindVisible=!0},getDevMallList:function(){var e=this;this.belongMallList=[],this.belongMallVal="",this.axios.get("/malls",{params:{accountId:this.$cookie.get("accountId"),_t:Date.parse(new Date)/1e3}}).then(function(t){var a=t.data;a.data.length,a.data.forEach(function(e,t){}),e.belongMallList=a.data}).catch(function(e){})},searchFn:function(){this.getAllUnbindDev()},getAllUnbindDev:function(){var e=this;if("store"==this.$Project&&!this.devSerialnum)return this.$message({type:"warning",message:this.$t("message.ipOrNumber")});this.devList=[],this.noDataText="load";var t={};t="store"==this.$Project?{sortName:"local_ip",sortOrder:"DESC",IpOrSerialnum:this.devSerialnum?this.devSerialnum:null,mallId_null:!0,_t:Date.parse(new Date)/1e3}:{IpOrSerialnum:this.devSerialnum?"%"+this.devSerialnum+"%":null,mallId_null:!0,_t:Date.parse(new Date)/1e3},this.axios.get("/devices/getDevices/mall",{params:t}).then(function(t){var a=t.data;a.data.list.length<=0&&(e.noDataText=e.$t("echartsTitle.noData")),e.devList=a.data.list})},handleSelectionChange:function(e){this.checkedDev=e.map(function(e){return e.id})},bindDev:function(){var e=this;0!=this.checkedDev.length&&(this.belongMallVal?(this.bindDisable=!0,this.axios.post("/devices/batchBind",{mallId:this.belongMallVal,deviceIds:this.checkedDev}).then(function(t){var a=t.data;200==a.code?(e.bindDisable=!1,e.$message({showClose:!0,type:"success",message:e.$t("message.bindDevice")}),e.$parent.getTableData()):(e.$message({showClose:!0,type:"error",message:e.$t("message.deviceFailed")+a.msg}),e.bindDisable=!1)}).catch(function(t){e.$message({showClose:!0,type:"error",message:e.$t("message.deviceFailed")+t.message}),e.bindDisable=!1})):this.$message({showClose:!0,type:"warning",message:this.$t("message.selectMall")}))},bindDialogClose:function(){this.devSerialnum="",this.devList=[]}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"manage-dialog bind-middle-dialog",attrs:{title:e.$t("dialog.deviceBind"),visible:e.bindVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.bindVisible=t},close:e.bindDialogClose}},[a("div",{staticClass:"mall-sel-box"},[a("el-select",{staticClass:"belong-mall-sel",attrs:{placeholder:e.$t("pholder.select")+e.$t("table.square")},model:{value:e.belongMallVal,callback:function(t){e.belongMallVal=t},expression:"belongMallVal"}},e._l(e.belongMallList,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-row",{staticClass:"search-box"},[a("el-col",{attrs:{span:20}},[a("el-input",{staticClass:"search-inp",attrs:{size:"mini",placeholder:e.$t("pholder.deviceNumber")+"/IP",clearable:""},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchFn(t)}},model:{value:e.devSerialnum,callback:function(t){e.devSerialnum=t},expression:"devSerialnum"}})],1),e._v(" "),a("el-col",{attrs:{span:3,offset:1}},[a("el-button",{staticClass:"search-btn",attrs:{type:"primary",plain:"",size:"mini"},on:{click:e.searchFn}},[e._v(e._s(e.$t("button.search")))])],1)],1),e._v(" "),a("el-table",{staticClass:"dev-table",staticStyle:{width:"100%"},attrs:{data:e.devList,height:"400","empty-text":e.noDataText},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{label:"IP",prop:"localIp",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.deviceNum"),prop:"serialnum",align:"center"}})],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"dialog-btn dialog-confirm-btn",attrs:{type:"primary",disabled:e.bindDisable},on:{click:e.bindDev}},[e._v(e._s(e.$t("button.binding")))])],1)],1)},staticRenderFns:[]},s=a("VU/8")(l,i,!1,function(e){a("ooEs")},"data-v-70a03131",null);t.a=s.exports},lWVH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("CLk3"),i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manage-container deviceStatus-wrapper"},[a("el-row",{staticClass:"manage-head-wrapper"},[a("el-col",{attrs:{span:20,sm:19}},[a("div",{staticClass:"manage-select-box"},[a("el-select",{attrs:{filterable:"",placeholder:e.$t("pholder.shop")},on:{change:e.mallChange},model:{value:e.mallValue,callback:function(t){e.mallValue=t},expression:"mallValue"}},[a("el-option",{attrs:{label:e.$t("asisTab.all"),value:""}}),e._v(" "),e._l(e.mallListForTerm,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})],2)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"mall"==e.$Project,expression:"$Project == 'mall' ? true : false"}],staticClass:"manage-select-box"},[a("el-select",{attrs:{filterable:"",placeholder:e.$t("pholder.floor")},on:{change:e.floorChange},model:{value:e.floorValue,callback:function(t){e.floorValue=t},expression:"floorValue"}},e._l(e.floorListForTerm,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"mall"==e.$Project,expression:"$Project == 'mall' ? true : false"}],staticClass:"manage-select-box"},[a("el-select",{attrs:{filterable:"",placeholder:e.$t("pholder.area")},model:{value:e.zoneValue,callback:function(t){e.zoneValue=t},expression:"zoneValue"}},e._l(e.zoneListForTerm,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("div",{staticClass:"manage-select-box"},[a("el-select",{staticClass:"mall-gate-sel",attrs:{placeholder:e.$t("asisTab.inOut")},model:{value:e.isAisle,callback:function(t){e.isAisle=t},expression:"isAisle"}},[a("el-option",{attrs:{label:e.$t("pholder.all"),value:""}}),e._v(" "),a("el-option",{attrs:{label:e.$t("pholder.inOut"),value:"true"}}),e._v(" "),a("el-option",{attrs:{label:e.$t("pholder.Nonentry"),value:"false"}})],1)],1),e._v(" "),a("div",{staticClass:"manage-input-box"},[a("el-input",{staticClass:"search-inp",attrs:{placeholder:e.$t("pholder.ip"),clearable:""},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchFun(t)}},model:{value:e.localIp_like,callback:function(t){e.localIp_like=t},expression:"localIp_like"}})],1),e._v(" "),a("div",{staticClass:"manage-input-box"},[a("el-input",{staticClass:"search-inp",attrs:{size:"mini",placeholder:e.$t("pholder.deviceNumber"),clearable:""},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchFun(t)}},model:{value:e.serialnum_like,callback:function(t){e.serialnum_like=t},expression:"serialnum_like"}})],1),e._v(" "),a("div",{staticClass:"manage-select-box device-inp-box"},[a("el-select",{staticClass:"manage-sel",attrs:{placeholder:e.$t("pholder.state")},model:{value:e.cStatus,callback:function(t){e.cStatus=t},expression:"cStatus"}},[a("el-option",{attrs:{label:e.$t("pholder.allstate"),value:""}}),e._v(" "),a("el-option",{attrs:{label:e.$t("pholder.stateA"),value:1}}),e._v(" "),a("el-option",{attrs:{label:e.$t("pholder.stateB"),value:0}})],1)],1),e._v(" "),a("el-button",{staticClass:"search-btn",attrs:{type:"primary",plain:"",size:"mini"},on:{click:e.searchFun}},[e._v(e._s(e.$t("button.search")))])],1),e._v(" "),a("el-col",{attrs:{span:4,sm:5}},[a("div",{staticClass:"btn-box"},[a("el-button",{staticClass:"manage-add-btn fl-btn",attrs:{type:"primary",size:"mini",icon:"el-icon-circle-plus-outline"},on:{click:e.bindRow}},[e._v(e._s(e.$t("button.deviceBind")))]),e._v(" "),a("el-button",{staticClass:"manage-add-btn fl-btn",attrs:{type:"primary",size:"mini",disabled:"",icon:"el-icon-circle-plus-outline"},on:{click:e.addDeviceHandle}},[e._v(e._s(e.$t("button.addDevice")))])],1)])],1),e._v(" "),a("el-row",{staticClass:"manage-content"},[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"max-height":e.tableHeight,"header-row-class-name":"manage-tab-head"}},[a("el-table-column",{attrs:{prop:"tabOrder",align:"center",label:e.$t("table.order"),width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.localIP"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{staticClass:"iplink-column",attrs:{href:t.row.localIp?"http://"+t.row.localIp+":8080":"javascript:;",target:"_blank"}},[e._v(e._s(t.row.localIp))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"serialnum",label:e.$t("table.deviceNum"),align:"center",width:"220"}}),e._v(" "),a("el-table-column",{attrs:{prop:"channelCount",label:e.$t("table.channelNum"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.state"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{class:1==t.row.status?"online-column":"offline-column"},[e._v(e._s(e.statusFormatter(t.row.status)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"wanIp",label:e.$t("table.extranet"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mall.name",label:e.$t("table.square"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.operate"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"tab-btn",attrs:{type:"text",size:"small"},on:{click:function(a){e.editRow(t.row)}}},[e._v(e._s(e.$t("button.edit")))]),e._v(" "),a("el-button",{staticClass:"tab-btn",attrs:{type:"text",size:"small"},on:{click:function(a){e.detailRow(t.row)}}},[e._v(e._s(e.$t("button.details")))]),e._v(" "),a("el-button",{staticClass:"tab-btn",attrs:{type:"text",size:"small"},on:{click:function(a){e.deviceDisable(t.row)}}},[e._v(e._s(e.$t("button.disable")))])]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"manage-pagination-box",attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":e.pageSize,layout:"sizes, prev, pager, next, slot",total:e.total},on:{"size-change":e.sizeChange,"current-change":e.cerrentChange}},[a("span",{staticClass:"slot-pagination-ele slot-ele-total"},[e._v(e._s(e.$t("table.pageHead"))+" "+e._s(e.total)+" "+e._s(e.$t("table.pageTail")))])])],1)],1),e._v(" "),a("add-device-dialog",{ref:"addeviceModel"}),e._v(" "),a("edit-device-dialog",{ref:"editdeviceModel"}),e._v(" "),a("detail-device-dialog",{ref:"detailModel"}),e._v(" "),a("bind-device-dialog",{ref:"bindModel"})],1)},staticRenderFns:[]},s=function(e){a("KRov")},o=a("VU/8")(l.a,i,!1,s,"data-v-558b827e",null);t.default=o.exports},ooEs:function(e,t){},sKek:function(e,t,a){"use strict";var l={data:function(){return{detailVisible:!1,detailForm:{serialnum:"",localIp:""},detailTabData:[]}},methods:{dialogInit:function(e){this.getChannel(e.id),this.detailVisible=!0},getChannel:function(e){var t=this;this.detailTabData=[],this.axios.get("/channels",{params:{deviceId:e,_t:Date.parse(new Date)/1e3}}).then(function(e){var a=e.data;a.data.forEach(function(e,a){e.tableOrder=++a,e.gateName=e.gate?e.gate.name:"--",e.gateId?(e.belongsName="",t.getChannelInfo(e.id,a-1)):e.belongsName="--"}),t.detailTabData=a.data}).catch(function(e){})},getChannelInfo:function(e,t){var a=this;this.axios.get("/channels/"+e,{params:{_t:Date.parse(new Date)/1e3}}).then(function(e){var l=e.data;l.data.gate&&(l.data.zones.length>0?a.detailTabData[t].belongsName=l.data.zones.map(function(e){return e.name}).join(","):l.data.floors.length>0?a.detailTabData[t].belongsName=l.data.floors.map(function(e){return e.name}).join(","):a.detailTabData[t].belongsName="--")}).catch(function(e){})},detailDialogClose:function(){this.detailForm={},this.detailTabData=[]}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"manage-dialog dev-detail-dialog",attrs:{visible:e.detailVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.detailVisible=t},close:e.detailDialogClose}},[a("div",{staticClass:"detail-title-wrapper",attrs:{slot:"title"},slot:"title"},[a("span",[e._v(e._s(e.$t("dialog.deviceDetail")))]),e._v(" "),a("span",{staticClass:"detail-title"},[e._v(e._s(e.detailForm.serialnum))]),e._v(" "),a("span",{staticClass:"detail-title"},[e._v(e._s(e.detailForm.localIp))])]),e._v(" "),a("el-table",{staticClass:"dev-detail-table",attrs:{data:e.detailTabData}},[a("el-table-column",{attrs:{align:"center",width:"100",label:e.$t("table.order")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"child-order-column"},[a("div",{staticClass:"child-order__icon-inner"},[e._v("\n                        "+e._s(t.row.tableOrder)+"\n                    ")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"serialnum",label:e.$t("dialog.number"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gateName",label:e.$t("table.monitorSiteName"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"belongsName",label:e.$t("table.ownShop"),align:"center"}})],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"dialog-btn",on:{click:function(t){e.detailVisible=!1}}},[e._v(e._s(e.$t("dialog.close")))])],1)],1)},staticRenderFns:[]},s=a("VU/8")(l,i,!1,function(e){a("/fXB")},"data-v-8541352e",null);t.a=s.exports},wi84:function(e,t,a){"use strict";var l={data:function(){return{editDialogVisible:!1,accountList:[],mallList:[],editForm:{serialnum:"",name:"",channelCount:"",mac:"",status:null,localIp:"",wanIp:"",software:"",hardware:"",accountId:"",mallId:""},rowId:"",isSup:!1}},created:function(){this.isSup="super"===this.$cookie.get("user_type")},methods:{dialogInit:function(e){this.rowId=e.id;for(var t in this.editForm)this.editForm[t]=e[t];this.editChangeGetMall(e.accountId),this.editDialogVisible=!0},editDialogOpen:function(){this.getAccountList()},getAccountList:function(){var e=this;this.accountList=[],this.axios.get("/accounts",{params:{_t:Date.parse(new Date)/1e3}}).then(function(t){var a=t.data;e.accountList=a.data}).catch(function(e){})},changeEditAccount:function(e){this.editChangeGetMall(e)},editChangeGetMall:function(e){var t=this;this.mallList=[],this.editForm.mallId="",this.axios.get("/malls",{params:{accountId:e,_t:Date.parse(new Date)/1e3}}).then(function(e){var a=e.data;t.mallList=a.data,t.mallList.length>0&&(t.editForm.mallId=t.mallList[0].id)}).catch(function(e){})},editSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.axios.post("/devices/"+t.rowId,t.editForm).then(function(e){t.editDialogVisible=!1,t.$parent.getTableData()}).catch(function(e){})})},editDialogClose:function(){this.$refs.editForm.resetFields()}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"manage-dialog",attrs:{title:e.$t("dialog.editDevice"),visible:e.editDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editDialogVisible=t},open:e.editDialogOpen,close:e.editDialogClose}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm}},[a("el-form-item",{attrs:{label:e.$t("dialog.number"),prop:"serialnum"}},[a("el-input",{attrs:{disabled:""},model:{value:e.editForm.serialnum,callback:function(t){e.$set(e.editForm,"serialnum",t)},expression:"editForm.serialnum"}}),e._v(" "),a("i",{staticClass:"error-tip"},[e._v("*")])],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("dialog.deviceName"),prop:"name"}},[a("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.channelNum"),prop:"channelCount"}},[a("el-input",{attrs:{disabled:""},model:{value:e.editForm.channelCount,callback:function(t){e.$set(e.editForm,"channelCount",t)},expression:"editForm.channelCount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("dialog.Mac"),prop:"mac"}},[a("el-input",{attrs:{disabled:""},model:{value:e.editForm.mac,callback:function(t){e.$set(e.editForm,"mac",t)},expression:"editForm.mac"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.state"),prop:"status"}},[a("el-select",{staticClass:"manage-sel",attrs:{disabled:"",placeholder:e.$t("pholder.state")},model:{value:e.editForm.status,callback:function(t){e.$set(e.editForm,"status",t)},expression:"editForm.status"}},[a("el-option",{attrs:{label:e.$t("pholder.stateA"),value:1}}),e._v(" "),a("el-option",{attrs:{label:e.$t("pholder.stateB"),value:0}}),e._v(" "),a("el-option",{attrs:{label:e.$t("table.stateB"),value:3}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.localIP"),prop:"localIp"}},[a("el-input",{attrs:{disabled:""},model:{value:e.editForm.localIp,callback:function(t){e.$set(e.editForm,"localIp",t)},expression:"editForm.localIp"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.extranet"),prop:"wanIp"}},[a("el-input",{attrs:{disabled:""},model:{value:e.editForm.wanIp,callback:function(t){e.$set(e.editForm,"wanIp",t)},expression:"editForm.wanIp"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("dialog.swVersion"),prop:"software"}},[a("el-input",{attrs:{disabled:""},model:{value:e.editForm.software,callback:function(t){e.$set(e.editForm,"software",t)},expression:"editForm.software"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("dialog.hwVersion"),prop:"hardware"}},[a("el-input",{attrs:{disabled:""},model:{value:e.editForm.hardware,callback:function(t){e.$set(e.editForm,"hardware",t)},expression:"editForm.hardware"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.bloc"),prop:"accountId"}},[a("el-select",{staticClass:"manage-sel",attrs:{filterable:"",placeholder:e.$t("pholder.select"),"no-data-text":e.$t("pholder.nodata"),disabled:!e.isSup},on:{change:e.changeEditAccount},model:{value:e.editForm.accountId,callback:function(t){e.$set(e.editForm,"accountId",t)},expression:"editForm.accountId"}},e._l(e.accountList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("i",{staticClass:"error-tip"},[e._v("*")])],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.square"),prop:"mallId"}},[a("el-select",{staticClass:"manage-sel",attrs:{filterable:"",placeholder:e.$t("pholder.select"),"no-data-text":e.$t("pholder.nodata")},model:{value:e.editForm.mallId,callback:function(t){e.$set(e.editForm,"mallId",t)},expression:"editForm.mallId"}},e._l(e.mallList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("i",{staticClass:"error-tip"},[e._v("*")])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"dialog-btn",on:{click:function(t){e.editDialogVisible=!1}}},[e._v(e._s(e.$t("dialog.cancel")))]),e._v(" "),a("el-button",{staticClass:"dialog-btn dialog-confirm-btn",attrs:{type:"primary"},on:{click:function(t){e.editSubmit("editForm")}}},[e._v(e._s(e.$t("dialog.confirm")))])],1)],1)},staticRenderFns:[]},s=a("VU/8")(l,i,!1,null,null,null);t.a=s.exports}});