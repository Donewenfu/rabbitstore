<template>
  <div class="r-price-components"></div>
</template>

<script>
export default {
  name: 'index',
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
    }
  }
}
</script>

<style scoped lang="scss">

</style>
