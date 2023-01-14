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
      <div class="checkorder-content">
        <!--收货地址-->
        <div class="area-line">
          <div class="title">收货地址</div>
          <div class="address-area">
            <div class="address-left">
              <ul>
                <li>
                  <span>收<i></i>货<i></i>人:</span>
                  <span>谭文福</span>
                </li>
                <li>
                  <span>联系方式:</span>
                  <span>1858156981</span>
                </li>
                <li>
                  <span>收货地址:</span>
                  <span>成都市</span>
                </li>
              </ul>
            </div>
            <div class="address-right">
              <div class="address-right-left">修改地址</div>
              <div class="address-right-right">
                <rbutton type="line" size="default">切换地址</rbutton>
                <rbutton type="line" size="default">添加地址</rbutton>
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
                <li>
                  <!--商品信息区域-->
                  <div class="product-info">
                    <!--商品图片-->
                    <div class="product-img">
                      <img src="" alt="">
                    </div>
                    <!--商品信息-->
                    <div class="product-detail">
                      <p>商品详情</p>
                    </div>
                  </div>
                  <!--商品单价-->
                  <div class="product-unitprice"></div>
                  <!--商品数量-->
                  <div class="product-number"></div>
                  <!--商品小计-->
                  <div class="product-subtotal"></div>
                  <!--实付-->
                  <div class="order-paymoney"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'checkorder'
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
        }
      }
    }
  }
}
</style>
