webpackJsonp([108],{UKpn:function(e,t){},kwqP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("uRn0"),s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-wrapper"},["mall"!==e.$Project?a("div",{staticClass:"login-header"},[a("lange-Select",{staticClass:"login-lang"})],1):e._e(),e._v(" "),a("div",{staticClass:"login-box"},[a("div",{staticClass:"login-bg"}),e._v(" "),a("div",{staticClass:"right-form"},[a("el-form",{ref:"loginForm",staticClass:"demo-ruleForm",attrs:{model:e.loginForm,"status-icon":"",rules:e.myRules,"label-width":"100px"}},[a("el-form-item",{attrs:{prop:"loginName"}},[a("el-input",{staticClass:"form-inp",model:{value:e.loginForm.loginName,callback:function(t){e.$set(e.loginForm,"loginName",t)},expression:"loginForm.loginName"}},[a("i",{staticClass:"custom-icon loginUser-icon",attrs:{slot:"suffix"},slot:"suffix"})])],1),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{staticClass:"form-inp",attrs:{type:"password","auto-complete":"off"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.submitForm("loginForm")}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[a("i",{staticClass:"custom-icon pass-icon",attrs:{slot:"suffix"},slot:"suffix"})])],1),e._v(" "),a("el-form-item",{staticClass:"form-submit-wrapper"},[a("el-button",{staticClass:"submit-btn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("loginForm")}}},[e._v(e._s(e.$t("login.btn")))])],1),e._v(" "),a("el-form-item",{staticClass:"remember-box"},[a("el-checkbox",{model:{value:e.rememberPass,callback:function(t){e.rememberPass=t},expression:"rememberPass"}},[e._v(e._s(e.$t("login.rememberPw")))])],1)],1),e._v(" "),a("p",{staticClass:"login-footer"},[e._v("北京文安智能技术股份有限公司")])],1),e._v(" "),a("p",{staticClass:"login-footer"},[e._v("北京文安智能技术股份有限公司")])])])},staticRenderFns:[]},i=function(e){a("UKpn")},n=a("VU/8")(o.a,s,!1,i,"data-v-4a1c57c6",null);t.default=n.exports},uRn0:function(e,t,a){"use strict";(function(e){var o=a("mvHQ"),s=a.n(o),i=a("n2YA");window.addEventListener("resize",function(){e(".login-wrapper").css({height:window.innerHeight+"px"})}),t.a={data:function(){return{loginForm:{loginName:"",password:""},rememberPass:!0,myRules:{loginName:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},asusAtoken:""}},components:{"lange-Select":i.a},created:function(){var e=this;document.addEventListener("keydown",function(t){13===window.event.keyCode&&e.submitForm("loginForm")})},mounted:function(){var e=this;this.checkCookie(),-1===window.location.href.indexOf("?t=")||(this.asusAtoken=decodeURI(window.location.href.split("=")[1]),this.axios({method:"post",url:"/users/userAttest",headers:{Authorization:this.asusAtoken}}).then(function(t){e.$cookie.set("atoken",e.asusAtoken),e.$cookie.set("userId",t.data.data.user.id),e.$cookie.set("user_type",t.data.data.userType),e.setSessionLocal("loginName",t.data.data.user.loginName),e.setSessionLocal("loginVal",!0),e.rememberPass?e.$cookie.set("username",t.data.data.user.loginName):(e.$cookie.remove("username"),e.$cookie.remove("pwd")),t.data.data.user.accountId?(e.$cookie.set("accountId",t.data.data.user.accountId),e.getAccName(t.data.data.user.accountId)):e.getAccName(-1)}))},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.axios.post("/users/login",t.loginForm).then(function(e){t.$cookie.set("userId",e.data.data.user.id),t.$cookie.set("atoken",e.data.data.atoken),t.$cookie.set("rtoken",e.data.data.rtoken),t.$cookie.set("user_unid",e.data.data.user_unid),t.$cookie.set("user_type",e.data.data.userType),t.setSessionLocal("loginName",e.data.data.user.loginName),t.setSessionLocal("loginVal",!0),t.rememberPass?(t.$cookie.set("username",t.loginForm.loginName),t.$cookie.set("pwd",t.loginForm.password)):(t.$cookie.remove("username"),t.$cookie.remove("pwd")),e.data.data.user.accountId?(t.$cookie.set("accountId",e.data.data.user.accountId),t.getAccName(e.data.data.user.accountId)):t.getAccName(-1)}).catch(function(e){t.$message({type:"error",message:t.$t("message.loginFailed")})})})},getAccName:function(e){var t=this;e=-1==e?null:e,this.axios.get("/accounts",{params:{id:e,_t:Date.parse(new Date)/1e3}}).then(function(e){if(e.data.data.length<1)t.$message({type:"wraning",message:t.$t("message.noBloc")});else{var a=e.data.data[0].name;t.$cookie.set("accountId",e.data.data[0].id),t.$cookie.set("accountName",a),t.getcityList(),t.setSessionLocal("path","/account"),t.$router.push("/home")}})},getcityList:function(){this.axios.get("/citys",{params:{_t:Date.parse(new Date)/1e3}}).then(function(e){var t={};e.data.data.forEach(function(e,a,o){t[e.cityId]=e.cityName});var a=s()(t);window.sessionStorage.setItem("cityMap",a)}).catch(function(e){})},checkCookie:function(){var e=this.$cookie.get("username"),t=this.$cookie.get("pwd");""!==e&&""!==t?(this.loginForm.loginName=e,this.loginForm.password=t):(this.loginForm.loginName="",this.loginForm.password="")}}}}).call(t,a("7t+N"))}});