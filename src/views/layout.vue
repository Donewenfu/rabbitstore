<template>
  <div class="layout">
    <!--顶部组件-->
    <div class="nav-area">
      <rnav></rnav>
    </div>
    <!--顶部导航组件-->
    <div class="header-area">
      <rheader :userActive="userActive"></rheader>
    </div>
    <!--顶部吸顶组件-->
    <div class="header-sticky">
      <stickynav :userActive="userActive"></stickynav>
    </div>
    <!--网站内容区域-->
    <div class="content-main">
      <router-view></router-view>
    </div>
    <!--网站页脚组件-->
    <div class="footer-area">
      <rfooter></rfooter>
    </div>
    <!--返回顶部组件-->
    <rgotop></rgotop>
  </div>
</template>

<script>
// 通用导航组件 评价
import rnav from '@/components/r-nav/index'
// 返回顶部组件
import rgotop from '@/components/r-gotop/index'
// 菜单logo组件
import rheader from '@/components/r-header/index'
// 页脚组件
import rfooter from '@/components/r-footer/index'
// 顶部吸顶组件
import stickynav from '@/components/r-stickynav'
// vuex
import { useStore } from 'vuex'
// vue
import { computed, provide } from 'vue'
// vuerouter
import { useRoute } from 'vue-router'

export default {
  name: 'layout',
  setup () {
    // vuex数据
    const store = useStore()
    // vueroute
    const route = useRoute()
    // 计算属性
    const navListData = computed(() => {
      return store.state.category.cateList
    })
    // userRouterActive
    const userActive = computed(() => {
      return store.state.user.userActive
    })
    // 使用vuex 发送dispatch actions 异步提交 mutations
    store.dispatch('category/setListData')
    // 更新首页选中
    store.commit('user/setUserActive', store.state.user.userActive || store.state.category.cateList[0].name)
    // 将数据提供给后代组件 provide
    provide('navList', navListData)
    return { userActive }
  },
  components: {
    rnav,
    rheader,
    rfooter,
    stickynav,
    rgotop
  }
}
</script>
