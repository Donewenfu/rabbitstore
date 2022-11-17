<template>
  <div class="logo" :style="logoWidthStyle" @click="goindex">
    <img src="../../assets/images/logo.svg" alt=""  v-if="logoStyle === 'header'" style="width: 70%">
    <img src="../../assets/images/logo-h.svg" alt=""  v-else>
  </div>
</template>

<script>
// vue
import { computed } from 'vue'
// vue-router
import { useRouter } from 'vue-router'
export default {
  name: 'index',
  props: {
    logoWidth: {
      type: Number,
      default: 60
    },
    // logo样式
    logoStyle: {
      type: String,
      default: 'header'
    }
  },
  setup (props) {
    // router
    const router = useRouter()
    // logo样式
    const logoWidthStyle = computed(() => {
      return {
        width: `${props.logoWidth}px`
      }
    })
    // 跳转到首页
    const goindex = () => {
      router.push({ path: '/' })
    }
    return {
      logoWidthStyle,
      goindex
    }
  }
}
</script>

<style scoped lang="scss">
.logo{
  cursor: pointer;
  transition: all .3s;
  &:hover{
    opacity: 0.9;
  }
  img{
    display: block;
    width: 90%;
  }
}
</style>
