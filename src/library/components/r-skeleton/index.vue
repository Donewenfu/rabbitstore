<template>
  <div class="r-skeleton-components" :style="{width,height}" :class="{shan:animated}">
    <!-- 1 盒子-->
    <div class="block" :style="{backgroundColor:bg}"></div>
    <!-- 2 闪效果 xtx-skeleton 伪元素 --->
  </div>
</template>

<script>
export default {
  name: 'rskeleton',
  props: {
    bg: {
      type: String,
      default: 'rgba(255,255,255,.5)'
    },
    // 骨架宽度
    width: {
      type: String,
      default: '60px'
    },
    // 骨架高度
    height: {
      type: String,
      default: '20px'
    },
    // 是否显示动画
    animated: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.r-skeleton-components {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}
.shan {
  &::after {
    content: "";
    position: absolute;
    animation: shan 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
  }
}
@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}
</style>
