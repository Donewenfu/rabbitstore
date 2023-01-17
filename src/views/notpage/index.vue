<template>
  <div class="notpage">
    <div class="notpage-content">
      <img src="../../assets/images/logo.svg" alt="">
      <div class="right-back">
        <p>亲！没有该页面哦</p>
        <rbutton size="small" @click="gobackHome">去购物</rbutton>
      </div>
    </div>

  </div>
</template>

<script>
// vue-router
import { useRouter } from 'vue-router'

export default {
  name: 'notpage',
  setup () {
    // router
    const router = useRouter()
    const gobackHome = () => {
      router.replace('/')
    }
    return {
      gobackHome
    }
  }
}
</script>

<style scoped lang="scss">
.notpage-content{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  align-items: center;
  img{
    width:90px;
  }
  .right-back{
    border-left: 1px solid #e6e6e6;
    padding-left: 20px;
    margin-left: 10px;
    p{
      margin-bottom: 10px;
    }
    :deep{
      button{
        height: 30px !important;
        width: 80px !important;
      }
    }
  }
}
</style>
