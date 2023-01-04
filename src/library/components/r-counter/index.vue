<template>
  <div class="c-counter-components">
    <a href="javascript:;" class="subtraction icon" @click="changeCount(-1)">-</a>
    <input type="text" :value="modelValue" class="coun" readonly>
    <a href="javascript:;" class="addnum icon" @click="changeCount(1)">+</a>
  </div>
</template>

<script>
import { useVModel } from '@vueuse/core'
export default {
  name: "rcounter",
  props: {
    // 数据双向绑定
    modelValue: {
      type: Number,
      default: 1
    },
    // 最小数字
    min: {
      type: Number,
      default: 1
    },
    // 最大数字
    max: {
      type: Number,
      default: 99
    }
  },
  setup (props, { emit }) {
    // 原始绑定 v-model 可以使用vueuse的插件实现
    // const count = ref(1)
    // const changeCount = (name) => {
    //   if (name === 'sub') {
    //     if (count.value <= props.min) return
    //     count.value--
    //   } else {
    //     if (count.value >= props.max) return
    //     count.value++
    //   }
    //   emit('update:modelValue', count.value)
    // }
    // watch(() => props.modelValue, () => {
    //   count.value = props.modelValue
    // }, {
    //   immediate: true
    // })
    // return {
    //   changeCount
    // }
    const count = useVModel(props, 'modelValue', emit)
    const changeCount = (num) => {
      const newValue = count.value + num
      // 如果相加的数字小于那么就不赋值
      if (newValue < props.min) return
      if (newValue > props.max) return
      // 赋值
      count.value = newValue
      // 自定义事件
      emit('change', count.value)
    }
    return {
      changeCount
    }
  }
}
</script>

<style scoped lang="scss">
.c-counter-components{
  display: flex;
  align-items: center;
  margin: 15px 0;
  .icon{
    width: 30px;
    height: 30px;
    background-color: #f8f8f8;
    border: 1px solid #e4e4e4;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      border: 1px solid #e4e4e4;
      opacity: .8;
    }
    &:first-child{
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:last-child{
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
  input{
    width: 70px;
    text-align: center;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    height: 30px;
  }
}
</style>
