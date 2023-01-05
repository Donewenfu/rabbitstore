<template>
  <div class="r-loading-bottom-components" ref="target">
    <!--正在加载效果-->
    <div class="loading-area" v-if="loading">
      <img src="../../../assets/images/loading.gif" alt="" class="loadingimg" title="loading">
      <span>亲正在加载中，请稍后...</span>
    </div>
    <!--加载完成没有更多数据-->
    <div class="loading-finished" v-if="finished">
      <img src="../../../assets/images/emptygoods.png" alt="">
      <span>亲没有更多数据了！</span>
    </div>
  </div>
</template>

<script>
// vueuse插件
import { useIntersectionObserver } from '@vueuse/core'
// vue
import { ref } from 'vue'
export default {
  name: 'rloadingbottom',
  props: {
    // 是否正在加载中 的状态值
    loading: {
      type: Boolean,
      default: false
    },
    // 是否加载完毕
    finished: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    // 到达元素
    const target = ref(null)
    // 使用vue use插件
    useIntersectionObserver(target, ([isIntersecting]) => {
      if (isIntersecting) {
        // 需要进行判断 是否正在加 获取 要求为false 并且需要加载完毕
        if (!props.loading && !props.finished) {
          emit('infiniteloadData')
        }
      }
    })
    return { target }
  }
}
</script>

<style scoped lang="scss">
.r-loading-bottom-components{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .loading-area{
    display: flex;
    align-items: center;
    height: 200px;
    .loadingimg{
      width: 50px;
      height: 50px;
    }
    span{
      color: #999;
    }
  }
  .loading-finished{
    display: flex;
    align-items: center;
    margin: 20px 0;
    span{
      color: #999;
    }
    img{
      width: 120px;
    }
  }
}
</style>
