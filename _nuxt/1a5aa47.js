(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{490:function(t,e,r){"use strict";r(14),r(23),r(24),r(25);var l=r(4),d=(r(42),r(21),r(32),r(65),r(293),r(19),r(43),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(46),r(56),r(18),r(91),r(481),r(2)),o=r(214),n=r(3);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c=["sm","md","lg","xl"],_=c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),f=c.reduce((function(t,e){return t["offset"+Object(n.s)(e)]={type:[String,Number],default:null},t}),{}),m=c.reduce((function(t,e){return t["order"+Object(n.s)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(_),offset:Object.keys(f),order:Object.keys(m)};function y(t,e,r){var l=t;if(null!=r&&!1!==r){if(e){var d=e.replace(t,"");l+="-".concat(d)}return"col"!==t||""!==r&&!0!==r?(l+="-".concat(r)).toLowerCase():l.toLowerCase()}}var x=new Map;e.a=d.a.extend({name:"v-col",functional:!0,props:h(h(h(h({cols:{type:[Boolean,String,Number],default:!1}},_),{},{offset:{type:[String,Number],default:null}},f),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,d=e.children,n=(e.parent,"");for(var v in r)n+=String(r[v]);var h=x.get(n);return h||function(){var t,e;for(e in h=[],w)w[e].forEach((function(t){var l=r[t],d=y(e,t,l);d&&h.push(d)}));var d=h.some((function(t){return t.startsWith("col-")}));h.push((t={col:!d||!r.cols},Object(l.a)(t,"col-".concat(r.cols),r.cols),Object(l.a)(t,"offset-".concat(r.offset),r.offset),Object(l.a)(t,"order-".concat(r.order),r.order),Object(l.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),x.set(n,h)}(),t(r.tag,Object(o.a)(data,{class:h}),d)}})},492:function(t,e,r){var content=r(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("16d0f9a4",content,!0,{sourceMap:!1})},519:function(t,e,r){"use strict";r(492)},520:function(t,e,r){var l=r(28)(!1);l.push([t.i,"td{text-align:left}",""]),t.exports=l},521:function(t,e,r){var content=r(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("7c06aa28",content,!0,{sourceMap:!1})},522:function(t,e,r){var l=r(28)(!1);l.push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=l},541:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{isWindowSmall:"false"}},components:{},methods:{onResize:function(){this.isWindowSmall=window.innerWidth<980}},mounted:function(){this.$store.state.selectedMesh}},d=(r(519),r(100)),o=r(126),n=r.n(o),v=r(486),h=r(490),c=r(501),_=r(286),f=r(485),m=r(502),w=(r(21),r(14),r(23),r(24),r(18),r(25),r(4)),y=(r(42),r(521),r(3)),x=r(45),O=r(17);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var k=Object(O.a)(x.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(y.d)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),S=r(217),C=r.n(S),$=r(128),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"px-5",attrs:{column:"","justify-start":"","align-start":""}},[r("div",{staticClass:"text-center"},[r("h1",[t._v(t._s(this.$store.state.selectedMesh.name))]),t._v(" "),r("v-container",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"ma-0 pa-0",attrs:{fluid:""}},[r("v-row",{staticClass:"pa-0 ma-0"},[r("v-col",{staticClass:"pa-0 ma-2"},[r("v-card",{staticClass:"ma-0 pa-0",staticStyle:{"background-color":"black"},attrs:{elevation:"5"}},[r("v-img",{staticClass:"white--text align-end pa-2 ma-2",attrs:{src:this.$store.state.selectedMesh.image,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"385px",width:"385px"}})],1)],1),t._v(" "),r("v-col",{staticClass:"pa-4 ma-0"},[r("v-simple-table",{attrs:{height:"390px"},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("Attributes")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("Value")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Name")]),t._v(" "),r("td",[t._v(t._s(t.$store.state.selectedMesh.name))])]),t._v(" "),r("tr",[r("td",[t._v("Shape")]),t._v(" "),r("td",[t._v(t._s(t.$store.state.selectedMesh.attributes[0].value))])]),t._v(" "),r("tr",[r("td",[t._v("Void Layout")]),t._v(" "),r("td",[t._v(t._s(t.$store.state.selectedMesh.attributes[1].value))])]),t._v(" "),r("tr",[r("td",[t._v("Color Combination")]),t._v(" "),r("td",[t._v("\n                    "+t._s(t.$store.state.selectedMesh.attributes[2].value)+"\n                  ")])]),t._v(" "),r("tr",[r("td",[t._v("Dot Style")]),t._v(" "),r("td",[t._v(t._s(t.$store.state.selectedMesh.attributes[3].value))])]),t._v(" "),r("tr",[r("td",[t._v("Mesh Style")]),t._v(" "),r("td",[t._v(t._s(t.$store.state.selectedMesh.attributes[4].value))])]),t._v(" "),r("tr",[r("td",[t._v("Mesh Density")]),t._v(" "),r("td",[t._v(t._s(t.$store.state.selectedMesh.attributes[5].value))])])])]},proxy:!0}])})],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;n()(component,{VCard:v.a,VCol:h.a,VContainer:c.a,VImg:_.a,VLayout:f.a,VRow:m.a,VSimpleTable:k}),C()(component,{Resize:$.a})}}]);