<template>
  <div class="subcategory-page">
    <div class="container">
      <!--面包屑导航-->
      <div class="bread-area">
        <rbread>
          <rbreaditem to="/">首页</rbreaditem>
          <rbreaditem :to="`/category/${breadData.top.id}`">{{ breadData.top.name }}</rbreaditem>
          <rbreaditem :to="`/category/sub/${breadData.sub.id}`">{{ breadData.sub.name }}</rbreaditem>
        </rbread>
      </div>
      <!--商品筛选区域-->
      <div class="product-filter-area container"></div>
      <!--商品区域-->
      <div class="product-list-area">商品列表区域</div>
    </div>
  </div>
</template>

<script>
// vue router
import { useRoute } from 'vue-router'
// vuex
import { useStore } from 'vuex'
// vue
import { computed, reactive, watch } from 'vue'
// api
import { getFilterproductData } from '@/api/category'
export default {
  name: 'subcategory',
  setup () {
    // route
    const route = useRoute()
    // vuex
    const store = useStore()
    // 通过计算 计算的来url数据
    const breadData = computed(() => {
      const obj = {}
      store.state.category.cateList.forEach((item, index) => {
        item.children.forEach((subitem, indx) => {
          if (subitem.id === route.params.id) {
            obj.sub = {
              name: subitem.name,
              id: subitem.id
            }
            obj.top = {
              name: item.name,
              id: item.id
            }
          }
        })
      })
      return obj
    })

    // 品牌数据
    const brandList = reactive([])
    const getFilterData = () => {
      // 获取分类筛选数据
      getFilterproductData(route.params.id).then(res => {
        const { result } = res
        console.log(result)
        console.log(brandList)
      })
    }
    watch(() => route.params.id, (newval) => {
      // 判断当前val是否有值，并且路由的路径 是 /category/sub/ /category/sub/109243018
      if (newval && route.path === `/category/sub/${newval}`) {
        getFilterData()
      }
    })
    return { breadData }
  }
}
</script>

<style scoped lang="scss">
.subcategory-page{
  background-color: #f5f5f5;
  .container{
    overflow: hidden;
    .bread-area{
      margin: 20px 0;
    }
    .product-filter-area{
      padding: 20px;
      box-sizing: border-box;
      background-color: #fff;
      margin-top: 30px;
      border-radius: $borderRadius;
    }
  }
}
</style>
