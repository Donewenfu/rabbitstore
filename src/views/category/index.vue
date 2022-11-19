<template>
  <div class="category-page">
    <div class="container">
      <!--面包屑导航组件-->
      <div class="category-bread">
        <rbread>
          <rbreaditem :to="{path:'/'}">首页</rbreaditem>
          <rbreaditem to="/category/10005">空调</rbreaditem>
        </rbread>
      </div>
      <!--轮播图组件-->
      <div class="category-swiper">
        <rswiper :swiperData="bannerList" :width="1240" height="100%"></rswiper>
      </div>
      <!--分类商品数据-->
      <div class="category-product">分类数据</div>
    </div>
  </div>
</template>

<script>
// vue
import { reactive } from 'vue'
// 轮播图组件
import rswiper from '@/components/r-swiper/index'
// api
import { getBnanerData } from '@/api/home'
export default {
  name: 'category',
  setup () {
    // 轮播图数据
    const bannerList = reactive([])
    getBnanerData().then((res) => {
      const { result } = res
      bannerList.push(...result)
    })
    return { bannerList }
  },
  components: {
    rswiper
  }
}
</script>

<style scoped lang="scss">
.category-page{
  background-color: #f5f5f5;
  .category-bread{
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .category-swiper{
    margin-bottom: 20px;
  }
}
</style>
