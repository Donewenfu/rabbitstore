<template>
  <div class="r-header-components clearfix">
    <div class="r-header-inner container clearfix">
      <!--链接导航组件-->
      <rnavlink comType="header" :userActive="userActive"></rnavlink>
    </div>
  </div>
</template>

<script>
import rnavlink from '@/components/r-navlink'
import { onMounted } from 'vue'
// vuex
import { useStore } from 'vuex'
export default {
  name: 'rheader',
  components: {
    rnavlink
  },
  props: {
    userActive: {
      type: String,
      default: ''
    }
  },
  setup () {
    const store = useStore()
    onMounted(() => {
      // 判断用户是否登录
      if (store.state.user.profile.token) {
        // 组件挂载完成 获取商品列表数据
        store.dispatch('cart/getCartList')
      }

    })
  }
}
</script>

<style scoped lang="scss">
.r-header-components{
  width: 100%;
  height: 110px;
  //background-image: url("../../assets/images/navbg.png");
  //background-repeat: no-repeat;
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
