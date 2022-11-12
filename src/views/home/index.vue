<template>
  <div class="index-page">
    <div class="container">
      <!--轮播图区域 分类区域-->
      <div class="index-cate-swiper">
        <div class="cate-area">
          <rcategory></rcategory>
        </div>
        <div class="swiper-area">
          <rswiper :swiperData="indexState.bannerData" :durationTime="4000"></rswiper>
        </div>
      </div>
    </div>
    <!--首页商品内容区域-->
    <div class="index-product-area">
      <div class="container">
        <div class="index-innerproduct">
          <!--新鲜好物 人气推荐-->
          <div class="parduct-partone">
            <rindexproduct :productInfo="indexState.newProductData" title="新鲜好物" productDesc="新鲜出炉 品质靠谱"></rindexproduct>
          </div>
          <!--人气推荐-->
          <div class="product-parttwo">
            <rpopularity title="热门品牌" desc="国际经典 品质保证" :brandData="indexState.brandData"></rpopularity>
          </div>
        </div>
      </div>
    </div>
    <!--首页主要内容区域-->
    <div class="index-main-product-area">
      <div class="container">
        <template v-for="(item,index) in indexState.indexGoods" :key="index">
          <indexmainproduct :productData="item"></indexmainproduct>
        </template>
      </div>
    </div>
    <!--最新专题-->
    <div class="index-new-product">
      <div class="container">
        <newSpecproduct :newspec="indexState.newSpecdataspec"></newSpecproduct>
      </div>
    </div>
  </div>
</template>

<script>
// vue
import { onMounted, reactive } from 'vue'
// 分类组件
import rcategory from './components/r-category/index'
// 轮播图组件
import rswiper from '@/components/r-swiper/index'
// 首页商品组件
import rindexproduct from '@/components/r-indexproduct/index'
// 人气推荐组件
import rpopularity from '@/components/r-popularity/index'
// 主商品组件
import indexmainproduct from '@/components/r-indexmainproduct/index'
// 最新专题组件
import newSpecproduct from '@/components/r-newspec/index'
// api
import { getBnanerData, getNewProductData, getHotBrandData, getIndexGoods, getNewSpecData } from '@/api/home'
export default {
  name: 'index',
  setup () {
    // 轮播图数据
    const indexState = reactive({
      // 轮播图数据
      bannerData: [],
      // 新鲜好物数据
      newProductData: [],
      // 品牌数据
      brandData: [],
      // 首页商品数据
      indexGoods: [],
      // 最新专题数据
      newSpecdataspec: []
    })
    onMounted(() => {
      // 获取banner数据
      getBanner()
      // 获取新鲜好物数据
      getNewproduct()
      // 获取热门品牌数据
      getHostbrandData()
      // 获取首页商品数据
      getIndexgoodsproduct()
      // 获取最新专题数据
      getNewProductspec()
    })
    // 获取轮播图数据
    const getBanner = async () => {
      const { result } = await getBnanerData()
      indexState.bannerData = result
    }
    // 获取新鲜好物数据
    const getNewproduct = async () => {
      const { result } = await getNewProductData()
      indexState.newProductData = result
    }
    // 获取热门好物数据
    const getHostbrandData = async () => {
      const { result } = await getHotBrandData()
      indexState.brandData = result.slice(0, 5)
    }
    // 获取首页商品区块数据
    const getIndexgoodsproduct = async () => {
      const { result } = await getIndexGoods()
      console.log(result)
      indexState.indexGoods = result
    }
    // 获取最新专题
    const getNewProductspec = async () => {
      const { result } = await getNewSpecData()
      indexState.newSpecdataspec = result
    }
    return { indexState }
  },
  components: {
    rcategory,
    rswiper,
    rindexproduct,
    rpopularity,
    indexmainproduct,
    newSpecproduct
  }
}
</script>

<style scoped lang="scss">
.index-page{
  height: 1000px;
  background-color: #f5f5f5;
  height: 100%;
  .container{
    overflow: hidden;
    .index-cate-swiper{
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
    }
  }
  .index-product-area{
    width: 100%;
    background-color: #f5f5f5;
    margin-top: 48px;
    .index-innerproduct{
      padding-bottom: 43px;
      border-radius: $borderRadius;
      .parduct-partone{
        padding-top: 16px;
        background-color: #fff;
        padding: 20px 20px 10px 20px;
        border-radius: $borderRadius;
        box-sizing: border-box;
      }
    }
    .product-parttwo{
      background-color: #fff;
      margin-top: 40px;
      padding: 20px 20px 10px 20px;
      border-radius: $borderRadius;
    }
  }
  .index-main-product-area{
    background-color: #fff;
  }
  //最新专题
  .index-new-product{
    width: 100%;
    background-color: #f5f5f5;
    padding-bottom: 60px;
  }
}
</style>
