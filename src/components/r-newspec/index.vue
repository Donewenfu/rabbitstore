<template>
  <div class="r-newspec-components">
    <div class="r-newspec-title">
      <div class="r-newspec-title-left">最新专题</div>
      <div class="r-newspec-title-right">
        <span>查看更多</span>
        <i class="iconfont icon-next-icon"></i>
      </div>
    </div>
    <div class="spec-content">
      <template v-for="(item,index) in newspec" :key="index">
        <rnewspecitem :newspecData="item"></rnewspecitem>
      </template>
    </div>
  </div>
</template>

<script>
// 专题组件
import rnewspecitem from '@/components/r-newspecitem/index'
export default {
  name: 'rnewspec',
  props: {
    // 最新专题数据
    newspec: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
    rnewspecitem
  }
}
</script>

<style scoped lang="scss">
.r-newspec-components{
  width: 100%;
  .r-newspec-title{
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .r-newspec-title-left{
      font-size: 20px;
      color: #333;
    }
    .r-newspec-title-right{
      span{
        font-size: 14px;
        color: #999;
      }
      i{
        color: #999;
        font-size: 15px;
      }
    }
  }
  .spec-content{
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
  }
}
</style>
