<template>
  <div class="r-pay-page">
    <!--面包屑导航区域-->
    <div class="bread-area container">
      <rbread>
        <rbreaditem to="/">首页</rbreaditem>
        <rbreaditem to="/cart">购物车</rbreaditem>
        <rbreaditem :to="payPath">支付订单</rbreaditem>
      </rbread>
    </div>
    <!--订单内容区域-->
    <div class="pay-content container">
      <!--订单提交成功区域-->
      <div class="pay-success-area">
        <div class="left-content">
          <i class="iconfont icon-wancheng"></i>
          <div class="left-success">
            <div class="left-success-text-top">小主订单支付成功！请尽快付银子！</div>
            <div class="left-success-text-bottom">支付还剩{{ timeText }}，超时订单自动取消！</div>
          </div>
        </div>
        <div class="right-total">应付总额: <span>¥{{orderData.payMoney}}</span></div>
      </div>
      <!--订单支付方式区域-->
      <div class="pay-type">
        <div class="pay-type-head">选择以下付款方式支付</div>
        <div class="pay-platform">
          <ul>
            <li @click="gopay('wechatpay')">
              <img src="../../assets/images/wechatpay.jpg" alt="">
            </li>
            <li @click="gopay('alipay')">
              <img src="../../assets/images/ailipay.png" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--支付弹窗-->
    <rdialog v-model:visible="showPaydialog" title="正在支付..." :showFooter="false" width="500px" height="260px">
      <div class="dialogcontent">
        <div class="pay-loading">
          <rloadinglogo loadingtext="正在支付中哦！"></rloadinglogo>
        </div>
        <div class="pay-loading-text">
          <ul>
            <li>
              <p> <i class="iconfont icon-wancheng" style="color:#1DC779;font-size: 14px;margin-right: 5px;"></i>如果支付成功</p>
              <span @click="goOrderdetail">查看订单详情>></span>
            </li>
            <li>
              <p><i class="iconfont icon-cuowu1" style="color: #ff4d4f;font-size: 16px;margin-right: 5px;"></i>如果支付失败</p>
              <span @click="goOrderdetail">查看订单详情>></span>
            </li>
          </ul>
        </div>
      </div>
    </rdialog>
  </div>
</template>

<script>
// vue router
import { useRoute, useRouter } from 'vue-router'
// vue
import { onMounted, ref, watch } from 'vue'
// 消息提示
import message from '@/utils/messageUI'
// api
import { getOrderInfo } from '@/api/order'
// componsition api
import { useOrderTime} from '@/hook/ordertime'
// 消息提示
import confirm from '@/utils/confirmUI'
// config
import { baseURL } from '@/config'
// dialog 弹窗
import rdialog from '@/components/r-dialog'
// vuex
import { useStore } from 'vuex'
export default {
  name: 'pay',
  setup () {
    // 是否显示弹窗
    const showPaydialog = ref(false)
    // vue route
    const route = useRoute()
    // 路由对象
    const router = useRouter()
    // vuex
    const stroe = useStore()
    // 订单数据
    const orderData = ref('')
    // 支付订单路径
    const payPath = ref('')
    // 倒计时
    const { changeTime, timeText, isendTime } = useOrderTime()
    // 组件挂载
    onMounted(() => {
      payPath.value = route.path
      // 获取订单数据
      getOrderdata()
    })
    // 用户点击去支付
    const gopay = (type) => {
      if (type === 'wechatpay') {
        message({
          type: 'error',
          text: '臣妾做不到啊！',
          offsetTop: 170
        })
      } else { // 支付宝支付
        // 显示正在支付弹窗
        showPaydialog.value = true
        // 重新获取购物车数据 调用vuex action获取购物车列表
        stroe.dispatch('cart/getCartList')
        // 回调地址
        const redirect = encodeURIComponent('http://www.corho.com:8080/#/pay/callback')
        // 支付地址
        const payUrl = `${baseURL}/pay/aliPay?orderId=${route.params.id}&redirect=${redirect}`
        // 打开新的窗口
        window.open(payUrl)

      }
    }
    // 获取订单
    const getOrderdata = async () => {
      const data = await getOrderInfo(route.params.id)
      // countdown
      orderData.value = data.result
      // 支付倒计时
      changeTime(data.result.countdown)
    }
    watch(() => isendTime.value, (value) => {
      if (value) {
        confirm({
          type: 'error',
          title: '订单已取消！',
          content: '亲！您的订单结算超时，请重新下单支付！',
          showClose: false
        }).then(() => {
          router.replace('/')
        })
      }
    })
    // 跳转到订单详情页面
    const goOrderdetail = () => {
      showPaydialog.value = false
      setTimeout(() => {
          router.push('/member/order')
      },0)

    }
    return {
      payPath,
      gopay,
      orderData,
      timeText,
      showPaydialog,
      goOrderdetail
    }
  },
  components: {
    rdialog
  }
}
</script>

<style scoped lang="scss">
.r-pay-page{
  background-color: #f5f5f5;
  .bread-area{
    padding: 20px 0;
  }
  .pay-content{
    padding: 20px 0;
    .pay-success-area{
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: $borderRadius;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left-content{
        display: flex;
        align-items: center;
        .iconfont{
          margin-right: 20px;
          font-size: 40px;
          color: $txColor;
        }
        .left-success{
          .left-success-text-top{
            font-size: 18px;
            font-weight: normal;
            margin: 10px 0;
          }
          .left-success-text-bottom{
            color: #ccc;
          }
        }
      }
      .right-total{
        display: flex;
        align-items: center;
        span{
          margin-left: 10px;
          font-size: 25px;
          font-weight: normal;
          color: $priceColor;
        }
      }
    }
    .pay-type{
      width: 100%;
      margin-top: 20px;
      background-color: #fff;
      padding: 20px;
      box-sizing: border-box;
      border-radius: $borderRadius;
      padding-bottom: 50px;
      .pay-type-head{
        height: 40px;
        font-size: 16px;
        border-bottom: 1px solid #e6e6e6;
      }
      .pay-platform{
        ul{
          display: flex;
          align-items: center;
          margin-top: 20px;
          li{
            margin-right: 10px;
            width: 150px;
            height: 50px;
            border: 1px solid #f5f5f5;
            cursor: pointer;
            border-radius: 2px;
            transition: all .3s;
            img{
              width: 100%;
              height: 100%;
            }
            &:hover{
              border: 1px solid $txColor;
            }
          }
        }
      }
    }
  }
  .dialogcontent{
    padding-top: 20px;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pay-loading{
      margin-left: 50px;
    }
    .pay-loading-text{
      margin-right: 40px;
      ul{
        li{
          margin-bottom: 10px;
          p{
            font-size: 16px;
            margin-bottom: 6px;
            color: #666;
          }
          span{
            color: $txColor;
            cursor: pointer;
          }
        }
      }
    }
  }
}

</style>
