webpackJsonp([24],{"4A1r":function(t,e,a){"use strict";function n(t){a("P0fO")}var r=a("wkss"),i=a("nMOt"),s=a("VU/8"),o=n,u=s(r.a,i.a,!1,o,null,null);e.a=u.exports},"8LSh":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Menu",{attrs:{theme:"dark","active-name":t.activeName,"open-names":t.openNames}},[a("Submenu",{attrs:{name:"overview"}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"stats-bars"}}),t._v("\n            网站概览\n        ")],1),a("router-link",{attrs:{to:"/admin"}},[a("Menu-item",{attrs:{name:"/admin"}},[t._v("网站概览")])],1),a("router-link",{attrs:{to:"/admin/pushLink"}},[a("Menu-item",{attrs:{name:"/admin/pushLink"}},[t._v("提交链接")])],1)],2),a("Submenu",{attrs:{name:"category"}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"folder"}}),t._v("\n            分类管理\n        ")],1),a("router-link",{attrs:{to:"/admin/category/list"}},[a("Menu-item",{attrs:{name:"/admin/category/list"}},[t._v("分类列表")])],1)],2),a("Submenu",{attrs:{name:"topic"}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-paper"}}),t._v("\n            话题管理\n        ")],1),a("router-link",{attrs:{to:"/admin/topic/list"}},[a("Menu-item",{attrs:{name:"/admin/topic/list"}},[t._v("全部话题")])],1),a("router-link",{attrs:{to:"/admin/topic/today"}},[a("Menu-item",{attrs:{name:"/admin/topic/today"}},[t._v("今日话题")])],1),a("router-link",{attrs:{to:"/admin/topic/yesterday"}},[a("Menu-item",{attrs:{name:"/admin/topic/yesterday"}},[t._v("昨日话题")])],1)],2),a("Submenu",{attrs:{name:"reply"}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"chatboxes"}}),t._v("\n            回复管理\n        ")],1),a("router-link",{attrs:{to:"/admin/reply/list"}},[a("Menu-item",{attrs:{name:"/admin/reply/list"}},[t._v("全部回复")])],1),a("router-link",{attrs:{to:"/admin/reply/today"}},[a("Menu-item",{attrs:{name:"/admin/reply/today"}},[t._v("今日回复")])],1),a("router-link",{attrs:{to:"/admin/reply/yesterday"}},[a("Menu-item",{attrs:{name:"/admin/reply/yesterday"}},[t._v("昨日回复")])],1)],2),a("Submenu",{attrs:{name:"user"}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-people"}}),t._v("\n            用户管理\n        ")],1),a("router-link",{attrs:{to:"/admin/user/list"}},[a("Menu-item",{attrs:{name:"/admin/user/list"}},[t._v("全部用户")])],1),a("router-link",{attrs:{to:"/admin/user/today"}},[a("Menu-item",{attrs:{name:"/admin/user/today"}},[t._v("今日用户")])],1),a("router-link",{attrs:{to:"/admin/user/yesterday"}},[a("Menu-item",{attrs:{name:"/admin/user/yesterday"}},[t._v("昨日用户")])],1)],2),a("Submenu",{attrs:{name:"craler"}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"bug"}}),t._v("\n            爬虫管理\n        ")],1),a("MenuGroup",{attrs:{title:"账号"}},[a("router-link",{attrs:{to:"/admin/crawl/account"}},[a("Menu-item",{attrs:{name:"/admin/crawl/account"}},[t._v("爬虫账号")])],1)],1),a("MenuGroup",{attrs:{title:"网站"}},[a("router-link",{attrs:{to:"/admin/crawl/jianshu"}},[a("Menu-item",{attrs:{name:"/admin/crawl/jianshu"}},[t._v("简书")])],1),a("router-link",{attrs:{to:"/admin/crawl/zhihu"}},[a("Menu-item",{attrs:{name:"/admin/crawl/zhihu"}},[t._v("知乎")])],1),a("router-link",{attrs:{to:"/admin/crawl/huxiu"}},[a("Menu-item",{attrs:{name:"/admin/crawl/huxiu"}},[t._v("虎嗅")])],1),a("router-link",{attrs:{to:"/admin/crawl/custom"}},[a("Menu-item",{attrs:{name:"/admin/crawl/custom"}},[t._v("自定义抓取")])],1)],1)],2),a("Submenu",{attrs:{name:"user"}},[a("template",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"gear-b"}}),t._v("\n            设置\n        ")],1),a("router-link",{attrs:{to:"/admin/settings/site"}},[a("Menu-item",{attrs:{name:"/admin/settings/site"}},[t._v("网站设置")])],1)],2)],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},"9U2H":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".amdin-top-container{height:60px;background-color:#20a0ff}",""])},HqON:function(t,e,a){var n=a("c0i4");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("99dbc9be",n,!0)},P0fO:function(t,e,a){var n=a("9U2H");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("1ac16e56",n,!0)},YvKs:function(t,e,a){"use strict";e.a={props:["activeName"],data:function(){return{openNames:["overview","category","topic","reply","user","craler"]}}}},c0i4:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".admin-root{min-width:1200px}.admin-body-container,.admin-sidebar-container{float:left}",""])},"f8+1":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-root"},[a("admin-header"),a("Row",{staticClass:"admin-body"},[a("Col",{attrs:{span:5}},[a("admin-sidebar",{staticClass:"admin-sidebar-container",attrs:{activeName:t.activeName}})],1),a("Col",{staticClass:"admin-body-container",attrs:{span:18}},[a("nuxt",{ref:"content"})],1)],1)],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},fy1m:function(t,e,a){"use strict";var n=a("YvKs"),r=a("8LSh"),i=a("VU/8"),s=i(n.a,r.a,!1,null,null,null);e.a=s.exports},jahy:function(t,e,a){"use strict";function n(t){a("HqON")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("uug1"),i=a("f8+1"),s=a("VU/8"),o=n,u=s(r.a,i.a,!1,o,null,null);e.default=u.exports},nMOt:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"amdin-top-container"})},r=[],i={render:n,staticRenderFns:r};e.a=i},uug1:function(t,e,a){"use strict";var n=a("/5sW"),r=a("BTaQ"),i=a.n(r),s=a("4A1r"),o=a("fy1m");n.default.use(i.a),e.a={data:function(){return{activeName:"",siteConfig:this.$store.state.siteConfig}},head:function(){var t=this.siteConfig;return{titleTemplate:"%s - "+t.title,meta:[{hid:"description",name:"description",content:t.description},{name:"keywords",content:t.keywords}]}},components:{adminHeader:s.a,adminSidebar:o.a},middleware:"adminRequired",mounted:function(){this.activeName=this.$refs.content.$route.path}}},wkss:function(t,e,a){"use strict";e.a={}}});
//# sourceMappingURL=admin.9c97ea1f5bd5bdc76c57.js.map