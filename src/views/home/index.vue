<template>
  <div class="index-page">
    <div class="container">
      <!--轮播图区域 分类区域-->
      <div class="index-cate-swiper">
        <div class="cate-area">
          <rcategory></rcategory>
        </div>
        <div class="swiper-area">
          <rswiper></rswiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 分类组件
import rcategory from './components/r-category/index'
// 轮播图组件
import rswiper from '@/components/r-swiper/index'
export default {
  name: 'index',
  setup () {

  },
  components: {
    rcategory,
    rswiper
  }
}
</script>

<style scoped lang="scss">
.index-page{
  height: 1000px;
  background-color: #f5f5f5;
  overflow: hidden;
  .container{
    .index-cate-swiper{
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
