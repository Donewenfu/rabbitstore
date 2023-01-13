<template>
  <div class="goods-detail-page">
    <div class="container" v-if="loading">
      <!--面包屑导航-->
      <div class="product-bread">
        <!--商品详情面包屑导航组件 -->
        <rgoodsdetailbread :goodsData="goods"></rgoodsdetailbread>
      </div>
      <!--商品介绍区域-->
      <div class="product-info box">
        <!--左侧图片-->
        <div class="left-image">
          <rgoodsimage :images="goods.mainPictures"></rgoodsimage>
          <!--品牌介绍-->
          <rgoodsintroduce></rgoodsintroduce>
        </div>
        <!--右侧spec规格 商品详情-->
        <div class="right-spec">
          <!--标题价格-->
          <div class="product-name">{{ goods.name }}</div>
          <!--标题简介-->
          <div class="product-desc">{{ goods.desc }}</div>
          <!--商品价格区域-->
          <div class="product-price-area">
            <rprice :price="goods.price" size="26"></rprice>
            <rprice :price="goods.oldPrice" is-line size="16"></rprice>
          </div>
          <!--商品的服务-->
          <div class="product-server">
            <ul>
              <li>
                <p>促销</p>
                <span>12月好物放送，App领券购买直降120元</span>
              </li>
              <li>
                <p>配送</p>
                <span>配送至</span>
                <!--地区选择组件-->
                <rselectcity  @change="selectCity" :fullLocation="fullLocation"></rselectcity>
              </li>
              <li>
                <p>服务</p>
                <div class="server-list">
                  <span>无忧退货</span>
                  <span>多块好省</span>
                  <span>快速发货</span>
                  <a href="javascript:;">查看详情</a>
                </div>
              </li>
            </ul>
          </div>
          <!--商品sku区域-->
          <div class="product-sku-area">
            <!--sku选择组件-->
            <rgoodssku :goods="goods" @change="changeSku"></rgoodssku>
            <!--计算组件-->
            <rcounter v-model="count" :max="goods.inventory"></rcounter>
            <!--按钮组件-->
            <rbutton @click="addCart" :loading="addloading" :disabled="addloading" loading-text="加入中">加入购物车</rbutton>
          </div>
        </div>
      </div>
      <!--同类商品介绍区域-->
      <div class="product-same box">
        <!--商品推荐组件-->
        <goodsrecommend></goodsrecommend>
      </div>
      <!--商品详情介绍-->
      <div class="product-detail-info">
        <div class="left-detail">
          <!--商品切换组件-->
          <goodstabs></goodstabs>
        </div>
        <!--右侧推荐商品-->
        <div class="right-product">
          <div class="title">
            <p>24小时热榜</p>
            <i class="iconfont icon-remenhot"></i>
          </div>
          <!--热门榜单数据-->
          <div class="hotlist">
            <template v-for="(item,index) in hotproductData" :key="index">
              <rmainproduct :productData="item"></rmainproduct>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="loading-area container">
      <div class="container inner-logo">
        <rloadinglogo></rloadinglogo>
      </div>
    </div>
  </div>
</template>

<script>
// 面包屑导航组件
import rgoodsdetailbread from './component/r-goodsdetailbread/index'
// 品牌介绍
import rgoodsintroduce from './component/r-goodsintroduce'
// 详情图片
import rgoodsimage from './component/r-goodsimage'
// 商品sku组件
import rgoodssku from './component/r-goodssku'
// 商品推荐组件
import goodsrecommend from './component/r-goodsrecommend'
// 商品组件
import rmainproduct from '@/components/r-mainproduct/index'
// 商品切换组件
import goodstabs from './component/r-goodstabs'
// api
import { getGoodsDetail, getHourListData } from '@/api/goods'
// vueroute
import { useRoute } from 'vue-router'
// vue
import { nextTick, provide, ref, watch } from 'vue'
// vuex
import { useStore } from 'vuex'
// 消息提示组件
import Message from '@/utils/messageUI'
export default {
  name: 'goodsDetail',
  setup () {
    // 加入购物车按钮loading加载
    const addloading = ref(false)
    // vuex
    const store = useStore()
    // 用户选中的数量
    const count = ref(1)
    // 商品数据
    const { goods, loading, hotproductData } = useGoods()
    //  父子组件
    provide('goods', goods)
    // 设置省市区的默认值
    const provinceCode = ref('110000')
    // 设置默认的区
    const cityAreaCode = ref('119900')
    // 设置默认的地区code
    const countyCode = ref('110101')
    // 设置默认的填充文字
    const fullLocation = ref('')
    // 地区选中事件
    const selectCity = (data) => {
      fullLocation.value = data.fullLocation
    }
    // 判断是否有默认的地址数据
    if (goods.userAddresses) {
      const defaultAddr = goods.userAddresses.find(addr => addr.isDefault === 1)
      if (defaultAddr) {
        // 省
        provinceCode.value = defaultAddr.provinceCode
        // 市
        cityAreaCode.value = defaultAddr.cityCode
        // 地区
        countyCode.value = defaultAddr.countyCode
        // 完全地址
        fullLocation.value = defaultAddr.fullLocation
      }
    }
    // 用户选择完毕sku
    const changeSku = (data) => {
      if (data.price) {
        // 更新详情页上的数据
        goods.value.price = data.price
        goods.value.oldPrice = data.oldPrice
        goods.value.inventory = data.inventory
        // 用户选中的skuid
        goods.value.skuId = data.skuId
        // 更改计算器显示
        count.value = 1
      } else {
        count.value = 1
      }
    }
    // 加入购物车
    const addCart = async () => {
      if (!goods.value.skuId) {
        Message({
          type: 'error',
          text: '客官规格选择错误',
          offsetTop: 170
        })
        return
      }
      addloading.value = true
      // 判断用户是否选中规格是否选择齐全
      let params = {
        // SKUID
        skuId: goods.value.skuId,
        // 数量
        count: count.value
      }
      await store.dispatch('cart/addCart', params)
      Message({
        type: 'success',
        text: '加入购物车成功！',
        offsetTop: 170
      })
      // 取消按钮loading加载
      addloading.value = false
    }
    return {
      goods,
      selectCity,
      fullLocation,
      changeSku,
      count,
      loading,
      hotproductData,
      addCart,
      addloading
    }
  },
  components: {
    rgoodsdetailbread,
    rgoodsimage,
    rgoodsintroduce,
    rgoodssku,
    goodsrecommend,
    goodstabs,
    rmainproduct
  }
}

const useGoods = () => {
  const route = useRoute()
  const store = useStore()
  const goods = ref(null)
  // loading加载
  const loading = ref(false)
  // 24小时热门商品数据
  const hotproductData = ref([])
  // 监听路由的变化
  watch(() => route.params.id, () => {
    // loading 加载效果
    loading.value = false
    // 获取详情页数据
    getGoodsDetail(route.params.id).then(async data => {
      // 当id发生变化的时候 重置goods数据
      goods.value = null
      // nextTick 下一次dom更新循环结束的回调函数 返回的是一个promise
      await nextTick()
      goods.value = data.result
      console.log(goods.value.name)
      document.title = goods.value.name
      // 设置当前菜单的 选中项目
      if (goods.value.categories[0] && goods.value.categories[0].parent.name) {
        store.commit('user/setUserActive', goods.value.categories[0].parent.name)
      }
      // loading加载
      loading.value = true
    })
    // 获取24小时热卖数据
    getHourListData({ id: route.params.id, limit: 3, type: 1 }).then(data => {
      hotproductData.value = data.result
    })
  }, {
    immediate: true
  })
  return { goods, loading, hotproductData }
}

</script>

<style scoped lang="scss">
.loading-area{
  width: 100%;
  height: 500px;
  position: relative;
  .inner-logo{
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    border-radius: $borderRadius;
    min-height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.goods-detail-page{
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  .product-bread{
    margin: 20px 0;
  }
  .box{
    margin-bottom: 20px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: $borderRadius;
  }
  .product-info{
    background-color: #fff;
    display: flex;
    .left-image{
      width: 480px;
      margin-right: 48px;
      .brand-list{
        margin-top: 30px;
      }
    }
    .right-spec{
      flex: 1;
      background-color: #fff;
      .product-name{
        font-size: 22px;
        color: #333;
        margin: 0 0 10px 0;
      }
      .product-desc{
        font-size: 13px;
        color: #666;
      }
      .product-price-area{
        margin: 20px 0;
        display: flex;
        align-items: center;
        .r-price-components{
          &:last-child {
            margin-left: 10px;
          }
        }
      }
      .product-server{
        background-color: #f5f5f5;
        padding: 20px;
        box-sizing: border-box;
        border-radius: $borderRadius;
        ul{
          li{
            &:nth-child(2){
              margin: 10px 0;
            }
            display: flex;
            align-items: center;
            p{
              margin-right: 15px;
            }
            .server-list{
              display: flex;
              align-items: center;
              a{
                color: $txColor;
              }
              span{
                margin-right: 10px;
                display: flex;
                align-items: center;
                &:before{
                  content: '';
                  display: inline-block;
                  width: 5px;
                  height: 5px;
                  border-radius: 50%;
                  background-color: $txColor;
                  margin-right: 4px;
                }
              }
            }
          }
        }
      }
    }
  }
  .product-same{
    background-color: #fff;
  }
  .product-detail-info{
    display: flex;
    justify-content: space-between;
    .left-detail{
      width: 940px;
      background-color: #fff;
      border-radius: $borderRadius;
      margin-bottom: 40px;
      padding-bottom: 40px;
    }
    .right-product{
      width: 260px;
      height: 1020px;
      background-color: #fff;
      border-radius: $borderRadius;
      padding: 15px;
      box-sizing: border-box;
      margin-bottom: 40px;
      .hotlist{
        margin-top: 20px;
      }
      .title{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $txColor;
        text-align: center;
        line-height: 50px;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        border-radius: $borderRadius;
        i{
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
