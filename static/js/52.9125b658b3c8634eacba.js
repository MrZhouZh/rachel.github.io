webpackJsonp([52],{L0he:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=s("mvHQ"),i=s.n(e),r=s("pJt5"),o=s("liqX"),l=s("eYnI"),n=s("RmlB"),d=s("kb0H"),c=s.n(d),h={props:{orgId:[String,Number],propparam:Object},data:function(){return{floorPic:c.a,headerData:{dayDensity:"--",accumulativeTraffic:"--",trafficRatio:"--",accumulativeSale:"--",formatNum:"--",storeNum:"--",gateNum:"--",averageInnum:"--",averageSales:"--",workdayAverageInnum:"--",workdayAverageSales:"--",weekendAverageInnum:"--",weekendAverageSales:"--",enableDayInnum:"--",maleInnum:"--",femaleInnum:"--",staffInnum:"--"},floorYearSex_ops:{maleRatio:"0%",femaleRatio:"0%"},floorYearAge_ops:{},fYTrend_ops:{},fYshopRank_ops:{},fYIoFlow_ops:{},radioDate:"日",start_date:"",end_date:"",fMainOptions:[{value:"trafficRank",label:"TRAFFIC"},{value:"saleRank",label:"SALES"},{value:"enteringRateRank",label:"ENTERINGRATE"},{value:"perTransactionRank",label:"PREPRICE"},{value:"perSquareMeterRank",label:"PERAREAVALUE"},{value:"turnoverRank",label:"VOLUME"},{value:"handbagRateRank",label:"BAGRATE"},{value:"durationTimeRank",label:"DURATIONTIME"}],fMainVal:"trafficRank",chartKeyToId:{},chartIds:"",start_time:"",end_time:"",Daytrend_title:"",DayRank_title:"",DaygateTraffic_title:"",isSmpleReport:!0}},components:{"my-chart":l.a,"gender-chart":n.a,"export-data-dialog":r.a},watch:{propparam:{handler:"refreshHandle",immediate:!0}},computed:{},created:function(){var a=this;this.$emit("isCreated",!0,"yearly"),o.a.$on("simpleEvent",function(t){a.isSmpleReport=t}),this.activeSimple="1"},mounted:function(){},methods:{i18nFormatter:function(a){var t="format."+a;return this.$t(t)},i18n:function(a){if(a){var t="echartsTitle."+a;return this.$t(t)}},refreshHandle:function(a){var t=this.getSessionLocal("path");if("/floor/yearly"===a.dateType&&"/floor"===t){if(a.timeVal||(a.timeVal=new Date),"string"==typeof a.timeVal?a.timeVal=new Date(Date.parse(a.timeVal.replace(/\-/g,"/"))):a.timeVal=new Date(Date.parse(a.timeVal)),a.timeVal.getFullYear()===(new Date).getFullYear())this.end_time=dateUnit.dateFormat(a.timeVal,"yyyy-MM-dd"),this.start_time=dateUnit.dateFormat(new Date(Date.parse(a.timeVal.getFullYear()+"/01/01")),"yyyy-MM-dd"),this.start_time==this.end_time&&(this.end_time=dateUnit.dateFormat(new Date,"yyyy-MM-dd"));else{this.start_time=a.timeVal,this.end_time=new Date(Date.parse(this.dayAdd(a.timeVal,365).replace(/\-/,"/")));var s=this.unitTime(this.start_time,this.end_time,"year");this.start_time=s.startTime,this.end_time=s.endTime}this.chartIds?this.getChartData():this.getChartId()}},emptyChart:function(){this.floorYearSex_ops={maleRatio:"0%",femaleRatio:"0%"},this.floorYearAge_ops={},this.fYTrend_ops={},this.fYshopRank_ops={},this.fYIoFlow_ops={}},getChartId:function(){var a=this;this.chartKeyToId={},this.chartIds="",this.axios.get("/reportCharts",{params:{report:"FloorYear",_t:Date.parse(new Date)/1e3}}).then(function(t){var s=t.data.data;s.forEach(function(t,e,i){a.chartKeyToId[t.key]=t.id,"customerfeature_gender"!==t.key&&"customerfeature_age"!==t.key&&"customerfeature_NAO"!==t.key&&"trafficAndSaleTrend"!==t.key&&"trafficRank"!==t.key&&"gateTraffic"!==t.key||(e==s.length-1?a.chartIds+=t.id:a.chartIds+=t.id+",")}),a.getChartData()}).catch(function(a){})},getChartData:function(){var a=this;this.emptyChart();var t="",s="";this.start_time||this.end_time?(s=this.end_time,t=this.start_time):(s=dateUnit.dateFormat(new Date,"yyyy-MM-dd"),t=dateUnit.dateFormat(new Date(Date.parse((new Date).getFullYear()+"/01/01")),"yyyy-MM-dd")),this.axios.get("/report/year/floor",{params:{orgIds:this.$cookie.get("orgId"),startDate:t,endDate:s,chartIds:this.chartIds,_t:Date.parse(new Date)/1e3}}).then(function(t){var s=t.data.data.body.customerfeature_age;s.color=["#3BB8FF","#FFC62E"],a.floorYearAge_ops=s,a.fYTrend_ops=t.data.data.body.trafficAndSaleTrend,a.Daytrend_title="FloorYeartrafficAndSaleTrend";var e=t.data.data.body.trafficRank;e.seriesText="trafficRank",a.fYshopRank_ops=e,a.DayRank_title="FloorYeartrafficRank";var i=t.data.data.body.gateTraffic;i.seriesText="trafficRank",a.fYIoFlow_ops=i,a.DaygateTraffic_title="FloorYeargateTraffic";var r=t.data.data.body.customerfeature_gender;if(r.series.length>0&&r.series.forEach(function(t,s,e){if(t.data.length>1){var i=t.data[0].value+t.data[1].value;i>0?"女"===t.data[0].name?(a.floorYearSex_ops.femaleRatio=(t.data[0].value/i*100).toFixed(2)+"%",a.floorYearSex_ops.maleRatio=(t.data[1].value/i*100).toFixed(2)+"%"):(a.floorYearSex_ops.femaleRatio=(t.data[1].value/i*100).toFixed(2)+"%",a.floorYearSex_ops.maleRatio=(t.data[0].value/i*100).toFixed(2)+"%"):a.floorYearSex_ops={maleRatio:"0%",femaleRatio:"0%"}}else a.floorYearSex_ops={maleRatio:"0%",femaleRatio:"0%"}}),t.data.data.head.averageInnum&&t.data.data.head.floorArea)var o=Number(t.data.data.head.averageInnum/t.data.data.head.floorArea).toFixed(2);else o="--";a.headerData={dayDensity:o,accumulativeTraffic:t.data.data.head.accumulativeTraffic?t.data.data.head.accumulativeTraffic:"--",trafficRatio:t.data.data.head.trafficRatio?t.data.data.head.trafficRatio:"--",accumulativeSale:t.data.data.head.accumulativeSale?t.data.data.head.accumulativeSale:"--",formatNum:t.data.data.head.formatNum?t.data.data.head.formatNum:"--",storeNum:t.data.data.head.storeNum?t.data.data.head.storeNum:"--",gateNum:t.data.data.head.gateNum?t.data.data.head.gateNum:"--",averageInnum:t.data.data.head.averageInnum?t.data.data.head.averageInnum:"--",averageSales:t.data.data.head.averageSales?t.data.data.head.averageSales:"--",workdayAverageInnum:t.data.data.head.workdayAverageInnum?t.data.data.head.workdayAverageInnum:"--",workdayAverageSales:t.data.data.head.workdayAverageSales?t.data.data.head.workdayAverageSales:"--",weekendAverageInnum:t.data.data.head.weekendAverageInnum?t.data.data.head.weekendAverageInnum:"--",weekendAverageSales:t.data.data.head.weekendAverageSales?t.data.data.head.weekendAverageSales:"--",floorMapUrl:t.data.data.head.floorMapUrl?t.data.data.head.floorMapUrl:a.floorPic,enableDayInnum:t.data.data.head.effectiveTraffic?t.data.data.head.effectiveTraffic:"--",maleInnum:t.data.data.head.maleTraffic?t.data.data.head.maleTraffic:"--",femaleInnum:t.data.data.head.femaleTraffic?t.data.data.head.femaleTraffic:"--",staffInnum:t.data.data.head.staffManTime?t.data.data.head.staffManTime:0}}).catch(function(a){})},changeChartSelect:function(a,t,s){var e=this,r="",o="",l=null;if(this.start_time||this.end_time?(o=this.end_time,r=this.start_time):(o=dateUnit.dateFormat(new Date,"yyyy-MM-dd"),r=dateUnit.dateFormat(new Date(Date.parse((new Date).getFullYear()+"/01/01")),"yyyy-MM-dd")),"fYTrend"===a&&"YearTrend"===s){switch(t){case"日":t="TAB_DAY";break;case"周":t="TAB_WEEK";break;case"月":t="TAB_MONTH"}l=this.chartKeyToId.trafficAndSaleTrend,{orgIds:this.$cookie.get("orgId"),startDate:r,endDate:o,option:t,_t:Date.parse(new Date)/1e3}}else l=this.chartKeyToId[t],{orgIds:this.$cookie.get("orgId"),startDate:r,endDate:o,_t:Date.parse(new Date)/1e3};this.axios.get("/report/year/floor/"+l,{params:{orgIds:this.$cookie.get("orgId"),startDate:r,endDate:o,_t:Date.parse(new Date)/1e3}}).then(function(r){if(r.data.data)if("YearTrend"==s){if("fYTrend"===a){var o=r.data.data;"{}"===i()(o)?e.fYTrend_ops={}:e.fYTrend_ops=o}}else if("Rank"==s)switch(a){case"fYshopRank":var l=r.data.data;"{}"===i()(l)?e.fYshopRank_ops={}:(l.seriesText=t,e.fYshopRank_ops=l)}}).catch(function(t){"fYshopRank"===a&&(e.fYshopRank_ops={})})},exportDataHandle:function(a,t,s){var e={domId:a,title:t,data:{url:"/report/year/floor/"+this.chartKeyToId[s]+"/excel",params:"orgIds="+this.$cookie.get("orgId")+"&startDate="+this.start_time+"&endDate="+this.end_time}};console.log("floor year exportNeed",e),this.$refs.exportDialog.dialogInit(e)},computedProgress:function(a,t,s,e){var i="",r=null,o=null;return t&&"--"!==t&&s&&"--"!==s?(r=t+s,a?(o=t/r*100,i="width"==e?o+"%":o.toFixed(2)+"%"):(o=s/r*100,i="width"==e?o+"%":o.toFixed(2)+"%"),i):"--"},computedRepeat:function(a){var t=null;return t=a.accumulativeTraffic&&"--"!==a.accumulativeTraffic&&a.enableDayInnum&&"--"!==a.enableDayInnum&&(a.staffInnum||a.staffInnum>=0)?a.accumulativeTraffic-a.enableDayInnum-a.staffInnum:"--",t=t<0?0:t}}},v={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"yearly"},[a.isSmpleReport?e("div",{staticClass:"headBox"},[e("el-row",{staticClass:"head-box-row",attrs:{gutter:12}},[e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("5pLd"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatHuman")(a.headerData.accumulativeTraffic)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatHumanUnit")(a.headerData.accumulativeTraffic)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.yearInnum")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic showbox-pic27",attrs:{src:s("PArN"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a.headerData.trafficRatio))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v("%")])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.trafficRatio")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("ZN6x"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatHuman")(a.headerData.averageInnum)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatHumanUnit")(a.headerData.averageInnum)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.averageInnum")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("ZN6x"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatdayDensity")(a.headerData.dayDensity)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatdayDensityUnit")(a.headerData.dayDensity)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.density")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic showbox-pic27",attrs:{src:s("BZYW"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatHuman")(a.headerData.workdayAverageInnum)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatHumanUnit")(a.headerData.workdayAverageInnum)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.workdayAverageInnum")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("6b2V"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatHuman")(a.headerData.weekendAverageInnum)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatHumanUnit")(a.headerData.weekendAverageInnum)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.weekendAverageInnum")))])])])],1)],1):e("div",{staticClass:"headBox"},[e("el-row",{staticClass:"head-box-row",attrs:{gutter:12}},[e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("5pLd"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatHuman")(a.headerData.accumulativeTraffic)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatHumanUnit")(a.headerData.accumulativeTraffic)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.dayInnum")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("PArN"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a.headerData.trafficRatio))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v("%")])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.trafficRatio")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("y4hn"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatSales")(a.headerData.accumulativeSale)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatSalesUnit")(a.headerData.accumulativeSale)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.daySales")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("mdja"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a.headerData.formatNum))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v("种")])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.formatNum")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("x0ZD"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a.headerData.storeNum))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v("个")])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.storeNum")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("82dc"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a.headerData.gateNum))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v("个")])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.gateNum")))])])])],1),a._v(" "),e("el-row",{staticClass:"head-box-row",attrs:{gutter:12}},[e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("ZN6x"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatHuman")(a.headerData.averageInnum)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatHumanUnit")(a.headerData.averageInnum)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.averageInnum")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("oPw3"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatSales")(a.headerData.averageSales)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatSalesUnit")(a.headerData.averageSales)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.averageSales")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("BZYW"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatHuman")(a.headerData.workdayAverageInnum)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatHumanUnit")(a.headerData.workdayAverageInnum)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.workdayAverageInnum")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("BE2V"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatSales")(a.headerData.workdayAverageSales)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatSalesUnit")(a.headerData.workdayAverageSales)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.workdayAverageSales")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("6b2V"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatHuman")(a.headerData.weekendAverageInnum)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatHumanUnit")(a.headerData.weekendAverageInnum)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.weekendAverageInnum")))])])]),a._v(" "),e("el-col",{attrs:{span:4}},[e("div",{staticClass:"showBox"},[e("div",{staticClass:"showBoxNum"},[e("img",{staticClass:"showbox-pic",attrs:{src:s("DpLA"),alt:""}}),a._v(" "),e("span",{staticClass:"showbox-text"},[a._v(a._s(a._f("formatSales")(a.headerData.weekendAverageSales)))]),a._v(" "),e("span",{staticClass:"showbox-unit"},[a._v(a._s(a._f("formatSalesUnit")(a.headerData.weekendAverageSales)))])]),a._v(" "),e("div",{staticClass:"showBoxTit"},[a._v(a._s(a.$t("head.weekendAverageSales")))])])])],1)],1),a._v(" "),e("div",{staticClass:"content"},[e("el-row",{staticClass:"chartRow",attrs:{gutter:12}},[e("el-col",{staticClass:"download-parent",attrs:{span:14}},[e("my-chart",{staticClass:"small-pie-chart-box",attrs:{id:"floorYearAge",chartType:"ageBar",options:a.floorYearAge_ops}}),a._v(" "),e("span",{staticClass:"download-text",on:{click:function(t){a.exportDataHandle("floorYearAge",a.floorYearAge_ops.title.text,"customerfeature_age")}}},[a._v(a._s(a.$t("allPages.load")))])],1),a._v(" "),e("el-col",{attrs:{span:10}},[e("ul",{staticClass:"gender-box-top"},[e("li",{staticClass:"gender-top-item"},[e("div",{staticClass:"bar-num"},[a._v(a._s(a.headerData.maleInnum))]),a._v(" "),e("div",[e("img",{staticClass:"gender-man-img",attrs:{src:s("53nh"),alt:""}}),a._v(" "),e("span",{staticClass:"bar-title"},[a._v(a._s(a.$t("head.man")))])]),a._v(" "),e("div",{staticClass:"gender-progress-bars"},[e("span",{staticClass:"feature-progress male-feature-progress",style:{width:a.computedProgress(!0,a.headerData.maleInnum,a.headerData.femaleInnum,"width")}})])]),a._v(" "),e("li",{staticClass:"gender-top-item"},[e("div",{staticClass:"bar-num"},[a._v(a._s(a.headerData.femaleInnum))]),a._v(" "),e("div",[e("img",{staticClass:"gender-woman-img",attrs:{src:s("Bgdg"),alt:""}}),a._v(" "),e("span",{staticClass:"bar-title woman-bar-title"},[a._v(a._s(a.$t("head.woman")))])]),a._v(" "),e("div",{staticClass:"gender-progress-bars"},[e("span",{staticClass:"feature-progress female-feature-progress",style:{width:a.computedProgress(!1,a.headerData.maleInnum,a.headerData.femaleInnum,"width")}})])]),a._v(" "),e("li",{staticClass:"gender-top-item"},[e("div",{staticClass:"bar-num"},[a._v(a._s(a.computedProgress(!0,a.headerData.maleInnum,a.headerData.femaleInnum,"ratio")))]),a._v(" "),e("div",[e("img",{staticClass:"gender-huiyuan-img",attrs:{src:s("PQws"),alt:""}}),a._v(" "),e("span",{staticClass:"bar-title huiyuan-bar-title"},[a._v(a._s(a.$t("head.man")))])]),a._v(" "),e("div",{staticClass:"gender-progress-bars"},[e("span",{staticClass:"feature-progress huiyuan-feature-progress",style:{width:a.computedProgress(!0,a.headerData.maleInnum,a.headerData.femaleInnum,"width")}})])]),a._v(" "),e("li",{staticClass:"gender-top-item"},[e("div",{staticClass:"bar-num"},[a._v(a._s(a.computedProgress(!1,a.headerData.maleInnum,a.headerData.femaleInnum,"ratio")))]),a._v(" "),e("div",[e("img",{staticClass:"gender-feihuiyuan-img",attrs:{src:s("fQ2u"),alt:""}}),a._v(" "),e("span",{staticClass:"bar-title feihuiyuan-bar-title"},[a._v(a._s(a.$t("head.woman")))])]),a._v(" "),e("div",{staticClass:"gender-progress-bars"},[e("span",{staticClass:"feature-progress feihuiyuan-feature-progress",style:{width:a.computedProgress(!1,a.headerData.maleInnum,a.headerData.femaleInnum,"width")}})])])]),a._v(" "),e("ul",{staticClass:"gender-box-bottom"},[e("li",{staticClass:"gender-bottom-item"},[e("div",[e("img",{attrs:{src:s("e+CZ"),alt:""}}),a._v(" "),e("span",{staticClass:"gender-bottom-title"},[a._v(a._s(a.$t("head.clerkNum")))])]),a._v(" "),e("div",{staticClass:"bottom-text"},[a._v(a._s(a.headerData.staffInnum))])]),a._v(" "),e("li",{staticClass:"gender-bottom-item"},[e("div",[e("img",{attrs:{src:s("KgwP"),alt:""}}),a._v(" "),e("span",{staticClass:"gender-bottom-title"},[a._v(a._s(a.$t("head.repeatTraff")))])]),a._v(" "),e("div",{staticClass:"bottom-text"},[a._v(a._s(a.computedRepeat(a.headerData)))])]),a._v(" "),e("li",{staticClass:"gender-bottom-item"},[e("div",[e("img",{attrs:{src:s("gvvx"),alt:""}}),a._v(" "),e("span",{staticClass:"gender-bottom-title"},[a._v(a._s(a.$t("head.effectiveTraff")))])]),a._v(" "),e("div",{staticClass:"bottom-text"},[a._v(a._s(a.headerData.enableDayInnum))])])])])],1),a._v(" "),e("el-row",{staticClass:"chartRow",attrs:{gutter:12}},[e("el-col",{staticClass:"selectChart",attrs:{span:24}},[a._e(),a._v(" "),e("my-chart",{staticClass:"trend-chart-box",attrs:{id:"fYTrend",chartType:"YearTrend",options:a.fYTrend_ops}}),a._v(" "),e("span",{staticClass:"ehcarts-title"},[a._v(a._s(a.i18n(a.Daytrend_title)))]),a._v(" "),e("span",{staticClass:"download-text",on:{click:function(t){a.exportDataHandle("fYTrend",a.i18n(a.Daytrend_title),"trafficAndSaleTrend")}}},[a._v(a._s(a.$t("allPages.load")))])],1)],1),a._v(" "),e("el-row",{staticClass:"chartRow",attrs:{gutter:12}},[e("el-col",{staticClass:"selectChart",attrs:{span:12}},[e("el-select",{staticClass:"select-box",attrs:{size:"mini",placeholder:a.$t("pholder.select")},on:{change:function(t){a.changeChartSelect("fYshopRank",a.fMainVal,"Rank")}},model:{value:a.fMainVal,callback:function(t){a.fMainVal=t},expression:"fMainVal"}},a._l(a.fMainOptions,function(t){return e("el-option",{key:t.value,attrs:{label:a.i18nFormatter(t.label),value:t.value}})})),a._v(" "),e("my-chart",{staticClass:"rank-chart-box spe-rank-box",attrs:{id:"fYshopRank",chartType:"smallRank",options:a.fYshopRank_ops}}),a._v(" "),e("span",{staticClass:"ehcarts-title"},[a._v(a._s(a.i18n(a.DayRank_title)))]),a._v(" "),e("span",{staticClass:"download-text",on:{click:function(t){a.exportDataHandle("fYshopRank",a.i18n(a.DayRank_title),a.fMainVal)}}},[a._v(a._s(a.$t("allPages.load")))])],1),a._v(" "),e("el-col",{staticClass:"selectChart",attrs:{span:12}},[e("my-chart",{staticClass:"rank-chart-box spe-rank-box",attrs:{id:"fYIoFlow",chartType:"smallRank",options:a.fYIoFlow_ops}}),a._v(" "),e("span",{staticClass:"ehcarts-title"},[a._v(a._s(a.i18n(a.DaygateTraffic_title)))]),a._v(" "),e("span",{staticClass:"download-text",on:{click:function(t){a.exportDataHandle("fYIoFlow",a.i18n(a.DaygateTraffic_title),"gateTraffic")}}},[a._v(a._s(a.$t("allPages.load")))])],1)],1)],1),a._v(" "),e("export-data-dialog",{ref:"exportDialog"})],1)},staticRenderFns:[]},m=s("VU/8")(h,v,!1,function(a){s("pWfk")},"data-v-83e2383e",null);t.default=m.exports},mdja:function(a,t){a.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMyAyMyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmM2MmU7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7otYTmupAgNDwvdGl0bGU+PGcgaWQ9IuWbvuWxgl8yIiBkYXRhLW5hbWU9IuWbvuWxgiAyIj48ZyBpZD0i5Zu+5bGCXzEtMiIgZGF0YS1uYW1lPSLlm77lsYIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOC4zNywwSDIuMDlBMi4xLDIuMSwwLDAsMCwwLDIuMDlWOC4zN2EyLjM4LDIuMzgsMCwwLDAsMiwyLjQ1SDguNzljMS4xNSwwLDItMS41NSwyLTIuNzFWMkEyLjM4LDIuMzgsMCwwLDAsOC4zNywwWk0yMC45MSwwSDE0LjYzYTIuMzgsMi4zOCwwLDAsMC0yLjQ1LDJWOC4xMmMwLDEuMTUuODgsMi43MSwyLDIuNzFIMjFhMi4zOCwyLjM4LDAsMCwwLDItMi40NVYyLjA5QTIuMDksMi4wOSwwLDAsMCwyMC45MSwwWk04Ljc5LDEyLjE4SDJhMi4zOCwyLjM4LDAsMCwwLTIsMi40NXY2LjI4QTIuMDksMi4wOSwwLDAsMCwyLjA5LDIzSDguMzdhMi4zOCwyLjM4LDAsMCwwLDIuNDUtMlYxNC4yMWEyLDIsMCwwLDAtMi0yWm0xMi4xOCwwSDE0LjIxYTIsMiwwLDAsMC0yLDJWMjFhMi4zOCwyLjM4LDAsMCwwLDIuNDUsMmg2LjI4QTIuMDksMi4wOSwwLDAsMCwyMywyMC45MVYxNC42M2EyLjM4LDIuMzgsMCwwLDAtMi0yLjQ1WiIvPjwvZz48L2c+PC9zdmc+"},pWfk:function(a,t){}});