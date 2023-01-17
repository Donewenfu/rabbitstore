<template>
  <div class="r-confirm-components" >
    <!--遮罩-->
    <div class="r-confirm-mask" :class="{fade}" ></div>
    <!--confirm内容区域-->
    <div class="r-confirm-content" :style="[style[type]]" :class="{fade}">
      <!--confirm 标题-->
      <div class="confirm-title">
        <i class="iconfont" :class="[style[type].icon]"></i>
        <span>{{ title }}</span>
      </div>
      <!--confirm内容区域-->
      <div class="confirm-content">
        {{content}}
      </div>
      <!--confirm footer-->
      <div class="confirm-fooer">
        <rbutton type="small" @click="canCelCallback" v-if="showClose">取消</rbutton>
        <rbutton type="primary" size="default" @click="confirmCallback">确定</rbutton>
      </div>
    </div>
  </div>
</template>

<script>
// 按钮组件
import rbutton from '@/library/components/r-button'
import { useWindowSize } from '@vueuse/core'
import { onMounted, ref } from 'vue'
export default {
  name: 'rconfirm',
  props: {
    // 弹窗的类型
    type: {
      type: String,
      default: 'success'
    },
    // 标题
    title: {
      type: String,
      default: '温馨提示'
    },
    // 内容文字
    content: {
      type: String,
      default: '内容区域'
    },
    // 取消
    canCelCallback: {
      type: Function
    },
    // 确认
    confirmCallback: {
      type: Function
    },
    // 是否显示取消
    showClose: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    const { width, height } = useWindowSize()
    // fade动画
    const fade = ref(false)
    // 元素挂载渲染完成
    onMounted(() => {
      // 当元素渲染完毕立即过渡的动画不会触发
      setTimeout(() => {
        fade.value = true
      },0)
    })
    const style = {
      success: {
        icon: 'icon-zhengque',
        color: '#67C23A',
        backgroundColor: '#fff',
        borderColor: 'rgba(225, 243, 216, 0.8)'
      },
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
      }
    }
    return {
      style,
      fade,
      width,
      height
    }
  },
  components: {
    rbutton
  }
}
</script>

<style scoped lang="scss">
.r-confirm-components{
  width: 100%;
  height: 100%;
  //position: relative;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  //transform: translate(-50%);
  .r-confirm-mask{
    width: 100%;
    height: 100%;
    //position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    z-index: 100008;
    &.fade {
      transition: all 0.4s;
      background: rgba(0,0,0,.5);
    }
  }
  .r-confirm-content{
    width: 418px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 100009;
    transform: translate(-50%, -50%);
    border-radius: $borderRadius;
    padding: 15px;
    box-sizing: border-box;
    opacity: 0;
    &.fade {
      transition: all 0.4s;
      transform: translate(-50%,-50%);
      opacity: 1;
    }
    .confirm-title{
      display: flex;
      align-items: center;
      .iconfont{
        font-size: 20px !important;
        margin-right: 10px;
      }
      span{
        font-weight: bold;
      }
    }
    .confirm-content{
      margin: 20px 0;
    }
    .confirm-fooer{
      display: flex;
      justify-content: flex-end;
      :deep {
        button{
          margin: 0 5px;
        }
      }
    }
  }
}
</style>
