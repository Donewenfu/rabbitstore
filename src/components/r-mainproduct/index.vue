<template>
  <div class="r-mainproduct-components" @click="goUrl">
    <!--商品图片-->
    <div class="product-img">
      <img  v-lazy="productData.picture" alt="">
    </div>
    <!--商品标题-->
    <div class="product-title">
      <p class="ellipsis">{{productData.name}}</p>
    </div>
    <!--描述标题-->
    <div class="product-desc">
      <p class="ellipsis-2">{{productData.desc}}</p>
    </div>
    <!--商品价格-->
    <div class="product-price">
      <rprice :price="productData.price" bold="700"></rprice>
    </div>
    <div class="findsame">
      <p>找相似</p>
      <p>发现更多宝贝</p>
    </div>
  </div>
</template>

<script>
// vue
import { useRouter } from 'vue-router'
export default {
  name: 'rmainproduct',
  props: {
    // 商品数据
    productData: {
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
        path: `/goodsDetail/${props.productData.id}`
      })
    }
    return {
      goUrl
    }
  }
}
</script>

<style scoped lang="scss">
.r-mainproduct-components{
  width: 230px;
  height: 304px;
  cursor: pointer;
  padding: 14px 28px;
  box-sizing: border-box;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  position: relative;
  border: 1px solid #fff;
  transition: all .3s;
  overflow: hidden;
  .product-img{
    width: 100%;
    height: 100%;
    img{
      display: block;
      width: 100%;
      height: 100%;
      transition: all .3s;
    }
  }
  .product-title{
    width: 90%;
    margin-top: 15px;
    color: #333;
  }
  .product-desc{
    width: 90%;
    color: #999;
    height: 40px;
  }
  &:hover{

    border: 1px solid $txColor;
    .findsame{
      transform: none;
    }
  }
  .findsame{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 84px;
    width: 100%;
    background-color: $txColor;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 999;
    transform: translate3d(0,100%,0);
    transition: all .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
      text-align: center;
      &:first-child{
        font-size: 16px;
        color: #fff;
        &:after{
          content: '';
          display: block;
          width: 123px;
          height: 1px;
          background-color: rgba(255,255,255,.5);
          margin: 10px 0;
        }
      }
      &:last-child{
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
</style>
