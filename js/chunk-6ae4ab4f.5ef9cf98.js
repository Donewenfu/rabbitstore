(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ae4ab4f"],{"051e":function(e,t,c){"use strict";c("7281")},"083a":function(e,t,c){"use strict";var o=c("0d51"),a=TypeError;e.exports=function(e,t){if(!delete e[t])throw a("Cannot delete property "+o(t)+" of "+o(e))}},"21cd":function(e,t,c){},"3c65":function(e,t,c){"use strict";var o=c("23e7"),a=c("7b0b"),n=c("07fa"),l=c("3a34"),r=c("083a"),s=c("3511"),i=1!==[].unshift(0),d=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();o({target:"Array",proto:!0,arity:1,forced:i||d},{unshift:function(e){var t=a(this),c=n(t),o=arguments.length;if(o){s(c+o);var i=c;while(i--){var d=i+o;i in t?t[d]=t[i]:r(t,d)}for(var u=0;u<o;u++)t[u]=arguments[u]}return l(t,c+o)}})},"3ce8":function(e,t,c){},"3d36":function(e,t,c){"use strict";var o=c("7a23");const a=e=>(Object(o["pushScopeId"])("data-v-023f341d"),e=e(),Object(o["popScopeId"])(),e),n={class:"product-img"},l={alt:""},r={class:"product-title"},s={class:"ellipsis"},i={class:"product-desc"},d={class:"ellipsis-2"},u={class:"product-price"},m=a(()=>Object(o["createElementVNode"])("div",{class:"findsame"},[Object(o["createElementVNode"])("p",null,"找相似"),Object(o["createElementVNode"])("p",null,"发现更多宝贝")],-1));function b(e,t,c,a,b,p){const j=Object(o["resolveComponent"])("rprice"),O=Object(o["resolveDirective"])("lazy");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"r-mainproduct-components",onClick:t[0]||(t[0]=(...e)=>a.goUrl&&a.goUrl(...e))},[Object(o["createElementVNode"])("div",n,[Object(o["withDirectives"])(Object(o["createElementVNode"])("img",l,null,512),[[O,c.productData.picture]])]),Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("p",s,Object(o["toDisplayString"])(c.productData.name),1)]),Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("p",d,Object(o["toDisplayString"])(c.productData.desc),1)]),Object(o["createElementVNode"])("div",u,[Object(o["createVNode"])(j,{price:c.productData.price,bold:"700"},null,8,["price"])]),m])}c("14d9");var p=c("6605"),j={name:"rmainproduct",props:{productData:{type:Object,default:()=>({})}},setup(e){const t=Object(p["d"])(),c=()=>{t.push({path:"/goodsDetail/"+e.productData.id})};return{goUrl:c}}},O=(c("bf2a"),c("d959")),v=c.n(O);const g=v()(j,[["render",b],["__scopeId","data-v-023f341d"]]);t["a"]=g},4292:function(e,t,c){},"42e0":function(e,t,c){},"58b4":function(e,t,c){},"5b26":function(e,t,c){"use strict";c("d5fe")},"5f3f":function(e,t,c){"use strict";var o=c("7a23");const a=e=>(Object(o["pushScopeId"])("data-v-59201670"),e=e(),Object(o["popScopeId"])(),e),n=["src"],l={key:1,class:"recommend-product-list"},r={key:0,class:"r-swiper-item"},s=["src"],i={key:0,class:"next-previous"},d=a(()=>Object(o["createElementVNode"])("i",{class:"iconfont icon-previous-icon"},null,-1)),u=[d],m=a(()=>Object(o["createElementVNode"])("i",{class:"iconfont icon-next-icon"},null,-1)),b=[m],p={class:"r-circle-dot"},j=["onClick"];function O(e,t,c,a,d,m){const O=Object(o["resolveComponent"])("rmainproduct");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"r-swiper-components",style:Object(o["normalizeStyle"])(a.swiperStyle),onMouseenter:t[3]||(t[3]=(...e)=>a.stopSwiper&&a.stopSwiper(...e)),onMouseleave:t[4]||(t[4]=(...e)=>a.startSwiper&&a.startSwiper(...e))},[Object(o["createElementVNode"])("div",{class:"swiper-content",style:Object(o["normalizeStyle"])(a.swiperAnimatedStyle),onTransitionend:t[0]||(t[0]=(...e)=>a.endtransEnd&&a.endtransEnd(...e))},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.swiperData,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"r-swiper-item",key:t},[e.imgUrl?(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:0,src:e.imgUrl,alt:""},null,8,n)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(O,{key:t,productData:e},null,8,["productData"]))),128))]))]))),128)),c.swiperData.length>1&&c.swiperData[0].imgUrl?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("img",{src:c.swiperData[0].imgUrl,alt:""},null,8,s)])):Object(o["createCommentVNode"])("",!0)],36),c.showPageicon?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[0!=a.swiperCurrent?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:"previous-icon icon",onClick:t[1]||(t[1]=e=>a.changeSwiper("previous"))},u)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",{class:"next-icon icon",onClick:t[2]||(t[2]=e=>a.changeSwiper("next"))},b)])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",p,[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.swiperData,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e.id,class:Object(o["normalizeClass"])(a.swiperCurrent===t?"active":""),onClick:e=>a.changeDot(t)},null,10,j))),128))])])],36)}var v=c("3d36"),g={name:"rswiper",props:{width:{type:Number,default:1052},height:{type:[Number,String],default:"426px"},swiperData:{type:Array,default(){return[]}},durationTime:{type:Number,default:2e3},isAnimated:{type:Boolean,default:!0},showPageicon:{type:Boolean,default:!0}},setup(e){const t=Object(o["ref"])(!1),c=Object(o["ref"])(0),a=Object(o["ref"])(null),n=Object(o["ref"])(!0),l=Object(o["computed"])(()=>({width:e.width+"px",height:e.height+"px"})),r=e=>{c.value=e},s=()=>{t.value=!1,i()},i=()=>{clearInterval(a.value),a.value=setInterval(()=>{const t=e.isAnimated?e.swiperData.length:e.swiperData.length-1;c.value===t?(c.value=0,n.value=!1):(c.value++,n.value=!0)},e.durationTime)},d=()=>{c.value===e.swiperData.length&&(c.value=0,n.value=!1)},u=()=>{t.value=!0,clearInterval(a.value)},m=Object(o["computed"])(()=>({transform:`translateX(-${c.value*e.width}px)`,width:(e.swiperData.length+(e.isAnimated?1:0))*e.width+"px","transition-duration":n.value&&e.isAnimated?".3s":""})),b=t=>{n.value=!0;const o=e.isAnimated?e.swiperData.length:e.swiperData.length-1;"next"===t?c.value<o&&c.value++:c.value>0&&c.value--};return Object(o["onMounted"])(()=>{i(),n.value=!1}),Object(o["onUnmounted"])(()=>{clearInterval(a.value)}),{swiperStyle:l,showNextPrevious:t,changeSwiper:b,swiperCurrent:c,swiperAnimatedStyle:m,changeDot:r,endtransEnd:d,stopSwiper:u,startSwiper:s}},components:{rmainproduct:v["a"]}},f=(c("9646"),c("d959")),k=c.n(f);const E=k()(g,[["render",O],["__scopeId","data-v-59201670"]]);t["a"]=E},7281:function(e,t,c){},7732:function(e,t,c){"use strict";c.r(t);var o=c("7a23");const a=e=>(Object(o["pushScopeId"])("data-v-03220952"),e=e(),Object(o["popScopeId"])(),e),n={class:"goods-detail-page"},l={key:0,class:"container"},r={class:"product-bread"},s={class:"product-info box"},i={class:"left-image"},d={class:"right-spec"},u={class:"product-name"},m={class:"product-desc"},b={class:"product-price-area"},p={class:"product-server"},j=a(()=>Object(o["createElementVNode"])("li",null,[Object(o["createElementVNode"])("p",null,"促销"),Object(o["createElementVNode"])("span",null,"12月好物放送，App领券购买直降120元")],-1)),O=a(()=>Object(o["createElementVNode"])("p",null,"配送",-1)),v=a(()=>Object(o["createElementVNode"])("span",null,"配送至",-1)),g=a(()=>Object(o["createElementVNode"])("li",null,[Object(o["createElementVNode"])("p",null,"服务"),Object(o["createElementVNode"])("div",{class:"server-list"},[Object(o["createElementVNode"])("span",null,"无忧退货"),Object(o["createElementVNode"])("span",null,"多块好省"),Object(o["createElementVNode"])("span",null,"快速发货"),Object(o["createElementVNode"])("a",{href:"javascript:;"},"查看详情")])],-1)),f={class:"product-sku-area"},k={class:"product-same box"},E={class:"product-detail-info"},h={class:"left-detail"},N={class:"right-product"},V=a(()=>Object(o["createElementVNode"])("div",{class:"title"},[Object(o["createElementVNode"])("p",null,"24小时热榜"),Object(o["createElementVNode"])("i",{class:"iconfont icon-remenhot"})],-1)),B={class:"hotlist"},y={key:1,class:"loading-area container"},C={class:"container inner-logo"};function D(e,t,c,a,D,w){const S=Object(o["resolveComponent"])("rgoodsdetailbread"),x=Object(o["resolveComponent"])("rgoodsimage"),I=Object(o["resolveComponent"])("rgoodsintroduce"),_=Object(o["resolveComponent"])("rprice"),T=Object(o["resolveComponent"])("rselectcity"),L=Object(o["resolveComponent"])("rgoodssku"),P=Object(o["resolveComponent"])("rcounter"),z=Object(o["resolveComponent"])("rbutton"),F=Object(o["resolveComponent"])("goodsrecommend"),A=Object(o["resolveComponent"])("goodstabs"),$=Object(o["resolveComponent"])("rmainproduct"),M=Object(o["resolveComponent"])("rloadinglogo");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[a.loading?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(S,{goodsData:a.goods},null,8,["goodsData"])]),Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])(x,{images:a.goods.mainPictures},null,8,["images"]),Object(o["createVNode"])(I)]),Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("div",u,Object(o["toDisplayString"])(a.goods.name),1),Object(o["createElementVNode"])("div",m,Object(o["toDisplayString"])(a.goods.desc),1),Object(o["createElementVNode"])("div",b,[Object(o["createVNode"])(_,{price:a.goods.price,size:"26"},null,8,["price"]),Object(o["createVNode"])(_,{price:a.goods.oldPrice,"is-line":"",size:"16"},null,8,["price"])]),Object(o["createElementVNode"])("div",p,[Object(o["createElementVNode"])("ul",null,[j,Object(o["createElementVNode"])("li",null,[O,v,Object(o["createVNode"])(T,{onChange:a.selectCity,fullLocation:a.fullLocation},null,8,["onChange","fullLocation"])]),g])]),Object(o["createElementVNode"])("div",f,[Object(o["createVNode"])(L,{goods:a.goods,onChange:a.changeSku},null,8,["goods","onChange"]),Object(o["createVNode"])(P,{modelValue:a.count,"onUpdate:modelValue":t[0]||(t[0]=e=>a.count=e),max:a.goods.inventory},null,8,["modelValue","max"]),Object(o["createVNode"])(z,{onClick:a.addCart,loading:a.addloading,disabled:a.addloading,"loading-text":"加入中"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("加入购物车")]),_:1},8,["onClick","loading","disabled"])])])]),Object(o["createElementVNode"])("div",k,[Object(o["createVNode"])(F)]),Object(o["createElementVNode"])("div",E,[Object(o["createElementVNode"])("div",h,[Object(o["createVNode"])(A)]),Object(o["createElementVNode"])("div",N,[V,Object(o["createElementVNode"])("div",B,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.hotproductData,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])($,{key:t,productData:e},null,8,["productData"]))),128))])])])])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",y,[Object(o["createElementVNode"])("div",C,[Object(o["createVNode"])(M)])]))])}const w={class:"r-goodsdetailbread"};function S(e,t,c,a,n,l){const r=Object(o["resolveComponent"])("rbreaditem"),s=Object(o["resolveComponent"])("rbread");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",w,[Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{to:"/"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("首页")]),_:1}),c.goodsData?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:0,to:"/category/sub/"+c.goodsData.categories[1].id},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(c.goodsData.categories[1].name),1)]),_:1},8,["to"])):Object(o["createCommentVNode"])("",!0),c.goodsData?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:1,to:"/category/sub/"+c.goodsData.categories[0].id},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(c.goodsData.categories[0].name),1)]),_:1},8,["to"])):Object(o["createCommentVNode"])("",!0),c.goodsData?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:2},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(c.goodsData.name),1)]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1})])}var x={name:"rgoodsdetailbread",props:{goodsData:{type:Object,default:()=>{}}}},I=c("d959"),_=c.n(I);const T=_()(x,[["render",S]]);var L=T;const P={class:"r-goodsintroduce-components"},z=Object(o["createStaticVNode"])('<ul data-v-397fc176><li data-v-397fc176><h2 data-v-397fc176>销量人气</h2><p data-v-397fc176>200+</p><div class="bottom-desc" data-v-397fc176><i class="iconfont icon-xiaoliang" data-v-397fc176></i><span data-v-397fc176>销量人气</span></div></li><li data-v-397fc176><h2 data-v-397fc176>商品评价</h2><p data-v-397fc176>200+</p><div class="bottom-desc" data-v-397fc176><i class="iconfont icon-pingjiax" data-v-397fc176></i><span data-v-397fc176>查看评价</span></div></li><li data-v-397fc176><h2 data-v-397fc176>收藏人气</h2><p data-v-397fc176>200+</p><div class="bottom-desc" data-v-397fc176><i class="iconfont icon-pinpaitemai-tianchong" data-v-397fc176></i><span data-v-397fc176>收藏商品</span></div></li><li data-v-397fc176><h2 data-v-397fc176>品牌信息</h2><p data-v-397fc176>200+</p><div class="bottom-desc" data-v-397fc176><i class="iconfont icon-xiaoliang" data-v-397fc176></i><span data-v-397fc176>品牌主页</span></div></li></ul>',1),F=[z];function A(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",P,F)}var $={name:"rgoodsintroduce"};c("051e");const M=_()($,[["render",A],["__scopeId","data-v-397fc176"]]);var U=M;const q={class:"r-goodsimage-components"},X={class:"left-bigimg",ref:"target"},Y=["src"],J={class:"right-small"},G=["onMouseenter"],H=["src"];function K(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",q,[a.showbigimg?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:"hoverbigimage",style:Object(o["normalizeStyle"])([a.hoverbigStyle,a.zoomstyle])},null,4)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",X,[Object(o["createElementVNode"])("img",{src:c.images[a.currentIndex],alt:""},null,8,Y),a.showbigimg?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:"shade",style:Object(o["normalizeStyle"])(a.position)},null,4)):Object(o["createCommentVNode"])("",!0)],512),Object(o["createElementVNode"])("div",J,[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.images,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:t,class:Object(o["normalizeClass"])({active:a.currentIndex===t}),onMouseenter:e=>a.currentIndex=t},[Object(o["createElementVNode"])("img",{src:e,alt:""},null,8,H)],42,G))),128))])])])}var Q=c("16ce"),R={name:"rgoodsimage",props:{images:{type:Array,default:()=>[]}},setup(e){const t=Object(o["ref"])(0),c=Object(o["ref"])(null),a=Object(o["ref"])(!1),n=Object(o["reactive"])({left:0,top:0}),l=Object(o["reactive"])({backgroundPositionX:0,backgroundPositionY:0}),{elementX:r,elementY:s,isOutside:i}=Object(Q["c"])(c);Object(o["watch"])([r,s,i],()=>{i.value?a.value=!1:(a.value=!0,r.value<100?n.left=0:r.value>300?n.left=200:n.left=r.value-100,s.value<100?n.top=0:s.value>300?n.top=200:n.top=s.value-100,l.backgroundPositionX=2*-n.left+"px",l.backgroundPositionY=2*-n.top+"px",n.left=n.left+"px",n.top=n.top+"px")});const d=Object(o["computed"])(()=>({"background-image":`url(${e.images[t.value]})`}));return{currentIndex:t,hoverbigStyle:d,target:c,showbigimg:a,position:n,zoomstyle:l}}};c("b1e5");const W=_()(R,[["render",K],["__scopeId","data-v-62aaed73"]]);var Z=W;const ee={class:"r-goodssku-components"},te={class:"title"},ce=["onClick"],oe=["src","title"],ae=["title"];function ne(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ee,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.goods.specs,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"product-spec",key:t},[Object(o["createElementVNode"])("div",te,Object(o["toDisplayString"])(e.name),1),Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.values,(t,c)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{class:Object(o["normalizeClass"])(["default",{imgclass:t.picture,selected:t.selected,disabled:t.disabled}]),onClick:c=>a.selectedSku(e,t),key:c},[t.picture?(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:0,src:t.picture,title:t.name},null,8,oe)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",{key:1,title:t.name},Object(o["toDisplayString"])(t.name),9,ae))],10,ce))),128))])]))),128))])}c("13d5");function le(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}c("14d9");function re(e){const t=[],c=2**e.length;for(let o=0;o<c;o+=1){const c=[];for(let t=0;t<e.length;t+=1)o&1<<t&&c.push(e[t]);t.push(c)}return t}class se{static getSkupath(e){const t={},c=e.skus;return c.forEach((e,c)=>{if(e.inventory>0){const c=e.specs.map(e=>e.valueName),o=re(c);o.forEach(c=>{const o=c.join(se.splitStr);t[o]?t[o].push(e.id):t[o]=[e.id]})}}),t}static getSelectedValues(e){const t=[];return e.forEach((e,c)=>{const o=e.values.find(e=>e.selected);t.push(o?o.name:void 0)}),t}static initDefaultsku(e,t){if(t){const c=e.skus.find(e=>e.id===t);c&&e.specs.forEach((e,t)=>{const o=c.specs[t].valueName;e.values.forEach(e=>{e.selected=e.name===o})})}}}le(se,"splitStr","$"),le(se,"updateDisabledStatus",(e,t)=>{e.forEach((c,o)=>{const a=se.getSelectedValues(e);c.values.forEach(e=>{if(e.selected)return;a[o]=e.name;const c=a.filter(e=>e).join(se.splitStr);e.disabled=!t[c]})})});var ie={name:"rgoodssku",props:{goods:{type:Object,default:()=>{}},skuid:{type:[String,Number],default:""}},setup(e,{emit:t}){const c=se.getSkupath(e.goods);se.initDefaultsku(e.goods,e.skuid),se.updateDisabledStatus(e.goods.specs,c);const o=(o,a)=>{if(a.disabled)return;a.selected?a.selected=!1:(o.values.forEach(e=>{e.selected=!1}),a.selected=!0),se.updateDisabledStatus(e.goods.specs,c);const n=se.getSelectedValues(e.goods.specs).filter(e=>e);if(n.length===e.goods.specs.length){const{inventory:o,oldPrice:a,price:l,id:r,specs:s}=e.goods.skus.find(e=>e.id===c[n.join("$")][0]),i={skuId:r,price:l,oldPrice:a,inventory:o,specsText:s.reduce((e,t)=>`${e} ${t.name}: ${t.valueName}`,"").replace(" ","")};t("change",i)}else t("change",{})};return{selectedSku:o}}};c("e910");const de=_()(ie,[["render",ne],["__scopeId","data-v-c6b916d6"]]);var ue=de;const me=e=>(Object(o["pushScopeId"])("data-v-e1a07620"),e=e(),Object(o["popScopeId"])(),e),be={class:"c-goodscommend-component"},pe=me(()=>Object(o["createElementVNode"])("div",{class:"c-goodsrecommend-title"},"同类商品推荐",-1)),je={class:"c-recommend-swiper"};function Oe(e,t,c,a,n,l){const r=Object(o["resolveComponent"])("rswiper");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",be,[pe,Object(o["createElementVNode"])("div",je,[Object(o["createVNode"])(r,{swiperData:a.swiperData,width:1200,"is-animated":!1,height:340,showPageicon:!1},null,8,["swiperData"])])])}var ve=c("c40e"),ge=c("6605");function fe(e,t){if(e instanceof Array&&e.length>0){const c=[],o=Math.ceil(e.length/t);for(let a=0;a<o;a++)c.push(e.slice(a*t,(a+1)*t));return c}return[]}var ke=c("5f3f"),Ee={name:"rgoodscommend",setup(){const e=Object(o["ref"])([]),t=Object(ge["c"])(),c=async()=>{const{result:c}=await Object(ve["f"])(t.params.id,16);e.value=fe(c,5)};return Object(o["onMounted"])(()=>{c()}),{swiperData:e}},components:{rswiper:ke["a"]}};c("5b26");const he=_()(Ee,[["render",Oe],["__scopeId","data-v-e1a07620"]]);var Ne=he,Ve=c("3d36");const Be=e=>(Object(o["pushScopeId"])("data-v-442d534e"),e=e(),Object(o["popScopeId"])(),e),ye={class:"c-goodstabs-components",id:"tabs"},Ce=Be(()=>Object(o["createElementVNode"])("p",null,"商品评价",-1)),De={class:"comment-num"},we={class:"tabs-content"};function Se(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ye,[Object(o["createElementVNode"])("nav",null,[Object(o["createElementVNode"])("a",{href:"javascript:;",class:Object(o["normalizeClass"])("detail"===a.current?"active":""),onClick:t[0]||(t[0]=e=>a.changeTabs("detail"))},"商品详情",2),Object(o["createElementVNode"])("a",{href:"javascript:;",class:Object(o["normalizeClass"])(["comment","comment"===a.current?"active":""]),onClick:t[1]||(t[1]=e=>a.changeTabs("comment"))},[Ce,Object(o["createElementVNode"])("span",De,"("+Object(o["toDisplayString"])(a.evaluatedata.evaluateCount)+"+)",1)],2)]),Object(o["createElementVNode"])("div",we,[(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])("rgoods"+a.current),{evaluateData:a.evaluatedata},null,8,["evaluateData"]))])])}c("3c65");const xe={class:"c-goodsdetail-components"},Ie={class:"product-info"},_e={class:"attrs"},Te={class:"dt"},Le={class:"dd"},Pe={class:"product-detail-info"},ze=["src"];function Fe(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",xe,[Object(o["createElementVNode"])("div",Ie,[Object(o["createElementVNode"])("ul",_e,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.goods.details.properties,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e.value},[Object(o["createElementVNode"])("span",Te,Object(o["toDisplayString"])(e.name)+":",1),Object(o["createElementVNode"])("span",Le,Object(o["toDisplayString"])(e.value),1)]))),128))])]),Object(o["createElementVNode"])("div",Pe,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.goods.details.pictures,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:e,src:e,alt:"",class:"detail-img"},null,8,ze))),128))])])}var Ae={name:"cgoodsdetail",setup(){const e=Object(o["inject"])("goods");return{goods:e}}};c("9015");const $e=_()(Ae,[["render",Fe],["__scopeId","data-v-599e74e8"]]);var Me=$e;const Ue=e=>(Object(o["pushScopeId"])("data-v-66edbbd0"),e=e(),Object(o["popScopeId"])(),e),qe={class:"r-goodscomment-components"},Xe={key:0,class:"comment-loading"},Ye={key:1,class:"comment-inner"},Je={class:"comment-top-header"},Ge={class:"comment-top-left"},He=Ue(()=>Object(o["createElementVNode"])("p",null,"人购买",-1)),Ke=Ue(()=>Object(o["createElementVNode"])("p",null,"好评率",-1)),Qe={class:"comment-top-right"},Re=Ue(()=>Object(o["createElementVNode"])("div",{class:"left-text"},"大家都在说：",-1)),We={class:"right-list"},Ze=["onClick"],et={class:"sort-area"},tt=Ue(()=>Object(o["createElementVNode"])("p",null,"排序:",-1)),ct={key:0,class:"comment-list"},ot={class:"comment-pagination"},at={key:1,class:"comment-loading"};function nt(e,t,c,a,n,l){const r=Object(o["resolveComponent"])("rloadinglogo"),s=Object(o["resolveComponent"])("rcomment"),i=Object(o["resolveComponent"])("rpagination");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",qe,[a.loadingshow?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Xe,[Object(o["createVNode"])(r)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Ye,[Object(o["createElementVNode"])("div",Je,[Object(o["createElementVNode"])("div",Ge,[Object(o["createElementVNode"])("ul",null,[Object(o["createElementVNode"])("li",null,[Object(o["createElementVNode"])("h2",null,Object(o["toDisplayString"])(c.evaluateData.salesCount)+"人",1),He]),Object(o["createElementVNode"])("li",null,[Object(o["createElementVNode"])("h2",null,Object(o["toDisplayString"])(c.evaluateData.praisePercent),1),Ke])])]),Object(o["createElementVNode"])("div",Qe,[Re,Object(o["createElementVNode"])("div",We,[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.evaluateData.tags,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:t,class:Object(o["normalizeClass"])({active:a.tagCurrent===t}),onClick:e=>a.clickTag(t)},Object(o["toDisplayString"])(e.title)+"("+Object(o["toDisplayString"])(e.tagCount)+")",11,Ze))),128))])])])]),Object(o["createElementVNode"])("div",et,[tt,Object(o["createElementVNode"])("ul",null,[Object(o["createElementVNode"])("li",{class:Object(o["normalizeClass"])({active:null===a.reqparmas.sortField}),onClick:t[0]||(t[0]=e=>a.changeSort(null))},"默认",2),Object(o["createElementVNode"])("li",{class:Object(o["normalizeClass"])({active:"createTime"===a.reqparmas.sortField}),onClick:t[1]||(t[1]=e=>a.changeSort("createTime"))},"最新",2),Object(o["createElementVNode"])("li",{class:Object(o["normalizeClass"])({active:"praiseCount"===a.reqparmas.sortField}),onClick:t[2]||(t[2]=e=>a.changeSort("praiseCount"))},"最热",2)])]),a.commentListloading?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",at,[Object(o["createVNode"])(r)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ct,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.commentList,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:t,commentData:e},null,8,["commentData"]))),128)),Object(o["createElementVNode"])("div",ot,[Object(o["createVNode"])(i,{total:a.total,onCurrentpage:a.changepage,currentPage:a.reqparmas.page},null,8,["total","onCurrentpage","currentPage"])])]))]))])}const lt=e=>(Object(o["pushScopeId"])("data-v-280ae1ea"),e=e(),Object(o["popScopeId"])(),e),rt={class:"r-comment-component"},st={class:"left-avatar"},it=["src"],dt={class:"right-comment"},ut={class:"right-comment-top"},mt={class:"comment-title"},bt={class:"right-comment-content"},pt={key:0,class:"right-comment-list-img"},jt=["onClick"],Ot=["src"],vt={key:1,class:"comment-imgview"},gt=lt(()=>Object(o["createElementVNode"])("i",{class:"iconfont icon-guanbi"},null,-1)),ft=[gt],kt=["src"],Et={class:"right-comment-date"},ht={class:"date-text"},Nt={class:"like-num"},Vt=lt(()=>Object(o["createElementVNode"])("i",{class:"iconfont icon-dianzan"},null,-1));function Bt(e,t,c,a,n,l){const r=Object(o["resolveComponent"])("rstart");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",rt,[Object(o["createElementVNode"])("div",st,[Object(o["createElementVNode"])("img",{src:c.commentData.member.avatar,alt:""},null,8,it),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(a.filterNickname(c.commentData.member.nickname)),1)]),Object(o["createElementVNode"])("div",dt,[Object(o["createElementVNode"])("div",ut,[Object(o["createVNode"])(r,{score:c.commentData.score},null,8,["score"]),Object(o["createElementVNode"])("div",mt,Object(o["toDisplayString"])(a.filterSpecs(c.commentData.orderInfo.specs)),1)]),Object(o["createElementVNode"])("div",bt,[Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(c.commentData.content),1)]),c.commentData.pictures.length>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",pt,[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.commentData.pictures,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{onClick:t=>a.preview(e)},[Object(o["createElementVNode"])("img",{src:e,alt:""},null,8,Ot)],8,jt))),256))])])):Object(o["createCommentVNode"])("",!0),a.show?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",vt,[Object(o["createElementVNode"])("div",{class:"closeicon",onClick:t[0]||(t[0]=(...e)=>a.closeimg&&a.closeimg(...e))},ft),Object(o["createElementVNode"])("img",{src:a.commentPreviewImg,alt:""},null,8,kt)])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",Et,[Object(o["createElementVNode"])("div",ht,Object(o["toDisplayString"])(c.commentData.createTime),1),Object(o["createElementVNode"])("div",Nt,[Vt,Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(c.commentData.praiseCount),1)])])])])}const yt={class:"r-start-component"},Ct={class:"r-start-inner"},Dt={key:1};function wt(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",yt,[Object(o["createElementVNode"])("div",Ct,[c.score>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.solid,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",{class:"iconfont icon-pingjia",key:t}))),128)),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.hollow,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",{class:"iconfont icon-star",key:t}))),128))],64)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",Dt,"暂未评分哦！"))])])}var St={name:"rstart",props:{score:{type:[String,Number],default:5}},setup(e){const t=Object(o["ref"])(0),c=Object(o["ref"])(0),a=()=>{e.score<0||(c.value=5-e.score,t.value=parseInt(e.score))};return Object(o["onMounted"])(()=>{a()}),{solid:t,hollow:c}}};c("d89c");const xt=_()(St,[["render",wt],["__scopeId","data-v-6ec3ac6f"]]);var It=xt,_t={name:"rcomment",props:{commentData:{type:Object,default:()=>{}}},setup(){const e=Object(o["ref"])(!1),t=Object(o["ref"])(""),c=c=>{t.value=c,e.value=!0},a=()=>{e.value=!1},n=e=>e.reduce((e,t)=>`${e} ${t.name}:${t.nameValue}`,""),l=e=>{if(e)return`${e.substr(0,1)}***${e.substr(-1)}`};return{show:e,preview:c,closeimg:a,filterNickname:l,commentPreviewImg:t,filterSpecs:n}},components:{rstart:It}};c("918c");const Tt=_()(_t,[["render",Bt],["__scopeId","data-v-280ae1ea"]]);var Lt=Tt,Pt={name:"rgoodscomment",setup(e){const t=Object(o["ref"])(0),c=Object(o["ref"])(0),a=Object(ge["c"])(),n=Object(o["ref"])(!0),l=Object(o["ref"])(!1),r=Object(o["reactive"])({page:1,pageSize:10,hasPicture:null,tag:null,sortField:null}),s=Object(o["ref"])([]),i=t=>{l.value=!0,c.value=t,"img"===e.evaluateData.tags[t].type?r.hasPicture=!0:"all"===e.evaluateData.tags[t].type?r.tag=null:r.tag=e.evaluateData.tags[t].title},d=async()=>{const{result:{items:e,counts:c}}=await Object(ve["b"])(a.params.id,r);t.value=c,s.value=e,l.value=!1};Object(o["watch"])(r,()=>{d()},{immediate:!0});const u=e=>{r.sortField=e,l.value=!0};Object(o["onMounted"])(()=>{setTimeout(()=>{n.value=!1},1e3)});const m=e=>{r.page=e;const t=document.getElementById("tabs").offsetTop;document.documentElement.scrollTop=t+100};return{tagCurrent:c,clickTag:i,reqparmas:r,changeSort:u,commentList:s,loadingshow:n,commentListloading:l,total:t,changepage:m}},props:{evaluateData:{type:Object,default:()=>{}}},components:{rcomment:Lt}};c("8291");const zt=_()(Pt,[["render",nt],["__scopeId","data-v-66edbbd0"]]);var Ft=zt,At={name:"rgoodstabs",setup(){const e=Object(ge["c"])(),t=Object(o["ref"])("detail"),c=Object(o["ref"])({}),a=e=>{t.value=e},n=async()=>{const{result:t}=await Object(ve["c"])(e.params.id);t.tags.unshift({title:"有图",tagCount:t.hasPictureCount,type:"ipmg"}),t.tags.unshift({title:"全部评价",tagCount:t.evaluateCount,type:"all"}),c.value=t};return Object(o["onMounted"])(()=>{n()}),{current:t,changeTabs:a,evaluatedata:c}},components:{rgoodsdetail:Me,rgoodscomment:Ft}};c("7fde");const $t=_()(At,[["render",Se],["__scopeId","data-v-442d534e"]]);var Mt=$t,Ut=c("5502"),qt=c("2671"),Xt={name:"goodsDetail",setup(){const e=Object(o["ref"])(!1),t=Object(Ut["b"])(),c=Object(o["ref"])(1),{goods:a,loading:n,hotproductData:l}=Yt();Object(o["provide"])("goods",a);const r=Object(o["ref"])("110000"),s=Object(o["ref"])("119900"),i=Object(o["ref"])("110101"),d=Object(o["ref"])(""),u=e=>{d.value=e.fullLocation};if(a.userAddresses){const e=a.userAddresses.find(e=>1===e.isDefault);e&&(r.value=e.provinceCode,s.value=e.cityCode,i.value=e.countyCode,d.value=e.fullLocation)}const m=e=>{e.price?(a.value.price=e.price,a.value.oldPrice=e.oldPrice,a.value.inventory=e.inventory,a.value.skuId=e.skuId,c.value=1):c.value=1},b=async()=>{if(!a.value.skuId)return void Object(qt["a"])({type:"error",text:"客官规格选择错误",offsetTop:170});e.value=!0;let o={skuId:a.value.skuId,count:c.value};await t.dispatch("cart/addCart",o),Object(qt["a"])({type:"success",text:"加入购物车成功！",offsetTop:170}),e.value=!1};return{goods:a,selectCity:u,fullLocation:d,changeSku:m,count:c,loading:n,hotproductData:l,addCart:b,addloading:e}},components:{rgoodsdetailbread:L,rgoodsimage:Z,rgoodsintroduce:U,rgoodssku:ue,goodsrecommend:Ne,goodstabs:Mt,rmainproduct:Ve["a"]}};const Yt=()=>{const e=Object(ge["c"])(),t=Object(Ut["b"])(),c=Object(o["ref"])(null),a=Object(o["ref"])(!1),n=Object(o["ref"])([]);return Object(o["watch"])(()=>e.params.id,()=>{a.value=!1,Object(ve["d"])(e.params.id).then(async e=>{c.value=null,await Object(o["nextTick"])(),c.value=e.result,console.log(c.value.name),document.title=c.value.name,c.value.categories[0]&&c.value.categories[0].parent.name&&t.commit("user/setUserActive",c.value.categories[0].parent.name),a.value=!0}),Object(ve["e"])({id:e.params.id,limit:3,type:1}).then(e=>{n.value=e.result})},{immediate:!0}),{goods:c,loading:a,hotproductData:n}};c("fd72");const Jt=_()(Xt,[["render",D],["__scopeId","data-v-03220952"]]);t["default"]=Jt},"7fde":function(e,t,c){"use strict";c("21cd")},"80ac":function(e,t,c){},8169:function(e,t,c){},8291:function(e,t,c){"use strict";c("58b4")},9015:function(e,t,c){"use strict";c("80ac")},"909f":function(e,t,c){},"918c":function(e,t,c){"use strict";c("3ce8")},9646:function(e,t,c){"use strict";c("e497")},b1e5:function(e,t,c){"use strict";c("4292")},bf2a:function(e,t,c){"use strict";c("8169")},c40e:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"d",(function(){return n})),c.d(t,"f",(function(){return l})),c.d(t,"e",(function(){return r})),c.d(t,"c",(function(){return s})),c.d(t,"b",(function(){return i}));var o=c("b775");function a(e){return Object(o["a"])("/category/goods/temporary","post",e)}function n(e){return Object(o["a"])("/goods","get",{id:e})}function l(e,t){return Object(o["a"])("/goods/relevant","get",{id:e,limit:t})}function r(e){return Object(o["a"])("/goods/hot","get",e)}function s(e){return Object(o["a"])(`https://mock.boxuegu.com/mock/1175/goods/${e}/evaluate`,"get")}function i(e,t){return Object(o["a"])(`https://mock.boxuegu.com/mock/1175/goods/${e}/evaluate/page`,"get",t)}},d5fe:function(e,t,c){},d89c:function(e,t,c){"use strict";c("909f")},e497:function(e,t,c){},e910:function(e,t,c){"use strict";c("42e0")},f4df:function(e,t,c){},fd72:function(e,t,c){"use strict";c("f4df")}}]);
//# sourceMappingURL=chunk-6ae4ab4f.5ef9cf98.js.map