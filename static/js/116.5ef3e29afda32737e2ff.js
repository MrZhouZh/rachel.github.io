webpackJsonp([116],{"1nh5":function(e,t,i){"use strict";(function(e){t.a={data:function(){return{devLogUrl:"",iframeHeight:0}},created:function(){var e=this;this.iframeHeight=this.computedHeight("px"),window.addEventListener("resize",function(){e.iframeHeight=e.computedHeight("px")}),this.devLogUrl=window.logUrl},mounted:function(){this.devLogUrl=window.logUrl},methods:{computedHeight:function(t){var i=0,n=e(window).height(),r=.16;return n<=720?r=.18:n<=768?r=.17:n<=900?r=.17:n<=1080&&(r=.16),i=n-n*r,i=t?i+t:i}}}}).call(t,i("7t+N"))},RqSw:function(e,t){},"k/5L":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("1nh5"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"manage-container device-log-wrapper"},[t("iframe",{staticClass:"log-iframe",attrs:{src:this.devLogUrl,width:"100%",height:this.iframeHeight,frameborder:"0",name:"device_log"}})])},staticRenderFns:[]},a=function(e){i("RqSw")},o=i("VU/8")(n.a,r,!1,a,"data-v-03ca345c",null);t.default=o.exports}});