<template>
  <div class="layout">
    <div class="nav-area">
      <rnav></rnav>
    </div>
    <div class="header-area">
      <rheader></rheader>
    </div>
    <div class="content-main">
      <router-view></router-view>
    </div>
    <div class="footer-area">页脚区域</div>
  </div>
</template>

<script>
// 通用导航组件
import rnav from '@/components/r-nav/index'
// 菜单logo组件
import rheader from '@/components/r-header/index'
export default {
  name: 'layout',
  setup () {

  },
  components: {
    rnav,
    rheader
  }
}
</script>

<style scoped lang="scss">
</style>
