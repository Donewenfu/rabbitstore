<template>
  <div class="layout">
    <div class="nav-area">导航区域</div>
    <div class="content-main">
      <router-view></router-view>
    </div>
    <div class="footer-area">页脚区域</div>
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style scoped lang="scss">
.nav-area{
  @include hoverShadow;
}
</style>
