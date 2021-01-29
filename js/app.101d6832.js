(function(t){function e(e){for(var a,i,s=e[0],l=e[1],u=e[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],a=!0,i=1;i<o.length;i++){var l=o[i];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},n={app:0},r=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"cb9f9706"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,a){o=n[t]=[e,a]}));e.push(o[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var u=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(c);var o=n[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,o[1](u)}n[t]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/demo-book/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=u;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},2786:function(t,e,o){"use strict";o("b9bd")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=o("5f5b"),r=o("b1e0"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("app-header",{attrs:{title:"BOOK STORE"}}),o("app-modal-detail"),o("app-modal-cart"),o("router-view")],1)},s=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"primary"}},[o("b-navbar-brand",{attrs:{href:"/"}},[o("b",[t._v(t._s(t.title))])]),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticClass:"ml-auto"},[o("b-nav-form",{on:{submit:t.onSubmit}},[o("b-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"},model:{value:t.titleBook,callback:function(e){t.titleBook=e},expression:"titleBook"}}),o("b-button",{staticClass:"my-2 my-sm-0 mr-2",attrs:{size:"sm",variant:"success"},on:{click:t.searchBooks}},[t._v("Search")])],1),o("b-nav-item",{attrs:{active:""},on:{click:t.openCart}},[o("b-button",{attrs:{variant:"primary"}},[t._v(" Your books "),o("b-badge",{attrs:{variant:"light"}},[t._v(t._s(t.yourCart.length)+" ")])],1)],1),o("b-nav-item",{attrs:{active:"Home"===this.$route.name,to:{name:"Home"}}},[t._v(" Home ")]),o("b-nav-item",{attrs:{active:"About"===this.$route.name,to:{name:"About"}}},[t._v(" About ")])],1)],1)],1)],1)},u=[],c=o("5530"),d=o("2f62"),f={name:"HeaderVue",props:{title:String},data:function(){return{titleBook:""}},computed:Object(c["a"])({},Object(d["b"])(["api","yourCart"])),methods:{searchBooks:function(){this.$store.dispatch("getBooks",this.titleBook)},openCart:function(){this.$bvModal.show("modal-your-cart")},onSubmit:function(t){t.preventDefault(),this.searchBooks()}}},v=f,b=(o("2786"),o("2877")),h=Object(b["a"])(v,l,u,!1,null,"9790fad4",null),m=h.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-modal",{attrs:{id:"modal-detail",size:"lg",title:"Detail book","no-stacking":"","hide-footer":""}},[o("b-card",{staticClass:"p-2 mb-2",attrs:{title:t.titleBook,"img-src":t.imageThumbnail,"img-alt":"Image","img-width":"300px","img-height":"300px","img-left":"",tag:"article"}},[o("b-card-text",[o("p",[o("b",[t._v(" "+t._s(t.authorBook)+" ")])]),o("p",[t._v(" "+t._s(t.descriptionBook)+" ")]),o("p",[o("b",[t._v(t._s(t.price)+" ")])])]),o("b-button",{staticClass:"mr-2",attrs:{variant:"primary"},on:{click:function(e){return t.addBookToCart(t.detailBooks)}}},[t._v("Add to cart")]),o("b-button",{attrs:{variant:"info"},on:{click:t.openYourCar}},[t._v(" View cart ")])],1)],1)],1)},g=[],C=(o("a4d3"),o("e01a"),o("a15b"),{name:"ModalDetail",props:{bookDetail:Object},computed:Object(c["a"])(Object(c["a"])({},Object(d["b"])(["api","detailBooks"])),{},{titleBook:function(){var t,e;return null!==(t=null===(e=this.detailBooks)||void 0===e?void 0:e.volumeInfo.title)&&void 0!==t?t:""},imageThumbnail:function(){var t,e,a,n=o("f43c");return null!==(t=null===(e=this.detailBooks)||void 0===e||null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)&&void 0!==t?t:n},descriptionBook:function(){var t,e;return null!==(t=null===(e=this.detailBooks)||void 0===e?void 0:e.volumeInfo.description)&&void 0!==t?t:""},authorBook:function(){var t,e;return null!==(t=null===(e=this.detailBooks)||void 0===e?void 0:e.volumeInfo.authors.join(",  "))&&void 0!==t?t:""},price:function(){var t,e,o,a,n,r,i,s;return"NOT_FOR_SALE"===(null===(t=this.detailBooks)||void 0===t||null===(e=t.saleInfo)||void 0===e?void 0:e.saleability)?"Not for sale":"FREE"===(null===(o=this.detailBooks)||void 0===o||null===(a=o.saleInfo)||void 0===a?void 0:a.saleability)?"FREE":null!==(n="".concat(null===(r=this.detailBooks)||void 0===r||null===(i=r.saleInfo)||void 0===i||null===(s=i.listPrice)||void 0===s?void 0:s.amount.toLocaleString("vi-VN")," VNĐ"))&&void 0!==n?n:"Đang cập nhật"}}),methods:{addBookToCart:function(t){"NOT_FOR_SALE"===t.saleInfo.saleability?alert("Can not add this book to your cart. Please choose other book."):(alert("Success"),this.$store.dispatch("addBookToCart",t))},openYourCar:function(){this.$bvModal.show("modal-your-cart")}}}),E=C,B=Object(b["a"])(E,p,g,!1,null,"6693b929",null),k=B.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-modal",{attrs:{id:"modal-your-cart",size:"lg",title:"Your cart",centered:"","no-stacking":"","hide-footer":""}},[t.items.length>0?o("div",[o("b-table",{attrs:{striped:"",hover:"",items:t.items,fields:t.fields},scopedSlots:t._u([{key:"cell(edit)",fn:function(e){return[o("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"danger"},on:{click:function(o){return t.removeBookById(e.item.id)}}},[t._v(" Remove ")])]}}],null,!1,159610861)})],1):o("div",[o("h3",[t._v("You didn't any book to your cart.")])])])],1)},A=[],y=(o("4160"),o("159b"),{name:"YourCart",computed:Object(c["a"])({},Object(d["b"])(["api","yourCart"])),watch:{yourCart:function(t){var e=this;this.items=[],t.forEach((function(t){var o="FREE"===t.saleInfo.saleability?0:t.saleInfo.listPrice.amount.toLocaleString("vi-VN"),a={name:t.volumeInfo.title,author:t.volumeInfo.authors.join(",  "),price:o,id:t.id};e.items.push(a)}))}},data:function(){return{fields:[{key:"name",sortable:!0},{key:"author",sortable:!0},{key:"price",sortable:!0},{key:"edit",sortable:!1}],items:[]}},methods:{removeBookById:function(t){this.$store.dispatch("removeBookCartById",t)}}}),O=y,S=Object(b["a"])(O,I,A,!1,null,"a1b83bd0",null),R=S.exports,j={name:"App",components:{appHeader:m,appModalDetail:k,appModalCart:R}},w=j,_=(o("034f"),Object(b["a"])(w,i,s,!1,null,null,null)),P=_.exports,M=(o("d3b7"),o("8c4f")),Q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("div",{staticClass:"my-4"},[o("b-button",{staticClass:"mr-2",attrs:{variant:"info"},on:{click:function(e){return t.filterBooks("FREE")}}},[t._v("Free")]),o("b-button",{staticClass:"mr-2",attrs:{variant:"danger"},on:{click:function(e){return t.filterBooks("NOT_FOR_SALE")}}},[t._v("Not for sale")]),o("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(e){return t.filterBooks("FOR_SALE")}}},[t._v("For sale")]),o("b-button",{staticClass:"mr-2",attrs:{variant:"success"},on:{click:function(e){return t.filterBooks("ALL")}}},[t._v("All")])],1),t.books.length>0?o("div",[o("transition-group",{staticClass:"gallary d-flex flex-wrap justify-content-center",attrs:{name:"list",tag:"p","data-aos":"fade-up","data-aos-delay":"300"}},t._l(t.books,(function(e){return o("div",{key:e.id,staticClass:"container__card m-2",staticStyle:{position:"relative"}},[o("div",{staticClass:"card",style:{background:"url("+t.getThumbnailImage(e.volumeInfo.imageLinks)+") center center/cover"}}),o("div",{staticClass:"text"},[o("div",{staticClass:"bold"},[t._v(t._s(e.volumeInfo.title))]),o("span",{staticClass:"highlight"},t._l(e.volumeInfo.authors,(function(e){return o("div",{key:e},[t._v(" "+t._s(e)+" ")])})),0)]),o("div",{staticClass:"gallary__button",on:{click:function(o){return t.showDetailBook(e)}}},[t._v("LEARN MORE")])])})),0)],1):t._e()])},Y=[],T={name:"Home",created:function(){this.$store.dispatch("getBooks","programming")},computed:Object(c["a"])({},Object(d["b"])(["books"])),methods:{showDetailBook:function(t){this.$bvModal.show("modal-detail"),this.$store.dispatch("setDetailBook",t)},filterBooks:function(t){this.$store.dispatch("filterBookMenu",t)},getThumbnailImage:function(t){var e,a=o("f43c");return null!==(e=null===t||void 0===t?void 0:t.thumbnail)&&void 0!==e?e:a}}},L=T,x=(o("e1e0"),Object(b["a"])(L,Q,Y,!1,null,"0dd4f64b",null)),H=x.exports;a["default"].use(M["a"]);var W=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return o.e("chunk-2d22d746").then(o.bind(null,"f820"))}}],F=new M["a"]({mode:"history",base:"/demo-book/",routes:W}),G=F,N=(o("99af"),o("4de4"),o("2909")),X=(o("96cf"),o("1da1")),V=o("bc3a");a["default"].use(d["a"]);var D=new d["a"].Store({state:{api:{getBooks:"https://www.googleapis.com/books/v1/volumes?q="},books:[],allBooks:[],detailBooks:null,yourCart:[]},mutations:{SET_BOOKS:function(t,e){t.books=e},SET_ALL_BOOKS:function(t,e){t.allBooks=e},SET_DETAIL_BOOK:function(t,e){t.detailBooks=e},SET_YOUR_CART:function(t,e){t.yourCart=e}},actions:{getBooks:function(t,e){var o=this;return Object(X["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.next=3,V.get("".concat(o.state.api.getBooks).concat(e,"+intitile")).then((function(t){return t.data})).catch((function(t){return alert("".concat(t.statusCode," ").concat(t.message)),"error"}));case 3:r=a.sent,"error"!==r&&(n("SET_BOOKS",r.items),n("SET_ALL_BOOKS",r.items));case 5:case"end":return a.stop()}}),a)})))()},setDetailBook:function(t,e){var o=t.commit;o("SET_DETAIL_BOOK",e)},addBookToCart:function(t,e){var o=t.commit,a=[].concat(Object(N["a"])(this.state.yourCart),[e]);o("SET_YOUR_CART",a)},filterBookMenu:function(t,e){var o=t.commit;if("ALL"===e)o("SET_BOOKS",this.state.allBooks);else{var a=this.state.allBooks.filter((function(t){return t.saleInfo.saleability===e}));o("SET_BOOKS",a)}},removeBookCartById:function(t,e){var o=t.commit,a=this.state.yourCart.filter((function(t){return t.id!==e}));o("SET_YOUR_CART",a)}},getters:{books:function(t){return t.books},detailBooks:function(t){return t.detailBooks},yourCart:function(t){return t.yourCart}},modules:{}});o("f9e3"),o("2dd8");a["default"].config.productionTip=!1,a["default"].use(n["a"]),a["default"].use(r["a"]),new a["default"]({router:G,store:D,render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,e,o){},"9f3c":function(t,e,o){},b9bd:function(t,e,o){},e1e0:function(t,e,o){"use strict";o("9f3c")},f43c:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.101d6832.js.map