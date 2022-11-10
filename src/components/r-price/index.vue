<template>
  <div class="r-price-components">
    <span class="priceunit" :style="priceStyle">{{ unit }}</span>
    <span class="pricenum" :style="priceStyle">{{ price }}</span>
  </div>
</template>

<script>
// vue
import { computed } from 'vue'
export default {
  name: 'rprice',
  props: {
    // 符号
    unit: {
      type: String,
      default: '￥'
    },
    // 大小
    size: {
      type: String,
      value: '28'
    },
    // 字体粗细
    bold: {
      type: String,
      value: '500'
    },
    price: {
      type: [Number, String],
      default: 100
    }
  },
  setup (props) {
    const priceStyle = computed(() => {
      return {
        'font-size': `${props.size}px`,
        'font-weight': props.bold
      }
    })
    return { priceStyle }
  }
}
</script>

<style scoped lang="scss">
.r-price-components{
  color: $priceColor;
}
</style>
