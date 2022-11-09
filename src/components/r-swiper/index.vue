<template>
  <div class="r-swiper-components" :style="swiperStyle" @mouseenter="showNextPrevious = true" @mouseleave="showNextPrevious = false">
    <div class="swiper-content" :style="swiperAnimatedStyle" @transitionend="endtransEnd">
      <div class="r-swiper-item" v-for="(item,index) in swiperData" :key="index">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="r-swiper-item" v-if="swiperData.length>1">
        <img :src="swiperData[0].imgUrl" alt="">
      </div>
    </div>
    <!--上一张下一张-->
    <div class="next-previous"  v-if="showNextPrevious">
      <div class="previous-icon icon" @click="changeSwiper('previous')">
        <i class="iconfont icon-previous-icon"></i>
      </div>
      <div class="next-icon icon" @click="changeSwiper('next')">
        <i class="iconfont icon-next-icon"></i>
      </div>
    </div>
    <!--轮播点-->
    <div class="r-circle-dot">
      <ul>
        <li v-for="(item,index) in swiperData" :key="item.id" :class="swiperCurrent === index?'active':''" @click="changeDot(index)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
// vue
import { computed, onMounted, ref } from 'vue'
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
    },
    // 轮播图数据
    swiperData: {
      type: Array,
      default () {
        return []
      }
    },
    // 滚动间隔时间
    durationTime: {
      type: Number,
      default: 4000
    }
  },
  setup (props) {
    // 是否显示切换上一张下一张按钮
    const showNextPrevious = ref(false)
    // 当前的轮播图索引
    const swiperCurrent = ref(0)
    // 轮播图计时器
    const timer = ref(null)
    // 是否应用 过渡动画
    const showTranstion = ref(true)
    // swiper 样式
    const swiperStyle = computed(() => {
      return {
        width: props.width + 'px',
        height: props.height + 'px'
      }
    })
    // 点击轮播点切换 轮播图
    const changeDot = (data) => {
      swiperCurrent.value = data
    }
    // 自动轮播
    const autoSwiper = () => {
      console.log(props.durationTime)
      clearInterval(timer.value)
      timer.value = setInterval(() => {
        // 判断当前轮播图是否已经到数组最后一张
        if (swiperCurrent.value === props.swiperData.length) {
          swiperCurrent.value = 0
          showTranstion.value = false
        } else {
          swiperCurrent.value++
          showTranstion.value = true
        }
      }, props.durationTime)
    }
    // css3 过渡动画结束事件
    const endtransEnd = () => {
      // 判断当前滚动index 是否等于 轮播图数据的长度 如果等于长度 取消滚动动画
      if (swiperCurrent.value === props.swiperData.length) {
        swiperCurrent.value = 0
        showTranstion.value = false
      }
    }
    // 轮播图滚动样式
    const swiperAnimatedStyle = computed(() => {
      return {
        transform: `translateX(-${swiperCurrent.value * props.width}px)`,
        width: (props.swiperData.length + 1) * props.width + 'px',
        'transition-duration': showTranstion.value ? '.3s' : ''
      }
    })
    // 点击上一张下一张切换轮播图
    const changeSwiper = (data) => {
      console.log(data)
      if (data === 'next') {
        if (swiperCurrent.value < props.swiperData.length) {
          swiperCurrent.value++
        }
      } else {
        if (swiperCurrent.value > 0) {
          swiperCurrent.value--
        }
      }
    }
    // 挂载完成
    onMounted(() => {
      autoSwiper()
    })
    return { swiperStyle, showNextPrevious, changeSwiper, swiperCurrent, swiperAnimatedStyle, changeDot, endtransEnd }
  }
}
</script>

<style scoped lang="scss">
.r-swiper-components{
  background-color: #fff;
  border-radius: $borderRadius;
  overflow: hidden;
  position: relative;
  .swiper-content{
    height: 100%;
    display: flex;
  }
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
