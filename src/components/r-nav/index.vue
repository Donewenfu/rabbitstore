<template>
  <div class="r-nav-components">
    <div class="r-nav-inner container clearfix">
      <div class="fr">
        <ul>
          <li>
            <a href="#">请先登录</a>
          </li>
          <li>
            <a href="#">免费注册</a>
          </li>
          <li>
            <a href="#">我的订单</a>
          </li>
          <li>
            <a href="#">会员中心</a>
          </li>
          <li>
            <a href="#">帮助中心</a>
          </li>
          <li>
            <a href="#">在线客服</a>
          </li>
          <li>
            <i class="iconfont icon-shouji"></i>
            <a href="#">手机版</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appnav'
}
</script>

<style scoped lang="scss">
.r-nav-components{
  background-color: #19ce60;
  padding-top: 16px;
  padding-bottom: 16px;
  .r-nav-inner{
    ul{
      li{
        float: left;
        a{
          color: #fff;
          font-size: 14px;
          display: inline-block;
          padding: 0 15px;
          position: relative;
          &:after{
            display: block;
            content: '';
            width: 1px;
            height: 14px;
            background-color: #fff;
            position: absolute;
            right: 0;
            top: 4px;
          }
        }
        &:last-child{
          display: flex;
          align-items: center;
          a{
            padding-left: 0;
            &:after{
              display: none;
            }
          }
          i{
            color: #fff;
            font-size: 15px;
            padding-left: 15px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
