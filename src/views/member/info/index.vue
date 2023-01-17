<template>
  <div class="info-page">
    <!--顶部用户信息-->
    <div class="top-info">
      <div class="left-user-avatar">
        <img :src="userProfile.avatar" alt="">
        <div class="welcome-text">
          <h3>你好! {{userProfile.nickname}}</h3>
          <p>欢迎来到象米商城！</p>
        </div>
      </div>
      <div class="right-user-select">
        <ul>
          <li @click="goPgae">
            <i class="iconfont icon-huiyuan"></i>
            <p>会员中心</p>
          </li>
          <li @click="goPgae">
            <i class="iconfont icon-shezhi"></i>
            <p>安全设置</p>
          </li>
          <li @click="goPgae">
            <i class="iconfont icon-dizhi1"></i>
            <p>地址管理</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// veux
import { useStore } from 'vuex'
// vue
import { computed } from 'vue'
// 消息提示
import message from '@/utils/messageUI'
export default {
  name: 'info',
  setup () {
    // vuex
    const store = useStore()
    // 获取vuex用户信息
    const userProfile = computed(() => {
      return store.state.user.profile
    })
    // 跳转页面
    const goPgae = () => {
      message({
        type: 'warn',
        text: '臣妾做不到啊！',
        offsetTop: 170
      })
    }
    return {
      userProfile,
      goPgae
    }
  }
}
</script>

<style scoped lang="scss">
.info-page{
  width: 100%;
  .top-info{
    border-top-left-radius: $borderRadius;
    border-top-right-radius: $borderRadius;
    width: 100%;
    height: 100px;
    background-color: $txColor;
    background-image: url("../../../assets/images/bglogo.png");
    background-size: 180px;
    background-repeat: no-repeat;
    background-position: bottom right;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-user-avatar{
      display: flex;
      align-items: center;
      height: 60px;
      img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #fff;
        margin-left: 50px;
      }
      .welcome-text{
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        justify-content: space-between;
        color: #fff;
        h3{
          margin-top: 5px;
        }
        p{
          margin-bottom: 5px;
        }
      }
    }
    .right-user-select{
      margin-right: 150px;
      ul {
        display: flex;
        align-items: center;
        li{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 20px;
          cursor: pointer;
          p{
            font-size:14px;
            color: #fff;
          }
          i{
            font-size: 28px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
