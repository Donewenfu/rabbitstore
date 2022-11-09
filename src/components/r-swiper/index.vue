<template>
  <div class="r-swiper-components" :style="swiperStyle" @mouseenter="showNextPrevious = true" @mouseleave="showNextPrevious = false">
    <div class="r-swiper-item">
      <img src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg" alt="">
    </div>
    <!--上一张下一张-->
    <div class="next-previous"  v-if="showNextPrevious">
      <div class="previous-icon icon">
        <i class="iconfont icon-previous-icon"></i>
      </div>
      <div class="next-icon icon">
        <i class="iconfont icon-next-icon"></i>
      </div>
    </div>
    <!--轮播点-->
    <div class="r-circle-dot">
      <ul>
        <li></li>
        <li></li>
        <li class="active"></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'rswiper',
  props: {
    // 轮播图宽度
    width: {
      type: Number,
      default: 1052
    },
    // 轮播图高度
    height: {
      type: Number,
      default: 426
    }
  },
  setup (props) {
    // 是否显示切换上一张下一张按钮
    const showNextPrevious = ref(false)
    const swiperStyle = computed(() => {
      return {
        width: props.width + 'px',
        height: props.height + 'px'
      }
    })
    return { swiperStyle, showNextPrevious }
  }
}
</script>

<style scoped lang="scss">
.r-swiper-components{
  background-color: #fff;
  border-radius: $borderRadius;
  overflow: hidden;
  position: relative;
  .r-swiper-item{
    width: 100%;
    height: 100%;
    cursor: pointer;
    img{
      display: inline-block;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  }
  .next-previous{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    position: absolute;
    z-index: 999;
    top: 0;
    .icon{
      cursor: pointer;
      width: 50px;
      height: 50px;
      background-color: rgba(0,0,0,0.2);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .iconfont{
        font-size: 20px;
        color: #fff;
      }
    }
    .previous-icon{
      margin-left: 19px;
    }
    .next-icon{
      margin-right: 19px;
    }
  }
  .r-circle-dot{
    position: absolute;
    z-index: 9999;
    bottom: 20px;
    width: 100%;
    ul{
      width: 100%;
      justify-content: center;
      display: flex;
      li{
        cursor: pointer;
        width: 10px;
        border-radius: 50%;
        height: 10px;
        margin: 0 5px;
        background-color: rgba(255,255,255,0.5);
        &.active{
          background-color: #fff;
        }
      }
    }
  }
}
</style>
