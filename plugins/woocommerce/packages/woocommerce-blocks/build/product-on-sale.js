this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-on-sale"]=function(e){function t(t){for(var n,i,u=t[0],l=t[1],a=t[2],b=0,p=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,a||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var l=r[u];0!==c[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},c={30:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var s=l;return o.push([702,0]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},106:function(e,t){},107:function(e,t){!function(){e.exports=this.wp.coreData}()},111:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(3);r(2),t.a=function(e){var t=e.value,r=e.setAttributes;return Object(n.createElement)(o.SelectControl,{label:Object(c.__)("Order products by",'woocommerce'),value:t,options:[{label:Object(c.__)("Newness - newest first",'woocommerce'),value:"date"},{label:Object(c.__)("Price - low to high",'woocommerce'),value:"price_asc"},{label:Object(c.__)("Price - high to low",'woocommerce'),value:"price_desc"},{label:Object(c.__)("Rating - highest first",'woocommerce'),value:"rating"},{label:Object(c.__)("Sales - most first",'woocommerce'),value:"popularity"},{label:Object(c.__)("Title - alphabetical",'woocommerce'),value:"title"},{label:Object(c.__)("Menu Order",'woocommerce'),value:"menu_order"}],onChange:function(e){return r({orderby:e})}})}},116:function(e,t){},14:function(e,t,r){"use strict";r.d(t,"q",(function(){return o})),r.d(t,"p",(function(){return i})),r.d(t,"o",(function(){return u})),r.d(t,"l",(function(){return a})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return b})),r.d(t,"i",(function(){return p})),r.d(t,"h",(function(){return d})),r.d(t,"n",(function(){return g})),r.d(t,"m",(function(){return f})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return O})),r.d(t,"g",(function(){return E})),r.d(t,"j",(function(){return m})),r.d(t,"a",(function(){return w})),r.d(t,"k",(function(){return j})),r.d(t,"b",(function(){return y})),r.d(t,"t",(function(){return x})),r.d(t,"u",(function(){return _})),r.d(t,"r",(function(){return k})),r.d(t,"s",(function(){return P}));var n,c=r(5),o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",u=o.pluginUrl+"build/",l=o.buildPhase,a=null===(n=c.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,s=c.STORE_PAGES.checkout.id,b=c.STORE_PAGES.checkout.permalink,p=c.STORE_PAGES.privacy.permalink,d=c.STORE_PAGES.privacy.title,g=c.STORE_PAGES.terms.permalink,f=c.STORE_PAGES.terms.title,h=c.STORE_PAGES.cart.id,O=c.STORE_PAGES.cart.permalink,E=c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),m=Object(c.getSetting)("shippingCountries",{}),w=Object(c.getSetting)("allowedCountries",{}),j=Object(c.getSetting)("shippingStates",{}),y=Object(c.getSetting)("allowedStates",{}),v=r(25),x=function(e,t){if(l>2)return Object(v.registerBlockType)(e,t)},_=function(e,t){if(l>1)return Object(v.registerBlockType)(e,t)},k=function(){return l>2},P=function(){return l>1}},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),c=Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},Object(n.createElement)("title",null,"Grid Block Preview"),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}))},19:function(e,t){!function(){e.exports=this.wp.apiFetch}()},21:function(e,t){!function(){e.exports=this.wp.data}()},22:function(e,t){!function(){e.exports=this.wp.url}()},23:function(e,t){!function(){e.exports=this.wp.compose}()},24:function(e,t){!function(){e.exports=this.wp.blockEditor}()},25:function(e,t){!function(){e.exports=this.wp.blocks}()},28:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},29:function(e,t){!function(){e.exports=this.moment}()},3:function(e,t){!function(){e.exports=this.wp.components}()},32:function(e,t){!function(){e.exports=this.wp.primitives}()},34:function(e,t){!function(){e.exports=this.wp.dataControls}()},39:function(e,t,r){"use strict";r.d(t,"h",(function(){return d})),r.d(t,"e",(function(){return g})),r.d(t,"b",(function(){return f})),r.d(t,"i",(function(){return h})),r.d(t,"f",(function(){return O})),r.d(t,"c",(function(){return E})),r.d(t,"d",(function(){return m})),r.d(t,"g",(function(){return w})),r.d(t,"a",(function(){return j}));var n=r(4),c=r.n(n),o=r(22),i=r(19),u=r.n(i),l=r(6),a=r(5),s=r(14);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,c=void 0===n?"":n,i=e.queryArgs,a=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,c=void 0===n?"":n,i=e.queryArgs,u=void 0===i?[]:i,l=s.q.productCount>100,a={per_page:l?100:0,catalog_visibility:"any",search:c,orderby:"title",order:"asc"},b=[Object(o.addQueryArgs)("/wc/store/products",p(p({},a),u))];return l&&r.length&&b.push(Object(o.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),b}({selected:r,search:c,queryArgs:void 0===i?[]:i});return Promise.all(a.map((function(e){return u()({path:e})}))).then((function(e){return Object(l.uniqBy)(Object(l.flatten)(e),"id").map((function(e){return p(p({},e),{},{parent:0})}))})).catch((function(e){throw e}))},g=function(e){return u()({path:"/wc/store/products/".concat(e)})},f=function(){return u()({path:"wc/store/products/attributes"})},h=function(e){return u()({path:"wc/store/products/attributes/".concat(e,"/terms")})},O=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,c=Object(a.getSetting)("limitTags",!1),i=[Object(o.addQueryArgs)("wc/store/products/tags",{per_page:c?100:0,orderby:c?"count":"name",order:c?"desc":"asc",search:n})];return c&&r.length&&i.push(Object(o.addQueryArgs)("wc/store/products/tags",{include:r})),i}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return u()({path:e})}))).then((function(e){return Object(l.uniqBy)(Object(l.flatten)(e),"id")}))},E=function(e){return u()({path:Object(o.addQueryArgs)("wc/store/products/categories",p({per_page:0},e))})},m=function(e){return u()({path:"wc/store/products/categories/".concat(e)})},w=function(e){return u()({path:Object(o.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})})},j=function(e,t){if(!e.title.raw)return e.slug;var r=1===t.filter((function(t){return t.title.raw===e.title.raw})).length;return e.title.raw+(r?"":" - ".concat(e.slug))}},41:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return a}));var n=r(30),c=r.n(n),o=r(10),i=r.n(o),u=r(1),l=function(){var e=c()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(_x){return e.apply(this,arguments)}}(),a=function(e){if(e.data&&"rest_invalid_param"===e.code){var t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(u.__)("Something went wrong. Please contact us to get assistance.",'woocommerce')}},46:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},47:function(e,t,r){"use strict";var n=r(0),c=r(1),o=(r(2),r(46));t.a=function(e){var t,r,i,u=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=u).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(c.__)("The following error was returned",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(o.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(c.__)("The following error was returned from the API",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(o.escapeHTML)(r))):r:Object(c.__)("An unknown error occurred which prevented the block from being updated.",'woocommerce')))}},49:function(e,t){!function(){e.exports=this.wp.keycodes}()},5:function(e,t){!function(){e.exports=this.wc.wcSettings}()},53:function(e,t){!function(){e.exports=this.wp.deprecated}()},55:function(e,t){!function(){e.exports=this.wp.hooks}()},6:function(e,t){!function(){e.exports=this.lodash}()},62:function(e,t,r){"use strict";var n=r(4),c=r.n(n),o=r(20),i=r.n(o),u=r(0),l=["srcElement","size"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,o=i()(e,l);return Object(u.isValidElement)(t)?Object(u.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},o)):null}},702:function(e,t,r){e.exports=r(802)},703:function(e,t){},704:function(e,t,r){"use strict";var n=r(0),c=r(32),o=Object(n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"}),Object(n.createElement)("circle",{cx:"6.5",cy:"6.5",r:"1.5"}),Object(n.createElement)("path",{d:"M8.9 12.55c0 .57.23 1.07.6 1.45l3.5 3.5 3.5-3.5c.37-.37.6-.89.6-1.45 0-1.13-.92-2.05-2.05-2.05-.57 0-1.08.23-1.45.6l-.6.6-.6-.59c-.37-.38-.89-.61-1.45-.61-1.13 0-2.05.92-2.05 2.05z"}));t.a=o},71:function(e,t){!function(){e.exports=this.wp.serverSideRender}()},76:function(e,t){!function(){e.exports=this.wp.dom}()},77:function(e,t){!function(){e.exports=this.ReactDOM}()},8:function(e,t){!function(){e.exports=this.React}()},80:function(e,t){!function(){e.exports=this.wp.viewport}()},802:function(e,t,r){"use strict";r.r(t);var n=r(4),c=r.n(n),o=r(0),i=r(1),u=r(25),l=r(6),a=r(62),s=r(704),b=r(15),p=r.n(b),d=r(16),g=r.n(d),f=r(17),h=r.n(f),O=r(18),E=r.n(O),m=r(9),w=r.n(m),j=r(3),y=r(24),v=r(71),x=r.n(v),_=(r(2),r(83)),k=r(84),P=r(87),S=r(111),C=r(161),R=r(5);var A=function(){return Object(o.createElement)(j.Placeholder,{icon:Object(o.createElement)(a.a,{srcElement:s.a}),label:Object(i.__)("On Sale Products",'woocommerce'),className:"wc-block-product-on-sale"},Object(i.__)("This block shows on-sale products. There are currently no discounted products in your store.",'woocommerce'))},T=function(e){h()(c,e);var t,r,n=(t=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=w()(t);if(r){var c=w()(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return E()(this,e)});function c(){return p()(this,c),n.apply(this,arguments)}return g()(c,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,n=t.categories,c=t.catOperator,u=t.columns,l=t.contentVisibility,a=t.rows,s=t.orderby,b=t.alignButtons;return Object(o.createElement)(y.InspectorControls,{key:"inspector"},Object(o.createElement)(j.PanelBody,{title:Object(i.__)("Layout",'woocommerce'),initialOpen:!0},Object(o.createElement)(k.a,{columns:u,rows:a,alignButtons:b,setAttributes:r,minColumns:Object(R.getSetting)("min_columns",1),maxColumns:Object(R.getSetting)("max_columns",6),minRows:Object(R.getSetting)("min_rows",1),maxRows:Object(R.getSetting)("max_rows",6)})),Object(o.createElement)(j.PanelBody,{title:Object(i.__)("Content",'woocommerce'),initialOpen:!0},Object(o.createElement)(_.a,{settings:l,onChange:function(e){return r({contentVisibility:e})}})),Object(o.createElement)(j.PanelBody,{title:Object(i.__)("Order By",'woocommerce'),initialOpen:!1},Object(o.createElement)(S.a,{setAttributes:r,value:s})),Object(o.createElement)(j.PanelBody,{title:Object(i.__)("Filter by Product Category",'woocommerce'),initialOpen:!1},Object(o.createElement)(P.a,{selected:n,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));r({categories:t})},operator:c,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:e})}})))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.name;return t.isPreview?C.a:Object(o.createElement)(o.Fragment,null,this.getInspectorControls(),Object(o.createElement)(j.Disabled,null,Object(o.createElement)(x.a,{block:r,attributes:t,EmptyResponsePlaceholder:A})))}}]),c}(o.Component),B=(r(703),r(95));function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(u.registerBlockType)("woocommerce/product-on-sale",{title:Object(i.__)("On Sale Products",'woocommerce'),icon:{src:Object(o.createElement)(a.a,{srcElement:s.a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce",'woocommerce')],description:Object(i.__)("Display a grid of products currently on sale.",'woocommerce'),supports:{align:["wide","full"],html:!1},attributes:G(G({},B.a),{},{orderby:{type:"string",default:"date"}}),example:{attributes:{isPreview:!0}},transforms:{from:[{type:"block",blocks:Object(l.without)(B.b,"woocommerce/product-on-sale"),transform:function(e){return Object(u.createBlock)("woocommerce/product-on-sale",e)}}]},edit:function(e){return Object(o.createElement)(T,e)},save:function(){return null}})},83:function(e,t,r){"use strict";var n=r(4),c=r.n(n),o=r(0),i=r(1),u=(r(2),r(3));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onChange,r=e.settings,n=r.button,c=r.price,l=r.rating,s=r.title;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(u.ToggleControl,{label:Object(i.__)("Product title",'woocommerce'),help:s?Object(i.__)("Product title is visible.",'woocommerce'):Object(i.__)("Product title is hidden.",'woocommerce'),checked:s,onChange:function(){return t(a(a({},r),{},{title:!s}))}}),Object(o.createElement)(u.ToggleControl,{label:Object(i.__)("Product price",'woocommerce'),help:c?Object(i.__)("Product price is visible.",'woocommerce'):Object(i.__)("Product price is hidden.",'woocommerce'),checked:c,onChange:function(){return t(a(a({},r),{},{price:!c}))}}),Object(o.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating",'woocommerce'),help:l?Object(i.__)("Product rating is visible.",'woocommerce'):Object(i.__)("Product rating is hidden.",'woocommerce'),checked:l,onChange:function(){return t(a(a({},r),{},{rating:!l}))}}),Object(o.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button",'woocommerce'),help:n?Object(i.__)("Add to Cart button is visible.",'woocommerce'):Object(i.__)("Add to Cart button is hidden.",'woocommerce'),checked:n,onChange:function(){return t(a(a({},r),{},{button:!n}))}}))}},84:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(6),i=(r(2),r(3));t.a=function(e){var t=e.columns,r=e.rows,u=e.setAttributes,l=e.alignButtons,a=e.minColumns,s=void 0===a?1:a,b=e.maxColumns,p=void 0===b?6:b,d=e.minRows,g=void 0===d?1:d,f=e.maxRows,h=void 0===f?6:f;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(c.__)("Columns",'woocommerce'),value:t,onChange:function(e){var t=Object(o.clamp)(e,s,p);u({columns:Number.isNaN(t)?"":t})},min:s,max:p}),Object(n.createElement)(i.RangeControl,{label:Object(c.__)("Rows",'woocommerce'),value:r,onChange:function(e){var t=Object(o.clamp)(e,g,h);u({rows:Number.isNaN(t)?"":t})},min:g,max:h}),Object(n.createElement)(i.ToggleControl,{label:Object(c.__)("Align Last Block",'woocommerce'),help:l?Object(c.__)("The last inner block will be aligned vertically.",'woocommerce'):Object(c.__)("The last inner block will follow other content.",'woocommerce'),checked:l,onChange:function(){return u({alignButtons:!l})}}))}},86:function(e,t){!function(){e.exports=this.wp.date}()},87:function(e,t,r){"use strict";var n=r(11),c=r.n(n),o=r(0),i=r(1),u=(r(2),r(45)),l=r(3),a=r(30),s=r.n(a),b=r(15),p=r.n(b),d=r(16),g=r.n(d),f=r(12),h=r.n(f),O=r(17),E=r.n(O),m=r(18),w=r.n(m),j=r(9),y=r.n(j),v=r(10),x=r.n(v),_=r(23),k=r(39),P=r(41);var S=Object(_.createHigherOrderComponent)((function(e){return function(t){E()(u,t);var r,n,i=(r=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y()(r);if(n){var c=y()(this).constructor;e=Reflect.construct(t,arguments,c)}else e=t.apply(this,arguments);return w()(this,e)});function u(){var e;return p()(this,u),(e=i.apply(this,arguments)).state={error:null,loading:!1,categories:[]},e.loadCategories=e.loadCategories.bind(h()(e)),e}return g()(u,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var e=this;this.setState({loading:!0}),Object(k.c)().then((function(t){e.setState({categories:t,loading:!1,error:null})})).catch(function(){var t=s()(x.a.mark((function t(r){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.a)(r);case 2:n=t.sent,e.setState({categories:[],loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(_x){return t.apply(this,arguments)}}())}},{key:"render",value:function(){var t=this.state,r=t.error,n=t.loading,i=t.categories;return Object(o.createElement)(e,c()({},this.props,{error:r,isLoading:n,categories:i}))}}]),u}(o.Component)}),"withCategories"),C=r(47),R=r(7),A=r.n(R),T=(r(116),function(e){var t=e.categories,r=e.error,n=e.isLoading,a=e.onChange,s=e.onOperatorChange,b=e.operator,p=e.selected,d=e.isCompact,g=e.isSingle,f=e.showReviewCount,h={clear:Object(i.__)("Clear all product categories",'woocommerce'),list:Object(i.__)("Product Categories",'woocommerce'),noItems:Object(i.__)("Your store doesn't have any product categories.",'woocommerce'),search:Object(i.__)("Search for product categories",'woocommerce'),selected:function(e){return Object(i.sprintf)(
/* translators: %d is the count of selected categories. */
Object(i._n)("%d category selected","%d categories selected",e,'woocommerce'),e)},updated:Object(i.__)("Category search results updated.",'woocommerce')};return r?Object(o.createElement)(C.a,{error:r}):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(u.b,{className:"woocommerce-product-categories",list:t,isLoading:n,selected:p.map((function(e){return t.find((function(t){return t.id===e}))})).filter(Boolean),onChange:a,renderItem:function(e){var t=e.item,r=e.search,n=e.depth,l=void 0===n?0:n,a=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name,s=f?Object(i.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
Object(i._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",t.review_count,'woocommerce'),a,t.review_count):Object(i.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of products for the item. */
Object(i._n)("%1$s, has %2$d product","%1$s, has %2$d products",t.count,'woocommerce'),a,t.count),b=f?Object(i.sprintf)(
/* translators: %d is the count of reviews. */
Object(i._n)("%d review","%d reviews",t.review_count,'woocommerce'),t.review_count):Object(i.sprintf)(
/* translators: %d is the count of products. */
Object(i._n)("%d product","%d products",t.count,'woocommerce'),t.count);return Object(o.createElement)(u.c,c()({className:A()("woocommerce-product-categories__item","has-count",{"is-searching":r.length>0,"is-skip-level":0===l&&0!==t.parent})},e,{countLabel:b,"aria-label":s}))},messages:h,isCompact:d,isHierarchical:!0,isSingle:g}),!!s&&Object(o.createElement)("div",{className:p.length<2?"screen-reader-text":""},Object(o.createElement)(l.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching",'woocommerce'),help:Object(i.__)("Pick at least two categories to use this setting.",'woocommerce'),value:b,onChange:s,options:[{label:Object(i.__)("Any selected categories",'woocommerce'),value:"any"},{label:Object(i.__)("All selected categories",'woocommerce'),value:"all"}]})))});T.defaultProps={operator:"any",isCompact:!1,isSingle:!1},t.a=S(T)},95:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var n=r(5),c=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:Object(n.getSetting)("default_columns",3)},rows:{type:"number",default:Object(n.getSetting)("default_rows",3)},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}}});