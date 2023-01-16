<template>
      <div class="r-message-components" :style="[style[type],{'top':offsetTop+'px'}]" v-show="visible">
        <i class="iconfont" :class="[style[type].icon]"></i>
        <span>{{ text }}</span>
      </div>
</template>

<script>
// vue 使用render函数  参数1 虚拟节点  Dom容器  render 渲染虚拟节点
import { onMounted, ref } from 'vue'
export default {
  name: 'rmessage',
  props: {
    // 消息组件类型
    type: {
      type: String,
      default: 'error'
    },
    // 消息组件默认消息
    text: {
      type: String,
      default: '消息组件默认消息'
    },
    // 距离顶部的高度
    offsetTop: {
      type: Number,
      default: 30
    }
  },
  setup () {
    const style = {
      warn: {
        icon: 'icon-cuowu',
        color: '#E6A23C',
        backgroundColor: '#fff',
        borderColor: 'rgba(250, 236, 216, 0.8)'
      },
      error: {
        icon: 'icon-cuowu1',
        color: '#F56C6C',
        backgroundColor: '#fff',
        borderColor: 'rgba(253, 226, 226, 0.8)'
      },
      success: {
        icon: 'icon-zhengque',
        color: '#67C23A',
        backgroundColor: '#fff',
        borderColor: 'rgba(225, 243, 216, 0.8)'
      }
    }
    // 控制元素是否显示隐藏
    const visible = ref(false)
    // 当组件渲染完毕 显示消息提示组件
    onMounted(() => {
      visible.value = true
    })
    return {
      style,
      visible
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes enteranimated {
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  from{
    opacity: 1;
  }
}
.r-message-components{
  position: fixed;
  z-index: 9999999;
  display: flex;
  min-width: 150px;
  align-items: center;
  justify-content: center;
  left: 50%;
  background-color: #fff;
  margin-left: -100px;
  margin-right: auto;
  padding: 8px 25px;
  box-sizing: border-box;
  border-radius: $borderRadius;
  box-shadow: 1px 3px 10px rgb(0 0 0 / 5%);
  border-width: 1px;
  border-style: solid;
  animation: shake .8s linear;
  span{
    margin-left: 5px;
  }
}
</style>
