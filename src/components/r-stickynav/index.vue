<template>
  <div class="c-stickynav-components" :class="{'show':y>75}">
    <div class="container clearfix innercontent">
      <!--logo-->
      <rlogo logoStyle="horizontal" :logo-width="150" class="fl"></rlogo>
      <!--导航区域-->
      <rnavlink class="fl"></rnavlink>
    </div>
  </div>
</template>

<script>
import rlogo from '@/components/r-logo'
import rnavlink from '@/components/r-navlink'
import { useWindowScroll } from '@vueuse/core'
export default {
  name: 'stickynav',
  components: {
    rlogo,
    rnavlink
  },
  setup () {
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
