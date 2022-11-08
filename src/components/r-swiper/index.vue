<template>
  <div class="r-swiper-components" :style="swiperStyle">
    <img src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg" alt="">
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'rswiper',
  props: {
    // 轮播图宽度
    width: {
      type: Number,
      default: 1052
    },
    // 轮播图高度
    height: {
      type: Number,
      default: 426
    }
  },
  setup (props) {
    const swiperStyle = computed(() => {
      return {
        width: props.width + 'px',
        height: props.height + 'px'
      }
    })
    return { swiperStyle }
  }
}
</script>

<style scoped lang="scss">
.r-swiper-components{
  background-color: #fff;
  border-radius: $borderRadius;
  img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: $borderRadius;
  }
}
</style>
