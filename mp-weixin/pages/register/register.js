(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0517":function(i,e,t){"use strict";var n,s=function(){var i=this,e=i.$createElement;i._self._c},a=[];t.d(e,"b",(function(){return s})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return n}))},"14a4":function(i,e,t){"use strict";(function(i){t("fbf6"),t("921b");n(t("66fd"));var e=n(t("698a"));function n(i){return i&&i.__esModule?i:{default:i}}i(e.default)}).call(this,t("543d")["createPage"])},"2eee":function(i,e,t){"use strict";t.r(e);var n=t("3526"),s=t.n(n);for(var a in n)"default"!==a&&function(i){t.d(e,i,(function(){return n[i]}))}(a);e["default"]=s.a},3526:function(i,e,t){"use strict";(function(i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(t("a34a"));function s(i){return i&&i.__esModule?i:{default:i}}function a(i,e,t,n,s,a,r){try{var u=i[a](r),h=u.value}catch(o){return void t(o)}u.done?e(h):Promise.resolve(h).then(n,s)}function r(i){return function(){var e=this,t=arguments;return new Promise((function(n,s){var r=i.apply(e,t);function u(i){a(r,n,s,u,h,"next",i)}function h(i){a(r,n,s,u,h,"throw",i)}u(void 0)}))}}var u={data:function(){return{xueshengxingbieOptions:[],xueshengxingbieIndex:0,xueshengqinshiOptions:[],xueshengqinshiIndex:0,jiaoshixingbieOptions:[],jiaoshixingbieIndex:0,jiaoshiqinshiOptions:[],jiaoshiqinshiIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var e=r(n.default.mark((function e(){var t,s;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=[],s=i.getStorageSync("loginTable"),this.tableName=s,"xuesheng"==this.tableName&&(this.xueshengxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.xueshengxingbieOptions[0]),"xuesheng"!=this.tableName){e.next=10;break}return e.next=7,this.$api.option("sushexinxi","sushemingcheng",{});case 7:t=e.sent,this.xueshengqinshiOptions=t.data,this.ruleForm.qinshi=this.xueshengqinshiOptions[0];case 10:if("jiaoshi"==this.tableName&&(this.jiaoshixingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.jiaoshixingbieOptions[0]),"jiaoshi"!=this.tableName){e.next=17;break}return e.next=14,this.$api.option("sushexinxi","sushemingcheng",{});case 14:t=e.sent,this.jiaoshiqinshiOptions=t.data,this.ruleForm.qinshi=this.jiaoshiqinshiOptions[0];case 17:this.styleChange();case 18:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{xueshengxingbieChange:function(i){this.xueshengxingbieIndex=i.target.value,this.ruleForm.xingbie=this.xueshengxingbieOptions[this.xueshengxingbieIndex]},xueshengqinshiChange:function(i){this.xueshengqinshiIndex=i.target.value,this.ruleForm.qinshi=this.xueshengqinshiOptions[this.xueshengqinshiIndex]},jiaoshixingbieChange:function(i){this.jiaoshixingbieIndex=i.target.value,this.ruleForm.xingbie=this.jiaoshixingbieOptions[this.jiaoshixingbieIndex]},jiaoshiqinshiChange:function(i){this.jiaoshiqinshiIndex=i.target.value,this.ruleForm.qinshi=this.jiaoshiqinshiOptions[this.jiaoshiqinshiIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var i=r(n.default.mark((function i(){return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(this.ruleForm.xuehao||"xuesheng"!=this.tableName){i.next=3;break}return this.$utils.msg("学号不能为空"),i.abrupt("return");case 3:if(this.ruleForm.mima||"xuesheng"!=this.tableName){i.next=6;break}return this.$utils.msg("密码不能为空"),i.abrupt("return");case 6:if(this.ruleForm.xingming||"xuesheng"!=this.tableName){i.next=9;break}return this.$utils.msg("姓名不能为空"),i.abrupt("return");case 9:if("xuesheng"!=this.tableName||!this.ruleForm.dianhua||this.$validate.isMobile(this.ruleForm.dianhua)){i.next=12;break}return this.$utils.msg("电话应输入手机格式"),i.abrupt("return");case 12:if("xuesheng"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){i.next=15;break}return this.$utils.msg("邮箱应输入邮件格式"),i.abrupt("return");case 15:if(this.ruleForm.gonghao||"jiaoshi"!=this.tableName){i.next=18;break}return this.$utils.msg("工号不能为空"),i.abrupt("return");case 18:if(this.ruleForm.mima||"jiaoshi"!=this.tableName){i.next=21;break}return this.$utils.msg("密码不能为空"),i.abrupt("return");case 21:if(this.ruleForm.xingming||"jiaoshi"!=this.tableName){i.next=24;break}return this.$utils.msg("姓名不能为空"),i.abrupt("return");case 24:if("jiaoshi"!=this.tableName||!this.ruleForm.dianhua||this.$validate.isMobile(this.ruleForm.dianhua)){i.next=27;break}return this.$utils.msg("电话应输入手机格式"),i.abrupt("return");case 27:if("jiaoshi"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){i.next=30;break}return this.$utils.msg("邮箱应输入邮件格式"),i.abrupt("return");case 30:return i.next=32,this.$api.register("".concat(this.tableName),this.ruleForm);case 32:this.$utils.msgBack("注册成功");case 34:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}()}};e.default=u}).call(this,t("543d")["default"])},"66db":function(i,e,t){},"698a":function(i,e,t){"use strict";t.r(e);var n=t("0517"),s=t("2eee");for(var a in s)"default"!==a&&function(i){t.d(e,i,(function(){return s[i]}))}(a);t("b00a");var r,u=t("f0c5"),h=Object(u["a"])(s["default"],n["b"],n["c"],!1,null,"a73e0ada",null,!1,n["a"],r);e["default"]=h.exports},b00a:function(i,e,t){"use strict";var n=t("66db"),s=t.n(n);s.a}},[["14a4","common/runtime","common/vendor"]]]);