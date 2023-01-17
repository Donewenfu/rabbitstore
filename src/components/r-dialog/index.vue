<template>
  <div class="r-dialog-components" v-show="visible" >
    <!-- 遮罩 -->
    <div class="r-dialog-mask" :class="{fade, leave: !fade}"></div>
    <!-- dialog 内容区域 -->
    <div class="r-dialog-content" :style="[dialogStyle]" :class="{fade}">
      <!-- dialog标题 -->
      <div class="r-dialog-head">
        <div class="head-title">{{ title }}</div>
        <i class="iconfont icon-guanbi1" @click="closeDialog"></i>
      </div>
      <!-- dialog内容区域 -->
      <div class="r-dialog-body">
        <slot>内容区域</slot>
      </div>
      <!-- dialog footer -->
      <div class="r-dialog-footer" v-if="showFooter">
        <rbutton type="line" size="default" @click="closeDialog">取消</rbutton>
        <rbutton size="default" @click="confirm">确认</rbutton>
      </div>
    </div>
  </div>
</template>

<script>
// vue
import { computed, watch, ref } from 'vue'
export default {
  name: 'rdialog',
  props: {
    // dialog标题
    title: {
      type: String,
      default: '默认标题'
    },
    // dialog宽度
    width: {
      type: String,
      default: '300px'
    },
    // dialog高度
    height: {
      type: String,
      default: '200px'
    },
    // 距离顶部的位置
    top: {
      type: String,
      default: '50%'
    },
    // dialog是否显示
    visible: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { emit }) {
    const dialogStyle = computed(() => {
      return {
        width: props.width,
        height: props.height,
        top: props.top
      }
    })
    // 关闭弹窗
    const closeDialog = () => {
      emit('update:visible', false)
      emit('close')
    }
    const fade = ref(true)
    // 改造动画执行时机
    watch(() => props.visible, () => {
      if (props.visible === true) {
        document.body.style = 'overflow:hidden;'
      } else {
        document.body.style = 'overflow-y:scroll;'
      }
      setTimeout(() => {
        fade.value = props.visible
      }, 0)
    }, { immediate: true })
    // 用户点击确认
    const confirm = () => {
      emit('confirm')
    }
    return {
      dialogStyle,
      closeDialog,
      fade,
      confirm
    }
  }
}
</script>

<style scoped lang="scss">
.r-dialog-components{
  width: 100%;
  height: 100%;
  &.leave{
    transition: all .4s;
    opacity: 0;
  }
  .r-dialog-mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0);
    &.fade{
      transition: all .4s;
      background-color: rgba(0, 0, 0, .5);
    }
  }
  .r-dialog-content{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 100000;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: $borderRadius;
    opacity: 0;
    &.fade{
      transition: all 0.4s;
      transform: translate(-50%,-51%);
      opacity: 1;
    }
    .r-dialog-head{
      widows: 100%;
      border-bottom: 1px solid #e6e6e6;
      padding: 20px 17px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      i{
        cursor: pointer;
        font-size: 20px !important;
        &:hover{
          background-color: rgb(238, 238, 238);
          display: inline-block;
          border-radius: 3px;
        }
      }
      .head-title{
        font-size: 16px;
        color: #333;
      }
    }
  }
  .r-dialog-body{
    flex: 1;
    padding: 15px;
    box-sizing: border-box;
  }
  .r-dialog-footer{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
    margin-right: 10px;
    :deep(button){
      margin: 10px 10px !important;
    }
  }
}
</style>
