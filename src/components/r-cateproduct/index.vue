<template>
  <div class="r-cateproduct-components">
    <div class="r-cateproduct-img">
      <img :src="productData.picture" alt="">
    </div>
    <div class="r-cateproduct-info">
      <div class="r-cateproduct-title ellipsis-2">{{ productData.name }}</div>
      <div class="r-cateproduct-desc ellipsis">{{ productData.desc }}</div>
      <div class="r-cateproduct-price">
        <rprice :price="productData.price" bold="500"></rprice>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rproduct',
  props: {
    productData: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
.r-cateproduct-components{
  cursor: pointer;
  display: flex;
  margin-right: 26px;
  margin-bottom: 38px;
  align-items: center;
  .r-cateproduct-img{
    img{
      width: 77px;
      height: 77px;
      border-radius: 5px;
      transition: all .3s;
    }
  }
  &:hover{
    img{
      transform: translateY(-3px);
    }
    .r-cateproduct-title{
      color: $txColor;
    }
  }
  .r-cateproduct-info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
    height: 77px;
    margin-left: 20px;
    .r-cateproduct-title{
      font-size: 13px;
      transition: all .3s;
    }
    .r-cateproduct-desc{
      font-size: 12px;
      color: #999;
    }
  }

}
</style>
