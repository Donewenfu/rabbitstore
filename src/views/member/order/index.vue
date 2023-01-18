<template>
  <div class="order-page">
    <!--顶部切换区域-->
    <rtab></rtab>
  </div>
</template>

<script>
// tab组件
import rtab from './component/r-tab'
export default {
  name: 'order',
  setup () {

  },
  components: {
    rtab
  }
}
</script>

<style scoped lang="scss">
.order-page{
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-radius: $borderRadius;
}
</style>
