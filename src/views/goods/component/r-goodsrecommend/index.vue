<template>
  <div class="c-goodscommend-component">
    <!--标题区域-->
    <div class="c-goodsrecommend-title">同类商品推荐</div>
    <!--数据轮播区域-->
    <div class="c-recommend-swiper">
      <rswiper :swiperData="swiperData" :width="1200" :is-animated="false" :height="340" :showPageicon="false"></rswiper>
    </div>
  </div>
</template>

<script>
// api
import { getRecommendList } from '@/api/goods'
// vue
import { ref, onMounted } from 'vue'
// vue-router
import { useRoute } from 'vue-router'
// 工具函数
import { sliceArr } from '@/utils/index'
// swiper 组件
import rswiper from '@/components/r-swiper'
export default {
  name: "rgoodscommend",
  setup () {
    // 轮播图数据
    const swiperData = ref([])
    // route
    const route = useRoute()
    const getRecommendData = async () => {
      const { result } = await getRecommendList(route.params.id, 16)
      // 处理数据
      swiperData.value = sliceArr(result, 5)
    }
    onMounted(() => {
      // 获取推荐数据
      getRecommendData()
    })
    return {
      swiperData
    }
  },
  components: {
    rswiper
  }
}
</script>

<style scoped lang="scss">
.c-goodscommend-component{
  height: 350px;
  .c-goodsrecommend-title{
    font-size: 20px;
    position: relative;
    margin-left: 0px;
    font-weight: bold;
    color: #333;
    &:after{
      content: '';
      display: inline-block;
      width: 3px;
      height: 20px;
      border-radius: 5px;
      position: absolute;
      left: -8px;
      top: 4px;
      background-color: $txColor;
    }
  }
}
:deep{
  .r-circle-dot{
    z-index: 99!important;
    bottom: 8px !important;
    ul{
      li{
        background: rgba(0,0,0,.2) !important;
        &.active{
          background-color: $txColor !important;
        }
      }
    }
  }
}
</style>
