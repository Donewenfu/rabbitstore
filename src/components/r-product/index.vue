<template>
  <div class="r-product-components">
    <!--商品图片区域-->
    <div class="r-product-img">
      <img :src="product.picture" alt="">
    </div>
    <div class="r-product-info">
      <h4 class="ellipsis" :title="product.name">{{product.name}}</h4>
      <rprice size="16" ></rprice>
    </div>
  </div>
</template>

<script>
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
