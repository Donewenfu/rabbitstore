<template>
  <div class="member-page">
    <!--内容区域-->
    <div class="member-content container">
      <div class="menu-area">
        <rmenu></rmenu>
      </div>
      <div class="content-area">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 菜单组件
import rmenu from './component/r-menu'
export default {
  name: 'member',
  setup () {

  },
  components: {
    rmenu
  }
}
</script>

<style scoped lang="scss">
.member-page{
  background-color: #f5f5f5;
  overflow: hidden;
  .member-content{
    display: flex;
    margin-top: 40px;
    margin-bottom: 40px;
    .menu-area{
      width: 248px;
    }
    .content-area{
      flex: 1;
      margin-left: 20px;
      border-radius: $borderRadius;
    }
  }
}
</style>
