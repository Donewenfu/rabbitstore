<template>
  <div class="r-goodsimage-components">
    <!--左侧大图-->
    <div class="left-bigimg">
      <img :src="images[currentIndex]" alt="">
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
import { ref } from 'vue'

export default {
  name: 'rgoodsimage',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    // 当前图片选中
    const currentIndex = ref(0)
    return {
      currentIndex
    }
  }
}
</script>

<style scoped lang="scss">
.r-goodsimage-components{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-bigimg{
    width: 390px;
    height: 390px;
    border-radius: $borderRadius;
    overflow: hidden;
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
