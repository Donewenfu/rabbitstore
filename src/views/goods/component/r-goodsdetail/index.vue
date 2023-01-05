<template>
  <div class="c-goodsdetail-components">
    <div class="product-info">
      <ul class="attrs">
        <li v-for="item in goods.details.properties" :key="item.value">
          <span class="dt">{{item.name}}:</span>
          <span class="dd">{{item.value}}</span>
        </li>
      </ul>
    </div>
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
  .product-info{
    padding: 30px;
    box-sizing: border-box;
    .attrs {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 30px;
      li {
        display: flex;
        margin-bottom: 10px;
        width: 50%;
        .dt {
          width: 100px;
          color: #999;
        }
        .dd {
          flex: 1;
          color: #666;
        }
      }
    }
  }
  .product-detail-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    .detail-img{
      width: 90%;
    }
  }
}
</style>
