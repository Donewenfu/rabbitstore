<template>
  <div class="category-page">
    <div class="container">
      <!--面包屑导航组件-->
      <div class="category-bread">
        <rbread>
          <rbreaditem :to="{path:'/'}">首页</rbreaditem>
          <rbreaditem :to="`/category/${categoryData.id}`">{{ categoryData.name }}</rbreaditem>
        </rbread>
      </div>
      <!--轮播图组件-->
      <div class="category-swiper">
        <rswiper :swiperData="bannerList" :width="1240" height="100%"></rswiper>
      </div>
      <!--分类商品数据-->
      <div class="category-product">
        <!--全部分类-->
        <div class="all-category">
          <div class="category-all-title">全部分类</div>
          <div class="category-all-product">
            <div class="all-product-item" v-for="(item,index) in categoryData.children" :key="index">
              <img :src="item.picture" alt="">
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// vue
import { computed, reactive } from 'vue'
// vue route
import { useRoute } from 'vue-router'
// vuex
import { useStore } from 'vuex'
// 轮播图组件
import rswiper from '@/components/r-swiper/index'
// api
import { getBnanerData } from '@/api/home'
export default {
  name: 'category',
  setup () {
    // 轮播图数据
    const bannerList = reactive([])
    // vue route
    const route = useRoute()
    // vuex
    const store = useStore()
    getBnanerData().then((res) => {
      const { result } = res
      bannerList.push(...result)
    })
    // 获取分类的数据
    const categoryData = computed(() => {
      let cate = {}
      const item = store.state.category.cateList.find(item => {
        return item.id === route.params.id
      })
      if (item) cate = item
      return cate
    })
    return { bannerList, categoryData }
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
  .category-product{
    .all-category{
      padding: 20px;
      background-color: #fff;
      border-radius: $borderColor;
      .category-all-title{
        font-size: 20px;
        color: #333;
        text-align: center;
      }
      .category-all-product{
        display: flex;
        align-items: center;
        .all-product-item{
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all .3s;
          margin-right: 20px;
          img{
            width: 120px;
            transition: all .3s;
          }
          p{
            font-size: 14px;
            color: #333;
          }
          &:hover{
            p{
              color: $txColor;
            }
            transform: translateY(-7px);
          }
        }
      }
    }
  }
}
</style>
