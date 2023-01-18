<template>
  <div class="r-tab-component">
    <ul>
      <li v-for="(item, index) in tabData" :key="index">
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'rtab',
  setup () {
    // tab数据
    const tabData = reactive([
      { id: 0, name: '全部订单' },
      { id: 1, name: '代付款' },
      { id: 2, name: '代发货' },
      { id: 3, name: '待收货' },
      { id: 4, name: '待评价' },
      { id: 5, name: '已完成' },
      { id: 6, name: '已取消' }
    ])
    return {
      tabData
    }
  }
}
</script>

<style scoped lang="scss">
.r-tab-component{
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-radius: $borderRadius;
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    li{
      width: 14.7%;
      line-height: 60px;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>
