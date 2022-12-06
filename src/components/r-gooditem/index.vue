<template>
  <div class="r-goodsitem-component" @click="godetail">
    <img class="goods-img" src="https://yanxuan-item.nosdn.127.net/4c4ca084886c4f9eaf4cdbf9d7380b5c.jpg" alt="">
    <!--商品标题-->
    <div class="goodsitem-name">智能宠物喂食器mini</div>
    <!--商品描述-->
    <div class="goodsitem-desc ellipsis">双重锁鲜，科学喂养，远程操控</div>
    <!--商品价格-->
    <div class="goodsitem-price">
      <rprice price="200" size="18"></rprice>
    </div>
  </div>
</template>

<script>
// vue-router
import { useRouter } from 'vue-router'
export default {
  name: 'rgooditem',
  setup () {
    // vue-route
    const router = useRouter()
    // 跳转页面
    const godetail = () => {
      router.push({
        path: '/goodsdetail/100101'
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
  }
  .goodsitem-price{
    margin: 5px 0;
    display: flex;
    justify-content: center;
  }
}
</style>
