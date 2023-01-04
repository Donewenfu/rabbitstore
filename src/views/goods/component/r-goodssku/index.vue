<template>
  <div class="r-goodssku-components">
    <!--商品规格单位-->
    <div class="product-spec" v-for="(item,index) in goods.specs" :key="index">
      <div class="title">{{ item.name }}</div>
      <ul>
        <!--sku数据-->
        <li
          class="default"
          :class="{'imgclass':val.picture,'selected':val.selected, 'disabled': val.disabled}"
          @click="selectedSku(item,val)"
          v-for="(val,idx) in item.values" :key="idx">
          <img v-if="val.picture" :src="val.picture" :title="val.name">
          <p v-else :title="val.name">{{val.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// sku方法模块
import { Skufun } from '@/views/goods/component/r-goodssku/model/skufun'
export default {
  name: 'rgoodssku',
  props: {
    // 商品信息
    goods: {
      type: Object,
      default: () => {}
    },
    // skuid
    skuid: {
      type: [String, Number],
      default: ''
    }
  },
  setup (props, { emit }) {
    // sku字典
    const pathMap = Skufun.getSkupath(props.goods)
    // 初始化选中规格
    Skufun.initDefaultsku(props.goods, props.skuid)
    // sku初始化判断规格
    Skufun.updateDisabledStatus(props.goods.specs, pathMap)
    // 改变用户选中的
    const selectedSku = (item, val) => {
      // 判断当前规格是否能点击 根据对象上的disabled 进行判断
      if (val.disabled) return
      // 判断当前元素是否选中
      if (!val.selected) {
        // 拍他思想
        item.values.forEach((v) => {
          v.selected = false
        })
        // 设置当前选中的true
        val.selected = true
      } else {
        val.selected = false
      }
      // 当用户点击按钮的时候 需要去查看每个单元格规格是否需要禁用
      Skufun.updateDisabledStatus(props.goods.specs, pathMap)
      // 判断用户选择完毕了？ 规格是否选择完毕？
      // 获取用户选择的规格选项数据
      const selectSpec = Skufun.getSelectedValues(props.goods.specs).filter(val => val)
      // 判断用户选中的规格是否选择齐全？
      if (selectSpec.length === props.goods.specs.length) {
        const { inventory, oldPrice, price, id, specs } = props.goods.skus.find(val => val.id === pathMap[selectSpec.join('$')][0])
        // 向父组件传值
        const params = {
          skuId: id,
          price,
          oldPrice,
          inventory,
          specsText: specs.reduce((p, c) => `${p} ${c.name}: ${c.valueName}`, '').replace(' ', '')
        }
        emit('change', params)
      } else {
        emit('change', {})
      }
    }
    return {
      selectedSku
    }
  }
}
</script>

<style scoped lang="scss">
.r-goodssku-components{
  .title{
    margin: 10px 0;
  }
  .selected{
    border: 1px solid $txColor !important;
  }
  .default{
    border: 1px solid #f5f5f5;
    cursor: pointer;
  }
  .disabled{
    cursor: not-allowed;
    border: 1px dashed #eaeaea !important;
    color: #eaeaea !important;
    img{
      opacity: .5;
      cursor: not-allowed;
    }
  }
  .product-spec{
    ul{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      li{
        margin-bottom: 10px;
        border-radius: 3px;
        padding: 5px 10px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.imgclass{
          width: 60px;
          height: 60px;
          margin-right: 10px;
          border-radius: 3px;
          cursor: pointer;
          img{
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
