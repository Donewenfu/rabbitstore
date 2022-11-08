<template>
  <div class="index-page">
    <div class="container">
      <!--轮播图区域 分类区域-->
      <div class="index-cate-swiper">
        <div class="cate-area">
          <rcategory></rcategory>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 分类组件
import rcategory from './components/r-category/index'
export default {
  name: 'index',
  setup () {

  },
  components: {
    rcategory
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
    }
  }
}
</style>
