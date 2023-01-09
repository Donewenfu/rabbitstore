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
        <rswiper :swiperData="bannerList" :width="1240" height="100%" v-if="bannerList.length>0"></rswiper>
        <rskeleton bg="#e4e4e4" width="1240px" height="400px" v-else></rskeleton>
      </div>
      <!--分类商品数据-->
      <div class="category-product">
        <!--全部分类-->
        <div class="all-category">
          <div class="category-all-title">全部分类</div>
          <div class="category-all-product">
            <div class="all-product-item" v-for="(item,index) in categoryData.children" :key="index" @click="gosubCategory(item)">
              <img :src="item.picture" alt="">
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
        <!--分类数据-->
        <div class="catelist">
          <template v-for="(item,index) in catelist.children" :key="index">
            <div class="catelist-item">
              <div class="catelist-title">
                <h4>{{ item.name }}</h4>
                <p>象米商城，您的贴心生活助手</p>
              </div>
              <div class="cate-list">
                <template v-if="item.goods.length>0">
                  <rmainproduct :productData="product" v-for="(product,indx) in item.goods" :key="indx"></rmainproduct>
                </template>
                <template v-else>
                  <div class="empty">
                    <img src="../../assets/images/empty.png" alt="">
                    <p>暂无数据</p>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// vue
import { computed, reactive, ref, watch } from 'vue'
// vue route
import { useRoute, useRouter } from 'vue-router'
// vuex
import { useStore } from 'vuex'
// 轮播图组件
import rswiper from '@/components/r-swiper/index'
// 商品组件
import rmainproduct from '@/components/r-mainproduct/index'
// api
import { getBnanerData } from '@/api/home'
// api
import { getCategoryData } from '@/api/category'
export default {
  name: 'category',
  setup () {
    // 轮播图数据
    const bannerList = reactive([])
    // vue route
    const route = useRoute()
    // vue router
    const router = useRouter()
    // vuex
    const store = useStore()
    // 获取banner数据
    getBnanerData().then((res) => {
      const { result } = res
      bannerList.push(...result)
    })
    // 获取分类的数据
    const categoryData = computed(() => {
      let cate = {}
      // 在分类中找到当前分类id
      const item = store.state.category.cateList.find(item => {
        return item.id === route.params.id
      })
      if (item) cate = item
      return cate
    })

    // 获取分类数据
    const catelist = ref([])
    const getCateListData = async () => {
      const { result } = await getCategoryData(route.params.id)
      document.title = result.name
      catelist.value = result
    }

    watch(() => route.params.id, (newval) => {
      if (newval && `/category/${newval}` === route.path) getCateListData()
    }, {
      immediate: true
    })

    // 跳转到二级分类页面
    const gosubCategory = function (data) {
      const { id } = data
      router.push({
        path: `/category/sub/${id}`
      })
    }

    return { bannerList, categoryData, catelist, gosubCategory }
  },
  components: {
    rswiper,
    rmainproduct
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
    overflow: hidden;
    .all-category{
      padding: 20px;
      background-color: #fff;
      border-radius: $borderRadius;
      margin-bottom: 30px;
      .category-all-title{
        font-size: 20px;
        color: #333;
        text-align: center;
      }
      .category-all-product{
        display: flex;
        align-items: center;
        margin-top: 20px;
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
    .catelist{
      width: 100%;
      margin-bottom: 40px;
      .catelist-item{
        background-color: #fff;
        padding: 20px;
        box-sizing: border-box;
        border-radius: $borderRadius;
        margin-bottom: 20px;
        .catelist-title{
          text-align: center;
          h4{
            font-size: 20px;
            font-weight: normal;
          }
          p{
            font-size: 14px;
            color: #999;
            margin-top: 5px;
          }
        }
        .cate-list{
          margin-top: 20px;
          display: flex;
          align-items: center;
          .empty{
            width: 100%;
            display: flex;
            justify-content: center;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
              width: 150px;
            }
            p{
              color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>
