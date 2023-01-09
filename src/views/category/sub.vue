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
              <li v-for="(item,inx) in filterListData.brands" @click="userSelectBrand(item)" :key="inx" :title="item.name"  :class="{'active':filterListData.brands.selectId == item.id}">{{item.name}}</li>
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
              <li v-for="(spec,inx) in item.properties" :key="inx" :title="spec.name" @click="selectSpec(item,spec)" :class="{'active':item.selectId == spec.id}">{{spec.name}}</li>
            </ul>
          </div>
        </div>
      </div>

      <!--商品区域-->
      <div class="product-list-area" v-if="firstLoading&&filterListData.saleProperties.length>0">
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
            <rcheckbox v-model="cateProductFilter.inventory" @change="changeRightselect">仅显示有货商品</rcheckbox>
            <rcheckbox v-model="cateProductFilter.onlyDiscount" @change="changeRightselect">仅显示特惠商品</rcheckbox>
          </div>
        </div>
        <!--商品区域-->
        <div class="product-area">
          <ul>
            <li v-for="(item,index) in subProductList" :key="index" :style="{'margin':(index+1)%5==0?'0px':'0px 12px 40px 12px'}">
              <rgooditem :goodsData="item"></rgooditem>
            </li>
          </ul>
          <!--底部loading加载 子组件在自定义事件-->
          <rloadingbottom :loading="loading" :finished="finished" @infiniteloadData="loadSubData"></rloadingbottom>
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
// api
import { finSubgoodsData } from '@/api/goods'
export default {
  name: 'subcategory',
  setup () {
    // 商品列表数据
    const subProductList = ref([])
    // 商品列表请求参数
    let reqParams = reactive({
      // 当前页码
      page: 1,
      // 每一页的数据大小
      pageSize: 18,
      // 分类id
      categoryId: '',
      // 用户选择的分类数据
      attrs: [],
      // 品牌id
      brandId: ''
    })
    // 商品列表加载
    const loading = ref(false)
    // 是否加载完毕
    const finished = ref(false)
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
        // 设置标题
        document.title = breadData.value.sub.name
      })
    }
    watch(() => route.params.id, (newval) => {
      // 判断当前val是否有值，并且路由的路径 是 /category/sub/ /category/sub/109243018
      if (newval && `/category/sub/${newval}` === route.path) {
        subProductList.value = []
        finished.value = false
        // 是否初始化加载完毕
        firstLoading.value = false
        // 获取筛选条件
        getFilterData()
        // 商品列表清空
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
      finished.value = true
      // 合并参数 请求
      reqParams = { ...cateProductFilter, ...reqParams }
      // 初始页面为第一页
      reqParams.page = 1
      // 是否加载完毕
      finished.value = false
      // 清空商品列表数据
      subProductList.value = []
      // 请求数据
      loadSubData()
    }

    // 到底部加载更多商品数据
    const loadSubData = () => {
      // 更改组件加载状态
      loading.value = true
      // 分类id
      reqParams.categoryId = route.params.id
      // 请求参数
      finSubgoodsData(reqParams).then((res) => {
        const { result: { items } } = res
        // 查看后端是否返回了列表数据
        if (items.length) {
          subProductList.value.push(...items)
          // 请求的页数+1
          reqParams.page++
        } else {
          // 如果后端返回的列表数据为0 那么证明已经没有数据了 把finshed 设置为加载完成
          finished.value = true
        }
        // 请求结束
        loading.value = false
      })
    }

    // 用户选择右侧单选框事件
    const changeRightselect = () => {
      finished.value = true
      // 合并请求参数，保留之前参数
      reqParams = { ...reqParams, ...cateProductFilter }
      // 初始化为第一页
      reqParams.page = 1
      // 是否加载完毕
      finished.value = false
      // 清空数据列表
      subProductList.value = []
      loadSubData()
    }
    // 用户选择筛选条件
    const selectSpec = (parent, spec) => {
      // 用户选中的规格id
      const userSelectId = spec.id
      // 父级规格数据
      parent.selectId = userSelectId
      // 条件筛选条件
      addFilterParmams(parent, spec)
      // 合并请求参数，保留之前参数
      reqParams = { ...reqParams, ...cateProductFilter }
      // 初始化为第一页
      reqParams.page = 1
      // 是否加载完毕
      finished.value = false
      // 清空数据列表
      subProductList.value = []
      // 请求数据
      loadSubData()
    }

    // 添加筛选条件
    const addFilterParmams = (parent, spec) => {
      // {groupName: "颜色", propertyName: "西瓜红"}
      // 需要判断 是否选中的是统一规格 只是规格值不一样 循环数组 进行查找 查找出用户选中的 下标 如果返回 -1 证明没有选中 如果有值就删除 再进行push
      const userSelectIndex = reqParams.attrs.findIndex(item => {
        return item.groupName === parent.name
      })
      if (userSelectIndex !== -1) { // 没找到情况
        reqParams.attrs.splice(userSelectIndex, 1)
      }
      reqParams.attrs.push({
        groupName: parent.name,
        propertyName: spec.name
      })
    }

    // 用户选中品牌
    const userSelectBrand = (brand) => {
      const { id } = brand
      // 用户选中的品牌id
      filterListData.value.brands.selectId = id
      // 选中品牌id
      reqParams.brandId = id
      // 发送请求
      // 合并请求参数，保留之前参数
      reqParams = { ...reqParams, ...cateProductFilter }
      // 初始化为第一页
      reqParams.page = 1
      // 清空数据列表
      subProductList.value = []
      // 是否加载完毕
      finished.value = false
      // 请求数据
      loadSubData()
    }

    return { breadData, filterListData, cateProductFilter, selectFilter, firstLoading, loading, finished, loadSubData, subProductList, changeRightselect, selectSpec, userSelectBrand }
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
  .catefilter-loading{
    margin: 20px;
  }
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
