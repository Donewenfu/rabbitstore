<template>
  <div class="r-swiper-components" :style="swiperStyle" @mouseenter="stopSwiper" @mouseleave="startSwiper">
    <div class="swiper-content" :style="swiperAnimatedStyle" @transitionend="endtransEnd">
      <div class="r-swiper-item" v-for="(item,index) in swiperData" :key="index">
        <img :src="item.imgUrl" alt="" v-if="item.imgUrl">
        <!--推荐商品数据-->
        <div class="recommend-product-list" v-else>
          <template v-for="(p,i) in item" :key="i">
            <rmainproduct :productData="p"></rmainproduct>
          </template>
        </div>
      </div>
      <!--新增的 第一张图片-->
      <div class="r-swiper-item" v-if="swiperData.length>1 && swiperData[0].imgUrl">
        <img :src="swiperData[0].imgUrl" alt="">
      </div>
    </div>
    <!--上一张下一张-->
    <div class="next-previous" v-if="showPageicon">
      <div class="previous-icon icon" @click="changeSwiper('previous')" v-if="swiperCurrent!=0">
        <i class="iconfont icon-previous-icon"></i>
      </div>
      <div class="next-icon icon" @click="changeSwiper('next')" >
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
import { computed, onMounted, onUnmounted, ref } from 'vue'
// 商品组件
import rmainproduct from '@/components/r-mainproduct/index'
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
      type: [Number, String],
      default: '426px'
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
      default: 2000
    },
    // 是否开启动画
    isAnimated: {
      type: Boolean,
      default: true
    },
    // 是否显示按钮图标
    showPageicon: {
      type: Boolean,
      default: true
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
    // 鼠标移出 轮播图开始轮播
    const startSwiper = () => {
      showNextPrevious.value = false
      autoSwiper()
    }
    // 自动轮播
    const autoSwiper = () => {
      // 清除定时器
      clearInterval(timer.value)
      // 每隔一段时间 轮播图片
      timer.value = setInterval(() => {
        const len = props.isAnimated ? props.swiperData.length : props.swiperData.length - 1
        // 判断当前轮播图是否已经到数组最后一张
        if (swiperCurrent.value === len) {
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
    // 移入轮播图停止轮播
    const stopSwiper = () => {
      showNextPrevious.value = true
      clearInterval(timer.value)
    }
    // 轮播图滚动样式
    const swiperAnimatedStyle = computed(() => {
      return {
        transform: `translateX(-${swiperCurrent.value * props.width}px)`,
        width: (props.swiperData.length + (props.isAnimated ? 1 : 0)) * props.width + 'px',
        'transition-duration': showTranstion.value && props.isAnimated ? '.3s' : ''
      }
    })
    // 点击上一张下一张切换轮播图
    const changeSwiper = (data) => {
      showTranstion.value = true
      const len = props.isAnimated ? props.swiperData.length : props.swiperData.length - 1
      if (data === 'next') {
        if (swiperCurrent.value < len) {
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
      showTranstion.value = false
    })
    // 组件销毁 清除定时器
    onUnmounted(() => {
      clearInterval(timer.value)
    })
    return {
      swiperStyle,
      showNextPrevious,
      changeSwiper,
      swiperCurrent,
      swiperAnimatedStyle,
      changeDot,
      endtransEnd,
      stopSwiper,
      startSwiper
    }
  },
  components: {
    rmainproduct
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
    .recommend-product-list{
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
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
    height: 100%;
    position: absolute;
    z-index: 99;
    top: 50%;
    margin-top: -25px;
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
      position: absolute;
      left: 0;
      z-index: 9999;
    }
    .next-icon{
      position: absolute;
      right: 0;
      margin-right: 19px;
      z-index: 9999;
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
