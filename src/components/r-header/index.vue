<template>
  <div class="r-header-components clearfix">
    <div class="r-header-inner container clearfix">
      <!--链接导航组件-->
      <rnavlink comType="header"></rnavlink>
    </div>
  </div>
</template>

<script>
import rnavlink from '@/components/r-navlink'
export default {
  name: 'rheader',
  components: {
    rnavlink
  }
}
</script>

<style scoped lang="scss">
.r-header-components{
  width: 100%;
  height: 110px;
  background-color: #fff;
  .r-header-inner{
    height: 100%;
    .logo-area{
      width: 140px;
      float: left;
      cursor:pointer;
    }

  }
}
</style>
