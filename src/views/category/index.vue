<template>
  <div class="category-page">
    <div class="container">
      <!--面包屑导航组件-->
      <div class="category-bread">
        <rbread>
          <rbreaditem :to="{path:'/'}">首页</rbreaditem>
          <rbreaditem to="/category/10005">空调</rbreaditem>
          <rbreaditem>电器</rbreaditem>
        </rbread>
      </div>
      <!--轮播图组件-->
      <div class="category-swiper">轮播图 template template sghow time  </div>
      <!--分类商品数据-->
      <div class="category-product">分类数据</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'category'
}
</script>

<style scoped lang="scss">
.category-page{
  height: 600px;
}
</style>
