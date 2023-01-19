<template>
  <div class="r-nav-components">
    <div class="r-nav-inner container clearfix">
      <div class="fr">
        <ul>
          <!--已登录-->
          <template v-if="profile.account">
            <li>
              <a href="javascript:;">{{ profile.account }}</a>
            </li>
            <li>
              <a href="javascript:;" @click="logout">退出登录</a>
            </li>
          </template>
          <!--未登录-->
          <template v-else>
            <li>
              <a href="javascript:;" @click="goUrl('login')">请先登录</a>
            </li>
            <li>
              <a href="javascript:;">免费注册</a>
            </li>
          </template>
          <li>
            <a href="javascript:;" @click="goUrl('order')">我的订单</a>
          </li>
          <li>
            <a href="javascript:;" @click="goUrl('vip')">会员中心</a>
          </li>
          <li>
            <a href="javascript:;">帮助中心</a>
          </li>
          <li>
            <a href="javascript:;">在线客服</a>
          </li>
          <li>
            <i class="iconfont icon-shouji"></i>
            <a href="javascript:;">手机版</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// vuex
import { useStore } from 'vuex'
// 计算属性
import { computed } from 'vue'
// vue-router
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'appnav',
  setup () {
    // vuex
    const store = useStore()
    // vue-router
    const router = useRouter()
    // 当前路由对象
    const route = useRoute()
    // 计算属性 获取用户的账户信息 判断是否需要显示账号
    const profile = computed(() => {
      return store.state.user.profile
    })
    // 跳转页面
    const goUrl = (urlName) => {
      switch (urlName) {
        case 'login':
          // 跳转到登录界面
          router.push(`/login?redirectUrl=${encodeURIComponent(route.path)}`)
          break
        case 'order':
          if (profile.value.token) {
            router.push('/member/order')
          } else {
            router.push(`/login?redirectUrl=${encodeURIComponent('/member/order')}`)
          }
          break
        case 'vip':
          if (profile.value.token) {
            router.push('/member/info')
          } else {
            router.push(`/login?redirectUrl=${encodeURIComponent('/member/info')}`)
          }
      }
    }
    // 用户点击退出登录
    const logout = () => {
      // 调用退出登录方法
      store.commit('user/userLogout', { profile: {}, logoutPath: route.path })
    }
    return {
      profile,
      goUrl,
      logout
    }
  }
}
</script>

<style scoped lang="scss">
.r-nav-components{
  background-color: #19ce60;
  padding-top: 14px;
  padding-bottom: 14px;
  position: relative;
  z-index: 99999;
  .r-nav-inner{
    ul{
      li{
        cursor: pointer;
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
            background-color: rgba(255, 255, 255, 0.8);
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
