<template>
  <div class="r-goodssku-components">
    <!--商品规格单位-->
    <div class="product-spec" v-for="(item,index) in goods.specs" :key="index">
      <div class="title">{{ item.name }}</div>
      <ul>
        <li
          class="default"
          :class="{'imgclass':val.picture,'selected':val.selected}"
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
export default {
  name: 'rgoodssku',
  props: {
    goods: {
      type: Object,
      default: () => {}
    }
  },
  setup () {
    const selectedSku = (item, val) => {
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
    border: 1px dashed #f5f5f5;
  }
  .product-spec{
    ul{
      display: flex;
      align-items: center;
      li{
        border-radius: 3px;
        padding: 5px 10px;
        margin-right: 10px;
        &.imgclass{
          width: 60px;
          height: 60px;
          margin-right: 10px;
          border-radius: 3px;
          cursor: pointer;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
