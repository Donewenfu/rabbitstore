<template>
  <div class="checkorder-page">
    <div class="container">
      <!--面包屑导航-->
      <div class="bread-area">
        <rbread>
          <rbreaditem to="/">首页</rbreaditem>
          <rbreaditem to="/cart">购物车</rbreaditem>
          <rbreaditem to="/checkorder">订单确认页面</rbreaditem>
        </rbread>
      </div>
      <!--收货地址区域结算区域-->
      <div class="checkorder-content" >
        <!--收货地址-->
        <div class="area-line">
          <div class="title">收货地址</div>
          <div class="address-area">
            <div class="address-left" v-if="checkorderData.userAddresses && checkorderData.userAddresses.length>0">
              <ul>
                <li>
                  <span>收<i></i>货<i></i>人:</span>
                  <span>{{ checkorderData.userAddresses[checkorderData.userAddresses.length-1].receiver }}</span>
                </li>
                <li>
                  <span>联系方式:</span>
                  <span>{{ checkorderData.userAddresses[checkorderData.userAddresses.length-1].contact }}</span>
                </li>
                <li>
                  <span>收货地址:</span>
                  <span>{{ checkorderData.userAddresses[checkorderData.userAddresses.length-1].fullLocation }}</span>
                </li>
              </ul>
            </div>
            <div class="address-left addressempty" v-if="checkorderData.userAddresses && checkorderData.userAddresses.length<=0">
              <i class="iconfont icon-cuowu1"></i>
              <span>需要添加地址才能支付订单！</span>
            </div>
            <div class="address-right">
              <div class="address-right-left" v-if="checkorderData.userAddresses && checkorderData.userAddresses.length>0" @click="editAddress">修改地址</div>
              <div class="address-right-right">
                <rbutton type="line" size="default" v-if="checkorderData.userAddresses && checkorderData.userAddresses.length>0" @click="changeAddress">切换地址</rbutton>
                <rbutton type="line" size="default" @click="showAddressdialog = true">添加地址</rbutton>
              </div>
            </div>
          </div>
        </div>
        <!--商品信息-->
        <div class="area-line">
          <div class="title">商品信息</div>
          <div class="product-area">
            <div class="product-head">
              <ul>
                <li>商品信息</li>
                <li>单价</li>
                <li>数量</li>
                <li>小计</li>
                <li>实付</li>
              </ul>
            </div>
            <!--商品列表区域-->
            <div class="product-body">
              <ul>
                <li v-for="(item, index) in checkorderData.goods" :key="index">
                  <!--商品信息区域-->
                  <div class="product-info">
                    <!--商品图片-->
                    <div class="product-img">
                      <img :src="item.picture" alt="">
                    </div>
                    <!--商品信息-->
                    <div class="product-detail">
                      <p>{{ item.name }}</p>
                      <p>{{ item.attrsText }}</p>
                    </div>
                  </div>
                  <!--商品单价-->
                  <div class="product-unitprice">{{item.price}}</div>
                  <!--商品数量-->
                  <div class="product-number">{{item.count}}</div>
                  <!--商品小计-->
                  <div class="product-subtotal">{{item.totalPrice}}</div>
                  <!--实付-->
                  <div class="order-paymoney">{{item.totalPayPrice}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--配送信息-->
        <div class="area-line">
          <div class="title">配送选择</div>
          <div class="deliveryd-area">
            <ul>
              <li class="active"><span>工作日配送</span></li>
              <li><span>周末配送</span></li>
            </ul>
          </div>
        </div>
        <!--支付方式-->
        <div class="area-line">
          <div class="title">支付方式</div>
          <div class="payType-area">
            <ul>
              <li class="active"><span>在线支付</span></li>
              <li><span>货到付款</span></li>
            </ul>
          </div>
        </div>
        <!--支付方式-->
        <div class="area-line" v-if="checkorderData.summary">
          <div class="title">全部明细</div>
          <div class="payDetail-area">
            <ul>
              <li>
                <span>商品件数:</span>
                <span>{{checkorderData.summary.goodsCount}}件</span>
              </li>
              <li>
                <span>商品总价:</span>
                <span>¥{{checkorderData.summary.totalPayPrice}}</span>
              </li>
              <li>
                <span>运<i></i><i></i><i></i><i></i>费:</span>
                <span>{{checkorderData.summary.postFee}}元</span>
              </li>
              <li>
                <span>应付总额:</span>
                <span class="totalPrice">¥{{ checkorderData.summary.totalPayPrice }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="gopay-area">
          <rbutton @click="submitOrder" :loading="payLoading"   loadingText ='正在为您提交订单' :disabled="!(checkorderData.userAddresses && checkorderData.userAddresses.length>0)">提交订单</rbutton>
        </div>
      </div>
    </div>
    <!-- 填写地址组件 -->
    <addAddressDialog v-model:visible="showAddressdialog" @addressSuccess="addressSuccess"></addAddressDialog>
  </div>
</template>

<script>
// api
import { getCheckorderDat, createOrderinfo } from '@/api/order'
// vue
import { onMounted, ref } from 'vue'
// 消息提示
import message from '@/utils/messageUI'
// 用户添加地址弹窗
import addAddressDialog from './component/r-addressdialog'
// vue-router
import { useRouter } from 'vue-router'
export default {
  name: 'checkorder',
  setup () {
    // vue-router
    const router = useRouter()
    // 结算订单数据
    const checkorderData = ref({})
    // 是否显示弹窗
    const showAddressdialog = ref(false)
    // 提交订单按钮 是否加载
    const payLoading = ref(false)
    // 获取确认订单信息
    const getCheckOrder = async () => {
      const { result } = await getCheckorderDat()
      console.log(result)
      checkorderData.value = result
    }
    onMounted(() => {
      getCheckOrder()
    })
    // 编辑地址
    const editAddress = () => {
      message({
        type: 'warn',
        text: '臣妾做不到啊！',
        offsetTop: 170
      })
    }
    // 切换地址
    const changeAddress = () => {
      message({
        type: 'warn',
        text: '程序员小哥正在开发中！',
        offsetTop: 170
      })
    }
    // 添加地址成功
    const addressSuccess = () => {
      getCheckOrder()
    }
    // 提交订单
    const submitOrder = async () => {
      // loading加载
      payLoading.value = true
      const params = {
        // 商品集合  {skuId: "300284889", count: 1}
        goods: checkorderData.value.goods.map(p => {
          return {
            skuId: p.skuId,
            count: p.count
          }
        }),
        // 所选地址Id
        addressId: checkorderData.value.userAddresses[checkorderData.value.userAddresses.length-1].id,
        // 配送时间类型，1为不限，2为工作日，3为双休或假日
        deliveryTimeType: 2,
        // 支付方式，1为在线支付，2为货到付款
        payType: 1,
        // 支付渠道：支付渠道，1支付宝、2微信--支付方式为在线支付时，传值，为货到付款时，不传值
        payChannel: 1,
        // 买家留言
        buyerMessage: '拿好一点的货'
      }
      const data = await createOrderinfo(params)
      if (data.msg === '操作成功') {
        // 取消loading加载
        payLoading.value = false
        // 跳转到支付页面
        await router.replace({
          path: `/pay/${data.result.id}`
        })
      }
    }
    return {
      checkorderData,
      editAddress,
      changeAddress,
      showAddressdialog,
      addressSuccess,
      submitOrder,
      payLoading
    }
  },
  components: {
    addAddressDialog
  }
}
</script>

<style scoped lang="scss">
.checkorder-page{
  background-color: #f5f5f5;
  .container{
    overflow: hidden;
    .bread-area{
      padding: 20px 0;
    }
    .checkorder-content{
      padding: 20px;
      background-color: #fff;
      box-sizing: border-box;
      border-radius: $borderRadius;
      margin-bottom: 40px;
      .area-line{
        width: 100%;
        .title{
          font-size: 16px;
          font-weight: bold;
          color: #333;
          width: 100%;
          padding: 15px 0;
          border-bottom: 1px solid #f5f5f5;
        }
        .address-area{
          margin-top: 20px;
          border: 1px solid #f5f5f5;
          border-radius: $borderRadius;
          padding: 15px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .addressempty{
            display: flex;
            align-items: center;
            .iconfont{
              color: $txColor;
              margin-right: 3px;
            }
            color: $txColor;
          }
          .address-left{
            ul{
              li{
                line-height: 30px;
                span{
                  font-size: 14px;
                  &:first-child{
                    color: #999;
                    i{
                      display: inline-block;
                      width: 0.5rem;
                    }
                  }
                  &:last-child{
                    margin-left: 10px;
                  }
                }
              }
            }
          }
          .address-right{
            display: flex;
            align-items: center;
            .address-right-left{
              cursor: pointer;
              width: 100px;
              height: 80px;
              line-height: 80px;
              margin-right: 40px;
              border-right: 1px solid #f5f5f5;
            }
            .address-right-right{
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
        .product-area{
          .product-head{
            border: 1px solid #f5f5f5;
            border-radius: $borderRadius;
            overflow: hidden;
            ul{
              display: flex;
              align-items: center;
              justify-content: space-between;
              li{
                background-color: #f5f5f5;
                text-align: center;
                height: 60px;
                line-height: 60px;
                font-size: 14px;
                color: #333;
                &:nth-child(1){
                  flex: 1;
                }
                &:nth-child(2){
                  width: 112px;
                }
                &:nth-child(3){
                  width: 200px;
                }
                &:nth-child(4){
                  width: 150px;
                }
                &:nth-child(5){
                  width: 150px;
                }
              }
            }
          }
          .product-body{
            ul{
              li{
                padding: 15px 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .product-info{
                  flex: 1;
                  display: flex;
                  align-items: center;
                  .product-img{
                    width: 80px;
                    height: 80px;
                    margin-right: 20px;
                    img{
                      width: 100%;
                      height: 100%;
                      border-radius: 10px;
                    }
                  }
                  .product-detail{
                    display: flex;
                    flex-direction: column;
                    font-size: 14px;
                    height: 80px;
                    justify-content: space-between;
                    p{
                      margin: 10px 0;
                    }
                  }
                }
                .product-unitprice{
                  width: 112px;
                  display: flex;
                  justify-content: center;
                }
                .product-number{
                  width: 200px;
                  display: flex;
                  justify-content: center;
                }
                .product-subtotal{
                  width: 150px;
                  display: flex;
                  justify-content: center;
                }
                .order-paymoney{
                  width: 150px;
                  display: flex;
                  justify-content: center;
                }
              }
            }
          }
        }
        .deliveryd-area{
          ul{
            display: flex;
            align-items: center;
            margin: 20px 0;
            li{
              border: 1px solid #d5d3d3;
              padding: 8px 10px;
              border-radius: 5px;
              margin-right: 15px;
              cursor: pointer;
              color: #999;
              &.active{
                border-color: $txColor;
                color: $txColor;
              }
            }
          }
        }
        .payType-area{
          ul{
            display: flex;
            align-items: center;
            margin: 20px 0;
            li{
              border: 1px solid #d5d3d3;
              padding: 8px 10px;
              border-radius: 5px;
              margin-right: 15px;
              cursor: pointer;
              color: #999;
              &.active{
                border-color: $txColor;
                color: $txColor;
              }
            }
          }
        }
        .payDetail-area{
          display: flex;
          justify-content: flex-end;
          ul{
            margin: 40px 0;
            li{
              line-height: 30px;
              span{
                &:first-child{
                  font-size: 14px;
                  color: #666;
                }
                &:last-child{
                  margin-left: 100px;
                }
                i{
                  display: inline-block;
                  width: .5rem;
                }
              }
              .totalPrice{
                color: $priceColor;
                font-size: 18px;
                font-weight: bold;
              }
            }
          }
        }

      }
      .gopay-area{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        border-top: 1px solid #f5f5f5;
        padding-top: 40px;
        padding-bottom: 40px;
      }
    }
  }
}
</style>
