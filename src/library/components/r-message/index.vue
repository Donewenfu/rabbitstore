<template>
    <div class="r-message-components" :style="[style[type]]" v-show="visible">
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
    }
  },
  setup () {
    const style = {
      warn: {
        icon: 'icon-cuowu',
        color: '#E6A23C',
        backgroundColor: '#fff',
        borderColor: 'rgba(250, 236, 216, 0.5)'
      },
      error: {
        icon: 'icon-cuowu1',
        color: '#F56C6C',
        backgroundColor: '#fff',
        borderColor: 'rgba(253, 226, 226, 0.5)'
      },
      success: {
        icon: 'icon-zhengque',
        color: '#67C23A',
        backgroundColor: '#fff',
        borderColor: 'rgba(225, 243, 216, 0.5)'
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
.r-message-components{
  position: fixed;
  z-index: 9999;
  display: flex;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  align-items: center;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 25px;
  box-sizing: border-box;
  border-radius: $borderRadius;
  box-shadow: 1px 3px 10px rgb(0 0 0 / 5%);
  border-width: 1px;
  border-style: solid;
  span{
    margin-left: 5px;
  }
}
</style>
