(function(e){function t(t){for(var a,i,o=t[0],l=t[1],u=t[2],c=0,d=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"31215780"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var u=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}r[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/hawksearch/dist/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1ff7":function(e,t,n){"use strict";var a=n("6d74"),r=n.n(a);r.a},"21bb":function(e,t,n){"use strict";var a=n("2dad"),r=n.n(a);r.a},"2dad":function(e,t,n){},"33ee":function(e,t,n){},4365:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=n("2877"),o={},l=Object(i["a"])(o,r,s,!1,null,null,null),u=l.exports,c=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home container"},[n("hawksearch",[n("div",{staticClass:"mb-4 text-center"},[n("search")],1),n("hr",{staticClass:"mb-0"}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-3 p-4"},[n("div",{staticClass:"refine-by"},[e._v("Refine By:")]),n("refinements")],1),n("div",{staticClass:"col-9 border-left p-4"},[n("h2",[e._v("Featured Products:")]),n("hr"),n("div",{staticClass:"row align-middle"},[n("div",{staticClass:"col-4"},[n("h2",[e._v("Products:")])]),n("div",{staticClass:"col-8 text-right"},[n("div",{staticClass:"d-flex justify-content-end"},[n("sort"),n("layout-options")],1)])]),n("hits")],1)])])],1)},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hawksearch-wrapper"},[e._t("default")],2)},p=[],h=(n("4de4"),n("caad"),n("2532"),n("bc3a")),y=n.n(h),v={name:"Hawksearch",data:function(){return{items:[],facets:[],keyword:null,refinements:[],numberOfResults:0,maxPerPage:0,numberOfPages:0,currentPage:1,sorting:[],sortBy:"titleasc",layout:this.defaultLayout}},mounted:function(){var e=this;y.a.get(this.api).then((function(t){return e.items=t.data.Results,e.filteredItems=t.data.Results,e.facets=t.data.Facets,e.sorting=t.data.Sorting.Items,e.numberOfResults=t.data.Pagination.NofResults,e.maxPerPage=t.data.Pagination.MaxPerPage,e.numberOfPages=t.data.Pagination.NofPages}))},computed:{filteredItems:function(){var e=this,t=this.items;return this.keyword&&(t=t.filter((function(t){return t.ItemName.toLowerCase().includes(e.keyword.toLowerCase())}))),this.sortItems(t),t}},methods:{sortItems:function(e){"score"===this.sortBy&&e.sort((function(e,t){return e.score>t.score?1:-1})),"salepriceasc"===this.sortBy&&e.sort((function(e,t){return e.Custom.price>t.Custom.price?1:-1})),"salepricedesc"===this.sortBy&&e.sort((function(e,t){return e.Custom.price>t.Custom.price?1:-1})).reverse(),"titleasc"===this.sortBy&&e.sort((function(e,t){return e.ItemName>t.ItemName?1:-1})),"titledesc"===this.sortBy&&e.sort((function(e,t){return e.ItemName>t.ItemName?1:-1})).reverse()}}},b=v,k=Object(i["a"])(b,m,p,!1,null,null,null),g=k.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hawksearch-search"},[n("label",{staticClass:"hide-a11y-element",attrs:{for:"search"}},[e._v("Search Input")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],ref:"search",attrs:{id:"search",type:"text",placeholder:"keyword search"},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),n("i",{staticClass:"fas fa-search"})])},_=[],C={name:"Search",data:function(){return{keyword:null}},watch:{keyword:function(){this.$parent.keyword=this.keyword}}},x=C,O=(n("e589"),Object(i["a"])(x,w,_,!1,null,null,null)),S=O.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hawksearch-sort"},[n("label",{staticClass:"sort-by",attrs:{for:"sort"}},[e._v("Sort By:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{id:"sort"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},e._l(this.$parent.sorting,(function(t,a){return n("option",{key:a,domProps:{value:t.Value}},[e._v(" "+e._s(t.Label)+" ")])})),0)])},$=[],j={name:"Sort",data:function(){return{selected:this.$parent.sortBy}},watch:{selected:function(){this.$parent.sortBy=this.selected}}},I=j,V=(n("1ff7"),Object(i["a"])(I,P,$,!1,null,null,null)),N=V.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hawksearch-layout-options"},[n("i",{staticClass:"fas fa-th-large",attrs:{tabindex:"0"},on:{click:function(t){e.layout="grid"},keypress:[function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.layout="grid"},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;t.preventDefault(),e.layout="grid"}]}}),n("i",{staticClass:"fas fa-th-list",attrs:{tabindex:"0"},on:{click:function(t){e.layout="list"},keypress:[function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.layout="list"},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;t.preventDefault(),e.layout="list"}]}})])},L=[],R={name:"LayoutOptions",data:function(){return{layout:"grid"}},watch:{layout:function(){this.$parent.layout=this.layout}}},T=R,B=(n("d883"),Object(i["a"])(T,E,L,!1,null,null,null)),M=B.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hawksearch-hits"},[n("div",{staticClass:"row"},e._l(this.$parent.filteredItems,(function(t,a){return n("div",{key:a,staticClass:"mb-4 hawksearch-item",class:e.layout},[n("card",{attrs:{image:t.ImageURL,altText:t.ImageAlt,brand:t.Brand,title:t.ItemName,link:t.CustomURL,subtitle:t.ItemName,layout:e.layoutName}})],1)})),0)])},H=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",class:e.layout},[e.hasLink?n("a",{staticClass:"link",attrs:{href:e.link,"aria-label":e.title}}):e._e(),n("div",{staticClass:"card-container"},[n("div",{staticClass:"image"},[e.hasImage?n("img",{attrs:{src:e.image,alt:e.altText}}):e._e()])]),n("div",{staticClass:"content"},[n("div",{staticClass:"brand"},[e._v(e._s(e.brand))]),n("hr"),e.hasSubtitle?n("div",{staticClass:"subtitle"},[e._v(e._s(e.subtitle))]):e._e(),n("div",{staticClass:"title"},[e._v(e._s(e.title))]),e.hasTextLink?[n("div",{staticClass:"learn-more caret-right"},[e._v("Learn more")])]:e._e()],2)])},F=[],J=(n("9911"),{name:"Card",props:{image:String,altText:String,brand:String,title:String,subtitle:String,link:String,layout:String,hasTextLink:{default:!1}},computed:{hasLink:function(){return!!this.$props["link"]},hasImage:function(){return!!this.$props["image"]},hasSubtitle:function(){return!!this.$props["subtitle"]}}}),U=J,q=(n("e60d"),Object(i["a"])(U,D,F,!1,null,null,null)),z=q.exports,G={name:"Hits",components:{card:z},computed:{layout:function(){return"grid"===this.$parent.layout?"col-6 col-md-4":"col-12 col-md-12"},layoutName:function(){return this.$parent.layout}}},K=G,Q=Object(i["a"])(K,A,H,!1,null,null,null),W=Q.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hawksearch-refinements"},[e._l(this.$parent.facets,(function(t,a){return[t.Values.length>0?n("refinement-item",{key:a,staticClass:"refinement-item",attrs:{name:t.Name,paramName:t.ParamName,values:t.Values,isCollapsed:t.IsCollapsedDefault,numberVisible:t.NofVisible}}):e._e()]}))],2)},Y=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"refinement-item"},[n("div",{staticClass:"refinement-item-name",class:{open:e.isVisible},attrs:{tabindex:"0"},on:{click:function(t){e.isVisible=!e.isVisible},keypress:[function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.isVisible=!e.isVisible},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;t.preventDefault(),e.isVisible=!e.isVisible}]}},[e._v(" "+e._s(e.name)+" ")]),n("transition",{attrs:{name:"slide"}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}]},[e._l(e.values.slice(0,e.numberToShow),(function(t,a){return n("li",{key:a},[n("label",[n("input",{attrs:{type:"checkbox"},domProps:{value:t.Value},on:{change:function(n){return e.toggleRefinement(e.paramName,t.Value)}}}),e._v(" "+e._s(t.Label)+" ("+e._s(t.Count)+") ")])])})),e.showShowMore?n("li",{staticClass:"show-more",attrs:{tabindex:"0"},on:{click:e.showMore,keypress:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.showMore(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.preventDefault(),e.showMore(t))}]}},[e._v("show more ")]):e._e()],2)])],1)},ee=[],te=(n("a9e3"),n("ddb0"),{name:"RefinementItem",props:{name:String,paramName:String,value:String,values:Array,numberVisible:Number,isCollapsed:Boolean,checkedItems:Array},data:function(){return{isVisible:!this.isCollapsed,numberToShow:0===this.numberVisible?this.numberOfRefinementsVisible:this.numberVisible}},computed:{showShowMore:function(){return this.numberToShow<=this.values.length}},methods:{toggleRefinement:function(e,t){this.$parent.toggleRefinement(e,t)},showMore:function(){this.numberToShow=1e4,this.showShowMore=!1}}}),ne=te,ae=(n("6190"),Object(i["a"])(ne,Z,ee,!1,null,null,null)),re=ae.exports,se={components:{RefinementItem:re},methods:{toggleRefinement:function(e,t){var n=t;this.$parent.refinements.push(n)}}},ie=se,oe=Object(i["a"])(ie,X,Y,!1,null,null,null),le=oe.exports,ue={name:"Home",components:{Hawksearch:g,Search:S,Sort:N,LayoutOptions:M,Hits:W,Refinements:le}},ce=ue,fe=(n("21bb"),Object(i["a"])(ce,f,d,!1,null,null,null)),de=fe.exports;a["a"].use(c["a"]);var me=[{path:"/",name:"Home",component:de},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],pe=new c["a"]({mode:"history",base:"/hawksearch/dist/",routes:me}),he=pe;a["a"].config.productionTip=!1,a["a"].prototype.api="http://manage.hawksearch.com/sites/demo/?hawkoutput=json",a["a"].prototype.numberOfRefinementsVisible=5,a["a"].prototype.defaultSortBy="titleasc",a["a"].prototype.defaultLayout="grid",new a["a"]({router:he,render:function(e){return e(u)}}).$mount("#app")},6190:function(e,t,n){"use strict";var a=n("a068"),r=n.n(a);r.a},"6d74":function(e,t,n){},a068:function(e,t,n){},d883:function(e,t,n){"use strict";var a=n("33ee"),r=n.n(a);r.a},e589:function(e,t,n){"use strict";var a=n("4365"),r=n.n(a);r.a},e60d:function(e,t,n){"use strict";var a=n("e9ec"),r=n.n(a);r.a},e9ec:function(e,t,n){}});
//# sourceMappingURL=app.78bfc259.js.map