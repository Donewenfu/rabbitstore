<template>
  <div class="r-product-components" @click="goUrl">
    <!--商品图片区域-->
    <div class="r-product-img">
      <img  alt="" v-lazy="product.picture">
    </div>
    <div class="r-product-info">
      <h4 class="ellipsis" :title="product.name">{{product.name}}</h4>
      <rprice size="16" :price="product.price"></rprice>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'rproduct',
  props: {
    // 商品数据
    product: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup (props) {
    const router = useRouter()
    const goUrl = () => {
      router.push({
        path: '/goodsdetail/' + props.product.id
      })
    }
    return {
      goUrl
    }
  }
}
</script>

<style scoped lang="scss">
.r-product-components{
  cursor: pointer;
  width: 260px;
  .r-product-img{
    img{
      width: 100%;
      height: 260px;
    }
  }
  .r-product-info{
    height: 98px;
    background-color: #F0F9F4;
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h4{
      font-size: 14px;
      color: #333;
      margin-bottom: 10px;
      width: 80%;
    }
  }
}
</style>
