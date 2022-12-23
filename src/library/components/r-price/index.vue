<template>
  <div class="r-price-components" :class="isLine?'lineclass':''">
    <span class="priceunit" :style="priceStyle">{{ unit }}</span>
    <span class="pricenum" :style="priceStyle">{{ priceNum }}</span>
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
    // 字体大小
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
    },
    // 是否自动填写
    autofix: {
      type: Boolean,
      default: false
    },
    // 是否微划线价格
    isLine: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    // 计算属性 生成价格样式
    const priceStyle = computed(() => {
      return {
        'font-size': `${props.size}px`,
        'font-weight': props.bold
      }
    })
    // 是否自动tofixed
    const priceNum = computed(() => {
      if (props.autofix) {
        return props.price.toFixed(2)
      } else {
        return props.price
      }
    })
    return { priceStyle, priceNum }
  }
}
</script>

<style scoped lang="scss">
.r-price-components{
  color: $priceColor;
}
.lineclass{
  text-decoration: line-through;
  color: #999;
}
</style>
