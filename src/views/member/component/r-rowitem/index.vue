<template>
  <div class="r-row-item-component">
    <!--标题区域-->
    <div class="row-head">
      <p>{{title}}</p>
    </div>
    <!--商品列表区域-->
    <div class="row-body">
      <slot>
        <div class="product-list">
          <template v-for="(item, index) in dataList" :key="index">
            <rmainproduct :productData="item"></rmainproduct>
          </template>
        </div>
      </slot>

    </div>
  </div>
</template>

<script>
// 商品组件
import rmainproduct from '@/components/r-mainproduct/index'
export default {
  name: 'rrowitem',
  props: {
    // 标题区域
    title: {
      type: String,
      default: '默认标题'
    },
    // 组件数据列表
    dataList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    rmainproduct
  }
}
</script>

<style scoped lang="scss">
.r-row-item-component{
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  .row-head{
    width: 100%;
    padding: 10px 0 15px 0;
    p{
      font-size: 18px;
      font-weight: bold;
      line-height: 40px;
    }
    border-bottom: 1px solid #f5f5f5;
  }
  .row-body{
    margin-top: 20px;
    .product-list{
      display: flex;
    }
  }
}
</style>
