<template>
  <div class="goods-detail-page">
    <div class="container">
      <!--面包屑导航-->
      <div class="product-bread">
        <!--商品详情面包屑导航组件-->
        <rgoodsdetailbread></rgoodsdetailbread>
      </div>
      <!--商品介绍区域-->
      <div class="product-info">商品介绍</div>
      <!--同类商品介绍区域-->
      <div class="product-same">相同商品介绍</div>
      <!--商品详情介绍-->
      <div class="product-detail-info">商品详情信息</div>
    </div>
  </div>
</template>

<script>
// 面包屑导航组件
import rgoodsdetailbread from './component/r-goodsdetailbread/index'
export default {
  name: 'goodsDetail',
  setup () {
    return {}
  },
  components: {
    rgoodsdetailbread
  }
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
}
</style>
