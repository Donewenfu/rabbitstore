(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dfab942"],{2556:function(e,t,c){},3191:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"d",(function(){return o})),c.d(t,"b",(function(){return r})),c.d(t,"c",(function(){return l})),c.d(t,"e",(function(){return i}));var n=c("b775");function a(){return Object(n["a"])("/home/banner","get")}function o(){return Object(n["a"])("/home/new","get")}function r(e){return Object(n["a"])("/home/brand","get",{limit:e})}function l(){return Object(n["a"])("/home/goods","get")}function i(){return Object(n["a"])("/home/special","get")}},"379c":function(e,t,c){},"3a5c":function(e,t,c){},"3d36":function(e,t,c){"use strict";var n=c("7a23");const a=e=>(Object(n["pushScopeId"])("data-v-023f341d"),e=e(),Object(n["popScopeId"])(),e),o={class:"product-img"},r={alt:""},l={class:"product-title"},i={class:"ellipsis"},s={class:"product-desc"},d={class:"ellipsis-2"},p={class:"product-price"},u=a(()=>Object(n["createElementVNode"])("div",{class:"findsame"},[Object(n["createElementVNode"])("p",null,"找相似"),Object(n["createElementVNode"])("p",null,"发现更多宝贝")],-1));function b(e,t,c,a,b,j){const O=Object(n["resolveComponent"])("rprice"),m=Object(n["resolveDirective"])("lazy");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"r-mainproduct-components",onClick:t[0]||(t[0]=(...e)=>a.goUrl&&a.goUrl(...e))},[Object(n["createElementVNode"])("div",o,[Object(n["withDirectives"])(Object(n["createElementVNode"])("img",r,null,512),[[m,c.productData.picture]])]),Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("p",i,Object(n["toDisplayString"])(c.productData.name),1)]),Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("p",d,Object(n["toDisplayString"])(c.productData.desc),1)]),Object(n["createElementVNode"])("div",p,[Object(n["createVNode"])(O,{price:c.productData.price,bold:"700"},null,8,["price"])]),u])}c("14d9");var j=c("6605"),O={name:"rmainproduct",props:{productData:{type:Object,default:()=>({})}},setup(e){const t=Object(j["d"])(),c=()=>{t.push({path:"/goodsDetail/"+e.productData.id})};return{goUrl:c}}},m=(c("bf2a"),c("d959")),v=c.n(m);const f=v()(O,[["render",b],["__scopeId","data-v-023f341d"]]);t["a"]=f},"505b":function(e,t,c){},"5f3f":function(e,t,c){"use strict";var n=c("7a23");const a=e=>(Object(n["pushScopeId"])("data-v-59201670"),e=e(),Object(n["popScopeId"])(),e),o=["src"],r={key:1,class:"recommend-product-list"},l={key:0,class:"r-swiper-item"},i=["src"],s={key:0,class:"next-previous"},d=a(()=>Object(n["createElementVNode"])("i",{class:"iconfont icon-previous-icon"},null,-1)),p=[d],u=a(()=>Object(n["createElementVNode"])("i",{class:"iconfont icon-next-icon"},null,-1)),b=[u],j={class:"r-circle-dot"},O=["onClick"];function m(e,t,c,a,d,u){const m=Object(n["resolveComponent"])("rmainproduct");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"r-swiper-components",style:Object(n["normalizeStyle"])(a.swiperStyle),onMouseenter:t[3]||(t[3]=(...e)=>a.stopSwiper&&a.stopSwiper(...e)),onMouseleave:t[4]||(t[4]=(...e)=>a.startSwiper&&a.startSwiper(...e))},[Object(n["createElementVNode"])("div",{class:"swiper-content",style:Object(n["normalizeStyle"])(a.swiperAnimatedStyle),onTransitionend:t[0]||(t[0]=(...e)=>a.endtransEnd&&a.endtransEnd(...e))},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.swiperData,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"r-swiper-item",key:t},[e.imgUrl?(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{key:0,src:e.imgUrl,alt:""},null,8,o)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(m,{key:t,productData:e},null,8,["productData"]))),128))]))]))),128)),c.swiperData.length>1&&c.swiperData[0].imgUrl?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[Object(n["createElementVNode"])("img",{src:c.swiperData[0].imgUrl,alt:""},null,8,i)])):Object(n["createCommentVNode"])("",!0)],36),c.showPageicon?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,[0!=a.swiperCurrent?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:0,class:"previous-icon icon",onClick:t[1]||(t[1]=e=>a.changeSwiper("previous"))},p)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",{class:"next-icon icon",onClick:t[2]||(t[2]=e=>a.changeSwiper("next"))},b)])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",j,[Object(n["createElementVNode"])("ul",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.swiperData,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.id,class:Object(n["normalizeClass"])(a.swiperCurrent===t?"active":""),onClick:e=>a.changeDot(t)},null,10,O))),128))])])],36)}var v=c("3d36"),f={name:"rswiper",props:{width:{type:Number,default:1052},height:{type:[Number,String],default:"426px"},swiperData:{type:Array,default(){return[]}},durationTime:{type:Number,default:2e3},isAnimated:{type:Boolean,default:!0},showPageicon:{type:Boolean,default:!0}},setup(e){const t=Object(n["ref"])(!1),c=Object(n["ref"])(0),a=Object(n["ref"])(null),o=Object(n["ref"])(!0),r=Object(n["computed"])(()=>({width:e.width+"px",height:e.height+"px"})),l=e=>{c.value=e},i=()=>{t.value=!1,s()},s=()=>{clearInterval(a.value),a.value=setInterval(()=>{const t=e.isAnimated?e.swiperData.length:e.swiperData.length-1;c.value===t?(c.value=0,o.value=!1):(c.value++,o.value=!0)},e.durationTime)},d=()=>{c.value===e.swiperData.length&&(c.value=0,o.value=!1)},p=()=>{t.value=!0,clearInterval(a.value)},u=Object(n["computed"])(()=>({transform:`translateX(-${c.value*e.width}px)`,width:(e.swiperData.length+(e.isAnimated?1:0))*e.width+"px","transition-duration":o.value&&e.isAnimated?".3s":""})),b=t=>{o.value=!0;const n=e.isAnimated?e.swiperData.length:e.swiperData.length-1;"next"===t?c.value<n&&c.value++:c.value>0&&c.value--};return Object(n["onMounted"])(()=>{s(),o.value=!1}),Object(n["onUnmounted"])(()=>{clearInterval(a.value)}),{swiperStyle:r,showNextPrevious:t,changeSwiper:b,swiperCurrent:c,swiperAnimatedStyle:u,changeDot:l,endtransEnd:d,stopSwiper:p,startSwiper:i}},components:{rmainproduct:v["a"]}},k=(c("9646"),c("d959")),E=c.n(k);const g=E()(f,[["render",m],["__scopeId","data-v-59201670"]]);t["a"]=g},"62d0":function(e,t,c){"use strict";c("7cf6")},"71a2":function(e,t,c){},"73c4":function(e,t,c){"use strict";c("d9f4")},"796f":function(e,t,c){"use strict";c("aa2b")},"7abe":function(e,t,c){"use strict";c.r(t);var n=c("7a23");const a={class:"index-page"},o={class:"container"},r={class:"index-cate-swiper"},l={class:"cate-area"},i={class:"swiper-area"},s={class:"index-product-area"},d={class:"container"},p={class:"index-innerproduct"},u={class:"parduct-partone",ref:"hotproduct"},b={class:"product-parttwo",ref:"brandproduct"},j={key:1,class:"brand-skeleton"},O={class:"index-main-product-area",ref:"mainproduct"},m={class:"container"},v={class:"index-new-product",ref:"newproduct"},f={class:"container"};function k(e,t,c,k,E,g){const N=Object(n["resolveComponent"])("rcategory"),h=Object(n["resolveComponent"])("rswiper"),w=Object(n["resolveComponent"])("rindexproduct"),V=Object(n["resolveComponent"])("mainskeleton"),D=Object(n["resolveComponent"])("rpopularity"),y=Object(n["resolveComponent"])("rskeleton"),B=Object(n["resolveComponent"])("indexmainproduct"),S=Object(n["resolveComponent"])("newSpecproduct");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",l,[Object(n["createVNode"])(N)]),Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(h,{swiperData:k.indexState.bannerData,durationTime:4e3},null,8,["swiperData"])])])]),Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("div",p,[Object(n["createElementVNode"])("div",u,[Object(n["createVNode"])(n["Transition"],{name:"fade"},{default:Object(n["withCtx"])(()=>[k.indexState.newProductData.length>0?(Object(n["openBlock"])(),Object(n["createBlock"])(w,{key:0,productInfo:k.indexState.newProductData,title:"新鲜好物",productDesc:"新鲜出炉 品质靠谱"},null,8,["productInfo"])):(Object(n["openBlock"])(),Object(n["createBlock"])(V,{key:1}))]),_:1})],512),Object(n["createElementVNode"])("div",b,[k.breanDataList.length>0?(Object(n["openBlock"])(),Object(n["createBlock"])(D,{key:0,title:"热门品牌",desc:"国际经典 品质保证",brandData:k.breanDataList},null,8,["brandData"])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",j,[(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(5,e=>Object(n["createVNode"])(y,{key:e,bg:"#e4e4e4",width:"230px",height:"306px",animated:""})),64))]))],512)])])]),Object(n["createElementVNode"])("div",O,[Object(n["createElementVNode"])("div",m,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(k.indexState.indexGoods,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(B,{key:t,productData:e},null,8,["productData"]))),128))])],512),Object(n["createElementVNode"])("div",v,[Object(n["createElementVNode"])("div",f,[Object(n["createVNode"])(S,{newspec:k.indexState.newSpecdataspec},null,8,["newspec"])])],512)])}const E=e=>(Object(n["pushScopeId"])("data-v-f1d3b868"),e=e(),Object(n["popScopeId"])(),e),g={class:"r-category-components"},N=["onMouseenter"],h={class:"left-title"},w={class:"cate-title"},V={key:0,class:"cate-subtitle"},D=E(()=>Object(n["createElementVNode"])("div",{class:"right-arrow"},[Object(n["createElementVNode"])("i",{class:"iconfont icon-jiantou"})],-1)),y={key:0,class:"cate-product-box"},B={class:"innercate"},S=E(()=>Object(n["createElementVNode"])("div",{class:"cate-product-header"},[Object(n["createElementVNode"])("span",null,"分类推荐")],-1)),x={key:0,class:"cate-product-content"};function C(e,t,c,a,o,r){const l=Object(n["resolveComponent"])("rskeleton"),i=Object(n["resolveComponent"])("rcateproduct");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{onMouseleave:t[0]||(t[0]=(...e)=>a.hideProductCate&&a.hideProductCate(...e))},[Object(n["createElementVNode"])("div",g,[Object(n["createElementVNode"])("ul",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(a.menuListData,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{class:Object(n["normalizeClass"])(a.userSelectId===e.id?"active":""),key:t,onMouseenter:t=>a.showProductCate(e.id)},[Object(n["createElementVNode"])("div",h,[Object(n["createElementVNode"])("i",{class:Object(n["normalizeClass"])(["iconfont",e.iconName])},null,2),Object(n["createElementVNode"])("div",w,Object(n["toDisplayString"])(e.name),1),e.children&&e.children.length>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",V,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.children,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",{class:"ellipsis",style:{display:"block",width:"70px"},key:t},Object(n["toDisplayString"])(e.name),1))),128))])):(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:1}))]),D],42,N))),128))])]),Object(n["createVNode"])(n["Transition"],null,{default:Object(n["withCtx"])(()=>[a.showProduct?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",y,[Object(n["createElementVNode"])("div",B,[S,a.userSelectCateData?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",x,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(a.userSelectCateData,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:t,productData:e},null,8,["productData"]))),128))])):Object(n["createCommentVNode"])("",!0)])])):Object(n["createCommentVNode"])("",!0)]),_:1})],32)}var I=c("5502");const _=["icon-jujia","icon-meishi","icon-chongwufushi","icon-muying","icon-gehu","icon-31quanbushangpin","icon-shuma","icon-yundong","icon-qita"],L={class:"r-cateproduct-img"},z=["src"],P={class:"r-cateproduct-info"},F={class:"r-cateproduct-title ellipsis-2"},U={class:"r-cateproduct-desc ellipsis"},A={class:"r-cateproduct-price"};function M(e,t,c,a,o,r){const l=Object(n["resolveComponent"])("rprice");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"r-cateproduct-components",onClick:t[0]||(t[0]=e=>a.goUrl(c.productData))},[Object(n["createElementVNode"])("div",L,[Object(n["createElementVNode"])("img",{src:c.productData.picture,alt:""},null,8,z)]),Object(n["createElementVNode"])("div",P,[Object(n["createElementVNode"])("div",F,Object(n["toDisplayString"])(c.productData.name),1),Object(n["createElementVNode"])("div",U,Object(n["toDisplayString"])(c.productData.desc),1),Object(n["createElementVNode"])("div",A,[Object(n["createVNode"])(l,{price:c.productData.price,bold:"500"},null,8,["price"])])])])}c("14d9");var T=c("6605"),q={name:"rproduct",props:{productData:{type:Object,default(){return{}}}},setup(){const e=Object(T["d"])(),t=({id:t})=>{e.push({path:"/goodsDetail/"+t})};return{goUrl:t}}},G=(c("f19b"),c("d959")),J=c.n(G);const X=J()(q,[["render",M],["__scopeId","data-v-9ae6ef82"]]);var $=X,H={name:"index",components:{rcateproduct:$},setup(){const e=Object(I["b"])(),t=Object(n["ref"])(!1),c=Object(n["ref"])(null),a=Object(n["computed"])(()=>e.state.category.cateList.map((e,t)=>({...e,children:e.children&&e.children.slice(0,1),iconName:_[t]}))),o=e=>{c.value=e,t.value=!0},r=Object(n["computed"])(()=>{const e=a.value.find(e=>{if(e.id===c.value)return e});return e.goods?e.goods.slice(0,9):[]}),l=()=>{t.value=!1,c.value=""};return{menuListData:a,showProductCate:o,hideProductCate:l,showProduct:t,userSelectCateData:r,userSelectId:c}}};c("ffc6");const K=J()(H,[["render",C],["__scopeId","data-v-f1d3b868"]]);var Q=K,R=c("5f3f");const W=e=>(Object(n["pushScopeId"])("data-v-d3ae5010"),e=e(),Object(n["popScopeId"])(),e),Y={class:"r-indexproduct-components"},Z={class:"r-indexproduct-top"},ee={class:"r-indexproduct-title"},te=W(()=>Object(n["createElementVNode"])("div",{class:"r-product-more"},[Object(n["createElementVNode"])("span",null,"查看更多"),Object(n["createElementVNode"])("i",{class:"iconfont icon-jiantou"})],-1)),ce={class:"r-indexproduct-list"};function ne(e,t,c,a,o,r){const l=Object(n["resolveComponent"])("rproduct");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Y,[Object(n["createElementVNode"])("div",Z,[Object(n["createElementVNode"])("div",ee,[Object(n["createElementVNode"])("h3",null,Object(n["toDisplayString"])(c.title),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(c.productDesc),1)]),te]),Object(n["createElementVNode"])("div",ce,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.productInfo,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:t,product:e,price:e.price},null,8,["product","price"]))),128))])])}const ae={class:"r-product-img"},oe={alt:""},re={class:"r-product-info"},le=["title"];function ie(e,t,c,a,o,r){const l=Object(n["resolveComponent"])("rprice"),i=Object(n["resolveDirective"])("lazy");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"r-product-components",onClick:t[0]||(t[0]=(...e)=>a.goUrl&&a.goUrl(...e))},[Object(n["createElementVNode"])("div",ae,[Object(n["withDirectives"])(Object(n["createElementVNode"])("img",oe,null,512),[[i,c.product.picture]])]),Object(n["createElementVNode"])("div",re,[Object(n["createElementVNode"])("h4",{class:"ellipsis",title:c.product.name},Object(n["toDisplayString"])(c.product.name),9,le),Object(n["createVNode"])(l,{size:"16",price:c.product.price},null,8,["price"])])])}var se={name:"rproduct",props:{product:{type:Object,default:()=>({})}},setup(e){const t=Object(T["d"])(),c=()=>{t.push({path:"/goodsdetail/"+e.product.id})};return{goUrl:c}}};c("cbdb");const de=J()(se,[["render",ie],["__scopeId","data-v-d0f273b4"]]);var pe=de,ue={name:"rindexproduct",props:{productInfo:{type:Object,default:()=>[]},title:{type:String,default:"请填写内容"},productDesc:{type:String,default:"请填写副标题"}},components:{rproduct:pe}};c("796f");const be=J()(ue,[["render",ne],["__scopeId","data-v-d3ae5010"]]);var je=be;const Oe=e=>(Object(n["pushScopeId"])("data-v-5e12b826"),e=e(),Object(n["popScopeId"])(),e),me={class:"r-popularity-components"},ve={class:"r-popularity-top"},fe={class:"r-popularity-title"},ke={class:"r-popularity-more"},Ee=Oe(()=>Object(n["createElementVNode"])("i",{class:"iconfont icon-previous-icon"},null,-1)),ge=[Ee],Ne=Oe(()=>Object(n["createElementVNode"])("i",{class:"iconfont icon-next-icon"},null,-1)),he=[Ne],we={alt:""};function Ve(e,t,c,a,o,r){const l=Object(n["resolveDirective"])("lazy");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",me,[Object(n["createElementVNode"])("div",ve,[Object(n["createElementVNode"])("div",fe,[Object(n["createElementVNode"])("h3",null,Object(n["toDisplayString"])(c.title),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(c.desc),1)]),Object(n["createElementVNode"])("div",ke,[Object(n["createElementVNode"])("a",{href:"javascript:;",onClick:t[0]||(t[0]=e=>a.changeBrand("prev")),class:Object(n["normalizeClass"])(a.currentIndex>0?"active":"noclass")},ge,2),Object(n["createElementVNode"])("a",{href:"javascript:;",onClick:t[1]||(t[1]=e=>a.changeBrand("next")),class:Object(n["normalizeClass"])(a.currentIndex<c.brandData.length/5-1?"active":"noclass")},he,2)])]),Object(n["createElementVNode"])("div",{class:"r-poplarity-list",style:Object(n["normalizeStyle"])(a.wrapStyle)},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.brandData,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"poplarity-item",key:t},[Object(n["withDirectives"])(Object(n["createElementVNode"])("img",we,null,512),[[l,e.picture]])]))),128))],4)])}var De={name:"rpopularity",props:{title:{type:String,default:"请填写标题",required:!0},desc:{type:String,default:"请填写描述",required:!0},brandData:{type:Array,default:()=>[]}},setup(e){const t=Object(n["ref"])(0),c=Object(n["computed"])(()=>({width:e.brandData.length/5*1240+"px",transform:`translateX(-${1240*t.value}px)`})),a=c=>{"prev"===c?0!==t.value&&t.value--:t.value<e.brandData.length/5-1&&t.value++};return{wrapStyle:c,changeBrand:a,currentIndex:t}}};c("85ef");const ye=J()(De,[["render",Ve],["__scopeId","data-v-5e12b826"]]);var Be=ye;const Se={class:"r-indexmainproduct-components"},xe={class:"r-indexmainproduct-title"},Ce={class:"left-title"},Ie=Object(n["createStaticVNode"])('<div class="right-content" data-v-19f23ba8><div class="right-content-left-cate" data-v-19f23ba8><ul data-v-19f23ba8><li data-v-19f23ba8><a href="#" class="active" data-v-19f23ba8>水果</a></li><li data-v-19f23ba8><a href="#" data-v-19f23ba8>蔬菜</a></li><li data-v-19f23ba8><a href="#" data-v-19f23ba8>肉蛋禽</a></li><li data-v-19f23ba8><a href="#" data-v-19f23ba8>肉蛋禽</a></li></ul></div><div class="right-more" data-v-19f23ba8><span data-v-19f23ba8>查看全部</span><i class="iconfont icon-next-icon" data-v-19f23ba8></i></div></div>',1),_e={class:"r-indexmainproduct-product"},Le={class:"product-tag"},ze={class:"left-box"},Pe={class:"right-box"},Fe={class:"r-indexmainproduct-product-right"};function Ue(e,t,c,a,o,r){const l=Object(n["resolveComponent"])("rmainproduct");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Se,[Object(n["createElementVNode"])("div",xe,[Object(n["createElementVNode"])("div",Ce,[Object(n["createElementVNode"])("h3",null,Object(n["toDisplayString"])(c.productData.name),1)]),Ie]),Object(n["createElementVNode"])("div",_e,[Object(n["createElementVNode"])("div",{class:"r-indexmainproduct-product-left",style:Object(n["normalizeStyle"])({"background-image":"url("+c.productData.picture+")"})},[Object(n["createElementVNode"])("div",Le,[Object(n["createElementVNode"])("div",ze,Object(n["toDisplayString"])(c.productData.name),1),Object(n["createElementVNode"])("div",Pe,Object(n["toDisplayString"])(c.productData.saleInfo),1)])],4),Object(n["createElementVNode"])("div",Fe,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.productData.goods,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:t,productData:e},null,8,["productData"]))),128))])])])}var Ae=c("3d36"),Me={name:"indexmainproduct",props:{productData:{type:Object,default:()=>({})}},components:{rmainproduct:Ae["a"]}};c("b490");const Te=J()(Me,[["render",Ue],["__scopeId","data-v-19f23ba8"]]);var qe=Te;const Ge=e=>(Object(n["pushScopeId"])("data-v-0632cc36"),e=e(),Object(n["popScopeId"])(),e),Je={class:"r-newspec-components"},Xe=Ge(()=>Object(n["createElementVNode"])("div",{class:"r-newspec-title"},[Object(n["createElementVNode"])("div",{class:"r-newspec-title-left"},"最新专题"),Object(n["createElementVNode"])("div",{class:"r-newspec-title-right"},[Object(n["createElementVNode"])("span",null,"查看更多"),Object(n["createElementVNode"])("i",{class:"iconfont icon-next-icon"})])],-1)),$e={class:"spec-content"};function He(e,t,c,a,o,r){const l=Object(n["resolveComponent"])("rnewspecitem");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Je,[Xe,Object(n["createElementVNode"])("div",$e,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.newspec,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:t,newspecData:e},null,8,["newspecData"]))),128))])])}const Ke=e=>(Object(n["pushScopeId"])("data-v-b12b1430"),e=e(),Object(n["popScopeId"])(),e),Qe={class:"r-newspec-components"},Re={class:"newspec-top"},We={alt:"",class:"specimg"},Ye={class:"mask"},Ze={class:"mask-left"},et=["title"],tt=["title"],ct={class:"mask-price"},nt={class:"inner-price"},at=Ke(()=>Object(n["createElementVNode"])("span",null,"起",-1));function ot(e,t,c,a,o,r){const l=Object(n["resolveComponent"])("rprice"),i=Object(n["resolveDirective"])("lazy");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Qe,[Object(n["createElementVNode"])("div",Re,[Object(n["withDirectives"])(Object(n["createElementVNode"])("img",We,null,512),[[i,c.newspecData.cover]]),Object(n["createElementVNode"])("div",Ye,[Object(n["createElementVNode"])("div",Ze,[Object(n["createElementVNode"])("p",{class:"ellipsis",title:c.newspecData.title},Object(n["toDisplayString"])(c.newspecData.title),9,et),Object(n["createElementVNode"])("p",{class:"ellipsis",title:c.newspecData.summary},Object(n["toDisplayString"])(c.newspecData.summary),9,tt)]),Object(n["createElementVNode"])("div",ct,[Object(n["createElementVNode"])("div",nt,[Object(n["createVNode"])(l,{price:c.newspecData.lowestPrice,autofix:""},null,8,["price"]),at])])])])])}var rt={name:"index",props:{newspecData:{type:Object,default:()=>({})}}};c("bdb2");const lt=J()(rt,[["render",ot],["__scopeId","data-v-b12b1430"]]);var it=lt,st={name:"rnewspec",props:{newspec:{type:Array,default:()=>[]}},components:{rnewspecitem:it}};c("62d0");const dt=J()(st,[["render",He],["__scopeId","data-v-0632cc36"]]);var pt=dt;const ut={class:"home-skeleton"};function bt(e,t,c,a,o,r){const l=Object(n["resolveComponent"])("rskeleton");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ut,[(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(4,e=>Object(n["createElementVNode"])("div",{class:"item",key:e,style:Object(n["normalizeStyle"])({backgroundColor:c.bg})},[Object(n["createVNode"])(l,{bg:"#e4e4e4",width:"306px",height:"306px",animated:""}),Object(n["createVNode"])(l,{bg:"#e4e4e4",width:"160px",height:"24px",animated:""}),Object(n["createVNode"])(l,{bg:"#e4e4e4",width:"120px",height:"24px",animated:""})],4)),64))])}var jt={name:"rskeletonproduct",props:{bg:{type:String,default:"#fff"}}};c("73c4");const Ot=J()(jt,[["render",bt],["__scopeId","data-v-3cc10ca3"]]);var mt=Ot,vt=c("16ce");const ft=function(e,t){const c=Object(n["ref"])([]),{stop:a}=Object(vt["b"])(e,([{isIntersecting:e}],n)=>{e&&(a(),t().then(e=>{c.value=e.result}))});return c};var kt=ft,Et=c("3191"),gt={name:"index",setup(){const e=Object(n["ref"])(!1),t=Object(n["ref"])(null),c=Object(n["ref"])(null),a=Object(n["ref"])(null),o=Object(n["ref"])(null),r=Object(n["reactive"])({bannerData:[],newProductData:[],brandData:[],indexGoods:[],newSpecdataspec:[]});Object(n["onMounted"])(()=>{l()});const l=async()=>{const{result:e}=await Object(Et["a"])();r.bannerData=e};r.newProductData=kt(t,Et["d"]),r.brandData=kt(c,()=>Object(Et["b"])(10));const i=Object(n["computed"])(()=>r.brandData);return r.indexGoods=kt(a,Et["c"]),r.newSpecdataspec=kt(o,Et["e"]),{indexState:r,showbox:e,hotproduct:t,brandproduct:c,breanDataList:i,mainproduct:a,newproduct:o}},components:{rcategory:Q,rswiper:R["a"],rindexproduct:je,rpopularity:Be,indexmainproduct:qe,newSpecproduct:pt,mainskeleton:mt}};c("ee13");const Nt=J()(gt,[["render",k],["__scopeId","data-v-f4134116"]]);t["default"]=Nt},"7bae":function(e,t,c){},"7cf6":function(e,t,c){},8169:function(e,t,c){},"85ef":function(e,t,c){"use strict";c("379c")},9646:function(e,t,c){"use strict";c("e497")},"9ef7":function(e,t,c){},aa2b:function(e,t,c){},b490:function(e,t,c){"use strict";c("505b")},bdb2:function(e,t,c){"use strict";c("2556")},bf2a:function(e,t,c){"use strict";c("8169")},cbdb:function(e,t,c){"use strict";c("3a5c")},d9f4:function(e,t,c){},e497:function(e,t,c){},ee13:function(e,t,c){"use strict";c("7bae")},f19b:function(e,t,c){"use strict";c("9ef7")},ffc6:function(e,t,c){"use strict";c("71a2")}}]);
//# sourceMappingURL=chunk-3dfab942.c5cdb21e.js.map