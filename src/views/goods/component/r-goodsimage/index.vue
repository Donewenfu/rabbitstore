<template>
  <div class="r-goodsimage-components">
    <!--移入时候 右侧显示的大图-->
    <div class="hoverbigimage" :style="[hoverbigStyle,zoomstyle]" v-if="showbigimg"></div>
    <!--左侧大图-->
    <div class="left-bigimg" ref="target">
      <img :src="images[currentIndex]" alt="">
      <!--移入遮罩-->
      <div class="shade" v-if="showbigimg" :style="position"></div>
    </div>
    <!--右侧小图-->
    <div class="right-small">
      <ul>
        <li v-for="(img,index) in images" :key="index" :class="{'active':currentIndex === index}" @mouseenter="currentIndex=index">
          <img :src="img" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'
export default {
  name: 'rgoodsimage',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    // 当前图片选中
    const currentIndex = ref(0)
    // 左侧图片ref
    const target = ref(null)
    //  是否显示大图框
    const showbigimg = ref(false)
    // shade 遮罩定位
    const position = reactive({ left: 0, top: 0 })
    // 放大镜的定位
    const zoomstyle = reactive({
      backgroundPositionX: 0,
      backgroundPositionY: 0
    })
    const { elementX, elementY, isOutside } = useMouseInElement(target)
    // 监听数据的改变 监听多个数据的改变
    watch([elementX, elementY, isOutside], () => {
      // 判断是否进入可视区域
      if (!isOutside.value) {
        // 显示大框
        showbigimg.value = true
        // 控制X轴方向的定位 0-200 之间
        if (elementX.value < 100) position.left = 0
        else if (elementX.value > 300) position.left = 200
        else position.left = elementX.value - 100
        // 判断 y 轴的距离
        if (elementY.value < 100) {
          position.top = 0
        } else if (elementY.value > 300) {
          position.top = 200
        } else {
          position.top = elementY.value - 100
        }
        // 设置放大镜的大小
        zoomstyle.backgroundPositionX = (2 * -position.left) + 'px'
        zoomstyle.backgroundPositionY = (2 * -position.top) + 'px'
        // 设置遮罩容器的定位
        position.left = position.left + 'px'
        position.top = position.top + 'px'
      } else {
        showbigimg.value = false
      }
    })
    // 动态计算右侧大图的样式
    const hoverbigStyle = computed(() => {
      return {
        'background-image': `url(${props.images[currentIndex.value]})`
      }
    })
    return {
      currentIndex,
      hoverbigStyle,
      target,
      showbigimg,
      position,
      zoomstyle
    }
  }
}
</script>

<style scoped lang="scss">
.r-goodsimage-components{
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .hoverbigimage{
    width: 390px;
    height: 390px;
    background-color: orange;
    position: absolute;
    right: -310px;
    border-radius: $borderRadius;
    z-index: 99;
  }
  .left-bigimg{
    width: 390px;
    height: 390px;
    border-radius: $borderRadius;
    overflow: hidden;
    position: relative;
    .shade{
      width: 200px;
      height: 200px;
      background-color: rgba(0,0,0,.2);
      position: absolute;
      left: 0;
      top: 0;
      cursor: move;
      z-index: 99;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
  .right-small{
    height: 390px;
    ul{
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      li{
        cursor:pointer;
        width: 69px;
        height: 69px;
        border-radius: $borderRadius;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
        &.active{
          border: 2px solid $txColor;
        }
      }
    }
  }
}
</style>
