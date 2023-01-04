<template>
  <div class="c-goodstabs-components">
    <!--切换区域-->
    <nav>
      <a href="javascript:;" :class="current === 'detail' ? 'active':''" @click="changeTabs('detail')">商品详情</a>
      <a href="javascript:;" class="comment" :class="current === 'comment' ? 'active':''" @click="changeTabs('comment')">
        <p>商品评价</p>
        <span class="comment-num">(500+)</span>
      </a>
    </nav>
    <!--切换内容-->
    <div class="tabs-content">
      <component :is="`rgoods${current}`"></component>
    </div>
  </div>
</template>

<script>
// vue
import { ref } from 'vue'
// 详情组件
import rgoodsdetail from '../r-goodsdetail'
// 评价组件
import rgoodscomment from '../r-goodscomment'
export default {
  name: "rgoodstabs",
  setup () {
    // tabs 当前 选中 初始化选中
    const current = ref('detail')
    // 切换事件
    const changeTabs = (data) => {
      current.value = data
    }
    return {
      current,
      changeTabs
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
