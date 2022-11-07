<template>
  <div class="logo" :style="logoWidthStyle">
    <img src="../../assets/images/logo.svg" alt=""  v-if="logoStyle === 'header'" style="width: 70%">
    <img src="../../assets/images/logo-h.svg" alt=""  v-else>
  </div>
</template>

<script>
// vue
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
      default: 'header'
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
  cursor: pointer;
  img{
    display: block;
    width: 90%;
  }
}
</style>
