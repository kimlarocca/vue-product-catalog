(function(e){function t(t){for(var s,a,l=t[0],o=t[1],c=t[2],f=0,m=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,l=1;l<n.length;l++){var o=n[l];0!==i[o]&&(s=!1)}s&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},i={app:0},r=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03dd":function(e,t,n){},"1a1b":function(e,t,n){},"3efc":function(e,t,n){"use strict";var s=n("71a2"),i=n.n(s);i.a},"4fba":function(e,t,n){"use strict";var s=n("db6d"),i=n.n(s);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=n("2877"),l={},o=Object(a["a"])(l,i,r,!1,null,null,null),c=o.exports,u=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"product-catalog container"},[n("h1",{staticClass:"text-center mt-4 mb-4"},[e._v("Vue Search")]),n("p",{staticClass:"text-center"},[e._v("An open-source UI library for Vue that lets you quickly build an Algolia inspired search interface in your front-end application.")]),e._m(0),n("vue-search",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-4 p-4"},[n("div",{staticClass:"dashed-border p-4"},[n("p",{staticClass:"small"},[e._v("Keyword Search")]),n("search")],1)]),n("div",{staticClass:"col-4 p-4"},[n("div",{staticClass:"dashed-border p-4"},[n("p",{staticClass:"small"},[e._v("Sort")]),n("sort")],1)]),n("div",{staticClass:"col-4 p-4"},[n("div",{staticClass:"dashed-border p-4"},[n("p",{staticClass:"small"},[e._v("Layout Options")]),n("layout-options")],1)]),n("div",{staticClass:"col-3 p-4"},[n("div",{staticClass:"dashed-border p-4 mb-4"},[n("p",{staticClass:"small"},[e._v("Clear Refinements")]),n("clear-refinements")],1),n("div",{staticClass:"dashed-border p-4 mb-4"},[n("p",{staticClass:"small"},[e._v("Current Refinements")]),n("current-refinements")],1),n("div",{staticClass:"dashed-border p-4 mb-4"},[n("p",{staticClass:"small"},[e._v("Refinements")]),n("refinements")],1),n("div",{staticClass:"dashed-border p-4"},[n("p",{staticClass:"small"},[e._v("Toggle Refinements")]),n("toggle-refinements")],1)]),n("div",{staticClass:"col-9 p-4"},[n("div",{staticClass:"dashed-border p-4"},[n("p",{staticClass:"small"},[e._v("Hits")]),n("hits")],1)])])])],1)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"text-center mb-4"},[n("em",[e._v('To do list: add "show less" functionality to refinement items / add ability to specify AND or OR for refinements')])])}],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-search-container"},[e._t("default")],2)},p=[],h=(n("4de4"),n("caad"),n("d3b7"),n("6062"),n("2532"),n("3ca3"),n("ddb0"),n("2909")),g=n("bc3a"),v=n.n(g),y={name:"VueSearch",data:function(){return{originalItems:[],items:[],toggledItems:[],facets:[],keyword:null,refinements:[],toggleRefinements:[],numberOfResults:0,sorting:[],sortBy:this.defaultSortBy,layout:this.defaultLayout,resetIndex:1}},mounted:function(){var e=this;v.a.get("/demo.json").then((function(t){return e.originalItems=t.data.Results,e.items=t.data.Results,e.filteredItems=t.data.Results,e.facets=t.data.Facets,e.sorting=t.data.Sorting.Items,e.numberOfResults=e.originalItems.length}))},computed:{filteredItems:function(){var e=this;return this.keyword?this.items.filter((function(t){return t.ItemName.toLowerCase().includes(e.keyword.toLowerCase())||t.Brand.toLowerCase().includes(e.keyword.toLowerCase())})):this.items},stringFacets:function(){return this.facets.filter((function(e){if("string"===e.Type)return e}))},toggleFacets:function(){return this.facets.filter((function(e){if("toggle"===e.Type)return e}))}},methods:{sortItems:function(){"salepriceasc"===this.sortBy&&this.filteredItems.sort((function(e,t){return parseFloat(e.Price)>parseFloat(t.Price)?1:-1})),"salepricedesc"===this.sortBy&&this.filteredItems.sort((function(e,t){return parseFloat(e.Price)>parseFloat(t.Price)?1:-1})).reverse(),"titleasc"===this.sortBy&&this.filteredItems.sort((function(e,t){return e.ItemName>t.ItemName?1:-1})),"titledesc"===this.sortBy&&this.filteredItems.sort((function(e,t){return e.ItemName>t.ItemName?1:-1})).reverse()},applyRefinements:function(){if(this.refinements.length>0){this.items=[];for(var e=0;e<this.refinements.length;e++)for(var t=this.refinements[e].paramName,n=this.refinements[e].value,s=0;s<this.originalItems.length;s++){var i=this.originalItems[s];void 0!==i&&i.hasOwnProperty(t)&&i[t]===n&&this.items.push(this.originalItems[s])}this.items=Object(h["a"])(new Set(this.items))}else this.items=this.originalItems},applyToggleRefinements:function(){if(this.toggledItems=[],this.toggleRefinements.length>0){for(var e=0;e<this.toggleRefinements.length;e++)for(var t=this.toggleRefinements[e].paramName,n=0;n<this.items.length;n++){var s=this.items[n];void 0!==s&&s[t]&&this.toggledItems.push(this.items[n])}this.items=this.toggledItems}else this.items=this.originalItems,this.applyRefinements()},clearRefinements:function(){this.refinements=[],this.toggleRefinements=[];for(var e=document.querySelectorAll(".refinement-item-checkbox"),t=0;t<e.length;t++)e[t].checked=!1;this.resetIndex++}},watch:{refinements:function(){this.applyRefinements(),this.applyToggleRefinements()},toggleRefinements:function(){this.applyToggleRefinements()}}},b=y,_=Object(a["a"])(b,d,p,!1,null,null,null),C=_.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("label",{staticClass:"hide-a11y-element",attrs:{for:"search"}},[e._v("keyword search")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],ref:"search",attrs:{id:"search",type:"text",placeholder:"search here..."},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),n("i",{staticClass:"fas fa-search"})])},w=[],R=(n("ac1f"),n("841c"),n("2b3d"),{name:"Search",data:function(){return{keyword:null}},mounted:function(){var e=window.location.search.substring(1),t=new URLSearchParams(e),n=t.get("query");null!==n&&(this.keyword=n)},watch:{keyword:function(){this.$parent.keyword=this.keyword}}}),O=R,S=(n("7251"),Object(a["a"])(O,k,w,!1,null,"0632f82c",null)),$=S.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sort"},[n("label",{staticClass:"hide-a11y-element",attrs:{for:"sort"}},[e._v("Sort By:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{id:"sort"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},e._l(this.$parent.sorting,(function(t,s){return n("option",{key:s,domProps:{value:t.Value}},[e._v(" "+e._s(t.Label)+" ")])})),0)])},I=[],N={name:"Sort",data:function(){return{selected:this.$parent.sortBy}},watch:{selected:function(){this.$parent.sortBy=this.selected,this.$parent.sortItems()}}},j=N,V=(n("7ee1"),Object(a["a"])(j,x,I,!1,null,"749e958e",null)),T=V.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-options"},[n("i",{staticClass:"fas fa-th-large mr-2",attrs:{tabindex:"0"},on:{click:function(t){e.layout="grid"},keypress:[function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.layout="grid"},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;t.preventDefault(),e.layout="grid"}]}}),n("i",{staticClass:"fas fa-th-list",attrs:{tabindex:"0"},on:{click:function(t){e.layout="list"},keypress:[function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.layout="list"},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;t.preventDefault(),e.layout="list"}]}})])},E=[],B={name:"LayoutOptions",data:function(){return{layout:this.$parent.layout}},watch:{layout:function(){this.$parent.layout=this.layout}}},L=B,A=(n("3efc"),Object(a["a"])(L,P,E,!1,null,"4cee7945",null)),M=A.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hits"},[0===this.$parent.filteredItems.length?n("p",[e._v("No items found.")]):e._e(),n("div",{staticClass:"row"},e._l(this.$parent.filteredItems,(function(t,s){return n("div",{key:s,staticClass:"mb-4 item",class:e.layout},[n("card",{attrs:{id:t.Id,image:t.ImageURL,imageAlt:t.ImageAlt,brand:t.Brand,title:t.ItemName,price:t.Price,salePrice:t.SalePrice,isOnSale:t.IsOnSale,url:t.URL,layout:e.layoutName}})],1)})),0)])},U=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",class:e.layout},[e.hasURL?n("a",{staticClass:"link",attrs:{href:e.url,"aria-label":e.title}}):e._e(),n("div",{staticClass:"image"},[e.hasImage?n("img",{attrs:{src:e.image,alt:e.imageAlt}}):e._e()]),n("div",{staticClass:"content"},[n("div",{staticClass:"brand"},[e._v(e._s(e.brand))]),n("div",{staticClass:"title"},[e._v(e._s(e.title))]),e.isOnSale?n("div",{staticClass:"sale-price"},[n("del",[e._v("$"+e._s(e.price))]),e._v(" $"+e._s(e.salePrice)+" ")]):n("div",{staticClass:"price"},[e._v("$"+e._s(e.price))])])])},q=[],H={name:"Card",props:{id:String,image:String,imageAlt:String,brand:String,title:String,price:String,salePrice:String,isOnSale:Boolean,url:String,layout:String},computed:{hasURL:function(){return!!this.$props["url"]},hasImage:function(){return!!this.$props["image"]}}},J=H,K=(n("5835"),Object(a["a"])(J,D,q,!1,null,"0a221e84",null)),z=K.exports,G={name:"Hits",components:{card:z},computed:{layout:function(){return"grid"===this.$parent.layout?"col-6 col-md-4":"col-12 col-md-12"},layoutName:function(){return this.$parent.layout}}},Q=G,W=Object(a["a"])(Q,F,U,!1,null,null,null),X=W.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clear-refinements"},[n("button",{on:{click:e.clearRefinements}},[e._v("Clear Refinements")])])},Z=[],ee={name:"ClearRefinements",methods:{clearRefinements:function(){this.$parent.clearRefinements()}}},te=ee,ne=(n("79dd"),Object(a["a"])(te,Y,Z,!1,null,"637a0977",null)),se=ne.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"refinements"},[n("div",{staticClass:"refinements-applied"},[e.currentRefinements.length>0?n("ul",e._l(e.currentRefinements,(function(t,s){return n("li",{key:s,on:{click:function(n){return e.removeRefinementByObject(t)}}},[e._v(" "+e._s(t.value)+" ")])})),0):e._e()])])},re=[],ae={computed:{currentRefinements:function(){for(var e=[],t=0;t<this.$parent.refinements.length;t++)"boolean"!==typeof this.$parent.refinements[t].value&&e.push(this.$parent.refinements[t]);return e}},methods:{removeRefinementByObject:function(e){this.$parent.refinements=this.$parent.refinements.filter((function(t){return t!=e})),document.querySelectorAll("input[type='checkbox'][value="+e.value+"]")[0].checked=!1}}},le=ae,oe=(n("4fba"),Object(a["a"])(le,ie,re,!1,null,"1ce5ea1a",null)),ce=oe.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"refinements"},[e._l(this.$parent.stringFacets,(function(t,s){return[t.Values.length>0?n("refinement-item",{key:s,staticClass:"refinement-item",attrs:{name:t.Name,paramName:t.ParamName,refinementObject:t,values:t.Values,isCollapsed:t.IsCollapsedByDefault,numberVisible:t.NumberVisible}}):e._e()]}))],2)},fe=[],me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"refinement-item"},[n("div",{staticClass:"refinement-item-name",class:{open:e.isVisible},attrs:{tabindex:"0"},on:{click:function(t){e.isVisible=!e.isVisible},keypress:[function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.isVisible=!e.isVisible},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;t.preventDefault(),e.isVisible=!e.isVisible}]}},[e._v(" "+e._s(e.name)+" ")]),n("transition",{attrs:{name:"slide"}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}]},[e._l(e.values.slice(0,e.numberToShow),(function(t,s){return n("li",{key:s},[n("label",[n("input",{staticClass:"refinement-item-checkbox",attrs:{type:"checkbox"},domProps:{value:t.Value},on:{change:function(n){return e.toggleRefinement(e.refinementObject,e.paramName,t.Value,n)}}}),e._v(" "+e._s(t.Label)+" ("+e._s(t.Count)+") ")])])})),e.showShowMore?n("li",{staticClass:"show-more",attrs:{tabindex:"0"},on:{click:e.showMore,keypress:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.showMore(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.preventDefault(),e.showMore(t))}]}},[e._v("show more ")]):e._e()],2)])],1)},de=[],pe=(n("a9e3"),{name:"RefinementItem",props:{name:String,paramName:String,value:String,values:Array,refinementObject:Object,numberVisible:Number,isCollapsed:Boolean,checkedItems:Array},data:function(){return{isVisible:!this.isCollapsed,numberToShow:0===this.numberVisible?this.numberOfRefinementsVisible:this.numberVisible}},computed:{showShowMore:function(){return this.numberToShow<=this.values.length}},methods:{toggleRefinement:function(e,t,n,s){s.target.checked?this.$parent.addRefinement(t,n):this.$parent.removeRefinement(n)},showMore:function(){this.numberToShow=1e4,this.showShowMore=!1}}}),he=pe,ge=(n("74e0"),Object(a["a"])(he,me,de,!1,null,"a35aa7cc",null)),ve=ge.exports,ye={components:{RefinementItem:ve},methods:{addRefinement:function(e,t){this.$parent.refinements.push({paramName:e,value:t})},removeRefinement:function(e){this.$parent.refinements=this.$parent.refinements.filter((function(t){return t.value!==e}))}}},be=ye,_e=Object(a["a"])(be,ue,fe,!1,null,null,null),Ce=_e.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{key:this.$parent.resetIndex,staticClass:"refinements"},[e._l(this.$parent.toggleFacets,(function(e,t){return[n("toggle-refinement-item",{key:t,ref:"toggle",refInFor:!0,staticClass:"toggle-refinement-item",attrs:{name:e.Name,paramName:e.ParamName}})]}))],2)},we=[],Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toggle-refinement-item",class:{on:e.isOn}},[n("a",{attrs:{tabindex:"0"},on:{click:function(t){return e.toggleToggleRefinement(e.paramName)},keypress:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.toggleToggleRefinement(e.paramName)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.toggleToggleRefinement(e.paramName)}]}},[e.isOn?n("i",{staticClass:"fas fa-toggle-on"}):n("i",{staticClass:"fas fa-toggle-off"}),e._v(" "+e._s(e.name)+" ")])])},Oe=[],Se={name:"ToggleRefinementItem",props:{name:String,paramName:String},data:function(){return{isOn:!1}},methods:{toggleToggleRefinement:function(e){this.isOn=!this.isOn,this.isOn?this.$parent.addToggleRefinement(e):this.$parent.removeToggleRefinement(e)}}},$e=Se,xe=(n("8efb"),Object(a["a"])($e,Re,Oe,!1,null,"0e753288",null)),Ie=xe.exports,Ne={components:{ToggleRefinementItem:Ie},methods:{addToggleRefinement:function(e){this.$parent.toggleRefinements.push({paramName:e,value:!0})},removeToggleRefinement:function(e){this.$parent.toggleRefinements=this.$parent.toggleRefinements.filter((function(t){return t.paramName!==e}))}}},je=Ne,Ve=Object(a["a"])(je,ke,we,!1,null,"6d9c9bc2",null),Te=Ve.exports,Pe={name:"ProductCatalog",components:{VueSearch:C,Search:$,Sort:T,LayoutOptions:M,Hits:X,ClearRefinements:se,CurrentRefinements:ce,Refinements:Ce,ToggleRefinements:Te}},Ee=Pe,Be=(n("65c8"),Object(a["a"])(Ee,f,m,!1,null,"084842c5",null)),Le=Be.exports;s["a"].use(u["a"]);var Ae=[{path:"/",name:"Catalog",component:Le,meta:{title:"Vue Search | Open Source UI Library"}}],Me=new u["a"]({mode:"history",base:"/",routes:Ae});Me.beforeEach((function(e,t,n){document.title=e.meta.title,n()}));var Fe=Me;s["a"].config.productionTip=!1,s["a"].prototype.numberOfRefinementsVisible=5,s["a"].prototype.defaultSortBy="titleasc",s["a"].prototype.defaultLayout="grid",new s["a"]({router:Fe,render:function(e){return e(c)}}).$mount("#app")},5835:function(e,t,n){"use strict";var s=n("03dd"),i=n.n(s);i.a},"59fb":function(e,t,n){},"5ca9":function(e,t,n){},"65c8":function(e,t,n){"use strict";var s=n("59fb"),i=n.n(s);i.a},"71a2":function(e,t,n){},7251:function(e,t,n){"use strict";var s=n("b489"),i=n.n(s);i.a},"74e0":function(e,t,n){"use strict";var s=n("5ca9"),i=n.n(s);i.a},"79dd":function(e,t,n){"use strict";var s=n("7cbd"),i=n.n(s);i.a},"7cbd":function(e,t,n){},"7ee1":function(e,t,n){"use strict";var s=n("bd0b"),i=n.n(s);i.a},"8efb":function(e,t,n){"use strict";var s=n("1a1b"),i=n.n(s);i.a},b489:function(e,t,n){},bd0b:function(e,t,n){},db6d:function(e,t,n){}});
//# sourceMappingURL=app.7d1dc87d.js.map