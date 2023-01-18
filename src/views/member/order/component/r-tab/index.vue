<template>
  <div class="r-tab-component">
    <ul>
      <li v-for="(item, index) in tabData" :key="index" :class="{active: currentInde === item.id}" @click="changeTab(index)">
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'rtab',
  setup (props, { emit }) {
    // 当前选中
    const currentInde = ref(0)
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
    // 用户点击tab
    const changeTab = (index) => {
      currentInde.value = index
      // 自定义事件
      emit('change', index)
    }
    return {
      tabData,
      currentInde,
      changeTab
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
  border-bottom: 1px solid #f5f5f5;
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 800px;
    li{
      border-right: 1px solid #f5f5f5;
      width: 14.7%;
      line-height: 60px;
      display: flex;
      justify-content: center;
      cursor: pointer;
      text-align: center;
      position: relative;
      &.active{
        &:before{
          content: '';
          display: inline-block;
          width: 100%;
          height: 3px;
          background-color: $txColor;
          position: absolute;
        }
        background-color: #fff;
        &:last-child{
          border-right: 1px solid #f5f5f5;
        }
      }
      &:last-child{
        border-right: none;
      }
    }
  }
}
</style>
