<template>
  <div class="subcategory-page">
    <div class="container">
      <!--面包屑导航-->
      <div class="bread-area">
        <rbread>
          <rbreaditem to="/">首页</rbreaditem>
          <rbreaditem :to="`/category/${breadData.top.id}`">{{ breadData.top.name }}</rbreaditem>
          <rbreaditem :to="`/category/sub/${breadData.sub.id}`">{{ breadData.sub.name }}</rbreaditem>
        </rbread>
      </div>

      <!--当没有筛选数据的时候显示提示-->
      <div class="empty-filter" v-if="firstLoading && filterListData.saleProperties.length === 0">
        <rempty></rempty>
      </div>
      <!--过滤区域加载-->
      <div class="catefilter-loading" v-if="!firstLoading">
        <rcatefilteskeleton></rcatefilteskeleton>
      </div>
      <!--商品筛选区域-->
      <div class="product-filter-area container" v-if="firstLoading && filterListData.saleProperties.length>0">
        <!--品牌区域-->
        <div class="filter-item">
          <!--左侧规格名字-->
          <div class="left-spectitle">
            <p class="ellipsis">品牌:</p>
          </div>
          <!--右侧规格值-->
          <div class="right-specvalue filtervalarea">
            <ul>
              <li v-for="(item,inx) in filterListData.brands" :key="inx" :title="item.name"  :class="{'active':filterListData.brands.selectId == item.id}">{{item.name}}</li>
            </ul>
          </div>
        </div>
        <!--品牌区域-->
        <div class="filter-item" v-for="(item,index) in filterListData.saleProperties" :key="index">
          <!--左侧规格名字-->
          <div class="left-spectitle">
            <p class="ellipsis" :title="item.name">{{ item.name }}:</p>
          </div>
          <!--右侧规格值-->
          <div class="right-specvalue filtervalarea">
            <ul>
              <li v-for="(spec,inx) in item.properties" :key="inx" :title="spec.name" :class="{'active':item.selectId == spec.id}">{{spec.name}}</li>
            </ul>
          </div>
        </div>
      </div>

      <!--商品区域-->
      <div class="product-list-area" v-if="filterListData.saleProperties.length>0">
        <!--条件筛选区域-->
        <div class="producct-filter-area">
          <div class="left-area">
            <a href="javascript:" :class="{active:cateProductFilter.sortField === null}" @click="selectFilter(null)">默认排序</a>
            <a href="javascript:" :class="{active:cateProductFilter.sortField === 'publishTime'}" @click="selectFilter('publishTime')">最新商品</a>
            <a href="javascript:" :class="{active:cateProductFilter.sortField === 'orderNum'}" @click="selectFilter('orderNum')">最高人气</a>
            <a href="javascript:" :class="{active:cateProductFilter.sortField === 'evaluateNum'}" @click="selectFilter('evaluateNum')">评论最多</a>
            <a href="javascript:" class="pricearea" @click="selectFilter('price')">
              <span>价格排序</span>
              <div class="sorticon">
                <i class="iconfont icon-shangjiantou" :class="{on:cateProductFilter.sortMethod === 'asc'}"></i>
                <i class="iconfont icon-xiajiantou" :class="{on:cateProductFilter.sortMethod === 'desc'}"></i>
              </div>
            </a>
          </div>
          <div class="right-area">
            <rcheckbox v-model="cateProductFilter.inventory">仅显示有货商品</rcheckbox>
            <rcheckbox v-model="cateProductFilter.onlyDiscount">仅显示特惠商品</rcheckbox>
          </div>
        </div>
        <!--商品区域-->
        <div class="product-area">
          <ul>
            <li v-for="(item,index) in 20" :key="index" :style="{'margin':(index+1)%5==0?'0px':'0px 12px 40px 12px'}">
              <rgooditem></rgooditem>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// vue router
import { useRoute } from 'vue-router'
// vuex
import { useStore } from 'vuex'
// vue
import { computed, reactive, ref, watch } from 'vue'
// api
import { getFilterproductData } from '@/api/category'
// 加载组件
import rcatefilteskeleton from './components/r-catefilterskeleton/index'
// 商品组件
import rgooditem from '@/components/r-gooditem/index'
// 缺省页组件
import rempty from '@/components/r-empty/index'
export default {
  name: 'subcategory',
  setup () {
    // 首次是否加载完毕
    const firstLoading = ref(false)
    // route
    const route = useRoute()
    // vuex
    const store = useStore()
    // 通过计算 计算的来url数据
    const breadData = computed(() => {
      const obj = {}
      store.state.category.cateList.forEach((item, index) => {
        item.children.forEach((subitem, indx) => {
          if (subitem.id === route.params.id) {
            obj.sub = {
              name: subitem.name,
              id: subitem.id
            }
            obj.top = {
              name: item.name,
              id: item.id
            }
          }
        })
      })
      return obj
    })

    // 筛选数据列表
    const filterListData = ref({})
    const getFilterData = () => {
      // 获取分类筛选数据
      getFilterproductData(route.params.id).then(res => {
        const { result: { saleProperties, brands } } = res
        // 选中id
        brands.selectId = null
        // 品牌 前面加全部数据
        brands.unshift({ id: null, name: '全部' })
        // 每个规格添加全部数据
        saleProperties.forEach(item => {
          // 选中id
          item.selectId = null
          item.properties.unshift({ id: null, name: '全部' })
        })
        // 设置数据
        filterListData.value = res.result
        // 首次加载完毕
        firstLoading.value = true
      })
    }
    watch(() => route.params.id, (newval) => {
      // 判断当前val是否有值，并且路由的路径 是 /category/sub/ /category/sub/109243018
      if (newval && `/category/sub/${newval}` === route.path) {
        firstLoading.value = false
        getFilterData()
      }
    }, {
      // 初始化执行 立即执行
      immediate: true
    })

    // 商品区域筛选条件
    const cateProductFilter = reactive({
      // 是否有库存
      inventory: false,
      // 只显示特惠
      onlyDiscount: false,
      // 排序字段 按钮区域筛选条件 排序条件 默认值为null
      sortField: null,
      // 价格排序规则
      sortMethod: null
    })
    // 点击选中
    const selectFilter = (filterName) => {
      if (filterName !== 'price') {
        if (cateProductFilter.sortField === filterName) return
        cateProductFilter.sortField = filterName
      } else {
        // 次选是证明第一次点击
        if (cateProductFilter.sortMethod === null) {
          cateProductFilter.sortMethod = 'desc'
        } else {
          cateProductFilter.sortMethod = cateProductFilter.sortMethod === 'desc' ? 'asc' : 'desc'
        }
      }
    }
    return { breadData, filterListData, cateProductFilter, selectFilter, firstLoading }
  },
  components: {
    rcatefilteskeleton,
    rgooditem,
    rempty
  }
}
</script>

<style scoped lang="scss">
.subcategory-page{
  background-color: #f5f5f5;
  .container{
    overflow: hidden;
    .bread-area{
      margin: 20px 0;
    }
    .product-filter-area{
      padding: 20px;
      box-sizing: border-box;
      background-color: #fff;
      margin-top: 30px;
      border-radius: $borderRadius;
      .filter-item{
        display: flex;
        line-height: 40px;
        .filtervalarea{
          ul{
            li{
              &.active{
                color: $txColor;
              }
            }
          }
        }
        .left-spectitle{
          width: 80px;
          p{
            overflow: hidden;
            color: $txColor;
          }
        }
        .right-specvalue{
          margin-left: 20px;
          flex: 1;
          ul{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            li{
              cursor: pointer;
              margin-right: 20px;
              transition: all .3s;
              &.on{
                color: $txColor;
              }
              &:hover{
                color: $txColor ;
              }
            }
          }
        }
      }
    }
    .product-list-area{
      background-color: #fff;
      border-radius: $borderRadius;
      margin-top: 30px;
      margin-bottom: 40px;
      padding: 20px;
      box-sizing: border-box;
      .producct-filter-area{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left-area{
          display: flex;
          align-items: center;
          a{
            background: #fff;
            display: inline-block;
            border: 1px solid #e4e4e4;
            line-height: 30px;
            padding: 3px 20px;
            border-radius: 5px;
            box-sizing: border-box;
            margin-right: 20px;
            transition: all .3s;
            &:not(:last-child){
              &:hover{
                background-color: $txColor;
                color: #fff;
                border-color: $txColor;
              }
            }
            &.active{
              background-color: $txColor;
              color: #fff;
              border-color: $txColor;
            }
          }
          .pricearea{
            display: flex;
            align-items: center;
            span{
              font-size: 13px;
              color: #999;
            }
            .sorticon{
              display: flex;
              flex-direction: column;
              margin-left: 5px;
              //position: absolute;
              .iconfont{
                font-size: 10px;
                line-height: 8px;
                transform: scale(.8);
                color: #999;
                &.on{
                  color: $txColor;
                }
              }
            }
          }
        }
        .right-area{
          display: flex;
          align-items: center;
          div{
            margin: 0 5px;
          }
        }
      }
    }
    .product-area{
      margin-top: 30px;
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          margin-bottom: 30px;
        }
      }
    }
  }
  .empty-filter{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 40px;
    border-radius: $borderRadius;
  }
}
</style>
