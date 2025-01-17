(()=>{"use strict";var e,t={638:(e,t,o)=>{const r=Vue;var n={class:"overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow h-full"},l={key:0,class:"flex items-center justify-between py-3 text-sm px-6"},a={key:0,class:"font-bold"},i={key:1},u=["href"],s={class:"w-full","data-testid":"resource-table",ref:"table"},c={key:1,class:"w-full border-t border-gray-200 dark:border-gray-700 rounded-b-lg flex justify-center py-3"},d=["href"];function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==m(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var h={key:0,class:"bg-gray-50 dark:bg-gray-800"},g=["id"],f={key:0,class:"td-fit text-center"};const y={name:"TableHeader",props:{fields:{type:Array},shouldShowColumnBorders:Boolean,hasViewColumn:Boolean}};var b=o(262);const v=(0,b.A)(y,[["render",function(e,t,o,n,l,a){return o.fields&&o.fields.length>0?((0,r.openBlock)(),(0,r.createElementBlock)("thead",h,[(0,r.createElementVNode)("tr",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.fields,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("th",{key:t,id:e.id,class:(0,r.normalizeClass)([p(p({},"".concat(e.class),!0),"border-r border-gray-200 dark:border-gray-600",o.shouldShowColumnBorders),"td-fit uppercase text-xxs text-gray-500 tracking-wide pl-5 pr-2 py-2"])},[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(e.data),1)],10,g)})),128)),o.hasViewColumn?((0,r.openBlock)(),(0,r.createElementBlock)("th",f)):(0,r.createCommentVNode)("",!0)])])):(0,r.createCommentVNode)("",!0)}]]);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=w(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==w(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var B=["id","innerHTML"],C={key:0},V=["href"];const x={name:"TableRow",props:{row:{type:Object},tableStyle:String,shouldShowTight:Boolean,shouldShowColumnBorders:Boolean,hasViewColumn:Boolean}},P=(0,b.A)(x,[["render",function(e,t,o,n,l,a){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",{class:(0,r.normalizeClass)([o.row.class,"group"])},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.row.columns,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("td",{key:t,id:e.id,innerHTML:e.data,class:(0,r.normalizeClass)([k(k(k(k(k(k({},"".concat(e.class),!0),"px-6",!0),"py-4",!o.shouldShowTight),"border-r",o.shouldShowColumnBorders),"border-t border-gray-100 dark:border-gray-700",!0),"whitespace-nowrap",!0),"dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"])},null,10,B)})),128)),o.hasViewColumn?((0,r.openBlock)(),(0,r.createElementBlock)("td",{key:0,class:(0,r.normalizeClass)([{"px-6":!0,"py-4":!o.shouldShowTight,"border-r":o.shouldShowColumnBorders,"border-t border-gray-100 dark:border-gray-700":!0,"whitespace-nowrap":!0},"text-center dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"])},[o.row.view?((0,r.openBlock)(),(0,r.createElementBlock)("span",C,[(0,r.createElementVNode)("a",{href:o.row.view,class:"cursor-pointer text-70 hover:text-primary"},t[0]||(t[0]=[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"24",height:"24",class:"inline-block",role:"presentation"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1)]),8,V)])):(0,r.createCommentVNode)("",!0)],2)):(0,r.createCommentVNode)("",!0)],2)}]]);var S={class:"bg-20 border-t border-gray-200 dark:border-gray-700 rounded-b"};const A=LaravelNova;function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function E(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=N(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==N(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const j={name:"Pagination",props:{modelValue:Object,queryKey:""},mixins:[A.Paginatable,A.PerPageable],data:function(){return{allMatchingResourceCount:0,perPage:0,currentPage:1}},computed:{resourceCountLabel:function(){var e=this.perPage*(this.currentPage-1);return this.modelValue.data.length&&"".concat(e+1,"-").concat(e+this.modelValue.data.length," ").concat(this.__("of")," ").concat(this.allMatchingResourceCount)},currentPerPage:function(){return this.perPage},totalPages:function(){return Math.ceil(this.allMatchingResourceCount/this.currentPerPage)},hasNextPage:function(){return this.modelValue&&this.modelValue.next_page_url},hasPreviousPage:function(){return this.modelValue&&this.modelValue.prev_page_url},paginationComponent:function(){return"pagination-".concat(Nova.config.pagination||"links")},path:function(){return this.modelValue.path}},methods:{selectPage:function(e){var t=this,o=this.queryKey;this.currentPage=e,Nova.request().get(this.path,{params:E({},o||"page",e)}).then((function(e){var r=e.data;e.data.cards&&(r=e.data.cards);var n=r.find((function(e){return e.queryKey===o||""===o&&"nova-table-card"===e.component}));t.$emit("update:modelValue",n.paginator),t.$emit("updateRows",n.rows),void 0!==n.paginator&&(t.perPage=n.paginator.per_page,t.allMatchingResourceCount=n.paginator.total),Nova.$emit("resources-loaded")})).catch((function(e){console.error(e)}))}},mounted:function(){this.allMatchingResourceCount=this.modelValue.total,this.perPage=this.modelValue.per_page}},O={props:["card"],components:{TableRow:P,TableHeader:v,Pagination:(0,b.A)(j,[["render",function(e,t,o,n,l,a){var i=(0,r.resolveComponent)("pagination-links");return(0,r.openBlock)(),(0,r.createElementBlock)("div",S,[(0,r.createVNode)(i,{is:a.paginationComponent,"all-matching-resource-count":e.allMatchingResourceCount,"current-resource-count":o.modelValue.data.length,next:a.hasNextPage,page:e.currentPage,pages:a.totalPages,"per-page":e.perPage,previous:a.hasPreviousPage,"resource-count-label":a.resourceCountLabel,onPage:a.selectPage},{default:(0,r.withCtx)((function(){return[a.resourceCountLabel?((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:0,class:(0,r.normalizeClass)([{"ml-auto":"pagination-links"===a.paginationComponent},"text-sm text-80 px-4"])},(0,r.toDisplayString)(a.resourceCountLabel),3)):(0,r.createCommentVNode)("",!0)]})),_:1},8,["is","all-matching-resource-count","current-resource-count","next","page","pages","per-page","previous","resource-count-label","onPage"])])}]])},data:function(){return{rows:[],header:[],title:"",viewAll:null,queryKey:"",paginator:null}},computed:{hasViewColumn:function(){return this.rows.find((function(e){return e.view}))},shouldShowTight:function(){return"tight"===this.card.style},shouldShowColumnBorders:function(){return!!this.card.showBorders},useViewAll:function(){return this.viewAll&&this.viewAll.link},viewAllUseButton:function(){return this.viewAll&&this.viewAll.style&&"button"===this.viewAll.style},viewAllBottomPosition:function(){return this.viewAll&&this.viewAll.position&&"bottom"===this.viewAll.position}},methods:{update:function(e){this.rows=e}},created:function(){var e=this.card,t=e.header,o=e.rows,r=e.title,n=e.paginator,l=e.viewAll,a=e.queryKey;this.header=t,this.title=r,this.rows=o,this.paginator=n,this.viewAll=l,this.queryKey=a}},T=(0,b.A)(O,[["render",function(e,t,o,m,p,h){var g,f,y=(0,r.resolveComponent)("TableHeader"),b=(0,r.resolveComponent)("TableRow"),v=(0,r.resolveComponent)("Pagination");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[p.title||h.useViewAll?((0,r.openBlock)(),(0,r.createElementBlock)("div",l,[p.title?((0,r.openBlock)(),(0,r.createElementBlock)("h1",a,(0,r.toDisplayString)(p.title),1)):(0,r.createCommentVNode)("",!0),h.useViewAll&&!h.viewAllBottomPosition?((0,r.openBlock)(),(0,r.createElementBlock)("div",i,[(0,r.createElementVNode)("a",{class:(0,r.normalizeClass)(h.viewAllUseButton?"flex-shrink-0 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white dark:text-gray-800 inline-flex items-center font-bold px-3 h-8 text-xs":"link-default"),href:p.viewAll.link},(0,r.toDisplayString)(null!==(g=p.viewAll.label)&&void 0!==g?g:"View All"),11,u)])):(0,r.createCommentVNode)("",!0)])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("table",s,[(0,r.createVNode)(y,{fields:p.header,"should-show-column-borders":h.shouldShowColumnBorders,"has-view-column":h.hasViewColumn},null,8,["fields","should-show-column-borders","has-view-column"]),(0,r.createElementVNode)("tbody",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(p.rows,(function(e,t){return(0,r.openBlock)(),(0,r.createBlock)(b,{key:t,row:e,"should-show-tight":h.shouldShowTight,"should-show-column-borders":h.shouldShowColumnBorders,"has-view-column":h.hasViewColumn},null,8,["row","should-show-tight","should-show-column-borders","has-view-column"])})),128))])],512),h.useViewAll&&h.viewAllBottomPosition?((0,r.openBlock)(),(0,r.createElementBlock)("div",c,[(0,r.createElementVNode)("a",{class:(0,r.normalizeClass)(h.viewAllUseButton?"flex-shrink-0 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white dark:text-gray-800 inline-flex items-center font-bold px-3 h-8 text-xs":"link-default"),href:p.viewAll.link},(0,r.toDisplayString)(null!==(f=p.viewAll.label)&&void 0!==f?f:"View All"),11,d)])):(0,r.createCommentVNode)("",!0),p.paginator?((0,r.openBlock)(),(0,r.createBlock)(v,{key:2,modelValue:p.paginator,"onUpdate:modelValue":t[0]||(t[0]=function(e){return p.paginator=e}),"query-key":p.queryKey,onUpdateRows:h.update},null,8,["modelValue","query-key","onUpdateRows"])):(0,r.createCommentVNode)("",!0)])}]]);Nova.booting((function(e,t){e.component("table",T)}))},947:()=>{},262:(e,t)=>{t.A=(e,t)=>{const o=e.__vccOpts||e;for(const[e,r]of t)o[e]=r;return o}}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,o,n,l)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){for(var[o,n,l]=e[c],i=!0,u=0;u<o.length;u++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](o[u])))?o.splice(u--,1):(i=!1,l<a&&(a=l));if(i){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,n,l]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={172:0,405:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,l,[a,i,u]=o,s=0;if(a.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(u)var c=u(r)}for(t&&t(o);s<a.length;s++)l=a[s],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(c)},o=self.webpackChunklaravelwebdev_table=self.webpackChunklaravelwebdev_table||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),r.O(void 0,[405],(()=>r(638)));var n=r.O(void 0,[405],(()=>r(947)));n=r.O(n)})();