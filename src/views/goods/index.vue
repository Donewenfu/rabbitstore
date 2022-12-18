<template>
  <div class="goods-detail-page" v-if="goods">
    <div class="container">
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
            商品服务区域
          </div>
        </div>
      </div>
      <!--同类商品介绍区域-->
      <div class="product-same box">相同商品介绍</div>
      <!--商品详情介绍-->
      <div class="product-detail-info box">商品详情信息</div>
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
// api
import { getGoodsDetail } from '@/api/goods'
// vueroute
import { useRoute } from 'vue-router'
import { nextTick, ref } from 'vue'
export default {
  name: 'goodsDetail',
  setup () {
    const goods = useGoods()
    return {
      goods
    }
  },
  components: {
    rgoodsdetailbread,
    rgoodsimage,
    rgoodsintroduce
  }
}

const useGoods = () => {
  // vueroute
  const route = useRoute()
  const goods = ref(null)
  getGoodsDetail(route.params.id).then(async data => {
    // 当id发生变化的时候 重置goods数据
    goods.value = null
    // nextTick 下一次dom更新循环结束的回调函数 返回的是一个promise
    await nextTick()
    goods.value = data.result
    console.log(goods)
  })
  return goods
}

</script>

<style scoped lang="scss">
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
      }
    }
  }
  .product-same{
    background-color: #fff;
  }
  .product-detail-info{
    background-color: #fff;
  }
}
</style>
