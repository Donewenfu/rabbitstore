<template>
  <div class="c-goodsdetail-components">
    <div class="product-detail-info">
      <img v-for="item in goods.details.pictures" :key="item" :src="item" alt="" class="detail-img"/>
    </div>
  </div>
</template>

<script>
// vue
import { inject } from 'vue'
export default {
  name: "cgoodsdetail",
  setup () {
    // 商品数据
    const goods = inject('goods')
    // 返回商品数据
    return {
      goods
    }
  }
}
</script>

<style scoped lang="scss">
.c-goodsdetail-components{
  .product-detail-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    .detail-img{
      width: 600px;
    }
  }
}
</style>
