<template>
  <div class="goods-detail-page">
    <div class="container">
      <!--面包屑导航-->
      <div class="product-bread">
        <!--商品详情面包屑导航组件 -->
        <rgoodsdetailbread :goodsData="goods"></rgoodsdetailbread>
      </div>
      <!--商品介绍区域-->
      <div class="product-info box">商品详情区域</div>
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
// api
import { getGoodsDetail } from '@/api/goods'
// vueroute
import { useRoute } from 'vue-router'
import { ref } from 'vue'
export default {
  name: 'goodsDetail',
  setup () {
    const goods = useGoods()
    return {
      goods
    }
  },
  components: {
    rgoodsdetailbread
  }
}

const useGoods = () => {
  const route = useRoute()
  const goods = ref(null)
  getGoodsDetail(route.params.id).then(data => {
    console.log(data)
    goods.value = data.result
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
  }
  .product-same{
    background-color: #fff;
  }
  .product-detail-info{
    background-color: #fff;
  }
}
</style>
