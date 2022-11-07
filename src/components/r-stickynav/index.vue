<template>
  <div class="c-stickynav-components" :class="{'show':y>75}" >
    <div class="container clearfix innercontent">
      <!--导航区域-->
      <rnavlink class="fl" comType="sticky" v-show="y>75"></rnavlink>
    </div>
  </div>
</template>

<script>
// 导航链接组件
import rnavlink from '@/components/r-navlink'
// 获取滚动高度
import { useWindowScroll } from '@vueuse/core'
export default {
  name: 'stickynav',
  components: {
    rnavlink
  },
  setup () {
    // 获取滚动的高度
    const { y } = useWindowScroll()
    return { y }
  }
}
</script>

<style scoped lang="scss">
.c-stickynav-components{
  .innercontent{
    display: flex;
    align-items: center;
  }
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 5px 5px 10px #ececec;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: all .3s linear;
  &.show{
    opacity: 1;
  }
}
</style>
