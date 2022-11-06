<template>
  <div class="layout">
    <!--顶部组件-->
    <div class="nav-area">
      <rnav></rnav>
    </div>
    <!--顶部导航组件-->
    <div class="header-area">
      <rheader></rheader>
    </div>
    <!--顶部吸顶组件-->
    <div class="header-sticky">
      <stickynav></stickynav>
    </div>
    <!--网站内容区域-->
    <div class="content-main">
      <router-view></router-view>
    </div>
    <!--网站页脚组件-->
    <div class="footer-area">
      <rfooter></rfooter>
    </div>
  </div>
</template>

<script>
// 通用导航组件
import rnav from '@/components/r-nav/index'
// 菜单logo组件
import rheader from '@/components/r-header/index'
// 页脚组件
import rfooter from '@/components/r-footer/index'
// 顶部吸顶组件
import stickynav from '@/components/r-stickynav'
export default {
  name: 'layout',
  setup () {

  },
  components: {
    rnav,
    rheader,
    rfooter,
    stickynav
  }
}
</script>

<style scoped lang="scss">
</style>
