<template>
  <div class="r-goodscomment-components">
    <!--loading 加载-->
    <div class="comment-loading" v-if="loadingshow">
      <rloadinglogo></rloadinglogo>
    </div>
    <div class="comment-inner" v-else>
      <!--评价顶部-->
      <div class="comment-top-header">
        <!--人数 好评-->
        <div class="comment-top-left">
          <ul>
            <li>
              <h2>{{ evaluateData.salesCount }}人</h2>
              <p>人购买</p>
            </li>
            <li>
              <h2>{{ evaluateData.praisePercent }}</h2>
              <p>好评率</p>
            </li>
          </ul>
        </div>
        <!--右侧标签区域-->
        <div class="comment-top-right">
          <div class="left-text">大家都在说：</div>
          <div class="right-list">
            <ul>
              <li
                v-for="(item, index) in evaluateData.tags" :key="index"
                :class="{'active':tagCurrent === index}"
                @click="clickTag(index)"
              >{{ item.title }}({{item.tagCount}})</li>
            </ul>
          </div>
        </div>
      </div>
      <!--评价列表区域-->
      <!--排序-->
      <div class="sort-area">
        <p>排序:</p>
        <ul>
          <li :class="{'active': reqparmas.sortField === null}" @click="changeSort(null)">默认</li>
          <!--createTime-->
          <li :class="{'active': reqparmas.sortField === 'createTime'}" @click="changeSort('createTime')">最新</li>
          <!--praiseCount-->
          <li :class="{'active': reqparmas.sortField === 'praiseCount'}" @click="changeSort('praiseCount')">最热</li>
        </ul>
      </div>
      <!--评论列表 还修护肤                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                -->
      <div class="comment-list" v-if="!commentListloading">
        <template v-for="(item,index) in commentList" :key="index">
          <rcomment :commentData="item"></rcomment>
        </template>
        <!--分页组件区域-->
        <div class="comment-pagination">
          <rpagination
            :total="total"
            @currentpage="changepage"
            :currentPage="reqparmas.page"
          ></rpagination>
        </div>
      </div>
      <!--loading 加载效果-->
      <div class="comment-loading" v-else>
        <rloadinglogo></rloadinglogo>
      </div>
    </div>
  </div>
</template>

<script>
// 评价组件
import rcomment from '@/components/r-comment'
// vue
import { onMounted, reactive, ref, watch } from 'vue'
// api
import { getCommentListdata } from '@/api/goods'
// vue-router
import { useRoute } from 'vue-router'
export default {
  name: "rgoodscomment",
  setup (props) {
    // 评价总数
    const total = ref(0)
    // 当前评价选中下标
    const tagCurrent = ref(0)
    // route
    const route = useRoute()
    // 是否显示loading加载
    const loadingshow = ref(true)
    // 评论列表加载
    const commentListloading = ref(false)
    // 评价请求参数
    const reqparmas = reactive({
      // 当前页码
      page: 1,
      // 每页数量
      pageSize: 10,
      // 是否选择图片
      hasPicture: null,
      // 选择的标签
      tag: null,
      // 排序
      sortField: null
    })
    // 评价列表数据
    const commentList = ref([])
    // 点击标签
    const clickTag = (index) => {
      // 加载效果
      commentListloading.value = true
      // 当前选中
      tagCurrent.value = index
      // 判断是否为图片或者全部评价
      if (props.evaluateData.tags[index].type === 'img') {
        reqparmas.hasPicture = true
      } else if (props.evaluateData.tags[index].type === 'all') {
        reqparmas.tag = null
      } else {
        reqparmas.tag = props.evaluateData.tags[index].title
      }
    }
    // 获取评价列表数据
    const getCommentdata = async () => {
      const { result: { items, counts } } = await getCommentListdata(route.params.id, reqparmas)
      // 评价数量
      total.value = counts
      // 评价列表
      commentList.value = items
      // 隐藏loading加载
      commentListloading.value = false
    }
    // 监听请求参数的改变 如果有改变就重新请求 初始化执行一次
    watch(reqparmas, () => {
      getCommentdata()
    }, {
      immediate: true
    })
    // 切换排序
    const changeSort = (data) => {
      reqparmas.sortField = data
      // 加载效果
      commentListloading.value = true
    }
    onMounted(() => {
      // 加载效果
      setTimeout(() => {
        loadingshow.value = false
      }, 1000)
    })
    // 获取用户点击的分页数据
    const changepage = (data) => {
      reqparmas.page = data
      // 获取tabs距离顶部高度 点击页码返回
      const offsetTop = document.getElementById('tabs').offsetTop
      document.documentElement.scrollTop = offsetTop + 100
    }
    return {
      tagCurrent,
      clickTag,
      reqparmas,
      changeSort,
      commentList,
      loadingshow,
      commentListloading,
      total,
      changepage
    }
  },
  props: {
    evaluateData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    rcomment
  }
}
</script>

<style scoped lang="scss">
.r-goodscomment-components{
  .comment-loading{
    display: flex;
    justify-content: center;
    >div{
      margin-top: 150px;
    }
  }
  .comment-top-header{
    display: flex;
    align-items: center;
    height: 150px;
    .comment-top-left{
      width: 60%;
      display: flex;
      justify-content: center;
      height: 100px;
      ul{
        border-right: 1px solid #f5f5f5;
        display: flex;
        align-items: center;
        li{
          margin: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          h2{
            margin: 0;
            padding: 0;
            font-size: 20px;
            color: $priceColor;
          }
          p{
            font-size: 14px;
            color: #999;
            margin-top: 8px;
          }
          &:last-child{
            padding-right: 40px;
          }
        }
      }
    }
    .comment-top-right{
      display: flex;
      .left-text{
        color: #333;
        font-size: 14px;
        font-weight: bold;
        width: 200px;
        margin-left: 10px;
      }
      .right-list{
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            cursor: pointer;
            width: 130px;
            height: 38px;
            margin-left: 20px;
            margin-bottom: 20px;
            border-radius: 4px;
            border: 1px solid #e4e4e4;
            background: #f5f5f5;
            color: #999;
            text-align: center;
            line-height: 38px;
            &.active{
              background-color: $txColor;
              color: #fff;
              border: 1px solid $txColor;
            }
          }
        }
      }

    }
  }
  .sort-area{
    display: flex;
    align-items: center;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    padding-top: 20px;
    padding-bottom: 20px;
    p{
      margin-left: 40px;
      margin-right: 20px;
      font-weight: bold;
    }
    ul{
      display: flex;
      align-items: center;
      li{
        margin: 0 5px;
        cursor: pointer;
        &.active{
          color: $txColor;
        }
      }
    }
  }
  .comment-list{
    margin-top: 30px;
    padding: 20px;
    box-sizing: border-box;
    .comment-pagination{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }
  }
}
</style>
