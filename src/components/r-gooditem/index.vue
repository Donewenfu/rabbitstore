<template>
  <div class="r-goodsitem-component" @click="godetail(goodsData)">
    <img class="goods-img" :src="goodsData.picture" alt="">
    <!--商品标题-->
    <div class="goodsitem-name">{{ goodsData.name }}</div>
    <!--商品描述-->
    <div class="goodsitem-desc ellipsis">{{ goodsData.desc }}</div>
    <!--商品价格-->
    <div class="goodsitem-price">
      <!--价格组件-->
      <rprice :price="goodsData.price" size="18"></rprice>
    </div>
  </div>
</template>

<script>
// vue-router
import { useRouter } from 'vue-router'
export default {
  name: 'rgooditem',
  props: {
    // 商品数据
    goodsData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup () {
    // vue-route
    const router = useRouter()
    // 跳转页面
    const godetail = (data) => {
      router.push({
        path: `/goodsdetail/${data.id}`
      })
    }
    return { godetail }
  }
}
</script>

<style scoped lang="scss">
.r-goodsitem-component{
  width: 220px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all .3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover{
    box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
  }
  .goods-img{
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
  }
  .goodsitem-name{
    margin: 10px 0 6px 0;
    font-size: 14px;
    color: #333;
    width: 100%;
    text-align: center;
  }
  .goodsitem-desc{
    margin: 2px 0;
    font-size: 12px;
    color: #999;
    width: 100%;
    text-align: center;
  }
  .goodsitem-price{
    margin: 5px 0;
    display: flex;
    justify-content: center;
  }
}
</style>
