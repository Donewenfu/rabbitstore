<template>
  <div class="order-detail">
    <!-- 订单详情 -->
    <div class="order-detail-order-state">
      <div class="order-detail-top-info">
        <div class="order-detail-top-info-left">
          <div class="order-state">
            <i class="iconfont icon-jinbi-04"></i>
            <span>待付款</span>
          </div>
          <!-- 订单编号下单时间 -->
          <div class="order-number-date">
            <p>订单编号:666666</p>
            <p>下单时间:666666</p>
          </div>
        </div>
        <div class="order-detail-top-info-right">
           <!-- 按钮区域 -->
            <rbutton>立即付款</rbutton>
            <rbutton>取消订单</rbutton>
        </div>
      </div>
    </div>
    <!-- 订单进度条区域 -->
    <div class="order-progress">
      <rprogress></rprogress>
    </div>
  </div>
</template>

<script>
// 进度组件
import rprogress from '@/components/r-progress/index.vue'
export default {
  name: 'orderdetail',
  setup () {},
  components: {
    rprogress
  }
}
</script>

<style scoped lang="scss">
  .order-detail{
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    border-radius: $borderRadius;
    .order-progress{
      margin-top: 30px;
    }
  }
</style>
