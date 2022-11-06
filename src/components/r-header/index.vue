<template>
  <div class="r-header-components clearfix">
    <div class="r-header-inner container clearfix">
      <div class="logo-area fl">
        <rlogo :logo-width="88" style="margin-top: 25px"></rlogo>
      </div>
      <!--链接导航组件-->
      <rnavlink></rnavlink>

    </div>
  </div>
</template>

<script>
import rnavlink from '@/components/r-navlink'
import rlogo from '@/components/r-logo'
export default {
  name: 'rheader',
  components: {
    rnavlink,
    rlogo
  }
}
</script>

<style scoped lang="scss">
.r-header-components{
  width: 100%;
  height: 120px;
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
