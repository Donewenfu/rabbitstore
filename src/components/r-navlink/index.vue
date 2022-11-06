<template>
  <div class="r-navlink-components fl">
    <div class="fl">
      <ul class="clearfix">
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">生鲜</a>
        </li>
        <li>
          <a href="#">美食</a>
        </li>
        <li>
          <a href="#">餐厨</a>
        </li>
        <li>
          <a href="#">电器</a>
        </li>
        <li>
          <a href="#">居家</a>
        </li>
        <li>
          <a href="#">洗护</a>
        </li>
        <li>
          <a href="#">孕婴</a>
        </li>
        <li>
          <a href="#">服装</a>
        </li>
      </ul>
    </div>
    <!--搜索框-->
    <div class="search-area fl">
      <i class="iconfont icon-fangdajing"></i>
      <input type="text" placeholder="搜一搜">
    </div>
    <!--购物车-->
    <div class="cart-area fr">
      <i class="iconfont icon-gouwuche"></i>
      <span class="cartnum">8</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'navlink'
}
</script>

<style scoped lang="scss">
.r-navlink-components{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul{
    margin-left: 40px;
    height: 100%;
    li{
      float: left;
      height: 100%;
      a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 76px;
        text-align: center;
        transition: all .3s linear;
        height: 100%;
        &:hover{
          color: $txColor;
        }
      }
    }
  }
  .search-area{
    position: relative;
    margin-left: 18px;
    input{
      width: 200px;
      padding: 10px 10px 10px 28px;
      border-bottom: 1px solid #E7E7E7;
    }
    i{
      font-size: 15px;
      color: #333;
      position: absolute;
    }
  }
  .cart-area{
    cursor: pointer;
    position: relative;
    margin-left: 120px;
    i{
      font-size: 24px;
      color: #000;
    }
    .cartnum{
      position: absolute;
      top: -3px;
      right: -10px;
      background-color: #E26237;
      padding: 1px 4px;
      border-radius: 15px;
      color: #fff;
      font-size: 10px;
    }
  }
}
</style>
