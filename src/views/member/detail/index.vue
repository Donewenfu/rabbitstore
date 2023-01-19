<template>
  <div class="order-detail">
    <!-- 订单详情 -->
    <div class="order-detail-order-state">
      <div class="order-detail-top-info">
        <div class="order-detail-top-info-left">
          <div class="order-state">
            <i class="iconfont icon-jinbi-04"></i>
            <span v-if="orderInfo.orderState === 1">待付款</span>
            <span v-if="orderInfo.orderState === 2">待发货</span>
            <span v-if="orderInfo.orderState === 3">待收货</span>
            <span v-if="orderInfo.orderState === 4">待评价</span>
            <span v-if="orderInfo.orderState === 5">已完成</span>
            <span v-if="orderInfo.orderState === 6">已取消</span>
            <!-- 1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消 -->
          </div>
          <!-- 订单编号下单时间 -->
          <div class="order-number-date">
            <p>订单编号:{{ orderInfo.id }}</p>
            <p>下单时间:{{ orderInfo.createTime }}</p>
          </div>
        </div>
        <div class="order-detail-top-info-right">
           <!-- 按钮区域 -->
            <rbutton size="small" @click="goPay">立即付款</rbutton>
            <rbutton size="small" type="default">取消订单</rbutton>
        </div>
      </div>
    </div>
    <!-- 订单进度条区域 -->
    <div class="order-progress">
      <rprogress></rprogress>
    </div>
    <!--订单商品-->
    <div class="order-product">
      <div class="order-box-title">订单商品</div>
      <div class="order-product-content">
        <div class="order-product-head">
          <ul>
            <li><p>商品详情</p></li>
            <li><p>单价</p></li>
            <li><p>数量</p></li>
            <li><p>小计</p></li>
            <li><p>实付</p></li>
          </ul>
        </div>
        <div class="order-product-body">
          <ul>
            <li v-for="(item, index) in orderInfo.skus" :key="index">
              <!--商品信息-->
              <div class="product-info">
                <div class="product-info-img">
                  <img :src="item.image" alt="">
                </div>
                <div class="product-info-info-text">
                  <p>{{ item.name }}</p>
                  <p>{{ item.attrsText }}</p>
                </div>
              </div>
              <!--商品单价-->
              <div class="product-price">
                <span>¥{{item.realPay}}</span>
              </div>
              <!--商品数量-->
              <div class="product-count">
                <span>{{item.quantity}}</span>
              </div>
              <!--商品小计-->
              <div class="product-subtotal">
                <span>¥{{item.realPay}}</span>
              </div>
              <!--实付-->
              <div class="product-paytotal">
                <span>¥{{item.realPay}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--收货信息-->
    <div class="takegoods infobox">
      <div class="order-title">收货信息</div>
      <div class="info-content">
        <ul>
          <li>
            <span>收<i></i>货<i></i>人: </span>
            <span>{{ orderInfo.receiverContact  }}</span>
          </li>
          <li>
            <span>联系方式: </span>
            <span>{{orderInfo.receiverMobile}}</span>
          </li>
          <li>
            <span>收货地址: </span>
            <span>{{orderInfo.receiverAddress}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!--支付方式和送货时间-->
    <div class="payType infobox">
      <div class="order-title">支付方式及送货时间</div>
      <div class="info-content">
        <ul>
          <li>
            <span>支付方式: </span>
            <span>支付宝</span>
          </li>
          <li>
            <span>送货时间: </span>
            <span>{{orderInfo.createTime}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!--订单信息-->
    <div class="orderinfo infobox">
      <div class="order-title">订单信息</div>
      <div class="info-content">
        <ul>
          <li>
            <span>订单编号: </span>
            <span>{{orderInfo.id}}</span>
          </li>
          <li>
            <span>下单时间: </span>
            <span>{{orderInfo.createTime}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!--订单价格-->
    <div class="order-total-price" v-if="false">
      <ul>
        <li>
          <span>商品件数:</span>
          <span>3件</span>
        </li>
        <li>
          <span>商品总价:</span>
          <span>3件</span>
        </li>
        <li>
          <span>运费:</span>
          <span>6</span>
        </li>
        <li>
          <span>应付总额:</span>
          <span>¥433.9</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 进度组件
import rprogress from '@/components/r-progress/index.vue'
// vue
import { onMounted, ref } from 'vue'
// vue-router
import { useRoute, useRouter } from 'vue-router'
// api
import { getOrderDetailinfoData } from '@/api/order'

export default {
  name: 'orderdetail',
  setup () {
    // 订单数据
    const orderInfo = ref({})
    // route
    const route = useRoute()
    // 路由对象
    const router = useRouter()
    // 获取订单详情数据
    const getOrderDetaiData = async () => {
      // 获取订单编号
      const orderId = route.params.id
      // 获取订单数据
      const { result } = await getOrderDetailinfoData(orderId)
      // 订单数据
      orderInfo.value = result
      console.log(result)
    }
    onMounted(() => {
      // 获取订单数据
      getOrderDetaiData()
    })
    // 用户点击付款
    const goPay = () => {
      return
      // router.push(`/pay/${orderInfo.id}`)
    }
    return {
      orderInfo,
      goPay
    }
  },
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
    .order-product{
      width: 100%;
      margin-top: 28px;
      .order-box-title{
        margin-bottom: 24px;
        font-size: 15px;
        color: #333;
      }
      .order-product-content{
        width: 100%;
        .order-product-head{
          width: 100%;
          height: 63px;
          background-color: #f5f5f5;
          ul{
            width: 100%;
            display: flex;
            li{
              padding: 0 10px;
              box-sizing: border-box;
              p{
                line-height: 63px;
              }
              &:nth-child(1){
                flex: 1;
              }
              &:nth-child(2){
                width: 84px;
              }
              &:nth-child(3){
                width: 120px;
              }
              &:nth-child(4){
                width: 100px;
              }
              &:nth-child(5){
                width: 100px;
              }
            }
          }
        }
        .order-product-body{
          ul{
            width: 100%;
            border: 1px solid #f5f5f5;
            li{
              border-bottom: 1px solid #f5f5f5;
              width: 100%;
              display: flex;
              align-items: center;
              padding: 20px;
              box-sizing: border-box;
              .product-info{
                flex: 1;
                display: flex;
                align-items: center;
                .product-info-img{
                  width: 70px;
                  text-align: center;
                  height: 70px;
                  border-radius: 10px;
                  overflow: hidden;
                  img{
                    width: 100%;
                    height: 100%;
                  }
                }
                .product-info-info-text{
                  margin-left: 10px;
                  height: 70px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  p{
                    margin: 5px 0;
                  }
                }
              }
              .product-price{
                width: 84px;
                text-align:center;
              }
              .product-count{
                width: 120px;
                text-align: center;
              }
              .product-subtotal{
                width: 100px;
                text-align: center;
              }
              .product-paytotal{
                width: 100px;
                text-align: center;
              }
              &:last-child{
                border-bottom: none;
              }
            }
          }
        }
      }
    }
    .infobox{
      margin-top: 50px;
      border: 1px solid #f5f5f5;
      padding: 20px;
      box-sizing: border-box;
      .order-title{
        font-size: 16px;
        color: #333;
        font-weight: bold;
        margin-bottom: 10px;
      }
      ul{
        li{
          line-height: 30px;
          i{
            width: 0.5rem;
            display: inline-block;
          }
        }
      }
    }
    .order-detail-order-state{
      .order-detail-top-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .order-detail-top-info-left{
          display: flex;
          align-items: center;
          .order-state{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 40px;
            .iconfont{
              font-size: 40px;
              color: $txColor;
            }
            span{
              font-size: 16px;
              color: #666;
            }
          }
          .order-number-date{
            margin-left: 40px;
            display: flex;
            flex-direction: column;
            p{
              margin: 10px 0;
            }
          }
        }
        .order-detail-top-info-right{
          display: flex;
          align-items: center;
          :deep{
            button{
              margin: 0 10px;
            }
          }
        }
      }
    }
  }
</style>
