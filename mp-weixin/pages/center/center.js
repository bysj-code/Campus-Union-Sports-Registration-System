(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{"0587":function(t,e,n){"use strict";(function(t){n("5e35"),n("921b");r(n("66fd"));var e=r(n("f348"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"448a":function(t,e,n){"use strict";n.r(e);var r=n("7855"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},"4fe0":function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}))},"574e":function(t,e,n){"use strict";var r=n("b03a"),a=n.n(r);a.a},7855:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),a=u(n("303c"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,a,u,i){try{var o=t[u](i),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var u=t.apply(e,n);function o(t){i(u,r,a,o,c,"next",t)}function c(t){i(u,r,a,o,c,"throw",t)}o(void 0)}))}}var c={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[]}},onLoad:function(){var e=o(r.default.mark((function e(){var n,u,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=t.getStorageSync("role"),n=t.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:u=e.sent,this.user=u.data,this.tableName=n,i=a.default.list(),this.menuList=i;case 9:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onShow:function(){var e=o(r.default.mark((function e(){var n,u,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=t.getStorageSync("role"),n=t.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:u=e.sent,this.user=u.data,this.tableName=n,i=a.default.list(),this.menuList=i;case 9:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{onPageTap:function(e){t.navigateTo({url:e,fail:function(){t.switchTab({url:e})}})}}};e.default=c}).call(this,n("543d")["default"])},b03a:function(t,e,n){},f348:function(t,e,n){"use strict";n.r(e);var r=n("4fe0"),a=n("448a");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("574e");var i,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports}},[["0587","common/runtime","common/vendor"]]]);