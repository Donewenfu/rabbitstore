<template>
  <div class="r-checkbox-components" @click="changeCheck">
    <!--选中样式-->
    <i class="iconfont icon-fangxingxuanzhong" v-if="ischeck"></i>
    <!--未选中样式-->
    <i class="iconfont icon-fangxingweixuanzhong" v-else></i>
    <!--checkbox内容-->
    <span class="label-text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
// vueuse
import { useVModel } from '@vueuse/core'
export default {
  name: 'rcheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    // checkBox 选中的状态
    const ischeck = useVModel(props, 'modelValue', emit)
    const changeCheck = () => {
      ischeck.value = !ischeck.value
      // 自定义事件
      emit('change', ischeck.value)
    }
    return { changeCheck, ischeck }
  }
}
</script>

<style scoped lang="scss">
.r-checkbox-components{
  display: flex;
  align-items: center;
  cursor: pointer;
  .icon-fangxingxuanzhong{
    color: $txColor;
    cursor: pointer;
  }
  .icon-fangxingweixuanzhong{
    color: #ccc;
    cursor: pointer;
  }
  .label-text{
    margin-left: 5px;
    font-size: 13px;
    color: #999;
  }
}
</style>
