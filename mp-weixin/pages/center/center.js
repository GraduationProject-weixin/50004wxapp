(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{"01b2":function(t,n,e){"use strict";e.r(n);var r=e("89c0"),u=e("f81c");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("77b0");var i,c=e("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);n["default"]=o.exports},"37bc":function(t,n,e){},"77b0":function(t,n,e){"use strict";var r=e("37bc"),u=e.n(r);u.a},"89c0":function(t,n,e){"use strict";var r,u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}))},"95bb":function(t,n,e){"use strict";(function(t){e("fbf6"),e("921b");r(e("66fd"));var n=r(e("01b2"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},cd29:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("a34a")),u=a(e("f2d9"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,r,u,a,i){try{var c=t[a](i),o=c.value}catch(s){return void e(s)}c.done?n(o):Promise.resolve(o).then(r,u)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var a=t.apply(n,e);function c(t){i(a,r,u,c,o,"next",t)}function o(t){i(a,r,u,c,o,"throw",t)}c(void 0)}))}}var o={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[]}},onLoad:function(){var n=c(r.default.mark((function n(){var e,a,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.role=t.getStorageSync("role"),e=t.getStorageSync("nowTable"),n.next=4,this.$api.session(e);case 4:a=n.sent,this.user=a.data,this.tableName=e,i=u.default.list(),this.menuList=i;case 9:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),onShow:function(){var n=c(r.default.mark((function n(){var e,a,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.role=t.getStorageSync("role"),e=t.getStorageSync("nowTable"),n.next=4,this.$api.session(e);case 4:a=n.sent,this.user=a.data,this.tableName=e,i=u.default.list(),this.menuList=i;case 9:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),methods:{onPageTap:function(n){t.navigateTo({url:n,fail:function(){t.switchTab({url:n})}})}}};n.default=o}).call(this,e("543d")["default"])},f81c:function(t,n,e){"use strict";e.r(n);var r=e("cd29"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a}},[["95bb","common/runtime","common/vendor"]]]);