<template>
  <div class="r-order-item-component">
    <!--顶部订单时间-->
    <div class="r-order-item-time">
      <div class="r-order-item-date">
        <p>下单时间:{{ orderData.createTime }}</p>
        <p>订单编号：{{ orderData.id }}</p>
      </div>
      <div class="r-order-item-countdown">
        <i class="iconfont "></i>
        <div class="payend">
          <span v-if="orderData.countdown!==-1">付款截止: </span>
          <span v-if="orderData.countdown!==-1">{{ timeText }}</span>
          <span v-else>删除</span>
        </div>
      </div>
    </div>
    <div class="product-wrap-content">
      <div class="sku-list">
        <div class="product-content"   v-for="(item, index) in orderData.skus" :key="index">
          <!--商品区域-->
          <div class="r-order-product">
            <div class="r-order-left">
              <div class="product-img">
                <img :src="item.image" alt="">
              </div>
              <div class="product-info">
                <p class="product-name ellipsis-2">{{ item.name }}</p>
                <p class="product-sku">{{ item.attrsText }}</p>
              </div>
              <div class="product-price">¥{{ item.realPay }}</div>
              <div class="product-num">X1</div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-content-right">
        <!--商品状态-->
        <div class="product-state">
          <span v-if="orderData.orderState === 1">待付款</span>
          <span v-if="orderData.orderState === 2">待发货</span>
          <span v-if="orderData.orderState === 3">待收货</span>
          <span v-if="orderData.orderState === 4">待评价</span>
          <span v-if="orderData.orderState === 5">已完成</span>
          <span v-if="orderData.orderState === 6">已取消</span>
        </div>
        <!--商品小计-->
        <div class="product-total">
          <span class="product-price">¥18</span>
          <span>(含运费：¥{{orderData.postFee}})</span>
          <span>在线支付</span>
        </div>
        <!--商品操作-->
        <div class="product-operate">
          <rbutton size="small" v-if="orderData.countdown!==-1" @click="gopay(orderData)">立即付款</rbutton>
          <span @click="goDetial(orderData)">查看详情</span>
          <span v-if="orderData.countdown!==-1">取消订单</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// vue-router
import { useRouter } from 'vue-router'
// hook
import { useOrderTime } from '@/hook/ordertime'
// vue
import { watch } from 'vue'

export default {
  name: 'rorderitem',
  props: {
    orderData: {
      type: Object,
      default: () => {}
    }
  },
  setup (props, { emit }) {
    const { changeTime, timeText, isendTime } = useOrderTime()
    // vue-router
    const router = useRouter()
    // 跳转到支付页面
    const gopay = (orderdata) => {
      router.push(`/pay/${orderdata.id}`)
    }
    watch(() => props.orderData, () => {
      changeTime(props.orderData.countdown)
    }, {
      deep: true,
      immediate: true
    })
    watch(() => isendTime, () => {
      emit('refreshOrder')
    })
    // 用户点击订单详情
    const goDetial = (data) => {
      router.push(`/member/orderdetail/${data.id}`)
    }
    return {
      gopay,
      timeText,
      goDetial
    }
  }
}
</script>

<style scoped lang="scss">
.r-order-item-component{
  margin-top: 20px;
  width: 100%;
  border: 1px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  .r-order-item-time{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    height: 40px;
    padding: 0 10px;
    background-color: #f5f5f5;
    box-sizing: border-box;
    .r-order-item-date{
      display: flex;
      align-items: center;
      p{
        &:last-child{
          margin-left: 10px;
        }
      }
    }
    .r-order-item-countdown{
      cursor: pointer;
    }
  }
  .product-wrap-content{
    display: flex;
    width: 100%;
    .product-content-right{
      display: flex;
      width: 100%;
      .product-state{
        width: 100px;
        display: flex;
        justify-content: center;
        border-right: 1px solid #f5f5f5;
        align-items: center;
      }
      .product-total{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 150px;
        border-right: 1px solid #f5f5f5;
        justify-content: center;
        .product-price{
          color: $priceColor;
          font-weight: bold;
        }
      }
      .product-operate{
        display: flex;
        flex: 1;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        span{
          margin: 3px 0;
          cursor: pointer;
          transition: all .3s;
          &:hover{
            color: $txColor;
          }
        }
      }
    }
  }
  .product-content{
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    .r-order-product{
      .r-order-left{
        padding: 10px;
        box-sizing: border-box;
        border-right: 1px solid #f5f5f5;
        display: flex;
        align-items: center;
        .product-img{
          width: 80px;
          height: 80px;
          border-radius: 5px;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .product-info{
          height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 200px;
          margin-left: 10px;
          .product-name{
            font-size: 14px;
            color: #333;
            margin-top: 5px;
          }
          .product-sku{
            font-size: 13px;
            margin-bottom: 5px;
            color: #999;
          }
        }
        .product-price{
          width: 80px;
          display: flex;
          justify-content: center;
        }
        .product-num{
          width: 60px;
          display: flex;
          justify-content: center;
        }
      }
    }



    &:last-child{
      border-bottom: none;
    }
  }
}
</style>
