<template>
        <div class="r-red-pack-components" v-show="visible" :class="showAnimated?'':'hide'">
          <div class="c-red-pack-mask" >
              <img src="http://yingtuadmin.spanishknow.com/airticket/20230117163939.png" :class="showAnimated?'show':''"  alt="大红包" @click="getRedpick">
          </div>
        </div>
</template>

<script>
// vue
import { ref, watch } from 'vue'
// 消息提示组件
import Message from '@/utils/messageUI'
// 本地存储方法
import { setStorageData } from '@/utils/storage'
export default {
  name: 'rredpack',
  props: {
    // v-model 组件数据双休绑定
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    // 是否显示弹窗
    const visible = ref(false)
    // 动画显示的常量
    const showAnimated = ref(false)
    // 监听器
    watch(() => props.modelValue, () => {
      if (props.modelValue) {
        document.getElementsByTagName('body')[0].style = 'overflow:hidden;'
      } else {
        document.getElementsByTagName('body')[0].style = 'overflow-y:scroll;'
      }
      visible.value = props.modelValue
      showAnimated.value = props.modelValue
    }, {
      immediate: true
    })
    // 获取红包
    const getRedpick = () => {
      showAnimated.value = !showAnimated.value
      setTimeout(() => {
        emit('update:modelValue', !visible.value)
        Message({
          type: 'success',
          text: '恭喜小主，2023高薪就业！',
          duration: 4000,
          offsetTop: 170
        })
      },300)

      // 如果用户点击了打开红包下次 进入首页的时候不在打开
      setStorageData('openredpack', true)
    }
    return {
      visible,
      getRedpick,
      showAnimated
    }
  }
}
</script>

<style lang="scss" scoped>
@-moz-keyframes bounce-in {
  0% {
    transform: scale(.5)
  }

  45% {
    transform: scale(1.05)
  }

  80% {
    transform: scale(.95)
  }

  100% {
    transform: scale(1)
  }
}

@-webkit-keyframes bounce-in {
  0% {
    transform: scale(.5)
  }

  45% {
    transform: scale(1.05)
  }

  80% {
    transform: scale(.95)
  }

  100% {
    transform: scale(1)
  }
}

@-o-keyframes bounce-in {
  0% {
    transform: scale(.5)
  }

  45% {
    transform: scale(1.05)
  }

  80% {
    transform: scale(.95)
  }

  100% {
    transform: scale(1)
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(.5)
  }

  45% {
    transform: scale(1.05)
  }

  80% {
    transform: scale(.95)
  }

  100% {
    transform: scale(1)
  }
}

@-moz-keyframes zoom-out {
  to {
    opacity: .01;
    transform: scale(.75)
  }
}

@-webkit-keyframes zoom-out {
  to {
    opacity: .01;
    transform: scale(.75)
  }
}

@-o-keyframes zoom-out {
  to {
    opacity: .01;
    transform: scale(.75)
  }
}

@keyframes zoom-out {
  to {
    opacity: .01;
    transform: scale(.75)
  }
}

.r-red-pack-components{
  width: 100%;
  overflow: hidden;

  //height: 100%;
  .c-red-pack-mask{
    position: fixed;
    width: 100%;
    //height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 240px;
      cursor: pointer;
      border-radius: 10px;
    }
    .show{
      animation: bounce-in 300ms linear;
    }
    .hide{
      animation: zoom-out 250ms linear;
    }
  }
}

</style>
