<template>
  <div class="r-indexmainproduct-components">
    <div class="r-indexmainproduct-title">
      <div class="left-title">
        <h3>{{ productData.name }}</h3>
      </div>
      <div class="right-content">
        <div class="right-content-left-cate">
          <ul>
            <li>
              <a href="#" class="active">水果</a>
            </li>
            <li>
              <a href="#">蔬菜</a>
            </li>
            <li>
              <a href="#">肉蛋禽</a>
            </li>
            <li>
              <a href="#">肉蛋禽</a>
            </li>
          </ul>
        </div>
        <div class="right-more">
          <span>查看全部</span>
          <i class="iconfont icon-next-icon"></i>
        </div>
      </div>
    </div>
    <div class="r-indexmainproduct-product">
      <div class="r-indexmainproduct-product-left" :style="{'background-image':'url('+productData.picture+')'}">

        <!--标签区域-->
        <div class="product-tag">
          <div class="left-box">{{ productData.name }}</div>
          <div class="right-box">{{ productData.saleInfo }}</div>
        </div>
      </div>
      <div class="r-indexmainproduct-product-right">
        <template v-for="(item,index) in productData.goods" :key="index">
          <rmainproduct :productData="item"></rmainproduct>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// 商品组件
import rmainproduct from '@/components/r-mainproduct/index'
export default {
  name: 'indexmainproduct',
  props: {
    // 商品区块数据
    productData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    rmainproduct
  }
}
</script>

<style scoped lang="scss">
.r-indexmainproduct-components{
  padding-top: 34px;
  padding-bottom: 34px;
  width: 100%;
  .r-indexmainproduct-title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left-title{
      font-size: 20px;
      color: #333333;
      h3{
        font-weight: normal;
      }
    }
    .right-content{
      display: flex;
      align-items: center;
      .right-content-left-cate{
        ul{
          margin-right: 52px;
          display: flex;
          li{
            margin-right: 13px;
            display: flex;
            a{
              display: block;
              font-size: 14px;
              color: #333;
              padding: 0 5px;
              border-radius: 5px;
              display: flex;
              transition: all .3s;
              align-items: center;
              justify-content: center;
              &.active{
                color: #fff;
                background-color: $txColor;
              }
              &:hover{
                color: #fff;
                background-color: $txColor;
              }
            }
          }
        }
      }
      .right-more{
        span{
          font-size: 14px;
          color: #999999;
        }
        .icon-next-icon{
          color: #999999;
          font-size:15px;
        }
      }
    }
  }
  .r-indexmainproduct-product{
    display: flex;
    align-items: center;
    margin-top: 34px;
    .r-indexmainproduct-product-left{
      width: 240px;
      height: 610px;
      border-radius: $borderRadius;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      cursor: pointer;
      .product-tag{
        position: absolute;
        top: 270px;
        left: 0;
        display: flex;
        align-items: center;
        .left-box{
          width: 76px;
          height: 66px;
          background-color: #000000;
          font-size: 14px;
          color: #fff;
          text-align: center;
          line-height: 66px;
        }
        .right-box{
          border-top-right-radius: $borderRadius;
          border-bottom-right-radius: $borderRadius;
          height: 66px;
          color: #fff;
          line-height: 66px;
          padding-left: 10px;
          padding-right: 10px;
          box-sizing: border-box;
          background-color: rgba(0,0,0,0.5);
        }
      }
    }
    .r-indexmainproduct-product-right{
      flex: 1;
      height: 610px;
      margin-left: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-left: 37px;
    }
  }
}
</style>
