<template>
  <div class="cart-page">
    <div class="container">
      <!--面包屑导航-->
      <div class="cart-cart-bread">
        <rbread>
          <rbreaditem to="/">首页</rbreaditem>
          <rbreaditem to="/cart">购物车</rbreaditem>
        </rbread>
      </div>
      <!--购物车内容区域-->
      <div class="cart-content container">
        <table>
          <thead>
            <tr>
              <th class="selectAll">
                <rcheckbox v-model="userSelectAll"><span>全选</span></rcheckbox>
              </th>
              <th class="productinfo">商品信息</th>
              <th class="unitprice">单价</th>
              <th class="priductnumber">数量</th>
              <th class="subtotal">小计</th>
              <th class="handle">操作</th>
            </tr>
          </thead>
          <tbody v-if="firstCart">
            <template v-for="(item, index) in cartList" :key="index">
              <tr>
                <td>
                  <div class="cartproduct">
                    <!--购物车选择框-->
                    <div class="product-checkbox">
                      <rcheckbox v-model="item.selected"></rcheckbox>
                    </div>
                    <!--购物车商品数据-->
                    <div class="product-info">
                      <div class="product-info-img-detail">
                        <div class="product-img">
                          <img :src="item.picture" :alt="item.name">
                        </div>
                        <!--商品信息-->
                        <div class="product-info">
                          <p class="ellipsis">{{ item.name }}</p>
                          <p>{{ item.attrsText }}</p>
                        </div>
                      </div>
                      <!--商品单价-->
                      <div class="product-price">
                        <span>¥ {{item.nowPrice}}</span>
                      </div>
                      <!--商品数量组件-->
                      <div class="product-counter">
                        <rcounter v-model="item.count"></rcounter>
                      </div>
                      <!--商品小计-->
                      <div class="product-subtotal">
                        <span>¥{{computedSubtotal(item.nowPrice, item.count)}}</span>
                      </div>
                      <!--商品操作列-->
                      <div class="product-edit">
                        <i class="iconfont icon-delete"></i>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
          <div class="carloading" v-else>
            <rloadinglogo></rloadinglogo>
          </div>
        </table>

      </div>
      <!--底部结算区域-->
      <div class="cart-bottom">
        <!--底部结算左侧区域-->
        <div class="cart-bottom-left">
          <!--全选框-->
          <div class="select-all">
            <rcheckbox></rcheckbox>
          </div>
          <div class="handle-area">
            <span>删除商品</span>
            <span>清空失效商品</span>
          </div>
        </div>
        <!--底部结算右侧区域-->
        <div class="cart-bottom-right">
          <span class="statistics">共件 {{computedProductNumTotal.userCartTotalNum}} 商品,已选择 {{computedProductNumTotal.userCartSelectNum}} 件,商品合计：</span>
          <span class="totalPrice">¥{{ computedProductNumTotal.userSelectPrice }}</span>
          <rbutton size="default">下单结算</rbutton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// api
import {getCartList} from '@/api/cart'
// vue
import {computed, ref} from 'vue'
// vuex
import {useStore} from 'vuex'

export default {
  name: 'cartpage',
  setup () {
    // 购物车数据
    const cartList = ref([])
    // vuex
    const store = useStore()
    // 是否全选
    const userSelectAll = ref(false)
    // 购物车是否加载完毕
    const firstCart = ref(false)
    // 获取购物车列表数据
    const getCartListData = async () => {
      const { result } = await getCartList()
      // 购物车列表数据
      cartList.value = result
      // 数据请求完毕关闭loading加载
      firstCart.value = true
    }
    // 获取购物车数据
    getCartListData()
    // 计算商品小计
    const computedSubtotal = (price, count) => {
      return (Number(count) * Number(price)).toFixed(2)
    }
    // 计算总件数 和 总价
    const computedProductNumTotal = computed(() => {
      return {
        // 用户的购物车总件数
        userCartTotalNum: cartList.value.reduce((p, c) => p + c.count, 0),
        // 用户已选择的数量
        userCartSelectNum: (cartList.value.filter(p => p.selected)).length,
        // 用户已选择的 商品总价
        userSelectPrice: (cartList.value.reduce((p, c) => p + (c.selected ? (c.count * Number(c.nowPrice)) : 0), 0)).toFixed(2)
      }
    })

    return {
      cartList,
      userSelectAll,
      firstCart,
      computedSubtotal,
      computedProductNumTotal
    }
  }
}
</script>

<style scoped lang="scss">
.cart-page{
  background-color: #f5f5f5;
  overflow: hidden;
  .cart-cart-bread{
    padding: 20px 0;
  }
  .cart-content{
    background-color: #fff;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: $borderRadius;
    table{
      thead{
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #f5f5f5;
        tr{
          display: flex;
          align-items: center;
          justify-content: center;
          th{
            font-size: 15px;
            color: $txColor;
            font-weight: normal;
            &.selectAll{
              width: 100px;
              span{
                color: $txColor;
              }
            }
            &.productinfo{
              width:300px;
            }
            &.unitprice{
              width: 200px;
            }
            &.priductnumber{
              width: 200px;
            }
            &.subtotal{
              width: 200px;
            }
            &.handle{
              width: 200px;
            }
          }
        }
      }
      .carloading{
        margin: 90px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      tbody{
        .cartproduct{
          display: flex;
          align-items: center;
          margin: 20px 0;
          .product-checkbox{
            width: 100px;
          }
          .product-info{
            //width:300px;
            display: flex;
            align-items: center;
            .product-info-img-detail{
              width: 300px;
              display: flex;
              align-items: center;
              .product-info{
                margin-left: 10px;
                height: 80px;

              }
            }
            .product-img{
              width: 80px;
              img{
                width: 80px;
                height: 80px;
                border-radius: $borderRadius;
              }
            }
            .product-info{
              display: flex;
              width: 190px;
              flex-direction: column;
              p{
                margin: 5px 0;
                width:100%;
              }
            }
            .product-price{
              width: 200px;
              display: flex;
              justify-content: center;
            }
            .product-counter{
              width: 200px;
              display: flex;
              justify-content: center;
            }
            .product-subtotal{
              width: 200px;
              display: flex;
              justify-content: center;
            }
            .product-edit{
              width: 200px;
              display: flex;
              justify-content: center;
              .iconfont{
                cursor: pointer;
                font-size: 16px;
                &:hover{
                  color: $txColor;
                }
              }
            }
          }
        }
      }
    }

  }
  .cart-bottom{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    margin-top: 20px;
    border-radius: $borderRadius;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .cart-bottom-left{
      display: flex;
      align-items: center;
      .select-all{
        display: flex;
        align-items: center;
      }
      .handle-area{
        display: flex;
        align-items: center;
        span{
          margin: 0 10px;
        }
      }
    }
    .cart-bottom-right{
      display: flex;
      align-items: center;
      .totalPrice{
        margin-left: 10px;
        margin-right: 16px;
        color: $priceColor;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
}
</style>
