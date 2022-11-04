<template>
  <div class="r-header-components">
    <div class="r-header-inner container clearfix">
      <div class="logo-area fl">
        <img src="../../assets/images/logo.svg" alt="">
      </div>
      <div class="nav-list fl">
        <ul>
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
  </div>
</template>

<script>
export default {
  name: 'rheader'
}
</script>

<style scoped lang="scss">
.r-header-components{
  width: 100%;
  height: 120px;
  background-color: #fff;
  .r-header-inner{
    height: 100%;
    .logo-area{
      width: 140px;
      float: left;
      cursor:pointer;
      img{
        margin-top: 25px;
        display: inline-block;
        width: 88px;
      }
    }
    .nav-list{
      ul{
        margin-left: 40px;
        li{
          float: left;
          a{
            display: inline-block;
            line-height: 120px;
            margin-right: 48px;
          }
        }
      }
    }
    .search-area{
      line-height: 120px;
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
      i{
        line-height: 120px;
        font-size: 24px;
        color: #000;
      }
      .cartnum{
        position: absolute;
        top: 38px;
        right: -10px;
        background-color: #E26237;
        padding: 1px 4px;
        border-radius: 15px;
        color: #fff;
        font-size: 10px;
      }
    }
  }
}
</style>
