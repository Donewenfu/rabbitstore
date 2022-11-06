<template>
  <div class="logo">
    <img src="../../assets/images/logo.svg" alt="" :style="logoWidthStyle" v-if="logoStyle === 'normal'">
    <img src="../../assets/images/logo-h.svg" alt="" :style="logoWidthStyle" v-else>
  </div>
</template>

<script>
import { computed } from 'vue'
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
      default: 'normal'
    }
  },
  setup (props) {
    const logoWidthStyle = computed(() => {
      return {
        width: `${props.logoWidth}px`
      }
    })
    return {
      logoWidthStyle
    }
  }
}
</script>

<style scoped lang="scss">
.logo{
  img{
    display: block;
  }
}
</style>
