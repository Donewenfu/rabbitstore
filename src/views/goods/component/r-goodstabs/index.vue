<template>
  <div class="c-goodstabs-components" id="tabs">
    <!--切换区域-->
    <nav>
      <a href="javascript:;" :class="current === 'detail' ? 'active':''" @click="changeTabs('detail')">商品详情</a>
      <a href="javascript:;" class="comment" :class="current === 'comment' ? 'active':''" @click="changeTabs('comment')">
        <p>商品评价</p>
        <span class="comment-num">({{ evaluatedata.evaluateCount }}+)</span>
      </a>
    </nav>
    <!--切换内容-->
    <div class="tabs-content">
      <component :is="`rgoods${current}`" :evaluateData="evaluatedata"></component>
    </div>
  </div>
</template>

<script>
// api
import { getEvaluate } from '@/api/goods'
// vue-route
import { useRoute } from 'vue-router'
// vue
import { onMounted, ref } from 'vue'
// 详情组件
import rgoodsdetail from '../r-goodsdetail'
// 评价组件
import rgoodscomment from '../r-goodscomment'
export default {
  name: "rgoodstabs",
  setup () {
    const route = useRoute()
    // tabs 当前 选中 初始化选中
    const current = ref('detail')
    // 评价数据
    const evaluatedata = ref({})
    // 切换事件
    const changeTabs = (data) => {
      current.value = data
    }
    // 获取评价数据
    const getEvaluateData = async () => {
      const { result } = await getEvaluate(route.params.id)
      result.tags.unshift({ 'title': '有图', tagCount: result.hasPictureCount, type: 'ipmg' })
      result.tags.unshift({ 'title': '全部评价', tagCount: result.evaluateCount, type: 'all' })
      evaluatedata.value = result
    }
    // 组件挂载执行
    onMounted(() => {
      getEvaluateData()
    })
    return {
      current,
      changeTabs,
      evaluatedata
    }
  },
  components: {
    rgoodsdetail,
    rgoodscomment
  }
}
</script>

<style scoped lang="scss">
.c-goodstabs-components{
  nav{
    display: flex;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid #f5f5f5;
    a{
      display: flex;
      align-items: center;
      padding: 0 40px;
      font-size: 16px;
      position: relative;
      height: 65px;
      &.active{
        color: $txColor !important;
        font-weight: bold !important;
        &:before{
          content: '';
          width: 72px;
          height: 2px;
          background-color: $txColor;
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .comment{
      .comment-num{
        color: $txColor;
        margin-left: 5px;
      }
    }
  }
}
</style>
