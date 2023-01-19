<template>
  <div class="r-progress-component">
    <div class="r-progress-item" v-for="item in 5" :key="item">
      <span class="progress-num-step">{{item}}</span>
      <!-- 文字区域 -->
      <p class="progress-title">提交订单</p>
      <p class="progress-date">2023-1-18</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rprogress',
  props: {
    // 进度条数据
    list: {
      type: Array,
      default: () => []
    }
  },
  setup () {
  }
}
</script>

<style scoped lang="scss">
.r-progress-component{
  width: 100%;
  display: flex;
  justify-content: space-between;
  .r-progress-item{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .progress-num-step{
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: $txColor;
      color: #fff;
      text-align: center;
      line-height: 50px;
      font-size: 22px;
      &::after{
        content: '';
        width: 40%;
        display: block;
        position: absolute;
        height: 2px;
        right: 0;
        top: 25px;
        background-color: $txColor;
      }
      &:before{
        content: '';
        width: 40%;
        display: block;
        position: absolute;
        height: 2px;
        left: -7px;
        top: 25px;
        background-color: #e4e4e4;
      }
    }
    &:first-child{
      .progress-num-step{
        &:before{
          display: none;
        }
      }
    }
    &:last-child{
      .progress-num-step{
        &:after{
          display: none;
        }
      }
    }
    .progress-title, .progress-date{
      font-size: 12px;
      color: #999;
      text-align: center;
      line-height: 24px;
    }
  }
}
</style>
