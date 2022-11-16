<template>
    <div class="r-gotop-components">
      <transition name="fade">
        <div class="r-gotop-box" v-show="y>200" @click="gotop">
          <i class="iconfont icon-shangjiantou"></i>
        </div>
      </transition>
    </div>
</template>

<script>
// vue 组合式api
import { useWindowScroll } from '@vueuse/core'
export default {
  name: 'rgotop',
  setup () {
    // vue use库 获取 页面滚动高度
    const { y } = useWindowScroll()
    // 点击返回顶部
    const gotop = () => {
      // 获取页面的滚动高度
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果 每隔 10毫米 减去 100 返回顶部
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 100
        if (top <= 0) {
          // 清除定时器
          clearInterval(timeTop)
        }
      }, 10)
    }
    return { y, gotop }
  }
}
</script>

<style scoped lang="scss">
//进入之前
.fade-enter-from{
  opacity: 0;
}

//进入中
.fade-enter-active{
  transition: opacity .3s linear;
}
//进入之后
.fade-enter-to{
  opacity: 1;
}

// 离开前
.fade-leave-form{
  opacity: 1;
}

//离开中
.fade-leave-active{
  transition: opacity .3s linear;
}
// 离开后
.fade-leave-to{
  opacity: 0;
}
.r-gotop-components{
    .r-gotop-box{
      width: 30px;
      height: 30px;
      background-color: $txColor;
      position: fixed;
      bottom: 46px;
      right: 46px;
      border-radius: $borderRadius;
      cursor: pointer;
      z-index: 9998;
      .iconfont{
        font-size: 16px;
        line-height: 30px;
        display: block;
        color: #fff;
        text-align: center;
      }
    }
}
</style>
