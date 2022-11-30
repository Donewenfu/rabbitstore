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
      <div class="product-filter-area container">
        <!--品牌区域-->
        <div class="filter-item" v-for="(item,index) in filterListData" :key='index'>
          <!--左侧规格名字-->
          <div class="left-spectitle">
            <p class="ellipsis">{{ item.name }}:</p>
          </div>
          <!--右侧规格值-->
          <div class="right-specvalue">
            <ul>
              <li v-for="(spec,inx) in item.properties" :key="inx" :title="spec.name">{{spec.name}}</li>
            </ul>
          </div>
        </div>
      </div>
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
import { computed, ref, watch } from 'vue'
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

    // 筛选数据列表
    const filterListData = ref([])
    const getFilterData = () => {
      // 获取分类筛选数据
      getFilterproductData(route.params.id).then(res => {
        const { result: { saleProperties } } = res
        // 往筛选列表数据中添加品牌数据
        // 往每个规格前面添加 全部选项
        saleProperties.forEach(item => {
          item.properties.unshift({ id: null, name: '全部' })
        })
        filterListData.value = saleProperties
        filterListData.value.unshift({ name: '品牌', properties: [{ id: null, name: '全部' }, ...res.result.brands] })
      })
    }
    watch(() => route.params.id, (newval) => {
      // 判断当前val是否有值，并且路由的路径 是 /category/sub/ /category/sub/109243018
      if (newval && `/category/sub/${newval}` === route.path) {
        getFilterData()
      }
    }, {
      // 初始化执行
      immediate: true
    })
    return { breadData, filterListData }
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
      .filter-item{
        display: flex;
        line-height: 40px;
        .left-spectitle{
          width: 80px;
          p{
            overflow: hidden;
            color: $txColor;
          }
        }
        .right-specvalue{
          margin-left: 20px;
          flex: 1;
          ul{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            li{
              cursor: pointer;
              margin-right: 20px;
              transition: all .3s;
              &.on{
                color: $txColor;
              }
              &:hover{
                color: $txColor ;
              }
            }
          }
        }
      }
    }
  }
}
</style>
