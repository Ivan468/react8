(this.webpackJsonpreact8=this.webpackJsonpreact8||[]).push([[0],{20:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),l=a(13),c=a(12),o=a(0),u=a.n(o),s=a(21),i=a(14),m=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(i.a,null,u.a.createElement("div",{className:"page_one"},u.a.createElement(s.default,null)))}}]),a}(o.Component);t.default=m},21:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),l=a(13),c=a(12),o=a(0),u=a.n(o),s=a(14),i=a(3),m=a(22),d=a(23),E=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(s.a,null,u.a.createElement("div",{className:"header"},u.a.createElement("div",{className:"logo"},u.a.createElement("h3",null,"MoneyTracker")),u.a.createElement("div",{className:"menu"},u.a.createElement(s.b,{to:"/"},"Home"),u.a.createElement(s.b,{to:"/charts"},"Charts"),u.a.createElement(s.b,{to:"/dashboard"},"Categories"))),u.a.createElement(i.c,null,u.a.createElement(i.a,{exact:!0,path:"/"},u.a.createElement(f,null)),u.a.createElement(i.a,{path:"/charts"},u.a.createElement(h,null)),u.a.createElement(i.a,{path:"/dashboard"},u.a.createElement(p,null))))}}]),a}(o.Component);function f(){return u.a.createElement(s.a,null,u.a.createElement("div",{className:"right-block"},u.a.createElement("div",null,u.a.createElement("div",{className:"balanse"},u.a.createElement("h4",null,"balanse"),u.a.createElement("h5",null,"$2,651.07")),u.a.createElement("div",null,u.a.createElement("div",{className:"href-right-block"},u.a.createElement("div",{className:"Charges"},u.a.createElement(s.b,{to:"/charges"}," Charges")),u.a.createElement("div",{className:"Incomes"},u.a.createElement(s.b,{to:"/incomes"}," Incomes"))),u.a.createElement("div",{className:"charges"},u.a.createElement("div",null,u.a.createElement("span",{className:"my-charges"},"My Charges"),u.a.createElement("select",{className:"select-p-1"},u.a.createElement("option",null,"this week"),u.a.createElement("option",null,"this month"))),u.a.createElement("button",null,"Add more")),u.a.createElement(i.c,null,u.a.createElement(i.a,{path:"/charges"},u.a.createElement(m.default,null)),u.a.createElement(i.a,{path:"/incomes"},u.a.createElement(p,null)))))))}function h(){return u.a.createElement("div",{className:"charts"},u.a.createElement("h3",null,"\u041d\u0430\u0434\u043f\u0438\u0441"),u.a.createElement("input",null),u.a.createElement("h3",null,"\u041d\u0430\u0434\u043f\u0438\u0441"),u.a.createElement("input",null),u.a.createElement("h3",null,"\u041d\u0430\u0434\u043f\u0438\u0441"),u.a.createElement(d.default,null),u.a.createElement("button",null,"Knopka"))}function p(){return u.a.createElement("div",null,u.a.createElement("h2",null,"incomes"))}t.default=E},22:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),l=a(13),c=a(12),o=a(0),u=a.n(o),s=(a(31),a(19)),i=a(33),m=a.n(i),d=a(34),E=a.n(d),f=a(35),h=a.n(f),p=a(36),b=a.n(p),v=a(37),y=a.n(v),g=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={charges:[{category:u.a.createElement(s.Icon,{icon:E.a,style:{fontSize:"35px"}}),description:"Food",date:"11.06.2020",money:55.68},{category:u.a.createElement(s.Icon,{icon:h.a,style:{fontSize:"35px"}}),description:"Ali",date:"05.05.2029",money:37},{category:u.a.createElement(s.Icon,{icon:b.a,style:{fontSize:"35px"}}),description:"Saad",date:"11.07.2019",money:26},{category:u.a.createElement(s.Icon,{icon:y.a,style:{fontSize:"35px"}}),description:"Asad",date:"29.06.2019",money:96},{category:u.a.createElement(s.Icon,{icon:m.a,style:{fontSize:"35px"}}),description:"Asad",date:"29.06.2019",money:96}]},r}return Object(r.a)(a,[{key:"renderTableHeader",value:function(){return Object.keys(this.state.charges[0]).map((function(e,t){return u.a.createElement("th",{key:t},e.toUpperCase())}))}},{key:"renderTableData",value:function(){return this.state.charges.map((function(e,t){var a=e.category,n=e.description,r=e.date,l=e.money;return u.a.createElement("tr",{key:a},u.a.createElement("td",null,a),u.a.createElement("td",null,n),u.a.createElement("td",null,r),u.a.createElement("td",null,"$",l))}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("table",{id:"charges-style"},u.a.createElement("tbody",null,u.a.createElement("tr",null,this.renderTableHeader()),this.renderTableData())))}}]),a}(u.a.Component);t.default=g},23:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),l=a(13),c=a(12),o=a(0),u=a.n(o),s=a(2),i=a(40),m=[{value:"England",label:"England",icon:"fork.svg"},{value:"Germany",label:"Germany",icon:"fork.svg"}],d=s.z.Option,E=function(e){return u.a.createElement(d,e,u.a.createElement("img",{src:a(50)("./"+e.data.icon),style:{width:36},alt:e.data.label}))},f=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={name:"React"},e}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(i.a,{defaultValue:m[0],options:m,components:{Option:E}})}}]),a}(o.Component);t.default=f},31:function(e,t,a){},41:function(e,t,a){e.exports=a(55)},46:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){var n={"./fork.svg":51,"./header":21,"./header.js":21,"./page_one":20,"./page_one.js":20,"./select":23,"./select.js":23,"./table":22,"./table.css":31,"./table.js":22};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=50},51:function(e,t,a){e.exports=a.p+"static/media/fork.95fe9a4d.svg"},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(46),a(10)),u=a(11),s=a(13),i=a(12),m=(a(47),a(20)),d=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.default,null))}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.786b8752.chunk.js.map