<template>
  <div class="r-button-components">
    <button class="r-button" :class="[type,size]">
      <slot></slot>
    </button>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: "rbutton",
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'primary'
    },
    // 按钮的大小
    size: {
      type: String,
      default: 'large'
    }
  },
  setup () {
  }
}
</script>

<style scoped lang="scss">
.r-button-components{
  .r-button{
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    &:hover{
      opacity: .8;
    }
    &.primary{
      background-color: $txColor;
      color: #fff;
    }
    &.warning{
      background-color: $warnColor;
      color: #fff;
    }
    &.large{
      width: 160px;
      height: 40px;
    }
    &.default{
      width: 100px;
      height: 40px;
    }
    &.small{
      width: 80px;
      height: 30px;
      font-size: 12px !important;
    }
  }
}
</style>
