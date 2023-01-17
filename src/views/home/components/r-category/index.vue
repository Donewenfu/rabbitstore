<template>
  <div @mouseleave="hideProductCate">
    <div class="r-category-components" >
      <ul>
        <li v-for="(item,index) in menuListData" :class="userSelectId===item.id?'active':''" :key="index" @mouseenter="showProductCate(item.id)">
          <div class="left-title">
            <i class="iconfont" :class="item.iconName"></i>
            <div class="cate-title">{{ item.name }}</div>
            <div class="cate-subtitle" v-if="item.children&&item.children.length>0">
              <span class="ellipsis" style="display: block;width: 70px" v-for="(subitem,subindex) in item.children" :key="subindex">{{ subitem.name }}</span>
            </div>
            <template v-else>
              <rskeleton></rskeleton>
            </template>
          </div>
          <div class="right-arrow">
            <i class="iconfont icon-jiantou"></i>
          </div>
        </li>
      </ul>
    </div>
    <!--商品分类盒子-->
    <transition>
      <div class="cate-product-box" v-if="showProduct">
        <div class="innercate">
          <div class="cate-product-header">
            <span>分类推荐</span>
          </div>
          <div class="cate-product-content" v-if="userSelectCateData">
            <template v-for="(item,index) in userSelectCateData" :key="index">
              <rcateproduct :productData="item" ></rcateproduct>
            </template>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// vuex
import { useStore } from 'vuex'
// vue
import { computed, ref } from 'vue'
// 图标icon
import { menuicon } from '@/jsondata/menuicon'
// 分类商品组件
import rcateproduct from '@/components/r-cateproduct/index'
export default {
  name: 'index',
  components: {
    rcateproduct
  },
  setup () {
    // vuex数据
    const store = useStore()
    // 是否显示商品移入盒子
    const showProduct = ref(false)
    // 用户选中的分类id
    const userSelectId = ref(null)
    // 获取分类数据 存储在vuex中的
    const menuListData = computed(() => {
      return store.state.category.cateList.map((item, index) => {
        return {
          ...item,
          children: item.children && item.children.slice(0, 1),
          // 添加
          iconName: menuicon[index]
        }
      })
    })
    // 用户移入分类显示
    const showProductCate = (id) => {
      userSelectId.value = id
      showProduct.value = true
    }
    // 用户选中商品的数据
    const userSelectCateData = computed(() => {
      const userSelect = menuListData.value.find((item) => {
        if (item.id === userSelectId.value) {
          return item
        }
      })
      return userSelect.goods ? userSelect.goods.slice(0, 9) : []
    })
    // 用户移出分类隐藏
    const hideProductCate = () => {
      showProduct.value = false
      userSelectId.value = ''
    }
    return { menuListData, showProductCate, hideProductCate, showProduct, userSelectCateData, userSelectId }
  }
}
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.r-category-components{
  width: 176px;
  padding: 8px;
  height: 426px;
  box-sizing: border-box;
  background-color: $txColor;
  border-radius: $borderRadius;
  cursor: pointer;
  ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    li{
      color: #fff;
      display: flex;
      height: 40px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      &.active{
        background-color: #fff;
        border-radius: 4px;
        color: $txColor;
        .iconfont{
          color: $txColor !important;
        }
      }
      .left-title{
        display: flex;
        align-items: center;
        .iconfont{
          font-size: 20px;
          margin-right: 10px;
          margin-left: 5px;
        }
        .cate-title{
          margin-right: 10px;
        }
      }
      .right-arrow{
        .iconfont{
          font-size: 10px !important;
          margin-right: 5px;
          color: rgba(255, 255, 255, 0.6);
        }
      }
      &:last-child{
        border-bottom: none;
      }
    }
  }
}
.cate-product-box{
  //margin-top: 40px;
  width: 1062px;
  height: 426px;
  background-color: #fff;
  position: absolute;
  top: 0;
  z-index: 9999;
  left: 178px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: $borderRadius;
  .innercate{
    margin-left: 10px;
    background-color: #fff;
  }
  .cate-product-header{
    span{
      font-size: 18px;
      font-weight: bold;
    }
  }
  .cate-product-content{
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
  }
}
</style>
